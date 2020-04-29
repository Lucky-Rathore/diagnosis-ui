(this["webpackJsonpdiagnosis-ui"]=this["webpackJsonpdiagnosis-ui"]||[]).push([[0],{115:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),i=t.n(o),c=(t(91),t(74)),s=t(32),l=t(25),m=t(72),u=t(162),d=t(5),p=t(163),h=t(166),g=t(34),f=t(161),b=t(75),v=t(4),E=t(156),y=t(164),C=t(153),k=t(168),w=t(154),x=t(155),S=t(64),j=t.n(S),O=[];var P=Object(d.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)}}}))((function(e){var a=e.classes,t=Object(b.a)(e,["classes"]);return r.a.createElement(y.a,Object.assign({variant:"permanent"},t),r.a.createElement(C.a,{disablePadding:!0},r.a.createElement(k.a,{className:Object(v.a)(a.firebase,a.item,a.itemCategory)},"Paperbase"),r.a.createElement(k.a,{className:Object(v.a)(a.item,a.itemCategory)},r.a.createElement(w.a,{className:a.itemIcon},r.a.createElement(j.a,null)),r.a.createElement(x.a,{classes:{primary:a.itemPrimary}},"Project Overview")),O.map((function(e){var t=e.id,n=e.children;return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(k.a,{className:a.categoryHeader},r.a.createElement(x.a,{classes:{primary:a.categoryHeaderPrimary}},t)),n.map((function(e){var t=e.id,n=e.icon,o=e.active;return r.a.createElement(k.a,{key:t,button:!0,className:Object(v.a)(a.item,o&&a.itemActiveItem)},r.a.createElement(w.a,{className:a.itemIcon},n),r.a.createElement(x.a,{classes:{primary:a.itemPrimary}},t))})),r.a.createElement(E.a,{className:a.divider}))}))))})),N=t(116),M=t(157),I=t(65),R=t(66),T=t(76),B=t(73),D=t(46),W=t.n(D),A=t(158),z=t(68),U=t.n(z),H=t(67),F=t.n(H),L=function(e){Object(T.a)(t,e);var a=Object(B.a)(t);function t(e,n){var o;return Object(I.a)(this,t),(o=a.call(this,e,n)).cameraPhoto=null,o.videoRef=r.a.createRef(),o.state={dataUri:"diagnosis.png",isCamStart:!1},o}return Object(R.a)(t,[{key:"componentDidMount",value:function(){this.cameraPhoto=new W.a(this.videoRef.current)}},{key:"startCamera",value:function(e,a){console.log("start Camera"),this.cameraPhoto.startCamera(e,a).then((function(){console.log("camera is started !")})).catch((function(e){console.error("Camera not started!",e)}))}},{key:"startCameraMaxResolution",value:function(e){this.cameraPhoto.startCameraMaxResolution(e).then((function(){console.log("camera is started !")})).catch((function(e){console.error("Camera not started!",e)}))}},{key:"takePhoto",value:function(){var e=this.cameraPhoto.getDataUri({sizeFactor:1});this.setState((function(a){return Object(l.a)({},a,{dataUri:e})})),F.a.post("https://diagnosis-test.herokuapp.com/snippets/",{img:e.substr(22)}).then((function(e){console.log(e)})).catch((function(e){console.log("axios "+e)}))}},{key:"stopCamera",value:function(){console.log("stop Camera"),this.cameraPhoto.stopCamera().then((function(){console.log("Camera stoped!")})).catch((function(e){console.log("No camera to stop!:",e)}))}},{key:"onPhotoClick",value:function(){var e=this;if(this.state.isCamStart){var a=!this.state.isCamStart;this.setState((function(e){return Object(l.a)({},e,{isCamStart:a})}),(function(){console.log(e.state.isCamStart)})),this.takePhoto(),this.stopCamera()}else{var t=!this.state.isCamStart;this.setState((function(e){return Object(l.a)({},e,{isCamStart:t})}),(function(){console.log(e.state.isCamStart)})),this.startCamera(D.FACING_MODES.ENVIRONMENT,{width:320,height:320})}}},{key:"onAnalyse",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("video",{style:{display:this.state.isCamStart?"":"none"},ref:this.videoRef,autoPlay:!0}),r.a.createElement("img",{alt:"",src:this.state.dataUri,width:"320px",height:"235px",style:{display:this.state.isCamStart?"none":""}})),r.a.createElement(M.a,null,r.a.createElement(M.a,{item:!0},r.a.createElement(A.a,{onClick:function(){e.onPhotoClick()}},r.a.createElement(U.a,null)))))}}]),t}(r.a.Component);var G=Object(d.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return r.a.createElement(N.a,{className:a.paper},r.a.createElement(M.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(M.a,{item:!0},r.a.createElement(L,null))))})),J=t(159),Y=t(167),V=t(69),$=t.n(V),_=t(71),q=t.n(_),K=t(160),Q=t(165);var X=Object(d.a)((function(e){return{secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:"rgba(255, 255, 255, 0.7)","&:hover":{color:e.palette.common.white}},button:{borderColor:"rgba(255, 255, 255, 0.7)"}}}))((function(e){var a=e.classes,t=e.onDrawerToggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{color:"primary",position:"sticky",elevation:0},r.a.createElement(K.a,null,r.a.createElement(M.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(h.a,{smUp:!0},r.a.createElement(M.a,{item:!0},r.a.createElement(A.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton},r.a.createElement($.a,null)))),r.a.createElement(M.a,{item:!0,xs:!0}),r.a.createElement(M.a,{item:!0},r.a.createElement(f.a,{className:a.link,href:"#",variant:"body2"},"Go to docs")),r.a.createElement(M.a,{item:!0},r.a.createElement(Q.a,{title:"Alerts \u2022 No alerts"},r.a.createElement(A.a,{color:"inherit"},r.a.createElement(q.a,null)))),r.a.createElement(M.a,{item:!0},r.a.createElement(A.a,{color:"inherit",className:a.iconButtonAvatar},r.a.createElement(Y.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})))))))}));function Z(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(f.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ee=Object(m.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});ee=Object(l.a)({},ee,{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:ee.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:ee.palette.common.white}},MuiTab:{root:Object(s.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},ee.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:ee.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:ee.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var ae={root:{display:"flex",minHeight:"100vh"},drawer:Object(s.a)({},ee.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},main:{flex:1,padding:ee.spacing(6,4),background:"#eaeff1"},footer:{padding:ee.spacing(2),background:"#eaeff1"}};var te=Object(d.a)(ae)((function(e){var a=e.classes,t=r.a.useState(!1),n=Object(c.a)(t,2),o=n[0],i=n[1],s=function(){i(!o)};return r.a.createElement(u.a,{theme:ee},r.a.createElement("div",{className:a.root},r.a.createElement(p.a,null),r.a.createElement("nav",{className:a.drawer},r.a.createElement(h.a,{smUp:!0,implementation:"js"},r.a.createElement(P,{PaperProps:{style:{width:256}},variant:"temporary",open:o,onClose:s})),r.a.createElement(h.a,{xsDown:!0,implementation:"css"},r.a.createElement(P,{PaperProps:{style:{width:256}}}))),r.a.createElement("div",{className:a.app},r.a.createElement(X,{onDrawerToggle:s}),r.a.createElement("main",{className:a.main},r.a.createElement(G,null)),r.a.createElement("footer",{className:a.footer},r.a.createElement(Z,null)))))}));var ne=function(){return r.a.createElement(te,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,a,t){e.exports=t(115)},91:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.ae9a05ab.chunk.js.map