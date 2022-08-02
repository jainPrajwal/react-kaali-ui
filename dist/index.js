"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e);function r(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}r(".carousel-nav{position:relative;top:10px}.carousel-button{transform:translateY(0)}.modal{display:block}.tooltip.tooltip-light.tooltip-top:after{border-color:var(--kaali-main-background) transparent transparent transparent}.tooltip.tooltip-light.tooltip-bottom:after{border-color:transparent transparent var(--kaali-main-background) transparent}@media only screen and (max-width:480px){.carousel-track-container{height:100px}.carousel-button{font-size:smaller;padding:4px;transform:translateY(-26px)}.carousel-image{height:100%;object-fit:cover}.carousel{height:140px;width:100%}.carousel-button-left{left:4px}.carousel-button-right{right:4px}.carousel-indicator{height:8px;width:8px}}@media only screen and (min-width:480px) and (max-width:768px){.carousel-track-container{height:150px}.carousel-button{font-size:small;padding:4px;transform:translateY(-30px)}.carousel{height:150px;width:100%}.carousel-button-left{left:-10px}.carousel-button-right{right:-10px}.carousel-indicator{height:8px;width:8px}}");r('.btn>.ripple{animation:ripple-effect .9s ease 1 forwards;background-color:hsla(0,0%,100%,.7);border-radius:9999px;content:"";display:block;height:100%;max-width:60px;opacity:1;position:absolute;width:100%}.overflow-hidden{overflow:hidden}@keyframes ripple-effect{0%{opacity:1;transform:scale(1)}50%{opacity:.375;transform:scale(10)}to{opacity:0;transform:scale(35)}}.btn>.content{position:relative;z-index:2}.btn.btn-danger-outline{background-color:transparent;border:1px solid var(--kaali-danger);color:var(--kaali-danger)}.btn.btn-primary-outline{background-color:transparent;border:1px solid var(--kaali-primary);color:var(--kaali-primary)}.btn.btn-success-outline{background-color:transparent;border:1px solid var(--kaali-success);color:var(--kaali-success)}.btn.btn-warning-outline{background-color:transparent;border:1px solid var(--kaali-warning);color:var(--kaali-warning)}');function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}r(".carousel:hover{cursor:pointer}.Slide{transform:translateX(0);transition:opacity .2s ease,transform .2s ease-in}.Slide[aria-hidden=true]{opacity:0;transform:translateX(100%);z-index:-1}");const o=[{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649341366/photo-1505236273191-1dce886b01e9_ri6g0r.jpg",title:"Lagoon Nebula (Visible-light View)"},{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649341665/photo-1590658268037-6bf12165a8df_nalsgt.jpg",title:"Bubble Nebula (NGC 7635)"},{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649343392/photo-1421757350652-9f65a35effc7_j1pmoh.jpg",title:"Eagle Nebula"}],s=e.createContext(),n=()=>e.useContext(s);r(".alert-wrapper{position:fixed;right:10px;top:10px;width:400px;z-index:5}.alert-content{animation:SlideLeft .4s;animation-fill-mode:forwards}.alert-content.exit{animation:SlideRight .4s;animation-fill-mode:forwards}@keyframes SlideLeft{0%{margin-left:120%}to{margin-left:0}}@keyframes SlideRight{0%{margin-left:0}to{margin-left:120%}}@media only screen and (max-width:480px){.alert-wrapper{right:0;width:100%}}");const i=({toastDispatch:e,id:t})=>{e({type:"SET_EXIT",payload:{id:t}}),setTimeout((()=>{e({type:"REMOVE_TOAST",payload:{id:t}})}),400)},c=({type:t="success",element:r=a.default.createElement(a.default.Fragment,null),id:l,toastDelay:o,exit:s=!1})=>{const{toastDispatch:c}=n();return e.useEffect((()=>{const e=setTimeout((()=>{i({toastDispatch:c,id:l})}),o||2e3);return()=>clearTimeout(e)}),[]),a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:`alert-content alert-${t.toLowerCase()}  ${s?"exit":""}`},r))},d=[],u=(e,t)=>{switch(t.type){case"SET_EXIT":return e.map((e=>e.id===t.payload.id?{...e,exit:!0}:e));case"ADD_TOAST":return[...e,{...t.payload.toast}];case"REMOVE_TOAST":return e.filter((e=>e.id!==t.payload.id));default:return e}};exports.Alert=({type:t,text:r,style:l={}})=>{const[o,s]=e.useState(!1);return e.useEffect((()=>{setTimeout((()=>{o&&s(!1)}),3e3)}),[o]),a.default.createElement("div",{style:{...l},className:`alert-content alert-${t} ${o?"hide":""}`},r,a.default.createElement("span",{className:"btn-dismiss",id:"btn-danger-close",onClick:()=>s(!0)},"×"))},exports.Avatar=({size:e="md",isfallback:t=!1,fallbackText:r="",fallbackColor:l="",showStatus:o=!1,imageUrl:s="https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",typeOfStatus:n="",isVerified:i=!1,sizeOfStatus:c="md",styleStatus:d,styleText:u={},styleImage:m={},styleWrapperAvatar:p={}})=>a.default.createElement(a.default.Fragment,null,t?a.default.createElement("div",{className:"image-container",style:{width:"fit-content",...p}},a.default.createElement("div",{className:`avatar-letter avatar-${e}`,style:{background:l,...u}},r),o&&a.default.createElement("span",{style:{...d},className:`status ${i?"status-bg-verified":`status-bg-${n} `} status-${c} ${i?` status-verified-${c}`:` status-${c}`}`},i&&a.default.createElement("span",{className:`status-verified-checkmark status-verified-checkmark-${c}`}))):a.default.createElement("div",{className:"image-container",style:{width:"fit-content",...p}},a.default.createElement("img",{src:s,alt:"avatar",className:`avatar avatar-${e}`,style:{...m}}),o&&a.default.createElement("span",{className:`status ${i?"status-bg-verified":`status-bg-${n} `} status-${c} ${i?` status-verified-${c}`:` status-${c}`}`},i&&a.default.createElement("span",{style:{...d},className:`status-verified-checkmark status-verified-checkmark-${c}`})))),exports.Button=({variant:t,style:r={},onClickHandler:l,isDisabled:o=!1,children:s})=>{const[n,i]=e.useState({x:-1,y:-1}),[c,d]=e.useState(!1);return e.useEffect((()=>{-1!==n.x&&-1!==n.y?(d(!0),setTimeout((()=>d(!1)),300)):d(!1)}),[n]),e.useEffect((()=>{c||i({x:-1,y:-1})}),[c]),a.default.createElement("button",{className:`btn btn-${t} overflow-hidden`,onClick:e=>{const t=e.target.getBoundingClientRect();i({x:e.clientX-t.left,y:e.clientY-t.top}),"function"==typeof l&&l()},style:{position:"relative",...r},disabled:o},c?a.default.createElement("span",{className:"ripple",style:{left:n.x,top:n.y}}):"",a.default.createElement("span",{className:"content"},s))},exports.Carousel=({timerObj:e,slider:t,...r})=>a.default.createElement("section",l({onMouseEnter:()=>{clearInterval(e.timer)},onMouseLeave:()=>e.handleStartTimer(),className:"carousel"},r)),exports.Checkbox=({isChecked:e=!1,label:t,onChangeHandler:r,isDisabled:l=!1,backgroundColor:o,styleCheckmark:s={},styleLabel:n={},styleCheckbox:i={}})=>a.default.createElement("label",{className:"checkbox-label",style:{...n}},a.default.createElement("input",{type:"checkbox",style:{...i},checked:e,disabled:l,onChange:()=>{"function"==typeof r&&r()}}),a.default.createElement("span",{className:"checkmark",style:{backgroundColor:o,...s}}),t),exports.Controls=e=>a.default.createElement("div",l({className:"controls"},e)),exports.IconButton=e=>a.default.createElement("button",l({className:`carousel-button ${e.children.props.className}`},e)),exports.LeftArrowImage=()=>a.default.createElement("img",{src:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1659455669/left-arrow_rl8sol.png",alt:"Previous Arrow",className:"d-block"}),exports.Loader=({width:e=60,height:t=60,borderTopColor:r,borderWidth:l,styleLoader:o={}})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{style:{width:e,height:t,borderTopColor:r,borderWidth:l,...o},className:"loader-page"})),exports.Modal=({children:e})=>a.default.createElement("div",null,e),exports.ModalBody=({children:e})=>a.default.createElement("div",{className:"modal-body"},e),exports.ModalContainer=({children:e})=>a.default.createElement("div",{className:"modal-container"},e),exports.ModalFooter=({children:e})=>a.default.createElement("div",{className:"modal-footer"},e),exports.ModalHeader=({children:e})=>a.default.createElement("div",{className:"modal-header"},a.default.createElement("div",{className:"header header-tertiary",style:{marginBottom:0}},e)),exports.ModalOverlay=({isHidden:e,children:t})=>a.default.createElement("div",{className:"modal-bg modal-bg-active "+(!0===e?"hide":"")},t),exports.ModalRow=({children:e,extendedClassNames:t})=>a.default.createElement("div",{className:`row ${t}`},e),exports.RadioButton=({color:e,name:t})=>a.default.createElement("label",{className:`checkbox-label checkbox${e}-label`},a.default.createElement("input",{type:"radio",name:t||"defaultName"}),a.default.createElement("span",{className:"checkmark"})),exports.RightArrowImage=()=>a.default.createElement("img",{src:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1659455720/right-arrow_yirsqu.png",alt:"Next Arrow",className:"d-block"}),exports.Slide=({isCurrent:e,takeFocus:t,image:r,id:l,title:o,children:s})=>a.default.createElement("li",{"aria-hidden":!e,className:"carousel-slide Slide",style:{backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center"}}),exports.SlideNav=e=>a.default.createElement("ul",l({className:"carousel-nav"},e)),exports.SlideNavItem=({isCurrent:e,...t})=>a.default.createElement("li",{className:"carousel-nav-item"},a.default.createElement("button",l({className:"carousel-indicator "+(e?"current-slide":"")},t,{"aria-current":e}))),exports.Slides=e=>a.default.createElement("ul",l({className:"carousel-track"},e)),exports.Toast=c,exports.ToastProvider=({children:t})=>{const[r,o]=e.useReducer(u,d);return a.default.createElement(s.Provider,{value:{toastState:r,toastDispatch:o}},a.default.createElement("div",null,a.default.createElement("div",{className:"alert-wrapper"},r.map((e=>a.default.createElement(c,l({},e,{key:e.id}))))),t))},exports.Tooltip=({children:t,position:r="top",mode:l="light",label:o="label",style:s={}})=>{const n={color:"dark"===l?"black":"#f3f4f6",backgroundColor:"dark"===l?"#f3f4f6":"black"},[i,c]=e.useState(!1);return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{onMouseOver:()=>{c(!0)},onMouseLeave:()=>{c(!1)},style:{position:"relative",width:"fit-content"}},t,a.default.createElement("span",{className:`tooltip tooltip-${r} tooltip-${l}`,style:{...n,visibility:i?"visible":"hidden",...s}},o)))},exports.handleCloseToast=i,exports.reducerCallbackFunction=(e,t)=>{switch(t.type){case"NEXT":return{...e,currentIndex:(e.currentIndex+1)%o.length};case"PREV":return{...o,currentIndex:(e.currentIndex-1+o.length)%o.length};case"GOTO":return{currentIndex:t.payload};default:return e}},exports.toastReducer=u,exports.useToast=n;
