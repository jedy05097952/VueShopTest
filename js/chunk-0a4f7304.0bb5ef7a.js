(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a4f7304"],{"0fc9":function(t,e,r){var n=r("3a38"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=n(t),t<0?i(t+e,0):o(t,e)}},1654:function(t,e,r){"use strict";var n=r("71c1")(!0);r("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"20fd":function(t,e,r){"use strict";var n=r("d9f6"),i=r("aebd");t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}},"241e":function(t,e,r){var n=r("25eb");t.exports=function(t){return Object(n(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"30f1":function(t,e,r){"use strict";var n=r("b8e3"),i=r("63b6"),o=r("9138"),c=r("35e8"),s=r("481b"),a=r("8f60"),u=r("45f2"),f=r("53e2"),l=r("5168")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",h="keys",v="values",g=function(){return this};t.exports=function(t,e,r,y,x,m,b){a(r,e,y);var O,_,A,L=function(t){if(!d&&t in C)return C[t];switch(t){case h:return function(){return new r(this,t)};case v:return function(){return new r(this,t)}}return function(){return new r(this,t)}},k=e+" Iterator",S=x==v,w=!1,C=t.prototype,N=C[l]||C[p]||x&&C[x],$=N||L(x),P=x?S?L("entries"):$:void 0,T="Array"==e&&C.entries||N;if(T&&(A=f(T.call(new t)),A!==Object.prototype&&A.next&&(u(A,k,!0),n||"function"==typeof A[l]||c(A,l,g))),S&&N&&N.name!==v&&(w=!0,$=function(){return N.call(this)}),n&&!b||!d&&!w&&C[l]||c(C,l,$),s[e]=$,s[k]=g,x)if(O={values:S?$:L(v),keys:m?$:L(h),entries:P},b)for(_ in O)_ in C||o(C,_,O[_]);else i(i.P+i.F*(d||w),e,O);return O}},"32fc":function(t,e,r){var n=r("e53d").document;t.exports=n&&n.documentElement},"335c":function(t,e,r){var n=r("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},"36c3":function(t,e,r){var n=r("335c"),i=r("25eb");t.exports=function(t){return n(i(t))}},3702:function(t,e,r){var n=r("481b"),i=r("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[i]===t)}},"3a38":function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},"40c3":function(t,e,r){var n=r("6b4c"),i=r("5168")("toStringTag"),o="Arguments"==n(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(r){}};t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=c(e=Object(t),i))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},4132:function(t,e,r){"use strict";var n=r("8481"),i=r.n(n);i.a},"45f2":function(t,e,r){var n=r("d9f6").f,i=r("07e3"),o=r("5168")("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},"481b":function(t,e){t.exports={}},"4ee1":function(t,e,r){var n=r("5168")("iterator"),i=!1;try{var o=[7][n]();o["return"]=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:r=!0}},o[n]=function(){return s},t(o)}catch(c){}return r}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,r){var n=r("dbdb")("wks"),i=r("62a0"),o=r("e53d").Symbol,c="function"==typeof o,s=t.exports=function(t){return n[t]||(n[t]=c&&o[t]||(c?o:i)("Symbol."+t))};s.store=n},"53e2":function(t,e,r){var n=r("07e3"),i=r("241e"),o=r("5559")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},"549b":function(t,e,r){"use strict";var n=r("d864"),i=r("63b6"),o=r("241e"),c=r("b0dc"),s=r("3702"),a=r("b447"),u=r("20fd"),f=r("7cd6");i(i.S+i.F*!r("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var e,r,i,l,d=o(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=0,x=f(d);if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==x||p==Array&&s(x))for(e=a(d.length),r=new p(e);e>y;y++)u(r,y,g?v(d[y],y):d[y]);else for(l=x.call(d),r=new p;!(i=l.next()).done;y++)u(r,y,g?c(l,v,[i.value,y],!0):i.value);return r.length=y,r}})},"54a1":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("95d5")},5559:function(t,e,r){var n=r("dbdb")("keys"),i=r("62a0");t.exports=function(t){return n[t]||(n[t]=i(t))}},"5b4e":function(t,e,r){var n=r("36c3"),i=r("b447"),o=r("0fc9");t.exports=function(t){return function(e,r,c){var s,a=n(e),u=i(a.length),f=o(c,u);if(t&&r!=r){while(u>f)if(s=a[f++],s!=s)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===r)return t||f||0;return!t&&-1}}},"62a0":function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},"6b4c":function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},"6c1c":function(t,e,r){r("c367");for(var n=r("e53d"),i=r("35e8"),o=r("481b"),c=r("5168")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<s.length;a++){var u=s[a],f=n[u],l=f&&f.prototype;l&&!l[c]&&i(l,c,u),o[u]=o.Array}},"71c1":function(t,e,r){var n=r("3a38"),i=r("25eb");t.exports=function(t){return function(e,r){var o,c,s=String(i(e)),a=n(r),u=s.length;return a<0||a>=u?t?"":void 0:(o=s.charCodeAt(a),o<55296||o>56319||a+1===u||(c=s.charCodeAt(a+1))<56320||c>57343?t?s.charAt(a):o:t?s.slice(a,a+2):c-56320+(o-55296<<10)+65536)}}},"774e":function(t,e,r){t.exports=r("d2d5")},"7cd6":function(t,e,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");t.exports=r("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},"7e90":function(t,e,r){var n=r("d9f6"),i=r("e4ae"),o=r("c3a1");t.exports=r("8e60")?Object.defineProperties:function(t,e){i(t);var r,c=o(e),s=c.length,a=0;while(s>a)n.f(t,r=c[a++],e[r]);return t}},8436:function(t,e){t.exports=function(){}},8481:function(t,e,r){},"8f60":function(t,e,r){"use strict";var n=r("a159"),i=r("aebd"),o=r("45f2"),c={};r("35e8")(c,r("5168")("iterator"),(function(){return this})),t.exports=function(t,e,r){t.prototype=n(c,{next:i(1,r)}),o(t,e+" Iterator")}},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},9138:function(t,e,r){t.exports=r("35e8")},"95d5":function(t,e,r){var n=r("40c3"),i=r("5168")("iterator"),o=r("481b");t.exports=r("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(n(e))}},a159:function(t,e,r){var n=r("e4ae"),i=r("7e90"),o=r("1691"),c=r("5559")("IE_PROTO"),s=function(){},a="prototype",u=function(){var t,e=r("1ec9")("iframe"),n=o.length,i="<",c=">";e.style.display="none",r("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+c+"document.F=Object"+i+"/script"+c),t.close(),u=t.F;while(n--)delete u[a][o[n]];return u()};t.exports=Object.create||function(t,e){var r;return null!==t?(s[a]=n(t),r=new s,s[a]=null,r[c]=t):r=u(),void 0===e?r:i(r,e)}},a745:function(t,e,r){t.exports=r("f410")},b0dc:function(t,e,r){var n=r("e4ae");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(c){var o=t["return"];throw void 0!==o&&n(o.call(t)),c}}},b447:function(t,e,r){var n=r("3a38"),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c367:function(t,e,r){"use strict";var n=r("8436"),i=r("50ed"),o=r("481b"),c=r("36c3");t.exports=r("30f1")(Array,"Array",(function(t,e){this._t=c(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])}),"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},c3a1:function(t,e,r){var n=r("e6f3"),i=r("1691");t.exports=Object.keys||function(t){return n(t,i)}},c8bb:function(t,e,r){t.exports=r("54a1")},d2d5:function(t,e,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},d56d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h2",{staticClass:"path"},[t._v("/\n    "),r("router-link",{attrs:{to:"/shop/all"}},[t._v(" Product")]),r("span",[t._v(" / "+t._s(t.$route.params.shop_id))])],1),r("ul",{staticClass:"product"},t._l(t.products,(function(e,n){return r("li",{key:n,on:{click:function(r){return t.$router.push("/shop/iteminfo/"+e.id)}}},[r("div",[r("img",{attrs:{src:e.imageUrl}}),e.description?r("img",{staticClass:"hoverImg",attrs:{src:e.description}}):t._e(),r("div",{staticClass:"mask"},[r("i",{staticClass:"fas fa-plus",on:{click:function(r){return r.stopPropagation(),t.addtoCart(e.id)}}}),t.likes.includes(e.id)?r("i",{staticClass:"fas fa-heart",on:{click:function(r){return r.stopPropagation(),t.removeFav(e.id)}}}):r("i",{staticClass:"far fa-heart",on:{click:function(r){return r.stopPropagation(),t.addtoFav(e.id)}}})])]),r("h3",[t._v(t._s(e.title))]),r("p",[t._v("NT$ "+t._s(e.price||0))])])})),0),0===t.products.length?r("h3",{staticClass:"noProducts"},[t._v("\n    抱歉，這個商品類別沒有相關商品\n  ")]):t._e()])},i=[],o=(r("ac6a"),r("a745")),c=r.n(o);function s(t){if(c()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var a=r("774e"),u=r.n(a),f=r("c8bb"),l=r.n(f);function d(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return u()(t)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){return s(t)||d(t)||p()}var v={name:"item",data:function(){return{}},created:function(){this.$store.dispatch("getProducts",{pageNum:1,isAdmin:!1,item:"product"}),void 0!==this.user.emailVerified&&this.$store.dispatch("getLikes")},methods:{addtoCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(void 0===this.user.emailVerified&&this.$store.commit("OPENLOGINBOX",!0),this.user.emailVerified){var n="".concat("http://localhost:3000","/api/cart"),i={product_id:t,qty:r};this.$store.commit("LOADINGCHANGE",!0),this.axios.post(n,i).then((function(){e.$store.commit("LOADINGCHANGE",!1),e.$store.dispatch("getCart")}))}else this.$store.dispatch("updateMessage",{message:"請先驗證信箱",status:"danger"})},addtoFav:function(t){var e=this;this.$store.commit("LOADINGCHANGE",!0);var r="".concat("http://localhost:3000","/api/like");this.axios.post(r,{product_id:t}).then((function(t){console.log(t.data),t.data.success&&(e.$store.dispatch("updateMessage",{message:t.data.message,status:"success"}),e.$store.dispatch("getLikes")),e.$store.commit("LOADINGCHANGE",!1)}))},removeFav:function(t){var e=this;this.$store.commit("LOADINGCHANGE",!0);var r="".concat("http://localhost:3000","/api/like/").concat(t);this.axios.delete(r).then((function(t){t.data.success&&(e.$store.dispatch("updateMessage",{message:t.data.message,status:"success"}),e.$store.dispatch("getLikes")),e.$store.commit("LOADINGCHANGE",!1)}))}},computed:{products:function(){var t=this.$route.params.shop_id,e=h(this.$store.state.products);return-1!==t.indexOf("vintage")?(e=e.filter((function(t){return-1!==t.category.indexOf("vintage")})),"vintage_all"===t?e:"vintage_top"===t?e.filter((function(t){return-1!==t.category.indexOf("top")})):"vintage_pants"===t?e.filter((function(t){return-1!==t.category.indexOf("pants")})):"vintage_dress"===t?e.filter((function(t){return-1!==t.category.indexOf("dress")})):"vintage_coat"===t?e.filter((function(t){return-1!==t.category.indexOf("coat")})):"vintage_shoes"===t&&e.filter((function(t){return-1!==t.category.indexOf("shoes")}))):-1!==t.indexOf("select")?(e=e.filter((function(t){return-1!==t.category.indexOf("brand")})),"select_all"===t?e:"select_converse"===t?e.filter((function(t){return-1!==t.category.indexOf("converse")})):"select_martens"===t?e.filter((function(t){return-1!==t.category.toLowerCase().indexOf("martens")})):"select_keen"===t?e.filter((function(t){return-1!==t.category.indexOf("keen")})):"select_carhartt"===t?e.filter((function(t){return-1!==t.category.indexOf("carhartt")})):"select_thenorthface"===t?e.filter((function(t){return-1!==t.category.toLowerCase().indexOf("north")})):"select_vans"===t&&e.filter((function(t){return-1!==t.category.indexOf("vans")}))):-1!==t.indexOf("accessories")?(e=e.filter((function(t){return-1!==t.category.indexOf("accessories")})),"accessories_all"===t?e:"accessories_bag"===t?e.filter((function(t){return-1!==t.category.indexOf("bag")})):"accessories_hairpin"===t?e.filter((function(t){return-1!==t.category.indexOf("hairpin")})):"accessories_earpin"===t?e.filter((function(t){return-1!==t.category.indexOf("earpin")})):"accessories_socks"===t&&e.filter((function(t){return-1!==t.category.indexOf("socks")}))):-1!==t.indexOf("sale")?e.filter((function(t){return 0===t.category.indexOf("sale")})):e},user:function(){return this.$store.state.user},likes:function(){var t=[];return this.$store.state.likes.forEach((function(e){t.push(e.id)})),t}}},g=v,y=(r("4132"),r("2877")),x=Object(y["a"])(g,n,i,!1,null,null,null);e["default"]=x.exports},dbdb:function(t,e,r){var n=r("584a"),i=r("e53d"),o="__core-js_shared__",c=i[o]||(i[o]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e6f3:function(t,e,r){var n=r("07e3"),i=r("36c3"),o=r("5b4e")(!1),c=r("5559")("IE_PROTO");t.exports=function(t,e){var r,s=i(t),a=0,u=[];for(r in s)r!=c&&n(s,r)&&u.push(r);while(e.length>a)n(s,r=e[a++])&&(~o(u,r)||u.push(r));return u}},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-0a4f7304.0bb5ef7a.js.map