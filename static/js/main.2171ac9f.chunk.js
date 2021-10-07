(this["webpackJsonpreact-styling-exercise"]=this["webpackJsonpreact-styling-exercise"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r,a,l,c,i,s=n(1),o=n.n(s),p=n(12),u=n.n(p),d=(n(20),n(21),n(2)),h=n(3),j=n(5),b=n(4),O=n(6),x=n(7),f=n(0),k=x.b.div(r||(r=Object(O.a)(["\n  /* Adapt the size based on the size prop */\n  width: ",";\n  padding: 10px;\n  border: 1px solid black;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  cursor: pointer;\n  background-color: #dfdfdf;\n"])),(function(e){return e.large?"128px":"53px"})),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)(k,{large:this.props.large,onClick:function(){return e.props.onClick(e.props.value)},children:this.props.value})}}]),n}(s.Component),C=x.b.div(a||(a=Object(O.a)(["\n  /* Adapt the color based on the type prop */\n  ","\n  ","\n\n  padding: 10px;\n  border: 1px solid black;\n  width: 53px;\n  text-align: center;\n  line-height: 40px;\n  cursor: pointer;\n"])),(function(e){return"operator"===e.type&&Object(x.a)(l||(l=Object(O.a)(["\n      background: #287ed4;\n      color: white;\n    "])))}),(function(e){return"other"===e.type&&Object(x.a)(c||(c=Object(O.a)(["\n      background: #dfdfdf;\n    "])))})),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)(C,{type:this.props.type,onClick:function(){return e.props.onClick(e.props.value)},children:this.props.value})}}]),n}(s.Component),y=x.b.div(i||(i=Object(O.a)(["\n  border: 1px solid black;\n  width: 250px;\n  height: 30px;\n  text-align: right;\n  margin-bottom: 10px;\n  background-color: black;\n  color: white;\n  padding: 20px 30px 20px 20px;\n  line-height: 30px;\n  font-size: 40px;\n  overflow: hidden;\n"]))),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsx)(y,{children:this.props.value})}}]),n}(s.Component),S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={first:0,operator:null,second:null},e.handleNumberClick=function(t){console.log(typeof e.state.first),e.state.operator?e.setState({second:parseFloat(null!=e.state.second&&e.state.second.toString().length>9?parseFloat(e.state.second.toString().slice(0,10)):"".concat(e.state.second||"").concat(t))}):e.setState({first:parseFloat(e.state.first.toString().length>9?parseFloat(e.state.first.toString().slice(0,10)):"".concat(e.state.first||"").concat(t))})},e.handleOperatorClick=function(t){if("="===t){var n=parseFloat(e.state.first),r=parseFloat(e.state.second);"+"===e.state.operator?e.setState({operator:null,first:n+r,second:null}):"/"===e.state.operator?e.setState({operator:null,first:n/r,second:null}):"-"===e.state.operator?e.setState({operator:null,first:n-r,second:null}):"x"===e.state.operator&&e.setState({operator:null,first:n*r,second:null})}else"+/-"===t?e.setState({operator:null,first:-1*e.state.first,second:null}):"%"===t?e.setState({operator:null,first:e.state.first/100,second:null}):"."===t?e.setState({operator:null,first:"".concat(e.state.first).concat(e.state.first.toString().includes(".")?"":"."),second:null}):"clear"===t?e.setState({first:0,second:null,operator:null}):e.setState({operator:t})},e.getScreenValue=function(){return e.state.second||e.state.first},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(m,{value:this.getScreenValue()}),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)(g,{value:"clear",onClick:this.handleOperatorClick}),Object(f.jsx)(g,{value:"+/-",onClick:this.handleOperatorClick}),Object(f.jsx)(g,{value:"%",onClick:this.handleOperatorClick}),Object(f.jsx)(g,{value:"/",type:"operator",onClick:this.handleOperatorClick})]}),Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)(v,{value:7,onClick:this.handleNumberClick}),Object(f.jsx)(v,{value:8,onClick:this.handleNumberClick}),Object(f.jsx)(v,{value:9,onClick:this.handleNumberClick}),Object(f.jsx)(g,{value:"x",type:"operator",onClick:this.handleOperatorClick})]}),Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)(v,{value:4,onClick:this.handleNumberClick}),Object(f.jsx)(v,{value:5,onClick:this.handleNumberClick}),Object(f.jsx)(v,{value:6,onClick:this.handleNumberClick}),Object(f.jsx)(g,{value:"-",type:"operator",onClick:this.handleOperatorClick})]}),Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)(v,{value:1,onClick:this.handleNumberClick}),Object(f.jsx)(v,{value:2,onClick:this.handleNumberClick}),Object(f.jsx)(v,{value:3,onClick:this.handleNumberClick}),Object(f.jsx)(g,{value:"+",type:"operator",onClick:this.handleOperatorClick})]}),Object(f.jsxs)("div",{style:{display:"flex"},children:[Object(f.jsx)(v,{large:!0,value:0,onClick:this.handleNumberClick}),Object(f.jsx)(g,{value:".",type:"other",onClick:this.handleOperatorClick}),Object(f.jsx)(g,{value:"=",type:"operator",onClick:this.handleOperatorClick})]})]})})]})}}]),n}(s.Component);var N=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{children:"Calculator"}),Object(f.jsx)(S,{})]})};u.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2171ac9f.chunk.js.map