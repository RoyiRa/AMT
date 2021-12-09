(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{113:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),a=n(25),o=n.n(a),r=(n(83),n(16)),c=n(44),l=n(13),d=n(154),b=n(149),h=n(161),u=n(151),m=n(160),f=n(162),j=n(157),g=n(158),p=n(159),x=n(153),v=n(70),O=n.n(v),y=n(143),w=n(155),A=n(156),S=n(1),T=i.forwardRef((function(e,t){return Object(S.jsx)(y.a,Object(c.a)({direction:"up",ref:t},e))}));function k(){var e=i.useState(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],a=function(){s(!1)};return Object(S.jsxs)("div",{children:[Object(S.jsx)(d.a,{variant:"outlined",className:"full-description-btn",onClick:function(){s(!0)},children:"See Examples"}),Object(S.jsxs)(b.a,{fullScreen:!0,open:n,onClose:a,TransitionComponent:T,children:[Object(S.jsx)(j.a,{sx:{position:"relative"},className:"app-bar",children:Object(S.jsxs)(g.a,{children:[Object(S.jsx)(p.a,{edge:"start",color:"inherit",onClick:a,"aria-label":"close",children:Object(S.jsx)(O.a,{})}),Object(S.jsx)(x.a,{sx:{ml:2,flex:1,fontFamily:"Poppins"},variant:"h5",component:"div",children:"Full Instructions"})]})}),Object(S.jsxs)(m.a,{children:[Object(S.jsx)(u.a,{children:Object(S.jsx)(h.a,{disableTypography:!0,primary:"Instructions",sx:{fontSize:"150%"}})}),Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small"},component:"div",children:["In this HIT, you will see a sentence with at least one \u2018and\u2019, please:",Object(S.jsx)("br",{}),"1. Split the sentence to multiple sentences by removing as many \u2018and\u2019 words as possible while preserving the sentence\u2019s meaning, and assuring the sentences are as complete, readable, and grammatical as possible.",Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small",letterSpacing:"normal"},component:"div",children:["\u25cf When splitting, you are restricted to words that are in the original sentence",Object(S.jsx)("br",{}),"\u25cf To keep grammar intact, change words to their fitting forms as needed (past/present/future, singular/plural, etc...)",Object(S.jsx)("br",{}),"\u25cf It is okay if you remove other words than \u2018and\u2019, or use the same word more than one time",Object(S.jsx)("br",{})]}),"2. Make sure each sentence consists of at least one verb.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"3. Split sentences in the order you read them.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"4. If preserving the meaning of the sentence is impossible, submit it as is.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"NOTE: While the straightforward approach is to remove \u2018and\u2019 words, and split the sentences accordingly, notice that sometimes commas (\u2018,\u2019) and other forms of punctuation should be removed too, as can be seen in the fifth Valid Example below.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"TIP: A good rule of thumb is to add the removed \u2018and\u2019 word between the short sentences, and see if the meaning of the original sentence and the new long sentence is the same."]}),Object(S.jsx)(f.a,{}),Object(S.jsx)(u.a,{children:Object(S.jsx)(h.a,{disableTypography:!0,primary:"Valid Examples",sx:{fontSize:"150%"}})}),Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small"},component:"div",children:[Object(S.jsx)(x.a,{sx:{fontWeight:"bold"},children:"  1. James left unhappy today and unappreciated too. "}),"\u25cf James left unhappy today.",Object(S.jsx)("br",{}),"\u25cf James left unappreciated today.",Object(S.jsx)("br",{}),Object(S.jsx)(A.a,{variant:"outlined",sx:{gap:2,bgcolor:"lightGray",padding:"16px",marginTop:"10px",fontWeight:"bold",fontSize:"small"},children:"'too' is replaced with 'today', as each sentence is standalone."})]}),Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small"},component:"div",children:[Object(S.jsx)(x.a,{sx:{fontWeight:"bold"},children:" 2. As of January 2013, The Times has a circulation of 399,339 and The Sunday Times of 885,612. "}),"\u25cf As of January 2013, The Times has a circulation of 399,339.",Object(S.jsx)("br",{}),"\u25cf As of January 2013, The Sunday Times has a circulation of 885,612."]}),Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small"},component:"div",children:[Object(S.jsx)(x.a,{sx:{fontWeight:"bold"},children:" 3. According to the Merton Thesis, there was a positive correlation between the rise of English Puritanism and German Pietism on the one hand and early experimental science on the other. "}),"\u25cf According to the Merton Thesis, there was a positive correlation between the rise of English Puritanism and German Pietism.",Object(S.jsx)("br",{}),"\u25cf According to the Merton Thesis, there was a positive correlation between the rise of English Puritanism and early experimental science."]}),Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small"},component:"div",children:[Object(S.jsx)(x.a,{sx:{fontWeight:"bold"},children:" 4. Donnie is eating pizza and Dan used to, too. "}),"\u25cf Donnie is eating pizza.",Object(S.jsx)("br",{}),"\u25cf Dan used to eat pizza too."]}),Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small"},component:"div",children:[Object(S.jsx)(x.a,{sx:{fontWeight:"bold"},children:" 5. Genetic studies have found significant African female-mediated gene flow in Arab communities in the Arabian Peninsula and neighboring countries, with an average of 38% of maternal lineages in Yemen are of direct African descent, 16% in Oman-Qatar, and 10% in Saudi Arabia-United Arab Emirates. "}),"\u25cf Genetic studies have found significant African female-mediated gene flow in Arab communities in the Arabian Peninsula and neighboring countries, with an average of 38% of maternal lineages in Yemen are of direct African descent.",Object(S.jsx)("br",{}),"\u25cf Genetic studies have found significant African female-mediated gene flow in Arab communities in the Arabian Peninsula and neighboring countries, with an average of 16% in Oman-Qatar.",Object(S.jsx)("br",{}),"\u25cf Genetic studies have found significant African female-mediated gene flow in Arab communities in the Arabian Peninsula and neighboring countries, with an average of 10% in Saudi Arabia-United Arab Emirates."]}),Object(S.jsx)(f.a,{}),Object(S.jsx)(u.a,{children:Object(S.jsx)(h.a,{disableTypography:!0,primary:"Invalid Examples",sx:{fontSize:"150%"}})}),Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small"},component:"div",children:[Object(S.jsx)(x.a,{sx:{fontWeight:"bold"},children:' 1. In 2013, videos of the 2.5% of artists categorized as "mega", "mainstream" and "mid-sized" received 90.3% of the relevant views on YouTube and Vevo. '}),'\u25cf In 2013, videos of the 2.5% of artists categorized as "mega" received 90.3% of the relevant views on YouTube and Vevo.',Object(S.jsx)("br",{}),'\u25cf In 2013, videos of the 2.5% of artists categorized as "mainstream" received 90.3% of the relevant views on YouTube and Vevo.',Object(S.jsx)("br",{}),'\u25cf In 2013, videos of the 2.5% of artists categorized as "mid-sized" received 90.3% of the relevant views on YouTube and Vevo.',Object(S.jsx)(A.a,{variant:"outlined",sx:{gap:2,bgcolor:"lightGray",padding:"16px",marginTop:"10px",fontWeight:"bold",fontSize:"small"},children:"The video categories combined create 90.3% of the relevant views on YouTube and Vevo. But we do not know what are the relevant views for each category, so we cannot split them."})]}),Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small"},component:"div",children:[Object(S.jsx)(x.a,{sx:{fontWeight:"bold"},children:" 2.  According to the Merton Thesis, there was a positive correlation between the rise of English Puritanism and German Pietism on the one hand and early experimental science on the other."}),Object(S.jsx)(A.a,{variant:"outlined",sx:{gap:2,bgcolor:"lightGray",padding:"16px",marginTop:"10px",fontWeight:"bold",fontSize:"small"},children:"'English Puritanism' and 'German Pietism' are connected by the word 'between', and there is no way to remove the first \u2018and\u2019 word without changing the meaning of the sentence"})]})]})]})]})}var P=function(e){var t=e.title;return Object(S.jsxs)("header",{className:"header",children:[Object(S.jsx)("h1",{children:t}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"1. Split the sentence to multiple sentences by removing as many \u2018and\u2019 words as possible while preserving the sentence\u2019s meaning, and assuring the sentences are as complete, readable, and grammatical as possible.",Object(S.jsxs)(w.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",padding:3,textAlign:"justify",lineHeight:2,color:"black",fontSize:"small",letterSpacing:"normal"},component:"header",children:["\u25cf When splitting, you are restricted to words that are in the original sentence",Object(S.jsx)("br",{}),"\u25cf To keep grammar intact, change words to their fitting forms as needed (past/present/future, singular/plural, etc...)",Object(S.jsx)("br",{}),"\u25cf It is okay if you remove other words than \u2018and\u2019, or use the same word more than one time",Object(S.jsx)("br",{})]}),"2. Make sure each sentence consists of at least one verb.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"3. Split sentences in the order you read them.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"4. If preserving the meaning of the sentence is impossible, submit it as is.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"NOTE: While the straightforward approach is to remove \u2018and\u2019 words, and split the sentences accordingly, notice that sometimes commas (\u2018,\u2019) and other forms of punctuation should be removed too, as can be seen in the fifth Valid Example.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"TIP: A good rule of thumb is to add the removed \u2018and\u2019 word between the short sentences, and see if the meaning of the original sentence and the new long sentence is the same.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(k,{})]})};P.defaultProps={title:"Sentence Segmentation"};var z=P,F=function(e){var t=e.color,n=e.text,i=e.onClick;return Object(S.jsx)("button",{onClick:i,style:{backgroundColor:t},className:"btn",children:n})};F.defaultProps={color:"steelblue"};var I=n(91),E=function(e){var t=e.prompt,n=(e.onAdd,e.showAdd,I(t,/\b(and)\b/g,(function(e,t){return Object(S.jsx)("span",{style:{color:"#9900ff"},children:e},t)})));return Object(S.jsx)("div",{className:"prompt",children:Object(S.jsx)(x.a,{variant:"h6",component:"h6",sx:{fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic"},children:n})})},N=n(71),W=function(e){var t=e.sentence,n=e.onDelete;return Object(S.jsx)("div",{className:t,children:Object(S.jsxs)("h3",{children:[t.text," ",Object(S.jsx)(N.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]})})},C=function(e){var t=e.sentences,n=e.onDelete;return Object(S.jsx)(S.Fragment,{children:t.map((function(e){return Object(S.jsx)(W,{sentence:e,onDelete:n},e.id)}))})},H=function(e){e.prompt;var t=e.allowedWords,n=e.sentences,s=e.onAdd,a=Object(i.useState)(""),o=Object(l.a)(a,2),r=o[0],c=o[1];return Object(S.jsxs)("form",{className:"add-form",onSubmit:function(e){if(e.preventDefault(),r){var i=r.trim().toLowerCase(),a=i.split(" ");if(t.push("a"),a.some((function(e){return!t.includes(e)})))alert("A word or an extra backspace between words that is not in the prompt was used");else n.map((function(e){return e.text.toLowerCase()})).includes(i)?alert("The exact sentence is already saved"):(s({text:r}),c(""))}else alert("There is no text to save")},children:[Object(S.jsxs)("div",{className:"form-control",children:[Object(S.jsx)("label",{children:"Sentence"}),Object(S.jsx)("input",{type:"text",placeholder:"Add Sentence",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(S.jsx)("input",{type:"submit",value:"Save Sentence",className:"btn btn-block save-sentence"})]})},D=function(e){var t=e.sentences,n=Object(i.useState)(""),s=Object(l.a)(n,2),a=s[0],o=s[1];t=t.map((function(e){return"<s> "+e.text+" </s>"}));return Object(S.jsxs)("form",{className:"add-form submit-footer",onSubmit:function(e){e.preventDefault(),0!=t.length?(document.querySelector("crowd-form").onsubmit=function(){document.getElementById("data-sentences").value=t,document.getElementById("data-feedback").value=a},document.querySelector("crowd-form").submit(),o("")):alert("There are no sentences to submit")},children:[Object(S.jsxs)("div",{className:"submit-form-control",children:[Object(S.jsx)("label",{children:"Having Trouble? "}),Object(S.jsx)("input",{type:"text",placeholder:"Add Feedback",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(S.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-block-submit"})]})};var G=function(e){var t=e.prompt,n=e.wordForms,s=Object(i.useState)(!0),a=Object(l.a)(s,2),o=a[0],d=a[1],b=Object(i.useState)([]),h=Object(l.a)(b,2),u=h[0],m=h[1];return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(z,{}),Object(S.jsx)(E,{prompt:t,onAdd:function(){return d(!o)},showAdd:o}),o&&Object(S.jsx)(H,{prompt:t,allowedWords:n,sentences:u,onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(c.a)({id:t},e);m([].concat(Object(r.a)(u),[n]))}}),u.length?Object(S.jsx)(C,{sentences:u,onDelete:function(e){m(u.filter((function(t){return t.id!=e})))}}):"",Object(S.jsx)(D,{sentences:u})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),s(e),a(e),o(e)}))};o.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(G,{prompt:"The increased revenues were to be used for ' money to nourish honesty ' among local officials and for local irrigation , schools , roads , and charity . Aren't you sure of it ? I would've been .",wordForms:["nutritional","increasing","nutritionally","nutrify","for","were","nutritiousness","of","be","moneyer","usableness","isn't","'","nutritions","nourish","charities","honesty","increase","officiant","officialdoms","usage","money","useableness","usablenesses","irrigations","usances","usable","moneyers","monies","nutritiousnesses","you","irrigating","officiation","usance","am","monetary","increases","nourished","official","scholastics","schooled","surely","local","nutrients",",","schooling","users","weren't","it","sureness","i","nourishment","usages","scholastically","revenue","the","irrigated","scholasticism","being","officialdom","use","nutrition","among","we","officiate","serviceablenesses","serviceabilities","nutritionist","irrigates","useablenesses","used","useable","nourishes","would've","usings","offices","and","officiations","uses","?","nutritionary","scholastic","been",".","officiating","user","serviceable","locality","locals","sure","irrigate","officially","nutritious","surenesses","schools","using","was","honesties","am not","serviceableness","serviceability","schoolings","road","beings","roads","increased","are","wasn't","office","nutritionists","to","revenues","officiated","charity","officials","locally","scholasticisms","school","aren't","officiatings","is","nourishing","localities","officiants","irrigation","nourishments","officiates","nutrient"]})}),document.getElementById("root")),M()},83:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.838bb731.chunk.js.map