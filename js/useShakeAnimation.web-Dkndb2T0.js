import{s as u}from"./rolldown-runtime-Bpprpzce.js";import{t as f}from"./react-D7hXOYnT.js";import{t as S}from"./useInjectSingleStylesheet.web-CTnfyZXp.js";var t=u(f()),a="uniswap-shake-animation",o=300,l=`
    @keyframes ${a} {
      0%, 100% { transform: translateX(0); }
      16.67% { transform: translateX(5px); }
      33.33% { transform: translateX(-5px); }
      50% { transform: translateX(5px); }
      66.67% { transform: translateX(-5px); }
      83.33% { transform: translateX(5px); }
    }
  `,E=()=>{S({id:a,css:l});const[e,s]=(0,t.useState)(!1),r=(0,t.useRef)(!1),n=(0,t.useCallback)(()=>{r.current||(r.current=!0,s(!0))},[]);(0,t.useEffect)(()=>{if(!e)return;const m=setTimeout(()=>{s(!1),r.current=!1},o);return()=>clearTimeout(m)},[e]);const i=(0,t.useMemo)(()=>e?{animation:`${a} ${o}ms ease-in-out`}:{},[e]);return(0,t.useMemo)(()=>({shakeStyle:i,triggerShakeAnimation:n}),[i,n])};export{E as t};
