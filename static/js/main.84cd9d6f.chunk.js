(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{76:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);var a,c,i,o,r,s,p,l,d=t(0),u=t.n(d),b=t(22),x=t.n(b),f=t(13),g=t(6),h=t.n(g),j=t(10),m=t(7),O=t(26),v=t(23),w=t.n(v),k=function(){var n=Object(j.a)(h.a.mark((function n(e,t){var a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"18194330-67860245f678ffa703ae3a938&",n.next=3,w.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("18194330-67860245f678ffa703ae3a938&","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return a=n.sent,n.abrupt("return",a.data.hits);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),y=t(2),S=t(3),z=S.a.div(a||(a=Object(y.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr;\ngrid-gap: 16px;\npadding-bottom: 24px;\n"]))),E=S.a.header(c||(c=Object(y.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),C=S.a.form(i||(i=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),I=S.a.button(o||(o=Object(y.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n']))),L=S.a.span(r||(r=Object(y.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),N=S.a.input(s||(s=Object(y.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),M=t(1);function R(n){var e=n.onSearch;return Object(M.jsx)(E,{children:Object(M.jsxs)(C,{onSubmit:function(n){n.preventDefault(),e(n.target.elements.imageName.value),n.target.elements.imageName.value=""},children:[Object(M.jsx)(I,{children:Object(M.jsx)(L,{children:"Search"})}),Object(M.jsx)(N,{type:"text",name:"imageName",autocomplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var D,U,J,T,_=S.a.li(p||(p=Object(y.a)(["\n  border-radius: 2px;\n"]))),q=S.a.img(l||(l=Object(y.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),A=function(n){var e=n.src,t=n.alt,a=n.onClick;return Object(M.jsx)(_,{children:Object(M.jsx)(q,{onClick:function(){return a(e,t)},src:e,alt:t})})},B=S.a.ul(D||(D=Object(y.a)(["\ndisplay: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n\n"]))),F=function(n){var e=n.images,t=n.onSelect;return Object(M.jsx)(B,{children:e.map((function(n){var e=n.id,a=n.largeImageURL,c=n.webformatURL,i=n.tags;return Object(M.jsx)(A,{onClick:t,src:c,alt:i,largeImageURL:a},e)}))})},G=S.a.button(U||(U=Object(y.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  margin: 0 auto;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),H=function(n){var e=n.onClick;return Object(M.jsx)(G,{onClick:e,children:"LOAD MORE"})},K=S.a.div(J||(J=Object(y.a)(["\nposition: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),P=S.a.div(T||(T=Object(y.a)(["\nmax-width: calc(100vw - 48px);\nmax-height: calc(100vh - 24px);\n"])));function Q(n){var e=n.selectedImage,t=e.src,a=e.alt,c=n.closeModal,i=Object(d.useCallback)((function(n){"Escape"===n.key&&c()}),[c]);Object(d.useEffect)((function(){return window.addEventListener("keydown",i),document.body.className="noScroll",function(){window.removeEventListener("keydown",i),document.body.className=""}}),[i]);return Object(M.jsx)(K,{onClick:function(n){"IMG"!==n.target.nodeName&&c()},children:Object(M.jsx)(P,{children:Object(M.jsx)("img",{src:t,alt:a})})})}var V,W=t(25),X=t.n(W),Y=S.a.div(V||(V=Object(y.a)(["\n  text-align: center;\n"]))),Z=function(){return Object(M.jsx)(Y,{children:Object(M.jsx)(X.a,{type:"ThreeDots",color:"Orange",height:100,width:100,timeout:7e3})})};function $(){var n=Object(d.useState)(null),e=Object(m.a)(n,2),t=e[0],a=e[1],c=Object(d.useState)([]),i=Object(m.a)(c,2),o=i[0],r=i[1],s=Object(d.useState)(1),p=Object(m.a)(s,2),l=p[0],u=p[1],b=Object(d.useState)(null),x=Object(m.a)(b,2),g=x[0],v=x[1],w=Object(d.useState)(!1),y=Object(m.a)(w,2),S=y[0],E=y[1],C=function(){E((function(n){return!n}))};return Object(d.useEffect)(Object(j.a)(h.a.mark((function n(){var e;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,k(t);case 4:e=n.sent,C(),r(e);case 7:case"end":return n.stop()}}),n)}))),[t]),Object(d.useEffect)((function(){if(window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t)try{k(t,l).then((function(n){r((function(e){return[].concat(Object(f.a)(e),Object(f.a)(n))})),C()}))}catch(n){}}),[l]),Object(M.jsxs)(z,{children:[Object(M.jsx)(R,{onSearch:function(n){C(),a(n)}}),o.length>0&&Object(M.jsx)(F,{images:o,onSelect:function(n,e){v({src:n,alt:e})}}),S&&Object(M.jsx)(Z,{}),o.length>0&&Object(M.jsx)(H,{onClick:function(){C(),u(l+1)}}),g&&Object(M.jsx)(Q,{closeModal:function(){v(null)},selectedImage:g}),Object(M.jsx)(O.a,{position:"top-right"})]})}t(76);x.a.render(Object(M.jsx)(u.a.StrictMode,{children:Object(M.jsx)($,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.84cd9d6f.chunk.js.map