/**
 * striptoastr - Message Strips that Growl
 * @version v1.0.0
 * @link https://github.com/jasper07/StripToastr#readme
 * @license MIT
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/library"],function(r,i){"use strict";return sap.ui.getCore().initLibrary({name:"ui5lab.striptoastr",dependencies:["sap.ui.core"],interfaces:[],controls:["ui5lab.striptoastr.StripToastr"],elements:[],noLibraryCSS:!1,version:"${version}"}),ui5lab.striptoastr});
/**
 * striptoastr - Message Strips that Growl
 * @version v1.0.0
 * @link https://github.com/jasper07/StripToastr#readme
 * @license MIT
 */
sap.ui.define(["sap/m/MessageStrip","sap/m/MessageStripRenderer","sap/ui/core/Popup","sap/ui/layout/VerticalLayout"],function(t,e,n,o){"use strict";var i=t.extend("MessageStripExt",{renderer:function(t,n){if(n._bClosed)return void n.fireClose();e.render.apply(this,arguments)},onAfterRendering:function(){this.$().attr("role","alert")},close:function(){this._bClosed=!0,t.prototype.close.apply(this,arguments)}});return{sContainerId:"stripToastr-container",_oSettings:{text:null,showCloseButton:!0,showIcon:!0,customIcon:null,type:sap.ui.core.MessageType.Information,link:null,close:null,timeOut:5e3,newestFirst:!1,width:"310px",position:n.Dock.RightTop,anchor:document,style:"stripToastr"},getContainer:function(t){var e=sap.ui.getCore().byId(this.sContainerId);if(!e&&t){e=new o(this.sContainerId,{width:t.width});var i=new n(e);i.setShadow(!1),i.__bAutoClose=!0,i.open(0,t.position,t.position,t.anchor)}return e},notify:function(t){var e=jQuery.extend({},this._oSettings,t),n=function(t){t.getSource().setVisible(!1),t.getSource().destroy();var n=function(t){return t.getVisible()};this.getContainer().getContent().some(n)||this.destroyContainer(),e.close&&e.close.apply(this)}.bind(this),o=new i({text:e.text,showCloseButton:e.showCloseButton,showIcon:e.showIcon,customIcon:e.customIcon,type:e.type,link:e.link,close:n});o.addStyleClass(e.style);var s=this.getContainer(e);return e.newestFirst?s.insertContent(o,0):s.addContent(o),e.timeOut>0&&jQuery.sap.delayedCall(e.timeOut,o,"close"),o},clear:function(t){t?t.close():this.clearContainer()},destroyContainer:function(){var t=this.getContainer();t&&(t.setVisible(!1),t.destroy())},clearContainer:function(){var t=this.getContainer();if(t){var e=t.getContent();if(0===e.length)this.destroyContainer();else{var n=function(t){this.clear(t)}.bind(this);e.forEach(n)}}}}});