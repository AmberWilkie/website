!function(){var n=$("header.navigation.auto-hide"),o=function(){n.addClass("hidden-nav")};$(document).ready(function(){var e=window.setTimeout(o,5e3);n.hover(function(){clearTimeout(e)},function(){e=window.setTimeout(o,5e3)});var i=0;$(window).scroll(function(){var o=$(this).scrollTop();o>0&&o>i?n.addClass("hidden-nav"):n.removeClass("hidden-nav"),i=o})})}();