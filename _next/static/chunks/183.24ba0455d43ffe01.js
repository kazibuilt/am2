"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{640:function(e,r,t){var n=t(5893),l=t(4179);r.Z=e=>{let{children:r,href:t,target:i,mode:o="white",...a}=e;return(0,n.jsx)(l.Z,{href:t,target:i,className:"button-"+o+" inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] body-mono-10 uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",...a,children:r})}},1183:function(e,r,t){t.r(r);var n=t(5893),l=t(7294),i=t(6038),o=t(6546),a=t(640),s=t(26);r.default=e=>{let{slice:r,slices:c,index:u}=e,d=(0,l.useRef)(!1),m=(0,l.useRef)(!1),f=(0,l.useRef)(!1),p=(0,l.useRef)(!1),h=(0,l.useRef)(!1),w=(0,l.useRef)(!1),x=(0,l.useRef)(!1),[g,b]=(0,l.useState)(!1),[v,y]=(0,l.useState)(0);(0,l.useEffect)(()=>()=>{window.removeEventListener("resize",_)},[]),(0,l.useEffect)(()=>{let e=t(8041);document.fonts.ready.then(()=>{b(!0)}),window.addEventListener("resize",_),h.current=new e({target:p.current,by:"words"})[0].words;let r=j();w.current=o.ScrollTrigger.create({trigger:d.current,start:()=>window.innerWidth>1023?"top bottom":"30% bottom",end:()=>window.innerWidth>1023?"+=".concat(window.innerHeight):"+=".concat(.7*window.innerHeight),animation:r,scrub:!0}),d.current.style.height="".concat(window.innerHeight,"px");let{scaleAnimation:n,parallaxAnimation:l}=N();return x.current=o.ScrollTrigger.create({trigger:d.current,start:"top top",end:()=>"+=".concat(.5*d.current.clientHeight),animation:n,scrub:!0}),o.ScrollTrigger.create({trigger:d.current,start:"top top",animation:l,scrub:!0}),()=>{w.current.kill(),w.current=null,x.current.kill(),x.current=null}},[g,v]);let j=()=>{let e=i.p8.timeline();return e.set(h.current,{yPercent:e=>70+50*e},0).fromTo(m.current,{y:()=>window.innerWidth>1023?"-60%":"0"},{y:0,ease:"none"},0).to(h.current,{yPercent:0,ease:"none"},0),e},N=()=>{let e=i.p8.timeline();e.to(f.current,{scale:window.innerWidth<768?.965:.972,borderRadius:0,ease:"none"},0);let r=i.p8.timeline();return r.fromTo(m.current,{y:0},{y:window.innerWidth/15,ease:"none"},0),{scaleAnimation:e,parallaxAnimation:r}},_=()=>{y(window.innerWidth)};return(0,n.jsx)("section",{style:{zIndex:c.length-u},ref:d,className:"h-screen min-h-[600px] landscape:min-h-[950px] lg:!min-h-[600px] bg-dark_beige relative overflow-hidden",children:(0,n.jsx)("div",{ref:f,className:"wrapper origin-bottom w-full h-full overflow-hidden",children:(0,n.jsxs)("div",{ref:m,className:"relative w-full h-full md:pt-[22.5rem]",children:[(0,n.jsx)("div",{className:"absolute left-0 top-0 w-full h-full -z-1 pointer-events-none",children:r.primary.background_image.url&&(0,n.jsx)(s.Z,{field:r.primary.background_image,fallbackAlt:"",className:"w-full h-full object-cover",sizes:"(max-width: 768px) 96vw, 100vw"})}),(0,n.jsx)("div",{className:"absolute left-0 top-0 w-full h-full z-1 pointer-events-none",children:r.primary.foreground_image.url&&(0,n.jsx)(s.Z,{field:r.primary.foreground_image,fallbackAlt:"",className:"w-full h-full object-cover",sizes:"(max-width: 768px) 96vw, 100vw"})}),(0,n.jsxs)("div",{className:"absolute top-[30%] landscape:top-[43%] md:top-[45.5%] md:landscape:top-[38%] lg:top-[47%] xl:top-[34%] left-0 w-full flex flex-col items-center",children:[(0,n.jsx)("div",{className:"body-mono-14 text-real_white uppercase text-center mb-32",children:r.primary.suptitle}),(0,n.jsx)("div",{ref:p,className:"text-center heading-164 text-white whitespace-nowrap flex flex-wrap justify-center w-full gap-x-[0.75rem] lg:gap-x-[2rem] [&>*:first-child]:w-full md:[&>*:first-child]:w-auto",children:r.primary.title}),(0,n.jsxs)("div",{className:"flex flex-col items-center mt-[5.6rem] md:mt-[7rem] lg:mt-[15rem] xl:mt-[10.4rem] body-mono-10 z-1",children:[(0,n.jsx)(a.Z,{href:"preorder"===r.primary.button.type?"/underconstruction":r.primary.button.url,children:r.primary.button_title}),r.primary.bottom_text&&(0,n.jsx)("div",{className:"mt-16 md:mt-20 text-white",children:r.primary.bottom_text})]})]})]})})})}}}]);