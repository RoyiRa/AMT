(this.webpackJsonpor_task=this.webpackJsonpor_task||[]).push([[0],{119:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(22),s=n.n(o),a=(n(119),n(24)),c=n(15),l=n(13),u=n(220),d=n(224),b=n(226),p=n(219),f=n(218),h=n(1),j=n(69);function m(e,t,n,r){document.querySelector("crowd-form").onsubmit=function(){document.getElementById("data-sentences1").value=e[0],document.getElementById("data-explanation1").value=t[0],document.getElementById("data-uncertain1").value=n[0],document.getElementById("data-sentences2").value=e[1],document.getElementById("data-explanation2").value=t[1],document.getElementById("data-uncertain2").value=n[1],document.getElementById("data-sentences3").value=e[2],document.getElementById("data-explanation3").value=t[2],document.getElementById("data-uncertain3").value=n[2],document.getElementById("data-sentences4").value=e[3],document.getElementById("data-explanation4").value=t[3],document.getElementById("data-uncertain4").value=n[3],document.getElementById("data-sentences5").value=e[4],document.getElementById("data-explanation5").value=t[4],document.getElementById("data-uncertain5").value=n[4],document.getElementById("data-sentences6").value=e[5],document.getElementById("data-explanation6").value=t[5],document.getElementById("data-uncertain6").value=n[5],document.getElementById("data-sentences7").value=e[6],document.getElementById("data-explanation7").value=t[6],document.getElementById("data-uncertain7").value=n[6],document.getElementById("data-feedback").value=r},document.querySelector("crowd-form").submit()}function x(e){return 1==e.isBulletin?Object(h.jsxs)(f.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",textAlign:"justify",color:"black",fontSize:"small",letterSpacing:"normal",paddingLeft:3},component:"div",children:[" ",e.text," "]}):1==e.isPaper?Object(h.jsxs)(p.a,{variant:"outlined",sx:{gap:2,bgcolor:"lightGray",padding:"16px",marginTop:"10px",fontWeight:"bold",fontSize:"small"},children:[" ",e.text," "]}):1==e.isTitle?Object(h.jsxs)(f.a,{sx:{fontWeight:"bold",fontSize:"small",padding:1},children:["  ",e.text," "]}):Object(h.jsx)(u.a,{primary:e.text,sx:{ml:2,flex:1,fontFamily:"Poppins",textAlign:"justify",lineHeight:2,color:"black",fontSize:"small",letterSpacing:"normal"},component:"div"})}var g=[{text:j("In this HIT you will see seven sentences with at least one \u2018or\u2019, please:",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1},{text:j("1. Rewrite the sentence to multiple sentences with minimal \u2018or\u2019 words.",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1},{text:j("2. You are restricted to words (and their past/present/future, singular/plural forms) that appear in the original sentence.",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1},{text:j("3. If the sentence is a list that calls for ten rewritings or more, check the Long List box, and submit the sentence as is.",/( ten rewritings or more, )/g,(function(e,t){return Object(h.jsx)("span",{style:{fontWeight:"bold"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1},{text:j("4. If preserving the meaning of the sentence is impossible, submit the sentence as is.",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1}],y=[{text:j("1. The money can be collected through the website or by phone or through the app.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf The money can be collected through the website. ",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf The money can be collected by phone.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf The money can be collected through the app.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("2. James left unhappy today or unappreciated.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf James left unhappy today.",/\b(and)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf James left unappreciated today.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("3. Either Bill ate the peaches, or Harry.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf Bill ate the peaches.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf Harry ate the peaches.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("4. In most species, chicks leave the nest just before, or soon after, they are able to fly.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf In most species, chicks leave the nest just before they are able to fly.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf In most species, chicks leave the nest soon after they are able to fly.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("5. It is impossible for Connor to be nice to Jilian , or Jilian to Connor.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf It is impossible for Connor to be nice to Jilian.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf It is impossible for Jilian to be nice to Connor.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1}],v=[{text:j("1. The question of whether the government should intervene or not in the regulation of the cyberspace is a very polemical one.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf The question of whether the government should intervene in the regulation of the cyberspace is a very polemical one.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf The question of whether the government should not intervene in the regulation of the cyberspace is a very polemical one.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("The two rewritten sentences have the exact same meaning, but are worded differently. However, now we have two questions (a question for each sentence), while initially we had one. This does not preserve the meaning of the sentence.",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!0,isBulletin:!1,isTitle:!1},{text:j('2. In 2013, videos of the 2.5% of artists categorized as "mega", "mainstream" or "mid-sized" received 90.3% of the relevant views on YouTube and Vevo.',/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j('\u25cf In 2013, videos of the 2.5% of artists categorized as "mega" received 90.3% of the relevant views on YouTube and Vevo.',/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j('\u25cf In 2013, videos of the 2.5% of artists categorized as "mainstream" received 90.3% of the relevant views on YouTube and Vevo.',/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j('\u25cf In 2013, videos of the 2.5% of artists categorized as "mid-sized" received 90.3% of the relevant views on YouTube and Vevo.',/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("The video categories combined create 90.3% of the relevant views on YouTube and Vevo. But we do not know what are the relevant views for each category, so we cannot rewrite them.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!0,isBulletin:!1,isTitle:!1}],O=n(213),w=n(214),T=n(212),B=n(225),I=n(221),S=n(222),L=n(223),P=n(89),E=n.n(P),k=n(199),A=r.forwardRef((function(e,t){return Object(h.jsx)(k.a,Object(a.a)({direction:"up",ref:t},e))}));function q(){var e=r.useState(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],o=function(){i(!1)};return Object(h.jsxs)("div",{children:[Object(h.jsx)(O.a,{variant:"outlined",className:"full-description-btn",onClick:function(){i(!0)},children:"More Examples"}),Object(h.jsxs)(w.a,{fullScreen:!0,open:n,onClose:o,TransitionComponent:A,children:[Object(h.jsx)(I.a,{sx:{position:"relative"},className:"app-bar",children:Object(h.jsxs)(S.a,{children:[Object(h.jsx)(L.a,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",children:Object(h.jsx)(E.a,{})}),Object(h.jsx)(f.a,{sx:{ml:2,flex:1,fontFamily:"Poppins"},variant:"h5",component:"div",children:"Full Instructions"})]})}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u.a,{disableTypography:!0,primary:"Instructions",sx:{fontSize:"150%",paddingLeft:3}}),g.map((function(e){return Object(h.jsx)(T.a,{children:x(e)},e.text)}))]}),Object(h.jsx)(B.a,{}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u.a,{disableTypography:!0,primary:"Rewritings",sx:{fontSize:"150%",paddingLeft:3}}),y.map((function(e){return Object(h.jsx)(T.a,{children:x(e)},e.text)}))]}),Object(h.jsx)(B.a,{}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u.a,{disableTypography:!0,primary:"Impossible Rewritings",sx:{fontSize:"150%",paddingLeft:3}}),v.map((function(e){return Object(h.jsx)(T.a,{children:x(e)},e.text)}))]})]})]})}var C=n(69),F=function(e){var t=e.title;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("br",{}),"You will be shown a sentence such as:",Object(h.jsx)(b.a,{sx:{ml:2,flex:1,fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic",padding:3,textAlign:"justify",lineHeight:2,color:"black"},component:"div",children:C("The money can be collected through the website or by phone or through the app.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)}))}),C("Please rewrite the sentence to multiple sentences, without the word 'or':",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(h.jsxs)(b.a,{sx:{ml:2,flex:1,fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic",padding:3,textAlign:"justify",lineHeight:2,color:"black"},component:"div",children:["1. The money can be collected through the website.",Object(h.jsx)("br",{}),"2. The money can be collected by phone.",Object(h.jsx)("br",{}),"3. The money can be collected through the app."]}),C("A good rule of thumb is to add the removed \u2018or\u2019 word between the rewritten sentences, and see if the meaning of the original sentence is preserved, as such:",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(h.jsx)(b.a,{sx:{ml:2,flex:1,fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic",padding:3,textAlign:"justify",lineHeight:2,color:"black"},component:"div",children:C("The money can be collected through the website or the money can be collected by phone or the money can be collected through the app.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)}))}),C("Some 'or' words are impossible to remove:",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(h.jsxs)(b.a,{sx:{ml:2,flex:1,fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic",padding:3,textAlign:"justify",lineHeight:2,color:"black"},component:"div",children:[C("The question of whether the government should intervene or not in the regulation of the cyberspace is a very polemical one.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),C("1. The question of whether the government should intervene in the regulation of the cyberspace is a very polemical one.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(h.jsx)("br",{}),C("2. The question of whether the government should not intervene in the regulation of the cyberspace is a very polemical one.",/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)}))]}),Object(h.jsxs)(p.a,{variant:"outlined",sx:{gap:2,bgcolor:"lightGray",padding:"16px",marginTop:"10px",fontWeight:"bold",fontSize:"small"},children:[" ",C("The two rewritten sentences have the exact same meaning, but are worded differently. However, now we have two questions (a question for each sentence), while initially we had one. This does not preserve the meaning of the sentence.",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)}))," "]}),Object(h.jsx)("br",{}),Object(h.jsx)(B.a,{}),Object(h.jsx)("br",{}),C("In this HIT you will see seven sentences with at least one \u2018or\u2019, please:",/(['\u2018\u2019]or['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)(d.a,{children:[Object(h.jsx)(u.a,{primary:C("1. Rewrite the sentence to multiple sentences with minimal 'or' words.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),sx:{paddingLeft:3},component:"div"}),Object(h.jsx)("br",{}),Object(h.jsx)(u.a,{primary:C("2. You are restricted to words (and their past/present/future, singular/plural forms) that appear in the original sentence.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),sx:{paddingLeft:3},component:"div"}),Object(h.jsx)("br",{}),Object(h.jsx)(u.a,{primary:C("3. If the sentence is a list that calls for ten rewritings or more, check the Long List box, and submit the sentence as is.",/( ten rewritings or more, )/g,(function(e,t){return Object(h.jsx)("span",{style:{fontWeight:"bold"},children:e},t)})),sx:{paddingLeft:3},component:"div"}),Object(h.jsx)("br",{}),Object(h.jsx)(u.a,{primary:C("4. If preserving the meaning of the sentence is impossible, submit the sentence as is.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),sx:{paddingLeft:3},component:"div"})]}),Object(h.jsx)("br",{}),Object(h.jsx)(q,{})]})};F.defaultProps={title:"Rewrite Sentences to Multiple Sentences"};var D=F,z=n(69),R=function(e){var t=e.prompt,n=z(t,/\b(or)\b/g,(function(e,t){return Object(h.jsx)("span",{style:{color:"#9900ff"},children:e},t)}));return Object(h.jsx)("div",{className:"prompt",children:Object(h.jsx)(f.a,{variant:"h6",component:"h6",sx:{fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic"},children:n})})},N=n(92),U=function(e){var t=e.sentence,n=e.onDelete;return Object(h.jsx)("div",{children:Object(h.jsxs)("h3",{children:[Object(h.jsx)(N.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id,"sentences")}}),t.value]})})},H=n(56),W=function(e){var t=e.data,n=e.currentScreen,r=e.onDelete,i=e.updateData;var o=t[n].sentences;return Object(h.jsx)(H.a,{onDragEnd:function(e){if(e.destination){var r=Object(c.a)(t),o=Object(a.a)({},r[n]),s=o.sentences.splice(e.source.index,1),u=Object(l.a)(s,1)[0];o.sentences.splice(e.destination.index,0,u),o.sentences=Object(c.a)(r[n].sentences),r[n]=o,i(r)}},children:Object(h.jsx)(H.c,{droppableId:"sentences",children:function(e){return Object(h.jsxs)("div",Object(a.a)(Object(a.a)({},e.droppableProps),{},{ref:e.innerRef,children:[o.map((function(e,t){return Object(h.jsx)(H.b,{draggableId:e.id.toString(),index:t,children:function(t){return Object(h.jsx)("div",Object(a.a)(Object(a.a)(Object(a.a)({},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:Object(h.jsx)(U,{sentence:e,onDelete:r},e.id)}))}},e.id)})),e.placeholder]}))}})})},J=n(90),_=n(210);function Y(e){var t=e.msg,n=e.alertType;return Object(h.jsx)(_.a,{variant:"filled",severity:n,children:t})}var V=n(207),M=n(227),G=n(216),K=n(206);function Q(e){var t=e.msg,n=e.openDialog,r=e.handleClose,i=e.onAdd,o=e.data,s=e.feedback,a=e.setFeedback,c=e.promptsIdxRequiringExplanation,l=e.sentencesToSubmit,u=e.uncertaintiesToSubmit;return Object(h.jsx)("div",{children:Object(h.jsxs)(w.a,{open:n,children:[Object(h.jsxs)(G.a,{sx:{display:"flex",flexDirection:"column",gap:"40px"},children:[Object(h.jsx)(b.a,{sx:{fontWeight:"bold"},children:t}),c.map((function(e){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)("span",{style:{fontStyle:"italic"},children:o[e].prompt}),Object(h.jsx)(V.a,{autoFocus:!0,required:!0,margin:"dense",id:"name",fullWidth:!0,variant:"standard",placeholder:"Enter your explanation here",value:o[e].explanation,onChange:function(t){return i({value:t.target.value,valueType:"explanation",idx:e})}})]})}))]}),Object(h.jsxs)(M.a,{children:[Object(h.jsx)(O.a,{onClick:function(e){e.preventDefault(),r()},sx:{color:"black"},children:"Cancel"}),Object(h.jsx)(K.a,{title:"Filling all explanations is required",children:Object(h.jsx)("span",{children:Object(h.jsx)(O.a,{disabled:0!=o.filter((function(e){return 1==e.sentences.length&&""==e.explanation})).length,onClick:function(e){e.preventDefault(),r();var t=o.map((function(e){return""!=e.explanation?e.explanation:""}));m(l,t,u,s),a("")},sx:{color:"black"},children:"Submit"})})})]})]})})}var X=n(228),Z=n(229),$=n(211);function ee(e){var t=e.onChange,n=e.status,r=e.label;return Object(h.jsx)(X.a,{children:Object(h.jsx)(Z.a,{control:Object(h.jsx)($.a,{onChange:t,checked:n()}),label:r})})}var te=function(e){var t=e.allowedWords,n=e.sentences,i=e.onAdd,o=e.currentScreen,s=e.handleIsLongList,a=e.longListStatus,c=e.handleIsUncertain,u=e.uncertainStatus,d=(e.data,Object(r.useState)("")),b=Object(l.a)(d,2),p=b[0],f=b[1],j=Object(r.useState)(!1),m=Object(l.a)(j,2),x=m[0],g=m[1],y=Object(r.useState)(""),v=Object(l.a)(y,2),O=v[0],w=v[1],T=Object(r.useState)(""),B=Object(l.a)(T,2),I=B[0],S=B[1];return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){if(e.preventDefault(),!p)return g(!0),w("There is no text to save"),void S("error");p=p.replace(/\s+/g," ").trim(),t.push("a"),t.push("it"),t.push("this"),t.push("is"),t.push("are");for(var r=[".",",","!","?"],s=function(){var e=l[c];t=t.concat(t.filter((function(e){return!r.includes(e)})).map((function(t){return t+e})))},c=0,l=r;c<l.length;c++)s();var u,d=p.trim().toLowerCase(),b=d.split(" "),h=Object(J.a)(b);try{for(h.s();!(u=h.n()).done;){var j=u.value;if(!t.includes(j)&&!t.includes(j.substring(0,j.length-1)))return g(!0),w("'"+j+"'  is not permitted. If the word is punctuated, add a backspace between the word and the punctuation, otherwise, use a different word."),void S("error")}}catch(m){h.e(m)}finally{h.f()}return n.map((function(e){return e.value.toLowerCase()})).includes(d)?(g(!0),w("This sentence has already been saved"),void S("error")):1==a()&&0!=n.length?(g(!0),w("Uncheck Long List to add more than one sentence."),void S("error")):(g(!0),w("Sentence saved"),S("success"),i({value:p,valueType:"sentences",idx:o}),void f(""))},children:[x&&Object(h.jsx)(Y,{msg:O,alertType:I,widthValue:"30%"}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Sentence"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Sentence",value:p,onChange:function(e){return f(e.target.value)}})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:"40px",alignItems:"center"},children:[Object(h.jsx)("input",{type:"submit",value:"Save Sentence",className:"btn btn-block save-sentence"}),Object(h.jsx)(ee,{onChange:function(){if(n.length>1)return g(!0),w("Save exactly one sentence before checking Long List"),void S("error");s()},status:a,label:"Long List"}),Object(h.jsx)(ee,{onChange:c,status:u,label:"Uncertain"})]})]})})},ne=function(e){for(var t=e.data,n=e.numPrompts,i=e.onAdd,o=Object(r.useState)(""),s=Object(l.a)(o,2),a=s[0],c=s[1],u=Object(r.useState)(!1),d=Object(l.a)(u,2),b=d[0],p=d[1],f=Object(r.useState)(""),j=Object(l.a)(f,2),x=j[0],g=j[1],y=Object(r.useState)([]),v=Object(l.a)(y,2),w=v[0],T=v[1],B=t.map((function(e){return e.isUncertain})),I=t.map((function(e){return e.sentences})),S=0;S<t.length;S++)I[S]=I[S].map((function(e){return"<s> "+e.value+" </s>"}));return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"add-form submit-footer",onSubmit:function(e){e.preventDefault();for(var n=[],r=!1,i=0;i<t.length;i++)1==t[i].sentences.length&&0==t[i].isLongList&&(r=!0,n.push(i));if(T([].concat(n)),r)p(!0),g("Why are the following sentences impossible to rewrite?");else{var o=t.map((function(e){return""!=e.explanation?e.explanation:""}));m(I,o,B,a),c(""),T([])}},children:[Object(h.jsxs)("div",{className:"submit-form-control",children:[Object(h.jsx)("label",{children:"Anything to Share? "}),Object(h.jsx)("input",{type:"text",placeholder:"Add Feedback (optional)",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(h.jsx)(Q,{msg:x,openDialog:b,handleClose:function(){p(!1)},onAdd:i,data:t,feedback:a,setFeedback:c,promptsIdxRequiringExplanation:w,sentencesToSubmit:I,uncertaintiesToSubmit:B}),Object(h.jsx)(O.a,{disabled:t.filter((function(e){return 0!=e.sentences.length})).length<n,type:"submit",sx:{width:"30%",display:"block",margin:0,border:"none",color:"black",padding:"10px 20px",borderRadius:"5px",cursor:"pointer",textDecoration:"none",fontSize:"15px",fontFamily:"Poppins"},children:" Submit "})]})})},re=n(217);var ie=function(e){var t=e.initData,n=Object(r.useState)(0),i=Object(l.a)(n,2),o=i[0],s=i[1],u=Object(r.useState)(t),d=Object(l.a)(u,2),b=d[0],p=d[1];function f(e){var t=e.value,n=e.valueType,r=e.idx,i=Object(c.a)(b),o=Object(a.a)({},i[r]);if("sentences"==n){var s={id:Math.floor(1e4*Math.random())+1,index:i[r][n].length,value:t};o[n]=[].concat(Object(c.a)(i[r][n]),[s]),i[r]=o}else"isLongList"==n&&(o.explanation=1==t?"long list":""),o[n]=t,i[r]=o;p(i),console.log(b),console.log("done!")}return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(D,{}),Object(h.jsxs)(re.a,{sx:{display:"flex",justifyContent:"space-evenly",p:1,m:1,bgcolor:"background.paper",borderRadius:1},children:[Object(h.jsx)(O.a,{disabled:0==o,onClick:function(){s(o-1)},sx:{width:"30%",color:"black",fontSize:"15px",fontFamily:"Poppins"},children:" Back "}),Object(h.jsx)(O.a,{disabled:6==o,onClick:function(){s(o+1)},sx:{width:"30%",color:"black",fontSize:"15px",fontFamily:"Poppins"},children:" Next "})]}),Object(h.jsx)(R,{prompt:b[o].prompt}),Object(h.jsx)(te,{allowedWords:b[o].wordForms,sentences:b[o].sentences,onAdd:f,currentScreen:o,handleIsLongList:function(){f({value:!b[o].isLongList,valueType:"isLongList",idx:o})},longListStatus:function(){return b[o].isLongList},handleIsUncertain:function(){f({value:!b[o].isUncertain,valueType:"isUncertain",idx:o})},uncertainStatus:function(){return b[o].isUncertain},data:b}),b[o].sentences.length?Object(h.jsx)(W,{data:b,currentScreen:o,onDelete:function(e,t){var n=Object(c.a)(b),r=Object(a.a)({},n[o]);r[t]=r[t].filter((function(t){return t.id!=e})),n[o]=r,p(n)},updateData:p}):"",Object(h.jsx)(ne,{data:b,numPrompts:7,onAdd:f})]})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),o(e),s(e)}))},se=document.getElementById("root").getAttribute("data-prompt1"),ae=document.getElementById("root").getAttribute("data-word-forms1");se=se.replace(/\<doublequotes>/g,'"'),ae=(ae=ae.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var ce=document.getElementById("root").getAttribute("data-prompt2"),le=document.getElementById("root").getAttribute("data-word-forms2");ce=ce.replace(/\<doublequotes>/g,'"'),le=(le=le.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var ue=document.getElementById("root").getAttribute("data-prompt3"),de=document.getElementById("root").getAttribute("data-word-forms3");ue=ue.replace(/\<doublequotes>/g,'"'),de=(de=de.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var be=document.getElementById("root").getAttribute("data-prompt4"),pe=document.getElementById("root").getAttribute("data-word-forms4");be=be.replace(/\<doublequotes>/g,'"'),pe=(pe=pe.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var fe=document.getElementById("root").getAttribute("data-prompt5"),he=document.getElementById("root").getAttribute("data-word-forms5");fe=fe.replace(/\<doublequotes>/g,'"'),he=(he=he.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var je=document.getElementById("root").getAttribute("data-prompt6"),me=document.getElementById("root").getAttribute("data-word-forms6");je=je.replace(/\<doublequotes>/g,'"'),me=(me=me.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var xe=document.getElementById("root").getAttribute("data-prompt7"),ge=document.getElementById("root").getAttribute("data-word-forms7"),ye=[{prompt:se,wordForms:ae,explanation:"",sentences:[],isLongList:!1,isUncertain:!1},{prompt:ce,wordForms:le,explanation:"",sentences:[],isLongList:!1,isUncertain:!1},{prompt:ue,wordForms:de,explanation:"",sentences:[],isLongList:!1,isUncertain:!1},{prompt:be,wordForms:pe,explanation:"",sentences:[],isLongList:!1,isUncertain:!1},{prompt:fe,wordForms:he,explanation:"",sentences:[],isLongList:!1,isUncertain:!1},{prompt:je,wordForms:me,explanation:"",sentences:[],isLongList:!1,isUncertain:!1},{prompt:xe=xe.replace(/\<doublequotes>/g,'"'),wordForms:ge=(ge=ge.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')})),explanation:"",sentences:[],isLongList:!1,isUncertain:!1}];s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(ie,{initData:ye})}),document.getElementById("root")),oe()}},[[149,1,2]]]);
//# sourceMappingURL=main.2464d909.chunk.js.map