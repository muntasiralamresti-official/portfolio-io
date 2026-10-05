"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus, Save, Trash2, LogOut, LayoutDashboard, FolderKanban, BriefcaseBusiness, Brain, Award, UserRound, GraduationCap, Wrench, Globe2 } from "lucide-react";

const tabs=[
  ["overview","Dashboard",LayoutDashboard],["profile","Profile",UserRound],["projects","Projects",FolderKanban],["experience","Experience",BriefcaseBusiness],["skills","Skills",Brain],["certificates","Certificates",Award],["education","Education",GraduationCap],["services","Services",Wrench],["socials","Socials",Globe2]
];

const blank={project:{id:"",title:"",desc:"",image:"",tech:[],github:"",live:"",category:"Web Development",featured:false,completed:true,published:true},experience:{id:"",title:"",org:"",date:"",desc:"",current:false},skill:{id:"",name:"",value:80,category:"Frontend",active:true},certificate:{id:"",title:"",desc:"",image:"",certificate:"",issuer:"",year:""},education:{id:"",degree:"",institution:"",session:"",description:""},service:{id:"",title:"",description:""}};

export default function AdminPage(){
  const [content,setContent]=useState(null),[sha,setSha]=useState(""),[tab,setTab]=useState("overview"),[loading,setLoading]=useState(true),[saving,setSaving]=useState(false),[message,setMessage]=useState("");
  useEffect(()=>{fetch("/api/admin/content").then(r=>r.json()).then(d=>{if(d.content){setContent(d.content);setSha(d.sha)}else setMessage(d.error||"Unable to load")}).finally(()=>setLoading(false))},[]);
  const stats=useMemo(()=>content?[
    ["Projects",content.projects?.length||0],["Completed",content.projects?.filter(x=>x.completed).length||0],["Skills",content.skills?.filter(x=>x.active).length||0],["Experience",content.experience?.length||0],["Certificates",content.certificates?.length||0],["Education",content.education?.length||0]
  ]:[],[content]);

  async function save(next=content){setSaving(true);setMessage("");const r=await fetch("/api/admin/content",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:next,sha})});const d=await r.json();if(r.ok){setMessage("Saved. A new GitHub commit was created; your connected deployment can rebuild automatically.");const fresh=await fetch("/api/admin/content").then(x=>x.json());setContent(fresh.content);setSha(fresh.sha)}else setMessage(d.error||"Save failed");setSaving(false)}
  function update(key,value){setContent(c=>({...c,[key]:value}))}
  function add(key,type){update(key,[...(content[key]||[]),{...blank[type],id:`${type}-${Date.now()}`}])}
  function remove(key,id){update(key,content[key].filter(x=>x.id!==id))}
  function edit(key,id,field,value){update(key,content[key].map(x=>x.id===id?{...x,[field]:value}:x))}
  function logout(){fetch("/api/admin/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"logout"})}).then(()=>location.href="/admin/login")}

  if(loading||!content)return <main className="min-h-screen bg-[#050507] text-white grid place-items-center">{loading?"Loading CMS...":message}</main>;

  return <main className="min-h-screen bg-[#050507] text-white">
    <div className="flex min-h-screen">
      <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-[#08090c] p-5 lg:block"><div className="mb-8 px-2"><div className="text-[9px] uppercase tracking-[.4em] text-[#E62429]">MUNTASIR / CMS</div><div className="mt-2 text-lg font-black">Control Center</div></div><nav className="space-y-1">{tabs.map(([id,label,Icon])=><button key={id} onClick={()=>setTab(id)} className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-xs transition ${tab===id?"bg-[#E62429]/10 text-white":"text-zinc-500 hover:text-white"}`}><Icon size={15}/>{label}</button>)}</nav><button onClick={logout} className="mt-8 flex items-center gap-3 px-3 py-2 text-xs text-zinc-600 hover:text-red-300"><LogOut size={15}/> Logout</button></aside>

      <section className="min-w-0 flex-1 p-5 md:p-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4"><div><div className="text-[9px] uppercase tracking-[.35em] text-[#E62429]">Portfolio Admin</div><h1 className="mt-2 text-3xl font-black uppercase tracking-[-.04em]">{tabs.find(x=>x[0]===tab)?.[1]}</h1></div><div className="flex gap-2"><button onClick={()=>save()} disabled={saving} className="inline-flex items-center gap-2 rounded-full bg-[#E62429] px-4 py-2.5 text-xs font-bold disabled:opacity-60"><Save size={14}/>{saving?"Saving...":"Save Changes"}</button><button onClick={logout} className="rounded-full border border-white/10 px-4 py-2.5 text-xs lg:hidden">Logout</button></div></header>
        {message&&<div className="mb-5 border border-[#E62429]/20 bg-[#E62429]/5 p-3 text-xs text-zinc-300">{message}</div>}

        {tab==="overview"&&<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{stats.map(([label,value])=><div key={label} className="border border-white/10 bg-[#09090c] p-6"><div className="text-[9px] uppercase tracking-[.3em] text-zinc-600">{label}</div><div className="mt-3 text-4xl font-black">{value}</div></div>)}</div>}

        {tab==="profile"&&<FormCard title="Profile"><Field label="Name" value={content.profile.name} onChange={v=>update("profile",{...content.profile,name:v})}/><Field label="Headline" value={content.profile.headline} onChange={v=>update("profile",{...content.profile,headline:v})}/><Field label="Location" value={content.profile.location} onChange={v=>update("profile",{...content.profile,location:v})}/><Field label="Photo URL" value={content.profile.photo} onChange={v=>update("profile",{...content.profile,photo:v})}/><TextField label="Bio" value={content.profile.bio} onChange={v=>update("profile",{...content.profile,bio:v})}/><TextField label="Secondary Bio" value={content.profile.secondaryBio} onChange={v=>update("profile",{...content.profile,secondaryBio:v})}/></FormCard>}

        {["projects","experience","skills","certificates","education","services"].includes(tab)&&<CollectionEditor tab={tab} content={content} add={add} remove={remove} edit={edit}/>}
        {tab==="socials"&&<FormCard title="Social Links">{Object.entries(content.socials).map(([k,v])=><Field key={k} label={k} value={v} onChange={x=>update("socials",{...content.socials,[k]:x})}/>)}</FormCard>}
      </section>
    </div>
  </main>
}

function CollectionEditor({tab,content,add,remove,edit}){
 const map={projects:["projects","project","Project"],experience:["experience","experience","Experience"],skills:["skills","skill","Skill"],certificates:["certificates","certificate","Certificate"],education:["education","education","Education"],services:["services","service","Service"]}; const [key,type,label]=map[tab];
 return <div><div className="mb-4 flex justify-end"><button onClick={()=>add(key,type)} className="inline-flex items-center gap-2 rounded-full border border-[#E62429]/40 px-4 py-2 text-xs text-white"><Plus size={14}/>Add {label}</button></div><div className="space-y-4">{content[key].map((item,i)=><div key={item.id||i} className="border border-white/10 bg-[#09090c] p-5"><div className="mb-4 flex items-center justify-between"><span className="text-[9px] uppercase tracking-[.25em] text-zinc-600">{label} {String(i+1).padStart(2,"0")}</span><button onClick={()=>remove(key,item.id)} className="text-zinc-600 hover:text-red-400"><Trash2 size={15}/></button></div><div className="grid gap-3 md:grid-cols-2">{Object.entries(item).map(([field,value])=>{if(field==="id")return null;if(typeof value==="boolean")return <label key={field} className="flex items-center gap-2 text-xs text-zinc-400"><input type="checkbox" checked={value} onChange={e=>edit(key,item.id,field,e.target.checked)}/>{field}</label>;if(Array.isArray(value))return <Field key={field} label={field} value={value.join(", ")} onChange={v=>edit(key,item.id,field,v.split(",").map(x=>x.trim()).filter(Boolean))}/>;return field==="desc"||field==="description" ? <TextField key={field} label={field} value={value??""} onChange={v=>edit(key,item.id,field,v)}/> : <Field key={field} label={field} value={value??""} onChange={v=>edit(key,item.id,field,field==="value"?Number(v):v)}/>})}</div></div>)}</div></div>
}
function Field({label,value,onChange}){return <label className="block text-xs text-zinc-500"><span className="mb-1.5 block uppercase tracking-[.15em] text-[9px]">{label}</span><input value={value??""} onChange={e=>onChange(e.target.value)} className="h-11 w-full border border-white/10 bg-black/25 px-3 text-sm text-white outline-none focus:border-[#E62429]/50"/></label>}
function TextField({label,value,onChange}){return <label className="block text-xs text-zinc-500 md:col-span-2"><span className="mb-1.5 block uppercase tracking-[.15em] text-[9px]">{label}</span><textarea rows="4" value={value??""} onChange={e=>onChange(e.target.value)} className="w-full border border-white/10 bg-black/25 p-3 text-sm text-white outline-none focus:border-[#E62429]/50"/></label>}
