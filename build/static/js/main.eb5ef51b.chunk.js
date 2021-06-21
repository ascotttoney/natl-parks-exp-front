(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,t,a){e.exports=a.p+"static/media/mod-4-project-logo.36b51036.png"},73:function(e,t,a){},84:function(e,t,a){e.exports=a(96)},89:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n,r=a(1),l=a.n(r),o=a(29),s=a.n(o),i=(a(89),a(60)),c=a(13),u=a(14),m=a(16),p=a(15),h=a(10),d=a(81),E=a(65),f=a(106),g=a(105),k=a(66),b=a(69),v=k.a.div(n||(n=Object(E.a)(["\n\t.navbar {\n\t\tbackground-color: #222;\n\t}\n\n\t.navbar-brand,\n\t.navbar-nav .nav-link {\n\t\tcolor: #bbb;\n\n\t\t&:hover {\n\t\t\tcolor: white;\n\t\t}\n\t}\n"]))),w=function(e){return l.a.createElement(v,null,l.a.createElement(f.a,{expand:"sm"},l.a.createElement(f.a.Brand,{href:"/"},l.a.createElement(b.a,null)," NATIONAL PARKS EXPLORER"),l.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(g.a,{className:"mr-auto"},l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{href:"/parks"},"Parks")),localStorage.token?l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{href:"/future_visits"},"Future Visits")):null,localStorage.token?l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{href:"/past_visits"},"Past Visits")):null)),localStorage.token?l.a.createElement(g.a,{className:"ml-auto"},l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{name:"profile",href:"/profile"},"Profile")),l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{name:"logout",onClick:e.handleLogout},"Logout")),l.a.createElement("span",null," - "),l.a.createElement("input",{type:"text",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.searchChange(t)}})):l.a.createElement(g.a,{className:"ml-auto"},l.a.createElement(g.a.Item,null,l.a.createElement(g.a.Link,{name:"login",href:"/login"},"Login")),l.a.createElement("span",null," - "),l.a.createElement("input",{type:"text",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.searchChange(t)}}))))},y=a(100),S=a(101),N=a(98),P=a(102),C=a(107),j=a(99),V=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.park.park_images[Math.floor(Math.random()*this.props.park.park_images.length)];return l.a.createElement("div",{className:"pt-3"},l.a.createElement(C.a,null,l.a.createElement(N.a,{className:"p-1 card-img-bottom",onClick:function(t){return e.props.showPark(e.props.park)},style:{maxHeight:"20rem",maxWidth:"25rem",borderRadius:"10px"},src:t.url,alt:t.caption}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},this.props.park.name)),l.a.createElement(j.a,{className:"m-1",variant:"success",onClick:function(t){return e.props.logPastVisit(e.props.park)}},"Log Past Visit"),l.a.createElement(j.a,{className:"m-1",variant:"warning",onClick:function(t){return e.props.planNewVisit(e.props.park)}},"Plan New Visit")))}}]),a}(l.a.PureComponent),O=a(70),L=a.n(O),F=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement(S.a,{className:"justify-content-md-center"},l.a.createElement(N.a,{src:L.a,style:{maxHeight:"8rem"}})),l.a.createElement(P.a,null,l.a.createElement("div",null,this.props.parks.map(function(t){return l.a.createElement(V,{key:t.id,park:t,showPark:e.props.showPark,planNewVisit:e.props.planNewVisit,logPastVisit:e.props.logPastVisit})})))))}}]),a}(r.Component),x=a(71),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(y.a,null,this.props.pastVisits.map(function(e){var t=e.park.park_images[Math.floor(Math.random()*e.park.park_images.length)];return l.a.createElement(S.a,{className:"pt-3 pb-3 justify-content-md-center"},l.a.createElement(x.a,{md:9},l.a.createElement(C.a,null,l.a.createElement(C.a.Header,{as:"h2",className:"text-white",style:{background:"rgb(200, 110, 120)"}},e.park.fullname),l.a.createElement(C.a.Body,null,l.a.createElement("h3",null,"Title: ".concat(e.title)),l.a.createElement("h4",null,"By: ".concat(e.user.userName)),l.a.createElement("h4",null,"When: ".concat(e.season," ").concat(e.year)),l.a.createElement("p",null,e.description)),l.a.createElement(C.a.Img,{className:"p-2",variant:"bottom",style:{maxHeight:"20rem",borderRadius:"10px"},src:t?t.url:null}))))}))}}]),a}(r.Component),I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(y.a,null,this.props.futureVisits.map(function(e){var t=e.park.park_images[Math.floor(Math.random()*e.park.park_images.length)];return l.a.createElement(S.a,{className:"pt-3 pb-3 justify-content-md-center"},l.a.createElement(x.a,{md:9},l.a.createElement(C.a,null,l.a.createElement(C.a.Header,{as:"h2",className:"text-white",style:{background:"rgb(200, 110, 120)"}},e.park.fullname),l.a.createElement(C.a.Body,null,l.a.createElement("h3",null,"Title: ".concat(e.title)),l.a.createElement("h4",null,"By: ".concat(e.user.userName)),l.a.createElement("h4",null,"When: ".concat(e.season," ").concat(e.year)),l.a.createElement("p",null,e.description)),l.a.createElement(C.a.Img,{className:"p-2",variant:"bottom",style:{maxHeight:"20rem",borderRadius:"10px"},src:t?t.url:null}))))}))}}]),a}(r.Component),T=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Sorry, I don't know what to do."))},_=function(e){return l.a.createElement(l.a.Fragment,null,e.children)},B=a(72),H=a.n(B),M=a(73),A=a.n(M),G=function(e){var t=e.park,a=t.url,n=t.fullname,r=t.states,o=t.description,s=t.weatherInfo,i=t.park_images;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",{className:"text-center"},l.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},n))),l.a.createElement(H.a,{cssModule:A.a},i.map(function(e){return l.a.createElement("div",{key:e.id,"data-src":e.url})})),l.a.createElement("div",{className:"pt-4 text-dark"},l.a.createElement("h6",null,r),l.a.createElement("p",null,o),l.a.createElement("p",null,s),l.a.createElement(j.a,{type:"button",className:"btn btn-primary",onClick:e.backToParks},"Back"),l.a.createElement(j.a,{type:"button",className:"btn btn-success m-1 float-right",onClick:function(t){return e.logPastVisit(e.park)}},"Log Past Visit"),l.a.createElement(j.a,{type:"button",className:"btn btn-warning m-1 float-right",onClick:function(t){return e.planNewVisit(e.park)}}," ","Plan New Visit")))},J=a(61),R=a(53),W=(a(94),function(e){var t=Object(r.useState)({latitude:38.560954,longitude:-98.93524,zoom:4,width:"100vw",height:"93vh"}),a=Object(J.a)(t,2),n=a[0],o=a[1],s=Object(r.useState)(null),i=Object(J.a)(s,2),c=i[0],u=i[1],m=function(e){return e.latLong.slice(4).split(", long:").map(function(e){return parseFloat(e)})[0]},p=function(e){return e.latLong.slice(4).split(", long:").map(function(e){return parseFloat(e)})[1]};Object(r.useEffect)(function(){var e=function(e){return"Escape"===e.key&&u(null)};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[]);return l.a.createElement("div",null,l.a.createElement(R.c,Object.assign({},n,{mapboxApiAccessToken:"pk.eyJ1IjoiaGFueHUyNyIsImEiOiJjanh1ajF5bTIxNXZhM2xyczF4cXN4ZjJqIn0.058kHvghPXmU2LOnp_9bwA",mapStyle:"mapbox://styles/hanxu27/cjxvx303m18ce1cqhd5dg3029",onViewportChange:function(e){return o(e)}}),e.parks.map(function(e){return l.a.createElement(R.a,{key:e.id,latitude:m(e),longitude:p(e)},l.a.createElement("button",{className:"marker-btn",onClick:function(t){t.preventDefault(),u(e)}},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg",alt:"Park Logo"})))}),c&&l.a.createElement(R.b,{latitude:m(c),longitude:p(c),onClose:function(){return u(null)}},l.a.createElement(V,{park:c,showPark:e.showPark,planNewVisit:e.planNewVisit,logPastVisit:e.logPastVisit}))))}),q=a(76),D=a(103);function z(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Trip Title"),l.a.createElement("input",{required:!0,type:"text",id:"title",className:"form-control",name:"title",value:e.form.title,onChange:e.handleFormChange,placeholder:"My Awesome Trip"}),l.a.createElement("label",null,"Trip Review"),l.a.createElement("textarea",{name:"description",id:"description",className:"form-control",value:e.form.description,onChange:e.handleFormChange}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("label",null,"Season"),l.a.createElement("select",{name:"season",className:"form-control",onChange:e.handleFormChange,required:!0},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"Spring"},"Spring"),l.a.createElement("option",{value:"Summer"},"Summer"),l.a.createElement("option",{value:"Fall"},"Fall"),l.a.createElement("option",{value:"Winter"},"Winter"))),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("label",null,"Year"),l.a.createElement("input",{type:"text",id:"year",className:"form-control",name:"year",value:e.form.year,onChange:e.handleFormChange,placeholder:"2018",required:!0}))))))}var X=a(79),Z=a(78),K=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",season:"",year:""},e.handleFormChange=function(t){e.setState(Object(q.a)({},t.target.name,t.target.value))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(D.a,{onHide:this.props.onHide,show:this.props.show,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(D.a.Header,{closeButton:!0},l.a.createElement(D.a.Title,{id:"contained-modal-title-vcenter"},"".concat(this.props.newVisitState," Visit Form "),"Future"===this.props.newVisitState?l.a.createElement(Z.a,null):l.a.createElement(X.a,null))),l.a.createElement(D.a.Body,null,l.a.createElement(z,{form:this.state,handleFormChange:this.handleFormChange})),l.a.createElement(D.a.Footer,null,l.a.createElement(j.a,{className:"btn btn-success",onClick:function(t){return e.props.postVisit(e.state)}},"Create"),l.a.createElement(j.a,{className:"btn btn-danger",onClick:this.props.onHide},"Cancel")))}}]),a}(r.Component),Y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(y.a,null,l.a.createElement(S.a,{className:"pt-3 pb-5 justify-content-md-center"},l.a.createElement(x.a,{md:8},l.a.createElement(C.a,null,l.a.createElement(C.a.Img,{style:{width:"25%"},variant:"right",src:this.props.user.profilePicture}),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Title,null,"Hello, ",this.props.user.firstName,"!"),l.a.createElement(C.a.Text,null,"Welcome to your National Parks Explorer profile!")),l.a.createElement(C.a.Body,null,l.a.createElement(j.a,{variant:"primary",type:"submit",onClick:this.props.handleLogout},"Log Out"))))))}}]),a}(r.Component),$=a(104),Q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"handleSignUp",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement(S.a,{className:"pt-3 pb-5 justify-content-md-center"},l.a.createElement(x.a,{xs:5},l.a.createElement($.a,{onSubmit:this.props.handleCreateUser},l.a.createElement($.a.Group,null,l.a.createElement($.a.Label,null,"Username:"),l.a.createElement($.a.Control,{name:"userName",placeholder:"Enter your desired username"})),l.a.createElement($.a.Group,null,l.a.createElement($.a.Label,null,"Password:"),l.a.createElement($.a.Control,{name:"password",placeholder:"Enter your desired password"})),l.a.createElement($.a.Group,null,l.a.createElement($.a.Label,null,"First Name:"),l.a.createElement($.a.Control,{name:"firstName",placeholder:"Enter your first name"})),l.a.createElement($.a.Group,null,l.a.createElement($.a.Label,null,"Last Name:"),l.a.createElement($.a.Control,{name:"lastName",placeholder:"Enter your last name"})),l.a.createElement($.a.Group,null,l.a.createElement($.a.Label,null,"Profile Picture:"),l.a.createElement($.a.Control,{name:"profilePicture",placeholder:"Enter a photo URL"})),l.a.createElement(j.a,{variant:"primary",type:"submit"},"Submit New User"))))))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(y.a,null,l.a.createElement(S.a,{className:"pt-5 justify-content-md-center"},l.a.createElement(x.a,{xs:5},l.a.createElement($.a,{onSubmit:this.props.handleLogin},l.a.createElement($.a.Group,{controlId:"formBasicUsername"},l.a.createElement($.a.Label,null,"Username:"),l.a.createElement($.a.Control,{name:"userName",placeholder:"Enter username"})),l.a.createElement($.a.Group,{controlId:"formBasicPassword"},l.a.createElement($.a.Label,null,"Password:"),l.a.createElement($.a.Control,{name:"password",placeholder:"Enter password"})),l.a.createElement(j.a,{name:"login",variant:"primary",type:"submit"},"Submit"),l.a.createElement("br",null)," ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("h5",null,"Not registered?"),l.a.createElement(j.a,{variant:"primary",type:"submit",onClick:this.props.showSignUpForm},"Sign Up"))))),this.props.signUpForm?this.handleSignUp():null)}}]),a}(r.Component),ee="http://localhost:3000/",te=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).postVisit=function(e){var t=e;t.park_id=n.state.newVisit.park_id,t.user_id=n.state.user.id;var a=ee+n.state.newVisitState.toLowerCase()+"_visits";fetch(a,{method:"POST",headers:{"Content-Type":"application/json",accepts:"application/json"},body:JSON.stringify({visit:t})}).then(function(e){return e.json()}).then(function(e){if("Future"===n.state.newVisit){n.modalClose();var t=[].concat(Object(i.a)(n.state.futureVisits),[e]);n.setState({futureVisits:t,redirect:l.a.createElement(h.a,{to:"/future_visits"})})}else{n.modalClose();var a=[].concat(Object(i.a)(n.state.pastVisits),[e]);n.setState({pastVisits:a,redirect:l.a.createElement(h.a,{to:"/past_visits"})})}})},n.modalShow=function(){return n.setState({modalShow:!0})},n.modalClose=function(){return n.setState({modalShow:!1})},n.searchChange=function(e){return e.target.value.length>2?n.setState({search:e.target.value.toLowerCase()}):n.setState({search:e.target.value})},n.showPark=function(e){return n.setState({showPark:e})},n.backToParks=function(){return n.setState({showPark:!1})},n.filterPark=function(e){var t=n.state.search;return e.fullname.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.weatherInfo.toLowerCase().includes(t)||e.states.includes(t)},n.planNewVisit=function(e){n.setState({newVisitState:"Future",newVisit:{park_id:e.id}}),n.modalShow()},n.logPastVisit=function(e){n.setState({newVisitState:"Past",newVisit:{park_id:e.id}}),n.modalShow()},n.displayParks=function(){return n.state.parks.filter(function(e){return n.filterPark(e)})},n.checkCurrentUser=function(){var e=localStorage.token;fetch(ee+"profile",{method:"GET",headers:{Authorization:e}}).then(function(e){return e.json()}).then(function(e){return n.setState({user:e.user})})},n.handleLogin=function(e){e.preventDefault();var t={userName:e.target.userName.value,password:e.target.password.value};fetch(ee+"login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})}).then(function(e){return e.json()}).then(function(e){e.message?(alert("Sorry, your username or password is incorrect."),n.setState({errors:e.message},function(){return console.log("errors",n.state.errors)})):(n.setState({user:e.user,redirect:l.a.createElement(h.a,{to:"/profile"})}),localStorage.setItem("token",e.jwt),window.history.pushState({url:"/profile"},"","/profile"),n.forceUpdate())}),e.target.reset()},n.handleLogout=function(){localStorage.removeItem("token"),n.setState({redirect:l.a.createElement(h.a,{to:"/login"})})},n.handleCreateUser=function(e){e.preventDefault(),console.log(e.target);var t={userName:e.target.userName.value,password:e.target.password.value,firstName:e.target.firstName.value,lastName:e.target.lastName.value,profilePicture:e.target.profilePicture.value};fetch(ee+"users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})}).then(function(e){return e.json()}).then(function(e){e.errors?(alert("Sorry, your username or password is incorrect."),n.setState({errors:e.message},function(){return console.log("errors",n.state.errors)})):(n.setState({user:e.user,signUpForm:!1,redirect:l.a.createElement(h.a,{to:"/profile"})}),localStorage.setItem("token",e.jwt),window.history.pushState({url:"/profile"},"","/profile"),n.forceUpdate())})},n.showSignUpForm=function(e){e.preventDefault(),n.state.signUpForm?n.setState({signUpForm:!1}):n.setState({signUpForm:!0})},n.state={newVisitState:"",newVisit:{},modalShow:!1,parks:[],showPark:!1,pastVisits:[],futureVisits:[],search:"",user:{},signUpForm:!1},n}return Object(u.a)(a,[{key:"fetchParks",value:function(){var e=this;fetch(ee+"parks").then(function(e){return e.json()}).then(function(t){return e.setState({parks:t})})}},{key:"fetchVisits",value:function(){var e=this;fetch(ee+"past_visits").then(function(e){return e.json()}).then(function(t){e.setState({pastVisits:t})}),fetch(ee+"future_visits").then(function(e){return e.json()}).then(function(t){e.setState({futureVisits:t})})}},{key:"componentDidMount",value:function(){this.fetchParks(),this.fetchVisits(),localStorage.token&&this.checkCurrentUser()}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(K,{show:this.state.modalShow,onHide:this.modalClose,newVisitState:this.state.newVisitState,postVisit:this.postVisit}),l.a.createElement(w,{searchChange:this.searchChange,loggedIn:this.state.loggedIn,handleLogout:this.handleLogout}),l.a.createElement(_,null,l.a.createElement(d.a,null,this.state.redirect,l.a.createElement(h.d,null,l.a.createElement(h.b,{exact:!0,path:"/",render:function(){return e.state.showPark?l.a.createElement(G,{park:e.state.showPark,backToParks:e.backToParks,planNewVisit:e.planNewVisit,logPastVisit:e.logPastVisit}):l.a.createElement(W,{parks:e.displayParks(),showPark:e.showPark,planNewVisit:e.planNewVisit,logPastVisit:e.logPastVisit})}}),l.a.createElement(h.b,{path:"/parks",render:function(){return e.state.showPark?l.a.createElement(G,{park:e.state.showPark,backToParks:e.backToParks}):l.a.createElement(F,{parks:e.displayParks(),showPark:e.showPark,planNewVisit:e.planNewVisit,logPastVisit:e.logPastVisit})}}),l.a.createElement(h.b,{path:"/past_visits",render:function(){return l.a.createElement(U,{pastVisits:e.state.pastVisits})}}),l.a.createElement(h.b,{path:"/future_visits",render:function(){return l.a.createElement(I,{futureVisits:e.state.futureVisits})}}),l.a.createElement(h.b,{path:"/login",render:function(){return l.a.createElement(Q,{handleLogin:e.handleLogin,handleLogout:e.handleLogout,handleCreateUser:e.handleCreateUser,showSignUpForm:e.showSignUpForm,signUpForm:e.state.signUpForm})}}),l.a.createElement(h.b,{path:"/profile",render:function(){return l.a.createElement(Y,{parks:e.state.user.parks,user:e.state.user,handleLogout:e.handleLogout})}}),l.a.createElement(h.b,{component:T})))))}}]),a}(r.Component);var ae=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[84,1,2]]]);
//# sourceMappingURL=main.eb5ef51b.chunk.js.map