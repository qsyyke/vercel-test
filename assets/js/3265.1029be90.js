"use strict";(self.webpackChunka=self.webpackChunka||[]).push([[3265],{3265:(a,e,t)=>{let n,o,h,l,i,c,s,r,d,p,u,f;function b(){o.clearRect(0,0,h,l);for(let a in i)i[a].draw();requestAnimationFrame(b)}function m(){let a=this;function e(){a.pos.x=Math.random()*h,a.pos.y=l+100*Math.random(),a.alpha=.1+Math.random()*s,a.alpha_change=2e-4+Math.random()*r,a.scale=.2+Math.random()*d,a.scale_change=Math.random()*p,a.speed=.1+Math.random()*u}a.pos={},e(),this.draw=function(){a.alpha<=0&&e(),a.pos.y-=a.speed,a.alpha-=a.alpha_change,a.scale+=a.scale_change,o.beginPath(),o.arc(a.pos.x,a.pos.y,10*a.scale,0,2*Math.PI,!1),o.fillStyle="rgba("+f+","+a.alpha+")",o.fill()}}function g(a,e,t,g,w,M,y){c=a,s=e,r=t,d=g,p=w,u=M,f=y,function(){n=document.getElementById("aurora-top-bubble-canvas"),function(){h=window.innerWidth,l=window.innerHeight;let a=document.getElementById("aurora-top-bubble-box");h=a.offsetWidth,l=a.offsetHeight,n.width=h,n.height=l}(),o=n.getContext("2d"),i=[];let a=h*c;for(let e=0;e<a;e++){let a=new m;i.push(a)}b()}()}t.r(e),t.d(e,{bubble:()=>g})}}]);