(function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/generateLoveImg/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0c85":function(e,t,a){e.exports=a.p+"img/boy.d87af974.png"},"1a86":function(e,t,a){"use strict";a("364e")},"364e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("home")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"wrapper"},[a("section",{ref:"form",staticClass:"form"},[a("div",[a("span",[e._v("性别")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"radio",name:"sex",value:"boy"},domProps:{checked:e._q(e.sex,"boy")},on:{change:function(t){e.sex="boy"}}}),e._v("男 "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],attrs:{type:"radio",name:"sex",value:"girl"},domProps:{checked:e._q(e.sex,"girl")},on:{change:function(t){e.sex="girl"}}}),e._v("女 ")]),e._l(e.formInfo,(function(t,n,r){return a("div",{key:r},[a("span",[e._v(e._s(t.label)+"：")]),"text"===t.type?a("input",{attrs:{type:"text",name:n}}):e._e(),"textarea"===t.type?a("textarea",{attrs:{name:n},on:{change:e.textareaChange}}):e._e()])})),a("button",{staticClass:"formSubmit",on:{click:e.submit}},[e._v("提交")])],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.markVisible,expression:"markVisible"}],staticClass:"mark",on:{click:e.markClick}},[a("canvas",{ref:"love",staticClass:"love"}),a("img",{staticClass:"love-img",attrs:{src:e.loveImgData,alt:""}}),a("br"),a("button",{staticClass:"downImgBtn",on:{click:function(t){return t.stopPropagation(),e.downImg.apply(null,arguments)}}},[e._v("下载图片")])])])},l=[],s=(a("159b"),a("b64b"),a("99af"),a("ac1f"),a("5319"),{boy:{label:"男生",src:a("0c85")},girl:{label:"女生",src:a("7b3a")}}),c={birthday:{type:"text",label:"出生年月",value:"2021-01-01"},address:{type:"text",label:"户籍地",value:"湖北省武汉市"},home:{type:"text",label:"所在地",value:"阳逻经济开发区"},school:{type:"text",label:"学历",value:"本科"},height:{type:"text",label:"身高(cm)",value:"179"},weight:{type:"text",label:"体重(Kg)",value:"77.5"},marriage:{type:"text",label:"婚姻状态",value:"未婚"},house:{type:"text",label:"住房情况",value:"有房有贷"},car:{type:"text",label:"是否有车",value:"有车"},work:{type:"text",label:"工作",value:"电力生产"},income:{type:"text",label:"年收入",value:"15W"},evaluation:{type:"textarea",label:"自我评价",value:"射手座男生，典型的乐观主义者，说话做事比较直接，喜欢美食，旅游，游泳和篮球"},requirements:{type:"textarea",label:"择偶要求",value:"有稳定工作，性格好三观正，热爱祖国 热爱生活，长相甜美可爱，好了，合适就是最重要的"}},u=function(){var e=(new Date).getFullYear(),t=(new Date).getMonth()+1,a=(new Date).getDate();return"".concat(e,".").concat(t,".").concat(a)};function f(e,t,a,n){var r=n,o=[],i=0;a&&(r.font=a);while(-1!==(i=p(e,t,r)))o.push(e.substr(0,i)),e=e.substr(i);return e&&o.push(e),o}function p(e,t,a){var n=0,r=e.length-1;while(n<=r){var o=Math.floor((n+r)/2),i=a.measureText(e.substr(0,o)).width,l=a.measureText(e.substr(0,o+1)).width;if(i<=t&&l>t)return o;i<t?n=o+1:r=o-1}return-1}function m(e,t){var a=document.createElement("a");a.download=t,a.href=e,document.body.appendChild(a),a.click(),a.remove()}var h={name:"home",data:function(){return{formInfo:c,gender:s,formValue:{},ctx:null,img:new Image,sex:"boy",markVisible:!1,loveImgData:""}},mounted:function(){this.ctx=this.$refs.love.getContext("2d")},methods:{submit:function(){var e=this;Object.keys(c).forEach((function(t){var a=e.$refs.form.querySelector("[name=".concat(t,"]")).value;e.formValue[t]={label:c[t].label,value:a}})),this.markVisible=!0,this.generateImg(this.sex,this.formValue,this.formInfo),console.log(this.formValue)},generateImg:function(e,t,a){var n=this;this.img.src=s[e].src,this.img.onload=function(){n.setCanvasDrawImg(n.img,n.img.width,n.img.height),n.appendDateText(),n.appendContentText(t,a),n.loveImgData=n.$refs.love.toDataURL("image/png")}},setCanvasDrawImg:function(e,t,a){this.$refs.love.width=t,this.$refs.love.height=a,this.ctx.width=t,this.ctx.height=a,this.ctx.drawImage(e,0,0,t,a)},appendDateText:function(){this.ctx.font="30px MicrosoftYaHei";var e=u(),t=this.ctx.width-58-this.ctx.measureText(e).width;this.ctx.fillStyle="#666",this.ctx.fillText(e,t,58)},appendContentText:function(e,t){var a=this,n={x:116,y:328};Object.keys(t).forEach((function(r,o){a.ctx.font="40px MicrosoftYaHei";var i=t[r].label,l=e[r].value,s="".concat(i,"：").concat(l);a.ctx.fillStyle="#666";var c=f(s,853,"40px MicrosoftYaHei",a.ctx);c.forEach((function(e,t){a.ctx.fillText(e,n.x,n.y+60*o),c.length>1&&t!==c.length-1&&(console.log(n.y),n.y=n.y+60)}))}))},downImg:function(){var e=this.$refs.love.toDataURL("image/png"),t="".concat(u(),"-").concat(s[this.sex].label,"-").concat(this.formValue["birthday"].value,".png");m(e,t)},markClick:function(){this.markVisible=!1},textareaChange:function(e){e.target.value=e.target.value.replace(/\s+/g,"")}}},v=h,d=(a("1a86"),a("2877")),g=Object(d["a"])(v,i,l,!1,null,"d758b53c",null),b=g.exports,x={name:"App",components:{home:b}},y=x,w=(a("034f"),Object(d["a"])(y,r,o,!1,null,null,null)),k=w.exports,_=a("3a34"),C=a.n(_);new C.a,n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(k)}}).$mount("#app")},"7b3a":function(e,t,a){e.exports=a.p+"img/girl.51bcdb4a.png"},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.f362a3cb.js.map