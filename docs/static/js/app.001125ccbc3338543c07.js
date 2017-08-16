webpackJsonp([0,2],[,function(t,i,s){s(5);var e=s(0)(s(3),s(8),null,null);t.exports=e.exports},,function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(7),n=s.n(e);i.default={name:"app",data:function(){return{imgsArr:[],fetchImgsArr:[]}},components:{vueWaterfallEasy:n.a},methods:{initImgsArr:function(t,i){for(var s=[],e=t;e<i;e++)s.push({src:"static/img/"+(e+1)+".jpg",link:"https://www.baidu.com",info:"一些图片描述文字"});return s},fetchImgsData:function(){this.imgsArr=this.imgsArr.concat(this.fetchImgsArr)}},created:function(){this.imgsArr=this.initImgsArr(0,10),this.fetchImgsArr=this.initImgsArr(10,20)}}},function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"vue-waterfall-easy",props:{gap:{type:Number,default:20},maxCols:{type:Number,default:5},imgsArr:{type:Array,required:!0},imgWidth:{type:Number,default:240},timeOut:{type:Number,default:500}},data:function(){return{msg:"this is from vue-waterfall-easy.vue",columnCount:NaN,isMobile:navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i),beginIndex:NaN,colsHeightArr:[],imgBoxEls:null,isPreloading:!0,isPreloadingC:!0,imgsArrC:[],loadedCount:0,isFirstTIme:!0}},computed:{colWidth:function(){return this.imgWidth+this.gap},imgWidthC:function(){return this.isMobile?window.innerWidth/2-this.gap:this.imgWidth}},methods:{waterfall:function(){for(var t=this.beginIndex;t<this.imgsArr.length;t++){var i=Math.min.apply(null,this.colsHeightArr),s=this.colsHeightArr.indexOf(i),e=this.imgBoxEls[0].offsetWidth;this.imgBoxEls[t].style.position="absolute",this.imgBoxEls[t].style.left=s*e+"px",this.imgBoxEls[t].style.top=i+"px",this.$set(this.colsHeightArr,s,i+this.imgBoxEls[t].offsetHeight)}this.beginIndex=this.imgsArr.length},loadFn:function(t,i,s){var e=this;this.loadedCount++,"load"===t.type&&this.$set(this.imgsArr[s],"height",Math.round(this.imgWidthC/(i.width/i.height))),this.loadedCount===this.imgsArr.length&&(this.imgsArrC=this.imgsArr.concat([]),this.isPreloading=!1,this.isFirstTIme=!1,this.$nextTick(function(){e.initImgBoxEls(),e.$emit("preloaded")}))},preload:function(){var t=this;this.imgsArr.forEach(function(i,s){if(!(s<t.loadedCount)){var e=new Image;e.addEventListener("load",function(i){t.loadFn(i,e,s)}),e.src=i.src}})},initColsHeightArr:function(){this.colsHeightArr=[];for(var t=0;t<this.columnCount;t++){this.imgBoxEls[t].style.position="static";var i=this.imgBoxEls[t].offsetHeight;this.colsHeightArr.push(i)}},initImgBoxEls:function(){this.imgBoxEls=document.getElementsByClassName("img-box")},initColumnCount:function(){var t=window.innerWidth,i=parseInt(t/this.colWidth);i=0===i?1:i,this.columnCount=this.isMobile?2:i>this.maxCols?this.maxCols:i,this.beginIndex=this.columnCount}},mounted:function(){var t=this;this.initColumnCount(),this.preload(),this.$on("preloaded",function(){0===t.colsHeightArr.length&&t.initColsHeightArr(),t.waterfall()}),window.addEventListener("resize",function(){var i=t.columnCount;t.initColumnCount(),i!==t.columnCount&&(t.initColsHeightArr(),t.waterfall())}),window.addEventListener("scroll",function(){t.isPreloading||document.body.scrollTop+window.innerHeight>document.body.scrollHeight-30&&t.$emit("scrollLoadImg")})},watch:{imgsArr:function(t,i){t.length!==i.length&&(this.isPreloading=!0,this.preload())},isPreloading:function(t){var i=this;t?setTimeout(function(){i.isPreloading&&(i.isPreloadingC=!0)},this.timeOut):this.isPreloadingC=!1}}}},function(t,i){},function(t,i){},function(t,i,s){s(6);var e=s(0)(s(4),s(9),null,null);t.exports=e.exports},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("h1",{staticClass:"title"},[t._v("vue-waterfall-easy demo")]),s("vue-waterfall-easy",{attrs:{imgsArr:t.imgsArr},on:{scrollLoadImg:t.fetchImgsData},scopedSlots:t._u([{key:"default",fn:function(i){return[s("p",{staticClass:"some-info"},[t._v("第"+t._s(i.index+1)+"张图片")]),s("p",{staticClass:"some-info"},[t._v(t._s(i.value.info))])]}}])})],1)},staticRenderFns:[]}},function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"vue-waterfall-easy",style:t.isMobile?"":{width:t.colWidth*t.columnCount+"px",left:"50%",marginLeft:-1*t.colWidth*t.columnCount/2+"px"}},[t._l(t.imgsArrC,function(i,e){return s("a",{staticClass:"img-box",style:{padding:t.gap/2+"px",width:t.isMobile?"":t.colWidth+"px"},attrs:{href:i.link}},[s("div",{staticClass:"img-inner-box"},[s("div",{staticClass:"img-wraper",style:{width:t.imgWidthC+"px",height:i.height?i.height+"px":""}},[s("img",{attrs:{src:i.src}})]),s("div",{staticClass:"img-info"},[t._t("default",null,{index:e,value:i})],2)])])}),t.isPreloadingC?s("div",{staticClass:"loading",class:{"first-loading":t.isFirstTIme}},[s("div",{staticClass:"double-bounce1"}),s("div",{staticClass:"double-bounce2"})]):t._e()],2)},staticRenderFns:[]}},,,function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(2),n=s.n(e),o=s(1),r=s.n(o);new n.a({el:"#app",template:"<App/>",components:{App:r.a}})}],[12]);
//# sourceMappingURL=app.001125ccbc3338543c07.js.map