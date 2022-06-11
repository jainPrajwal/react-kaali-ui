import e,{useState as t,useEffect as a}from"react";function r(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}r('@import url("https://kaaliui.netlify.app/kaali.css");.carousel-nav{position:relative;top:10px}.carousel-button{transform:translateY(0)}.modal{display:block}.tooltip.tooltip-light.tooltip-top:after{border-color:var(--kaali-main-background) transparent transparent transparent}.tooltip.tooltip-light.tooltip-bottom:after{border-color:transparent transparent var(--kaali-main-background) transparent}.tooltip.tooltip-light.tooltip-right:after{border-color:transparent transparent transparent var(--kaali-main-background)}.tooltip.tooltip-light.tooltip-left:after{border-color:transparent var(--kaali-main-background) transparent transparent}@media only screen and (max-width:480px){.carousel-track-container{height:100px}.carousel-button{font-size:smaller;padding:4px;transform:translateY(-26px)}.carousel-image{height:100%;object-fit:cover}.carousel{height:140px;width:100%}.carousel-button-left{left:4px}.carousel-button-right{right:4px}.carousel-indicator{height:8px;width:8px}}@media only screen and (min-width:480px) and (max-width:768px){.carousel-track-container{height:150px}.carousel-button{font-size:small;padding:4px;transform:translateY(-30px)}.carousel{height:150px;width:100%}.carousel-button-left{left:-10px}.carousel-button-right{right:-10px}.carousel-indicator{height:8px;width:8px}}');const l=({type:r,text:l})=>{const[s,n]=t(!1);return a((()=>{setTimeout((()=>{s&&n(!1)}),3e3)}),[s]),e.createElement("div",{className:`alert-content alert-${r} ${s?"hide":""}`},l,e.createElement("span",{className:"btn-dismiss",id:"btn-danger-close",onClick:()=>n(!0)},"×"))},s=({size:t="md",isfallback:a=!1,fallbackText:r="",fallbackColor:l="var)",showStatus:s=!1,imageUrl:n="https://cdn1.vectorstock.com/i/1000x1000/23/70/man-avatar-icon-flat-vector-19152370.jpg",typeOfStatus:o="",isVerified:i=!1,sizeOfStatus:c="md"})=>e.createElement(e.Fragment,null,e.createElement("link",{rel:"stylesheet",href:"https://kaaliui.netlify.app/components/avatar/avatar.css"}),a?e.createElement("div",{className:"image-container",style:{width:"fit-content"}},e.createElement("div",{className:`avatar-letter avatar-${t}`,style:{background:l}},r),s&&e.createElement("span",{className:`status ${i?"status-bg-verified":`status-bg-${o} `} status-${c} ${i?` status-verified-${c}`:` status-${c}`}`},i&&e.createElement("span",{class:`status-verified-checkmark status-verified-checkmark-${c}`}))):e.createElement("div",{className:"image-container",style:{width:"fit-content"}},e.createElement("img",{src:n,alt:"avatar",className:`avatar avatar-${t}`}),s&&e.createElement("span",{className:`status ${i?"status-bg-verified":`status-bg-${o} `} status-${c} ${i?` status-verified-${c}`:` status-${c}`}`},i&&e.createElement("span",{class:`status-verified-checkmark status-verified-checkmark-${c}`})))),n=({type:t})=>e.createElement("button",{class:`btn btn-${t}`},`${t}`," button");function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}const i=t=>e.createElement("div",o({className:"controls"},t)),c=t=>e.createElement("button",o({className:`carousel-button ${t.children.props.className}`},t)),m=()=>e.createElement("img",{src:"https://github.com/j836/kaaliUI/blob/main/assets/images/left-arrow.png?raw=true",alt:"Previous Arrow",className:"d-block"}),d=()=>e.createElement("img",{src:"https://github.com/j836/kaaliUI/blob/main/assets/images/right-arrow.png?raw=true",alt:"Previous Arrow",className:"d-block"});r(".carousel:hover{cursor:pointer}.Slide{transform:translateX(0);transition:opacity .2s ease,transform .2s ease-in}.Slide[aria-hidden=true]{opacity:0;transform:translateX(100%);z-index:-1}");const u=({isCurrent:t,takeFocus:a,image:r,id:l,title:s,children:n})=>e.createElement("li",{"aria-hidden":!t,className:"carousel-slide Slide",style:{backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"center"}}),p=t=>e.createElement("ul",o({className:"carousel-nav"},t)),h=({isCurrent:t,...a})=>e.createElement("li",{className:"carousel-nav-item"},e.createElement("button",o({className:"carousel-indicator "+(t?"current-slide":"")},a,{"aria-current":t}))),g=t=>e.createElement("ul",o({className:"carousel-track"},t)),b=({timerObj:t,slider:a,...r})=>e.createElement("section",o({onMouseEnter:()=>{clearInterval(t.timer)},onMouseLeave:()=>t.handleStartTimer(),className:"carousel"},r)),v=[{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649341366/photo-1505236273191-1dce886b01e9_ri6g0r.jpg",title:"Lagoon Nebula (Visible-light View)"},{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649341665/photo-1590658268037-6bf12165a8df_nalsgt.jpg",title:"Bubble Nebula (NGC 7635)"},{img:"https://res.cloudinary.com/dmk11fqw8/image/upload/v1649343392/photo-1421757350652-9f65a35effc7_j1pmoh.jpg",title:"Eagle Nebula"}],f=(e,t)=>{switch(t.type){case"NEXT":return{...e,currentIndex:(e.currentIndex+1)%v.length};case"PREV":return{...v,currentIndex:(e.currentIndex-1+v.length)%v.length};case"GOTO":return{currentIndex:t.payload};default:return e}},k=({children:t})=>e.createElement("div",null,t),E=({children:t})=>e.createElement("div",{className:"modal-body"},t),x=({children:t})=>e.createElement("div",{className:"modal-container"},t),N=({children:t,handleModalClose:a})=>e.createElement("div",{className:"modal-header"},e.createElement("div",{className:"header header-tertiary",style:{marginBottom:0}},t),e.createElement("span",{id:"btn-modal-close",onClick:()=>a()},"×")),y=({isHidden:t,children:a})=>e.createElement("div",{className:"modal-bg modal-bg-active "+(!0===t?"hide":"")},a),$=({children:t,extendedClassNames:a})=>e.createElement("div",{className:`row ${a}`},t),w=({children:t})=>e.createElement("div",{className:"modal-footer"},t),C=()=>{const[a,r]=t(!0);return e.createElement("label",{className:"checkbox-label"},e.createElement("input",{type:"checkbox",checked:a,onChange:()=>{r((e=>!e))}}),e.createElement("span",{className:"checkmark"}))},j=({color:t,name:a})=>e.createElement("label",{class:`checkbox-label checkbox${t}-label`},e.createElement("input",{type:"radio",name:a||"defaultName"}),e.createElement("span",{class:"checkmark"})),S=({children:a,position:r="top",mode:l="light",label:s="label",css:n={}})=>{const o={color:"dark"===l?"black":"var(--kaali-font-color)",backgroundColor:"dark"===l?"var(--kaali-font-color)":"black"},[i,c]=t(!1);return e.createElement(e.Fragment,null,e.createElement("span",{style:{position:"relative"},onMouseOver:()=>{c(!0)},onMouseLeave:()=>{c(!1)}},a,e.createElement("span",{className:`tooltip tooltip-${r} tooltip-${l}`,style:{...o,...n,visibility:i?"visible":"hidden"}},s)))},T=({width:e=60,height:t=60,borderTopColor:a})=>React.createElement(React.Fragment,null,React.createElement("div",{className:"loader-page",style:{width:e,height:t,borderTopColor:a}}));export{l as Alert,s as Avatar,n as Button,b as Carousel,C as Checkbox,i as Controls,c as IconButton,m as LeftArrowImage,T as Loader,k as Modal,E as ModalBody,x as ModalContainer,w as ModalFooter,N as ModalHeader,y as ModalOverlay,$ as ModalRow,j as RadioButton,d as RightArrowImage,u as Slide,p as SlideNav,h as SlideNavItem,g as Slides,S as Tooltip,f as reducerCallbackFunction};
