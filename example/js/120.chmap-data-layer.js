"use strict";(self.webpackChunkchmapDataLayer=self.webpackChunkchmapDataLayer||[]).push([[120],{85120:function(e,n,a){a.r(n),a.d(n,{LocalFileModal:function(){return y}});var t=a(95238),l=a.n(t),o=a(53592),r=a.n(o),i=a(51446),s=a.n(i),c=a(19996),d=a.n(c),u=a(33938),f=a(63109),m=a.n(f),p=a(92655);function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}var v=p.Constants.EXAMPLE_FILES_DIR,b=p.BootstrapWrap.Modal,y=function(){var e=null;function n(){var n=document.createElement("div");n.className="modal fade",n.innerHTML='<div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title">Import local data</h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <div class="mb-3 local-data-file-input">\n            <label class="form-label" for="localDataFile">*Local file</label>\n            <input type="file" id="localDataFile">\n        </div>\n        <br>\n        <pre>\nCHMap supports three file formats:\n1. CSV (<a id="open-logart-books.csv" class="example-file" href="#" download>example-text</a>, <a id="my-collection.csv" class="example-file" href="#" download>example-images</a>) \n   The required columns are: name, latitude, longitude and date. \n   If imageURL column is provided, the image markers will be displayed on the map.\n2. GeoJson (<a id="geo-json-eagles.json" class="example-file" href="#" download>example-eagles</a>)\n3. IIIF manifest.json (<a id="iiif-general-images.json" class="example-file" href="#" download>example-images</a>, <a id="iiif-map-images.json" class="example-file" href="#" download>example-maps</a>)\n        </pre>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary import-btn">Import</button>\n      </div>\n    </div>\n </div>',document.body.append(n),n.querySelector(".import-btn").onclick=t,function(e){var n,a=function(e,n){var a=void 0!==s()&&d()(e)||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){var a;if(e){if("string"==typeof e)return h(e,n);var t=l()(a=Object.prototype.toString.call(e)).call(a,8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?r()(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==a.return||a.return()}finally{if(u)throw i}}}}(e.querySelectorAll(".example-file"));try{for(a.s();!(n=a.n()).done;){var t=n.value;t.href=v+t.id,t.target="_blank"}}catch(e){a.e(e)}finally{a.f()}}(n),e=b.getOrCreateInstance(n)}function t(){return o.apply(this,arguments)}function o(){return(o=(0,u.Z)(m().mark((function n(){return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.e(785).then(a.bind(a,1785));case 2:(0,n.sent.loadLocalDataFile)(e._element.querySelector("#localDataFile"));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return{show:function(a){e||n(),e.show()},hide:function(){e&&e.hide()}}}()}}]);
//# sourceMappingURL=120.chmap-data-layer.js.map