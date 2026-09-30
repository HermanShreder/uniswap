import{t as m}from"./jsx-runtime-DXSXxcGM.js";import{t as d}from"./useInjectSingleStylesheet.web-CTnfyZXp.js";import{g as a,p as o,s as p,t as l}from"./createIcon-Biqa7yHC.js";var e=m(),[s,j]=l({name:"CircleSpinner",getIcon:t=>(0,e.jsxs)(a,{viewBox:"0 0 24 24",fill:"none",...t,children:[(0,e.jsx)(o,{d:"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z",stroke:"currentColor",opacity:"0.1",strokeWidth:"3",strokeLinecap:"round"}),(0,e.jsx)(o,{d:"M21 12C21 7.02944 16.9706 3 12 3",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]})}),[h,v]=l({name:"EmptySpinner",getIcon:t=>(0,e.jsx)(a,{viewBox:"0 0 20 20",fill:"none",...t,children:(0,e.jsx)(p,{cx:"10",cy:"10",r:"8",stroke:"currentColor",strokeOpacity:"0.24",strokeWidth:"3"})})}),x="__spinning_loader_styles__",g=`
  @keyframes rotate360 {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
  }

  .RotateElement {
      animation: rotate360 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;
      transform-origin: center center;
  }
`,r={alignItems:"stretch",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,minHeight:0,minWidth:0,position:"relative"};function y({size:t=20,disabled:n,color:i,unstyled:c}){return d({id:x,css:g,active:!n}),n?(0,e.jsx)(h,{color:"$neutral3",size:t}):c?(0,e.jsx)("div",{className:"RotateElement",style:r,children:(0,e.jsx)(s,{color:i,size:t})}):(0,e.jsx)("div",{style:{...r,alignItems:"center",height:t,justifyContent:"center",marginLeft:2,marginRight:2,width:t},children:(0,e.jsx)("div",{style:{...r,height:t,minHeight:8,minWidth:8,padding:1.66667,width:t},children:(0,e.jsx)("div",{className:"RotateElement",style:{...r,position:"absolute"},children:(0,e.jsx)(s,{color:i,size:t})})})})}export{y as t};
