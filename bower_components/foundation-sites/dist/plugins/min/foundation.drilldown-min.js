"use strict";function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function n(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(e,i,t){return i&&n(e.prototype,i),t&&n(e,t),e}}();!function($){var n=function(){function n(e,i){_classCallCheck(this,n),this.$element=e,this.options=$.extend({},n.defaults,this.$element.data(),i),Foundation.Nest.Feather(this.$element,"drilldown"),this._init(),Foundation.registerPlugin(this,"Drilldown"),Foundation.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}return _createClass(n,[{key:"_init",value:function e(){this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","menuitem").find("a"),this._prepareMenu(),this._keyboardEvents()}},{key:"_prepareMenu",value:function i(){var n=this;this.$submenuAnchors.each(function(){var e=$(this),i=e.find("a:first");n.options.parentLink&&i.clone().prependTo(e.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'),i.data("savedHref",i.attr("href")).removeAttr("href"),e.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"menu"}),n._events(e)}),this.$submenus.each(function(){var e=$(this),i=e.find(".js-drilldown-back");i.length||e.prepend(n.options.backButton),n._back(e)}),this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=$(this.options.wrapper).addClass("is-drilldown").css(this._getMaxDims()),this.$element.wrap(this.$wrapper))}},{key:"_events",value:function t(n){var e=this;n.off("click.zf.drilldown").on("click.zf.drilldown",function(i){if($(i.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(i.stopImmediatePropagation(),i.preventDefault()),e._show(n.parent("li")),e.options.closeOnClick){var t=$("body").not(e.$wrapper);t.off(".zf.drilldown").on("click.zf.drilldown",function(n){n.preventDefault(),e._hideAll(),t.off(".zf.drilldown")})}})}},{key:"_keyboardEvents",value:function a(){var n=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a")).on("keydown.zf.drilldown",function(e){var i=$(this),t=i.parent("li").parent("ul").children("li").children("a"),a,l;t.each(function(n){return $(this).is(i)?(a=t.eq(Math.max(0,n-1)),void(l=t.eq(Math.min(n+1,t.length-1)))):void 0}),Foundation.Keyboard.handleKey(e,"Drilldown",{next:function(){i.is(n.$submenuAnchors)&&(n._show(i.parent("li")),i.parent("li").one(Foundation.transitionend(i),function(){i.parent("li").find("ul li a").filter(n.$menuItems).first().focus()}),e.preventDefault())},previous:function(){n._hide(i.parent("li").parent("ul")),i.parent("li").parent("ul").one(Foundation.transitionend(i),function(){setTimeout(function(){i.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),e.preventDefault()},up:function(){a.focus(),e.preventDefault()},down:function(){l.focus(),e.preventDefault()},close:function(){n._back()},open:function(){i.is(n.$menuItems)?i.is(n.$submenuAnchors)&&(n._show(i.parent("li")),i.parent("li").one(Foundation.transitionend(i),function(){i.parent("li").find("ul li a").filter(n.$menuItems).first().focus()}),e.preventDefault()):(n._hide(i.parent("li").parent("ul")),i.parent("li").parent("ul").one(Foundation.transitionend(i),function(){setTimeout(function(){i.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),e.preventDefault())},handled:function(){e.stopImmediatePropagation()}})})}},{key:"_hideAll",value:function l(){var n=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");n.one(Foundation.transitionend(n),function(e){n.removeClass("is-active is-closing")}),this.$element.trigger("closed.zf.drilldown")}},{key:"_back",value:function s(n){var e=this;n.off("click.zf.drilldown"),n.children(".js-drilldown-back").on("click.zf.drilldown",function(i){i.stopImmediatePropagation(),e._hide(n)})}},{key:"_menuLinkEvents",value:function o(){var n=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(e){setTimeout(function(){n._hideAll()},0)})}},{key:"_show",value:function r(n){n.children("[data-submenu]").addClass("is-active"),this.$element.trigger("open.zf.drilldown",[n])}},{key:"_hide",value:function d(n){var e=this;n.addClass("is-closing").one(Foundation.transitionend(n),function(){n.removeClass("is-active is-closing"),n.blur()}),n.trigger("hide.zf.drilldown",[n])}},{key:"_getMaxDims",value:function u(){var n=0,e={};return this.$submenus.add(this.$element).each(function(){var e=$(this).children("li").length;n=e>n?e:n}),e["min-height"]=n*this.$menuItems[0].getBoundingClientRect().height+"px",e["max-width"]=this.$element[0].getBoundingClientRect().width+"px",e}},{key:"destroy",value:function c(){this._hideAll(),Foundation.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role").off(".zf.drilldown").end().off("zf.drilldown"),this.$element.find("a").each(function(){var n=$(this);n.data("savedHref")&&n.attr("href",n.data("savedHref")).removeData("savedHref")}),Foundation.unregisterPlugin(this)}}]),n}();n.defaults={backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',wrapper:"<div></div>",parentLink:!1,closeOnClick:!1},Foundation.plugin(n,"Drilldown")}(jQuery);