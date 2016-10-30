/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-bgpositionxy-bgsizecover-boxshadow-boxsizing-cookies-cssanimations-cssgradients-csstransforms-csstransitions-cssvhunit-cssvwunit-cubicbezierrange-ellipsis-fontface-lastchild-nthchild-opacity-overflowscrolling-svg-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function s(){var e,t,n,s,o,r,a;for(var d in w)if(w.hasOwnProperty(d)){if(e=[],t=w[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)r=e[o],a=r.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function o(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(T&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?b.className.baseVal=t:b.className=t)}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=r(T?"svg":"body"),e.fake=!0),e}function d(e,n,i,s){var o,d,l,f,c="modernizr",u=r("div"),p=a();if(parseInt(i,10))for(;i--;)l=r("div"),l.id=s?s[i]:c+(i+1),u.appendChild(l);return o=r("style"),o.type="text/css",o.id="s"+c,(p.fake?p:u).appendChild(o),p.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),u.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),d=n(u,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=f,b.offsetHeight):u.parentNode.removeChild(u),!!d}function l(e,t){return!!~(""+e).indexOf(t)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function u(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],i(s,"function")?c(s,n||t):s);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,i){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(t[s]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+p(t[s])+":"+i+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,s,o){function a(){c&&(delete N.style,delete N.modElem)}if(o=i(o,"undefined")?!1:o,!i(s,"undefined")){var d=m(e,s);if(!i(d,"undefined"))return d}for(var c,u,p,h,g,v=["modernizr","tspan"];!N.style;)c=!0,N.modElem=r(v.shift()),N.style=N.modElem.style;for(p=e.length,u=0;p>u;u++)if(h=e[u],g=N.style[h],l(h,"-")&&(h=f(h)),N.style[h]!==n){if(o||i(s,"undefined"))return a(),"pfx"==t?h:!0;try{N.style[h]=s}catch(y){}if(N.style[h]!=g)return a(),"pfx"==t?h:!0}return a(),!1}function g(e,t,n,s,o){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+_.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?h(a,t,s,o):(a=(e+" "+E.join(r+" ")+r).split(" "),u(a,t,n))}function v(e,t,i){return g(e,n,n,t,i)}var y=[],w=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var b=t.documentElement,T="svg"===b.nodeName.toLowerCase(),S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=S,Modernizr.addTest("cubicbezierrange",function(){var e=r("a");return e.style.cssText=S.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",s=0,o=S.length-1;o>s;s++)e=0===s?"to ":"",i+=t+S[s]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var a=r("a"),d=a.style;return d.cssText=i,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=r("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var C=x.testStyles=d,z=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,s=533>t&&e.match(/android/gi);return n||s||i}();z?Modernizr.addTest("fontface",!1):C('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),s=i.sheet||i.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"",r=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",r)}),C("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),C("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5);var k="Moz O ms Webkit",_=x._config.usePrefixes?k.split(" "):[];x._cssomPrefixes=_;var E=x._config.usePrefixes?k.toLowerCase().split(" "):[];x._domPrefixes=E;var P={elem:r("modernizr")};Modernizr._q.push(function(){delete P.elem});var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style}),x.testAllProps=g,x.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return v("backgroundPositionX","3px",!0)&&v("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgsizecover",v("backgroundSize","cover")),Modernizr.addTest("boxshadow",v("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",v("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("ellipsis",v("textOverflow","ellipsis")),Modernizr.addTest("overflowscrolling",v("overflowScrolling","touch",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransitions",v("transition","all",!0)),C("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),i=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",i==n)}),C("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),i=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",i==n)}),s(),o(y),delete x.addTest,delete x.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);