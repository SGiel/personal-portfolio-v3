(this["webpackJsonppersonal-portfolio-v3"]=this["webpackJsonppersonal-portfolio-v3"]||[]).push([[0],[,,,,,,,,,function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/annie-spratt-gSQbip5HHuc-unsplash.75ba7b5f.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/stephanie-porfolio-pic.31caf6dd.jpeg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/stephanie-resume.38c88c82.pdf"},,,,,,,function(e){e.exports=JSON.parse('[{"name":"Coding Bootcamp Survival Guide","image":"bootcamp-survival-guide-screenshot.png","imageAlt":"screenshot coding bootcamp survival guide homepage","githubLink":"//github.com/Coding-Bootcamp-Survival-Guide","githubLinkAlt":"Coding Bootcamp Survival Guide github repository","siteLink":"//coding-bootcamp-survival-guide.herokuapp.com/","siteLinkAlt":"Coding Bootcamp Survival Guide live application","skills":"MySql/Sequelize/Handlebars","id":"1"},{"name":"Weather Dashboard","image":"weather-dashboard-screenshot.png","imageAlt":"screenshot of Weather Dashboard home page with search bar for Paris filled out, current weather and 5-day forecast","githubLink":"//github.com/SGiel/weather-dashboard","githubLinkAlt":"Weather Dashboard github repository","siteLink":"//sgiel.github.io/weather-dashboard/","siteLinkAlt":"Weather Dashboard live application","skills":"JavaScript/APIs","id":"2"},{"name":"Portfolio Generator","image":"portfolio-generator-screenshot.png","imageAlt":"screenshot of Portfolio Generator home page with sample portfolio for doggie, Ajax","githubLink":"//github.com/Portfolio-Generator/Portfolio-Generator","githubLinkAlt":"Portfolio Generator github repository","siteLink":"//dksv-portfolio-generator.herokuapp.com/","siteLinkAlt":"Portfolio Generator live application","skills":"React, Apollo GraphQL, JSX","id":"3"},{"name":"Visit America","image":"visit-america-screenshot.png","imageAlt":"screenshot Visit America home page with search bar and banner of Grand Canyon","githubLink":"//github.com/SGiel/visit-america","githubLinkAlt":"Visit America github repository","siteLink":"//sgiel.github.io/visit-america/","siteLinkAlt":"Visit America live application","skills":"JS/Apis/Materialize","id":"4"},{"name":"Workday Scheduler","image":"workday-scheduler-screenshot.png","imageAlt":"screenshot Workday Scheduler home page with list of workday events filled out","githubLink":"//github.com/SGiel/workday-scheduler","githubLinkAlt":"Workday Scheduler github repository","siteLink":"//sgiel.github.io/workday-scheduler/","siteLinkAlt":"Workday Scheduler live application","skills":"JQuery","id":"5"},{"name":"Camper Van","image":"camper-van-screenshot.png","imageAlt":"screenshot of Camper Van website including brown camper van with orange kayaks on top","githubLink":"//github.com/SGiel/camper-van","githubLinkAlt":"Camper Van github repository","siteLink":"//sgiel.github.io/camper-van/","siteLinkAlt":"Camper Van live application","skills":"HTML/CSS/Javascript","id":"6"}]')},,,,,function(e,t,i){},,,,,,,function(e,t,i){var a={"./annie-spratt-gSQbip5HHuc-unsplash.jpg":9,"./bootcamp-survival-guide-screenshot.png":31,"./camper-van-screenshot.png":32,"./portfolio-generator-screenshot.png":33,"./run-buddy-screenshot.png":34,"./screenshot-about-me.png":35,"./screenshot-contact.png":36,"./screenshot-projects.png":37,"./screenshot-resume.png":38,"./stephanie-porfolio-pic.jpeg":10,"./stephanie-resume.pdf":11,"./visit-america-screenshot.png":39,"./weather-dashboard-screenshot.png":40,"./workday-scheduler-screenshot.png":41};function c(e){var t=s(e);return i(t)}function s(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=s,e.exports=c,c.id=30},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/bootcamp-survival-guide-screenshot.80d966ce.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/camper-van-screenshot.9668ee0d.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/portfolio-generator-screenshot.b0996180.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/run-buddy-screenshot.272c8824.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/screenshot-about-me.f1a61597.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/screenshot-contact.5403dc4b.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/screenshot-projects.943101cf.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/screenshot-resume.6f34115d.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/visit-america-screenshot.08f71d49.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/weather-dashboard-screenshot.c232bbaf.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/workday-scheduler-screenshot.67ac50ec.png"},,function(e,t,i){"use strict";i.r(t);var a=i(1),c=i.n(a),s=i(16),n=i.n(s),r=(i(23),i(3)),o=i(0);var l=function(e){var t=e.currentCategory,i=e.aboutSelected,c=e.setAboutSelected,s=e.portfolioSelected,n=e.setPortfolioSelected,r=e.contactSelected,l=e.setContactSelected,d=e.resumeSelected,j=e.setResumeSelected;return Object(a.useEffect)((function(){document.title=t.name}),[t]),Object(o.jsxs)("nav",{className:"navbar sticky-top navbar-expand-md navbar-dark row",id:"navbar",children:[Object(o.jsx)("div",{className:"col-2",id:"main-row"}),Object(o.jsx)("div",{className:"collapse navbar-collapse col-10",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"mx-3 nav-item ".concat(i&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){c(!0),n(!1),l(!1),j(!1)},children:"About Me"})}),Object(o.jsx)("li",{className:"mx-3 nav-item ".concat(s&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){c(!1),n(!0),l(!1),j(!1)},children:"Portfolio"})}),Object(o.jsx)("li",{className:"mx-3 nav-item ".concat(r&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){c(!1),n(!1),l(!0),j(!1)},children:"Say Hello"})}),Object(o.jsx)("li",{className:"mx-3 nav-item ".concat(d&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){c(!1),n(!1),l(!1),j(!0)},children:"Resume"})})]})})]})},d=i(9);var j=function(){return Object(o.jsx)("div",{className:"col-2",id:"name-bar",children:Object(o.jsxs)("div",{id:"name",children:[Object(o.jsx)("p",{children:"S"}),Object(o.jsx)("p",{children:"T"}),Object(o.jsx)("p",{children:"E"}),Object(o.jsx)("p",{children:"P"}),Object(o.jsx)("p",{children:"H"}),Object(o.jsx)("p",{children:"A"}),Object(o.jsx)("p",{children:"N"}),Object(o.jsx)("p",{children:"I"}),Object(o.jsx)("p",{children:"E"}),Object(o.jsx)("p",{id:"bullet",children:"\u26ab\ufe0f"}),Object(o.jsx)("p",{children:"G"}),Object(o.jsx)("p",{children:"I"}),Object(o.jsx)("p",{children:"E"}),Object(o.jsx)("p",{children:"L"}),Object(o.jsx)("div",{id:"name-bar-after",style:{backgroundImage:"url(".concat(d.default,")"),position:"absolute",backgroundSize:"cover"}})]})})},h=i(10);var b=function(){return Object(o.jsxs)("section",{className:"col-10",id:"about-me",children:[Object(o.jsx)("h1",{children:"About Me"}),Object(o.jsx)("div",{className:"row justify-content-center",id:"about-me-image",children:Object(o.jsx)("img",{src:h.default,alt:"Stephanie kneeling down with her dog by her side"})}),Object(o.jsxs)("div",{className:"row justify-content-center",id:"about-me-text",children:[Object(o.jsx)("div",{className:"col-sm-12 col-lg-2"}),Object(o.jsxs)("div",{className:"col-sm-12 col-lg-8",children:[Object(o.jsx)("p",{children:"My name is Stephanie Giel. I currently live in Phoenix, Arizona, and I am working hard at becoming full-stack web developer through the University of Arizona's coding bootcamp."}),Object(o.jsx)("p",{children:" I graduated from Arizona State University with a Bachelor in Mathematics and a Masters in Information Systems with an emphasis in Statistical Data Analysis."}),Object(o.jsx)("p",{children:" I worked for 22 years for the Clinical Pharmacokinetics group of a pharmaceutical company doing statistical programming and pharmacokinetic data analysis in SAS (a statistical programming language) and writing scientific reports to be submitted to the FDA."}),Object(o.jsx)("p",{children:"My life took me in a different direction, though. I am currently working at a job with a wonderful atmosphere and philosophy surrounded by people I enjoy, but I have found that I miss coding."}),Object(o.jsx)("p",{children:"My goal is to seek freelance work in website design and development."})]}),Object(o.jsx)("div",{className:"col-sm-12 col-lg-2"})]})]})},u=i(6),m=function(e){var t=e.project;return Object(o.jsxs)(u.a,{children:[Object(o.jsx)("img",{className:"img-fluid rounded",src:i(30)("./".concat(t.image)).default,alt:t.imageAlt},t.image),Object(o.jsxs)("div",{className:"project-text",children:[Object(o.jsx)(u.b,{to:t.githubLink,target:"_blank",rel:"noreferrer",className:"fa fa-github mx-1 git-link",alt:t.githubLinkAlt},t.githubLink),Object(o.jsx)(u.b,{to:t.siteLink,target:"_blank",className:"project-link",alt:t.siteLinkAlt,children:Object(o.jsx)("h3",{children:t.name})},t.siteLink),Object(o.jsx)("h4",{children:t.skills})]})]})},p=i(18);var g=function(){var e=Object(a.useState)(p),t=Object(r.a)(e,1)[0];return Object(o.jsxs)("section",{className:"col-10",id:"projects",children:[Object(o.jsx)("h1",{children:"Portfolio"}),Object(o.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(o.jsx)("div",{className:"col-12 col-md-6",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("div",{className:"project-image-wrapper",children:Object(o.jsx)(m,{project:e})})})})},t)}))})]})},f=i(5),O=i(14);var x=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),i=t[0],c=t[1],s=i.name,n=i.email,l=i.message,d=Object(a.useState)(""),j=Object(r.a)(d,2),h=j[0],b=j[1];function u(e){if(b(""),e.target.value.length){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),t||b("Your email is invalid.")}}else b("".concat(e.target.name," is required."));h||c(Object(O.a)(Object(O.a)({},i),{},Object(f.a)({},e.target.name,e.target.value)))}return Object(o.jsx)("section",{className:"col-10",id:"hello",children:Object(o.jsxs)("div",{className:"hello-form",children:[Object(o.jsx)("div",{className:"section-title",children:Object(o.jsx)("h1",{children:"Say Hello"})}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(i)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{className:"hello-fi",type:"text",defaultValue:s,onMouseLeave:u,name:"name"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{className:"hello-fi",type:"email",defaultValue:n,name:"email",onMouseLeave:u})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{className:"hello-fi",name:"message",defaultValue:l,onMouseLeave:u,rows:"5"})]}),h&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:h})}),Object(o.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})})},v=i(11);var k=function(){return Object(o.jsxs)("section",{className:"col-10",id:"skills",children:[Object(o.jsx)("h1",{children:"Skills"}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-6",id:"front-end",children:[Object(o.jsx)("h3",{children:"Front-End Developer"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"JQuery"}),Object(o.jsx)("li",{children:"React"})]})]}),Object(o.jsxs)("div",{className:"col-6",id:"back-end",children:[Object(o.jsx)("h3",{children:"Back-End Developer"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Node.js"}),Object(o.jsx)("li",{children:"MySQL"}),Object(o.jsx)("li",{children:"Express.js"}),Object(o.jsx)("li",{children:"Sequelize"}),Object(o.jsx)("li",{children:"Handlebars.js"}),Object(o.jsx)("li",{children:"NoSQL"}),Object(o.jsx)("li",{children:"MongoDB"}),Object(o.jsx)("li",{children:"IndexDB"})]})]})]}),Object(o.jsx)("div",{className:"resume-btn-wrapper",children:Object(o.jsx)("div",{className:"resume-btn",children:Object(o.jsx)("a",{href:v.default,download:!0,children:"Download Resume Here"})})})]})};var S=function(){return Object(o.jsx)("footer",{className:"container-fluid",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-2"}),Object(o.jsxs)("div",{className:"col-10 justify-content-center",id:"footer-col",children:[Object(o.jsx)("p",{children:"Get in Touch  "}),Object(o.jsxs)("div",{id:"links",children:[Object(o.jsx)("a",{href:"https://github.com/SGiel/",target:"_blank",rel:"noreferrer",className:"fa fa-github mx-1",style:{color:"black"},alt:"personal link to Github"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/stephanie-giel-5a3ab61ba/",target:"_blank",rel:"noreferrer",className:"fa fa-linkedin mx-1",alt:"personal link to Linkedin"}),Object(o.jsx)("a",{href:"https://www.facebook.com/stephanie.giel",target:"_blank",rel:"noreferrer",className:"fa fa-facebook mx-1",alt:"personal link to Facebook"}),Object(o.jsx)("a",{href:"https://www.instagram.com/sgiel/",target:"_blank",rel:"noreferrer",className:"fa fa-instagram mx-1",alt:"personal link to Instagram"})]})]})]})})};var w=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),i=t[0],c=t[1],s=Object(a.useState)(!1),n=Object(r.a)(s,2),d=n[0],h=n[1],u=Object(a.useState)(!1),m=Object(r.a)(u,2),p=m[0],f=m[1],O=Object(a.useState)(!1),v=Object(r.a)(O,2),w=v[0],y=v[1],N=Object(a.useState)([{name:"About Me"},{name:"Portfolio"},{name:"Say Hello"},{name:"Resume"}]),A=Object(r.a)(N,1)[0],L=Object(a.useState)(A[0]),C=Object(r.a)(L,2),G=C[0],M=C[1];return Object(o.jsxs)("div",{style:{backgroundColor:"rgba(247, 242, 242, 0.829)"},children:[Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(l,{categories:A,setCurrentCategory:M,currentCategory:G,aboutSelected:i,setAboutSelected:c,portfolioSelected:d,setPortfolioSelected:h,contactSelected:w,setContactSelected:y,resumeSelected:p,setResumeSelected:f}),Object(o.jsxs)("div",{className:"row",id:"main-row",children:[Object(o.jsx)(j,{}),i&&Object(o.jsx)(b,{}),d&&Object(o.jsx)(g,{}),w&&Object(o.jsx)(x,{}),p&&Object(o.jsx)(k,{})]})]})}),Object(o.jsx)(S,{})]})},y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,44)).then((function(t){var i=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;i(e),a(e),c(e),s(e),n(e)}))};i(42);n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),y()}],[[43,1,2]]]);
//# sourceMappingURL=main.5c60eeef.chunk.js.map