(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3Xpz":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("tsJN"),o=n("E00f"),c=(n("Z2Ku"),n("L9s1"),n("XfO3"),n("HEwt"),function(e){return parseInt(e.getAttribute("data-choice-index"),10)}),l=n("P60j"),s=n("TSYQ"),u=n.n(s),m=(n("boH3"),function(e){var t=e.handleInputChange,n=e.question,a=e.questionId,r=e.questionIndex,o=e.shouldShowCorrectChoice,c=e.title;return i.a.createElement("fieldset",{className:"Question",onChange:t},i.a.createElement("legend",{className:u()("Question-legend",{"Question-legend--isCorrect":!0===n.isCorrect,"Question-legend--isIncorrect":!1===n.isCorrect})},c),n.codeSnippet&&i.a.createElement("pre",{className:"Question-codeSnippet"},n.codeSnippet),o&&n.explanation&&i.a.createElement("div",{className:"Question-explanation"},i.a.createElement("b",null,"Explanation: "),n.explanation),n.choices.map((function(e,t){var c=function(e,t){return e+"_choice"+t}(a,t),l=o&&n.correctChoices.includes(t);return i.a.createElement("div",{className:"Question-choice",key:c},i.a.createElement("input",{className:"Question-choiceInput","data-choice-index":t,"data-question-index":r,id:c,key:t,name:a,type:n.type,value:e.value}),i.a.createElement("label",{className:u()("Question-choiceLabel",{"Question-choiceLabel--isBold":l}),htmlFor:c},e.value))})))});function d(e){var t=e.choices,n=e.correctChoices,a=t.reduce((function(e,t){return t.isSelected&&e.push(t.value),e}),[]),i=t.reduce((function(e,t,a){return n.includes(a)&&e.push(t.value),e}),[]);return a.length!==n.length?(e.isCorrect=!1,e):(e.isCorrect=i.every((function(e){return a.includes(e)})),e)}var h=n("l5a8"),f=(n("D8Nh"),function(e){var t=e.quiz,n=e.slug,r=e.title,o={shouldShowCorrectChoice:!1,questions:t.questions},s=Object(a.useState)(o),u=s[0],f=u.shouldShowCorrectChoice,p=u.questions,v=s[1],g=function(e){var t=e.currentTarget,n=e.target,a=parseInt(n.getAttribute("data-question-index"),10),i=p[a];switch(i.type){case"checkbox":var r=Array.from(t.querySelectorAll("input:checked")).map(c);i.choices.forEach((function(e,t){e.isSelected=r.includes(t)}));break;case"radio":var o=c(n);i.choices.forEach((function(e,t){e.isSelected=o===t}))}var l=Array.from(p);v({shouldShowCorrectChoice:!1,questions:l})};return i.a.createElement("div",{className:"Quiz"},i.a.createElement("div",{className:"Quiz-homeButton"},i.a.createElement(h.a,{variation:"tertiary",path:n},"Back to lesson")),i.a.createElement(l.a,{subTitle:"Pre-Read Quiz",title:r},t.description&&i.a.createElement("p",null,t.description),p.map((function(e,t){var n=function(e){return"question"+e}(t),a="Q"+(t+1)+": "+e.description;return i.a.createElement(m,{handleInputChange:g,key:n,question:e,questionId:n,questionIndex:t,shouldShowCorrectChoice:f,title:a})})),i.a.createElement("button",{className:"Quiz-submitButton",onClick:function(){window.scrollTo(0,0);var e=p.map(d);v({shouldShowCorrectChoice:!0,questions:e})}},"Submit Quiz")))});n("IZDD");n.d(t,"query",(function(){return p}));var p="3564051070";t.default=function(e){var t=e.data,n=t.site.siteMetadata,a=n.title,c=n.subtitle,l=t.markdownRemark.frontmatter,s=l.title,u=l.description,m=t.markdownRemark.fields.slug,d=t.markdownRemark.frontmatter.title,h=null!==u?u:c,p=t.markdownRemark.frontmatter.preReadQuiz;return i.a.createElement(r.a,{title:s+" - "+a,description:h},i.a.createElement(o.a,null,null===p?i.a.createElement("h1",null,"A quiz for this lesson is not ready yet!"):i.a.createElement(f,{quiz:p,slug:m,title:d})))}},"7iWA":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("TSYQ"),o=n.n(r),c=n("GOhk"),l=(n("dFhs"),function(e){var t=o()("SectionTitle",{"SectionTitle--body":"xl"===e.fontSize,"SectionTitle--uppercase":!0===e.textTransform}),n=""+e.headingLevel;return i.a.createElement(c.a,{mb:e.mb},i.a.createElement(n,{className:t}," ",e.children," "))});l.defaultProps={headingLevel:"h2",fontSize:"large",textTransform:!1,mb:"0px"};var s=l;n.d(t,"a",(function(){return s}))},GOhk:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=function(e){var t=e.is,n=e.children,a=e.mt,r=e.mb,o=e.ml,c=e.mr,l=t;return i.a.createElement(l,{style:{marginTop:""+a,marginRight:""+c,marginBottom:""+r,marginLeft:""+o}},n)};r.defaultProps={is:"div",mb:"0px",mr:"0px",mt:"0px",ml:"0px"};var o=r;n.d(t,"a",(function(){return o}))},P60j:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("TSYQ"),o=n.n(r),c=n("7iWA"),l=(n("np+e"),function(e){var t=e.className,n=e.children,a=e.title,r=e.subTitle,l=e.isLight,s=e.contentAlignment,u=e.titleAlignment,m=o()("ContentSection-title",{"ContentSection-title--alignCenter":"center"===u,"ContentSection-title--alignLeft":"left"===u,"ContentSection-title--textLight":l}),d=o()("ContentSection-content "+t,{"ContentSection-content--alignCenter":"center"===s,"ContentSection-content--alignLeft":"left"===s});return i.a.createElement("div",{className:"ContentSection"},a&&i.a.createElement("header",{className:m},i.a.createElement(c.a,null,a),r&&i.a.createElement(c.a,null,r)),i.a.createElement("div",{className:d},n))});l.defaultProps={className:"",title:null,subTitle:null,contentAlignment:"left",titleAlignment:"left",isLight:!1};var s=l;n.d(t,"a",(function(){return s}))}}]);
//# sourceMappingURL=component---src-templates-quiz-template-js-b8d190fb39163d5690bb.js.map