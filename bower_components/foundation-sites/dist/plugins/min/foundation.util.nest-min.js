"use strict";!function($){var e={Feather:function(e){var a=arguments.length<=1||void 0===arguments[1]?"zf":arguments[1];e.attr("role","menubar");var t=e.find("li").attr({role:"menuitem"}),n="is-"+a+"-submenu",i=n+"-item",s="is-"+a+"-submenu-parent";e.find("a:first").attr("tabindex",0),t.each(function(){var e=$(this),a=e.children("ul");a.length&&(e.addClass(s).attr({"aria-haspopup":!0,"aria-expanded":!1,"aria-label":e.children("a:first").text()}),a.addClass("submenu "+n).attr({"data-submenu":"","aria-hidden":!0,role:"menu"})),e.parent("[data-submenu]").length&&e.addClass("is-submenu-item "+i)})},Burn:function(e,a){var t=e.find("li").removeAttr("tabindex"),n="is-"+a+"-submenu",i=n+"-item",s="is-"+a+"-submenu-parent";e.find("*").removeClass(n+" "+i+" "+s+" is-submenu-item submenu is-active").removeAttr("data-submenu").css("display","")}};Foundation.Nest=e}(jQuery);