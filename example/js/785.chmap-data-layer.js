"use strict";(self.webpackChunkchmapDataLayer=self.webpackChunkchmapDataLayer||[]).push([[785],{1785:function(e,t,n){n.r(t),n.d(t,{loadLocalDataFile:function(){return l},loadOnlineDataFile:function(){return f},on:function(){return u}});var a=n(59104),i=n.n(a),o=n(69798),r=n.n(o),c=new(n(92655).Commons.EventEmitterClass);function u(e,t,n,a){c.on(e,t,n,a)}function l(e){var t=e.files[0];if(void 0!==t){var n=new FileReader;n.onload=function(){return c.emit("dataFileRead",{text:n.result,type:"unknown"})};var a=t.name.split(".")[1].toLowerCase();"csv"===a||"json"===a?n.readAsText(t,"UTF-8"):c.emit("exception","Only CSV or GeoJson file format is allowed!"),e.value=""}}function f(e,t,n){if(""!==i()(e).call(e)){var a={method:"GET"};n&&(a.credentials="include"),fetch(e,a).then((function(e){return e.ok?e:r().reject({err:e.status})})).then((function(e){return e.text()})).then((function(e){return c.emit("dataFileRead",{text:e,type:t})})).catch((function(e){c.emit("exception",e)}))}}}}]);
//# sourceMappingURL=785.chmap-data-layer.js.map