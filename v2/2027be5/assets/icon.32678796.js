import{d as s,e as a,f as e,g as r,h as t,i as n,j as c,k as o,l as i,m as p,n as d,o as u,p as x,q as f,r as m}from"./index.5a620c89.js";import{a as l}from"./index.esm.bed1302f.js";const j={"dmg,ipa":d,exe:u,"zip,gz,rar,7z,tar,jar,xz":x,apk:l,db:f,md:m},g=(d,u)=>{for(const[s,a]of Object.entries(j))if(s.split(",").includes(u.toLowerCase()))return a;switch(d){case 1:return p;case 2:return"doc"===u||"docx"===u?n:"xls"===u||"xlsx"===u?c:"ppt"===u||"pptx"===u?o:i;case 3:return t;case 4:return r;case 5:return e;case 6:return a;default:return s}};export{g};
