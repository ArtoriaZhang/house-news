import{d as r,h as c,c as i,u,r as m,o as p,i as _,B as d}from"./index.js";const g=!1,k=r({__name:"price",setup(f){const{message:n}=c(["message"]),o=l({play(e){n.info(`Play ${e.title}`)}}),a=[{no:3,title:"Wonderwall",length:"4:18"},{no:4,title:"Don't Look Back in Anger",length:"4:48"},{no:12,title:"Champagne Supernova",length:"7:27"}];function l({play:e}){return[{title:"No",key:"no"},{title:"Title",key:"title"},{title:"Length",key:"length"},{title:"Action",key:"actions",render(t){return _(d,{strong:!0,tertiary:!0,size:"small",onClick:()=>e(t)},{default:()=>"Play"})}}]}return(e,t)=>{const s=m("n-data-table");return p(),i(s,{columns:u(o),data:a,pagination:g,bordered:!1},null,8,["columns"])}}});export{k as default};
