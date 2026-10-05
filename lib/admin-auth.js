import { cookies } from "next/headers";

const COOKIE = "portfolio_admin_session";

function bytesToBase64Url(bytes){return Buffer.from(bytes).toString("base64url");}
function base64UrlToBytes(value){return Buffer.from(value,"base64url");}

async function sign(value){
  const secret=process.env.ADMIN_SESSION_SECRET;
  if(!secret) return null;
  const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);
  return bytesToBase64Url(await crypto.subtle.sign("HMAC",key,new TextEncoder().encode(value)));
}

export async function createSession(){
  const signature=await sign("admin");
  if(!signature) throw new Error("ADMIN_SESSION_SECRET is missing");
  const expires=Date.now()+1000*60*60*24*7;
  const payload=`admin.${expires}`;
  const token=`${payload}.${await sign(payload)}`;
  const jar=await cookies();
  jar.set(COOKIE,token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*24*7});
}

export async function destroySession(){
  const jar=await cookies();
  jar.set(COOKIE,"",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:0});
}

export async function isAuthenticated(){
  try{
    const jar=await cookies();
    const token=jar.get(COOKIE)?.value;
    if(!token||!process.env.ADMIN_SESSION_SECRET) return false;
    const [prefix,expires,signature]=token.split(".");
    if(prefix!=="admin"||!expires||!signature||Number(expires)<Date.now()) return false;
    const expected=await sign(`admin.${expires}`);
    if(!expected) return false;
    const a=base64UrlToBytes(signature),b=base64UrlToBytes(expected);
    if(a.length!==b.length)return false;
    let diff=0;for(let i=0;i<a.length;i++)diff|=a[i]^b[i];
    return diff===0;
  }catch{return false;}
}

export function checkPassword(password){
  return Boolean(process.env.ADMIN_PASSWORD)&&password===process.env.ADMIN_PASSWORD;
}
