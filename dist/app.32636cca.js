parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sByI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=document.querySelector("#mobile_menu"),t=document.querySelector(".main_menu"),c=t.querySelectorAll("a");function i(){n(),o()}function n(){e.addEventListener("click",function(){e.classList.toggle("is-active"),t.classList.toggle("active")})}function o(){c.forEach(function(c){c.addEventListener("click",function(){t.classList.toggle("active"),e.classList.toggle("is-active")})})}
},{}],"GWHm":[function(require,module,exports) {
module.exports="/bread.b6d0a9c2.png";
},{}],"EjaA":[function(require,module,exports) {
module.exports="/cookie.4bbe139c.png";
},{}],"f2Le":[function(require,module,exports) {
module.exports="/pastry.d42cdcc3.png";
},{}],"qQhC":[function(require,module,exports) {
module.exports="/puff.92aa5144.png";
},{}],"BO1G":[function(require,module,exports) {
module.exports="/biscuits.8bc4f78d.png";
},{}],"UISB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadProducts=void 0;var e=n(require("../images/bread.png")),r=n(require("../images/cookie.png")),a=n(require("../images/pastry.png")),i=n(require("../images/puff.png")),t=n(require("../images/biscuits.png"));function n(e){return e&&e.__esModule?e:{default:e}}var d=document.querySelector(".products"),s=[{id:1,name:"Loaf of Bread",price:"Rs.100",imgUrl:e.default},{id:2,name:"Cookies",price:"Rs.100",imgUrl:r.default},{id:3,name:"Pastry",price:"Rs.200",imgUrl:a.default},{id:4,name:"Puff Pastry",price:"Rs.200",imgUrl:i.default},{id:5,name:"Bisuits",price:"Rs.50",imgUrl:t.default}],u=function(e,r,a){var i=document.createElement("div");i.className="product";var t=document.createElement("img");t.className="product_img";var n=document.createElement("p");n.className="product_name";var d=document.createElement("p");return d.className="price",n.innerHTML=e,d.innerHTML=r,t.src=a,i.appendChild(t),i.appendChild(n),i.appendChild(d),i},c=function(){s.map(function(e){d.appendChild(u(e.name,e.price,e.imgUrl))})};exports.loadProducts=c;
},{"../images/bread.png":"GWHm","../images/cookie.png":"EjaA","../images/pastry.png":"f2Le","../images/puff.png":"qQhC","../images/biscuits.png":"BO1G"}],"QdeU":[function(require,module,exports) {
"use strict";var e=r(require("./mobile-menu")),u=require("./products");function r(e){return e&&e.__esModule?e:{default:e}}(0,u.loadProducts)(),(0,e.default)();
},{"./mobile-menu":"sByI","./products":"UISB"}]},{},["QdeU"], null)
//# sourceMappingURL=/app.32636cca.js.map