(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(27),o=a.n(s),r=(a(62),a(64),a(120)),l=a(8),c=a(9),u=a(12),m=a(10),d=a(11),v=a(4),f=a(119),p=a(31),h=a.n(p),_=a(35),E=a.n(_),g=a(23),N=a.n(g),b=[{to:"/",label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",exact:!0},{to:"/catalog/",label:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433",exact:!1},{to:"/constructor/",label:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440",exact:!1}],I=function(e){var t=e.user;return i.a.createElement("ul",{className:N.a.MainNav},t&&b.map(function(e,t){var a=t+e;return i.a.createElement("li",{key:a,className:N.a.MainNavItem},i.a.createElement(f.a,{to:e.to,exact:e.exact,className:N.a.MainNavItemLink,activeClassName:N.a.MainNavItemLinkActive},e.label))}))};I.defaultProps={user:null};var T=I,C=a(24),w=a.n(C),y=function(e){var t=e.user,a=e.onLogIn,n=e.onLogOut;return i.a.createElement("div",{className:w.a.UserNav},t?i.a.createElement("div",{className:w.a.UserNavPicWrapper,title:t.displayName},i.a.createElement("img",{className:w.a.UserNavPic,src:t.photoURL,alt:t.displayName})):null,i.a.createElement("button",{className:w.a.UserNavBtn,type:"button",onClick:t?n:a},t?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438"))};y.defaultProps={user:null};var A=y,k=function(e){var t=e.user,a=e.onLogIn,n=e.onLogOut;return i.a.createElement("nav",{className:E.a.Navigation},i.a.createElement("div",{className:E.a.NavigationWrapper},i.a.createElement(T,{user:t}),i.a.createElement(A,{user:t,onLogIn:a,onLogOut:n})))};k.defaultProps={user:null};var O=k,j=function(e){var t=e.user,a=e.onLogIn,n=e.onLogOut;return i.a.createElement("header",{className:h.a.Header},i.a.createElement("div",{className:h.a.HeaderInner},i.a.createElement(f.a,{className:h.a.HeaderLogo,to:"/"},"\u0418\u043d\u0441\u0430\u0439\u0434\u0438\u044f"),i.a.createElement(O,{user:t,onLogIn:a,onLogOut:n})))};j.defaultProps={user:null};var L=j,F=a(122),P=a(71),M=a(121),S=a(123),x=a(36),R=a.n(x),B=function(e){var t=e.children;return i.a.createElement("div",{className:R.a.Layout},i.a.createElement("main",{className:R.a.LayoutMain},t))};B.defaultProps={children:null};var q=B,z=a(52),W=a.n(z),Q=function(){return i.a.createElement("div",{className:W.a.Main},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")},D=a(32),H=a.n(D),U=a(25),K=a.n(U),J=function(e){var t=e.links;return i.a.createElement("nav",{className:K.a.Navigation},t.map(function(e,t){var a=t+e;return i.a.createElement("li",{key:a,className:K.a.NavigationItem},i.a.createElement(f.a,{to:e.to,exact:e.exact,className:K.a.NavigationItemLink,activeClassName:K.a.NavigationItemLinkActive},e.label))}))},X=a(37),Z=a(20),G=a.n(Z),Y=a(73),V=a(16),$=a.n(V),ee=(a(88),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).ironImageRef=i.a.createRef(),a.preloadImageRef=i.a.createRef(),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=new window.Image;a.src=t.srcLoaded,a.addEventListener("load",function(){e.ironImageRef.current&&(e.ironImageRef.current.setAttribute("style","background-image: url('".concat(t.srcLoaded,"')")),e.ironImageRef.current.classList.add("iron-image-fade-in"),e.preloadImageRef.current.style.background="none")})}},{key:"render",value:function(){return i.a.createElement("div",{className:"iron-image-container"},i.a.createElement("div",{className:"iron-image-loaded",ref:this.ironImageRef}),i.a.createElement("div",{className:"iron-image-preload",style:{backgroundImage:"url('img/default.png')"},ref:this.preloadImageRef}))}}]),t}(n.Component)),te=function(e){var t=e.id,a=e.image,n=e.name,s=e.title,o=e.description,r=e.isEditable,l=e.onRemoveBtnClick,c=e.onEditBtnClick,u=e.isFavorite,m=e.onFavoriteBtnClick,d=e.location;return i.a.createElement("div",{className:$.a.Test},i.a.createElement("div",{className:$.a.TestWrapper},i.a.createElement("div",{className:$.a.TestTopIcons},r&&i.a.createElement("button",{onClick:function(){return l(t)},type:"button"},i.a.createElement("i",{className:"far fa-times-circle"})),i.a.createElement("button",{style:{margin:"0 auto"},onClick:function(){return m(t)},type:"button"},i.a.createElement("i",{className:u?"fa fa-heart":"far fa-heart"})),r&&i.a.createElement("button",{onClick:function(){return c(t)},type:"button"},i.a.createElement("i",{className:"far fa-edit"}))),i.a.createElement("div",{className:$.a.TestProfile},i.a.createElement(ee,{srcPreload:a,srcLoaded:a||"img/default.png"}),i.a.createElement("div",{className:$.a.TestProfileCheck},i.a.createElement("i",{className:"fas fa-check"})),i.a.createElement("h3",{className:$.a.TestProfileName},n),i.a.createElement("p",{className:$.a.TestProfileTitle},s),i.a.createElement("p",{className:$.a.TestProfileDescription},o),i.a.createElement(Y.a,{to:{pathname:"".concat(t,"/"),state:{from:d}},className:$.a.TestProfileBtn},"\u041a \u0442\u0435\u0441\u0442\u0430\u043c"))))};te.defaultProps={image:"",title:"",isEditable:!1},te.defaultProps={onRemoveBtnClick:function(){},onFavoriteBtnClick:function(){},onEditBtnClick:function(){}};var ae=te,ne=(a(90),function(e){var t=e.data,a=e.editor,n=e.location,s=i.a.createElement("div",{className:G.a.EmptyList},"\u0422\u0435\u0441\u0442\u044b \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u044b."),o=0!==Object.keys(a).length;return t.length||o?i.a.createElement(X.TransitionGroup,{component:null},t.map(function(e){var t=e.info;return i.a.createElement(X.CSSTransition,{key:t.id,timeout:500,classNames:"move"},i.a.createElement(ae,{id:t.id,isEditable:a.isEditable,isFavorite:t.isFavorite,image:t.image,name:t.name,title:t.title,description:t.description,onRemoveBtnClick:a.onRemove,onFavoriteBtnClick:a.onAddToFavorites,onEditBtnClick:a.onEdit,location:n}))})):s});ne.defaultProps={editor:{}};var ie=Object(S.a)(ne),se=a(54),oe=a.n(se),re=a(38),le=a.n(re),ce={numeric:"\u0427\u0438\u0441\u043b\u043e\u0432\u044b\u0435",verbal:"\u0412\u0435\u0440\u0431\u0430\u043b\u044c\u043d\u044b\u0435",logical:"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435"},ue={numeric:"#edebff",verbal:"#e4e4fe",logical:"#e4e4fe"},me=function(e){var t=e.children,a=e.to,n=e.location,s=a?i.a.createElement(f.a,{className:le.a.content,to:{pathname:a,state:{from:n}}},t):t;return i.a.createElement("td",null,s)};me.defaultProps={to:null,children:[]};var de=function(e){var t=e.tests,a=e.location,n=new Map,s=t.sort(function(e,t){var a=ce[e.type],n=ce[t.type];return a.localeCompare(n)});return i.a.createElement("table",{className:le.a.TestsTable,cellSpacing:"0"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"\u0422\u0438\u043f"),i.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),i.a.createElement("th",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432"),i.a.createElement("th",null,"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f"),i.a.createElement("th",null,"\u041f\u0440\u043e\u0439\u0434\u0435\u043d"))),i.a.createElement("tbody",null,s.map(function(e){var t="";return n.get(ce[e.type])||(t=ce[e.type],n.set(t,!0)),i.a.createElement("tr",{style:{backgroundColor:t&&ue[e.type]},key:e.id},i.a.createElement(me,{to:"".concat(e.id),location:a},"".concat(t)),i.a.createElement(me,{to:"".concat(e.id),location:a},"".concat(e.name)),i.a.createElement(me,{to:"".concat(e.id),location:a},"".concat(e.questionCount)),i.a.createElement(me,{to:"".concat(e.id),location:a},"".concat(e.time)),i.a.createElement(me,{to:"".concat(e.id),location:a},null!==e.isFinished?i.a.createElement("img",{width:"30",height:"30",src:e.isFinished?"img/icon-tick.svg":"img/icon-error.svg",alt:e.name}):null))})))},ve=a(1),fe=a.n(ve),pe=a(18),he=a.n(pe),_e=function(e){var t=e.image,a=e.name,n=e.title,s=e.description,o=e.isFavorite;return i.a.createElement("div",{className:he.a.Test},i.a.createElement("div",{className:he.a.TestWrapper},i.a.createElement("div",{className:he.a.TestTopIcons},i.a.createElement("i",{style:{margin:"0 auto"},className:o?"fa fa-heart":"far fa-heart"})),i.a.createElement("div",{className:he.a.TestProfile},i.a.createElement(ee,{srcPreload:t,srcLoaded:t||"img/default.png"}),i.a.createElement("div",{className:he.a.TestProfileCheck},i.a.createElement("i",{className:"fas fa-check"})),i.a.createElement("h3",{className:he.a.TestProfileName},a),i.a.createElement("p",{className:he.a.TestProfileTitle},n),i.a.createElement("p",{className:he.a.TestProfileDescription},s))))};_e.defaultProps={image:fe.a.string,title:fe.a.string};var Ee=_e,ge=function(e){var t=e.data,a=e.location;return i.a.createElement("div",{className:oe.a.TestInfo},i.a.createElement(de,{tests:t.quizes,location:a}),i.a.createElement(Ee,{image:t.image,name:t.name,title:t.title,description:t.description,isFavorite:t.isFavorite,location:a}))},Ne=a(6),be=a.n(Ne),Ie=a(39),Te=a.n(Ie),Ce=function(){return i.a.createElement("div",{className:Te.a.center},i.a.createElement("div",{className:Te.a.Loader},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))},we=function(e){return function(t){function a(e){var t;return Object(l.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={data:[],isLoading:!0},t}return Object(d.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.testsRef=be.a.database().ref("tests"),this.testsRef.on("value",function(t){var a=t.val(),n=Object.keys(a||{}).reverse().map(function(e){var t=a[e];return t.info.id=e,t});e.setState({data:n,isLoading:!1})})}},{key:"componentWillUnmount",value:function(){this.testsRef.off()}},{key:"render",value:function(){var t=this.state,a=this.props;return t.isLoading?i.a.createElement(Ce,null):i.a.createElement(e,{data:t.data,editor:a.editor})}}]),a}(n.Component)},ye=[{id:1,type:"numeric",name:"\u0422\u0435\u0441\u0442 1",questionCount:"15",time:"22:00",isFinished:null},{id:2,type:"numeric",name:"\u0422\u0435\u0441\u0442 1",questionCount:"15",time:"22:00",isFinished:null},{id:3,type:"numeric",name:"\u0422\u0435\u0441\u0442 1",questionCount:"15",time:"22:00",isFinished:null},{id:4,type:"verbal",name:"\u0422\u0435\u0441\u0442 2",questionCount:"5",time:"15:00",isFinished:null},{id:5,type:"verbal",name:"\u0422\u0435\u0441\u0442 2",questionCount:"5",time:"15:00",isFinished:null},{id:6,type:"logical",name:"\u0422\u0435\u0441\u0442 1",questionCount:"24",time:"30:00",isFinished:null},{id:7,type:"logical",name:"\u0422\u0435\u0441\u0442 1",questionCount:"24",time:"30:00",isFinished:null},{id:8,type:"logical",name:"\u0422\u0435\u0441\u0442 1",questionCount:"24",time:"30:00",isFinished:null}],Ae=function(e){return function(t){function a(e){var t;return Object(l.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={test:{},isLoading:!0},t}return Object(d.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.itemsRef=be.a.database().ref("tests/".concat(t)),this.itemsRef.on("value",function(a){var n=a.val();n&&(n.id=t,n.quizes=ye,e.setState({test:n,isLoading:!1}))})}},{key:"componentWillUnmount",value:function(){this.itemsRef.off()}},{key:"render",value:function(){var t=this.state,a=this.props;return t.isLoading?i.a.createElement(Ce,null):i.a.createElement(e,{data:t.test,location:a.location})}}]),a}(n.Component)},ke=a(17),Oe=a(40),je=a.n(Oe),Le=a(41),Fe=a.n(Le),Pe=a(55),Me=a.n(Pe),Se=a(42),xe=a.n(Se),Re=function(e){var t=e.answer,a=e.onAnswerClick,n=e.state,s=[xe.a.AnswerItem];return n&&s.push(xe.a[n]),i.a.createElement("li",{className:s.join(" "),onClick:function(){return a(t.id)}},t.text)};Re.defaultProps={state:null};var Be=Re,qe=function(e){var t=e.answers,a=e.onAnswerClick,n=e.state;return i.a.createElement("ul",{className:Me.a.AnswersList},t.map(function(e,t){var s=e+t;return i.a.createElement(Be,{key:s,answer:e,onAnswerClick:a,state:n?n[e.id]:null})}))};qe.defaultProps={state:null};var ze=qe,We=function(e){var t=e.answers,a=e.question,n=e.onAnswerClick,s=e.answerNumber,o=e.quizLength,r=e.state;return i.a.createElement("div",{className:Fe.a.ActiveQuiz},i.a.createElement("p",{className:Fe.a.Question},i.a.createElement("span",null,i.a.createElement("strong",null,s,"."),"\xa0",a),i.a.createElement("small",null,s,"\xa0\u0438\u0437\xa0",o)),i.a.createElement(ze,{state:r,answers:t,onAnswerClick:n}))};We.defaultProps={state:null};var Qe=We,De=a(43),He=a.n(De),Ue=Object(S.a)(function(e){var t=e.results,a=e.quiz,n=e.onRetry,s=e.location,o=Object.keys(t).reduce(function(e,a){var n=e;return"success"===t[a]&&(n+=1),n},0);return i.a.createElement("div",{className:He.a.FinishedQuiz},i.a.createElement("ul",null,a.map(function(e,a){var n=e+a,s=["fa","error"===t[e.id]?"fa-times":"fa-check",He.a[t[e.id]]];return i.a.createElement("li",{key:n},i.a.createElement("strong",null,a+1),". \xa0",e.question,i.a.createElement("i",{className:s.join(" ")}))})),i.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\xa0",o,"\xa0\u0438\u0437\xa0",a.length),i.a.createElement("div",null,i.a.createElement("button",{className:"btn",onClick:n,type:"button"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),i.a.createElement(Y.a,{to:s.state.from},i.a.createElement("button",{className:"btn",type:"button"},"\u041d\u0430\u0437\u0430\u0434 \u043a \u0442\u0435\u0441\u0442\u0430\u043c"))))}),Ke=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[{id:1,question:"2 + 2 ?",answers:[{text:"125",id:1},{text:"2",id:2},{text:"3",id:3},{text:"4",id:4}],rightAnswerId:4},{id:2,question:"\u0412\u043e\u043f\u0440\u043e\u0441?",answers:[{text:"\u041e\u0442\u0432\u0435\u0442?",id:1},{text:"\u0414\u0430",id:2},{text:"\u041d\u0435\u0442",id:3},{text:"\u041b\u043e\u043f\u0430\u0442\u0430",id:4}],rightAnswerId:2},{id:3,question:"\u041f\u0440\u0438\u0432\u0435\u0442?",answers:[{text:"\u0414\u0430",id:1},{text:"\u041d\u0435\u0442",id:2},{text:"\u041f\u0440\u0438\u0432\u0435\u0442",id:3},{text:"\u0427\u0442\u043e?",id:4}],rightAnswerId:3},{id:4,question:"\u041a\u0430\u043a\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u043d\u0435\u0431\u043e?",answers:[{text:"\u0427\u0435\u0440\u043d\u044b\u0439",id:1},{text:"\u0421\u0438\u043d\u0438\u0439",id:2},{text:"\u041a\u0440\u0430\u0441\u043d\u044b\u0439",id:3},{text:"\u0417\u0435\u043b\u0435\u043d\u044b\u0439",id:4}],rightAnswerId:2},{id:5,question:"\u0412 \u043a\u0430\u043a\u043e\u043c \u0433\u043e\u0434\u0443 \u043e\u0441\u043d\u043e\u0432\u0430\u043b\u0438 \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433?",answers:[{text:"1700",id:1},{text:"1702",id:2},{text:"1703",id:3},{text:"1803",id:4}],rightAnswerId:3}]},a.onAnswerClickHandler=a.onAnswerClickHandler.bind(Object(v.a)(Object(v.a)(a))),a.onRetryHandler=a.onRetryHandler.bind(Object(v.a)(Object(v.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onAnswerClickHandler",value:function(e){var t=this,a=this.state,n=a.results,i=a.quiz[a.activeQuestion];if(a.answerState){var s=Object.keys(a.answerState)[0];if("success"===a.answerState[s])return}if(i.rightAnswerId===e){n[i.id]||(n[i.id]="success"),this.setState({answerState:Object(ke.a)({},e,"success"),results:n});var o=window.setTimeout(function(){t.isQuizFinished()?t.setState({isFinished:!0}):t.setState(function(e){return{activeQuestion:e.activeQuestion+1,answerState:null}}),window.clearTimeout(o)},1e3)}else n[i.id]="error",this.setState({answerState:Object(ke.a)({},e,"error"),results:n})}},{key:"onRetryHandler",value:function(){this.setState({results:{},isFinished:!1,activeQuestion:0,answerState:null})}},{key:"isQuizFinished",value:function(){var e=this.state;return e.activeQuestion+1===e.quiz.length}},{key:"render",value:function(){var e=this.state,t=this.props;return i.a.createElement("div",{className:je.a.Quiz},i.a.createElement("div",{className:je.a.QuizWrapper},i.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),e.isFinished?i.a.createElement(Ue,{results:e.results,quiz:e.quiz,onRetry:this.onRetryHandler,location:t.location}):i.a.createElement(Qe,{question:e.quiz[e.activeQuestion].question,answers:e.quiz[e.activeQuestion].answers,onAnswerClick:this.onAnswerClickHandler,answerNumber:e.activeQuestion+1,quizLength:e.quiz.length,state:e.answerState})))}}]),t}(n.Component),Je=[{to:"/catalog/tests/",label:"\u0422\u0435\u0441\u0442\u044b",exact:!1}],Xe=we(ie),Ze=Ae(ge),Ge=Object(S.a)(function(e){var t=e.location;return i.a.createElement("div",{className:H.a.CatalogContentWrapper},i.a.createElement("div",{className:H.a.CatalogContent},i.a.createElement(F.a,{location:t},i.a.createElement(P.a,{path:"/catalog/tests/:id/:id",component:Ke}),i.a.createElement(P.a,{path:"/catalog/tests/:id/",component:Ze}),i.a.createElement(P.a,{path:"/catalog/tests/",component:Xe}))))}),Ye=function(){return i.a.createElement("div",{className:H.a.Catalog},i.a.createElement(J,{links:Je}),i.a.createElement(Ge,null))},Ve=a(33),$e=a.n(Ve),et=a(44),tt=a(34),at=a.n(tt),nt=(a(113),a(56)),it=a.n(nt),st=a(5),ot=a.n(st),rt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={image:"",name:"",title:"",description:""},a.nameRef=i.a.createRef(),a.onChange=a.onChange.bind(Object(v.a)(Object(v.a)(a))),a.onSubmit=a.onSubmit.bind(Object(v.a)(Object(v.a)(a))),a.onReset=a.onReset.bind(Object(v.a)(Object(v.a)(a))),a.handleFiles=a.handleFiles.bind(Object(v.a)(Object(v.a)(a))),a.removeImage=a.removeImage.bind(Object(v.a)(Object(v.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.nameRef.current.focus()},400);var t=this.props;t.data&&setTimeout(function(){e.setState({image:{base64:t.data.image||"img/default.png",fileList:[{}]},name:t.data.name,title:t.data.title,description:t.data.description})})}},{key:"onChange",value:function(e){var t=e.target;this.setState(Object(ke.a)({},t.name,t.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=this.props;this.setState({isSaving:!0}),n.onAddItem(a).then(function(){t.reset(),t.setState({isSaving:!1})})}},{key:"onReset",value:function(){this.reset()}},{key:"removeImage",value:function(){this.setState({image:""})}},{key:"reset",value:function(){this.setState({image:"",name:"",title:"",description:""})}},{key:"handleFiles",value:function(e){this.setState({image:e})}},{key:"render",value:function(){var e=this.state,t=e.image?e.image.base64:"img/default.png",a=e.image?e.image.fileList[0].name:"Default image";return i.a.createElement("form",{className:ot.a.AddNewItemForm,onSubmit:this.onSubmit,autoComplete:"off"},e.isSaving&&i.a.createElement("div",{className:ot.a.AddNewItemPicSpinner}),i.a.createElement("div",{className:ot.a.AddNewItemPic},i.a.createElement("div",{className:ot.a.AddNewItemImgWrapper},i.a.createElement("img",{src:t,alt:a})),i.a.createElement("div",{className:ot.a.AddNewItemPicBtns},i.a.createElement(it.a,{handleFiles:this.handleFiles,base64:!0,multipleFiles:!1},i.a.createElement("button",{className:ot.a.AddNewItemBtnAddPic,type:"button"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")),e.image&&"img/default.png"!==e.image.base64&&i.a.createElement("button",{className:ot.a.AddNewItemBtnDeletePic,type:"button",onClick:this.removeImage},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))),i.a.createElement("label",{className:ot.a.AddNewItemLabel,htmlFor:"name"},i.a.createElement("input",{ref:this.nameRef,className:ot.a.AddNewItemInput,type:"text",id:"name",name:"name",value:e.name||"",onChange:this.onChange,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",spellCheck:"false",required:!0}),i.a.createElement("span",{className:ot.a.AddNewItemInputBorder})),i.a.createElement("label",{className:ot.a.AddNewItemLabel,htmlFor:"title"},i.a.createElement("input",{className:ot.a.AddNewItemInput,type:"text",id:"title",name:"title",value:e.title||"",onChange:this.onChange,placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",spellCheck:"false",required:!0}),i.a.createElement("span",{className:ot.a.AddNewItemInputBorder})),i.a.createElement("label",{className:ot.a.AddNewItemLabel,htmlFor:"description"},i.a.createElement("input",{className:ot.a.AddNewItemInput,type:"text",id:"description",name:"description",value:e.description||"",onChange:this.onChange,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",spellCheck:"false",required:!0}),i.a.createElement("span",{className:ot.a.AddNewItemInputBorder})),i.a.createElement("div",{className:ot.a.AddNewItemActions},i.a.createElement("button",{className:ot.a.AddNewItemActionBtn,type:"submit"},"Submit"),i.a.createElement("button",{className:ot.a.AddNewItemActionBtn,type:"button",onClick:this.onReset},"Reset")))}}]),t}(n.Component),lt=[{id:1,type:"numeric",name:"\u0422\u0435\u0441\u0442 1",questionCount:"15",time:"22:00",isFinished:null},{id:2,type:"numeric",name:"\u0422\u0435\u0441\u0442 1",questionCount:"15",time:"22:00",isFinished:null},{id:3,type:"numeric",name:"\u0422\u0435\u0441\u0442 1",questionCount:"15",time:"22:00",isFinished:null},{id:4,type:"verbal",name:"\u0422\u0435\u0441\u0442 2",questionCount:"5",time:"15:00",isFinished:null},{id:5,type:"verbal",name:"\u0422\u0435\u0441\u0442 2",questionCount:"5",time:"15:00",isFinished:null},{id:6,type:"logical",name:"\u0422\u0435\u0441\u0442 1",questionCount:"24",time:"30:00",isFinished:null},{id:7,type:"logical",name:"\u0422\u0435\u0441\u0442 1",questionCount:"24",time:"30:00",isFinished:null},{id:8,type:"logical",name:"\u0422\u0435\u0441\u0442 1",questionCount:"24",time:"30:00",isFinished:null}],ct=function(e){return function(t){function a(e){var t;return Object(l.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={test:{},isLoading:!0},t}return Object(d.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;this.itemsRef=be.a.database().ref("tests/".concat(t)),this.itemsRef.on("value",function(a){var n=a.val();n&&(n.id=t,n.quizes=lt,e.setState({test:n,isLoading:!1}))})}},{key:"componentWillUnmount",value:function(){this.itemsRef.off()}},{key:"render",value:function(){var t=this,a=this.state,n=this.props,s={isEditable:!0,onRemove:function(e){return t.showModal(e,"delete")},onAddToFavorites:this.addToFavorite,onEdit:function(e){return t.showModal(e,"edit")}};return a.isLoading?i.a.createElement(Ce,null):i.a.createElement(e,{data:a.test,location:n.location,editor:s})}}]),a}(n.Component)},ut=[{to:"/constructor/tests/",label:"\u0422\u0435\u0441\u0442\u044b",exact:!1}],mt=function(e){return function(t){function a(e){var t;return Object(l.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={isLoading:!0,modal:{isRendered:!1,visible:!1,id:null,data:null},data:[]},t.removeCard=t.removeCard.bind(Object(v.a)(Object(v.a)(t))),t.handleChange=t.handleChange.bind(Object(v.a)(Object(v.a)(t))),t.addToFavorite=t.addToFavorite.bind(Object(v.a)(Object(v.a)(t))),t.editItem=t.editItem.bind(Object(v.a)(Object(v.a)(t))),t.showModal=t.showModal.bind(Object(v.a)(Object(v.a)(t))),t.hideModal=t.hideModal.bind(Object(v.a)(Object(v.a)(t))),t}return Object(d.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.testsRef=be.a.database().ref("tests"),this.testsRef.on("value",function(t){var a=t.val(),n=Object.keys(a||{}).reverse().map(function(e){var t=a[e];return t.info.id=e,t});e.setState({data:n,isLoading:!1})})}},{key:"componentWillUnmount",value:function(){this.testsRef.off()}},{key:"addItem",value:function(e){var t=this;return new Promise(function(a,n){var i=be.a.database().ref("tests"),s=be.a.storage().ref("tests"),o={info:{name:e.name,title:e.title,description:e.description,isFavorite:!1}};if(e.image){var r=e.image;s.child(r.fileList[0].name).put(r.fileList[0]).then(function(e){e.ref.getDownloadURL().then(function(e){o.info.image=e,i.push(o),t.hideModal()})},function(){n(),t.hideModal()})}else i.push(o),a(),t.hideModal()})}},{key:"showModal",value:function(e,t){var a=this.state.data.filter(function(t){return t.info.id===e});this.setState({modal:{isRendered:!0,visible:!0,id:e,action:t,data:a.length?a[0].info:null}})}},{key:"hideModal",value:function(){this.setState(function(e){return{modal:{isRendered:e.modal.isRendered,visible:!1,id:null,action:e.modal.action}}})}},{key:"removeCard",value:function(e){e.preventDefault();var t=this.state.modal;be.a.database().ref("/tests/".concat(t.id)).remove(),this.hideModal()}},{key:"handleChange",value:function(e){var t=this.state.newItem,a={info:Object(ke.a)({},e.target.name,e.target.value),quizes:{}};this.setState({newItem:Object(et.a)({},t,a)}),this.hideModal()}},{key:"addToFavorite",value:function(e){var t=this.state.data.filter(function(t){return t.info.id===e})[0];be.a.database().ref("/tests/".concat(e,"/info")).update({isFavorite:!t.info.isFavorite})}},{key:"editItem",value:function(e){var t=this;return new Promise(function(){var a=t.state;be.a.database().ref("/tests/".concat(a.modal.id,"/info")).update(Object(et.a)({},e,{image:e.image?e.image.base64:null})).then(function(){t.hideModal()})})}},{key:"render",value:function(){var t=this,a=this.state,n=a.isLoading,s=a.data,o=a.modal,r={isEditable:!0,onRemove:function(e){return t.showModal(e,"delete")},onAddToFavorites:this.addToFavorite,onEdit:function(e){return t.showModal(e,"edit")}};return i.a.createElement("div",{className:G.a.Tests},n?i.a.createElement(Ce,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:G.a.NewTestBtn,onClick:function(){return t.showModal(null,"add")},type:"button"}),i.a.createElement(e,{data:s,editor:r})),i.a.createElement(at.a,{visible:o.visible&&"delete"===o.action,width:300,height:65,closeOnEsc:!0,onClose:this.hideModal},i.a.createElement("div",{className:G.a.DeleteModal},i.a.createElement("button",{className:G.a.DeleteModalBtn,onClick:this.removeCard,type:"button"},"Delete"),i.a.createElement("button",{className:G.a.DeleteModalBtn,onClick:this.hideModal,type:"button"},"Cancel"))),o.isRendered&&"add"===o.action&&i.a.createElement(at.a,{visible:o.visible,width:300,height:350,closeOnEsc:!0,onClose:this.hideModal,onAnimationEnd:function(){return!o.visible&&t.setState({modal:{isRendered:!1}})}},i.a.createElement(rt,{onAddItem:function(e){return t.addItem(e)}})),o.isRendered&&"edit"===o.action&&i.a.createElement(at.a,{visible:o.visible,width:300,height:350,closeOnEsc:!0,onClose:this.hideModal,onAnimationEnd:function(){return!o.visible&&t.setState({modal:{isRendered:!1}})}},i.a.createElement(rt,{data:o.data,onAddItem:function(e){return t.editItem(e)}})))}}]),a}(n.Component)}(ie),dt=ct(ge),vt=Object(S.a)(function(e){var t=e.location;return i.a.createElement("div",{className:$e.a.ConstructorContentWrapper},i.a.createElement("div",{className:$e.a.ConstructorContent},i.a.createElement(F.a,{location:t},i.a.createElement(P.a,{path:"/constructor/tests/:id/:id",component:Ke}),i.a.createElement(P.a,{path:"/constructor/tests/:id/",component:dt}),i.a.createElement(P.a,{path:"/constructor/tests/",component:mt}))))}),ft=function(){return i.a.createElement("div",{className:$e.a.Constructor},i.a.createElement(J,{links:ut}),i.a.createElement(vt,null))},pt=function(e){var t=e.user;return i.a.createElement(q,null,t?i.a.createElement(F.a,null,i.a.createElement(P.a,{path:"/",exact:!0,component:Q}),i.a.createElement(M.a,{from:"/catalog",exact:!0,to:"/catalog/tests/"}),i.a.createElement(P.a,{path:"/catalog/",component:Ye}),i.a.createElement(M.a,{from:"/constructor",exact:!0,to:"/constructor/tests/"}),i.a.createElement(P.a,{path:"/constructor",component:ft})):null)};pt.defaultProps={user:null};var ht=Object(S.a)(pt),_t=a(26),Et=a.n(_t),gt=function(){return i.a.createElement("footer",{className:Et.a.Footer},i.a.createElement("div",{className:Et.a.FooterWrapper},i.a.createElement(f.a,{className:Et.a.FooterLogo,to:"/"},"\u0418\u043d\u0441\u0430\u0439\u0434\u0438\u044f, 2018"),i.a.createElement("div",null,"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c:",i.a.createElement("a",{className:Et.a.FooterContactEmail,href:"mailto:info@insideland.ru"},"info@insideland.ru"))))};be.a.initializeApp({apiKey:"AIzaSyC5aoy2IrFSdXyYJOI5z9hTQVjQArOwGaI",authDomain:"insideland-a1eae.firebaseapp.com",databaseURL:"https://insideland-a1eae.firebaseio.com",projectId:"insideland-a1eae",storageBucket:"insideland-a1eae.appspot.com",messagingSenderId:"110475419154"});var Nt=new be.a.auth.GoogleAuthProvider,bt=be.a.auth(),It=(be.a,function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={user:null},a.login=a.login.bind(Object(v.a)(Object(v.a)(a))),a.logout=a.logout.bind(Object(v.a)(Object(v.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;bt.onAuthStateChanged(function(t){t&&e.setState({user:t})})}},{key:"login",value:function(){var e=this;bt.signInWithPopup(Nt).then(function(t){var a=t.user;e.setState({user:a})})}},{key:"logout",value:function(){var e=this;bt.signOut().then(function(){e.setState({user:null})})}},{key:"render",value:function(){var e=this.state;return i.a.createElement("div",{className:"app"},i.a.createElement(L,{user:e.user,onLogIn:this.login,onLogOut:this.logout}),i.a.createElement(ht,{user:e.user}),i.a.createElement(gt,null))}}]),t}(n.Component)),Tt=i.a.createElement(r.a,null,i.a.createElement(It,null));o.a.render(Tt,document.querySelector(".root"))},16:function(e,t,a){e.exports={Test:"TestItem_Test__3Ab77",TestWrapper:"TestItem_TestWrapper__3tA8_",TestTopIcons:"TestItem_TestTopIcons__3jI9O","fa-heart":"TestItem_fa-heart__3JYhv",TestProfile:"TestItem_TestProfile__HNfPO",TestProfileCheck:"TestItem_TestProfileCheck__2TPZ3",TestThumbail:"TestItem_TestThumbail__2mbWd",TestProfileName:"TestItem_TestProfileName__2Midb",TestProfileTitle:"TestItem_TestProfileTitle__1PoT7",TestProfileDescription:"TestItem_TestProfileDescription__-HA6e",TestProfileBtn:"TestItem_TestProfileBtn__36eJX",TestSocialIcon:"TestItem_TestSocialIcon__3-5KV"}},18:function(e,t,a){e.exports={Test:"TestStats_Test__2H4Ia",TestWrapper:"TestStats_TestWrapper__1uFyX",TestTopIcons:"TestStats_TestTopIcons__1wpO1","fa-heart":"TestStats_fa-heart__1EtTC",TestProfile:"TestStats_TestProfile__2Z9dX",TestProfileCheck:"TestStats_TestProfileCheck__3Apue",TestThumbail:"TestStats_TestThumbail__2j-T7",TestProfileName:"TestStats_TestProfileName__1fnt7",TestProfileTitle:"TestStats_TestProfileTitle__1XLhU",TestProfileDescription:"TestStats_TestProfileDescription__1l0ay",TestProfileBtn:"TestStats_TestProfileBtn__2N-aP",TestSocialIcon:"TestStats_TestSocialIcon__3xcOV"}},20:function(e,t,a){e.exports={Tests:"TestList_Tests__3cKrt",NewTestBtn:"TestList_NewTestBtn__2ilKN",DeleteModal:"TestList_DeleteModal__3agKu",DeleteModalBtn:"TestList_DeleteModalBtn__x4ul7",EmptyList:"TestList_EmptyList__2M67C"}},23:function(e,t,a){e.exports={MainNav:"MainNav_MainNav__17B6i",MainNavItem:"MainNav_MainNavItem__3AYPn",MainNavItemLink:"MainNav_MainNavItemLink__239Pb",MainNavItemLinkActive:"MainNav_MainNavItemLinkActive__22WQW"}},24:function(e,t,a){e.exports={UserNav:"UserNav_UserNav__Lw8yO",UserNavPicWrapper:"UserNav_UserNavPicWrapper__2zwzj",UserNavPic:"UserNav_UserNavPic__23QfW",UserNavBtn:"UserNav_UserNavBtn__3AWQi"}},25:function(e,t,a){e.exports={Navigation:"InnerNavigation_Navigation__2wBz7",NavigationItem:"InnerNavigation_NavigationItem__3mfxl",NavigationItemLink:"InnerNavigation_NavigationItemLink__3iUwK",NavigationItemLinkActive:"InnerNavigation_NavigationItemLinkActive__2xBIZ"}},26:function(e,t,a){e.exports={Footer:"Footer_Footer__vz9EF",FooterWrapper:"Footer_FooterWrapper__15hgN",FooterLogo:"Footer_FooterLogo__3QWsQ",FooterContactEmail:"Footer_FooterContactEmail__24XOl"}},31:function(e,t,a){e.exports={Header:"Header_Header__3IpM-",HeaderInner:"Header_HeaderInner__1EnJC",HeaderLogo:"Header_HeaderLogo__3izMD"}},32:function(e,t,a){e.exports={Catalog:"Catalog_Catalog__3Dmso",CatalogContentWrapper:"Catalog_CatalogContentWrapper__2usHl",CatalogContent:"Catalog_CatalogContent__29SZs"}},33:function(e,t,a){e.exports={Constructor:"Constructor_Constructor__3XOJ8",ConstructorContentWrapper:"Constructor_ConstructorContentWrapper__1gdBC",ConstructorContent:"Constructor_ConstructorContent__3OxhG"}},35:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__2lPyd",NavigationWrapper:"Navigation_NavigationWrapper__1_JhE"}},36:function(e,t,a){e.exports={Layout:"Layout_Layout__1Kq0I",LayoutMain:"Layout_LayoutMain__2eoLW"}},38:function(e,t,a){e.exports={TestsTable:"TestTable_TestsTable__1z-K3"}},39:function(e,t,a){e.exports={Loader:"Loader_Loader__1tlKE",center:"Loader_center__3vStx"}},40:function(e,t,a){e.exports={Quiz:"Quiz_Quiz__1nOFv",QuizWrapper:"Quiz_QuizWrapper__1xsPw"}},41:function(e,t,a){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__1zZyr",Question:"ActiveQuiz_Question__3qquW"}},42:function(e,t,a){e.exports={AnswerItem:"AnswerItem_AnswerItem__2Cj1e",success:"AnswerItem_success__Fo1OW",error:"AnswerItem_error__3EMlP"}},43:function(e,t,a){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__3Pf_F",success:"FinishedQuiz_success__3-3BU",error:"FinishedQuiz_error__1J64b"}},5:function(e,t,a){e.exports={AddNewItemPic:"EditItemModal_AddNewItemPic__3kxdY",AddNewItemImgWrapper:"EditItemModal_AddNewItemImgWrapper__2EO2H",AddNewItemPicBtns:"EditItemModal_AddNewItemPicBtns__2Ro6v",AddNewItemBtnAddPic:"EditItemModal_AddNewItemBtnAddPic__nnkce",AddNewItemBtnDeletePic:"EditItemModal_AddNewItemBtnDeletePic__g2gIu",AddNewItemLabel:"EditItemModal_AddNewItemLabel__3A5fW",AddNewItemInputFile:"EditItemModal_AddNewItemInputFile__2-X6U",AddNewItemInput:"EditItemModal_AddNewItemInput__3BbLF",AddNewItemInputBorder:"EditItemModal_AddNewItemInputBorder__2NNAC",AddNewItemInputBorderActive:"EditItemModal_AddNewItemInputBorderActive__w3bf-",AddNewItemActions:"EditItemModal_AddNewItemActions__CEh6N",AddNewItemActionBtn:"EditItemModal_AddNewItemActionBtn__1BLiH",AddNewItemPicSpinner:"EditItemModal_AddNewItemPicSpinner__3_aKe",load:"EditItemModal_load__26giy",hue:"EditItemModal_hue__13EsX"}},52:function(e,t,a){e.exports={Main:"Main_Main__2KHio"}},54:function(e,t,a){e.exports={TestInfo:"TestInfo_TestInfo__1g9BZ"}},55:function(e,t,a){e.exports={AnswersList:"AnswersList_AnswersList__1AFu7"}},57:function(e,t,a){e.exports=a(118)},64:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){}},[[57,2,1]]]);
//# sourceMappingURL=main.22afcf71.chunk.js.map