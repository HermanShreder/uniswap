import{s as c}from"./rolldown-runtime-Bpprpzce.js";import{t as d}from"./react-D7hXOYnT.js";import{t as p}from"./jsx-runtime-DXSXxcGM.js";import{s as v}from"./TextCompat.web-BRDKgJy1.js";import{t as _}from"./useBooleanState-sAM74d9j.js";import{t as x}from"./useSporeColors.web-BGqpk4Q8.js";var y=c(d()),r=p(),F=({wiggleAmount:e=20})=>`
  @keyframes wiggle {
    0% {
      transform: rotate(0deg) scale(1);
    }
    30% {
      transform: rotate(${e}deg) scale(1.05);
    }
    60% {
      transform: rotate(-${e/2}deg) scale(1.1);
    }
    100% {
      transform: rotate(0deg) scale(1.06);
    }
  }
`,j=(0,y.forwardRef)(({wiggleAmount:e=20,iconColor:s,children:i,isAnimating:t,...n},m)=>{const{value:l,setTrue:g,setFalse:f}=_(!1),o=x(),u=F({wiggleAmount:e}),a=t!==void 0?t:l;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:u}),(0,r.jsx)(v,{ref:m,onHoverIn:g,onHoverOut:f,...n,style:{animationName:a?"wiggle":"none",animationDuration:"0.5s",animationTimingFunction:"ease-in-out",animationFillMode:"forwards",animationIterationCount:1,animationDirection:"normal",transition:"fill 0.3s ease-in-out",fill:a&&s||o.neutral1.get()},children:i})]})});j.displayName="Wiggle";export{j as t};
