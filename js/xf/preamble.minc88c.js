'use strict';var XF=window.XF||{};
!function(l,h){function m(a){return(a=(new RegExp("(^| )"+q+a+"=([^;]+)(;|$)")).exec(h.cookie))?decodeURIComponent(a[2]):null}function n(a){var b=h.createElement("style");b.type="text/css";b.innerHTML=a;h.head.appendChild(b)}var k=h.documentElement,q=k.getAttribute("data-cookie-prefix")||"",r=k.getAttribute("data-app");k.getAttribute("data-logged-in");k.addEventListener("error",function(a){a=a.target;switch(a.getAttribute("data-onerror")){case "hide":a.style.display="none";break;case "hide-parent":a.parentNode.style.display=
"none"}},!0);XF.Feature=function(){function a(c){var e=k.className;g&&(e=e.replace(/(^|\s)has-no-js($|\s)/,"$1has-js$2"),g=!1);c.length&&(e+=" "+c.join(" "));k.className=e}var b={touchevents:function(){return"ontouchstart"in l||l.DocumentTouch&&h instanceof DocumentTouch},passiveeventlisteners:function(){var c=!1;try{var e=Object.defineProperty({},"passive",{get:function(){c=!0}}),f=function(){};l.addEventListener("test",f,e);l.removeEventListener("test",f,e)}catch(p){}return c},hiddenscroll:function(){var c=
h.body,e=!1;c||(c=h.createElement("body"),h.body=c,e=!0);var f=h.createElement("div");f.style.width="100px";f.style.height="100px";f.style.overflow="scroll";f.style.position="absolute";f.style.top="-9999px";c.appendChild(f);var p=f.offsetWidth===f.clientWidth;e?c.parentNode.removeChild(c):f.parentNode.removeChild(f);return p},overflowanchor:function(){return"CSS"in l&&"supports"in l.CSS&&l.CSS.supports("overflow-anchor","auto")}},d={},g=!0;return{runTests:function(){var c=[],e;for(e in b)if(b.hasOwnProperty(e)&&
"undefined"===typeof d[e]){var f=!!b[e]();c.push("has-"+(f?"":"no-")+e);d[e]=f}a(c)},runTest:function(c,e){e=!!e();a(["has-"+(e?"":"no-")+c]);d[c]=e},has:function(c){return"undefined"===typeof d[c]?(console.error("Asked for unknown test results: "+c),!1):d[c]}}}();XF.Feature.runTests();"public"===r&&function(){var a=m("notice_dismiss");a=a?a.split(","):[];for(var b,d=null!==m("consent"),g=[],c=0;c<a.length;c++)b=parseInt(a[c],10),0!==b&&-1!==b&&g.push('.notice[data-notice-id="'+b+'"]');d&&n('.notice[data-notice-id="-1"] { display: none }');
g.length&&n(g.join(", ")+" { display: none !important }")}();(function(){var a=navigator.userAgent.toLowerCase(),b;if(b=/trident\/.*rv:([0-9.]+)/.exec(a))b={browser:"msie",version:parseFloat(b[1])};else{b=/(msie)[ \/]([0-9\.]+)/.exec(a)||/(edge)[ \/]([0-9\.]+)/.exec(a)||/(chrome)[ \/]([0-9\.]+)/.exec(a)||/(webkit)[ \/]([0-9\.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([0-9\.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([0-9\.]+)|)/.exec(a)||[];if("webkit"==b[1]&&a.indexOf("safari")){var d=
/version[ \/]([0-9\.]+)/.exec(a);b=d?[b[0],"safari",d[1]]:(d=/ os ([0-9]+)_([0-9]+)/.exec(a))?[b[0],"safari",d[1]+"."+d[2]]:[b[0],"safari",0]}b={browser:b[1]||"",version:parseFloat(b[2])||0}}b.browser&&(b[b.browser]=!0);d="";var g=null,c;if(/(ipad|iphone|ipod)/.test(a)){if(d="ios",c=/os ([0-9_]+)/.exec(a))g=parseFloat(c[1].replace("_","."))}else(c=/android[ \/]([0-9\.]+)/.exec(a))?(d="android",g=parseFloat(c[1])):/windows /.test(a)?d="windows":/linux/.test(a)?d="linux":/mac os/.test(a)&&(d="mac",
1<navigator.maxTouchPoints&&"MacIntel"===navigator.platform&&(d="ios"));b.os=d;b.osVersion=g;d&&(b[d]=!0);k.className+=(b.os?" has-os-"+b.os:"")+(b.browser?" has-browser-"+b.browser:"");XF.browser=b})()}(window,document);