(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),r=n(19),o=n.n(r),a=(n(28),n(4)),c=n(20),l=n(5),u=n(1),d=function(e){var t=e.title;e.onAdd,e.showAdd;return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"1. Split the sentence to multiple sentences by removing as many \u2018and\u2019 words as possible while preserving the sentence\u2019s meaning, and assuring the sentences are as complete, readable, and grammatical as possible."]})};d.defaultProps={title:"Sentence Segmentation"};var b=d,f=function(e){var t=e.color,n=e.text,s=e.onClick;return Object(u.jsx)("button",{onClick:s,style:{backgroundColor:t},className:"btn",children:n})};f.defaultProps={color:"steelblue"};var m=n(65),h=n(30),j=function(e){var t=e.prompt,n=(e.onAdd,e.showAdd,h(t,/\b(and)\b/g,(function(e,t){return Object(u.jsx)("span",{style:{color:"#9900ff"},children:e},t)})));return Object(u.jsx)("div",{className:"prompt",children:Object(u.jsx)(m.a,{variant:"h6",component:"h6",sx:{fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic"},children:n})})},p=n(22),v=function(e){var t=e.sentence,n=e.onDelete;return Object(u.jsx)("div",{className:t,children:Object(u.jsxs)("h3",{children:[t.text," ",Object(u.jsx)(p.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]})})},g=function(e){var t=e.sentences,n=e.onDelete;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(v,{sentence:e,onDelete:n},e.id)}))})},x=function(e){e.prompt;var t=e.allowedWords,n=e.sentences,i=e.onAdd,r=Object(s.useState)(""),o=Object(l.a)(r,2),a=o[0],c=o[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){if(e.preventDefault(),a){var s=a.trim().toLowerCase(),r=s.split(" ");if(t.push("a"),r.some((function(e){return!t.includes(e)})))alert("A word or an extra backspace between words that is not in the prompt was used");else n.map((function(e){return e.text.toLowerCase()})).includes(s)?alert("The exact sentence is already saved"):(i({text:a}),c(""))}else alert("There is no text to save")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Sentence"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Sentence",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsx)("input",{type:"submit",value:"Save Sentence",className:"btn btn-block save-sentence"})]})},O=function(e){var t=e.sentences,n=Object(s.useState)(""),i=Object(l.a)(n,2),r=i[0],o=i[1];t=t.map((function(e){return"<s> "+e.text+" </s>"}));return Object(u.jsxs)("form",{className:"add-form submit-footer",onSubmit:function(e){e.preventDefault(),0!=t.length?(document.querySelector("crowd-form").onsubmit=function(){document.getElementById("data-sentences").value=t,document.getElementById("data-feedback").value=r},document.querySelector("crowd-form").submit(),o("")):alert("There are no sentences to submit")},children:[Object(u.jsxs)("div",{className:"submit-form-control",children:[Object(u.jsx)("label",{children:"Having Trouble? "}),Object(u.jsx)("input",{type:"text",placeholder:"Add Feedback",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-block-submit"})]})};var y=function(e){var t=e.prompt,n=e.wordForms,i=Object(s.useState)(!0),r=Object(l.a)(i,2),o=r[0],d=r[1],f=Object(s.useState)([]),m=Object(l.a)(f,2),h=m[0],p=m[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b,{}),Object(u.jsx)(j,{prompt:t,onAdd:function(){return d(!o)},showAdd:o}),o&&Object(u.jsx)(x,{prompt:t,allowedWords:n,sentences:h,onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(c.a)({id:t},e);p([].concat(Object(a.a)(h),[n]))}}),h.length?Object(u.jsx)(g,{sentences:h,onDelete:function(e){p(h.filter((function(t){return t.id!=e})))}}):"",Object(u.jsx)(O,{sentences:h})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(y,{prompt:"The increased revenues were to be used for ' money to nourish honesty ' among local officials and for local irrigation , schools , roads , and charity . Aren't you sure of it ? I would've been .",wordForms:["nutritional","increasing","nutritionally","nutrify","for","were","nutritiousness","of","be","moneyer","usableness","isn't","'","nutritions","nourish","charities","honesty","increase","officiant","officialdoms","usage","money","useableness","usablenesses","irrigations","usances","usable","moneyers","monies","nutritiousnesses","you","irrigating","officiation","usance","am","monetary","increases","nourished","official","scholastics","schooled","surely","local","nutrients",",","schooling","users","weren't","it","sureness","i","nourishment","usages","scholastically","revenue","the","irrigated","scholasticism","being","officialdom","use","nutrition","among","we","officiate","serviceablenesses","serviceabilities","nutritionist","irrigates","useablenesses","used","useable","nourishes","would've","usings","offices","and","officiations","uses","?","nutritionary","scholastic","been",".","officiating","user","serviceable","locality","locals","sure","irrigate","officially","nutritious","surenesses","schools","using","was","honesties","am not","serviceableness","serviceability","schoolings","road","beings","roads","increased","are","wasn't","office","nutritionists","to","revenues","officiated","charity","officials","locally","scholasticisms","school","aren't","officiatings","is","nourishing","localities","officiants","irrigation","nourishments","officiates","nutrient"]})}),document.getElementById("root")),w()}},[[57,1,2]]]);
//# sourceMappingURL=main.f2b58243.chunk.js.map