webpackJsonp([0],{410:function(e,t,r){"use strict";function a(e){r(433)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(428),i=r(421),s=r(1),n=a,c=s(o.a,i.a,!1,n,"data-v-63057a10",null);t.default=c.exports},412:function(e,t,r){"use strict";function a(e){r(416)}var o=r(414),i=r(413),s=r(1),n=a,c=s(o.a,i.a,!1,n,"data-v-0a4faac4",null);t.a=c.exports},413:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-item",{staticClass:"cursor-pointer",class:{"q-pl-none q-pr-none":e.isTile},attrs:{highlight:""}},[e.icon&&!e.isTile?r("q-item-side",{attrs:{icon:e.icon}}):e._e(),e._v(" "),r("q-item-main",[r("q-item-tile",{attrs:{label:!e.isTile,sublabel:e.isTile}},[e._v(" "+e._s(e.label)+"\n      "),r("span",{staticClass:"float-right"},[e._v(e._s(e.ratio)+" %")])]),e._v(" "),r("q-item-tile",{attrs:{sublabel:""}},[r("q-progress",{staticClass:"round-borders inset-shadow",staticStyle:{height:"10px"},attrs:{percentage:+e.ratio,color:e.color}})],1)],1),e._v(" "),e._t("default"),e._v(" "),r("q-popover",{ref:"popover",attrs:{anchor:"bottom right",self:"bottom left",fit:""},on:{"~show":function(t){e.resizeChart(t)},show:e.onPopoverShow,hide:e.onPopoverHide}},[r("q-card",{attrs:{color:e.color}},[r("q-card-title",[e._v(" "+e._s(e.label)+"\n        "),r("big",{attrs:{slot:"right"},slot:"right"},[e._v(e._s(e.ratio)+" %")])],1),e._v(" "),r("q-card-main",[r("chart",{ref:"chart",attrs:{option:e.option,theme:"light","auto-resize":""}})],1),e._v(" "),r("q-card-separator"),e._v(" "),e.total?r("q-card-main",{nativeOn:{click:function(t){e.$refs.popover.hide(t)}}},[e._v("\n        最大："+e._s(e._f("formatByte")(e.total))+" "),r("br"),e._v("\n        已用："+e._s(e._f("formatByte")(e.used))+" "),r("br"),e._v("\n        剩余："+e._s(e._f("formatByte")(e.free))+" "),r("br")]):e._e()],1)],1)],2)},o=[],i={render:a,staticRenderFns:o};t.a=i},414:function(e,t,r){"use strict";var a=r(134);t.a={props:{"is-tile":Boolean,label:String,icon:String,encode:Object,ratio:[Number,String],total:[Number,String],used:[Number,String],free:[Number,String],records:Array},data:function(){return{pieces:[{min:-1/0,max:0,color:"blue-3"},{min:0,max:70,color:"green-5"},{min:70,max:90,color:"orange-5"},{min:90,max:100,color:"red-5"}],option:r.i(a.a)({yAxis:{max:100},series:{encode:this.encode}})}},computed:{color:function(){return this.getPieceColor(this.ratio)}},watch:{records:function(){this.$refs.popover.showing?(this.needRenderChart=!1,this.renderChart()):this.needRenderChart=!0}},mounted:function(){this.onPopoverHide()},methods:{getPieceColor:function(e){var t=this.pieces,r=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var n=i.value;if(e===n.value||e>n.min&&e<=n.max)return n.color}}catch(e){a=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}},onPopoverShow:function(){this.$refs.chart.startAnimation(),this.needRenderChart&&(this.resizeChart(),this.renderChart())},onPopoverHide:function(){this.$refs.chart.stopAnimation()},renderChart:function(){this.$refs.chart.setOption({dataset:{source:this.records}})},resizeChart:function(){var e=this.$el.offsetWidth;this.$refs.chart.resize({width:e,slinet:!0})}}}},415:function(e,t,r){t=e.exports=r(407)(),t.push([e.i,".echarts[data-v-0a4faac4]{height:100px}.q-item-side[data-v-0a4faac4]{min-width:0}.q-card-separator+.q-card-main[data-v-0a4faac4]{background-color:hsla(0,0%,100%,.1);color:hsla(0,0%,100%,.7)}.q-popover[data-v-0a4faac4]{background:none;-webkit-animation:none;animation:none}.q-popover .q-card[data-v-0a4faac4]{margin:0}",""])},416:function(e,t,r){var a=r(415);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(406)("10a29d03",a,!0)},418:function(e,t,r){"use strict";var a=r(427),o=r(419),i=r(1),s=i(a.a,o.a,!1,null,null,null);t.a=s.exports},419:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.current?r("q-list",{staticClass:"bg-dark",attrs:{"no-border":"",dark:""}},[r("q-list-header",[e._v(" "+e._s(e.current.sourceName)+"\n    "),r("span",{staticClass:"float-right on-right"},[e._v("\n      "+e._s(e._f("formatDate")(e.current.status.checkTime))+"\n    ")])]),e._v(" "),r("q-item-ratio",{attrs:{label:"CPU",icon:"select_all",encode:{x:"checkTime",y:"cpuRatio"},records:e.current.records,ratio:e.current.status.cpuRatio}}),e._v(" "),r("q-item-ratio",{attrs:{label:"物理内存",icon:"memory",encode:{x:"checkTime",y:"memRatio"},records:e.current.records,ratio:e.current.status.memRatio,total:e.current.status.totalPhysicalMemorySize,used:e.current.status.usedPhysicalMemorySize,free:e.current.status.freePhysicalMemorySize}}),e._v(" "),r("q-item-ratio",{attrs:{label:"物理磁盘",icon:"hd",encode:{x:"checkTime",y:"diskRatio"},records:e.current.records,ratio:e.current.status.diskRatio,total:e.current.status.totalDiskSize,used:e.current.status.usedDiskSize,free:e.current.status.freeDiskSize}}),e._v(" "),r("q-item-ratio",{attrs:{label:"JVM 内存",icon:"developer_board",encode:{x:"checkTime",y:"jvmMemRatio"},records:e.current.records,ratio:e.current.status.jvmMemRatio,total:e.current.status.jvmMaxMemory,used:e.current.status.jvmUsingMemory,free:e.current.status.jvmFreeMemory}}),e._v(" "),r("q-item-separator"),e._v(" "),r("q-item-group",{attrs:{label:"线程数",icon:"subject",status:e.current.status,records:e.current.records,"x-field":{name:"checkTime"},"y-field":[{label:"线程数",name:"totalThread"}]}}),e._v(" "),r("q-item-group",{attrs:{label:"Ping 值",icon:"slow_motion_video",status:e.current.status,records:e.current.records,"x-field":{name:"checkTime"},"y-field":[{label:"内部服务",name:"innerServerPing",unit:"ms"},{label:"远程服务",name:"remoteServerPing",unit:"ms"}]}}),e._v(" "),r("q-item-group",{attrs:{label:"网络连接",icon:"language",status:e.current.status,records:e.current.records,"x-field":{name:"checkTime"},"y-field":[{label:"连接数",name:"netEstablished"},{label:"关闭数",name:"netCloseWait"},{label:"等待数",name:"netTimeWait"}]}})],1):e._e()},o=[],i={render:a,staticRenderFns:o};t.a=i},421:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("q-list",{staticClass:"bg-dark q-mb-md",attrs:{"no-border":"",dark:"",link:""}},[r("q-list-header",[e._v(" 服务器 ")]),e._v(" "),e._l(e.servers,function(t){return r("q-item",{key:t.sourceName,nativeOn:{click:function(r){e.switchDatabase(r,t)}}},[r("q-tooltip",[e._v(e._s(t.sourceIP))]),e._v(" "),r("q-item-side",{attrs:{icon:"lens",color:t.color}}),e._v(" "),r("q-item-main",[r("q-item-tile",{attrs:{label:""}},[e._v(" "+e._s(t.sourceName)+" ")])],1)],1)})],2),e._v(" "),r("q-popover",{ref:"popover",attrs:{"anchor-click":!1,anchor:"bottom right",self:"bottom left","max-height":"90vh",fit:""}},[r("com-server-detail",{attrs:{current:e.current}})],1)],1)},o=[],i={render:a,staticRenderFns:o};t.a=i},427:function(e,t,r){"use strict";var a=r(412),o=r(133);t.a={components:{QItemRatio:a.a,QItemGroup:o.a},props:{current:Object}}},428:function(e,t,r){"use strict";function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:60,a=e.length;e[a]=t,a>r?e.shift():e.__ob__.dep.notify()}var o=r(132),i=r(418);t.a={components:{comServerDetail:i.a},data:function(){return{current:null,servers:{},pieces:[{min:-1/0,max:0,color:"blue-3"},{min:0,max:70,color:"green-5"},{min:70,max:90,color:"orange-5"},{min:90,max:100,color:"red-5"}]}},mounted:function(){this.socket=this.refreshData()},destroyed:function(){this.socket.close()},methods:{getPieceColor:function(e){var t=this.pieces,r=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var n=i.value;if(e===n.value||e>n.min&&e<=n.max)return n.color}}catch(e){a=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}},refreshData:function(){var e=this;return o.a.socket.getSystemInfo(null,function(t){var r=t.sourceID,o=t.sourceName,i=t.sourceIP,s=e.servers[r];s||(s={status:{},records:[]},e.$set(e.servers,r,s),Object.assign(s,{sourceID:r,sourceName:o,sourceIP:i}));var n=t.usedPhysicalMemorySize,c=t.totalPhysicalMemorySize,l=t.usedDiskSize,u=t.totalDiskSize,m=t.jvmUsingMemory,d=t.jvmMaxMemory;t.memRatio=~~(n/c*100),t.diskRatio=~~(l/u*100),t.jvmMemRatio=~~(m/d*100),s.status=Object.assign({},t);var h=t.cpuRatio,v=t.memRatio,f=t.diskRatio,p=t.jvmMemRatio,_=Math.max(h,v,f,p);s.color=e.getPieceColor(_),a(s.records,t,60)})},switchDatabase:function(e,t){this.current=t,this.$refs.popover.anchorEl=e.currentTarget||e.srcElement,this.$refs.popover.toggle()}}}},430:function(e,t,r){t=e.exports=r(407)(),t.push([e.i,".q-popover[data-v-63057a10]{background:none}",""])},433:function(e,t,r){var a=r(430);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(406)("a1ded0ca",a,!0)}});