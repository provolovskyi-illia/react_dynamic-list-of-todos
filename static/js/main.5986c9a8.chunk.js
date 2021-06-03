(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),s=n.n(c),o=n(5),l=n.n(o),i=n(6),u=n(1),d=n(2),m=n(4),p=n(3),h=(n(17),n(18),n(10)),f=(n(19),n(7)),v=n.n(f),b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",status:"All"},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e}return Object(d.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props.todos,a=this.state,c=a.title,s=a.status;switch(s){case"All":e=n;break;case"Completed":e=n.filter((function(e){return!0===e.completed}));break;case"Active":e=n.filter((function(e){return!1===e.completed}))}return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("span",null,"Search by title"),r.a.createElement("input",{name:"title",value:c,onChange:this.handleChange}),r.a.createElement("select",{value:s,name:"status",onChange:this.handleChange},r.a.createElement("option",null,"All"),r.a.createElement("option",null,"Completed"),r.a.createElement("option",null,"Active")),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},e.filter((function(e){return e.title&&e.title.includes(c)})).map((function(e){return r.a.createElement("li",{key:e.id,className:v()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed})},r.a.createElement("label",null,e.completed?r.a.createElement("input",{type:"checkbox",checked:!0,readOnly:!0}):r.a.createElement("input",{type:"checkbox",disabled:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:v()("button TodoList__user-button",{"TodoList__user-button--selected":e.userId===t.props.userId}),type:"button",onClick:function(){t.props.onSelectedUser(e.userId)}},"User #",e.userId))})))))}}]),n}(r.a.Component);n(20);function E(e){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var _=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e.SelectedUser=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E("/users/".concat(e.props.userId));case 2:n=t.sent,e.setState({user:n.data});case 4:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.SelectedUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.SelectedUser()}},{key:"render",value:function(){var e=this,t=this.state.user,n=t.name,a=t.id,c=t.email,s=t.phone;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",a)),r.a.createElement("h3",{className:"CurrentUser__name"},n),r.a.createElement("p",{className:"CurrentUser__email"},c),r.a.createElement("p",{className:"CurrentUser__phone"},s),r.a.createElement("button",{type:"button",className:"button",onClick:function(){return e.props.clearSelectedUser()}},"Clear"))}}]),n}(r.a.Component),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.getTodoList=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E("/todos");case 2:n=t.sent,e.setState({todos:n.data});case 4:case"end":return t.stop()}}),t)}))),e.onSelectedUser=function(t){e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getTodoList()}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(b,{todos:t,onSelectedUser:this.onSelectedUser,userId:n})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(_,{userId:n,clearSelectedUser:this.clearSelectedUser}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.5986c9a8.chunk.js.map