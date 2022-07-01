"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e);function r(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}r(".carousel-nav{position:relative;top:10px}.carousel-button{transform:translateY(0)}.modal{display:block}.tooltip.tooltip-light.tooltip-top:after{border-color:var(--kaali-main-background) transparent transparent transparent}.tooltip.tooltip-light.tooltip-bottom:after{border-color:transparent transparent var(--kaali-main-background) transparent}.tooltip.tooltip-light.tooltip-right:after{border-color:transparent transparent transparent var(--kaali-main-background)}.tooltip.tooltip-light.tooltip-left:after{border-color:transparent var(--kaali-main-background) transparent transparent}@media only screen and (max-width:480px){.carousel-track-container{height:100px}.carousel-button{font-size:smaller;padding:4px;transform:translateY(-26px)}.carousel-image{height:100%;object-fit:cover}.carousel{height:140px;width:100%}.carousel-button-left{left:4px}.carousel-button-right{right:4px}.carousel-indicator{height:8px;width:8px}}@media only screen and (min-width:480px) and (max-width:768px){.carousel-track-container{height:150px}.carousel-button{font-size:small;padding:4px;transform:translateY(-30px)}.carousel{height:150px;width:100%}.carousel-button-left{left:-10px}.carousel-button-right{right:-10px}.carousel-indicator{height:8px;width:8px}}");r('.btn>.ripple{animation:ripple-effect .9s ease 1 forwards;background-color:hsla(0,0%,100%,.7);border-radius:9999px;content:"";display:block;height:20px;opacity:1;position:absolute;width:20px}.overflow-hidden{overflow:hidden}@keyframes ripple-effect{0%{opacity:1;transform:scale(1)}50%{opacity:.375;transform:scale(10)}to{opacity:0;transform:scale(35)}}.btn>.content{position:relative;z-index:2}');function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}r(".carousel:hover{cursor:pointer}.Slide{transform:translateX(0);transition:opacity .2s ease,transform .2s ease-in}.Slide[aria-hidden=true]{opacity:0;transform:translateX(100%);z-index:-1}");const s=[{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649341366/photo-1505236273191-1dce886b01e9_ri6g0r.jpg",title:"Lagoon Nebula (Visible-light View)"},{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649341665/photo-1590658268037-6bf12165a8df_nalsgt.jpg",title:"Bubble Nebula (NGC 7635)"},{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649343392/photo-1421757350652-9f65a35effc7_j1pmoh.jpg",title:"Eagle Nebula"}];exports.Alert=({type:t,text:r,cssAlert:l})=>{const[s,o]=e.useState(!1);return e.useEffect((()=>{setTimeout((()=>{s&&o(!1)}),3e3)}),[s]),a.default.createElement("div",{style:{...l},className:`alert-content alert-${t} ${s?"hide":""}`},r,a.default.createElement("span",{className:"btn-dismiss",id:"btn-danger-close",onClick:()=>o(!0)},"×"))},exports.Avatar=({size:e="md",isfallback:t=!1,fallbackText:r="",fallbackColor:l="var)",showStatus:s=!1,imageUrl:o="https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",typeOfStatus:n="",isVerified:i=!1,sizeOfStatus:c="md",cssStatus:d,cssText:u,cssImage:m,cssWrapperAvatar:p})=>a.default.createElement(a.default.Fragment,null,t?a.default.createElement("div",{className:"image-container",style:{width:"fit-content",...p}},a.default.createElement("div",{className:`avatar-letter avatar-${e}`,style:{background:l,...u}},r),s&&a.default.createElement("span",{style:{...d},className:`status ${i?"status-bg-verified":`status-bg-${n} `} status-${c} ${i?` status-verified-${c}`:` status-${c}`}`},i&&a.default.createElement("span",{className:`status-verified-checkmark status-verified-checkmark-${c}`}))):a.default.createElement("div",{className:"image-container",style:{width:"fit-content",...p}},a.default.createElement("img",{src:o,alt:"avatar",className:`avatar avatar-${e}`,style:{...m}}),s&&a.default.createElement("span",{className:`status ${i?"status-bg-verified":`status-bg-${n} `} status-${c} ${i?` status-verified-${c}`:` status-${c}`}`},i&&a.default.createElement("span",{style:{...d},className:`status-verified-checkmark status-verified-checkmark-${c}`})))),exports.Button=({type:t,cssButton:r={},onClickHandler:l,isDisabled:s=!1,children:o})=>{const[n,i]=e.useState({x:-1,y:-1}),[c,d]=e.useState(!1);return e.useEffect((()=>{-1!==n.x&&-1!==n.y?(d(!0),setTimeout((()=>d(!1)),300)):d(!1)}),[n]),e.useEffect((()=>{c||i({x:-1,y:-1})}),[c]),a.default.createElement("button",{className:`btn btn-${t} overflow-hidden`,onClick:e=>{const t=e.target.getBoundingClientRect();i({x:e.clientX-t.left,y:e.clientY-t.top}),"function"==typeof l&&l()},style:{position:"relative",...r},disabled:s},c?a.default.createElement("span",{className:"ripple",style:{left:n.x,top:n.y}}):"",a.default.createElement("span",{className:"content"},o))},exports.Carousel=({timerObj:e,slider:t,...r})=>a.default.createElement("section",l({onMouseEnter:()=>{clearInterval(e.timer)},onMouseLeave:()=>e.handleStartTimer(),className:"carousel"},r)),exports.Checkbox=({isChecked:e=!1,label:t,onChangeHandler:r,isDisabled:l=!1,backgroundColor:s,cssCheckmark:o={},cssLabel:n={},cssCheckbox:i={}})=>a.default.createElement("label",{className:"checkbox-label",style:{...n}},a.default.createElement("input",{type:"checkbox",style:{...i},checked:e,disabled:l,onChange:()=>{"function"==typeof r&&r()}}),a.default.createElement("span",{className:"checkmark",style:{backgroundColor:s,...o}}),t),exports.Controls=e=>a.default.createElement("div",l({className:"controls"},e)),exports.IconButton=e=>a.default.createElement("button",l({className:`carousel-button ${e.children.props.className}`},e)),exports.LeftArrowImage=()=>a.default.createElement("img",{src:"https://github.com/j836/kaaliUI/blob/main/assets/images/left-arrow.png?raw=true",alt:"Previous Arrow",className:"d-block"}),exports.Loader=({width:e=60,height:t=60,borderTopColor:r,borderWidth:l,cssLoader:s={}})=>a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{style:{width:e,height:t,borderTopColor:r,borderWidth:l,...s},className:"loader-page"})),exports.Modal=({children:e})=>a.default.createElement("div",null,e),exports.ModalBody=({children:e})=>a.default.createElement("div",{className:"modal-body"},e),exports.ModalContainer=({children:e})=>a.default.createElement("div",{className:"modal-container"},e),exports.ModalFooter=({children:e})=>a.default.createElement("div",{className:"modal-footer"},e),exports.ModalHeader=({children:e})=>a.default.createElement("div",{className:"modal-header"},a.default.createElement("div",{className:"header header-tertiary",style:{marginBottom:0}},e)),exports.ModalOverlay=({isHidden:e,children:t})=>a.default.createElement("div",{className:"modal-bg modal-bg-active "+(!0===e?"hide":"")},t),exports.ModalRow=({children:e,extendedClassNames:t})=>a.default.createElement("div",{className:`row ${t}`},e),exports.RadioButton=({color:e,name:t})=>a.default.createElement("label",{className:`checkbox-label checkbox${e}-label`},a.default.createElement("input",{type:"radio",name:t||"defaultName"}),a.default.createElement("span",{className:"checkmark"})),exports.RightArrowImage=()=>a.default.createElement("img",{src:"https://github.com/j836/kaaliUI/blob/main/assets/images/right-arrow.png?raw=true",alt:"Previous Arrow",className:"d-block"}),exports.Slide=({isCurrent:e,takeFocus:t,image:r,id:l,title:s,children:o})=>a.default.createElement("li",{"aria-hidden":!e,className:"carousel-slide Slide",style:{backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center"}}),exports.SlideNav=e=>a.default.createElement("ul",l({className:"carousel-nav"},e)),exports.SlideNavItem=({isCurrent:e,...t})=>a.default.createElement("li",{className:"carousel-nav-item"},a.default.createElement("button",l({className:"carousel-indicator "+(e?"current-slide":"")},t,{"aria-current":e}))),exports.Slides=e=>a.default.createElement("ul",l({className:"carousel-track"},e)),exports.Tooltip=({children:t,position:r="top",mode:l="light",label:s="label",cssTooltip:o={}})=>{const n={color:"dark"===l?"black":"var(--kaali-font-color)",backgroundColor:"dark"===l?"var(--kaali-font-color)":"black"},[i,c]=e.useState(!1);return a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{style:{position:"relative"},onMouseOver:()=>{c(!0)},onMouseLeave:()=>{c(!1)}},t,a.default.createElement("span",{className:`tooltip tooltip-${r} tooltip-${l}`,style:{...n,visibility:i?"visible":"hidden",...o}},s)))},exports.reducerCallbackFunction=(e,t)=>{switch(t.type){case"NEXT":return{...e,currentIndex:(e.currentIndex+1)%s.length};case"PREV":return{...s,currentIndex:(e.currentIndex-1+s.length)%s.length};case"GOTO":return{currentIndex:t.payload};default:return e}};
