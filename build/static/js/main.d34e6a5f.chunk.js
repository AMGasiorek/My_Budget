(window["webpackJsonpmy-budget"]=window["webpackJsonpmy-budget"]||[]).push([[0],{39:function(e,t,n){e.exports=n(56)},44:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),c=n.n(o),s=(n(44),n(11)),i=n(17),l=n(5),u=n(6),m=n(8),p=n(7),h=n(9),f=n(10),b=n(15),d=r.a.createContext(null),O=function(e){return function(t){return r.a.createElement(d.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},g=d,E=n(20),j=n.n(E);n(46),n(48);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var y={apiKey:"AIzaSyDp4TO37P2aH_vPbwjRbDnWW3FsKpssFJw",authDomain:"project-my-budget.firebaseapp.com",databaseURL:"https://project-my-budget.firebaseio.com",projectId:"project-my-budget",storageBucket:"",messagingSenderId:"1051899526663",appId:"1:1051899526663:web:be7526a8f3b9d7e7"},w=function e(){var t=this;Object(l.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged(function(a){a?t.user(a.uid).once("value").then(function(t){var n=t.val();n.roles||(n.roles={}),a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({uid:a.uid,email:a.email},n),e(a)}):n()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},j.a.initializeApp(y),this.auth=j.a.auth(),this.db=j.a.database()},P="/home",N="ADMIN";function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},D=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne,c=t.isAdmin,s={};c&&(s[N]=N),n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:s})}).then(function(e){n.setState(S({},k)),n.props.history.push(P)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(f.a)({},e.target.name,e.target.checked))},n.state=S({},k),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,c=e.error,s=a!==o||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"signForms"},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("button",{disabled:s,type:"submit"},"zarejestruj"),c&&r.a.createElement("p",null,c.message))}}]),t}(a.Component),A=Object(b.a)(i.f,O)(D),z=function(){return r.a.createElement("p",{className:"signLinks"},"Nie masz jeszcze swojego profilu? ",r.a.createElement(s.b,{to:"/signup"},"zarejestruj"))},U=function(){return r.a.createElement("div",{className:"signForms--container"},r.a.createElement("h1",null,"zarejestruj"),r.a.createElement(A,null))},x=n(37),L=n(38),W=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(L.a,{icon:x.a,className:"logo--icon"})}}]),t}(a.Component),F=function(){return r.a.createElement("div",{className:"logoCopy"},r.a.createElement(W,null),r.a.createElement("div",{className:"logo__textContainer"},r.a.createElement("p",{className:"logo--text logo--text__m"},"m\xf3j"),r.a.createElement("p",{className:"logo--text"},"bud\u017cet")))},I=function(){return r.a.createElement(s.b,{exact:!0,to:"/"},r.a.createElement("div",{className:"logo"},r.a.createElement(W,null),r.a.createElement("div",{className:"logo__textContainer"},r.a.createElement("p",{className:"logo--text"},"m\xf3j"),r.a.createElement("p",{className:"logo--text logo--text__b"},"bud\u017cet"))))},T=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(F,null),r.a.createElement("h1",null,"pomocna aplikacja dla ka\u017cdego"),r.a.createElement("h2",null,"trzymaj w szachu swoje finanse")),r.a.createElement("div",{className:"col-4"},r.a.createElement("p",null,"za\u0142\xf3\u017c nowe konto"),r.a.createElement(U,null)))}}]),t}(a.Component);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R={email:"",error:null},B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(M({},R))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.state=M({},R),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"signForms"},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"przypomnij has\u0142o"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),H=function(){return r.a.createElement("p",{className:"signLinks"},r.a.createElement(s.b,{to:"/pw-forget"},"zapomnia\u0142e\u015b has\u0142a?"))},J=function(){return r.a.createElement("div",{className:"signForms--container"},r.a.createElement("h1",null,"przypomnij has\u0142o"),r.a.createElement(K,null))},K=O(B);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var G={email:"",password:"",error:null},Q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(q({},G)),n.props.history.push(P)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.state=q({},G),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"signForms"},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"zaloguj"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),V=Object(b.a)(i.f,O)(Q),X=function(){return r.a.createElement("div",{className:"signForms--container"},r.a.createElement("h1",null,"panel logowania"),r.a.createElement(V,null),r.a.createElement(H,null),r.a.createElement(z,null))},Y=r.a.createContext(null),Z=function(e){var t=function(t){function n(e){var t;return Object(l.a)(this,n),(t=Object(m.a)(this,Object(p.a)(n).call(this,e))).state={authUser:null},t}return Object(h.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){e.setState({authUser:t})},function(){e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(Y.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return O(t)},ee=function(e){return function(t){var n=function(n){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,n),Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(n){e(n)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(Y.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(b.a)(i.f,O)(n)}},te=ee(function(e){return!!e})(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."))});function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var re={passwordOne:"",passwordTwo:"",error:null},oe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(ae({},re))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.state=ae({},re),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit,className:"signForms"},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"zmie\u0144 has\u0142o"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),ce=O(oe),se=ee(function(e){return!!e})(function(){return r.a.createElement(Y.Consumer,null,function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Account: ",e.email)),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"signForms--container"},r.a.createElement(K,null)),r.a.createElement("div",{className:"signForms--container"},r.a.createElement(ce,null))))})});function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var le=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1,users:[]},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var n=t.val(),a=Object.keys(n).map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n[e],{uid:e})});e.setState({users:a,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(ue,{users:t}))}}]),t}(a.Component),ue=function(e){var t=e.users;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))}))},me=Object(b.a)(ee(function(e){return e&&!!e.roles[N]}),O)(le),pe=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"Tu b\u0119dzie demo aplikacji z przyk\u0142adowymi danymi do zabawy")}}]),t}(a.Component),he=O(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut,className:"NavLink"},"sign out")}),fe=function(e){var t=e.authUser;return r.a.createElement("ul",{className:"menu"},r.a.createElement("li",{className:"menu--element"},r.a.createElement(s.c,{to:P,className:"NavLink",activeClassName:"Active"},"home")),r.a.createElement("li",{className:"menu--element"},r.a.createElement(s.c,{to:"/account",className:"NavLink",activeClassName:"Active"},"profil")),!!t.roles[N]&&r.a.createElement("li",{className:"menu--element"},r.a.createElement(s.c,{to:"/admin",className:"NavLink",activeClassName:"Active"},"admin")),r.a.createElement("li",{className:"menu--element"},r.a.createElement(he,null)))},be=function(){return r.a.createElement("ul",{className:"menu"},r.a.createElement("li",{className:"menu--element"},r.a.createElement(s.c,{to:"/demo",className:"NavLink",activeClassName:"Active"},"demo")),r.a.createElement("li",{className:"menu--element"},r.a.createElement(s.c,{to:"/signin",className:"NavLink",activeClassName:"Active"},"zaloguj")))},de=function(){return r.a.createElement("div",null,r.a.createElement(Y.Consumer,null,function(e){return e?r.a.createElement(fe,{authUser:e}):r.a.createElement(be,null)}))},Oe=Z(function(){return r.a.createElement(s.a,null,r.a.createElement("header",null,r.a.createElement(I,null),r.a.createElement(de,null)),r.a.createElement("div",{className:"mainContainer"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:T}),r.a.createElement(i.a,{path:"/signup",component:U}),r.a.createElement(i.a,{path:"/signin",component:X}),r.a.createElement(i.a,{path:"/pw-forget",component:J}),r.a.createElement(i.a,{path:P,component:te}),r.a.createElement(i.a,{path:"/account",component:se}),r.a.createElement(i.a,{path:"/admin",component:me}),r.a.createElement(i.a,{path:"/demo",component:pe}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g.Provider,{value:new w},r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.d34e6a5f.chunk.js.map