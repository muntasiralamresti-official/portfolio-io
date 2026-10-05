import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";

const OWNER = "muntasiralamresti-official";
const REPO = "portfolio-io";
const PATH = "data/portfolio.json";
const BRANCH = "master";

async function github(path, options={}) {
  const token = process.env.GITHUB_CONTENT_TOKEN;
  if (!token) throw new Error("GITHUB_CONTENT_TOKEN is missing");
  return fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}?ref=${BRANCH}`, {
    ...options,
    headers: {
      Accept:"application/vnd.github+json",
      Authorization:`Bearer ${token}`,
      "X-GitHub-Api-Version":"2026-03-10",
      ...(options.headers || {})
    },
    cache:"no-store"
  });
}

export async function GET() {
  if (!await isAuthenticated()) return NextResponse.json({error:"Unauthorized"},{status:401});
  const res = await github(PATH);
  if (!res.ok) return NextResponse.json({error:"Unable to read repository content"},{status:res.status});
  const data = await res.json();
  const decoded = Buffer.from(data.content.replace(/\n/g,""),"base64").toString("utf8");
  return NextResponse.json({content:JSON.parse(decoded),sha:data.sha});
}

export async function PUT(request) {
  if (!await isAuthenticated()) return NextResponse.json({error:"Unauthorized"},{status:401});
  const {content,sha} = await request.json();
  if (!content || !sha) return NextResponse.json({error:"content and sha are required"},{status:400});
  const encoded = Buffer.from(JSON.stringify(content,null,2)+"\n","utf8").toString("base64");
  const res = await github(PATH,{method:"PUT",body:JSON.stringify({
    message:"content: update portfolio from admin panel",
    content:encoded,
    sha,
    branch:BRANCH,
    committer:{name:"Portfolio Admin",email:"admin@portfolio.local"}
  })});
  const result = await res.json();
  if (!res.ok) return NextResponse.json({error:result.message || "GitHub update failed"},{status:res.status});
  return NextResponse.json({ok:true,commit:result.commit?.sha || null});
}