(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{115:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(33),s=n.n(r),o=(n(115),n(48)),c=n(15),l=n(13),d=n(213),u=n(217),f=n(219),b=n(212),p=n(211),m=n(1),j=n(63);function h(e,t,n){document.querySelector("crowd-form").onsubmit=function(){document.getElementById("data-sentences1").value=e[0],document.getElementById("data-explanation1").value=t[0],document.getElementById("data-sentences2").value=e[1],document.getElementById("data-explanation2").value=t[1],document.getElementById("data-sentences3").value=e[2],document.getElementById("data-explanation3").value=t[2],document.getElementById("data-sentences4").value=e[3],document.getElementById("data-explanation4").value=t[3],document.getElementById("data-sentences5").value=e[4],document.getElementById("data-explanation5").value=t[4],document.getElementById("data-sentences6").value=e[5],document.getElementById("data-explanation6").value=t[5],document.getElementById("data-sentences7").value=e[6],document.getElementById("data-explanation7").value=t[6],document.getElementById("data-feedback").value=n},document.querySelector("crowd-form").submit()}function x(e){return 1==e.isBulletin?Object(m.jsxs)(p.a,{sx:{ml:2,flex:1,fontFamily:"Poppins",textAlign:"justify",color:"black",fontSize:"small",letterSpacing:"normal",paddingLeft:3},component:"div",children:[" ",e.text," "]}):1==e.isPaper?Object(m.jsxs)(b.a,{variant:"outlined",sx:{gap:2,bgcolor:"lightGray",padding:"16px",marginTop:"10px",fontWeight:"bold",fontSize:"small"},children:[" ",e.text," "]}):1==e.isTitle?Object(m.jsxs)(p.a,{sx:{fontWeight:"bold",fontSize:"small",padding:1},children:["  ",e.text," "]}):Object(m.jsx)(d.a,{primary:e.text,sx:{ml:2,flex:1,fontFamily:"Poppins",textAlign:"justify",lineHeight:2,color:"black",fontSize:"small",letterSpacing:"normal"},component:"div"})}var g=[{text:j("In this HIT you will see a sentence with at least one \u2018and\u2019, please:",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1},{text:j("1. Rewrite the sentence to multiple sentences with minimal 'and' words and accompanying commas.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1},{text:j("2. You are restricted to words (and their past/present/future, singular/plural forms) that appear in the original sentence.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1},{text:j("3. If preserving the meaning of the sentence is impossible, submit the sentence as is.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!1}],y=[{text:j("1. As of January 2013, The Times has a circulation of 399,339, The Sunday Times of 885,612, and The New York Times of 9,512,132.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf As of January 2013, The Times has a circulation of 399,339. ",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf As of January 2013, The Sunday Times has a circulation of 885,612.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf As of January 2013, The New York Times has a circulation of 9,512,132.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("2. The Beatles members are: John Lennon, Paul McCartney, George Harrison, and Ringo Starr.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf John Lennon is a Beatles member.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf Paul McCartney is a Beatles member.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf George Harrison is a Beatles member.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf Ringo Starr is a Beatles member.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("3. James left unhappy today and unappreciated too.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf James left unhappy today.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf James left unappreciated today.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("4. The four Catholic dogmas regarding Mary are: Mother of God , Perpetual virginity of Mary, Immaculate Conception and Assumption of Mary.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf A Catholic dogma regarding Mary is: Mother of God.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf A Catholic dogma regarding Mary is: Perpetual virginity of Mary.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf A Catholic dogma regarding Mary is: Immaculate Conception.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf A Catholic dogma regarding Mary is: Assumption of Mary.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("5. Genetic studies have found significant African female-mediated gene flow in Arab communities in the Arabian Peninsula and neighboring countries, with an average of 38% of maternal lineages in Yemen are of direct African descent, 16% in Oman-Qatar, and 10% in Saudi Arabia-United Arab Emirates.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf Genetic studies have found significant African female-mediated gene flow in Arab communities in the Arabian Peninsula and neighboring countries, with an average of 38% of maternal lineages in Yemen are of direct African descent.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf Genetic studies have found significant African female-mediated gene flow in Arab communities in the Arabian Peninsula and neighboring countries, with an average of 16% in Oman-Qatar.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf Genetic studies have found significant African female-mediated gene flow in Arab communities in the Arabian Peninsula and neighboring countries, with an average of 10% in Saudi Arabia-United Arab Emirates.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("Note how the first 'and' gives context to 'neighboring countries' and cannot be removed, but the following 'and' and its preceding commas can be removed.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!0,isBulletin:!1,isTitle:!1}],O=[{text:j("1. Jane has five dollars and fifty cents in her wallet.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\u25cf Jane has five dollars in her wallet.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("\u25cf Jane has fifty cents in her wallet.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("In this case, removing 'and' creates two contradicting sentences, and does not preserve the meaning of the sentence.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!0,isBulletin:!1,isTitle:!1},{text:j('2. In 2013, videos of the 2.5% of artists categorized as "mega", "mainstream" and "mid-sized" received 90.3% of the relevant views on YouTube and Vevo.',/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j('\u25cf In 2013, videos of the 2.5% of artists categorized as "mega" received 90.3% of the relevant views on YouTube and Vevo.',/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j('\u25cf In 2013, videos of the 2.5% of artists categorized as "mainstream" received 90.3% of the relevant views on YouTube and Vevo.',/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j('\u25cf In 2013, videos of the 2.5% of artists categorized as "mid-sized" received 90.3% of the relevant views on YouTube and Vevo.',/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!0,isTitle:!1},{text:j("The video categories combined create 90.3% of the relevant views on YouTube and Vevo. But we do not know what are the relevant views for each category, so we cannot rewrite them.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!0,isBulletin:!1,isTitle:!1},{text:j("3. It was built mainly by Byzantine master craftsmen, sent by Constantine Monomachos, between 1037 and 1046.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("Here, 'and' connects between a start date and an end date, removing it will change the meaning of the sentence.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!0,isBulletin:!1,isTitle:!1},{text:j("4. This is the bread and butter of the profession.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!1,isBulletin:!1,isTitle:!0},{text:j("\"bread and butter\" is used as an idiom, removing the 'and' will change the meaning of the sentence.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),isPaper:!0,isBulletin:!1,isTitle:!1}],v=n(206),T=n(207),w=n(205),B=n(218),A=n(214),P=n(215),S=n(216),I=n(86),k=n.n(I),E=n(193),C=i.forwardRef((function(e,t){return Object(m.jsx)(E.a,Object(o.a)({direction:"up",ref:t},e))}));function F(){var e=i.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],r=function(){a(!1)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(v.a,{variant:"outlined",className:"full-description-btn",onClick:function(){a(!0)},children:"More Examples"}),Object(m.jsxs)(T.a,{fullScreen:!0,open:n,onClose:r,TransitionComponent:C,children:[Object(m.jsx)(A.a,{sx:{position:"relative"},className:"app-bar",children:Object(m.jsxs)(P.a,{children:[Object(m.jsx)(S.a,{edge:"start",color:"inherit",onClick:r,"aria-label":"close",children:Object(m.jsx)(k.a,{})}),Object(m.jsx)(p.a,{sx:{ml:2,flex:1,fontFamily:"Poppins"},variant:"h5",component:"div",children:"Full Instructions"})]})}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(d.a,{disableTypography:!0,primary:"Instructions",sx:{fontSize:"150%",paddingLeft:3}}),g.map((function(e){return Object(m.jsx)(w.a,{children:x(e)},e.text)}))]}),Object(m.jsx)(B.a,{}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(d.a,{disableTypography:!0,primary:"Rewritings",sx:{fontSize:"150%",paddingLeft:3}}),y.map((function(e){return Object(m.jsx)(w.a,{children:x(e)},e.text)}))]}),Object(m.jsx)(B.a,{}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(d.a,{disableTypography:!0,primary:"Impossible Rewritings",sx:{fontSize:"150%",paddingLeft:3}}),O.map((function(e){return Object(m.jsx)(w.a,{children:x(e)},e.text)}))]})]})]})}var J=n(63),N=function(e){var t=e.title;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{children:t}),Object(m.jsx)("br",{}),"You will be shown a sentence such as:",Object(m.jsx)(f.a,{sx:{ml:2,flex:1,fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic",padding:3,textAlign:"justify",lineHeight:2,color:"black"},component:"div",children:J("As of January 2013, The Times has a circulation of 399,339, The Sunday Times of 885,612, and The New York Times of 9,512,132.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)}))}),J("Please rewrite the sentence to multiple sentences, without the word 'and' and its accompanying commas:",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(m.jsxs)(f.a,{sx:{ml:2,flex:1,fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic",padding:3,textAlign:"justify",lineHeight:2,color:"black"},component:"div",children:["1. As of January 2013, The Times has a circulation of 399,339.",Object(m.jsx)("br",{}),"2. As of January 2013, The Sunday Times has a circulation of 885,612.",Object(m.jsx)("br",{}),"3. As of January 2013, The New York Times has a circulation of 9,512,132."]}),J("A good rule of thumb is to add the removed \u2018and\u2019 word between the rewritten sentences, and see if the meaning of the original sentence is preserved, as such:",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(m.jsx)(f.a,{sx:{ml:2,flex:1,fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic",padding:3,textAlign:"justify",lineHeight:2,color:"black"},component:"div",children:J("As of January 2013, The Times has a circulation of 399,339 and as of January 2013, The Sunday Times has a circulation of 885,612 and as of January 2013, The New York Times has a circulation of 9,512,132.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)}))}),J("Some 'and' words are impossible to remove:",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(m.jsxs)(f.a,{sx:{ml:2,flex:1,fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic",padding:3,textAlign:"justify",lineHeight:2,color:"black"},component:"div",children:[J("Jane has five dollars and fifty cents in her wallet.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),J("1. Jane has five dollars in her wallet.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(m.jsx)("br",{}),J("2. Jane has fifty cents in her wallet.",/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)}))]}),Object(m.jsxs)(b.a,{variant:"outlined",sx:{gap:2,bgcolor:"lightGray",padding:"16px",marginTop:"10px",fontWeight:"bold",fontSize:"small"},children:[" ",J("In this case, removing 'and' creates two contradicting sentences, and does not preserve the meaning of the sentence.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)}))," "]}),Object(m.jsx)("br",{}),Object(m.jsx)(B.a,{}),Object(m.jsx)("br",{}),J("In this HIT you will see a sentence with at least one \u2018and\u2019, please:",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)(u.a,{children:[Object(m.jsx)(d.a,{primary:J("1. Rewrite the sentence to multiple sentences with minimal 'and' words and accompanying commas.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),sx:{paddingLeft:3},component:"div"}),Object(m.jsx)("br",{}),Object(m.jsx)(d.a,{primary:J("2. You are restricted to words (and their past/present/future, singular/plural forms) that appear in the original sentence.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),sx:{paddingLeft:3},component:"div"}),Object(m.jsx)("br",{}),Object(m.jsx)(d.a,{primary:J("3. If preserving the meaning of the sentence is impossible, submit the sentence as is.",/(['\u2018\u2019]and['\u2018\u2019])/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)})),sx:{paddingLeft:3},component:"div"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(F,{})]})};N.defaultProps={title:"Rewrite Sentences to Multiple Sentences"};var q=N,M=n(63),z=function(e){var t=e.prompt,n=M(t,/\b(and)\b/g,(function(e,t){return Object(m.jsx)("span",{style:{color:"#9900ff"},children:e},t)}));return Object(m.jsx)("div",{className:"prompt",children:Object(m.jsx)(p.a,{variant:"h6",component:"h6",sx:{fontFamily:"Times New Roman; Times; Ariel",fontStyle:"italic"},children:n})})},R=n(89),D=function(e){var t=e.sentence,n=e.onDelete;return Object(m.jsx)("div",{children:Object(m.jsxs)("h3",{children:[Object(m.jsx)(R.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id,"sentences")}}),t.text]})})},Y=function(e){var t=e.sentences,n=e.onDelete;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)(D,{sentence:e,onDelete:n},e.id)}))})},L=n(87),G=n(204);function H(e){var t=e.msg,n=e.alertType;return Object(m.jsx)(G.a,{variant:"filled",severity:n,children:t})}var W=n(201),_=n(220),V=n(209),Q=n(200);function U(e){var t=e.msg,n=e.openDialog,i=e.handleClose,a=e.onAdd,r=e.data,s=e.feedback,o=e.setFeedback,c=e.promptsIdxRequiringExplanation;return Object(m.jsx)("div",{children:Object(m.jsxs)(T.a,{open:n,children:[Object(m.jsxs)(V.a,{sx:{display:"flex",flexDirection:"column",gap:"40px"},children:[Object(m.jsx)(f.a,{sx:{fontWeight:"bold"},children:t}),c.map((function(e){return Object(m.jsxs)(f.a,{children:[Object(m.jsx)("span",{style:{fontStyle:"italic"},children:r[e].prompt}),Object(m.jsx)(W.a,{autoFocus:!0,required:!0,margin:"dense",id:"name",fullWidth:!0,variant:"standard",placeholder:"Enter your explanation here",value:r[e].explanation,onChange:function(t){return a({text:t.target.value,textType:"explanation",idx:e})}})]})}))]}),Object(m.jsxs)(_.a,{children:[Object(m.jsx)(v.a,{onClick:function(e){e.preventDefault(),i()},sx:{color:"black"},children:"Cancel"}),Object(m.jsx)(Q.a,{title:"Filling all explanations is required",children:Object(m.jsx)("span",{children:Object(m.jsx)(v.a,{disabled:0!=r.filter((function(e){return 1==e.sentences.length&&""==e.explanation})).length,onClick:function(e){e.preventDefault(),i();var t=r.filter((function(e){return 1==e.sentences.length}));console.log(t);var n=t.filter((function(e){return""==e.explanation}));console.log(n),n||(h(r,s),o(""))},sx:{color:"black"},children:"Submit"})})})]})]})})}var K=function(e){var t=e.allowedWords,n=e.sentences,a=e.onAdd,r=e.currentScreen,s=Object(i.useState)(""),o=Object(l.a)(s,2),c=o[0],d=o[1],u=Object(i.useState)(!1),f=Object(l.a)(u,2),b=f[0],p=f[1],j=Object(i.useState)(""),h=Object(l.a)(j,2),x=h[0],g=h[1],y=Object(i.useState)(""),O=Object(l.a)(y,2),v=O[0],T=O[1];return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{className:"add-form",onSubmit:function(e){if(e.preventDefault(),!c)return p(!0),g("There is no text to save"),void T("error");c=c.replace(/\s+/g," ").trim(),t.push("a"),t.push("it");for(var i=[".",",","!","?"],s=function(){var e=l[o];t=t.concat(t.filter((function(e){return!i.includes(e)})).map((function(t){return t+e})))},o=0,l=i;o<l.length;o++)s();var u,f=c.trim().toLowerCase(),b=f.split(" "),m=Object(L.a)(b);try{for(m.s();!(u=m.n()).done;){var j=u.value;if(!t.includes(j)&&!t.includes(j.substring(0,j.length-1)))return p(!0),g("'"+j+"'  is not permitted. If the word is punctuated, add a backspace between the word and the punctuation, otherwise, use a different word."),void T("error")}}catch(h){m.e(h)}finally{m.f()}if(n.map((function(e){return e.text.toLowerCase()})).includes(f))return p(!0),g("This sentence has already been saved"),void T("error");p(!0),g("Sentence saved"),T("success"),a({text:c,textType:"sentences",idx:r}),d("")},children:[b&&Object(m.jsx)(H,{msg:x,alertType:v,widthValue:"30%"}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{children:"Sentence"}),Object(m.jsx)("input",{type:"text",placeholder:"Add Sentence",value:c,onChange:function(e){return d(e.target.value)}})]}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{type:"submit",value:"Save Sentence",className:"btn btn-block save-sentence"})})]})})},X=function(e){for(var t=e.data,n=e.numPrompts,a=e.onAdd,r=Object(i.useState)(""),s=Object(l.a)(r,2),o=s[0],c=s[1],d=Object(i.useState)(!1),u=Object(l.a)(d,2),f=u[0],b=u[1],p=Object(i.useState)(""),j=Object(l.a)(p,2),x=j[0],g=j[1],y=Object(i.useState)([]),O=Object(l.a)(y,2),T=O[0],w=O[1],B=[""],A=t.map((function(e){return e.sentences})),P=0;P<t.length;P++)A[P]=A[P].map((function(e){return"<s> "+e.text+" </s>"}));return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{className:"add-form submit-footer",onSubmit:function(e){var n=[];e.preventDefault();for(var i=!1,a=0;a<t.length;a++)1==t[a].sentences.length&&(i=!0,n.push(a));w([].concat(n)),i?(b(!0),g("Why are the following sentences impossible to rewrite?")):(h(A,B,o),c(""),w([]))},children:[Object(m.jsxs)("div",{className:"submit-form-control",children:[Object(m.jsx)("label",{children:"Anything to Share? "}),Object(m.jsx)("input",{type:"text",placeholder:"Add Feedback",value:o,onChange:function(e){return c(e.target.value)}})]}),Object(m.jsx)(U,{msg:x,openDialog:f,handleClose:function(){b(!1)},onAdd:a,data:t,feedback:o,setFeedback:c,promptsIdxRequiringExplanation:T}),Object(m.jsx)(v.a,{disabled:t.filter((function(e){return 0!=e.sentences.length})).length<n,type:"submit",sx:{width:"30%",display:"block",margin:0,border:"none",color:"black",padding:"10px 20px",borderRadius:"5px",cursor:"pointer",textDecoration:"none",fontSize:"15px",fontFamily:"Poppins"},children:" Submit "})]})})},Z=n(210);var $=function(e){var t=e.initData,n=Object(i.useState)(0),a=Object(l.a)(n,2),r=a[0],s=a[1],d=Object(i.useState)(t),u=Object(l.a)(d,2),f=u[0],b=u[1];function p(e){var t=e.text,n=e.textType,i=e.idx,a=Object(c.a)(f),r=Object(o.a)({},a[i]);if("sentences"==n){var s={id:Math.floor(1e4*Math.random())+1,text:t};r[n]=[].concat(Object(c.a)(a[i][n]),[s]),a[i]=r}else r[n]=t,a[i]=r;b(a)}return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(q,{}),Object(m.jsxs)(Z.a,{sx:{display:"flex",justifyContent:"space-evenly",p:1,m:1,bgcolor:"background.paper",borderRadius:1},children:[Object(m.jsx)(v.a,{disabled:0==r,onClick:function(){s(r-1)},sx:{width:"30%",color:"black",fontSize:"15px",fontFamily:"Poppins"},children:" Back "}),Object(m.jsx)(v.a,{disabled:6==r,onClick:function(){s(r+1)},sx:{width:"30%",color:"black",fontSize:"15px",fontFamily:"Poppins"},children:" Next "})]}),Object(m.jsx)(z,{prompt:f[r].prompt}),Object(m.jsx)(K,{allowedWords:f[r].wordForms,sentences:f[r].sentences,onAdd:p,currentScreen:r}),f[r].sentences.length?Object(m.jsx)(Y,{sentences:f[r].sentences,onDelete:function(e,t){var n=Object(c.a)(f),i=Object(o.a)({},n[r]);i[t]=i[t].filter((function(t){return t.id!=e})),n[r]=i,b(n)}}):"",Object(m.jsx)(X,{data:f,numPrompts:7,onAdd:p})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,221)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),r(e),s(e)}))},te=document.getElementById("root").getAttribute("data-prompt1"),ne=document.getElementById("root").getAttribute("data-word-forms1");te=te.replace(/\<doublequotes>/g,'"'),ne=(ne=ne.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var ie=document.getElementById("root").getAttribute("data-prompt2"),ae=document.getElementById("root").getAttribute("data-word-forms2");ie=ie.replace(/\<doublequotes>/g,'"'),ae=(ae=ae.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var re=document.getElementById("root").getAttribute("data-prompt3"),se=document.getElementById("root").getAttribute("data-word-forms3");re=re.replace(/\<doublequotes>/g,'"'),se=(se=se.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var oe=document.getElementById("root").getAttribute("data-prompt4"),ce=document.getElementById("root").getAttribute("data-word-forms4");oe=oe.replace(/\<doublequotes>/g,'"'),ce=(ce=ce.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var le=document.getElementById("root").getAttribute("data-prompt5"),de=document.getElementById("root").getAttribute("data-word-forms5");le=le.replace(/\<doublequotes>/g,'"'),de=(de=de.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var ue=document.getElementById("root").getAttribute("data-prompt6"),fe=document.getElementById("root").getAttribute("data-word-forms6");ue=ue.replace(/\<doublequotes>/g,'"'),fe=(fe=fe.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')}));var be=document.getElementById("root").getAttribute("data-prompt7"),pe=document.getElementById("root").getAttribute("data-word-forms7"),me=[{prompt:te,wordForms:ne,explanation:"",sentences:[]},{prompt:ie,wordForms:ae,explanation:"",sentences:[]},{prompt:re,wordForms:se,explanation:"",sentences:[]},{prompt:oe,wordForms:ce,explanation:"",sentences:[]},{prompt:le,wordForms:de,explanation:"",sentences:[]},{prompt:ue,wordForms:fe,explanation:"",sentences:[]},{prompt:be=be.replace(/\<doublequotes>/g,'"'),wordForms:pe=(pe=pe.split(" ").map((function(e){return e.replace("_"," ")}))).map((function(e){return e.replace(/\<doublequotes>/g,'"')})),explanation:"",sentences:[]}];s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)($,{initData:me})}),document.getElementById("root")),ee()}},[[145,1,2]]]);
//# sourceMappingURL=main.d83506f7.chunk.js.map