(function(g){g.Zebra_Tooltips=function(j,s){var b=this,k,h,q;b.settings={};b.hide=function(c,a){var b=c.data("Zebra_Tooltip");b&&(b.sticky=!1,a&&(b.destroy=!0),c.data("Zebra_Tooltip",b),l(c))};b.show=function(b,a){var d=b.data("Zebra_Tooltip");d&&(d.sticky=!0,d.muted=!1,a&&(d.destroy=!0),b.data("Zebra_Tooltip",d),n(b))};var m=function(c){var a=c.data("Zebra_Tooltip");if(!a.tooltip){var d=jQuery("<div>",{"class":"Zebra_Tooltip",css:{opacity:0,display:"block"}}),f=jQuery("<div>",{"class":"Zebra_Tooltip_Message", css:{"max-width":b.settings.max_width,"background-color":b.settings.background_color,color:b.settings.color}}).html(b.settings.content?b.settings.content:a.content).appendTo(d),a=jQuery("<div>",{"class":"Zebra_Tooltip_Arrow"}).appendTo(d),e=jQuery("<div>").appendTo(a);b.settings.keep_visible&&(d.bind("mouseleave"+(b.settings.close_on_click?" click":""),function(){l(c)}),d.bind("mouseenter",function(){n(c)}));d.appendTo("body");var p=d.outerWidth(),j=d.outerHeight(),m=e.outerWidth(),r=e.outerHeight(), a={tooltip:d,tooltip_width:p,tooltip_height:j+r/2,message:f,arrow_container:a,arrow_width:m,arrow_height:r,arrow:e},e=f.outerWidth(),p=f.outerHeight();d.css({width:a.tooltip_width,height:a.tooltip_height});a.tooltip_width+=f.outerWidth()-e;a.tooltip_height+=f.outerHeight()-p;d.css({width:a.tooltip_width,height:a.tooltip_height,display:"none"});a=g.extend(c.data("Zebra_Tooltip"),a);c.data("Zebra_Tooltip",a)}a.sticky&&!a.close&&(jQuery("<a>",{"class":"Zebra_Tooltip_Close",href:"javascript:void(0)"}).html("x").bind("click", function(a){a.preventDefault();a=c.data("Zebra_Tooltip");a.sticky=!1;c.data("Zebra_Tooltip",a);l(c)}).appendTo(a.message),a.close=!0,a=g.extend(c.data("Zebra_Tooltip"),a),c.data("Zebra_Tooltip",a));if(a.window_resized||a.window_scrolled)d=g(window),a.window_resized&&(k=d.width(),d.height(),f=c.offset(),g.extend(a,{element_left:f.left,element_top:f.top,element_width:c.outerWidth(),element_height:c.outerHeight()})),q=d.scrollTop(),h=d.scrollLeft(),d="left"==b.settings.position?a.element_left-a.tooltip_width+ a.arrow_width:"right"==b.settings.position?a.element_left+a.element_width-a.arrow_width:a.element_left+(a.element_width-a.tooltip_width)/2,f=a.element_top-a.tooltip_height,e="left"==b.settings.position?a.tooltip_width-a.arrow_width-a.arrow_width/2:"right"==b.settings.position?a.arrow_width/2:(a.tooltip_width-a.arrow_width)/2,d+a.tooltip_width>k+h&&(e-=k+h-(d+a.tooltip_width)-6,d=k+h-a.tooltip_width-6,e+a.arrow_width>a.tooltip_width-6&&(e=a.tooltip_width-6-a.arrow_width),d+e+a.arrow_width/2<a.element_left&& (e=-1E4)),d<h&&(e-=h-d,d=h+2,0>e&&(e=a.arrow_width/2),d+e+a.arrow_width/2>a.element_left+a.element_width&&(e=-1E4)),a.arrow_container.removeClass("Zebra_Tooltip_Arrow_Top"),a.arrow_container.addClass("Zebra_Tooltip_Arrow_Bottom"),a.message.css("margin-top",""),a.arrow.css("borderColor",b.settings.background_color+" transparent transparent"),f<q?(f=a.element_top+a.element_height-b.settings.vertical_offset,a.animation_offset=Math.abs(a.animation_offset),a.message.css("margin-top",a.arrow_height/2), a.arrow_container.removeClass("Zebra_Tooltip_Arrow_Bottom"),a.arrow_container.addClass("Zebra_Tooltip_Arrow_Top"),a.arrow.css("borderColor","transparent transparent "+b.settings.background_color)):(a.animation_offset=-Math.abs(a.animation_offset),f+=b.settings.vertical_offset),a.arrow_container.css("left",e),a.tooltip.css({left:d,top:f}),g.extend(a,{tooltip_left:d,tooltip_top:f,arrow_left:e}),a.window_resized=!1,a.window_scrolled=!1,a=g.extend(c.data("Zebra_Tooltip"),a),c.data("Zebra_Tooltip",a); return a},l=function(c){var a=c.data("Zebra_Tooltip");clearTimeout(a.hide_timeout);a.sticky||(clearTimeout(a.show_timeout),a.hide_timeout=setTimeout(function(){if(a.tooltip){if(b.settings.onBeforeHide&&"function"==typeof b.settings.onBeforeHide)b.settings.onBeforeHide(c);a.close=!1;a.destroy&&(a.muted=!0);c.data("Zebra_Tooltip",a);g("a.Zebra_Tooltip_Close",a.tooltip).remove();a.tooltip.stop();a.tooltip.animate({opacity:0,top:a.tooltip_top+a.animation_offset},b.settings.animation_speed,function(){g(this).css("display", "none");if(b.settings.onHide&&"function"==typeof b.settings.onHide)b.settings.onHide(c)})}},b.settings.hide_delay))},n=function(c){var a=c.data("Zebra_Tooltip");clearTimeout(a.show_timeout);a.muted||(clearTimeout(a.hide_timeout),a.show_timeout=setTimeout(function(){a=m(c);if(b.settings.onBeforeShow&&"function"==typeof b.settings.onBeforeShow)b.settings.onBeforeShow(c);"block"!=a.tooltip.css("display")&&a.tooltip.css({top:a.tooltip_top+a.animation_offset});a.tooltip.css("display","block");a.tooltip.stop(); a.tooltip.animate({top:a.tooltip_top,opacity:b.settings.opacity},b.settings.animation_speed,function(){if(b.settings.onShow&&"function"==typeof b.settings.onShow)b.settings.onShow(c)})},b.settings.show_delay))};b.settings=g.extend({},{animation_speed:250,animation_offset:20,background_color:"#000",close_on_click:!0,color:"#FFF",content:!1,hide_delay:100,keep_visible:!0,max_width:250,opacity:0.95,position:"center",prerender:!1,show_delay:100,vertical_offset:0,onBeforeHide:null,onHide:null,onBeforeShow:null, onShow:null},s);j.each(function(){var c=g(this);c.bind({mouseenter:function(){n(c)},mouseleave:function(){l(c)}});c.data("Zebra_Tooltip",{tooltip:null,content:c.attr("title")||"",window_resized:!0,window_scrolled:!0,show_timeout:null,hide_timeout:null,animation_offset:b.settings.animation_offset,sticky:!1,destroy:!1,muted:!1});c.attr("title","");b.settings.prerender&&m(c)});g(window).bind("scroll resize",function(b){j.each(function(){var a=g(this).data("Zebra_Tooltip");"scroll"==b.type?a.window_scrolled= !0:a.window_resized=!0;g(this).data("Zebra_Tooltip",a)})})}})(jQuery);
