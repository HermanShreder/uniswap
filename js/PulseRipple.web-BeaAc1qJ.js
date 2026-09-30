import{t as s}from"./jsx-runtime-DXSXxcGM.js";import{s as i}from"./TextCompat.web-BRDKgJy1.js";var r=s(),a=`
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`;function l({rippleColor:t,size:e=24}){return t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsx)(i,{"data-testid":"icon-ripple-animation",children:(0,r.jsx)(i,{borderRadius:e/2,borderWidth:"$spacing1",height:e,position:"absolute",style:{borderColor:t,animation:"pulse 1s linear infinite"},width:e})})]}):null}export{l as t};
