(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r,a=n(1),o=n.n(a),i=n(16),c=n.n(i),s=n(5),l=n(10),d=n(23),b=n(21),p={ADD:"contacts/add",DELETE:"contacts/delete",CANGE_FILTER:"contacts/changeFilter"},u=n(15),x=null!==(r=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==r?r:[],g=function(e,t){var n=e?e.find((function(e){return e.name===t})):"";return n?(u.b.error("".concat(t," is already in contacts."),{duration:4e3,position:"top-right"}),n):(u.b.success("Contact ".concat(t," added to Phonebook"),{duration:4e3,position:"top-right"}),n)},j=Object(l.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case p.ADD:var a=g(e,r.name);return a?e:(localStorage.setItem("contacts",JSON.stringify([r].concat(Object(b.a)(e)))),[r].concat(Object(b.a)(e)));case p.DELETE:var o=e.filter((function(e){return e.id!==r}));return localStorage.setItem("contacts",JSON.stringify(o)),o;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case p.CANGE_FILTER:return r;default:return e}}}),m=Object(l.combineReducers)({contacts:j}),h=Object(l.createStore)(m,Object(d.composeWithDevTools)()),f=(n(36),n(26)),O=n(7),v=n(4);var y=Object(v.a)("div",{target:"e1yqr4s80"})({name:"xsihsn",styles:"width:100%;height:100vh;padding:0 15px;margin:0 auto"}),w=n(2);var k,z,C=function(e){var t=e.children;return Object(w.jsx)(y,{children:t})},E=n(8),S=n(9),D=S.a.div(k||(k=Object(E.a)(["\n  width: 500px;\n  display: block;\n  padding: 20px 30px;\n  margin: 0 auto;\n  margin-top: 40px;\n\n  text-align: center;\n\n  background-color: var(--bg-section);\n  color: var(--text-color-main);\n  border-radius: 4px;\n  box-shadow: 4px 4px 8px 0px rgba(154, 158, 171, 0.2);\n\n  &:not(:last-child) {\n    margin-bottom: 30px;\n  }\n"]))),A=S.a.h2(z||(z=Object(E.a)(["\n  display: inline-block;\n  align-items: baseline;\n  margin: 0;\n  margin-bottom: 20px;\n  margin-right: 10px;\n  font-size: 32px;\n  font-weight: 700;\n\n  text-align: center;\n"])));var L=function(e){var t=e.title,n=e.children;return Object(w.jsxs)(D,{children:[Object(w.jsx)(A,{children:t})," ",n]})},T=n(22),I=n(41);var N=Object(v.a)("form",{target:"ebnj1lb4"})({name:"5kov97",styles:"display:flex;flex-wrap:wrap"}),q=Object(v.a)("label",{target:"ebnj1lb3"})({name:"97q7l3",styles:"display:inline-block;align-items:baseline;text-align:start;font-size:20px;margin-bottom:20px;&>svg{margin-right:10px;}"}),F=Object(v.a)("input",{target:"ebnj1lb2"})({name:"ulqorw",styles:"display:block;margin-top:5px;margin-bottom:5px;width:400px;height:35px;border:none;border-radius:4px;padding-left:15px;color:#444c5c;&:placeholder-shown{font-size:14px;}&:hover,&:focus{outline:none;border:1px solid #444c5c;box-shadow:3px 4px 5px 0px rgb(120 165 163 / 20%);}"}),J=Object(v.a)("button",{target:"ebnj1lb1"})({name:"bsm6j6",styles:"display:block;background-color:white;border:none;border-radius:4px;outline:none;padding:8px 16px;color:#ec96a4;font-weight:bold;font-size:14px;line-height:24px;text-transform:uppercase;cursor:pointer;margin:0 auto;margin-top:15px;transition:all 300ms linear;&:hover,&:focus{color:#f1f1f2;background-color:#444c5c;transform:scale(1.03);}"});Object(v.a)("div",{target:"ebnj1lb0"})({name:"spwlyl",styles:"font-size:14px;color:var(--notification-color);margin-bottom:10px"});var R,G,P,Z=Object(s.b)(null,(function(e){return{onSubmit:function(t){var n=t.name,r=t.number;return e(function(e,t){return{type:p.ADD,payload:{id:Object(I.a)(),name:e,number:t}}}(n,r))}}}))((function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(T.a)(n,2),o=r[0],i=r[1],c=Object(a.useState)(""),s=Object(T.a)(c,2),l=s[0],d=s[1],b=function(e){var t=e.target,n=t.value;switch(t.name){case"name":i(n);break;case"number":d(n)}};return Object(w.jsx)("div",{children:Object(w.jsxs)(N,{onSubmit:function(e){e.preventDefault(),t({name:o,number:l}),i(""),d("")},autoComplete:"off",children:[Object(w.jsxs)(q,{children:[Object(w.jsx)(O.d,{size:"16"}),"Name",Object(w.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b,value:o,placeholder:"Rosie Simpson",autoFocus:!0})]}),Object(w.jsxs)(q,{children:[Object(w.jsx)(O.b,{size:"16"}),"Phone",Object(w.jsx)(F,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b,value:l,placeholder:"38(***) *** ****"})]}),Object(w.jsx)(J,{children:"Add Contact"})]})})})),_=n(25),B=n(24),M=S.a.ul(R||(R=Object(E.a)(["\n  padding: 0;\n  list-style: none;\n  margin: 0;\n  margin-top: 35px;\n\n  font-size: 17px;\n"]))),W=S.a.li(G||(G=Object(E.a)(["\n  border: 1px solid white;\n  border-radius: 5px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n  & > svg {\n    margin-right: 10px;\n  }\n"]))),$=S.a.button(P||(P=Object(E.a)(["\n  display: inline-flex;\n  align-items: center;\n\n  background-color: white;\n  border: none;\n  border-radius: 4px;\n  outline: none;\n  padding: 4px 8px;\n  color: var(--text-color-accent);\n\n  font-size: 17px;\n  line-height: 20px;\n  text-transform: capitalize;\n\n  cursor: pointer;\n\n  transition: all 300ms linear;\n  margin-left: auto;\n\n  &:hover,\n  &:focus {\n    color: #f1f1f2;\n    background-color: #444c5c;\n    transform: scale(1.03);\n  }\n  & > svg {\n    margin-left: 8px;\n  }\n"])));var H=Object(s.b)((function(e){var t=e.contacts,n=t.filter;return{contacts:function(e,t){if(e){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}}(t.items,n)}}),(function(e){return{onDeleteContact:function(t){return e(function(e){return{type:p.DELETE,payload:e}}(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(w.jsx)(M,{children:t.map((function(e){return Object(w.jsxs)(W,{children:[Object(w.jsx)(B.a,{size:"17"}),e.name,": ",e.number,Object(w.jsxs)($,{type:"button",onClick:function(){return n(e.id)},children:["Delete",Object(w.jsx)(_.a,{})]})]},e.id)}))})}));var K=Object(v.a)("input",{target:"e1dkt6dt1"})({name:"dmiard",styles:"margin-top:5px;margin-bottom:5px;width:400px;height:35px;border:none;border-radius:4px;padding-left:15px;color:#444c5c;&:placeholder-shown{font-size:14px;}&:hover,&:focus{outline:none;border:1px solid #444c5c;box-shadow:3px 4px 5px 0px rgb(120 165 163 / 20%);}"}),Q=Object(v.a)("label",{target:"e1dkt6dt0"})({name:"3fo4ic",styles:"text-align:start;display:inline-block;align-items:baseline;font-size:20px;&:not(:last-child){margin-bottom:10px;}& input{margin-top:5px;width:400px;height:35px;border:none;border-radius:4px;}&>svg{margin-right:10px;}"});var U=Object(s.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e((n=t.currentTarget.value,{type:p.CANGE_FILTER,payload:n}));var n}}}))((function(e){var t=e.value,n=e.onChange;return Object(w.jsx)("div",{children:Object(w.jsxs)(Q,{children:[Object(w.jsx)(O.c,{size:"14"}),"Find contacts by name",Object(w.jsx)(K,{type:"text",name:"filter",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",required:!0,onChange:n,value:t})]})})}));var V=function(){var e=h.getState().contacts.items;return Object(w.jsxs)(C,{children:[Object(w.jsx)(u.a,{}),Object(w.jsxs)(L,{title:"Phonebook",children:[Object(w.jsx)(O.a,{size:"24"}),Object(w.jsx)(Z,{})]}),Object(w.jsxs)(L,{title:"Contacts",children:[Object(w.jsx)(f.a,{size:"26"}),Object(w.jsx)(U,{}),0!==e.length&&Object(w.jsx)(H,{})]})]})};c.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(s.a,{store:h,children:Object(w.jsx)(V,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.683eaa2e.chunk.js.map