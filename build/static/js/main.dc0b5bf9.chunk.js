(this.webpackJsonpexp=this.webpackJsonpexp||[]).push([[0],{52:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),c=a.n(r),o=(a(52),a(6)),i=a(14),l=a(15),u=a(18),h=a(17),d=a(2),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{style:{margin:"100px"},children:Object(d.jsxs)("div",{style:{border:"solid",borderRadius:"10px",height:"400px",paddingTop:"100px"},children:[Object(d.jsx)("center",{children:"\u042d\u0442\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442"}),Object(d.jsx)("center",{children:Object(d.jsx)("button",{style:{marginTop:"200px"},onClick:this.props.start,children:"\u041d\u0430\u0447\u0430\u0442\u044c"})})]})})}}]),a}(s.a.Component),p=a(16),b=a(47),v=a(19),x=a(28).create({baseURL:"http://127.0.0.1:8000/",headers:{Authorization:"","Content-Type":"application/json"},withCredentials:!1}),O=function(){return x.get("api/tables/")},f=function(e){return x.post("api/finals/",e)},g="SET_SENTENCE",m={sentence:""},y=function(e){return{type:g,sentence:e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(v.a)(Object(v.a)({},e),{},{sentence:t.sentence});default:return e}},S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={stage:"start",correct:!1,validation:"",number:0,values:[],eval:[],paragraph:"1",counter:0,color:[]},n.HandleState=function(e){n.state.values[e]="",n.setState({values:n.state.values})},n.handleInputChange=function(e,t){n.state.values[t]=e.target.value,n.setState({values:n.state.values})},n.HandleSelect=function(e){n.state.eval[n.state.counter]=e.target.value,n.setState({values:n.state.eval})},n.HandlePar=function(e){var t=e.target.value;n.setState({paragraph:t}),console.log(n.state.paragraph)},n.HandleChange=function(e){"start"==n.state.stage&&(n.state.color[0]="blue",n.setState({stage:"evaluation",color:n.state.color}));var t=n.props.data[n.state.number].feedback.split(";").length-1;if("evaluation"==n.state.stage&&n.state.counter==t){for(var a=0;a<n.state.color.length;a++)n.state.color[a]="";n.setState({stage:"validation",color:n.state.color})}else if("evaluation"==n.state.stage&&n.state.counter<t){for(a=0;a<n.state.color.length;a++)a==n.state.counter+1?n.state.color[a]="blue":n.state.color[a]="";n.setState({counter:n.state.counter+1,color:n.state.color})}if("validation"==n.state.stage){console.log(n.state.values);var s={user_name:"Vasya"};s.correct_answer=n.state.values.join(";"),s.valuation=n.state.eval.join(";"),s.sentence_id=n.props.data[n.state.number].id.toString(),s.paragraph=n.state.paragraph,n.props.postD(s),n.setState({stage:"start",number:n.state.number+1,correct:!1,validation:"",values:[],eval:[],paragraph:"",counter:0,color:[]});var r=n.props.data[n.state.number].lemma.split(";");for(a=0;a<r.length;a++)n.state.values[a]="not",n.state.eval[a]=1,n.state.color[a]="",n.setState({values:n.state.values,eval:n.state.eval,color:n.state.color})}},n.myRef=s.a.createRef(),n.myRef2=s.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){for(var e=this.props.data[this.state.number].lemma.split(";"),t=0;t<e.length;t++)this.state.values[t]="not",this.state.eval[t]=1,this.state.color[t]="",this.setState({values:this.state.values,eval:this.state.eval,color:this.state.color})}},{key:"render",value:function(){var e=this;if(this.state.number<Object.keys(this.props.data).length){var t=this.state.number,a="";"start"==this.state.stage?a="answer":"validation"==this.state.stage?a="submit":"evaluation"==this.state.stage&&(a="evaluate");for(var n={},s=this.props.data[this.state.number].answer.split(";"),r=this.props.data[this.state.number].lemma.split(";"),c=this.props.data[this.state.number].feedback.split(";"),o=0;o<s.length;o++)n[o]=[s[o],r[o]];var i=this.props.data[this.state.number].sentence;i=i.split("$");var l=0,u=this.state.color,h=i.map((function(t,a){return t==r[l]?(l++,a-=l,console.log(u),Object(d.jsx)("input",{ref:e.myRef,placeholder:"(".concat(r[l-1],")"),style:{width:"90px",border:"0px",padding:"5px",backgroundColor:u[a]},onChange:function(t){e.handleInputChange(t,a)}},a)):Object(d.jsxs)("p",{style:{display:"inline"},children:[" ",t," "]})})),j=Object(d.jsx)("div",{children:" "});switch(this.state.stage){case"evaluation":j=Object(d.jsxs)("div",{style:{marginTop:"10px"},children:[Object(d.jsxs)("div",{children:[" ",c[this.state.counter],"   "]}),Object(d.jsxs)("select",{ref:this.myRef2,style:{marginTop:"5px"},onChange:function(t){e.HandleSelect(t)},children:[Object(d.jsx)("option",{value:"1",children:" 1 "}),Object(d.jsx)("option",{value:"2",children:" 2 "}),Object(d.jsx)("option",{value:"3",children:" 3 "}),Object(d.jsx)("option",{value:"4",children:" 4 "}),Object(d.jsx)("option",{value:"5",children:" 5 "})]})]});break;case"validation":j=Object(d.jsxs)("div",{style:{marginTop:"10px"},children:[Object(d.jsx)("div",{children:" \u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u0430   "}),Object(d.jsxs)("select",{style:{marginTop:"5px"},onChange:function(t){e.HandlePar(t)},children:[Object(d.jsx)("option",{value:"1",children:" 1 "}),Object(d.jsx)("option",{value:"2",children:" 2 "}),Object(d.jsx)("option",{value:"3",children:" 3 "}),Object(d.jsx)("option",{value:"4",children:" 4 "}),Object(d.jsx)("option",{value:"5",children:" 5 "})]})]})}return Object(d.jsxs)("div",{children:[Object(d.jsx)("center",{style:{marginTop:"100px"},children:h}),Object(d.jsx)("center",{style:{marginTop:"100px"},children:Object(d.jsx)("div",{children:j})}),Object(d.jsx)("center",{style:{marginTop:"100px"},children:Object(d.jsx)("button",{onClick:this.HandleChange,children:a})}),Object(d.jsx)(b.a,{now:100*t/this.props.data.length,style:{margin:"100px"}})]})}return Object(d.jsx)("div",{children:Object(d.jsx)("center",{style:{marginTop:"100px"},children:"Thank you!"})})}}]),a}(s.a.Component),k=Object(o.e)(Object(p.b)((function(e){return{sentence:e.sentence.sentence}}),{postD:function(e){return function(t){f(e).then((function(e){return console.log(e)}))}}})(S)),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={start:!1,data:""},e.handleClick=function(t){e.setState({start:!0,data:e.props.sentence})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.mySentence(),console.log(this.props.sentence)}},{key:"render",value:function(){var e=this.state.start;return Object(d.jsx)("div",{children:e?Object(d.jsx)(k,{data:this.state.data}):Object(d.jsx)(j,{start:this.handleClick})})}}]),a}(s.a.Component),T=Object(o.e)(Object(p.b)((function(e){return{sentence:e.sentence.sentence}}),{mySentence:function(){return function(e){O().then((function(t){var a=t.data;e(y(a))}))}}})(w)),E=a(46),_=a(11),R=a(45),I=a(44),P=a(24);var D=function(){return Object(d.jsx)(I.a,{style:{border:"solid #007bff",borderRadius:"5px",marginTop:"50px",padding:"20px"},children:Object(d.jsx)(R.a,{children:Object(d.jsx)(P.a,{children:Object(d.jsxs)(_.a,{children:[Object(d.jsxs)(_.a.Group,{controlId:"formBasicEmail",children:[Object(d.jsx)(_.a.Label,{children:"Email address"}),Object(d.jsx)(_.a.Control,{type:"email",placeholder:"Enter email"}),Object(d.jsx)(_.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)(_.a.Group,{controlId:"formBasicPassword",children:[Object(d.jsx)(_.a.Label,{children:"Password"}),Object(d.jsx)(_.a.Control,{type:"password",placeholder:"Password"})]}),Object(d.jsx)(_.a.Group,{controlId:"formBasicCheckbox",children:Object(d.jsx)(_.a.Check,{type:"checkbox",label:"Check me out"})}),Object(d.jsx)(E.a,{variant:"primary",children:"Submit"})]})})})})},H=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:D}),Object(d.jsx)(o.a,{exact:!0,path:"/experiment",component:T})]})},L=function(){return Object(d.jsx)(H,{})},B=a(20);var N=function(){return Object(d.jsx)(B.a,{children:Object(d.jsx)(L,{})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))},M=(a(78),a(29)),G=a(13),A=Object(G.c)({sentence:C}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.d,U=Object(G.e)(A,J(Object(G.a)(M.a)));window.store=U;var V=U;c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p.a,{store:V,children:Object(d.jsx)(N,{})})}),document.getElementById("root")),F()}},[[79,1,2]]]);
//# sourceMappingURL=main.dc0b5bf9.chunk.js.map