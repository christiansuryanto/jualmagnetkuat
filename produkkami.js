(function($){$.fn.vTicker=function(e){var f={speed:700,pause:2000,showItems:3,animation:'',mousePause:true,isPaused:false};var e=$.extend(f,e);moveUp=function(a,b,c){if(c)return;var d=a.children('ul');first=d.children('li:first').clone(true);d.animate({top:'-='+b+'px'},e.speed,function(){$(this).children('li:first').remove();$(this).css('top','0px')});if(e.animation=='fade'){d.children('li:first').fadeOut(e.speed);d.children('li:last').hide().fadeIn(e.speed)}first.appendTo(d)};return this.each(function(){var a=$(this);var b=0;var c=e.isPaused;a.css({overflow:'hidden',position:'relative'}).children('ul').css({position:'absolute',margin:0,padding:0}).children('li').css({margin:0,padding:0});a.children('ul').children('li').each(function(){if($(this).height()>b){b=$(this).height()}});a.children('ul').children('li').each(function(){$(this).height(b)});a.height(b*e.showItems);var d=setInterval(function(){moveUp(a,b,c)},e.pause);if(e.mousePause){a.bind("mouseenter",function(){c=true}).bind("mouseleave",function(){c=false})}})}})(jQuery);

