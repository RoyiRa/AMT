(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{21:function(e,t){},29:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),o=n(19),r=n.n(o),c=(n(29),n(4)),a=n(20),l=n(5),u=n(21),d=n.n(u),f=n(1),b=function(e){var t=e.color,n=e.text,s=e.onClick;return Object(f.jsx)("button",{onClick:s,style:{backgroundColor:t},className:"btn",children:n})};b.defaultProps={color:"steelblue"};var m=n(66),h=n(31),j=function(e){var t=e.prompt,n=(e.onAdd,e.showAdd,h(t,/\b(and)\b/g,(function(e,t){return Object(f.jsx)("span",{style:{color:"#9900ff"},children:e},t)})));return Object(f.jsx)("div",{className:"prompt",children:Object(f.jsx)(m.a,{variant:"h6",component:"h6",sx:{fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic"},children:n})})},v=n(23),p=function(e){var t=e.sentence,n=e.onDelete;return Object(f.jsx)("div",{className:t,children:Object(f.jsxs)("h3",{children:[t.text," ",Object(f.jsx)(v.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]})})},g=function(e){var t=e.sentences,n=e.onDelete;return Object(f.jsx)(f.Fragment,{children:t.map((function(e){return Object(f.jsx)(p,{sentence:e,onDelete:n},e.id)}))})},x=function(e){e.prompt;var t=e.allowedWords,n=e.sentences,i=e.onAdd,o=Object(s.useState)(""),r=Object(l.a)(o,2),c=r[0],a=r[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(e){if(e.preventDefault(),c){var s=c.trim().toLowerCase(),o=s.split(" ");if(t.push("a"),o.some((function(e){return!t.includes(e)})))alert("A word or an extra backspace between words that is not in the prompt was used");else n.map((function(e){return e.text.toLowerCase()})).includes(s)?alert("The exact sentence is already saved"):(i({text:c}),a(""))}else alert("There is no text to save")},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Sentence"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Sentence",value:c,onChange:function(e){return a(e.target.value)}})]}),Object(f.jsx)("input",{type:"submit",value:"Save Sentence",className:"btn btn-block save-sentence"})]})},O=function(e){var t=e.sentences,n=Object(s.useState)(""),i=Object(l.a)(n,2),o=i[0],r=i[1];t=t.map((function(e){return"<s> "+e.text+" </s>"}));return Object(f.jsxs)("form",{className:"add-form submit-footer",onSubmit:function(e){e.preventDefault(),0!=t.length?(document.querySelector("crowd-form").onsubmit=function(){document.getElementById("data-sentences").value=t,document.getElementById("data-feedback").value=o},document.querySelector("crowd-form").submit(),r("")):alert("There are no sentences to submit")},children:[Object(f.jsxs)("div",{className:"submit-form-control",children:[Object(f.jsx)("label",{children:"Having Trouble? "}),Object(f.jsx)("input",{type:"text",placeholder:"Add Feedback",value:o,onChange:function(e){return r(e.target.value)}})]}),Object(f.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-block-submit"})]})};var y=function(e){var t=e.prompt,n=e.wordForms,i=Object(s.useState)(!0),o=Object(l.a)(i,2),r=o[0],u=o[1],b=Object(s.useState)([]),m=Object(l.a)(b,2),h=m[0],v=m[1];return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(d.a,{}),Object(f.jsx)(j,{prompt:t,onAdd:function(){return u(!r)},showAdd:r}),r&&Object(f.jsx)(x,{prompt:t,allowedWords:n,sentences:h,onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(a.a)({id:t},e);v([].concat(Object(c.a)(h),[n]))}}),h.length?Object(f.jsx)(g,{sentences:h,onDelete:function(e){v(h.filter((function(t){return t.id!=e})))}}):"",Object(f.jsx)(O,{sentences:h})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),s(e),i(e),o(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(y,{prompt:"The increased revenues were to be used for ' money to nourish honesty ' among local officials and for local irrigation , schools , roads , and charity . Aren't you sure of it ? I would've been .",wordForms:["nutritional","increasing","nutritionally","nutrify","for","were","nutritiousness","of","be","moneyer","usableness","isn't","'","nutritions","nourish","charities","honesty","increase","officiant","officialdoms","usage","money","useableness","usablenesses","irrigations","usances","usable","moneyers","monies","nutritiousnesses","you","irrigating","officiation","usance","am","monetary","increases","nourished","official","scholastics","schooled","surely","local","nutrients",",","schooling","users","weren't","it","sureness","i","nourishment","usages","scholastically","revenue","the","irrigated","scholasticism","being","officialdom","use","nutrition","among","we","officiate","serviceablenesses","serviceabilities","nutritionist","irrigates","useablenesses","used","useable","nourishes","would've","usings","offices","and","officiations","uses","?","nutritionary","scholastic","been",".","officiating","user","serviceable","locality","locals","sure","irrigate","officially","nutritious","surenesses","schools","using","was","honesties","am not","serviceableness","serviceability","schoolings","road","beings","roads","increased","are","wasn't","office","nutritionists","to","revenues","officiated","charity","officials","locally","scholasticisms","school","aren't","officiatings","is","nourishing","localities","officiants","irrigation","nourishments","officiates","nutrient"]})}),document.getElementById("root")),w()}},[[58,1,2]]]);
//# sourceMappingURL=main.364c5a78.chunk.js.map