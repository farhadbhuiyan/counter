(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);n(8);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),o=n(2),i=n(3),u=n(5),l=n(4),b=n(0),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).getFormat=function(){return 0===e.props.value?"Zero":e.props.value},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"container",children:Object(b.jsx)("li",{class:"list-unstyled",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:0===this.props.value?"badge bg-warning p-2 mr-5":"badge bg-primary p-2 mr-5",children:this.getFormat()}),Object(b.jsx)("button",{onClick:function(){return e.props.onIncriment(e.props.id)},type:"button",class:"btn btn-secondary m-2",children:"+"}),Object(b.jsx)("button",{onClick:function(){return e.props.onDecriment(e.props.id)},type:"button",class:"btn btn-secondary m-2",disabled:0===this.props.value?"disabled":"",children:"-"}),Object(b.jsx)("button",{type:"button",class:"btn btn-danger m-2",onClick:function(){return e.props.onDelete(e.props.id)},children:"Delete"})]})})})})}}]),n}(r.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)(b.Fragment,{children:this.props.counters.map((function(t){return Object(b.jsx)(d,{id:t.id,value:t.value,onIncriment:e.props.onIncriment,onDecriment:e.props.onDecriment,onDelete:e.props.onDelete},t.id)}))})}}]),n}(r.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{class:"container",children:Object(b.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("a",{class:"navbar-brand",href:"#demo",children:["Navbar",Object(b.jsx)("span",{class:"badge bg-secondary p-2",children:this.props.nonZeroItems})]})})})})}}]),n}(r.Component),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("button",{onClick:this.props.onReset,type:"button",className:" btn btn-primary",children:"Reset"})})}}]),n}(r.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={counters:[{id:0,value:0},{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleReset=function(){var t=e.state.counters.map((function(e,t){return{id:t,value:0}}));e.setState({counters:t})},e.handleIncriment=function(t){var n=e.state.counters.map((function(e,n){return e.id===t?{id:n,value:e.value+1}:e}));e.setState({counters:n})},e.handleDecriment=function(t){var n=e.state.counters.map((function(e,n){return e.id===t?{id:n,value:e.value-1}:e}));e.setState({counters:n})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n}),console.log(n)},e.getNonZeroItems=function(){var t=0;return e.state.counters.forEach((function(e){e.value>0&&t++})),t},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,{nonZeroItems:this.getNonZeroItems()}),Object(b.jsx)(h,{onReset:this.handleReset}),Object(b.jsx)(p,{counters:this.state.counters,onIncriment:this.handleIncriment,onDecriment:this.handleDecriment,onDelete:this.handleDelete})]})}}]),n}(r.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),m()}},[[14,1,2]]]);
//# sourceMappingURL=main.b1f9c503.chunk.js.map