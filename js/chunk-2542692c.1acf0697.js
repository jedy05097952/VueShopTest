(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2542692c"],{"7f7f":function(e,a,t){var r=t("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in s||t("9e1e")&&r(s,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},9921:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"my-5 row justify-content-center form",on:{click:function(e){e.stopPropagation()}}},[t("form",{staticClass:"col-md-11"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"useremail"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email","data-vv-as":"Email"},domProps:{value:e.form.user.email},on:{input:function(a){a.target.composing||e.$set(e.form.user,"email",a.target.value)}}}),t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"username"}},[e._v("收件人姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名","data-vv-as":"姓名"},domProps:{value:e.form.user.name},on:{input:function(a){a.target.composing||e.$set(e.form.user,"name",a.target.value)}}}),t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("name")))])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"usertel"}},[e._v("收件人電話")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.phone,expression:"form.user.phone"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",name:"phone",placeholder:"請輸入電話","data-vv-as":"電話"},domProps:{value:e.form.user.phone},on:{input:function(a){a.target.composing||e.$set(e.form.user,"phone",a.target.value)}}}),t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("phone")))])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"useraddress"}},[e._v("收件人地址")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址","data-vv-as":"地址"},domProps:{value:e.form.user.address},on:{input:function(a){a.target.composing||e.$set(e.form.user,"address",a.target.value)}}}),t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("address")))])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"comment"}},[e._v("留言")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"comment",cols:"30",rows:"10"},domProps:{value:e.form.message},on:{input:function(a){a.target.composing||e.$set(e.form,"message",a.target.value)}}})]),t("div",{staticClass:"text-right"},[t("button",{staticClass:"btn btn-teal",on:{click:function(a){return a.preventDefault(),e.$router.go(-1)}}},[e._v("上一步")]),t("button",{staticClass:"btn btn-danger ml-4",on:{click:function(a){return a.preventDefault(),e.formCommit(a)}}},[e._v("送出訂單")])])])])},s=[],o=(t("7f7f"),{name:"formData",data:function(){return{form:{message:"",user:{}}}},methods:{formCommit:function(){var e=this,a=this;this.$validator.validateAll().then((function(t){if(t){e.$store.commit("LOADINGCHANGE",!0);var r="".concat("http://localhost:3000","/api/order"),s={name:a.form.user.name,email:a.form.user.email,tel:a.form.user.phone,address:a.form.user.address,payment_method:"credit_card",message:a.form.message};e.axios.post(r,s).then((function(e){a.$store.commit("LOADINGCHANGE",!1),e.data.success?a.$router.push("/checkout/checkorder/".concat(e.data.orderID)):a.$store.dispatch("updateMessage",{message:e.data.message,status:"danger"})}))}}))}}}),n=o,i=t("2877"),m=Object(i["a"])(n,r,s,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2542692c.1acf0697.js.map