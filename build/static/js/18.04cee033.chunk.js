(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[18],{1011:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n(14),c=n(9),i=n(13),r=n(1),s=n.n(r),l=n(580),u=n(1045),d=n(1001),b=n(1015),j=n(23),f=n(972),p=n(738),h=n(978),O=n(979),x=n(980),g=n(981),m=n(982),v=n(983),y=n(984),S=n(1048),C=n(985),k=n(976),w=n(774),N=n.n(w),I=n(775),D=n.n(I),A=n(486),F=n(1030),z=n(1007),R=n(2),B=function(e){var t=e.onFilesSelected,n=Object(r.useState)(!1),a=Object(i.a)(n,2),o=a[0],c=a[1],s=Object(r.useState)(null),l=Object(i.a)(s,2),u=l[0],d=l[1],b=Object(r.useRef)(null),j=function(e){for(var n=0;n<e.length;n++){if("application/pdf"!==e[n].type)return d("Solo se permiten archivos PDF."),void(b.current.value="");if(e[n].size>10485760)return d("No se pueden subir archivos mayores a 10MB."),void(b.current.value="")}t(e),b.current.value=""};return Object(R.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"620px",padding:"120px",border:"5px dashed #ccc",textAlign:"center",cursor:"pointer",background:o?"#f2f2f2":"white",borderRadius:"4px"},onDrop:function(e){e.preventDefault();var t=e.dataTransfer.files;j(t),c(!1)},onDragOver:function(e){e.preventDefault(),c(!0)},onDragLeave:function(){c(!1)},children:[Object(R.jsx)("div",{style:{marginBottom:"10px"},children:"Arrastra y suelta archivos PDF aqu\xed"}),Object(R.jsx)("div",{style:{marginBottom:"10px"},children:"o"}),Object(R.jsx)(A.a,{variant:"contained",style:{backgroundColor:"#ff9e43"},onClick:function(){b.current.click()},children:"Selecciona archivos"}),Object(R.jsx)("input",{type:"file",accept:".pdf",multiple:!0,onChange:function(e){var t=e.target.files;j(t)},ref:b,style:{display:"none"}}),Object(R.jsx)(F.a,{open:!!u,autoHideDuration:6e3,onClose:function(){return d(null)},anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(R.jsx)(z.a,{onClose:function(){return d(null)},severity:"Solo se permiten archivos PDF."===u?"warning":"error",children:u})})]})},P=n(910),T=n(1016),H=n(735),J=n.n(H),L=Object(f.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function W(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var M=function(e){var t=e.isOpen,n=e.onClose,a=e.onSave,o=L(),c=s.a.useState(W),l=Object(i.a)(c,1)[0],u=Object(r.useRef)({});return Object(R.jsx)(T.a,{open:t,onClose:n,children:Object(R.jsxs)("div",{style:l,className:o.paper,children:[Object(R.jsx)("h2",{children:"Firma Aqu\xed"}),Object(R.jsx)(J.a,{ref:u,canvasProps:{width:500,height:200,className:"sigCanvas",onMouseDown:function(e){return e.stopPropagation()}}}),Object(R.jsxs)("div",{children:[Object(R.jsx)(k.a,{onClick:function(){u.current.clear()},children:"Borrar"}),Object(R.jsx)(k.a,{onClick:function(){a(u.current.getTrimmedCanvas().toDataURL("image/png")),n()},children:"Guardar"}),Object(R.jsx)(k.a,{onClick:n,children:"Cancelar"})]})]})})},E={width:200,height:50},V=function(e){var t=e.id,n=e.documentId,o=e.pageNumber,s=e.onRemove,l=e.initialPosition,u=e.onPositionChange,d=localStorage.getItem("signature-".concat(n,"-").concat(o,"-").concat(t)),b=Object(r.useState)(d),j=Object(i.a)(b,2),f=j[0],p=j[1],h=Object(r.useState)(!1),O=Object(i.a)(h,2),x=O[0],g=O[1],m=Object(r.useState)(function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}()),v=Object(i.a)(m,2),y=v[0],S=v[1],C=Object(r.useState)(Object(c.a)({width:E.width,height:E.height},l)),k=Object(i.a)(C,2),w=k[0],N=k[1],I=Object(r.useState)(null),D=Object(i.a)(I,2),A=D[0],F=D[1];Object(r.useEffect)((function(){var e=localStorage.getItem("signature-size-".concat(n,"-").concat(o,"-").concat(t));e&&N(JSON.parse(e))}),[t,n,o]);var z=function(){return g(!0)},B={border:"1px solid black",width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",backgroundColor:f?"transparent":y,backgroundImage:"url(".concat(f,")"),backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},T={position:"absolute",width:"10px",height:"10px",background:"#fff",border:"1px solid #007bff",borderRadius:"50%"},H=Object(a.a)({position:"absolute",right:"30px",top:"-15px",zIndex:100,background:"red",color:"white",border:"none",cursor:"pointer",padding:"2px 6px",borderRadius:"50%",fontSize:"12px",lineHeight:"14px",textAlign:"center",height:"20px",width:"20px",display:"flex",alignItems:"center",justifyContent:"center"},"zIndex",1e3);return Object(R.jsxs)(P.a,{size:{width:w.width,height:w.height},position:{x:w.x,y:w.y},default:Object(c.a)(Object(c.a)({},E),{},{x:l.x,y:l.y}),bounds:".documentContainer",minWidth:32.1094,minHeight:30.8594,maxWidth:380.172,maxHeight:200.431,onResizeStop:function(e,a,i,r,s){var l=Object(c.a)({width:i.offsetWidth,height:i.offsetHeight},s);N(l),localStorage.setItem("signature-size-".concat(n,"-").concat(o,"-").concat(t),JSON.stringify(l))},onDragStop:function(e,a){var i=Object(c.a)(Object(c.a)({},w),{},{x:a.x,y:a.y});N(i),localStorage.setItem("signature-size-".concat(n,"-").concat(o,"-").concat(t),JSON.stringify(i)),u&&u(a.x,a.y)},enableResizing:{topLeft:!0,topRight:!0,bottomLeft:!0,bottomRight:!0},lockAspectRatio:!0,children:[Object(R.jsxs)("div",{style:B,onDoubleClick:z,onTouchEnd:function(e){var t=Date.now();A&&t-A<300?z():F(t)},children:[!f&&Object(R.jsx)("span",{children:"Signature"}),Object(R.jsx)("button",{style:H,onClick:s,onTouchEnd:function(e){e.stopPropagation(),s()},children:"X"}),Object(R.jsx)("div",{style:Object(c.a)(Object(c.a)({},T),{},{top:"-5px",left:"-5px"})}),Object(R.jsx)("div",{style:Object(c.a)(Object(c.a)({},T),{},{top:"-5px",right:"-5px"})}),Object(R.jsx)("div",{style:Object(c.a)(Object(c.a)({},T),{},{bottom:"-5px",left:"-5px"})}),Object(R.jsx)("div",{style:Object(c.a)(Object(c.a)({},T),{},{bottom:"-5px",right:"-5px"})})]}),x&&Object(R.jsx)(M,{isOpen:x,onClose:function(){return g(!1)},onSave:function(e){p(e),localStorage.setItem("signature-".concat(n,"-").concat(o,"-").concat(t),e),S("transparent")},existingSignature:f})]})},q=n(977),G=n(1047),U=n(739),Y=n.n(U),X=Object(f.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},successIcon:{color:"green",fontSize:"4rem"}}})),K=function(e){var t=e.open,n=e.handleClose,a=e.navigateHome,o=X();return Object(R.jsx)(T.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:o.modal,open:t,onClose:n,closeAfterTransition:!0,BackdropComponent:q.a,BackdropProps:{timeout:500},children:Object(R.jsx)(G.a,{in:t,children:Object(R.jsxs)("div",{className:o.paper,children:[Object(R.jsx)(Y.a,{className:o.successIcon}),Object(R.jsx)("h2",{id:"transition-modal-title",children:"Has firmado de manera exitosa"}),Object(R.jsx)(k.a,{variant:"contained",color:"primary",onClick:a,children:"Seguir firmando archivos"})]})})})};n(740);function Q(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}l.a.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(l.a.version,"/pdf.worker.min.js");var Z=Object(f.a)((function(e){return{container:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"100vh",overflow:"hidden"},pdfViewer:{flex:1},miniatures:{display:"block",overflow:"auto"},thumbnailImage:{width:"100%",cursor:"pointer"},documentButton:{cursor:"pointer",marginBottom:"5px"},thumbnailStyle:{margin:"5px 0",borderRadius:"5px",boxShadow:"0 3px 6px rgba(0, 0, 0, 0.1)"},addButton:{marginTop:e.spacing(2),backgroundColor:"#1976D2",color:"white",padding:"5px 15px",textTransform:"none",fontSize:"0.8rem","&:hover":{backgroundColor:"#1565C0"}}}})),$=function(){var e,t,n=Z(),s=Object(r.useState)(0),f=Object(i.a)(s,2),w=f[0],I=f[1],A=Object(r.useState)([]),F=Object(i.a)(A,2),z=F[0],P=F[1],T=Object(r.useState)(1),H=Object(i.a)(T,2),J=H[0],L=H[1],W=Object(r.useState)([]),M=Object(i.a)(W,2),E=M[0],q=M[1],G=Object(r.useState)(!0),U=Object(i.a)(G,2),Y=U[0],X=U[1],$=Object(r.useState)(null),_=Object(i.a)($,2),ee=_[0],te=_[1],ne=Object(r.useState)(JSON.parse(localStorage.getItem("signatureFields"))||{}),ae=Object(i.a)(ne,2),oe=ae[0],ce=ae[1],ie=Object(r.useState)([]),re=Object(i.a)(ie,2),se=re[0],le=re[1],ue=Object(r.useRef)(null),de=Object(r.useState)(!1),be=Object(i.a)(de,2),je=be[0],fe=be[1],pe=Object(p.a)(),he=Object(h.a)(pe.breakpoints.down("sm")),Oe=function(){fe(!1)},xe=Object(j.f)(),ge=[],me=function(){q([]),ce([]),X(!0),te(null)},ve=null===(e=E[w])||void 0===e?void 0:e.name;return Object(R.jsxs)(O.a,{maxWidth:"lg",className:"pdfContainer",children:[Y?Object(R.jsx)(B,{onFilesSelected:function(e){q(Array.from(e)),X(!1),I(0);var t=Array.from(e).map((function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(e){var a=new Uint8Array(e.target.result);l.a.getDocument(a).promise.then((function(e){t(e.numPages)})).catch(n)},a.onerror=n,a.readAsArrayBuffer(e)}))})),n=Array.from(e).map((function(e){return e.name}));le(n),Promise.all(t).then((function(e){P(e)}))}}):Object(R.jsxs)(x.a,{container:!0,spacing:2,className:n.pdfViewer,children:[Object(R.jsxs)(x.a,{item:!0,xs:12,sm:9,children:[E.length>0&&Object(R.jsx)(u.a,{ref:ue,file:E[w],onLoadSuccess:function(e){var t=e.numPages;P((function(e){var n=Object(o.a)(e);return n[w]=t,n}))},className:"documentContainer",children:Object(R.jsx)(d.a,{pageNumber:J,width:he?300:800,renderTextLayer:!he,renderAnnotationLayer:!1,style:{maxWidth:"min-content"}})}),Object(R.jsxs)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"center"},children:[Object(R.jsx)(g.a,{onClick:function(){J>1&&L(J-1)},disabled:J<=1,children:Object(R.jsx)(N.a,{})}),Object(R.jsx)(g.a,{onClick:function(){J<z[w]&&L(J+1)},disabled:J>=z[w],children:Object(R.jsx)(D.a,{})})]})]}),E.length>0&&Object(R.jsxs)(x.a,{item:!0,xs:12,sm:3,className:"miniatures ".concat(n.miniatures),children:[Object(R.jsx)(m.a,{style:{maxHeight:"70vh",overflowY:"auto"},children:Object(R.jsx)(v.a,{children:E.map((function(e,t){var a=ee===t,o=se[t],c=Object(R.jsx)(y.a,{button:!0,onClick:function(){te(t)},className:n.documentButton,children:Object(R.jsx)(S.a,{primary:o})},t),i=z[t],r=Array.from({length:i},(function(t,a){return Object(R.jsx)(y.a,{button:!0,onClick:function(){return L(a+1),void I(ee)},className:n.thumbnailStyle,children:Object(R.jsx)(C.a,{children:Object(R.jsx)(u.a,{file:e,children:Object(R.jsx)(d.a,{pageNumber:a+1,width:170,renderTextLayer:!he,renderAnnotationLayer:!1,style:{maxWidth:"min-content"}})})})},a)}));return a?[c].concat(r):c}))})}),Object(R.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:[Object(R.jsx)(k.a,{onClick:function(){var e=E[w].name,t={id:Object(b.a)(),pageNumber:J,x:0,y:0,width:200,height:50,backgroundColor:Q()};ce((function(n){return Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},e,[].concat(Object(o.a)(n[e]||[]),[t])))})),localStorage.setItem("signatureFields",JSON.stringify(Object(c.a)(Object(c.a)({},oe),{},Object(a.a)({},e,[].concat(Object(o.a)(oe[e]||[]),[t])))))},variant:"contained",className:n.addButton,children:"Agregar campo de firma"}),Object(R.jsx)(k.a,{onClick:function(){fe(!0)},variant:"contained",style:{marginTop:"40px",fontSize:"1.1rem",backgroundColor:"#FF8C00",color:"#ffffff"},children:"Firmar"})]})]})]}),E.length>0&&Object(R.jsxs)(g.a,{onClick:me,style:{position:"absolute",top:"10px",left:"10px"},children:[Object(R.jsx)(N.a,{})," Volver a seleccionar archivos"]}),ve&&(null===(t=oe[ve])||void 0===t?void 0:t.filter((function(e){return e.pageNumber===J})).map((function(e){return Object(R.jsx)(V,{id:e.id,documentId:ve,pageNumber:J,initialPosition:{x:e.x,y:e.y},size:{width:e.width,height:e.height},onRemove:function(){return t=ve,n=e.id,void ce((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},t,e[t].filter((function(e){return e.id!==n}))))}));var t,n},onPositionChange:function(t,n){return function(e,t,n,o){ce((function(i){return Object(c.a)(Object(c.a)({},i),{},Object(a.a)({},e,i[e].map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{x:n,y:o}):e}))))})),localStorage.setItem("signatureFields",JSON.stringify(ge))}(ve,e.id,t,n)},onSizeChange:function(t,n){return function(e,t,n,o){ce((function(i){return Object(c.a)(Object(c.a)({},i),{},Object(a.a)({},e,i[e].map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{width:n,height:o}):e}))))})),localStorage.setItem("signatureFields",JSON.stringify(oe))}(ve,e.id,t,n)},backgroundColor:e.backgroundColor},e.id)}))),Object(R.jsx)(K,{open:je,handleClose:Oe,navigateHome:function(){Oe(),xe("/dashboard/firmaya"),me()}})]})};t.default=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h1",{style:{textAlign:"center",marginTop:"50px",marginBottom:"50px",color:"rgb(226 113 17)"},children:"Firma Ya"}),Object(R.jsx)($,{})]})}},632:function(e,t){},671:function(e,t){},672:function(e,t){},740:function(e,t,n){},771:function(e,t){},772:function(e,t){},773:function(e,t){}}]);
//# sourceMappingURL=18.04cee033.chunk.js.map