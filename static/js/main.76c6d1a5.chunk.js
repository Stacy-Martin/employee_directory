(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{27:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(7),a=n.n(s),i=(n(27),n(5)),o=n(2);var u=function(e){var t=e.search,n=e.setSearch;return Object(o.jsxs)("form",{className:"bg-light justify-content-between",children:[Object(o.jsx)("input",{className:"form-inline empSearch",type:"search",placeholder:"Search","aria-label":"Search",results:t,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})};n(17),n(59),n(21);var j=function(){return fetch("https://randomuser.me/api/?inc=name,email,phone,picture,nat&results=15")};n(35);var l=document.getElementById("root");a.a.render(Object(o.jsx)(App,{}),l);var b=function(e){};var h=function(){return Object(o.jsxs)("div",{className:"jumbotron",children:[Object(o.jsx)("h1",{className:"display-4 text-center",children:"Employee Directory"}),Object(o.jsx)("p",{className:"lead",children:"View, sort or filter employees using the table."})]})};var f=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),r=(n[0],n[1]),s=Object(c.useState)(!1),a=Object(i.a)(s,2),l=a[0],f=(a[1],Object(c.useState)([])),O=Object(i.a)(f,2),d=O[0],m=(O[1],Object(c.useState)("")),p=Object(i.a)(m,2),x=p[0],g=p[1];return Object(c.useEffect)((function(){j.fetchEmpData().then((function(e){console.log(e),r(e)}))}),[]),Object(c.useEffect)((function(){}),[l]),Object(c.useEffect)((function(){}),[d]),Object(o.jsxs)("div",{children:[Object(o.jsx)(h,{}),Object(o.jsx)(u,{results:x,handleInputChange:function(){g()}}),Object(o.jsx)(b,{})]})};var O=function(){return Object(o.jsx)(f,{})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(42);a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),d()}},[[44,1,2]]]);
//# sourceMappingURL=main.76c6d1a5.chunk.js.map