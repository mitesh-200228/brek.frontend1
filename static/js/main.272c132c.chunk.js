(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{157:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(212),c=n(1),r=n.n(c),s=n(52),i=n.n(s),o=n(70),l=n(21),j=n(3),d=n(66),h=n(2),b=n.n(h),p=n(5),x=n(10),u=n(92),O=n.n(u),m=n(215),g=n(203),f=n(217),w=n(218),v=n(204),y=n(202),C=n(216),N=n(201),S=n(65),k=n(208),T=n(219),E=n(209),R=n(210),F=n(211),P=n.p+"static/media/logo_vector.02eb8c3d.png",A=(n(157),n(205)),I=n(213),W=n(214),L=n(95),D=n(115),z=n(125),M=n(55),G=Object(D.a)({apiKey:"AIzaSyCXovlRgTBmG9TG4yM3c_xfZQwYfNEvJ7A",authDomain:"brek-8f65b.firebaseapp.com",projectId:"brek-8f65b",storageBucket:"brek-8f65b.appspot.com",messagingSenderId:"39490280697",appId:"1:39490280697:web:86ee955fb86f7c7f7c1628",measurementId:"G-G8JX4ZDD3V"}),B=(Object(z.a)(G),Object(M.b)()),J=null,Y=new M.a;function _(){Object(M.c)(B,Y).then((function(e){M.a.credentialFromResult(e);console.log(e),console.log(e.user.displayName),J=e.user.displayName,console.log(typeof e.user)})).catch((function(e){e.code,e.message,e.email,M.a.credentialFromError(e);console.log(e.message)}))}var U=n(39),H=n(187),X=n(200),Z=n(81),K=(n(88),n(8)),Q=function(e){var t=e.children,n=e.label,a=e.href;return Object(K.jsxs)(U.a.button,{bg:Object(H.c)("blackAlpha.100","whiteAlpha.100"),rounded:"full",w:8,h:8,cursor:"pointer",as:"a",href:a,display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"background 0.3s ease",_hover:{bg:Object(H.c)("blackAlpha.200","whiteAlpha.200")},children:[Object(K.jsx)(X.a,{children:n}),t]})};function V(){var e=r.a.useState({email:""}),t=Object(x.a)(e,2);t[0],t[1];return Object(K.jsx)(y.a,{width:"100%",height:"35vh",justifyContent:"center",bg:"#3A4A4E",color:"#fff",children:Object(K.jsxs)(f.b,{spacing:6,children:[Object(K.jsx)(g.a,{}),Object(K.jsx)(N.a,{fontSize:"sm",children:"\xa9 2021 brek.club  . All rights reserved"}),Object(K.jsxs)(y.a,{justifyContent:"center",paddingLeft:"10%",direction:"row",spacing:6,children:[Object(K.jsx)(Q,{label:"YouTube",href:"https://www.linkedin.com/company/75043346/admin/",children:Object(K.jsx)(Z.b,{})}),Object(K.jsx)(v.a,{}),Object(K.jsx)(Q,{label:"YouTube",href:"https://www.linkedin.com/company/75043346/admin/",children:Object(K.jsx)(Z.c,{})}),Object(K.jsx)(v.a,{}),Object(K.jsx)(Q,{label:"Instagram",href:"https://www.instagram.com/brek.club/",children:Object(K.jsx)(Z.a,{})})]}),Object(K.jsx)(y.a,{justifyContent:"center",children:Object(K.jsxs)(N.a,{color:"#fff",children:["Mail us : ",Object(K.jsx)("a",{href:"mailto:reach@brek.club",children:"reach@brek.club"})]})})]})})}n(161);var $=function(){var e,t=r.a.useState(""),n=Object(x.a)(t,2),a=n[0],c=n[1];console.log(J),console.log(a),r.a.useEffect((function(){o()}),[]);var s,i,o=function(){var t=Object(p.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/userdata",{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});case 3:return n=t.sent,t.next=6,n.json();case 6:e=t.sent,c(e.gota.FullName),200!==n.status&&(a=new Error(n.error),console.log(a)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),h=r.a.useState(""),u=Object(x.a)(h,2),D=u[0],z=u[1],M=r.a.useState(""),G=Object(x.a)(M,2),B=G[0],Y=G[1],U=Object(l.f)(),H=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:D,password:B})});case 3:n=e.sent,a=n,console.log(a),400!==a.status&&a?(window.alert("Login Successful"),U.push("/")):window.alert("Invalid Credentials");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=r.a.useState({FullName:"",email:"",phone:"",password:"",confirmPassword:""}),Z=Object(x.a)(X,2),Q=Z[0],$=Z[1],q=function(e){console.log(e),s=e.target.name,i=e.target.value,$(Object(d.a)(Object(d.a)({},Q),{},Object(j.a)({},s,i)))},ee=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a,c,r,s,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Q.FullName,a=Q.email,c=Q.phone,r=Q.password,s=Q.confirmPassword,e.next=4,fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({FullName:n,email:a,phone:c,password:r,confirmPassword:s})});case 4:return i=e.sent,e.next=7,i.json();case 7:o=e.sent,console.log(o),422!==o.status&&o?(window.alert("Registration Successful"),U.push("/")):(window.alert("Invalid Registration"),console.log("Invalid Registration"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=r.a.useState({FullName:"",PhoneNumber:"",Email:"",CurrentLocation:"",TravelDestination:"",Date:""}),ne=Object(x.a)(te,2),ae=ne[0],ce=ne[1],re=function(e){i=e.target.value,s=e.target.name,ce(Object(d.a)(Object(d.a)({},ae),{},Object(j.a)({},s,i)))},se=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a,c,r,s,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=ae.FullName,a=ae.PhoneNumber,c=ae.Email,r=ae.CurrentLocation,s=ae.TravelDestination,e.next=4,fetch("/userTravelData",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({FullName:n,PhoneNumber:a,Email:c,CurrentLocation:r,TravelDestination:s})});case 4:return i=e.sent,e.next=7,i.json();case 7:o=e.sent,console.log(o),422!==o.status&&o?(window.alert("Registration Successful"),U.push("/")):(window.alert("Invalid Registration"),console.log("Invalid Registration"));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=r.a.useRef(),oe=r.a.useRef(),le=Object(A.a)(),je=le.isOpen,de=le.onOpen,he=le.onClose,be=r.a.useRef(),pe=r.a.useRef(),xe=Object(A.a)(),ue=xe.isOpen,Oe=xe.onOpen,me=xe.onClose,ge=r.a.useState(!1),fe=Object(x.a)(ge,2),we=fe[0],ve=fe[1],ye=r.a.useState(!1),Ce=Object(x.a)(ye,2),Ne=Ce[0],Se=Ce[1];return Object(K.jsx)(m.a,{children:Object(K.jsx)(g.a,{bg:"#E3EFEE",width:"100%",height:"200vh",children:Object(K.jsxs)(g.a,{width:"100%",height:"100vh",paddingTop:"40px",children:[Object(K.jsxs)(f.a,{children:[Object(K.jsx)(w.a,{src:P,className:"logo",alt:""}),Object(K.jsx)(v.a,{}),Object(K.jsxs)(y.a,{flexWrap:"wrap",marginRight:"20px",children:[Object(K.jsx)(C.a,{className:"btn1",color:"#5A4012",border:"none",borderRadius:"50px",fontSize:"17px",bg:"transparent",height:"50px",width:"150px",children:"Contact Us"}),a||J?Object(K.jsx)(N.a,{paddingTop:"13px",paddingRight:"20px",color:"#5a4012",fontWeight:"650",children:a||J}):Object(K.jsx)(C.a,{className:"btn1",color:"#5A4012",border:"none",borderRadius:"50px",fontSize:"17px",bg:"transparent",height:"50px",width:"150px",onClick:de,children:"Sign In"}),Object(K.jsxs)(I.a,{initialFocusRef:ie,finalFocusRef:oe,isOpen:je,onClose:he,isCentered:!0,children:[Object(K.jsx)(I.g,{}),Object(K.jsxs)(I.d,{children:[Object(K.jsx)(g.a,{m:4,children:Object(K.jsxs)(W.e,{variant:"soft-rounded",children:[Object(K.jsx)(I.f,{children:Object(K.jsxs)(W.b,{children:[Object(K.jsx)(W.a,{_selected:{color:"white",bg:"blue.500"},children:"Sign In"}),Object(K.jsx)(W.a,{_selected:{color:"white",bg:"green.400"},children:"Sign Up"})]})}),Object(K.jsxs)(W.d,{children:[Object(K.jsxs)(W.c,{children:[Object(K.jsx)(I.b,{pb:6,children:Object(K.jsxs)(S.a,{children:[Object(K.jsx)(k.a,{children:"E-Mail"}),Object(K.jsx)(T.a,{onChange:function(e){z(e.target.value)},value:D,type:"email",ref:ie,placeholder:"E-Mail"}),Object(K.jsx)(k.a,{mt:4,children:"Password"}),Object(K.jsx)(T.a,{value:B,onChange:function(e){Y(e.target.value)},type:"password",placeholder:"Password"})]})}),Object(K.jsx)(I.e,{children:Object(K.jsxs)(f.a,{children:[Object(K.jsx)(C.a,{onClick:_,colorScheme:"cyan",leftIcon:Object(K.jsx)(L.a,{fontSize:"20px"}),children:"Google"}),Object(K.jsx)(C.a,{type:"submit",onClick:H,colorScheme:"blue",mr:3,children:"Sign In"}),Object(K.jsx)(C.a,{onClick:he,children:"Cancel"})]})})]}),Object(K.jsxs)(W.c,{children:[Object(K.jsx)(I.b,{pb:6,children:Object(K.jsxs)(S.a,{children:[Object(K.jsx)(k.a,{mt:4,children:"Full name"}),Object(K.jsx)(T.a,{name:"FullName",type:"text",onChange:q,value:Q.FullName,placeholder:"Your Name"}),Object(K.jsx)(k.a,{mt:4,children:"Phone Number"}),Object(K.jsxs)(E.a,{children:[Object(K.jsx)(R.a,{children:"+91",opacity:"0.7"}),Object(K.jsx)(T.a,{name:"phone",onChange:q,value:Q.phone,type:"number",placeholder:"Phone Number"})]}),Object(K.jsx)(k.a,{mt:4,children:"E-Mail"}),Object(K.jsx)(T.a,{name:"email",type:"email",onChange:q,value:Q.email,ref:ie,placeholder:"E-Mail"}),Object(K.jsx)(k.a,{mt:4,children:"Password"}),Object(K.jsxs)(E.a,{size:"md",children:[Object(K.jsx)(T.a,{pr:"4.5rem",type:we?"text":"password",name:"password",onChange:q,value:Q.password,placeholder:"Enter password"}),Object(K.jsx)(F.a,{width:"4.5rem",children:Object(K.jsxs)(C.a,{h:"1.75rem",size:"sm",onClick:function(){return ve(!we)},children:[" ",we?"Hide":"Show"]})})]}),Object(K.jsx)(k.a,{mt:4,children:"Confirm Password"}),Object(K.jsxs)(E.a,{size:"md",children:[Object(K.jsx)(T.a,{pr:"4.5rem",type:Ne?"text":"password",placeholder:"Confirm password",name:"confirmPassword",onChange:q,value:Q.confirmPassword}),Object(K.jsx)(F.a,{width:"4.5rem",children:Object(K.jsxs)(C.a,{h:"1.75rem",size:"sm",onClick:function(){return Se(!Ne)},children:[" ",Ne?"Hide":"Show"]})})]})]})}),Object(K.jsx)(I.e,{children:Object(K.jsxs)(f.a,{children:[Object(K.jsx)(C.a,{onClick:_,colorScheme:"teal",leftIcon:Object(K.jsx)(L.a,{fontSize:"20px"}),children:"Google"}),Object(K.jsx)(C.a,{onClick:ee,type:"submit",colorScheme:"green",mr:3,children:"Sign Up"}),Object(K.jsx)(C.a,{onClick:he,children:"Cancel"})]})})]})]})]})}),Object(K.jsx)(I.c,{})]})]}),Object(K.jsx)(w.a,{})]})]}),Object(K.jsx)(g.a,{className:"sand",width:"100%",height:"73vh",children:Object(K.jsxs)(f.c,{children:[Object(K.jsxs)(g.a,{textAlign:"center",className:"mainText",children:[Object(K.jsx)(N.a,{className:"text1",children:"we make free, custom"}),Object(K.jsx)(N.a,{className:"text1",children:"itineraries for you"}),Object(K.jsxs)(N.a,{fontSize:"15px",letterSpacing:"3px",color:"#5A4012",fontWeight:"700",paddingBottom:"20px",children:[" ",Object(K.jsx)("h2",{className:"text2",children:"transparent. flexible. yours."})]})]}),Object(K.jsx)(C.a,{marginTop:"2px",onClick:Oe,className:"btn2",color:"#5A4012",border:"none",borderRadius:"50px",fontSize:"17px",bg:"#C6EAE7",height:"50px",width:"170px",children:"Travel Now"}),Object(K.jsxs)(I.a,{initialFocusRef:be,finalFocusRef:pe,isOpen:ue,onClose:me,isCentered:!0,children:[Object(K.jsx)(I.g,{}),Object(K.jsxs)(I.d,{children:[Object(K.jsx)(I.f,{children:"Travel Now"}),Object(K.jsx)(I.c,{}),Object(K.jsx)(I.b,{pb:6,children:Object(K.jsxs)(S.a,{children:[Object(K.jsx)(k.a,{mt:4,children:"Full name"}),Object(K.jsx)(T.a,{name:"FullName",type:"text",onChange:re,value:ae.FullName,placeholder:"Your Name"}),Object(K.jsx)(k.a,{mt:4,children:"Phone Number"}),Object(K.jsxs)(E.a,{children:[Object(K.jsx)(R.a,{children:"+91",opacity:"0.7"}),Object(K.jsx)(T.a,{name:"PhoneNumber",type:"number",onChange:re,placeholder:"Phone Number",value:ae.PhoneNumber})]}),Object(K.jsx)(k.a,{mt:4,children:"E-Mail"}),Object(K.jsx)(T.a,{name:"Email",type:"text",onChange:re,placeholder:"E-Mail",value:ae.Email}),Object(K.jsx)(k.a,{mt:4,children:"Current Location"}),Object(K.jsx)(T.a,{name:"CurrentLocation",type:"text",onChange:re,value:ae.CurrentLocation,placeholder:"Your City"}),Object(K.jsx)(k.a,{mt:4,children:"Travel Destinantion"}),Object(K.jsx)(T.a,{name:"TravelDestination",type:"text",onChange:re,value:ae.TravelDestination,ref:ie,placeholder:"Travel To..."}),Object(K.jsxs)(f.a,{children:[Object(K.jsx)(k.a,{mt:4,children:"Travel Start"}),Object(K.jsx)(O.a,{color:"#000"}),Object(K.jsx)(k.a,{mt:4,children:"Travel End"}),Object(K.jsx)(O.a,{color:"#000"})]})]})}),Object(K.jsxs)(I.e,{children:[Object(K.jsx)(C.a,{onClick:se,type:"submit",colorScheme:"blue",mr:3,children:"Confirm Travel"}),Object(K.jsx)(C.a,{onClick:me,children:"Cancel"})]})]})]})]})}),Object(K.jsx)(g.a,{height:"100px",color:"white"}),Object(K.jsx)(g.a,{className:"secondSlide",width:"100%",height:"120vh",children:Object(K.jsx)(g.a,{justifyContent:"center",paddingTop:"50px",width:"100%",children:Object(K.jsxs)(f.c,{children:[Object(K.jsx)(y.a,{justifyContent:"flex-end",width:"100%",paddingRight:"17%",children:Object(K.jsx)(g.a,{width:"300px",height:"100px",className:"cloud",borderRadius:"80%",children:Object(K.jsx)(N.a,{textAlign:"center",color:"#15233E",paddingLeft:"20px",paddingRight:"20px",width:"100%",paddingTop:"20px",fontWeight:"650",letterSpacing:"1px",className:"slide2txt",children:"this place is nothing like what's shown on the web "})})}),Object(K.jsx)(v.a,{}),Object(K.jsx)(y.a,{justifyContent:"flex-start",width:"100%",paddingLeft:"17%",children:Object(K.jsx)(g.a,{width:"300px",height:"120px",className:"cloud",borderRadius:"80%",children:Object(K.jsx)(N.a,{textAlign:"center",color:"#15233E",paddingLeft:"20px",paddingRight:"20px",width:"100%",paddingTop:"20px",fontWeight:"650",letterSpacing:"1px",className:"slide2txt",children:"bro, that guy charged us extra just because we are tourist"})})}),Object(K.jsx)(v.a,{}),Object(K.jsx)(y.a,{justifyContent:"flex-end",width:"100%",paddingRight:"17%",className:"thirdBox",children:Object(K.jsx)(g.a,{width:"300px",height:"100px",className:"cloud",borderRadius:"80%",children:Object(K.jsx)(N.a,{textAlign:"center",color:"#15233E",paddingLeft:"20px",paddingRight:"20px",width:"100%",paddingTop:"20px",fontWeight:"650",letterSpacing:"1px",className:"slide2txt",children:"yaar if we knew this place before hand we could have enjoyed more! "})})})]})})}),Object(K.jsx)(g.a,{width:"100%",className:"mountain",height:"120vh",children:Object(K.jsxs)(g.a,{width:"100%",children:[Object(K.jsx)(y.a,{flexWrap:"wrap",justifyContent:"center",width:"100%",textAlign:"center",paddingTop:"80px",children:Object(K.jsx)(N.a,{color:"#15233E",className:"slide44",fontWeight:"650",children:"we take your brek"})}),Object(K.jsx)(y.a,{flexWrap:"wrap",justifyContent:"center",width:"100%",textAlign:"center",children:Object(K.jsx)(N.a,{color:"#15233E",className:"slide44",fontWeight:"650",mt:"-5px",children:"seriously."})}),Object(K.jsx)(y.a,{flexWrap:"wrap",justifyContent:"center",width:"100%",textAlign:"center",children:Object(K.jsx)(N.a,{color:"#15233E",fontWeight:"650",width:"42vw",className:"lasttext",children:"we at brek.club understand how hectic and tiresome planning an entire trip can be. Therefore we decided to do it for you"})})]})}),Object(K.jsxs)(g.a,{className:"slide4",width:"100%",height:"130vh",children:[Object(K.jsx)(y.a,{children:Object(K.jsxs)(N.a,{className:"pop1",paddingLeft:"40px",paddingTop:"50px",color:"#15233E",width:"100%",fontWeight:"750",children:["a team that ",Object(K.jsx)("br",{}),"cares"]})}),Object(K.jsx)(y.a,{children:Object(K.jsx)(N.a,{className:"pop2",paddingLeft:"40px",paddingTop:"50px",color:"#15233E",fontWeight:"750",children:"we are a group of students presently pursuing our engineering from IIT Madras, who love travelling. We understand that everyone right now is mentally exhausted and this is our small way to spread joy and give you a brek you really deserve"})})]}),Object(K.jsx)(V,{})]})})})},q=function(){var e=Object(l.f)(),t=function(){var t=Object(p.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/another",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return n=t.sent,console.log("214124"),t.next=7,n.json();case 7:if(a=t.sent,console.log("12"),console.log(a),200!==!n.status){t.next=13;break}throw new Error(n.error);case 13:t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),e.push("/");case 19:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}}();return r.a.useEffect((function(){t()}),[]),Object(K.jsx)("div",{children:Object(K.jsx)("form",{method:"GET",children:"this is another page"})})};var ee=function(){return Object(K.jsx)(o.a,{children:Object(K.jsxs)(l.c,{children:[Object(K.jsx)(l.a,{to:"/",exact:!0,children:Object(K.jsx)($,{})}),Object(K.jsx)(l.a,{to:"/another",exact:!0,children:Object(K.jsx)(q,{})})]})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(K.jsxs)(c.StrictMode,{children:[Object(K.jsx)(a.a,{}),Object(K.jsx)(ee,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),te()}},[[183,1,2]]]);
//# sourceMappingURL=main.272c132c.chunk.js.map