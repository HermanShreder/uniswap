import{s as j}from"./rolldown-runtime-Bpprpzce.js";import{t as F}from"./react-D7hXOYnT.js";import{t as R}from"./jsx-runtime-DXSXxcGM.js";import{s as r}from"./TextCompat.web-BRDKgJy1.js";import{t as q}from"./useSporeColors.web-BGqpk4Q8.js";var u=j(F()),n=R();function S({chartModel:e,isHovering:o,isZoomed:b,hoverCoordinates:f,chartContainer:i,overrideColor:a,dataKey:m,coordinateOverride:p}){const y=q(),[c,C]=(0,u.useState)(null),[g,x]=(0,u.useState)(!1);if((0,u.useEffect)(()=>{if(!("getLastPointCoordinates"in e)||!m)return;const d=()=>{const _=e.getLastPointCoordinates?.();C(_??null)};let s=null,t=null;return t=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{d(),t=null})}),i&&(s=new ResizeObserver(()=>{t!==null&&cancelAnimationFrame(t),x(!0),t=requestAnimationFrame(()=>{"fitContent"in e&&typeof e.fitContent=="function"&&e.fitContent(),t=requestAnimationFrame(()=>{d(),x(!1),t=null})})}),s.observe(i)),()=>{t!==null&&cancelAnimationFrame(t),s&&s.disconnect()}},[e,i,m]),g||b||o&&!f||!o&&!p&&!c)return null;const l=o?f:p??c;return l?(0,n.jsxs)(r,{position:"absolute",pointerEvents:"none",style:{left:`${l.x}px`,top:`${l.y}px`,transform:"translate(-50%, -50%)",zIndex:3},children:[(0,n.jsx)(r,{position:"absolute",style:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:a,opacity:.3,transform:"translate(-50%, -50%)",animation:"pulse 2s ease-in-out infinite"}}),(0,n.jsx)(r,{position:"absolute",style:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:a,opacity:.3,transform:"translate(-50%, -50%)",animation:"pulse 2s ease-in-out infinite 0.5s"}}),(0,n.jsx)(r,{position:"absolute",style:{width:"10px",height:"10px",borderRadius:"50%",backgroundColor:a,left:"50%",top:"50%",borderWidth:"2px",borderColor:y.surface1.val,transform:"translate(-50%, -50%)"}}),(0,n.jsx)("style",{children:`
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.5;
            }
            75% {
              transform: translate(-50%, -50%) scale(3);
              opacity: 0;
            }
            100% {
              transform: translate(-50%, -50%) scale(3);
              opacity: 0;
            }
          }
        `})]}):null}export{S as t};
