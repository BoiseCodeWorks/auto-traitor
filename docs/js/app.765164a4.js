(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],p=0,m=[];p<i.length;p++)s=i[p],n[s]&&m.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/auto-traitor/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h4",[e._v("NAVBAR HERE")]),r("router-view")],1)},o=[],s=(r("034f"),r("2877")),i={},c=Object(s["a"])(i,n,o,!1,null,null,null),l=c.exports,u=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cars container-fluid"},[e._m(0),r("div",{staticClass:"row"},[r("car-form")],1),r("div",{staticClass:"row"},e._l(e.cars,function(e){return r("car",{key:e._id,attrs:{carData:e}})}),1)])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("h1",[e._v("AUTO TRAITOR")])])])}],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"car col-3"},[r("router-link",{attrs:{to:{name:"CarDetails",params:{id:e.carData._id}}}},[r("img",{attrs:{src:e.carData.imgUrl}})])],1)},f=[],v={name:"Car",props:["carData"],data(){return{}},computed:{},methods:{}},h=v,C=(r("696e"),Object(s["a"])(h,d,f,!1,null,"656e36ca",null)),w=C.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"car-form col"},[r("button",{staticClass:"btn",class:{"btn-danger":e.showform,"btn-primary":!e.showform},on:{click:function(t){e.showform=!e.showform}}},[e._v("\n        "+e._s(e.showform?"Cancel":"Make Car")+"\n    ")]),e.showform?r("form",{on:{submit:function(t){return t.preventDefault(),e.makeCar(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCar.make,expression:"newCar.make"}],attrs:{type:"text",name:"make",placeholder:"Make",required:""},domProps:{value:e.newCar.make},on:{input:function(t){t.target.composing||e.$set(e.newCar,"make",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCar.model,expression:"newCar.model"}],attrs:{type:"text",name:"model",placeholder:"Model",required:""},domProps:{value:e.newCar.model},on:{input:function(t){t.target.composing||e.$set(e.newCar,"model",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCar.year,expression:"newCar.year"}],attrs:{type:"decimal",name:"year",placeholder:"Year",required:""},domProps:{value:e.newCar.year},on:{input:function(t){t.target.composing||e.$set(e.newCar,"year",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCar.description,expression:"newCar.description"}],attrs:{type:"text",name:"description",placeholder:"Description"},domProps:{value:e.newCar.description},on:{input:function(t){t.target.composing||e.$set(e.newCar,"description",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCar.price,expression:"newCar.price"}],attrs:{type:"number",name:"price",placeholder:"Price",required:""},domProps:{value:e.newCar.price},on:{input:function(t){t.target.composing||e.$set(e.newCar,"price",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCar.imgUrl,expression:"newCar.imgUrl"}],attrs:{type:"url",name:"imgUrl",placeholder:"Image",required:""},domProps:{value:e.newCar.imgUrl},on:{input:function(t){t.target.composing||e.$set(e.newCar,"imgUrl",t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Submit")])]):e._e()])},b=[],_={name:"CarForm",data(){return{newCar:{},showform:!1}},methods:{makeCar(){this.$store.dispatch("createCar",this.newCar)}}},y=_,x=Object(s["a"])(y,g,b,!1,null,null,null),$=x.exports,k={name:"Cars",mounted(){this.$store.dispatch("getCars")},data(){return{}},computed:{cars(){return this.$store.state.cars}},methods:{},components:{Car:w,CarForm:$}},O=k,j=Object(s["a"])(O,p,m,!1,null,null,null),P=j.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"car-details"},[e._v("\n    "+e._s(e.car)+"\n")])},E=[],U={name:"CarDetails",props:["id"],mounted(){0==this.$store.state.cars.length&&this.$store.dispatch("getCars")},data(){return{}},computed:{car(){return this.$store.state.cars.find(e=>e._id==this.id)}},methods:{}},M=U,N=Object(s["a"])(M,D,E,!1,null,null,null),S=N.exports;a["a"].use(u["a"]);var A=new u["a"]({routes:[{path:"/",redirect:"Cars"},{path:"/cars",name:"Cars",component:P},{path:"/cars/:id",name:"CarDetails",props:!0,component:S}]}),T=r("2f62"),q=r("bc3a"),R=r.n(q);let F=R.a.create({baseURL:"https://bcw-gregslist.herokuapp.com/api"});a["a"].use(T["a"]);var I=new T["a"].Store({state:{cars:[],activeCar:{}},mutations:{setCars(e,t){e.cars=t},setActiveCar(e,t){e.activeCar=t}},actions:{getCars({commit:e,dispatch:t}){F.get("cars").then(t=>{e("setCars",t.data.data)})},getCar({commit:e,dispatch:t},r){F.get("cars/"+r).then(t=>{e("setActiveCar",t.data.data)})},createCar({commit:e,dispatch:t},r){F.post("cars",r).then(e=>{t("getCars"),A.push({name:"CarDetails",params:{id:e.data.data._id}})})},editCar({commit:e,dispatch:t},r){F.put("cars/"+r._id,r).then(e=>{t("getCars")})},deleteCar({commit:e,dispatch:t},r){F.delete("cars/"+r._id).then(e=>{t("getCars")})}}});r("4989"),r("ab8b");a["a"].config.productionTip=!1,new a["a"]({router:A,store:I,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,r){},"696e":function(e,t,r){"use strict";var a=r("a62c"),n=r.n(a);n.a},a62c:function(e,t,r){}});
//# sourceMappingURL=app.765164a4.js.map