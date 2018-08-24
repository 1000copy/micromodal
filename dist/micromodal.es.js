var classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),Modal=function(){var e=function(){function e(t){var o=t.targetModal,n=t.onShow,i=void 0===n?function(){}:n,s=t.onClose,a=void 0===s?function(){}:s,l=t.disableScroll,c=void 0!==l&&l,r=t.disableFocus,d=void 0!==r&&r;classCallCheck(this,e),this.modal=document.getElementById(o),this.config={disableScroll:c,onShow:i,onClose:a,disableFocus:d},this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this),this.makecss()}return createClass(e,[{key:"makecss",value:function(){var e=this.modal.querySelector(".modal-container");Object.assign(e.style,{"background-color":"#fff",padding:"30px","max-width":"500px","max-height":"100vh","border-radius":"4px","overflow-y":"auto","box-sizing":"border-box"}),Object.assign(this.modal.style,{display:"block"});var t=this.modal.querySelector(".modal-overlay");Object.assign(t.style,{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.6)",display:"flex","justify-content":"center","align-items":"center"});var o=this.modal.querySelector(".cross");o.innerText="✕",Object.assign(o.style,{border:0,background:"transparent"});var n=this.modal.querySelector(".modal-title");Object.assign(n.style,{"margin-top":0,"margin-bottom":0});var i=this.modal.querySelector(".modal-header");Object.assign(i.style,{display:"flex","justify-content":"space-between","align-items":"center"})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){Object.assign(this.modal.style,{display:"none"});var e=this.modal;this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal,this.modalResult),e.classList.remove("is-open")}},{key:"okModal",value:function(){this.modalResult="ok",this.closeModal()}},{key:"cancelModal",value:function(){this.modalResult="cancel",this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:"initial",height:"initial"});break;case"disable":Object.assign(t.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.doTab(e)}},{key:"getFocusableNodes",value:function(){var e=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],t=this.modal.querySelectorAll(e);return Object.keys(t).map(function(e){return t[e]})}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes();e.length&&e[0].focus()}}},{key:"doTab",value:function(e){var t=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),e.shiftKey||o!==t.length-1||(t[0].focus(),e.preventDefault())}else t[0].focus()}}]),e}(),t=null;return{show:function(o,n){var i=n||{};i.targetModal=o,(t=new e(i)).showModal()},close:function(){return t.closeModal(),t.modalResult},ok:function(){return t.okModal(),t.modalResult},cancel:function(){return t.cancelModal(),t.modalResult}}}();
