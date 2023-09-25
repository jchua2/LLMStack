"use strict";(self.webpackChunkpromptmanager=self.webpackChunkpromptmanager||[]).push([[2962],{28121:function(e,n,t){t.d(n,{Z:function(){return l}});t(72791);var i=t(5289),a=t(65661),r=t(39157),o=t(51691),s=t(97123),u=t(24518),d=t(80184);function l(e){var n=e.id,t=e.open,l=e.onOk,c=e.onCancel,x=e.title,f=e.text;return(0,d.jsxs)(i.Z,{title:x||"Logged Out",open:t,onCancel:c,children:[(0,d.jsx)(a.Z,{id:"delete-modal-title",children:"Confirm Delete"}),(0,d.jsx)(r.Z,{children:(0,d.jsx)(o.Z,{children:f})}),(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(u.Z,{onClick:function(){return c(n)},children:"Cancel"},"cancel"),",",(0,d.jsx)(u.Z,{type:"primary",onClick:function(){return l(n)},children:"Confirm"},"submit"),","]})]})}},60142:function(e,n,t){t.d(n,{P:function(){return a},l:function(){return r}});var i=t(80184);function a(e){var n=new Date(e.value);return(0,i.jsx)("span",{children:n.toLocaleString()})}function r(e){for(var n=e.value,t=["","K","M","G","T","P","E","Z","Y"],a=0;n>=1024;)n/=1024,a+=1;return(0,i.jsx)("span",{children:n>0?n.toFixed(2)+" "+t[a]:n+" "+t[a]})}},42962:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var i=t(93433),a=t(29439),r=t(55768),o=t(9953),s=t(64554),u=t(53767),d=t(24518),l=t(81918),c=t(94721),x=t(13239),f=t(13400),h=t(20068),p=t(61889),v=t(71747),j=t(52601),Z=t(58054),y=t(33953),m=t(5611),g=t(93806),C=t(32788),S=t(72791),b=t(56030),k=t(12705),w=t(40406),_=t(28121),D=t(5289),O=t(65661),A=t(39157),z=t(58406),I=t(23786),E=t(97123),P=t(7077),N=t(80184);function M(e){var n=e.id,t=e.open,i=e.onOk,r=e.onCancel,o=e.title,s=e.dataSource,l=S.useState(null===s||void 0===s?void 0:s.visibility),c=(0,a.Z)(l,2),x=c[0],f=c[1];return(0,N.jsxs)(D.Z,{open:t,onClose:function(){return r(n)},"aria-labelledby":"share-datasource-dialog-title","aria-describedby":"share-datasource-dialog-description",children:[(0,N.jsx)(O.Z,{id:"share-datasource-dialog-title",children:o}),(0,N.jsx)(A.Z,{style:{minWidth:"500px"},children:(0,N.jsxs)(u.Z,{spacing:2,children:[(0,N.jsx)("h4",{children:"Choose who can access this datasource"}),(0,N.jsx)(z.Z,{labelId:"share-datasource-select-label",size:"small",defaultValue:void 0===(null===s||void 0===s?void 0:s.visibility)?1:null===s||void 0===s?void 0:s.visibility,onChange:function(e){f(e.target.value)},children:[{value:1,label:"Organization",description:"Members of your organization can access this datasource"},{value:0,label:"You",description:"Only you can access this datasource"}].map((function(e){return(0,N.jsx)(I.Z,{value:e.value,children:(0,N.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,N.jsx)("span",{children:e.label}),(0,N.jsx)("small",{children:e.description})]})},e.value)}))})]})}),(0,N.jsxs)(E.Z,{children:[(0,N.jsx)(d.Z,{onClick:function(){return r(n)},children:"Cancel"}),(0,N.jsx)(d.Z,{variant:"contained",onClick:function(){return function(){var e="noop";x!==s.visibility?0===s.visibility&&1===x?(0,P.o)().post("api/org/datasources/".concat(s.uuid,"/add_entry")).then((function(n){i(e,s)})):1===s.visibility&&0===x?(0,P.o)().delete("api/org/datasources/".concat(s.uuid)).then((function(n){i(e,s)})):i(e,s):i(e,s)}()},children:"Done"})]})]})}var R=t(60142),T=t(52803);function U(e){var n,t,i=e.onCancel,r=e.dataSourceEntryData,f=e.open,h=(0,S.useState)(null),p=(0,a.Z)(h,2),j=p[0],Z=p[1],y=(0,S.useState)(null),m=(0,a.Z)(y,2),g=m[0],C=m[1],b=(0,S.useState)(!1),k=(0,a.Z)(b,2),w=k[0],_=k[1];return(0,S.useEffect)((function(){var e,n;null!==r&&void 0!==r&&null!==(e=r.config)&&void 0!==e&&e.document_ids?(_(!0),(0,P.o)().get("/api/datasource_entries/".concat(r.uuid,"/text_content")).then((function(e){var n,t;Z((0,N.jsx)(v.Z,{value:null===(n=e.data)||void 0===n?void 0:n.content,disabled:!0,autoSize:!0,style:{maxHeight:"80vh",width:"100%",overflow:"auto"}})),C(null===(t=e.data)||void 0===t?void 0:t.metadata)})).finally((function(){return _(!1)}))):Z((0,N.jsx)(v.Z,{value:JSON.stringify(null===r||void 0===r||null===(n=r.config)||void 0===n?void 0:n.errors),disabled:!0,autoSize:!0,style:{maxHeight:"80vh",width:"100%",overflow:"auto"}}))}),[null===r||void 0===r||null===(n=r.config)||void 0===n?void 0:n.document_ids,null===r||void 0===r||null===(t=r.config)||void 0===t?void 0:t.errors,r.uuid]),(0,N.jsx)(o.ZP,{open:f,onClose:i,anchor:"right",sx:{"& .MuiDrawer-paper":{minWidth:"40%"}},children:(0,N.jsxs)(s.Z,{children:[(0,N.jsxs)(u.Z,{direction:"row",gap:1,sx:{mb:"10px",mt:"10px"},children:[(0,N.jsx)(d.Z,{onClick:function(){return i()},sx:{alignSelf:"left"},children:"X"}),Object.keys(g||{}).map((function(e){return(0,N.jsx)(l.Z,{label:"".concat(e,": ").concat(g[e]),size:"small",sx:{borderRadius:"10px",marginTop:"5px"}},e)}))]}),(0,N.jsx)(c.Z,{}),w?(0,N.jsx)(x.Z,{}):(0,N.jsx)("div",{style:{margin:"0px 10px"},children:j})]})})}function L(){var e=(0,S.useState)(""),n=(0,a.Z)(e,2),t=n[0],o=n[1],u=(0,S.useState)(""),c=(0,a.Z)(u,2),v=c[0],D=c[1],O=(0,S.useState)(null),A=(0,a.Z)(O,2),z=A[0],I=A[1],E=(0,S.useState)(!1),L=(0,a.Z)(E,2),F=L[0],J=L[1],K=(0,S.useState)(!1),W=(0,a.Z)(K,2),B=W[0],V=W[1],Y=(0,S.useState)(!1),G=(0,a.Z)(Y,2),H=G[0],X=G[1],q=(0,S.useState)(null),Q=(0,a.Z)(q,2),$=Q[0],ee=Q[1],ne=(0,S.useState)(!1),te=(0,a.Z)(ne,2),ie=te[0],ae=te[1],re=(0,b.sJ)(k.ye),oe=(0,b.FV)(k.MC),se=(0,a.Z)(oe,2),ue=se[0],de=se[1],le=(0,b.FV)(k.DK),ce=(0,a.Z)(le,2),xe=ce[0],fe=ce[1],he=(0,S.useState)(null),pe=(0,a.Z)(he,2),ve=pe[0],je=pe[1],Ze=((0,b.sJ)(k.rc),(0,S.useState)([])),ye=(0,a.Z)(Ze,2),me=ye[0],ge=ye[1],Ce=(0,S.useState)("Add New Data Source"),Se=(0,a.Z)(Ce,2),be=Se[0],ke=Se[1],we=(0,S.useState)(null),_e=(0,a.Z)(we,2),De=_e[0],Oe=_e[1],Ae=(0,T.lD)(),ze=(0,T.B6)(),Ie=(0,b.sJ)(k.Dg);(0,S.useEffect)((function(){re.length>0&&ge(re)}),[re]);var Ee=[{title:"Name",dataIndex:"name",key:"name"},{title:"Owner",key:"owner",render:function(e){return(0,N.jsx)("span",{children:e.isUserOwned?"me":e.owner_email})}},{title:"Data Source Type",dataIndex:["type","name"],key:"type"},{title:"Size",dataIndex:"size",key:"size",render:function(e){return(0,N.jsx)(R.l,{value:e})}},{title:"Created At",dataIndex:"created_at",key:"created_at",render:function(e){return(0,N.jsx)(R.P,{value:e})}},{title:"Last Modified",dataIndex:"updated_at",key:"updated_at",render:function(e){return(0,N.jsx)(R.P,{value:e})}},{title:"Action",key:"operation",render:function(e){var n,t;return(0,N.jsxs)(s.Z,{children:[!(null!==e&&void 0!==e&&null!==(n=e.type)&&void 0!==n&&n.is_external_datasource)&&(0,N.jsx)(f.Z,{disabled:!e.isUserOwned,onClick:function(){ke("Add New Data Entry"),Oe(e),J(!0)},children:(0,N.jsx)(Z.Z,{})}),(null===e||void 0===e||null===(t=e.type)||void 0===t?void 0:t.is_external_datasource)&&(0,N.jsx)(h.Z,{title:"External Connection",children:(0,N.jsx)("span",{children:(0,N.jsx)(f.Z,{disabled:!0,children:(0,N.jsx)(m.Z,{})})})}),(0,N.jsx)(f.Z,{disabled:!e.isUserOwned,onClick:function(){I(e),o("Delete Data Source"),D((0,N.jsxs)("div",{children:["Are you sure you want to delete"," ",(0,N.jsx)("span",{style:{fontWeight:"bold"},children:e.name})," ?"]})),V(!0)},children:(0,N.jsx)(j.Z,{})}),Ie.IS_ORGANIZATION_MEMBER&&e.isUserOwned&&(0,N.jsx)(f.Z,{onClick:function(){ke("Share Datasource"),Oe(e),X(!0)},children:0===e.visibility?(0,N.jsx)(C.Z,{}):(0,N.jsx)(g.Z,{})})]})}}];return(0,N.jsxs)("div",{id:"data-page",children:[!1,(0,N.jsxs)(p.ZP,{span:24,style:{padding:"10px"},children:[(0,N.jsx)(p.ZP,{item:!0,style:{width:"100%",padding:"15px 0px"},children:(0,N.jsx)(d.Z,{onClick:function(){J(!0)},type:"primary",variant:"contained",sx:{float:"left",marginBottom:"10px",textTransform:"none"},children:"Add Data Source"})}),(0,N.jsx)(p.ZP,{item:!0,style:{width:"100%"},children:(0,N.jsx)(r.Z,{dataSource:me,columns:Ee,pagination:{pageSize:10},expandable:{expandedRowRender:function(e){var n=e.data_source_entries;if(ve===e.uuid)return(0,N.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,N.jsx)(x.Z,{})});var t=[{title:"Name",dataIndex:"name",key:"name"},{title:"Size",key:"size",dataIndex:"size",render:function(e){return(0,N.jsx)(R.l,{value:e})}},{title:"Status",key:"status",render:function(e){var n="success";return n="FAILED"===e.status?"error":"READY"===e.status?"success":"info",(0,N.jsx)(l.Z,{color:n,style:{cursor:"pointer"},onClick:function(){ee(e),ae(!0)},label:e.status.charAt(0)+e.status.slice(1).toLowerCase(),size:"small"},e.uuid)}},{title:"Created At",dataIndex:"created_at",key:"created_at",render:function(e){return(0,N.jsx)(R.P,{value:e})}},{title:"Last Modified",dataIndex:"updated_at",key:"updated_at",render:function(e){return(0,N.jsx)(R.P,{value:e})}},{title:"Action",key:"operation",render:function(e){var n=null===e||void 0===e?void 0:e.sync_config;return(0,N.jsxs)(s.Z,{children:[(0,N.jsx)(f.Z,{disabled:!e.isUserOwned,onClick:function(){I(e),o("Delete Data Source Entry"),D((0,N.jsxs)("div",{children:["Are you sure you want to delete"," ",(0,N.jsx)("span",{style:{fontWeight:"bold"},children:e.name})," ","?"]})),V(!0)},children:(0,N.jsx)(j.Z,{className:"delete-dataentry-icon"})}),n&&(0,N.jsx)(f.Z,{onClick:function(){(0,P.o)().post("/api/datasource_entries/".concat(e.uuid,"/resync")).then((function(e){Ae(),Ae()}))},children:(0,N.jsx)(y.Z,{className:"resync-dataentry-icon"})})]})}}];return(0,N.jsx)(r.Z,{columns:t,dataSource:n,rowKey:function(e){return e.uuid},pagination:!1,style:{cursor:"pointer"},onRow:function(e,n){return{onClick:function(n){"TD"===n.target.tagName&&(ee(e),ae(!0))}}}})},onExpand:function(e,n){if(e){var t="/api/datasources/".concat(n.uuid,"/entries");n.isUserOwned||(t="/api/org/datasources/".concat(n.uuid,"/entries")),je(n.uuid),(0,P.o)().get(t).then((function(e){n.isUserOwned?de([].concat((0,i.Z)(ue.filter((function(e){return e.datasource.uuid!==n.uuid}))),(0,i.Z)(e.data))):fe([].concat((0,i.Z)(xe.filter((function(e){return e.datasource.uuid!==n.uuid}))),(0,i.Z)(e.data)))})).finally((function(){je(null)}))}}},rowKey:function(e){return e.uuid},style:{width:"100%"}})})]}),F&&(0,N.jsx)(w.P,{open:F,handleCancelCb:function(){Oe(null),J(!1)},dataSourceAddedCb:function(){Oe(null),Ae(),ze(),J(!1)},modalTitle:be,datasource:De}),B&&(0,N.jsx)(_.Z,{id:z,title:t,text:v,open:B,onOk:function(e){void 0!==(null===e||void 0===e?void 0:e.data_source_entries)?(0,P.o)().delete("api/datasources/".concat(e.uuid)).then((function(e){ze(),V(!1)})):(0,P.o)().delete("api/datasource_entries/".concat(e.uuid)).then((function(e){Ae(),V(!1)}))},onCancel:function(){V(!1)}}),ie&&(0,N.jsx)(U,{onCancel:function(){return ae(!1)},dataSourceEntryData:$,open:ie}),H&&(0,N.jsx)(M,{title:be,onCancel:function(){return X(!1)},onOk:function(){X(!1)},open:H,dataSource:De})]})}}}]);
//# sourceMappingURL=2962.748f94fb.chunk.js.map