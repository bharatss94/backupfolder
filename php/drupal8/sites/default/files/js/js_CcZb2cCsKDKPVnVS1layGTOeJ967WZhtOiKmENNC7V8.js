/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
;
/*!
 * jQuery Once v2.1.1 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new Error("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {

  'use strict';

  // Use direct child elements to harden against XSS exploits when CSP is on.
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = {behaviors: {}, locale: {}};

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (Drupal, drupalSettings, drupalTranslations) {

  'use strict';

  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(function () { throw error; }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} detach
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * $(context).find(selector).once('behavior-name');` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `.findOnce()` and `.removeOnce()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `.removeOnce('behaviorName')`, to ensure the behavior
   * is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    // Execute all of them.
    for (var i in behaviors) {
      if (behaviors.hasOwnProperty(i) && typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        }
        catch (e) {
          Drupal.throwError(e);
        }
      }
    }
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str.toString()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    var processedArgs = {};
    // Transform arguments before inserting them.
    for (var key in args) {
      if (args.hasOwnProperty(key)) {
        switch (key.charAt(0)) {
          // Escaped only.
          case '@':
            processedArgs[key] = Drupal.checkPlain(args[key]);
            break;

          // Pass-through.
          case '!':
            processedArgs[key] = args[key];
            break;

          // Escaped and placeholder.
          default:
            processedArgs[key] = Drupal.theme('placeholder', args[key]);
            break;
        }
      }
    }

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = [];
      for (var k in args) {
        if (args.hasOwnProperty(k)) {
          keys.push(k);
        }
      }

      // Order the keys by the character length. The shortest one is the first.
      keys.sort(function (a, b) { return a.length - b.length; });
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    }
    catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {bool}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    }
    catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    }
    catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    // Determine the index of the plural form.
    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula['default'];
    }
    else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    if (func in Drupal.theme) {
      return Drupal.theme[func].apply(this, args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };

})(Drupal, window.drupalSettings, window.drupalTranslations);
;
// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// Class indicating that JS is enabled; used for styling purpose.
document.documentElement.className += ' js';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.

(function (domready, Drupal, drupalSettings) {

  'use strict';

  // Attach all behaviors.
  domready(function () { Drupal.attachBehaviors(document, drupalSettings); });

})(domready, Drupal, window.drupalSettings);
;
/**
 * @file
 * Progress bar.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *   The id for the progress bar.
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      '</div>';
  };

  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * Method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * @example
   * pb = new Drupal.ProgressBar('myProgressBar');
   * some_element.appendChild(pb.element);
   *
   * @constructor
   *
   * @param {string} id
   *   The id for the progressbar.
   * @param {function} updateCallback
   *   Callback to run on update.
   * @param {string} method
   *   HTTP method to use.
   * @param {function} errorCallback
   *   Callback to call on error.
   */
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after
    // users
    // have completed their current activity and not interrupt the screen
    // reader.
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, /** @lends Drupal.ProgressBar# */{

    /**
     * Set the percentage and status message for the progressbar.
     *
     * @param {number} percentage
     *   The progress percentage.
     * @param {string} message
     *   The message to show the user.
     * @param {string} label
     *   The text for the progressbar label.
     */
    setProgress: function (percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },

    /**
     * Start monitoring progress via Ajax.
     *
     * @param {string} uri
     *   The URI to use for monitoring.
     * @param {number} delay
     *   The delay for calling the monitoring URI.
     */
    startMonitoring: function (uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },

    /**
     * Stop monitoring progress via Ajax.
     */
    stopMonitoring: function () {
      clearTimeout(this.timer);
      // This allows monitoring to be stopped from within the callback.
      this.uri = null;
    },

    /**
     * Request progress data from server.
     */
    sendPing: function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        // When doing a post request, you need non-null data. Otherwise a
        // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        }
        else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function (progress) {
            // Display errors.
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            // Update display.
            pb.setProgress(progress.percentage, progress.message, progress.label);
            // Schedule next timer.
            pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
          },
          error: function (xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },

    /**
     * Display errors on the page.
     *
     * @param {string} string
     *   The error message to show the user.
     */
    displayError: function (string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });

})(jQuery, Drupal);
;
(function (Drupal) {

  'use strict';

  /**
   * Call picturefill so newly added responsive images are processed.
   */
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function () {
      if (window.picturefill) {
        window.picturefill();
      }
    }
  };

})(Drupal);
;
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function ($, window, Drupal, drupalSettings) {

  'use strict';

  /**
   * Attaches the Ajax behavior to each Ajax form element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Initialize all {@link Drupal.Ajax} objects declared in
   *   `drupalSettings.ajax` or initialize {@link Drupal.Ajax} objects from
   *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
   * @prop {Drupal~behaviorDetach} detach
   *   During `unload` remove all {@link Drupal.Ajax} objects related to
   *   the removed content.
   */
  Drupal.behaviors.AJAX = {
    attach: function (context, settings) {

      function loadAjaxBehavior(base) {
        var element_settings = settings.ajax[base];
        if (typeof element_settings.selector === 'undefined') {
          element_settings.selector = '#' + base;
        }
        $(element_settings.selector).once('drupal-ajax').each(function () {
          element_settings.element = this;
          element_settings.base = base;
          Drupal.ajax(element_settings);
        });
      }

      // Load all Ajax behaviors specified in the settings.
      for (var base in settings.ajax) {
        if (settings.ajax.hasOwnProperty(base)) {
          loadAjaxBehavior(base);
        }
      }

      // Bind Ajax behaviors to all items showing the class.
      $('.use-ajax').once('ajax').each(function () {
        var element_settings = {};
        // Clicked links look better with the throbber than the progress bar.
        element_settings.progress = {type: 'throbber'};

        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.
        var href = $(this).attr('href');
        if (href) {
          element_settings.url = href;
          element_settings.event = 'click';
        }
        element_settings.dialogType = $(this).data('dialog-type');
        element_settings.dialog = $(this).data('dialog-options');
        element_settings.base = $(this).attr('id');
        element_settings.element = this;
        Drupal.ajax(element_settings);
      });

      // This class means to submit the form to the action using Ajax.
      $('.use-ajax-submit').once('ajax').each(function () {
        var element_settings = {};

        // Ajax submits specified in this manner automatically submit to the
        // normal form action.
        element_settings.url = $(this.form).attr('action');
        // Form submit button clicks need to tell the form what was clicked so
        // it gets passed in the POST request.
        element_settings.setClick = true;
        // Form buttons use the 'click' event rather than mousedown.
        element_settings.event = 'click';
        // Clicked form buttons look better with the throbber than the progress
        // bar.
        element_settings.progress = {type: 'throbber'};
        element_settings.base = $(this).attr('id');
        element_settings.element = this;

        Drupal.ajax(element_settings);
      });
    },

    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          // Set this to null and allow garbage collection to reclaim
          // the memory.
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  /**
   * Extends Error to provide handling for Errors in Ajax.
   *
   * @constructor
   *
   * @augments Error
   *
   * @param {XMLHttpRequest} xmlhttp
   *   XMLHttpRequest object used for the failed request.
   * @param {string} uri
   *   The URI where the error occurred.
   * @param {string} customMessage
   *   The custom message.
   */
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {

    var statusCode;
    var statusText;
    var pathText;
    var responseText;
    var readyStateText;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xmlhttp.status});
    }
    else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    pathText = '\n' + Drupal.t('Path: !uri', {'!uri': uri});
    statusText = '';
    // In some cases, when statusCode === 0, xmlhttp.statusText may not be
    // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
    // catch that and the test causes an exception. So we need to catch the
    // exception here.
    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {'!statusText': $.trim(xmlhttp.statusText)});
    }
    catch (e) {
      // Empty.
    }

    responseText = '';
    // Again, we don't have a way to know for sure whether accessing
    // xmlhttp.responseText is going to throw an exception. So we'll catch it.
    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': $.trim(xmlhttp.responseText)});
    }
    catch (e) {
      // Empty.
    }

    // Make the responseText more readable by stripping HTML tags and newlines.
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    // We don't need readyState except for status == 0.
    readyStateText = xmlhttp.status === 0 ? ('\n' + Drupal.t('ReadyState: !readyState', {'!readyState': xmlhttp.readyState})) : '';

    customMessage = customMessage ? ('\n' + Drupal.t('CustomMessage: !customMessage', {'!customMessage': customMessage})) : '';

    /**
     * Formatted and translated error message.
     *
     * @type {string}
     */
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    /**
     * Used by some browsers to display a more accurate stack trace.
     *
     * @type {string}
     */
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  /**
   * Provides Ajax page updating via jQuery $.ajax.
   *
   * This function is designed to improve developer experience by wrapping the
   * initialization of {@link Drupal.Ajax} objects and storing all created
   * objects in the {@link Drupal.ajax.instances} array.
   *
   * @example
   * Drupal.behaviors.myCustomAJAXStuff = {
   *   attach: function (context, settings) {
   *
   *     var ajaxSettings = {
   *       url: 'my/url/path',
   *       // If the old version of Drupal.ajax() needs to be used those
   *       // properties can be added
   *       base: 'myBase',
   *       element: $(context).find('.someElement')
   *     };
   *
   *     var myAjaxObject = Drupal.ajax(ajaxSettings);
   *
   *     // Declare a new Ajax command specifically for this Ajax object.
   *     myAjaxObject.commands.insert = function (ajax, response, status) {
   *       $('#my-wrapper').append(response.data);
   *       alert('New content was appended to #my-wrapper');
   *     };
   *
   *     // This command will remove this Ajax object from the page.
   *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
   *       Drupal.ajax.instances[this.instanceIndex] = null;
   *     };
   *
   *     // Programmatically trigger the Ajax request.
   *     myAjaxObject.execute();
   *   }
   * };
   *
   * @param {object} settings
   *   The settings object passed to {@link Drupal.Ajax} constructor.
   * @param {string} [settings.base]
   *   Base is passed to {@link Drupal.Ajax} constructor as the 'base'
   *   parameter.
   * @param {HTMLElement} [settings.element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   *
   * @return {Drupal.Ajax}
   *   The created Ajax object.
   *
   * @see Drupal.AjaxCommands
   */
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    // Map those config keys to variables for the old Drupal.ajax function.
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    // By default do not display progress for ajax calls without an element.
    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  /**
   * Contains all created Ajax objects.
   *
   * @type {Array.<Drupal.Ajax|null>}
   */
  Drupal.ajax.instances = [];

  /**
   * List all objects where the associated element is not in the DOM
   *
   * This method ignores {@link Drupal.Ajax} objects not bound to DOM elements
   * when created with {@link Drupal.ajax}.
   *
   * @return {Array.<Drupal.Ajax>}
   *   The list of expired {@link Drupal.Ajax} objects.
   */
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  /**
   * Settings for an Ajax object.
   *
   * @typedef {object} Drupal.Ajax~element_settings
   *
   * @prop {string} url
   *   Target of the Ajax request.
   * @prop {?string} [event]
   *   Event bound to settings.element which will trigger the Ajax request.
   * @prop {bool} [keypress=true]
   *   Triggers a request on keypress events.
   * @prop {?string} selector
   *   jQuery selector targeting the element to bind events to or used with
   *   {@link Drupal.AjaxCommands}.
   * @prop {string} [effect='none']
   *   Name of the jQuery method to use for displaying new Ajax content.
   * @prop {string|number} [speed='none']
   *   Speed with which to apply the effect.
   * @prop {string} [method]
   *   Name of the jQuery method used to insert new content in the targeted
   *   element.
   * @prop {object} [progress]
   *   Settings for the display of a user-friendly loader.
   * @prop {string} [progress.type='throbber']
   *   Type of progress element, core provides `'bar'`, `'throbber'` and
   *   `'fullscreen'`.
   * @prop {string} [progress.message=Drupal.t('Please wait...')]
   *   Custom message to be used with the bar indicator.
   * @prop {object} [submit]
   *   Extra data to be sent with the Ajax request.
   * @prop {bool} [submit.js=true]
   *   Allows the PHP side to know this comes from an Ajax request.
   * @prop {object} [dialog]
   *   Options for {@link Drupal.dialog}.
   * @prop {string} [dialogType]
   *   One of `'modal'` or `'dialog'`.
   * @prop {string} [prevent]
   *   List of events on which to stop default action and stop propagation.
   */

  /**
   * Ajax constructor.
   *
   * The Ajax request returns an array of commands encoded in JSON, which is
   * then executed to make any changes that are necessary to the page.
   *
   * Drupal uses this file to enhance form elements with `#ajax['url']` and
   * `#ajax['wrapper']` properties. If set, this file will automatically be
   * included to provide Ajax capabilities.
   *
   * @constructor
   *
   * @param {string} [base]
   *   Base parameter of {@link Drupal.Ajax} constructor
   * @param {HTMLElement} [element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   * @param {Drupal.Ajax~element_settings} element_settings
   *   Settings for this Ajax object.
   */
  Drupal.Ajax = function (base, element, element_settings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, element_settings);

    /**
     * @type {Drupal.AjaxCommands}
     */
    this.commands = new Drupal.AjaxCommands();

    /**
     * @type {bool|number}
     */
    this.instanceIndex = false;

    // @todo Remove this after refactoring the PHP code to:
    //   - Call this 'selector'.
    //   - Include the '#' for ID-based selectors.
    //   - Support non-ID-based selectors.
    if (this.wrapper) {

      /**
       * @type {string}
       */
      this.wrapper = '#' + this.wrapper;
    }

    /**
     * @type {HTMLElement}
     */
    this.element = element;

    /**
     * @type {Drupal.Ajax~element_settings}
     */
    this.element_settings = element_settings;

    // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
    // bind Ajax to links as well.
    if (this.element && this.element.form) {

      /**
       * @type {jQuery}
       */
      this.$form = $(this.element.form);
    }

    // If no Ajax callback URL was given, use the link href or form action.
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      }
      else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
    // the server detect when it needs to degrade gracefully.
    // There are four scenarios to check for:
    // 1. /nojs/
    // 2. /nojs$ - The end of a URL string.
    // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
    // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#myfragment).
    var originalUrl = this.url;

    /**
     * Processed Ajax URL.
     *
     * @type {string}
     */
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/g, '/ajax$1');
    // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
    // version.
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    // Set the options for the ajaxSubmit function.
    // The 'this' variable will not persist inside of the options object.
    var ajax = this;

    /**
     * Options for the jQuery.ajax function.
     *
     * @name Drupal.Ajax#options
     *
     * @type {object}
     *
     * @prop {string} url
     *   Ajax URL to be called.
     * @prop {object} data
     *   Ajax payload.
     * @prop {function} beforeSerialize
     *   Implement jQuery beforeSerialize function to call
     *   {@link Drupal.Ajax#beforeSerialize}.
     * @prop {function} beforeSubmit
     *   Implement jQuery beforeSubmit function to call
     *   {@link Drupal.Ajax#beforeSubmit}.
     * @prop {function} beforeSend
     *   Implement jQuery beforeSend function to call
     *   {@link Drupal.Ajax#beforeSend}.
     * @prop {function} success
     *   Implement jQuery success function to call
     *   {@link Drupal.Ajax#success}.
     * @prop {function} complete
     *   Implement jQuery success function to clean up ajax state and trigger an
     *   error if needed.
     * @prop {string} dataType='json'
     *   Type of the response expected.
     * @prop {string} type='POST'
     *   HTTP method to use for the Ajax request.
     */
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function (element_settings, options) {
        return ajax.beforeSerialize(element_settings, options);
      },
      beforeSubmit: function (form_values, element_settings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(form_values, element_settings, options);
      },
      beforeSend: function (xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function (response, status, xmlhttprequest) {
        // Sanity check for browser support (object expected).
        // When using iFrame uploads, responses must be returned as a string.
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        // Prior to invoking the response's commands, verify that they can be
        // trusted by checking for a response header. See
        // \Drupal\Core\EventSubscriber\AjaxResponseSubscriber for details.
        // - Empty responses are harmless so can bypass verification. This
        //   avoids an alert message for server-generated no-op responses that
        //   skip Ajax rendering.
        // - Ajax objects with trusted URLs (e.g., ones defined server-side via
        //   #ajax) can bypass header verification. This is especially useful
        //   for Ajax with multipart forms. Because IFRAME transport is used,
        //   the response headers cannot be accessed for verification.
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function (xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      type: 'POST'
    };

    if (element_settings.dialog) {
      ajax.options.data.dialogOptions = element_settings.dialog;
    }

    // Ensure that we have a valid URL by adding ? when no query parameter is
    // yet available, otherwise append using &.
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    }
    else {
      ajax.options.url += '&';
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=drupal_' + (element_settings.dialogType || 'ajax');

    // Bind the ajaxSubmit function to the element event.
    $(ajax.element).on(element_settings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {'!url': ajax.url}));
      }
      return ajax.eventResponse(this, event);
    });

    // If necessary, enable keyboard submission so that Ajax behaviors
    // can be triggered through keyboard input as well as e.g. a mousedown
    // action.
    if (element_settings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    // If necessary, prevent the browser default action of an additional event.
    // For example, prevent the browser default action of a click, even if the
    // Ajax behavior binds to mousedown.
    if (element_settings.prevent) {
      $(ajax.element).on(element_settings.prevent, false);
    }
  };

  /**
   * URL query attribute to indicate the wrapper used to render a request.
   *
   * The wrapper format determines how the HTML is wrapped, for example in a
   * modal dialog.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  /**
   * Request parameter to indicate that a request is a Drupal Ajax request.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  /**
   * Execute the ajax request.
   *
   * Allows developers to execute an Ajax request manually without specifying
   * an event to respond to.
   *
   * @return {object}
   *   Returns the jQuery.Deferred object underlying the Ajax request. If
   *   pre-serialization fails, the Deferred will be returned in the rejected
   *   state.
   */
  Drupal.Ajax.prototype.execute = function () {
    // Do not perform another ajax command if one is already in progress.
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      // Return the jqXHR so that external code can hook into the Deferred API.
      return $.ajax(this.options);
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);
      // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
      // so that calling code can take appropriate action.
      return $.Deferred().reject();
    }
  };

  /**
   * Handle a key press.
   *
   * The Ajax object will, if instructed, bind to a key press response. This
   * will test to see if the key press is valid to trigger this event and
   * if it is, trigger it for us and prevent other keypresses from triggering.
   * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
   * and 32. RETURN is often used to submit a form when in a textfield, and
   * SPACE is often used to activate an element without submitting.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Detect enter key and space bar and allow the standard response for them,
    // except for form elements of type 'text', 'tel', 'number' and 'textarea',
    // where the spacebar activation causes inappropriate activation if
    // #ajax['keypress'] is TRUE. On a text-type widget a space should always
    // be a space.
    if (event.which === 13 || (event.which === 32 && element.type !== 'text' &&
      element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number')) {
      event.preventDefault();
      event.stopPropagation();
      $(ajax.element_settings.element).trigger(ajax.element_settings.event);
    }
  };

  /**
   * Handle an event that triggers an Ajax response.
   *
   * When an event that triggers an Ajax response happens, this method will
   * perform the actual Ajax call. It is bound to the event using
   * bind() in the constructor, and it uses the options specified on the
   * Ajax object.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a synonym for this to reduce code confusion.
    var ajax = this;

    // Do not perform another Ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        // If setClick is set, we must set this to ensure that the button's
        // value is passed.
        if (ajax.setClick) {
          // Mark the clicked button. 'form.clk' is a special variable for
          // ajaxSubmit that tells the system which element got clicked to
          // trigger the submit. Without it there would be no 'op' or
          // equivalent.
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      }
      else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    }
    catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  /**
   * Handler for the form serialization.
   *
   * Runs before the beforeSend() handler (see below), and unlike that one, runs
   * before field data is collected.
   *
   * @param {object} [element]
   *   Ajax object's `element_settings`.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Allow detaching behaviors to update field values before collecting them.
    // This is only needed when field values are added to the POST data, so only
    // when there is a form such that this.$form.ajaxSubmit() is used instead of
    // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
    // isn't called, but don't rely on that: explicitly check this.$form.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    // Inform Drupal that this is an AJAX request.
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    // Allow Drupal to return new JavaScript and CSS files to load without
    // returning the ones already loaded.
    // @see \Drupal\Core\Theme\AjaxBasePageNegotiator
    // @see \Drupal\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
    // @see system_js_settings_alter()
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  /**
   * Modify form values prior to form submission.
   *
   * @param {Array.<object>} form_values
   *   Processed form values.
   * @param {jQuery} element
   *   The form node as a jQuery object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSubmit = function (form_values, element, options) {
    // This function is left empty to make it simple to override for modules
    // that wish to add functionality here.
  };

  /**
   * Prepare the Ajax request before it is sent.
   *
   * @param {XMLHttpRequest} xmlhttprequest
   *   Native Ajax object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    // For forms without file inputs, the jQuery Form plugin serializes the
    // form values, and then calls jQuery's $.ajax() function, which invokes
    // this handler. In this circumstance, options.extraData is never used. For
    // forms with file inputs, the jQuery Form plugin uses the browser's normal
    // form submission mechanism, but captures the response in a hidden IFRAME.
    // In this circumstance, it calls this handler first, and then appends
    // hidden fields to the form to submit the values in options.extraData.
    // There is no simple way to know which submission mechanism will be used,
    // so we add to extraData regardless, and allow it to be ignored in the
    // former case.
    if (this.$form) {
      options.extraData = options.extraData || {};

      // Let the server know when the IFRAME submission mechanism is used. The
      // server can use this information to wrap the JSON response in a
      // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
      options.extraData.ajax_iframe_upload = '1';

      // The triggering element is about to be disabled (see below), but if it
      // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
      // that value is included in the submission. As per above, submissions
      // that use $.ajax() are already serialized prior to the element being
      // disabled, so this is only needed for IFRAME submissions.
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    // Disable the element that received the change to prevent user interface
    // interaction while the Ajax request is in progress. ajax.ajaxing prevents
    // the element from triggering a new request, but does not prevent the user
    // from changing its value.
    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    // Insert progress indicator.
    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  /**
   * Sets the progress bar progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
    if (this.progress.message) {
      this.progress.element.find('.throbber').after('<div class="message">' + this.progress.message + '</div>');
    }
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the fullscreen progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
    $('body').after(this.progress.element);
  };

  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    // If the focus hasn't be changed by the ajax commands, try to refocus the
    // triggering element or one of its parents if that element does not exist
    // anymore.
    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    // Reattach behaviors, if they were detached in beforeSerialize(). The
    // attachBehaviors() called on the new content from processing the response
    // commands is not sufficient, because behaviors from the entire form need
    // to be reattached.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    // Remove any response-specific settings so they don't get used on the next
    // call by mistake.
    this.settings = null;
  };

  /**
   * Build an effect object to apply an effect when adding new HTML.
   *
   * @param {object} response
   *   Drupal Ajax response.
   * @param {string} [response.effect]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   * @param {string|number} [response.speed]
   *   Override the default value of {@link Drupal.Ajax#element_settings}.
   *
   * @return {object}
   *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
   *   properties.
   */
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    }
    else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    }
    else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  /**
   * Handler for the form redirection error.
   *
   * @param {object} xmlhttprequest
   *   Native XMLHttpRequest object.
   * @param {string} uri
   *   Ajax Request URI.
   * @param {string} [customMessage]
   *   Extra message to print with the Ajax error.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    // Undo hide.
    $(this.wrapper).show();
    // Re-enable the element.
    $(this.element).prop('disabled', false);
    // Reattach behaviors, if they were detached in beforeSerialize().
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  /**
   * @typedef {object} Drupal.AjaxCommands~commandDefinition
   *
   * @prop {string} command
   * @prop {string} [method]
   * @prop {string} [selector]
   * @prop {string} [data]
   * @prop {object} [settings]
   * @prop {bool} [asterisk]
   * @prop {string} [text]
   * @prop {string} [title]
   * @prop {string} [url]
   * @prop {object} [argument]
   * @prop {string} [name]
   * @prop {string} [value]
   * @prop {string} [old]
   * @prop {string} [new]
   * @prop {bool} [merge]
   * @prop {Array} [args]
   *
   * @see Drupal.AjaxCommands
   */

  /**
   * Provide a series of commands that the client will perform.
   *
   * @constructor
   */
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {

    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   A optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    insert: function (ajax, response, status) {
      // Get information from the response. If it is not there, default to
      // our presets.
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings;

      // We don't know what response.data contains: it might be a string of text
      // without HTML, so don't rely on jQuery correctly interpreting
      // $(response.data) as new HTML rather than a CSS selector. Also, if
      // response.data contains top-level text nodes, they get lost with either
      // $(response.data) or $('<div></div>').replaceWith(response.data).
      var $new_content_wrapped = $('<div></div>').html(response.data);
      var $new_content = $new_content_wrapped.contents();

      // For legacy reasons, the effects processing code assumes that
      // $new_content consists of a single top-level element. Also, it has not
      // been sufficiently tested whether attachBehaviors() can be successfully
      // called with a context object that includes top-level text nodes.
      // However, to give developers full control of the HTML appearing in the
      // page, and to enable Ajax content to be inserted in places where <div>
      // elements are not allowed (e.g., within <table>, <tr>, and <span>
      // parents), we check if the new content satisfies the requirement
      // of a single top-level element, and only use the container <div> created
      // above when it doesn't. For more information, please see
      // https://www.drupal.org/node/736066.
      if ($new_content.length !== 1 || $new_content.get(0).nodeType !== 1) {
        $new_content = $new_content_wrapped;
      }

      // If removing content from the wrapper, detach behaviors first.
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          settings = response.settings || ajax.settings || drupalSettings;
          Drupal.detachBehaviors($wrapper.get(0), settings);
      }

      // Add the new content to the page.
      $wrapper[method]($new_content);

      // Immediately hide the new content if we're using any effects.
      if (effect.showEffect !== 'show') {
        $new_content.hide();
      }

      // Determine which effect to use and what content will receive the
      // effect, then show the new content.
      if ($new_content.find('.ajax-new-content').length > 0) {
        $new_content.find('.ajax-new-content').hide();
        $new_content.show();
        $new_content.find('.ajax-new-content')[effect.showEffect](effect.showSpeed);
      }
      else if (effect.showEffect !== 'show') {
        $new_content[effect.showEffect](effect.showSpeed);
      }

      // Attach all JavaScript behaviors to the new content, if it was
      // successfully added to the page, this if statement allows
      // `#ajax['wrapper']` to be optional.
      if ($new_content.parents('html').length > 0) {
        // Apply any settings from the returned JSON if available.
        settings = response.settings || ajax.settings || drupalSettings;
        Drupal.attachBehaviors($new_content.get(0), settings);
      }
    },

    /**
     * Command to remove a chunk from the page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    remove: function (ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      })
        .remove();
    },

    /**
     * Command to mark a chunk changed.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response object from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {bool} [response.asterisk]
     *   An optional CSS selector. If specified, an asterisk will be
     *   appended to the HTML inside the provided selector.
     * @param {number} [status]
     *   The request status.
     */
    changed: function (ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },

    /**
     * Command to provide an alert.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} response.text
     *   The text that will be displayed in an alert dialog.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    alert: function (ajax, response, status) {
      window.alert(response.text, response.title);
    },

    /**
     * Command to set the window.location, redirecting the browser.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    redirect: function (ajax, response, status) {
      window.location = response.url;
    },

    /**
     * Command to provide the jQuery css() function.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} response.argument
     *   An array of key/value pairs to set in the CSS for the selector.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    css: function (ajax, response, status) {
      $(response.selector).css(response.argument);
    },

    /**
     * Command to set the settings used for other commands in this response.
     *
     * This method will also remove expired `drupalSettings.ajax` settings.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {bool} response.merge
     *   Determines whether the additional settings should be merged to the
     *   global settings.
     * @param {object} response.settings
     *   Contains additional settings to add to the global settings.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    settings: function (ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      // Clean up drupalSettings.ajax.
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          // If the Ajax object has been created through drupalSettings.ajax
          // it will have a selector. When there is no selector the object
          // has been initialized with a special class name picked up by the
          // Ajax behavior.

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      }
      else {
        ajax.settings = response.settings;
      }
    },

    /**
     * Command to attach data using jQuery's data API.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.name
     *   The name or key (in the key value pair) of the data attached to this
     *   selector.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {string|object} response.value
     *   The value of to be attached.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    data: function (ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },

    /**
     * Command to apply a jQuery method.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.args
     *   An array of arguments to the jQuery method, if any.
     * @param {string} response.method
     *   The jQuery method to invoke.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    invoke: function (ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, response.args);
    },

    /**
     * Command to restripe a table.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    restripe: function (ajax, response, status) {
      // :even and :odd are reversed because jQuery counts from 0 and
      // we count from 1, so we're out of sync.
      // Match immediate children of the parent element to allow nesting.
      $(response.selector).find('> tbody > tr:visible, > tr:visible')
        .removeClass('odd even')
        .filter(':even').addClass('odd').end()
        .filter(':odd').addClass('even');
    },

    /**
     * Command to update a form's build ID.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.old
     *   The old form build ID.
     * @param {string} response.new
     *   The new form build ID.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    update_build_id: function (ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },

    /**
     * Command to add css.
     *
     * Uses the proprietary addImport method if available as browsers which
     * support that method ignore @import statements in dynamically added
     * stylesheets.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   A string that contains the styles to be added.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_css: function (ajax, response, status) {
      // Add the styles in the normal way.
      $('head').prepend(response.data);
      // Add imports in the styles using the addImport method if available.
      var match;
      var importMatch = /^@import url\("(.*)"\);$/igm;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };

})(jQuery, window, Drupal, drupalSettings);
;
;
/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),h=a.setTimeout(u,p),void 0;g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);;
/**
* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.2",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b)}(this,document);;
(function($) {

var version = '@VERSION',
    defaults = {
      exclude: [],
      excludeWithin:[],
      offset: 0,
      direction: 'top', // one of 'top' or 'left'
      scrollElement: null, // jQuery set of elements you wish to scroll (for $.smoothScroll).
                          //  if null (default), $('html, body').firstScrollable() is used.
      scrollTarget: null, // only use if you want to override default behavior
      beforeScroll: function() {},  // fn(opts) function to be called before scrolling occurs. "this" is the element(s) being scrolled
      afterScroll: function() {},   // fn(opts) function to be called after scrolling occurs. "this" is the triggering element
      easing: 'swing',
      speed: 400,
      autoCoefficent: 2 // coefficient for "auto" speed
    },

    getScrollable = function(opts) {
      var scrollable = [],
          scrolled = false,
          dir = opts.dir && opts.dir == 'left' ? 'scrollLeft' : 'scrollTop';

      this.each(function() {

        if (this == document || this == window) { return; }
        var el = $(this);
        if ( el[dir]() > 0 ) {
          scrollable.push(this);
        } else {
          // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
          el[dir](1);
          scrolled = el[dir]() > 0;
          if ( scrolled ) {
            scrollable.push(this);
          }
          // then put it back, of course
          el[dir](0);
        }
      });

      // If no scrollable elements, fall back to <body>,
      // if it's in the jQuery collection
      // (doing this because Safari sets scrollTop async,
      // so can't set it to 1 and immediately get the value.)
      if (!scrollable.length) {
        this.each(function(index) {
          if (this.nodeName === 'BODY') {
            scrollable = [this];
          }
        });
      }

      // Use the first scrollable element if we're calling firstScrollable()
      if ( opts.el === 'first' && scrollable.length > 1 ) {
        scrollable = [ scrollable[0] ];
      }

      return scrollable;
    },
    isTouch = 'ontouchend' in document;

$.fn.extend({
  scrollable: function(dir) {
    var scrl = getScrollable.call(this, {dir: dir});
    return this.pushStack(scrl);
  },
  firstScrollable: function(dir) {
    var scrl = getScrollable.call(this, {el: 'first', dir: dir});
    return this.pushStack(scrl);
  },

  smoothScroll: function(options) {
    options = options || {};
    var opts = $.extend({}, $.fn.smoothScroll.defaults, options),
        locationPath = $.smoothScroll.filterPath(location.pathname);

    this
    .unbind('click.smoothscroll')
    .bind('click.smoothscroll', function(event) {
      var link = this,
          $link = $(this),
          exclude = opts.exclude,
          excludeWithin = opts.excludeWithin,
          elCounter = 0, ewlCounter = 0,
          include = true,
          clickOpts = {},
          hostMatch = ((location.hostname === link.hostname) || !link.hostname),
          pathMatch = opts.scrollTarget || ( $.smoothScroll.filterPath(link.pathname) || locationPath ) === locationPath,
          thisHash = escapeSelector(link.hash);

      if ( !opts.scrollTarget && (!hostMatch || !pathMatch || !thisHash) ) {
        include = false;
      } else {
        while (include && elCounter < exclude.length) {
          if ($link.is(escapeSelector(exclude[elCounter++]))) {
            include = false;
          }
        }
        while ( include && ewlCounter < excludeWithin.length ) {
          if ($link.closest(excludeWithin[ewlCounter++]).length) {
            include = false;
          }
        }
      }

      if ( include ) {
        event.preventDefault();

        $.extend( clickOpts, opts, {
          scrollTarget: opts.scrollTarget || thisHash,
          link: link
        });

        $.smoothScroll( clickOpts );
      }
    });

    return this;
  }
});

$.smoothScroll = function(options, px) {
  var opts, $scroller, scrollTargetOffset, speed,
      scrollerOffset = 0,
      offPos = 'offset',
      scrollDir = 'scrollTop',
      aniProps = {},
      aniOpts = {},
      scrollprops = [];


  if (typeof options === 'number') {
    opts = $.fn.smoothScroll.defaults;
    scrollTargetOffset = options;
  } else {
    opts = $.extend({}, $.fn.smoothScroll.defaults, options || {});
    if (opts.scrollElement) {
      offPos = 'position';
      if (opts.scrollElement.css('position') == 'static') {
        opts.scrollElement.css('position', 'relative');
      }
    }
  }

  opts = $.extend({link: null}, opts);
  scrollDir = opts.direction == 'left' ? 'scrollLeft' : scrollDir;

  if ( opts.scrollElement ) {
    $scroller = opts.scrollElement;
    scrollerOffset = $scroller[scrollDir]();
  } else {
    $scroller = $('html, body').firstScrollable();
  }

  // beforeScroll callback function must fire before calculating offset
  opts.beforeScroll.call($scroller, opts);

  scrollTargetOffset = (typeof options === 'number') ? options :
                        px ||
                        ( $(opts.scrollTarget)[offPos]() &&
                        $(opts.scrollTarget)[offPos]()[opts.direction] ) ||
                        0;

  aniProps[scrollDir] = scrollTargetOffset + scrollerOffset + opts.offset;
  speed = opts.speed;

  // automatically calculate the speed of the scroll based on distance / coefficient
  if (speed === 'auto') {

    // if aniProps[scrollDir] == 0 then we'll use scrollTop() value instead
    speed = aniProps[scrollDir] || $scroller.scrollTop();

    // divide the speed by the coefficient
    speed = speed / opts.autoCoefficent;
  }

  aniOpts = {
    duration: speed,
    easing: opts.easing,
    complete: function() {
      opts.afterScroll.call(opts.link, opts);
    }
  };

  if (opts.step) {
    aniOpts.step = opts.step;
  }

  if ($scroller.length) {
    $scroller.stop().animate(aniProps, aniOpts);
  } else {
    opts.afterScroll.call(opts.link, opts);
  }
};

$.smoothScroll.version = version;
$.smoothScroll.filterPath = function(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
};

// default options
$.fn.smoothScroll.defaults = defaults;

function escapeSelector (str) {
  return str.replace(/(:|\.)/g,'\\$1');
}

})(jQuery);
;
/*
* Jssor.Core 15.0
* http://www.jssor.com/
* 
* TERMS OF USE - Jssor.Core
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*! Jssor */
$Jssor$ = window.$Jssor$ = window.$Jssor$ || {};


//$JssorDebug$
var $JssorDebug$ = new function () {

    this.$DebugMode = true;

    // Methods

    this.$Log = function (msg, important) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        } else if (debug && important) {
            alert(msg);
        }
    };

    this.$Error = function (msg, e) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.error) {
            console.error(msg);
        } else if (debug) {
            alert(msg);
        }

        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };

    this.$Fail = function (msg) {
        throw new Error(msg);
    };

    this.$Assert = function (value, msg) {
        var debug = this.$DebugMode;
        if (debug) {
            if (!value)
                throw new Error("Assert failed " + msg || "");
        }
    };

    this.$Trace = function (msg) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        }
    };

    this.$Execute = function (func) {
        var debug = this.$DebugMode;
        if (debug)
            func();
    };

    this.$LiveStamp = function (obj, id) {
        var stamp = document.createElement("DIV");
        stamp.setAttribute("id", id);

        obj.$Live = stamp;
    };
};


//$JssorEventManager$
var $JssorEventManager$ = function () {
    var self = this;
    // Fields

    var listeners = {}; // dictionary of eventName --> array of handlers

    // Methods

    self.$On = self.addEventListener = function (eventName, handler) {
        if (typeof (handler) != "function") {
            return;
        }

        if (!listeners[eventName]) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(handler);
    };

    self.$Off = self.removeEventListener = function (eventName, handler) {
        var handlers = listeners[eventName];

        if (typeof (handler) != "function") {
            return;
        } else if (!handlers) {
            return;
        }

        for (var i = 0; i < handlers.length; i++) {
            if (handler == handlers[i]) {
                handlers.splice(i, 1);
                return;
            }
        }
    };

    self.$ClearEventListeners = function (eventName) {
        if (listeners[eventName]) {
            delete listeners[eventName];
        }
    };

    self.$TriggerEvent = function (eventName) {
        var handlers = listeners[eventName];
        var args = [];

        if (!handlers) {
            return;
        }

        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        for (var i = 0; i < handlers.length; i++) {
            try {
                handlers[i].apply(window, args);
            } catch (e) {
                // handler threw an error, ignore, go on to next one
                $JssorDebug$.$Error(e.name + " while executing " + eventName +
                        " handler: " + e.message, e);
            }
        }
    };
};;
/// <reference path="Jssor.Core.js" />

/*
* Jssor.Utils 15.0
* http://www.jssor.com/
* 
* TERMS OF USE - Jssor.Utils
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


//$JssorPoint$
var $JssorPoint$;

(function () {

    $JssorPoint$ = function (x, y) {

        // Properties

        this.x = typeof (x) == "number" ? x : 0;
        this.y = typeof (y) == "number" ? y : 0;

    };

    // Methods

    var SDPointPrototype = $JssorPoint$.prototype;

    SDPointPrototype.$Plus = function (point) {
        return new $JssorPoint$(this.x + point.x, this.y + point.y);
    };

    SDPointPrototype.$Minus = function (point) {
        return new $JssorPoint$(this.x - point.x, this.y - point.y);
    };

    SDPointPrototype.$Times = function (factor) {
        return new $JssorPoint$(this.x * factor, this.y * factor);
    };

    SDPointPrototype.$Divide = function (factor) {
        return new $JssorPoint$(this.x / factor, this.y / factor);
    };

    SDPointPrototype.$Negate = function () {
        return new $JssorPoint$(-this.x, -this.y);
    };

    SDPointPrototype.$DistanceTo = function (point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) +
                        Math.pow(this.y - point.y, 2));
    };

    SDPointPrototype.$Apply = function (func) {
        return new $JssorPoint$(func(this.x), func(this.y));
    };

    SDPointPrototype.$Equals = function (point) {
        return (point instanceof $JssorPoint$) &&
                (this.x === point.x) && (this.y === point.y);
    };

    SDPointPrototype.$ToString = function () {
        return "(" + this.x + "," + this.y + ")";
    };

})();

//$JssorEasing$
var $JssorEasing$ = window.$JssorEasing$ = {
    $EaseLinear: function (t) {
        return t;
    },
    $EaseGoBack: function (t) {
        return 1 - Math.abs((t *= 2) - 1);
    },
    $EaseSwing: function (t) {
        return -Math.cos(t * Math.PI) / 2 + .5;
    },
    $EaseInQuad: function (t) {
        return t * t;
    },
    $EaseOutQuad: function (t) {
        return -t * (t - 2);
    },
    $EaseInOutQuad: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t : -1 / 2 * (--t * (t - 2) - 1);
    },
    $EaseInCubic: function (t) {
        return t * t * t;
    },
    $EaseOutCubic: function (t) {
        return (t -= 1) * t * t + 1;
    },
    $EaseInOutCubic: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t : 1 / 2 * ((t -= 2) * t * t + 2);
    },
    $EaseInQuart: function (t) {
        return t * t * t * t;
    },
    $EaseOutQuart: function (t) {
        return -((t -= 1) * t * t * t - 1);
    },
    $EaseInOutQuart: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t : -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    $EaseInQuint: function (t) {
        return t * t * t * t * t;
    },
    $EaseOutQuint: function (t) {
        return (t -= 1) * t * t * t * t + 1;
    },
    $EaseInOutQuint: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t * t : 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    $EaseInSine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
    },
    $EaseOutSine: function (t) {
        return Math.sin(t * Math.PI / 2);
    },
    $EaseInOutSine: function (t) {
        return -1 / 2 * (Math.cos(Math.PI * t) - 1);
    },
    $EaseInExpo: function (t) {
        return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    $EaseOutExpo: function (t) {
        return t == 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    $EaseInOutExpo: function (t) {
        return t == 0 || t == 1 ? t : (t *= 2) < 1 ? 1 / 2 * Math.pow(2, 10 * (t - 1)) : 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    $EaseInCirc: function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
    },
    $EaseOutCirc: function (t) {
        return Math.sqrt(1 - (t -= 1) * t);
    },
    $EaseInOutCirc: function (t) {
        return (t *= 2) < 1 ? -1 / 2 * (Math.sqrt(1 - t * t) - 1) : 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    $EaseInElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p));
    },
    $EaseOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return Math.pow(2, -10 * t) * Math.sin((t - s) * 2 * Math.PI / p) + 1;
    },
    $EaseInOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .45, s = .1125;
        return (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) : Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) * .5 + 1;
    },
    $EaseInBack: function (t) {
        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    $EaseOutBack: function (t) {
        var s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    $EaseInOutBack: function (t) {
        var s = 1.70158;
        return (t *= 2) < 1 ? 1 / 2 * t * t * (((s *= 1.525) + 1) * t - s) : 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    $EaseInBounce: function (t) {
        return 1 - $JssorEasing$.$EaseOutBounce(1 - t)
    },
    $EaseOutBounce: function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    $EaseInOutBounce: function (t) {
        return t < 1 / 2 ? $JssorEasing$.$EaseInBounce(t * 2) * .5 : $JssorEasing$.$EaseOutBounce(t * 2 - 1) * .5 + .5;
    },
    $EaseInWave: function (t) {
        return 1 - Math.cos(t * Math.PI * 2)
    },
    $EaseOutWave: function (t) {
        return Math.sin(t * Math.PI * 2);
    },
    $EaseOutJump: function (t) {
        return 1 - (((t *= 2) < 1) ? (t = 1 - t) * t * t : (t -= 1) * t * t);
    },
    $EaseInJump: function (t) {
        return ((t *= 2) < 1) ? t * t * t : (t = 2 - t) * t * t;
    }
};

var $JssorDirection$ = window.$JssorDirection$ = {
    $TO_LEFT: 0x0001,
    $TO_RIGHT: 0x0002,
    $TO_TOP: 0x0004,
    $TO_BOTTOM: 0x0008,
    $HORIZONTAL: 0x0003,
    $VERTICAL: 0x000C,
    $LEFTRIGHT: 0x0003,
    $TOPBOTOM: 0x000C,
    $TOPLEFT: 0x0005,
    $TOPRIGHT: 0x0006,
    $BOTTOMLEFT: 0x0009,
    $BOTTOMRIGHT: 0x000A,
    $AROUND: 0x000F,

    $GetDirectionHorizontal: function (direction) {
        return direction & 0x0003;
    },
    $GetDirectionVertical: function (direction) {
        return direction & 0x000C;
    },
    $ChessHorizontal: function (direction) {
        return (~direction & 0x0003) + (direction & 0x000C);
    },
    $ChessVertical: function (direction) {
        return (~direction & 0x000C) + (direction & 0x0003);
    },
    $IsToLeft: function (direction) {
        return (direction & 0x0003) == 0x0001;
    },
    $IsToRight: function (direction) {
        return (direction & 0x0003) == 0x0002;
    },
    $IsToTop: function (direction) {
        return (direction & 0x000C) == 0x0004;
    },
    $IsToBottom: function (direction) {
        return (direction & 0x000C) == 0x0008;
    },
    $IsHorizontal: function (direction) {
        return (direction & 0x0003) > 0;
    },
    $IsVertical: function (direction) {
        return (direction & 0x000C) > 0;
    }
};

var $JssorKeyCode$ = {
    $BACKSPACE: 8,
    $COMMA: 188,
    $DELETE: 46,
    $DOWN: 40,
    $END: 35,
    $ENTER: 13,
    $ESCAPE: 27,
    $HOME: 36,
    $LEFT: 37,
    $NUMPAD_ADD: 107,
    $NUMPAD_DECIMAL: 110,
    $NUMPAD_DIVIDE: 111,
    $NUMPAD_ENTER: 108,
    $NUMPAD_MULTIPLY: 106,
    $NUMPAD_SUBTRACT: 109,
    $PAGE_DOWN: 34,
    $PAGE_UP: 33,
    $PERIOD: 190,
    $RIGHT: 39,
    $SPACE: 32,
    $TAB: 9,
    $UP: 38
};

var $JssorAlignment$ = {
    $TopLeft: 0x11,
    $TopCenter: 0x12,
    $TopRight: 0x14,
    $MiddleLeft: 0x21,
    $MiddleCenter: 0x22,
    $MiddleRight: 0x24,
    $BottomLeft: 0x41,
    $BottomCenter: 0x42,
    $BottomRight: 0x44,

    $IsTop: function (aligment) {
        return aligment & 0x10 > 0;
    },
    $IsMiddle: function (alignment) {
        return alignment & 0x20 > 0;
    },
    $IsBottom: function (alignment) {
        return alignment & 0x40 > 0;
    },
    $IsLeft: function (alignment) {
        return alignment & 0x01 > 0;
    },
    $IsCenter: function (alignment) {
        return alignment & 0x02 > 0;
    },
    $IsRight: function (alignment) {
        return alignment & 0x04 > 0;
    }
};

var $JssorMatrix$;

var $JssorBrowser$ = {
    $UNKNOWN: 0,
    $IE: 1,
    $FIREFOX: 2,
    $SAFARI: 3,
    $CHROME: 4,
    $OPERA: 5
};

var $ROWSER_UNKNOWN$ = 0;
var $ROWSER_IE$ = 1;
var $ROWSER_FIREFOX$ = 2;
var $ROWSER_SAFARI$ = 3;
var $ROWSER_CHROME$ = 4;
var $ROWSER_OPERA$ = 5;

var $JssorAnimator$;

// $JssorUtils$ is a static class, so make it singleton instance
var $JssorUtils$ = window.$JssorUtils$ = new function () {

    // Fields

    var self = this;

    var arrActiveX = ["Msxml2.XMLHTTP", "Msxml3.XMLHTTP", "Microsoft.XMLHTTP"];
    var supportedImageFormats = {
        "bmp": false,
        "jpeg": true,
        "jpg": true,
        "png": true,
        "tif": false,
        "wdp": false
    };

    var browser = $JssorBrowser$.$UNKNOWN;
    var browserRuntimeVersion = 0;
    var browserEngineVersion = 0;
    var browserJavascriptVersion = 0;
    var webkitVersion = 0;

    var app = navigator.appName;
    var ver = navigator.appVersion;
    var ua = navigator.userAgent;

    var urlParams = {};

    function DetectBrowser() {
        if (!browser) {
            if (app == "Microsoft Internet Explorer" &&
                !!window.attachEvent && !!window.ActiveXObject) {

                var ieOffset = ua.indexOf("MSIE");
                browser = $JssorBrowser$.$IE;
                browserEngineVersion = parseFloat(ua.substring(ieOffset + 5, ua.indexOf(";", ieOffset)));

                //check IE javascript version
                /*@cc_on
                browserJavascriptVersion = @_jscript_version;
                @*/

                // update: for intranet sites and compat view list sites, IE sends
                // an IE7 User-Agent to the server to be interoperable, and even if
                // the page requests a later IE version, IE will still report the
                // IE7 UA to JS. we should be robust to self.
                //var docMode = document.documentMode;
                //if (typeof docMode !== "undefined") {
                //    browserRuntimeVersion = docMode;
                //}

                browserRuntimeVersion = document.documentMode || browserEngineVersion;

            }
            else if (app == "Netscape" && !!window.addEventListener) {

                var ffOffset = ua.indexOf("Firefox");
                var saOffset = ua.indexOf("Safari");
                var chOffset = ua.indexOf("Chrome");
                var webkitOffset = ua.indexOf("AppleWebKit");

                if (ffOffset >= 0) {
                    browser = $JssorBrowser$.$FIREFOX;
                    browserRuntimeVersion = parseFloat(ua.substring(ffOffset + 8));
                }
                else if (saOffset >= 0) {
                    var slash = ua.substring(0, saOffset).lastIndexOf("/");
                    browser = (chOffset >= 0) ? $JssorBrowser$.$CHROME : $JssorBrowser$.$SAFARI;
                    browserRuntimeVersion = parseFloat(ua.substring(slash + 1, saOffset));
                }

                if (webkitOffset >= 0)
                    webkitVersion = parseFloat(ua.substring(webkitOffset + 12));
            }
            else {
                var match = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(ua);
                if (match) {
                    browser = $JssorBrowser$.$OPERA;
                    browserRuntimeVersion = parseFloat(match[2]);
                }
            }
        }
    }

    function IsBrowserIE() {
        DetectBrowser();
        return browser == $ROWSER_IE$;
    }

    function IsBrowserIeQuirks() {

        return IsBrowserIE() && (browserRuntimeVersion < 6 || document.compatMode == "BackCompat");   //Composite to "CSS1Compat"
    }

    function IsBrowserFireFox() {
        DetectBrowser();
        return browser == $ROWSER_FIREFOX$;
    }

    function IsBrowserSafari() {
        DetectBrowser();
        return browser == $ROWSER_SAFARI$;
    }

    function IsBrowserChrome() {
        DetectBrowser();
        return browser == $ROWSER_CHROME$;
    }

    function IsBrowserOpera() {
        DetectBrowser();
        return browser == $ROWSER_OPERA$;
    }

    function IsBrowserBadTransform() {
        return IsBrowserSafari() && (webkitVersion > 534) && (webkitVersion < 535);
    }

    function IsBrowserSafeHWA() {
        return IsBrowserSafari() && (webkitVersion < 535);
    }

    function IsBrowserIe9Earlier() {

        //IE 8- and chrome 1 won't fade well
        return IsBrowserIE() && browserRuntimeVersion < 9; // || (IsBrowserChrome() && browserRuntimeVersion < 2);
    }

    var _TransformProperty;
    function GetTransformProperty(elmt) {

        if (!_TransformProperty) {
            // Note that in some versions of IE9 it is critical that
            // msTransform appear in this list before MozTransform

            each(['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'], function (property) {
                if (!self.$IsUndefined(elmt.style[property])) {
                    _TransformProperty = property;
                    return true;
                }
            });

            _TransformProperty = _TransformProperty || "transform";
        }

        return _TransformProperty;
    }

    // Constructor
    {
        //Ignore urlParams
        //        // Url parameters

        //        var query = window.location.search.substring(1);    // ignore '?'
        //        var parts = query.split('&');

        //        for (var i = 0; i < parts.length; i++) {
        //            var part = parts[i];
        //            var sep = part.indexOf('=');

        //            if (sep > 0) {
        //                urlParams[part.substring(0, sep)] =
        //                        decodeURIComponent(part.substring(sep + 1));
        //            }
        //        }

        // Browser behaviors

    }

    // Helpers
    function getOffsetParent(elmt, isFixed) {
        // IE and Opera "fixed" position elements don't have offset parents.
        // regardless, if it's fixed, its offset parent is the body.
        if (isFixed && elmt != document.body) {
            return document.body;
        } else {
            return elmt.offsetParent;
        }
    }

    function toString(obj) {
        return Object.prototype.toString.call(obj);
    }

    // [[Class]] -> type pairs
    var class2type;

    function each(object, callback) {
        if (toString(object) == "[object Array]") {
            for (var i = 0; i < object.length; i++) {
                if (callback(object[i], i, object)) {
                    break;
                }
            }
        } else {
            for (var name in object) {
                if (callback(object[name], name, object)) {
                    break;
                }
            }
        }
    }

    function GetClass2Type() {
        if (!class2type) {
            class2type = {};
            each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            });
        }

        return class2type;
    }

    function type(obj) {
        return obj == null ? String(obj) : GetClass2Type()[toString(obj)] || "object";
    }

    function isPlainObject(obj) {
        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor property.
        // Make sure that DOM nodes and window objects don't pass through, as well
        if (!obj || type(obj) !== "object" || obj.nodeType || self.$IsWindow(obj)) {
            return false;
        }

        var hasOwn = Object.prototype.hasOwnProperty;

        try {
            // Not own constructor property must be Object
            if (obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            // IE8,9 Will throw exceptions on certain host objects #9897
            return false;
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.

        var key;
        for (key in obj) { }

        return key === undefined || hasOwn.call(obj, key);
    }

    function Delay(code, delay) {
        setTimeout(code, delay || 0);
    }

    function RemoveByReg(str, reg) {
        var m = reg.exec(str);

        if (m) {
            var header = str.substr(0, m.index);
            var tailer = str.substr(m.lastIndex + 1, str.length - (m.lastIndex + 1));
            str = header + tailer;
        }

        return str;
    }

    function BuildNewCss(oldCss, removeRegs, replaceValue) {
        var css = (!oldCss || oldCss == "inherit") ? "" : oldCss;

        each(removeRegs, function (removeReg) {
            var m = removeReg.exec(css);

            if (m) {
                var header = css.substr(0, m.index);
                var tailer = css.substr(m.lastIndex + 1, css.length - (m.lastIndex + 1));
                css = header + tailer;
            }
        });

        css = replaceValue + (css.indexOf(" ") != 0 ? " " : "") + css;

        return css;
    }

    function SetStyleFilterIE(elmt, value) {
        if (browserRuntimeVersion < 9) {
            elmt.style.filter = value;
        }
    }

    function SetStyleMatrixIE(elmt, matrix, offset) {
        //matrix is not for ie9+ running in ie8- mode
        if (browserJavascriptVersion < 9) {
            var oldFilterValue = elmt.style.filter;
            var matrixReg = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g);
            var matrixValue = matrix ? "progid:DXImageTransform.Microsoft.Matrix(" + "M11=" + matrix[0][0] + ", M12=" + matrix[0][1] + ", M21=" + matrix[1][0] + ", M22=" + matrix[1][1] + ", SizingMethod='auto expand')" : "";

            var newFilterValue = BuildNewCss(oldFilterValue, [matrixReg], matrixValue);

            SetStyleFilterIE(elmt, newFilterValue);

            self.$SetStyleMarginTop(elmt, offset.y);
            self.$SetStyleMarginLeft(elmt, offset.x);
        }
    }

    // Methods

    self.$IsBrowserIE = IsBrowserIE;

    self.$IsBrowserIeQuirks = IsBrowserIeQuirks;

    self.$IsBrowserFireFox = IsBrowserFireFox;

    self.$IsBrowserSafari = IsBrowserSafari;

    self.$IsBrowserChrome = IsBrowserChrome;

    self.$IsBrowserOpera = IsBrowserOpera;

    self.$IsBrowserBadTransform = IsBrowserBadTransform;

    self.$IsBrowserSafeHWA = IsBrowserSafeHWA;

    self.$IsBrowserIe9Earlier = IsBrowserIe9Earlier;

    self.$GetBrowserVersion = function () {
        return browserRuntimeVersion;
    };

    self.$GetBrowserEngineVersion = function () {
        return browserEngineVersion || browserRuntimeVersion;
    };

    self.$GetWebKitVersion = function () {
        return webkitVersion;
    };

    self.$Delay = Delay;

    self.$GetElement = function (elmt) {
        if (self.$IsString(elmt)) {
            elmt = document.getElementById(elmt);
        }

        return elmt;
    };

    self.$GetElementPosition = function (elmt) {
        elmt = self.$GetElement(elmt);
        var result = new $JssorPoint$();

        // technique from:
        // http://www.quirksmode.org/js/findpos.html
        // with special check for "fixed" elements.

        while (elmt) {
            result.x += elmt.offsetLeft;
            result.y += elmt.offsetTop;

            var isFixed = self.$GetElementStyle(elmt).position == "fixed";

            if (isFixed) {
                result = result.$Plus(self.$GetPageScroll(window));
            }

            elmt = getOffsetParent(elmt, isFixed);
        }

        return result;
    };

    self.$GetElementSize = function (elmt) {
        elmt = self.$GetElement(elmt);
        return new $JssorPoint$(elmt.clientWidth, elmt.clientHeight);
    };

    self.$GetElementStyle = function (elmt) {
        elmt = self.$GetElement(elmt);

        if (elmt.currentStyle) {
            return elmt.currentStyle;
        } else if (window.getComputedStyle) {
            return window.getComputedStyle(elmt, "");
        } else {
            $JssorDebug$.$Fail("Unknown elmt style, no known technique.");
        }
    };

    self.$GetEvent = function (event) {
        return event ? event : window.event;
    };

    self.$GetEventSrcElement = function (event) {
        event = self.$GetEvent(event);
        return event.target || event.srcElement || document;
    };

    self.$GetEventDstElement = function (event) {
        event = self.$GetEvent(event);
        return event.relatedTarget || event.toElement;
    };

    self.$GetMousePosition = function (event) {
        event = self.$GetEvent(event);
        var result = new $JssorPoint$();

        // technique from:
        // http://www.quirksmode.org/js/events_properties.html

        if (event.type == "DOMMouseScroll" &&
                IsBrowserFireFox() && browserRuntimeVersion < 3) {
            // hack for FF2 which reports incorrect position for mouse scroll
            result.x = event.screenX;
            result.y = event.screenY;
        } else if (typeof (event.pageX) == "number") {
            result.x = event.pageX;
            result.y = event.pageY;
        } else if (typeof (event.clientX) == "number") {
            result.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            result.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        } else {
            $JssorDebug$.$Fail("Unknown event mouse position, no known technique.");
        }

        return result;
    };

    self.$GetMouseScroll = function (event) {
        event = self.$GetEvent(event);
        var delta = 0; // default value

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/10/31/javascript-tutorial-the-scroll-wheel/

        if (typeof (event.wheelDelta) == "number") {
            delta = event.wheelDelta;
        } else if (typeof (event.detail) == "number") {
            delta = event.detail * -1;
        } else {
            $JssorDebug$.$Fail("Unknown event mouse scroll, no known technique.");
        }

        // normalize value to [-1, 1]
        return delta ? delta / Math.abs(delta) : 0;
    };

    self.$GetPageScroll = function (window) {
        var result = new $JssorPoint$();
        var docElmt = window.document.documentElement || {};
        var body = window.document.body || {};

        // technique from:
        // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

        if (typeof (window.pageXOffset) == "number") {
            // most browsers
            result.x = window.pageXOffset;
            result.y = window.pageYOffset;
        } else if (body.scrollLeft || body.scrollTop) {
            // W3C spec, IE6+ in quirks mode
            result.x = body.scrollLeft;
            result.y = body.scrollTop;
        } else if (docElmt.scrollLeft || docElmt.scrollTop) {
            // IE6+ in standards mode
            result.x = docElmt.scrollLeft;
            result.y = docElmt.scrollTop;
        }

        // note: we specifically aren't testing for typeof here, because IE sets
        // the appropriate variables undefined instead of 0 under certain
        // conditions. self means we also shouldn't fail if none of the three
        // cases are hit; we'll just assume the page scroll is 0.

        return result;
    };

    self.$GetWindowSize = function (window) {
        var result = new $JssorPoint$();

        // technique from:
        // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

        // important: i originally cleaned up the second and third IE checks to
        // check if the typeof was number. but self fails for quirks mode,
        // because docElmt.clientWidth is indeed a number, but it's incorrectly
        // zero. so no longer checking typeof is number for those cases.

        //if (typeof (window.innerWidth) == 'number') {
        //    // non-IE browsers
        //    result.x = window.innerWidth;
        //    result.y = window.innerHeight;
        //}
        //else {

        //jQuery way to get window size, but support ie quirks mode
        var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);

        //$JssorDebug$.$Execute(function () {
        //    if (!checkElement || (!checkElement.clientWidth && !checkElement.clientHeight))
        //        $JssorDebug$.$Fail("Unknown window size, no known technique.");
        //});

        result.x = checkElement.clientWidth;
        result.y = checkElement.clientHeight;
        //}

        return result;
    };

    //self.$ImageFormatSupported = function (ext) {
    //    var ext = ext ? ext : "";
    //    return !!supportedImageFormats[ext.toLowerCase()];
    //};

    //self.$MakeCenteredNode = function (elmt) {
    //    elmt = $JssorUtils$.$GetElement(elmt);
    //    var div = self.$MakeNeutralElement("div");
    //    var html = [];

    //    // technique for vertically centering (in IE!!!) from:
    //    // http://www.jakpsatweb.cz/css/css-vertical-center-solution.html
    //    // with explicit neutralizing of styles added by me.
    //    html.push('<div style="display:table; height:100%; width:100%;');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('#position:relative; overflow:hidden; text-align:left;">');
    //    // the text-align:left guards against incorrect centering in IE
    //    html.push('<div style="#position:absolute; #top:50%; width:100%; ');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('display:table-cell; vertical-align:middle;">');
    //    html.push('<div style="#position:relative; #top:-50%; width:100%; ');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('text-align:center;"></div></div></div>');

    //    div.innerHTML = html.join('');
    //    div = div.firstChild;

    //    // now add the elmt as a child to the inner-most div
    //    var innerDiv = div;
    //    var innerDivs = div.getElementsByTagName("div");
    //    while (innerDivs.length > 0) {
    //        innerDiv = innerDivs[0];
    //        innerDivs = innerDiv.getElementsByTagName("div");
    //    }

    //    innerDiv.appendChild(elmt);

    //    return div;
    //};

    //self.$MakeNeutralElement = function (tagName) {
    //    var elmt = self.$CreateElement(tagName);
    //    var style = elmt.style;

    //    // TODO reset neutral elmt's style in a better way
    //    style.background = "transparent none";
    //    style.border = "none";
    //    style.margin = "0px";
    //    style.padding = "0px";
    //    style.position = "static";

    //    return elmt;
    //};

    //self.$MakeTransparentImage = function (src) {
    //    var img = self.$MakeNeutralElement("img");
    //    var elmt = null;

    //    if (IsBrowserIE() && browserRuntimeVersion < 7) {
    //        elmt = self.$MakeNeutralElement("span");
    //        elmt.style.display = "inline-block";

    //        // to size span correctly, load image and get natural size,
    //        // but don't override any user-set CSS values
    //        img.onload = function () {
    //            elmt.style.width = elmt.style.width || img.width + "px";
    //            elmt.style.height = elmt.style.height || img.height + "px";

    //            img.onload = null;
    //            img = null;     // to prevent memory leaks in IE
    //        };

    //        img.src = src;
    //        elmt.style.filter =
    //                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
    //                src + "', sizingMethod='scale')";
    //    } else {
    //        elmt = img;
    //        elmt.src = src;
    //    }

    //    return elmt;
    //};

    //self.$MakeAjaxRequest = function (url, callback) {
    //    var async = typeof (callback) == "function";
    //    var req = null;

    //    if (async) {
    //        var actual = callback;
    //        var callback = function () {
    //            Delay($JssorUtils$.$CreateCallback(null, actual, req), 1);
    //        };
    //    }

    //    if (window.ActiveXObject) {
    //        for (var i = 0; i < arrActiveX.length; i++) {
    //            try {
    //                req = new ActiveXObject(arrActiveX[i]);
    //                break;
    //            } catch (e) {
    //                continue;
    //            }
    //        }
    //    } else if (window.XMLHttpRequest) {
    //        req = new XMLHttpRequest();
    //    }

    //    if (!req) {
    //        $JssorDebug$.$Fail("Browser doesn't support XMLHttpRequest.");
    //    }

    //    if (async) {
    //        req.onreadystatechange = function () {
    //            if (req.readyState == 4) {
    //                // prevent memory leaks by breaking circular reference now
    //                req.onreadystatechange = new Function();
    //                callback();
    //            }
    //        };
    //    }

    //    try {
    //        req.open("GET", url, async);
    //        req.send(null);
    //    } catch (e) {
    //        $JssorDebug$.$Log(e.name + " while making AJAX request: " + e.message);

    //        req.onreadystatechange = null;
    //        req = null;

    //        if (async) {
    //            callback();
    //        }
    //    }

    //    return async ? null : req;
    //};

    //self.$ParseXml = function (string) {
    //    var xmlDoc = null;

    //    if (window.ActiveXObject) {
    //        try {
    //            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //            xmlDoc.async = false;
    //            xmlDoc.loadXML(string);
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (ActiveX): " + e.message);
    //        }
    //    } else if (window.DOMParser) {
    //        try {
    //            var parser = new DOMParser();
    //            xmlDoc = parser.parseFromString(string, "text/xml");
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (DOMParser): " + e.message);
    //        }
    //    } else {
    //        $JssorDebug$.$Fail("Browser doesn't support XML DOM.");
    //    }

    //    return xmlDoc;
    //};

    //self.$GetUrlParameter = function (key) {
    //    var value = urlParams[key];
    //    return value ? value : null;
    //};

    self.$GetStyleOpacity = function (elmt) {
        if (IsBrowserIE() && browserEngineVersion < 9) {
            var match = /opacity=([^)]*)/.exec(elmt.style.filter || "");
            return match ? (parseFloat(match[1]) / 100) : 1;
        }
        else
            return parseFloat(elmt.style.opacity || "1");
    };

    self.$SetStyleOpacity = self.$setElementOpacity = function (elmt, opacity, ie9EarlierForce) {

        if (IsBrowserIE() && browserEngineVersion < 9) {
            //var filterName = "filter"; // browserEngineVersion < 8 ? "filter" : "-ms-filter";
            var finalFilter = elmt.style.filter || "";

            // for CSS filter browsers (IE), remove alpha filter if it's unnecessary.
            // update: doing self always since IE9 beta seems to have broken the
            // behavior if we rely on the programmatic filters collection.
            var alphaReg = new RegExp(/[\s]*alpha\([^\)]*\)/g);

            // important: note the lazy star! self protects against
            // multiple filters; we don't want to delete the other ones.
            // update: also trimming extra whitespace around filter.

            var ieOpacity = Math.round(100 * opacity);
            var alphaFilter = "";
            if (ieOpacity < 100 || ie9EarlierForce) {
                alphaFilter = "alpha(opacity=" + ieOpacity + ") ";
                //elmt.style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + ieOpacity + ") ";
            }

            var newFilterValue = BuildNewCss(finalFilter, [alphaReg], alphaFilter);

            SetStyleFilterIE(elmt, newFilterValue);
        }

        //if (!IsBrowserIE() || browserEngineVersion >= 9) 
        else {
            elmt.style.opacity = opacity == 1 ? "" : Math.round(opacity * 100) / 100;
        }
    };

    function SetStyleTransformInternal(elmt, transform) {
        var rotate = transform.$Rotate || 0;
        var scale = transform.$Scale || 1;

        if (IsBrowserIe9Earlier()) {
            var matrix = self.$CreateMatrix(rotate / 180 * Math.PI, scale, scale);
            SetStyleMatrixIE(elmt, (!rotate && scale == 1) ? null : matrix, self.$GetMatrixOffset(matrix, transform.$OriginalWidth, transform.$OriginalHeight));
        }
        else {
            //rotate(15deg) scale(.5) translateZ(0)
            var transformProperty = GetTransformProperty(elmt);
            if (transformProperty) {
                var transformValue = "rotate(" + rotate % 360 + "deg) scale(" + scale + ")";
                if ($JssorUtils$.$IsBrowserChrome() && webkitVersion > 535)
                    transformValue += " perspective(2000px)";

                elmt.style[transformProperty] = transformValue;
            }
        }
    }

    self.$SetStyleTransform = function (elmt, transform) {
        if (IsBrowserBadTransform()) {
            Delay(self.$CreateCallback(null, SetStyleTransformInternal, elmt, transform));
        }
        else {
            SetStyleTransformInternal(elmt, transform);
        }
    };

    self.$SetStyleTransformOrigin = function (elmt, transformOrigin) {
        var transformProperty = GetTransformProperty(elmt);

        if (transformProperty)
            elmt.style[transformProperty + "Origin"] = transformOrigin;
    };

    self.$SetStyleScale = function (elmt, scale) {

        if (IsBrowserIE() && browserEngineVersion < 9 || (browserEngineVersion < 10 && IsBrowserIeQuirks())) {
            elmt.style.zoom = (scale == 1) ? "" : scale;
        }
        else {
            var transformProperty = GetTransformProperty(elmt);

            if (transformProperty) {
                //rotate(15deg) scale(.5)
                var transformValue = "scale(" + scale + ")";

                var oldTransformValue = elmt.style[transformProperty];
                var scaleReg = new RegExp(/[\s]*scale\(.*?\)/g);

                var newTransformValue = BuildNewCss(oldTransformValue, [scaleReg], transformValue);

                elmt.style[transformProperty] = newTransformValue;
            }
        }
    };

    self.$EnableHWA = function (elmt) {
        if (!elmt.style[GetTransformProperty(elmt)] || elmt.style[GetTransformProperty(elmt)] == "none")
            elmt.style[GetTransformProperty(elmt)] = "perspective(2000px)";
    };

    self.$DisableHWA = function (elmt) {
        //if (force || elmt.style[GetTransformProperty(elmt)] == "perspective(2000px)")
        elmt.style[GetTransformProperty(elmt)] = "none";
    };

    self.$GetStyleFloat = function (elmt) {
        return IsBrowserIE() ? elmt.style.styleFloat : elmt.style.cssFloat;
    };

    self.$SetStyleFloat = function (elmt, float) {
        if (IsBrowserIE())
            elmt.style.styleFloat = float;
        else
            elmt.style.cssFloat = float;
    };

    var ie8OffsetWidth = 0;
    var ie8OffsetHeight = 0;
    var ie8WindowResizeCallbackHandlers;
    //var ie8LastVerticalScrollbar;
    //var toggleInfo = "";

    function Ie8WindowResizeFilter(window) {

        var trigger = true;

        var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);
        if (checkElement) {
            //check vertical bar
            //var hasVerticalBar = checkElement.scrollHeight > checkElement.clientHeight;
            //var verticalBarToggle = hasVerticalBar != ie8LastVerticalScrollbar;
            //ie8LastVerticalScrollbar = hasVerticalBar;

            var widthChange = checkElement.offsetWidth - ie8OffsetWidth;
            var heightChange = checkElement.offsetHeight - ie8OffsetHeight;
            if (widthChange || heightChange) {

                ie8OffsetWidth += widthChange;
                ie8OffsetHeight += heightChange;
            }
            else
                trigger = false;
        }

        trigger && each(ie8WindowResizeCallbackHandlers, function (handler) {
            handler();
        });
    }

    self.$OnWindowResize = function (window, handler) {

        if (IsBrowserIE() && browserEngineVersion < 9) {
            if (!ie8WindowResizeCallbackHandlers) {
                ie8WindowResizeCallbackHandlers = [handler];
                handler = self.$CreateCallback(null, Ie8WindowResizeFilter, window);
            }
            else {
                ie8WindowResizeCallbackHandlers.push(handler);
                return;
            }
        }

        self.$AddEvent(window, "resize", handler);
    };

    self.$AddEvent = function (elmt, eventName, handler, useCapture) {
        elmt = self.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.addEventListener) {
            if (eventName == "mousewheel") {
                elmt.addEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to add the mousewheel -- not a mistake!
            // self is for opera, since it uses onmousewheel but needs addEventListener.
            elmt.addEventListener(eventName, handler, useCapture);
        }
        else if (elmt.attachEvent) {
            elmt.attachEvent("on" + eventName, handler);
            if (useCapture && elmt.setCapture) {
                elmt.setCapture();
            }
        }

        $JssorDebug$.$Execute(function () {
            if (!elmt.addEventListener && !elmt.attachEvent) {
                $JssorDebug$.$Fail("Unable to attach event handler, no known technique.");
            }
        });

    };

    self.$RemoveEvent = function (elmt, eventName, handler, useCapture) {
        elmt = self.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.removeEventListener) {
            if (eventName == "mousewheel") {
                elmt.removeEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to remove the mousewheel -- not a mistake!
            // self is for opera, since it uses onmousewheel but needs removeEventListener.
            elmt.removeEventListener(eventName, handler, useCapture);
        }
        else if (elmt.detachEvent) {
            elmt.detachEvent("on" + eventName, handler);
            if (useCapture && elmt.releaseCapture) {
                elmt.releaseCapture();
            }
        }

        $JssorDebug$.$Execute(function () {
            if (!elmt.removeEventListener && !elmt.detachEvent) {
                $JssorDebug$.$Fail("Unable to detach event handler, no known technique.");
            }
        });
    };

    self.$FireEvent = function (elmt, eventName) {
        //var document = elmt.document;

        $JssorDebug$.$Execute(function () {
            if (!document.createEvent && !document.createEventObject) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }

            if (!elmt.dispatchEvent && !elmt.fireEvent) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }
        });

        var evento;

        if (document.createEvent) {
            evento = document.createEvent("HTMLEvents");
            evento.initEvent(eventName, false, false);
            elmt.dispatchEvent(evento);
        }
        else {
            var ieEventName = "on" + eventName;
            evento = document.createEventObject();
            //event.eventType = ieEventName;
            //event.eventName = ieEventName;

            elmt.fireEvent(ieEventName, evento);
        }
    };

    self.$AddEventBrowserMouseUp = function (handler, userCapture) {
        self.$AddEvent((IsBrowserIe9Earlier()) ? document : window, "mouseup", handler, userCapture);
    };

    self.$RemoveEventBrowserMouseUp = function (handler, userCapture) {
        self.$RemoveEvent((IsBrowserIe9Earlier()) ? document : window, "mouseup", handler, userCapture);
    };

    self.$AddEventBrowserMouseDown = function (handler, userCapture) {
        self.$AddEvent((IsBrowserIe9Earlier()) ? document : window, "mousedown", handler, userCapture);
    };

    self.$RemoveEventBrowserMouseDown = function (handler, userCapture) {
        self.$RemoveEvent((IsBrowserIe9Earlier()) ? document : window, "mousedown", handler, userCapture);
    };

    self.$CancelEvent = function (event) {
        event = self.$GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.preventDefault) {
            event.preventDefault();     // W3C for preventing default
        }

        event.cancel = true;            // legacy for preventing default
        event.returnValue = false;      // IE for preventing default
    };

    self.$StopEvent = function (event) {
        event = self.$GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.stopPropagation) {
            event.stopPropagation();    // W3C for stopping propagation
        }

        event.cancelBubble = true;      // IE for stopping propagation
    };

    self.$CreateCallback = function (object, method) {
        // create callback args
        var initialArgs = [];
        for (var i = 2; i < arguments.length; i++) {
            initialArgs.push(arguments[i]);
        }

        // create closure to apply method
        var callback = function () {
            // concatenate new args, but make a copy of initialArgs first
            var args = initialArgs.concat([]);
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            return method.apply(object, args);
        };

        $JssorDebug$.$LiveStamp(callback, "callback_" + ($JssorUtils$.$GetNow() & 11111111));

        return callback;
    };

    var _Freeer;
    self.$FreeElement = function (elmt) {
        if (!_Freeer)
            _Freeer = self.$CreateDivElement();

        if (elmt) {
            $JssorUtils$.$AppendChild(_Freeer, elmt);
            $JssorUtils$.$ClearInnerHtml(_Freeer);
        }
    };

    self.$SetInnerText = function (elmt, text) {
        var textNode = document.createTextNode(text);
        self.$ClearInnerHtml(elmt);
        elmt.appendChild(textNode);
    };

    self.$GetInnerText = function (elmt) {
        return elmt.textContent || elmt.innerText;
    };

    self.$GetInnerHtml = function (elmt) {
        return elmt.innerHTML;
    };

    self.$SetInnerHtml = function (elmt, html) {
        elmt.innerHTML = html;
    };

    self.$ClearInnerHtml = function (elmt) {
        elmt.innerHTML = "";
    };

    self.$EncodeHtml = function (text) {
        var div = self.$CreateDivElement();
        self.$SetInnerText(div, text);
        return self.$GetInnerHtml(div);
    };

    self.$DecodeHtml = function (html) {
        var div = self.$CreateDivElement();
        self.$SetInnerHtml(div, html);
        return self.$GetInnerText(div);
    };

    self.$SelectElement = function (elmt) {
        var userSelection;
        if (window.getSelection) {
            //W3C default
            userSelection = window.getSelection();
        }
        var theRange = null;
        if (document.createRange) {
            theRange = document.createRange();
            theRange.selectNode(elmt);
        }
        else {
            theRange = document.body.createTextRange();
            theRange.moveToElementText(elmt);
            theRange.select();
        }
        //set user selection
        if (userSelection)
            userSelection.addRange(theRange);
    };

    self.$DeselectElements = function () {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    };

    self.$GetChildren = function (elmt) {
        var children = [];

        for (var tmpEl = elmt.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
            if (tmpEl.nodeType == 1) {
                children.push(tmpEl);
            }
        }

        return children;
    };

    function FindFirstChildByAttribute(elmt, attrValue, attrName, deep) {
        if (!attrName)
            attrName = "u";

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.getAttribute(attrName) == attrValue)
                    return elmt;

                if (deep) {
                    var childRet = FindFirstChildByAttribute(elmt, attrValue, attrName, deep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    self.$FindFirstChildByAttribute = FindFirstChildByAttribute;

    function FindChildrenByAttribute(elmt, attrValue, attrName, deep) {
        if (!attrName)
            attrName = "u";

        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.getAttribute(attrName) == attrValue)
                    ret.push(elmt);

                if (deep) {
                    var childRet = FindChildrenByAttribute(elmt, attrValue, attrName, deep);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    self.$FindChildrenByAttribute = FindChildrenByAttribute;

    function FindFirstChildByTag(elmt, tagName, deep) {

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.tagName == tagName)
                    return elmt;

                if (deep) {
                    var childRet = FindFirstChildByTag(elmt, tagName, deep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    self.$FindFirstChildByTag = FindFirstChildByTag;

    function FindChildrenByTag(elmt, tagName, deep) {
        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (!tagName || elmt.tagName == tagName)
                    ret.push(elmt);

                if (deep) {
                    var childRet = FindChildrenByTag(elmt, tagName, true);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    self.$FindChildrenByTag = FindChildrenByTag;

    self.$GetElementsByTagName = function (elmt, tagName) {
        return elmt.getElementsByTagName(tagName);
    };

    self.$Extend = function (target) {
        for (var i = 1; i < arguments.length; i++) {

            var options = arguments[i];

            // Only deal with non-null/undefined values
            if (options) {
                // Extend the base object
                for (var name in options) {
                    target[name] = options[name];
                }
            }
        }

        // Return the modified object
        return target;
    };

    self.$Unextend = function (target, options) {
        $JssorDebug$.$Assert(options);

        var unextended = {};

        // Extend the base object
        for (var name in target) {
            if (target[name] != options[name]) {
                unextended[name] = target[name];
            }
        }

        // Return the modified object
        return unextended;
    };

    self.$IsUndefined = function (obj) {
        return type(obj) == "undefined";
    };

    self.$IsFunction = function (obj) {
        return type(obj) == "function";
    };

    self.$IsArray = Array.isArray || function (obj) {
        return type(obj) == "array";
    };

    self.$IsString = function (obj) {
        return type(obj) == "string";
    };

    self.$IsNumeric = function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
    };

    self.$IsWindow = function (obj) {
        return obj != null && obj == obj.window;
    };

    self.$Type = type;

    // args is for internal usage only
    self.$Each = each;

    self.$IsPlainObject = isPlainObject;

    self.$CreateDivElement = function (doc) {
        return self.$CreateElement("DIV", doc);
    };

    self.$CreateSpanElement = function (doc) {
        return self.$CreateElement("SPAN", doc);
    };

    self.$CreateElement = function (tagName, doc) {
        doc = doc || document;
        return doc.createElement(tagName);
    };

    self.$EmptyFunction = function () { };

    self.$GetAttribute = function (elmt, name) {
        return elmt.getAttribute(name);
    };

    self.$SetAttribute = function (elmt, name, value) {
        elmt.setAttribute(name, value);
    };

    self.$GetClassName = function (elmt) {
        return elmt.className;
    };

    self.$SetClassName = function (elmt, className) {
        elmt.className = className ? className : "";
    };

    self.$GetStyleCursor = function (elmt) {
        return elmt.style.cursor;
    };

    self.$SetStyleCursor = function (elmt, cursor) {
        elmt.style.cursor = cursor;
    };

    self.$GetStyleDisplay = function (elmt) {
        return elmt.style.display;
    };

    self.$SetStyleDisplay = function (elmt, display) {
        elmt.style.display = display || "";
    };

    self.$GetStyleOverflow = function (elmt) {
        return elmt.style.overflow;
    };

    self.$SetStyleOverflow = function (elmt, overflow) {
        elmt.style.overflow = overflow;
    };

    self.$GetStyleOverflowX = function (elmt) {
        return elmt.style.overflowX;
    };

    self.$SetStyleOverflowX = function (elmt, overflow) {
        elmt.style.overflowX = overflow;
    };

    self.$GetStyleOverflowY = function (elmt) {
        return elmt.style.overflowY;
    };

    self.$SetStyleOverflowY = function (elmt, overflow) {
        elmt.style.overflowY = overflow;
    };

    self.$GetParentNode = function (elmt) {
        return elmt.parentNode;
    };

    self.$HideElement = function (elmt) {
        self.$SetStyleDisplay(elmt, "none");
    };

    self.$HideElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            self.$HideElement(elmts[i]);
        }
    };

    self.$ShowElement = function (elmt, show) {
        self.$SetStyleDisplay(elmt, show == false ? "none" : "");
    };

    self.$ShowElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            self.$ShowElement(elmts[i]);
        }
    };

    self.$GetStylePosition = function (elmt) {
        return elmt.style.position;
    };

    self.$SetStylePosition = function (elmt, position) {
        elmt.style.position = position;
    };

    self.$GetStyleTop = function (elmt) {
        return parseInt(elmt.style.top, 10);
    };

    self.$SetStyleTop = function (elmt, top) {
        elmt.style.top = top + "px";
    };

    self.$GetStyleRight = function (elmt) {
        return parseInt(elmt.style.right, 10);
    };

    self.$SetStyleRight = function (elmt, right) {
        elmt.style.right = right + "px";
    };

    self.$GetStyleBottom = function (elmt) {
        return parseInt(elmt.style.bottom, 10);
    };

    self.$SetStyleBottom = function (elmt, bottom) {
        elmt.style.bottom = bottom + "px";
    };

    self.$GetStyleLeft = function (elmt) {
        return parseInt(elmt.style.left, 10);
    };

    self.$SetStyleLeft = function (elmt, left) {
        elmt.style.left = left + "px";
    };

    self.$GetStyleWidth = function (elmt) {
        return parseInt(elmt.style.width, 10);
    };

    self.$SetStyleWidth = function (elmt, width) {
        elmt.style.width = Math.max(width, 0) + "px";
    };

    self.$GetStyleHeight = function (elmt) {
        return parseInt(elmt.style.height, 10);
    };

    self.$SetStyleHeight = function (elmt, height) {
        elmt.style.height = Math.max(height, 0) + "px";
    };

    self.$GetStyleCssText = function (elmt) {
        return elmt.style.cssText;
    };

    self.$SetStyleCssText = function (elmt, cssText) {
        elmt.style.cssText = cssText;
    };

    self.$RemoveAttribute = function (elmt, attrbuteName) {
        elmt.removeAttribute(attrbuteName);
    };

    self.$GetBorderWidth = function (elmt) {
        return parseInt(elmt.style.borderWidth, 10);
    };

    self.$SetBorderWdith = function (elmt, width) {
        elmt.style.width = width + "px";
    };

    self.$GetStyleMarginLeft = function (elmt) {
        return parseInt(elmt.style.marginLeft, 10) || 0;
    };

    self.$SetStyleMarginLeft = function (elmt, marginLeft) {
        elmt.style.marginLeft = marginLeft + "px";
    };

    self.$GetStyleMarginTop = function (elmt) {
        return parseInt(elmt.style.marginTop, 10) || 0;
    };

    self.$SetStyleMarginTop = function (elmt, marginTop) {
        elmt.style.marginTop = marginTop + "px";
    };

    self.$GetStyleMarginBottom = function (elmt) {
        return parseInt(elmt.style.marginBottom, 10) || 0;
    };

    self.$SetStyleMarginBottom = function (elmt, marginBottom) {
        elmt.style.marginBottom = marginBottom + "px";
    };

    self.$GetStyleMarginRight = function (elmt) {
        return parseInt(elmt.style.marginRight, 10) || 0;
    };

    self.$SetStyleMarginRight = function (elmt, marginRight) {
        elmt.style.marginRight = marginRight + "px";
    };

    self.$GetStyleBorder = function (elmt) {
        return elmt.style.border;
    };

    self.$SetStyleBorder = function (elmt, border) {
        elmt.style.border = border;
    };

    self.$GetStyleBorderWidth = function (elmt) {
        return parseInt(elmt.style.borderWidth);
    };

    self.$SetStyleBorderWidth = function (elmt, borderWidth) {
        elmt.style.borderWidth = borderWidth + "px";
    };

    self.$GetStyleBorderStyle = function (elmt) {
        return elmt.style.borderStyle;
    };

    self.$SetStyleBorderStyle = function (elmt, borderStyle) {
        elmt.style.borderStyle = borderStyle;
    };

    self.$GetStyleBorderColor = function (elmt) {
        return elmt.style.borderColor;
    };

    self.$SetStyleBorderColor = function (elmt, borderColor) {
        elmt.style.borderColor = borderColor;
    };

    self.$GetStyleVibility = function (elmt) {
        return elmt.style.vibility;
    };

    self.$SetStyleVisibility = function (elmt, visibility) {
        elmt.style.visibility = visibility;
    };

    self.$GetStyleZIndex = function (elmt) {
        return parseInt(elmt.style.zIndex) || 0;
    };

    self.$SetStyleZIndex = function (elmt, zIndex) {
        elmt.style.zIndex = Math.ceil(zIndex);
    };

    self.$GetStyleBackgroundColor = function (elmt) {
        return elmt.style.backgroundColor;
    };

    self.$SetStyleBackgroundColor = function (elmt, backgroundColor) {
        elmt.style.backgroundColor = backgroundColor;
    };

    self.$GetStyleColor = function (elmt) {
        return elmt.style.color;
    };

    self.$SetStyleColor = function (elmt, color) {
        elmt.style.color = color;
    };

    self.$GetStyleBackgroundImage = function (elmt) {
        return elmt.style.backgroundImage;
    };

    self.$SetStyleBackgroundImage = function (elmt, backgroundImage) {
        elmt.style.backgroundImage = backgroundImage;
    };

    self.$CanClearClip = function () {
        //return !IsBrowserIE() || browserEngineVersion > 9 || (browserRuntimeVersion > 7 && !IsBrowserIeQuirks());
        return IsBrowserIE() && browserRuntimeVersion < 10;
    };

    self.$SetStyleClip = function (elmt, clip) {
        if (clip) {
            elmt.style.clip = "rect(" + Math.round(clip.$Top) + "px " + Math.round(clip.$Right) + "px " + Math.round(clip.$Bottom) + "px " + Math.round(clip.$Left) + "px)";
        }
        else {
            var cssText = self.$GetStyleCssText(elmt);
            var clipRegs = [
                new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
                new RegExp(/[\s]*cliptop: .*?[;]?/i),
                new RegExp(/[\s]*clipright: .*?[;]?/i),
                new RegExp(/[\s]*clipbottom: .*?[;]?/i),
                new RegExp(/[\s]*clipleft: .*?[;]?/i)
            ];

            var newCssText = BuildNewCss(cssText, clipRegs, "");

            $JssorUtils$.$SetStyleCssText(elmt, newCssText);
        }
    };

    self.$GetStyleZoom = function (elmt) {
        return elmt.style.zoom;
    };

    self.$SetStyleZoom = function (elmt, zoom) {
        return elmt.style.zoom = zoom;
    };

    self.$SetStyleClear = function (elmt, clear) {
        elmt.style.clear = clear;
    };

    self.$GetNow = function () {
        return new Date().getTime();
    };

    self.$AppendChild = function (elmt, child) {
        elmt.appendChild(child);
    };

    self.$AppendChildren = function (elmt, children) {
        each(children, function (child) {
            self.$AppendChild(elmt, child);
        });
    };

    self.$InsertBefore = function (elmt, child, refObject) {
        elmt.insertBefore(child, refObject);
    };

    self.$InsertAdjacentHtml = function (elmt, where, text) {
        elmt.insertAdjacentHTML(where, text);
    };

    self.$RemoveChild = function (elmt, child) {
        elmt.removeChild(child);
    };

    self.$RemoveChildren = function (elmt, children) {
        each(children, function (child) {
            self.$RemoveChild(elmt, child);
        });
    };

    self.$ClearChildren = function (elmt) {
        self.$RemoveChildren(elmt, self.$GetChildren(elmt));
    };

    self.$ParseInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    self.$ParseFloat = function (str) {
        return parseFloat(str);
    };

    self.$IsChild = function (elmtA, elmtB) {
        var body = document.body;
        while (elmtB && elmtA != elmtB && body != elmtB) {
            try {
                elmtB = elmtB.parentNode;
            } catch (e) {
                // Firefox sometimes fires events for XUL elements, which throws
                // a "permission denied" error. so this is not a child.
                return false;
            }
        }
        return elmtA == elmtB;
    };

    self.$ToLowerCase = function (value) {
        if (value)
            value = value.toLowerCase();

        return value;
    };

    self.$CloneNode = function (elmt, deep) {
        return elmt.cloneNode(deep);
    };

    function LoadImageCallback(callback, image, abort) {
        //$JssorDebug$.$Execute(function () {
        //    Delay(self.$CreateCallback(null, function () {
        //        callback && callback(image, abort);
        //    }), 10000);
        //});

        image.onload = null;
        image.abort = null;

        if (callback)
            callback(image, abort);
    }

    self.$LoadImage = function (src, callback) {
        if (self.$IsBrowserOpera() && browserRuntimeVersion < 11.6 || !src) {
            LoadImageCallback(callback, null);
        }
        else {
            var image = new Image();
            image.onload = self.$CreateCallback(null, LoadImageCallback, callback, image);
            image.onabort = self.$CreateCallback(null, LoadImageCallback, callback, image, true);
            image.src = src;
        }
    };

    self.$LoadImages = function (imageElmts, mainImageElmt, callback) {

        var _ImageLoading = imageElmts.length + 1;

        function LoadImageCompleteEventHandler(image, abort) {
            _ImageLoading--;
            if (mainImageElmt && image && image.src == mainImageElmt.src)
                mainImageElmt = image;
            !_ImageLoading && callback && callback(mainImageElmt);
        }

        $JssorUtils$.$Each(imageElmts, function (imageElmt) {
            $JssorUtils$.$LoadImage(imageElmt.src, LoadImageCompleteEventHandler);
        });

        LoadImageCompleteEventHandler();
    };

    self.$BuildElement = function (template, tagName, replacer, createCopy) {
        if (createCopy)
            template = $JssorUtils$.$CloneNode(template, true);

        var templateHolders = $JssorUtils$.$GetElementsByTagName(template, tagName);
        for (var j = templateHolders.length - 1; j > -1; j--) {
            var templateHolder = templateHolders[j];
            var replaceItem = $JssorUtils$.$CloneNode(replacer, true);
            $JssorUtils$.$SetClassName(replaceItem, $JssorUtils$.$GetClassName(templateHolder));
            $JssorUtils$.$SetStyleCssText(replaceItem, $JssorUtils$.$GetStyleCssText(templateHolder));

            var thumbnailPlaceHolderParent = $JssorUtils$.$GetParentNode(templateHolder);
            $JssorUtils$.$InsertBefore(thumbnailPlaceHolderParent, replaceItem, templateHolder);
            $JssorUtils$.$RemoveChild(thumbnailPlaceHolderParent, templateHolder);
        }

        return template;
    };

    var _MouseDownButtons;
    var _MouseOverButtons = [];
    function JssorButtonEx(elmt) {
        var _Self = this;

        var _OriginClassName;

        var _IsMouseDown;   //class name 'dn'
        var _IsActive;      //class name 'av'

        function Highlight() {
            var className = _OriginClassName;

            if (_IsMouseDown) {
                className += 'dn';
            }
            else if (_IsActive) {
                className += "av";
            }

            $JssorUtils$.$SetClassName(elmt, className);
        }

        function OnMouseDown(event) {
            _MouseDownButtons.push(_Self);

            _IsMouseDown = true;

            Highlight();
        }

        _Self.$MouseUp = function () {
            ///	<summary>
            ///		Internal member function, do not use it.
            ///	</summary>
            ///	<private />

            _IsMouseDown = false;

            Highlight();
        };

        _Self.$Activate = function (activate) {
            _IsActive = activate;

            Highlight();
        };

        //JssorButtonEx Constructor
        {
            elmt = self.$GetElement(elmt);

            if (!_MouseDownButtons) {
                self.$AddEventBrowserMouseUp(function () {
                    var oldMouseDownButtons = _MouseDownButtons;
                    _MouseDownButtons = [];

                    each(oldMouseDownButtons, function (button) {
                        button.$MouseUp();
                    });
                });

                _MouseDownButtons = [];
            }

            _OriginClassName = self.$GetClassName(elmt);

            $JssorUtils$.$AddEvent(elmt, "mousedown", OnMouseDown);
        }
    }

    self.$Buttonize = function (elmt) {
        return new JssorButtonEx(elmt);
    };

    var StyleGetter = {
        $Opacity: self.$GetStyleOpacity,
        $Top: self.$GetStyleTop,
        $Left: self.$GetStyleLeft,
        $Width: self.$GetStyleWidth,
        $Height: self.$GetStyleHeight,
        $Position: self.$GetStylePosition,
        $Display: self.$GetStyleDisplay,
        $ZIndex: self.$GetStyleZIndex
    };

    //For Compression Only
    var _StyleSetterReserved = {
        $Opacity: self.$SetStyleOpacity,
        $Top: self.$SetStyleTop,
        $Left: self.$SetStyleLeft,
        $Width: self.$SetStyleWidth,
        $Height: self.$SetStyleHeight,
        $Display: self.$SetStyleDisplay,
        $Clip: self.$SetStyleClip,
        $MarginLeft: self.$SetStyleMarginLeft,
        $MarginTop: self.$SetStyleMarginTop,
        $Transform: self.$SetStyleTransform,
        $Position: self.$SetStylePosition,
        $ZIndex: self.$SetStyleZIndex
    };

    function GetStyleSetter() {
        return _StyleSetterReserved;
    }

    function GetStyleSetterEx() {
        GetStyleSetter();

        _StyleSetterReserved.$Transform = _StyleSetterReserved.$Transform;

        return _StyleSetterReserved;
    }

    self.$GetStyleSetter = GetStyleSetter;

    self.$GetStyleSetterEx = GetStyleSetterEx;

    self.$GetStyles = function (elmt, originStyles) {
        GetStyleSetter();

        var styles = {};

        each(originStyles, function (value, key) {
            if (StyleGetter[key]) {
                styles[key] = StyleGetter[key](elmt);
            }
        });

        return styles;
    };

    self.$SetStyles = function (elmt, styles) {
        var styleSetter = GetStyleSetter();

        each(styles, function (value, key) {
            styleSetter[key] && styleSetter[key](elmt, value);
        });
    };

    self.$SetStylesEx = function (elmt, styles) {
        GetStyleSetterEx();

        self.$SetStyles(elmt, styles);
    };

    $JssorMatrix$ = new function () {
        var _This = this;

        function Multiply(ma, mb) {
            var acs = ma[0].length;
            var rows = ma.length;
            var cols = mb[0].length;

            var matrix = [];

            for (var r = 0; r < rows; r++) {
                var row = matrix[r] = [];
                for (var c = 0; c < cols; c++) {
                    var unitValue = 0;

                    for (var ac = 0; ac < acs; ac++) {
                        unitValue += ma[r][ac] * mb[ac][c];
                    }

                    row[c] = unitValue;
                }
            }

            return matrix;
        }

        _This.$ScaleX = function (matrix, sx) {
            return _This.$ScaleXY(matrix, sx, 0);
        };

        _This.$ScaleY = function (matrix, sy) {
            return _This.$ScaleXY(matrix, 0, sy);
        };

        _This.$ScaleXY = function (matrix, sx, sy) {
            return Multiply(matrix, [[sx, 0], [0, sy]]);
        };

        _This.$TransformPoint = function (matrix, p) {
            var pMatrix = Multiply(matrix, [[p.x], [p.y]]);

            return new $JssorPoint$(pMatrix[0][0], pMatrix[1][0]);
        };
    };

    self.$CreateMatrix = function (alpha, scaleX, scaleY) {
        var cos = Math.cos(alpha);
        var sin = Math.sin(alpha);
        //var r11 = cos;
        //var r21 = sin;
        //var r12 = -sin;
        //var r22 = cos;

        //var m11 = cos * scaleX;
        //var m12 = -sin * scaleY;
        //var m21 = sin * scaleX;
        //var m22 = cos * scaleY;

        return [[cos * scaleX, -sin * scaleY], [sin * scaleX, cos * scaleY]];
    };

    self.$GetMatrixOffset = function (matrix, width, height) {
        var p1 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(-width / 2, -height / 2));
        var p2 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(width / 2, -height / 2));
        var p3 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(width / 2, height / 2));
        var p4 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(-width / 2, height / 2));

        return new $JssorPoint$(Math.min(p1.x, p2.x, p3.x, p4.x) + width / 2, Math.min(p1.y, p2.y, p3.y, p4.y) + height / 2);
    };
};

$JssorAnimator$ = function (delay, duration, options, elmt, fromStyles, toStyles) {
    delay = delay || 0;

    var _This = this;
    var _AutoPlay;
    var _Hiden;
    var _CombineMode;
    var _PlayToPosition;
    var _PlayDirection;
    var _NoStop;
    var _TimeStampLastFrame = 0;

    var _SubEasings;
    var _SubRounds;
    var _SubDurings;
    var _Callback;

    var _Position_Current = 0;
    var _Position_Display = 0;
    var _Hooked;

    var _Position_InnerBegin = delay;
    var _Position_InnerEnd = delay + duration;
    var _Position_OuterBegin;
    var _Position_OuterEnd;
    var _LoopLength;

    var _NestedAnimators = [];
    var _StyleSetter;

    function GetPositionRange(position, begin, end) {
        var range = 0;

        if (position < begin)
            range = -1;

        else if (position > end)
            range = 1;

        return range;
    }

    function GetInnerPositionRange(position) {
        return GetPositionRange(position, _Position_InnerBegin, _Position_InnerEnd);
    }

    function GetOuterPositionRange(position) {
        return GetPositionRange(position, _Position_OuterBegin, _Position_OuterEnd);
    }

    function Shift(offset) {
        _Position_OuterBegin += offset;
        _Position_OuterEnd += offset;
        _Position_InnerBegin += offset;
        _Position_InnerEnd += offset;

        _Position_Current += offset;
        _Position_Display += offset;

        $JssorUtils$.$Each(_NestedAnimators, function (animator) {
            animator, animator.$Shift(offset);
        });
    }

    function Locate(position, relative) {
        var offset = position - _Position_OuterBegin + delay * relative;

        Shift(offset);

        //$JssorDebug$.$Execute(function () {
        //    _This.$Position_InnerBegin = _Position_InnerBegin;
        //    _This.$Position_InnerEnd = _Position_InnerEnd;
        //    _This.$Position_OuterBegin = _Position_OuterBegin;
        //    _This.$Position_OuterEnd = _Position_OuterEnd;
        //});

        return _Position_OuterEnd;
    }

    function GoToPosition(positionOuter, force) {
        var trimedPositionOuter = positionOuter;

        if (_LoopLength && (trimedPositionOuter >= _Position_OuterEnd || trimedPositionOuter <= _Position_OuterBegin)) {
            trimedPositionOuter = ((trimedPositionOuter - _Position_OuterBegin) % _LoopLength + _LoopLength) % _LoopLength + _Position_OuterBegin;
        }

        if (!_Hooked || _NoStop || force || _Position_Current != trimedPositionOuter) {

            var positionToDisplay = Math.min(trimedPositionOuter, _Position_OuterEnd);
            positionToDisplay = Math.max(positionToDisplay, _Position_OuterBegin);

            if (!_Hooked || _NoStop || force || positionToDisplay != _Position_Display) {
                if (toStyles) {
                    var currentStyles = toStyles;

                    if (fromStyles) {
                        var interPosition = (positionToDisplay - _Position_InnerBegin) / (duration || 1);
                        if (options.$Optimize && $JssorUtils$.$IsBrowserChrome() && duration)
                            interPosition = Math.round(interPosition * duration / 16) / duration * 16;
                        if (options.$Reverse)
                            interPosition = 1 - interPosition;

                        currentStyles = {};

                        for (var key in toStyles) {
                            var round = _SubRounds[key] || 1;
                            var during = _SubDurings[key] || [0, 1];
                            var propertyInterPosition = (interPosition - during[0]) / during[1];
                            propertyInterPosition = Math.min(Math.max(propertyInterPosition, 0), 1);
                            propertyInterPosition = propertyInterPosition * round;
                            var floorPosition = Math.floor(propertyInterPosition);
                            if (propertyInterPosition != floorPosition)
                                propertyInterPosition -= floorPosition;

                            var easing = _SubEasings[key] || _SubEasings.$Default;
                            var easingValue = easing(propertyInterPosition);
                            var currentPropertyValue;
                            var value = fromStyles[key];
                            var toValue = toStyles[key];

                            if ($JssorUtils$.$IsNumeric(toValue)) {
                                currentPropertyValue = value + (toValue - value) * easingValue;
                            }
                            else {
                                currentPropertyValue = $JssorUtils$.$Extend({ $Offset: {} }, fromStyles[key]);

                                $JssorUtils$.$Each(toValue.$Offset, function (rectX, n) {
                                    var offsetValue = rectX * easingValue;
                                    currentPropertyValue.$Offset[n] = offsetValue;
                                    currentPropertyValue[n] += offsetValue;
                                });
                            }
                            currentStyles[key] = currentPropertyValue;
                        }
                    }

                    if (fromStyles.$Zoom) {
                        currentStyles.$Transform = { $Rotate: currentStyles.$Rotate || 0, $Scale: currentStyles.$Zoom, $OriginalWidth: options.$OriginalWidth, $OriginalHeight: options.$OriginalHeight };
                    }

                    if (toStyles.$Clip && options.$Move) {
                        var styleFrameNClipOffset = currentStyles.$Clip.$Offset;

                        var offsetY = (styleFrameNClipOffset.$Top || 0) + (styleFrameNClipOffset.$Bottom || 0);
                        var offsetX = (styleFrameNClipOffset.$Left || 0) + (styleFrameNClipOffset.$Right || 0);

                        currentStyles.$Left = (currentStyles.$Left || 0) + offsetX;
                        currentStyles.$Top = (currentStyles.$Top || 0) + offsetY;
                        currentStyles.$Clip.$Left -= offsetX;
                        currentStyles.$Clip.$Right -= offsetX;
                        currentStyles.$Clip.$Top -= offsetY;
                        currentStyles.$Clip.$Bottom -= offsetY;
                    }

                    if (currentStyles.$Clip && $JssorUtils$.$CanClearClip() && !currentStyles.$Clip.$Top && !currentStyles.$Clip.$Left && (currentStyles.$Clip.$Right == options.$OriginalWidth) && (currentStyles.$Clip.$Bottom == options.$OriginalHeight))
                        currentStyles.$Clip = null;

                    $JssorUtils$.$Each(currentStyles, function (value, key) {
                        _StyleSetter[key] && _StyleSetter[key](elmt, value);
                    });
                }

                _This.$OnInnerOffsetChange(_Position_Display - _Position_InnerBegin, positionToDisplay - _Position_InnerBegin);
            }

            _Position_Display = positionToDisplay;

            $JssorUtils$.$Each(_NestedAnimators, function (animator, i) {
                var nestedAnimator = positionOuter < _Position_Current ? _NestedAnimators[_NestedAnimators.length - i - 1] : animator;
                nestedAnimator.$GoToPosition(positionOuter, force);
            });

            var positionOld = _Position_Current;
            var positionNew = positionOuter;

            _Position_Current = trimedPositionOuter;
            _Hooked = true;

            _This.$OnPositionChange(positionOld, positionNew);
        }
    }

    function Join(animator, combineMode) {
        ///	<summary>
        ///		Combine another animator as nested animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        ///	<param name="combineMode" type="int">
        ///		0: parallel - place the animator parallel to this animator.
        ///		1: chain - chain the animator at the _Position_InnerEnd of this animator.
        ///	</param>
        $JssorDebug$.$Execute(function () {
            if (combineMode !== 0 && combineMode !== 1)
                $JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.");
        });

        if (combineMode)
            animator.$Locate(_Position_OuterEnd, 1);

        _Position_OuterEnd = Math.max(_Position_OuterEnd, animator.$GetPosition_OuterEnd());
        _NestedAnimators.push(animator);
    }

    function PlayFrame() {
        if (_AutoPlay) {
            var now = $JssorUtils$.$GetNow();
            var timeOffset = Math.min(now - _TimeStampLastFrame, $JssorUtils$.$IsBrowserOpera() ? 80 : 20);
            var timePosition = _Position_Current + timeOffset * _PlayDirection;
            _TimeStampLastFrame = now;

            if (timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection)
                timePosition = _PlayToPosition;

            GoToPosition(timePosition);

            if (!_NoStop && timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection) {
                Stop(_Callback);
            }
            else {
                $JssorUtils$.$Delay(PlayFrame, options.$Interval);
            }
        }
    }

    function PlayToPosition(toPosition, callback, noStop) {
        if (!_AutoPlay) {
            _AutoPlay = true;
            _NoStop = noStop
            _Callback = callback;
            toPosition = Math.max(toPosition, _Position_OuterBegin);
            toPosition = Math.min(toPosition, _Position_OuterEnd);
            _PlayToPosition = toPosition;
            _PlayDirection = _PlayToPosition < _Position_Current ? -1 : 1;
            _This.$OnStart();
            _TimeStampLastFrame = $JssorUtils$.$GetNow();
            PlayFrame();
        }
    }

    function Stop(callback) {
        if (_AutoPlay) {
            _NoStop = _AutoPlay = _Callback = false;
            _This.$OnStop();

            if (callback)
                callback();
        }
    }

    _This.$Play = function (positionLength, callback, noStop) {
        PlayToPosition(positionLength ? _Position_Current + positionLength : _Position_OuterEnd, callback, noStop);
    };

    _This.$PlayToPosition = function (position, callback, noStop) {
        PlayToPosition(position, callback, noStop);
    };

    _This.$PlayToBegin = function (callback, noStop) {
        PlayToPosition(_Position_OuterBegin, callback, noStop);
    };

    _This.$PlayToEnd = function (callback, noStop) {
        PlayToPosition(_Position_OuterEnd, callback, noStop);
    };

    _This.$Stop = function () {
        Stop();
    };

    _This.$Continue = function (toPosition) {
        PlayToPosition(toPosition);
    };

    _This.$GetPosition = function () {
        return _Position_Current;
    };

    _This.$GetPlayToPosition = function () {
        return _PlayToPosition;
    };

    _This.$GetPosition_Display = function () {
        return _Position_Display;
    };

    _This.$GoToPosition = GoToPosition;

    _This.$GoToBegin = function () {
        GoToPosition(_Position_OuterBegin, true);
    };

    _This.$GoToEnd = function () {
        GoToPosition(_Position_OuterEnd, true);
    };

    _This.$Move = function (offset) {
        GoToPosition(_Position_Current + offset);
    };

    _This.$CombineMode = function () {
        return _CombineMode;
    };

    _This.$GetDuration = function () {
        return duration;
    };

    _This.$IsPlaying = function () {
        return _AutoPlay;
    };

    _This.$IsOnTheWay = function () {
        return _Position_Current > _Position_InnerBegin && _Position_Current <= _Position_InnerEnd;
    };

    _This.$SetLoopLength = function (length) {
        _LoopLength = length;
    };

    _This.$Locate = Locate;

    _This.$Shift = Shift;

    _This.$Join = Join;

    _This.$Combine = function (animator) {
        ///	<summary>
        ///		Combine another animator parallel to this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 0);
    };

    _This.$Chain = function (animator) {
        ///	<summary>
        ///		Chain another animator at the _Position_InnerEnd of this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 1);
    };

    _This.$GetPosition_InnerBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerBegin;
    };

    _This.$GetPosition_InnerEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerEnd;
    };

    _This.$GetPosition_OuterBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterBegin;
    };

    _This.$GetPosition_OuterEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterEnd;
    };

    _This.$OnPositionChange = $JssorUtils$.$EmptyFunction;
    _This.$OnStart = $JssorUtils$.$EmptyFunction;
    _This.$OnStop = $JssorUtils$.$EmptyFunction;
    _This.$OnInnerOffsetChange = $JssorUtils$.$EmptyFunction;
    _This.$Version = $JssorUtils$.$GetNow();

    //Constructor`  1
    {
        options = $JssorUtils$.$Extend({
            $Interval: 15
        }, options);

        //Sodo statement, for development time intellisence only
        $JssorDebug$.$Execute(function () {
            options = $JssorUtils$.$Extend({
                $LoopLength: undefined,
                $Setter: undefined,
                $Easing: undefined
            }, options);
        });

        _LoopLength = options.$LoopLength;

        _StyleSetter = $JssorUtils$.$Extend({}, $JssorUtils$.$GetStyleSetter(), options.$Setter);

        _Position_OuterBegin = _Position_InnerBegin = delay;
        _Position_OuterEnd = _Position_InnerEnd = delay + duration;

        var _SubRounds = options.$Round || {};
        var _SubDurings = options.$During || {};
        _SubEasings = $JssorUtils$.$Extend({ $Default: $JssorUtils$.$IsFunction(options.$Easing) && options.$Easing || $JssorEasing$.$EaseSwing }, options.$Easing);
    }
};

function $JssorPlayerClass$() {

    var _SelfPlayer = this;
    var _PlayerControllers = [];

    function PlayerController(playerElement) {
        var _SelfPlayerController = this;
        var _PlayerInstance;
        var _PlayerInstantces = [];

        function OnPlayerInstanceDataAvailable(event) {
            var srcElement = $JssorUtils$.$GetEventSrcElement(event);
            _PlayerInstance = srcElement.pInstance;

            $JssorUtils$.$RemoveEvent(srcElement, "dataavailable", OnPlayerInstanceDataAvailable);
            $JssorUtils$.$Each(_PlayerInstantces, function (playerInstance) {
                if (playerInstance != _PlayerInstance) {
                    playerInstance.$Remove();
                }
            });

            playerElement.pTagName = _PlayerInstance.tagName;
            _PlayerInstantces = null;
        }

        function HandlePlayerInstance(playerInstanceElement) {
            var playerHandler;

            if (!playerInstanceElement.pInstance) {
                var playerHandlerAttribute = $JssorUtils$.$GetAttribute(playerInstanceElement, "pHandler");

                if ($JssorPlayer$[playerHandlerAttribute]) {
                    $JssorUtils$.$AddEvent(playerInstanceElement, "dataavailable", OnPlayerInstanceDataAvailable);
                    playerHandler = new $JssorPlayer$[playerHandlerAttribute](playerElement, playerInstanceElement);
                    _PlayerInstantces.push(playerHandler);

                    $JssorDebug$.$Execute(function () {
                        if ($JssorUtils$.$Type(playerHandler.$Remove) != "function") {
                            $JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '" + playerHandlerAttribute + "'.");
                        }
                    });
                }
            }

            return playerHandler;
        }

        _SelfPlayerController.$InitPlayerController = function () {
            if (!playerElement.pInstance && !HandlePlayerInstance(playerElement)) {

                var playerInstanceElements = $JssorUtils$.$GetChildren(playerElement);

                $JssorUtils$.$Each(playerInstanceElements, function (playerInstanceElement) {
                    HandlePlayerInstance(playerInstanceElement);
                });
            }
        };
    }

    _SelfPlayer.$EVT_SWITCH = 21;

    _SelfPlayer.$FetchPlayers = function (elmt) {
        elmt = elmt || document.body;

        var playerElements = $JssorUtils$.$FindChildrenByAttribute(elmt, "player", null, true);

        $JssorUtils$.$Each(playerElements, function (playerElement) {
            if (!_PlayerControllers[playerElement.pId]) {
                playerElement.pId = _PlayerControllers.length;
                _PlayerControllers.push(new PlayerController(playerElement));
            }
            var playerController = _PlayerControllers[playerElement.pId];
            playerController.$InitPlayerController();
        });
    };
};
/// <reference path="Jssor.Core.js" />
/// <reference path="Jssor.Utils.js" />

/*
* Jssor.Slider 16.0
* http://www.jssor.com/
* 
* TERMS OF USE - Jssor.Slider
* 
* Copyright 2014 Jssor
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var $JssorSlider$;
var $JssorSlideshowFormations$ = window.$JssorSlideshowFormations$ = {};
var $JssorSlideshowRunner$;

new function () {
    //Constants +++++++

    var COLUMN_INCREASE = 0;
    var COLUMN_DECREASE = 1;
    var ROW_INCREASE = 2;
    var ROW_DECREASE = 3;

    var DIRECTION_HORIZONTAL = 0x0003;
    var DIRECTION_VERTICAL = 0x000C;

    var TO_LEFT = 0x0001;
    var TO_RIGHT = 0x0002;
    var TO_TOP = 0x0004;
    var TO_BOTTOM = 0x0008;

    var FROM_LEFT = 0x0100;
    var FROM_TOP = 0x0200;
    var FROM_RIGHT = 0x0400;
    var FROM_BOTTOM = 0x0800;

    var ASSEMBLY_BOTTOM_LEFT = FROM_BOTTOM + TO_LEFT;
    var ASSEMBLY_BOTTOM_RIGHT = FROM_BOTTOM + TO_RIGHT;
    var ASSEMBLY_TOP_LEFT = FROM_TOP + TO_LEFT;
    var ASSEMBLY_TOP_RIGHT = FROM_TOP + TO_RIGHT;
    var ASSEMBLY_LEFT_TOP = FROM_LEFT + TO_TOP;
    var ASSEMBLY_LEFT_BOTTOM = FROM_LEFT + TO_BOTTOM;
    var ASSEMBLY_RIGHT_TOP = FROM_RIGHT + TO_TOP;
    var ASSEMBLY_RIGHT_BOTTOM = FROM_RIGHT + TO_BOTTOM;

    //Constants -------

    //Formation Definition +++++++
    function isToLeft(roadValue) {
        return (roadValue & TO_LEFT) == TO_LEFT;
    }

    function isToRight(roadValue) {
        return (roadValue & TO_RIGHT) == TO_RIGHT;
    }

    function isToTop(roadValue) {
        return (roadValue & TO_TOP) == TO_TOP;
    }

    function isToBottom(roadValue) {
        return (roadValue & TO_BOTTOM) == TO_BOTTOM;
    }

    function PushFormationOrder(arr, order, formationItem) {
        formationItem.push(order);
        arr[order] = arr[order] || [];
        arr[order].push(formationItem);
    }

    $JssorSlideshowFormations$.$FormationStraight = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var order;
        for (r = 0; r < rows; r++) {
            for (col = 0; col < cols; col++) {
                cr = r + ',' + col;
                switch (formationDirection) {
                    case ASSEMBLY_BOTTOM_LEFT:
                        order = il - (col * rows + (rl - r));
                        break;
                    case ASSEMBLY_RIGHT_TOP:
                        order = il - (r * cols + (cl - col));
                        break;
                    case ASSEMBLY_TOP_LEFT:
                        order = il - (col * rows + r);
                    case ASSEMBLY_LEFT_TOP:
                        order = il - (r * cols + col);
                        break;
                    case ASSEMBLY_BOTTOM_RIGHT:
                        order = col * rows + r;
                        break;
                    case ASSEMBLY_LEFT_BOTTOM:
                        order = r * cols + (cl - col);
                        break;
                    case ASSEMBLY_TOP_RIGHT:
                        order = col * rows + (rl - r);
                        break;
                    default:
                        order = r * cols + col;
                        break; //ASSEMBLY_RIGHT_BOTTOM
                }
                PushFormationOrder(a, order, [r, col]);
            }
        }

        return a;
    };

    $JssorSlideshowFormations$.$FormationSwirl = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var hit = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var courses;
        var course = 0;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
                col = cl;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_RIGHT_TOP:
                col = 0;
                r = rl;
                courses = [COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_TOP_LEFT:
                col = cl;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_LEFT_TOP:
                col = cl;
                r = rl;
                courses = [COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_BOTTOM_RIGHT:
                col = 0;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_LEFT_BOTTOM:
                col = cl;
                r = 0;
                courses = [COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_TOP_RIGHT:
                col = 0;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE];
                break;
            default:
                col = 0;
                r = 0;
                courses = [COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE];
                break; //ASSEMBLY_RIGHT_BOTTOM
        }
        i = 0;
        while (i < count) {
            cr = r + ',' + col;
            if (col >= 0 && col < cols && r >= 0 && r < rows && !hit[cr]) {
                //a[cr] = i++;
                hit[cr] = true;
                PushFormationOrder(a, i++, [r, col]);
            }
            else {
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col--;
                        break;
                    case ROW_INCREASE:
                        r--;
                        break;
                    case COLUMN_DECREASE:
                        col++;
                        break;
                    case ROW_DECREASE:
                        r++;
                        break;
                }
            }

            switch (courses[course % courses.length]) {
                case COLUMN_INCREASE:
                    col++;
                    break;
                case ROW_INCREASE:
                    r++;
                    break;
                case COLUMN_DECREASE:
                    col--;
                    break;
                case ROW_DECREASE:
                    r--;
                    break;
            }
        }
        return a;
    };

    $JssorSlideshowFormations$.$FormationZigZag = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        var courses;
        var course = 0;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
                col = cl;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_DECREASE, ROW_DECREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_RIGHT_TOP:
                col = 0;
                r = rl;
                courses = [COLUMN_INCREASE, ROW_DECREASE, COLUMN_DECREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_TOP_LEFT:
                col = cl;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_DECREASE, ROW_INCREASE, COLUMN_DECREASE];
                break;
            case ASSEMBLY_LEFT_TOP:
                col = cl;
                r = rl;
                courses = [COLUMN_DECREASE, ROW_DECREASE, COLUMN_INCREASE, ROW_DECREASE];
                break;
            case ASSEMBLY_BOTTOM_RIGHT:
                col = 0;
                r = 0;
                courses = [ROW_INCREASE, COLUMN_INCREASE, ROW_DECREASE, COLUMN_INCREASE];
                break;
            case ASSEMBLY_LEFT_BOTTOM:
                col = cl;
                r = 0;
                courses = [COLUMN_DECREASE, ROW_INCREASE, COLUMN_INCREASE, ROW_INCREASE];
                break;
            case ASSEMBLY_TOP_RIGHT:
                col = 0;
                r = rl;
                courses = [ROW_DECREASE, COLUMN_INCREASE, ROW_INCREASE, COLUMN_INCREASE];
                break;
            default:
                col = 0;
                r = 0;
                courses = [COLUMN_INCREASE, ROW_INCREASE, COLUMN_DECREASE, ROW_INCREASE];
                break; //ASSEMBLY_RIGHT_BOTTOM
        }
        i = 0;
        while (i < count) {
            cr = r + ',' + col;
            if (col >= 0 && col < cols && r >= 0 && r < rows && typeof (a[cr]) == 'undefined') {
                PushFormationOrder(a, i++, [r, col]);
                //a[cr] = i++;
                switch (courses[course % courses.length]) {
                    case COLUMN_INCREASE:
                        col++;
                        break;
                    case ROW_INCREASE:
                        r++;
                        break;
                    case COLUMN_DECREASE:
                        col--;
                        break;
                    case ROW_DECREASE:
                        r--;
                        break;
                }
            }
            else {
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col--;
                        break;
                    case ROW_INCREASE:
                        r--;
                        break;
                    case COLUMN_DECREASE:
                        col++;
                        break;
                    case ROW_DECREASE:
                        r++;
                        break;
                }
                switch (courses[course++ % courses.length]) {
                    case COLUMN_INCREASE:
                        col++;
                        break;
                    case ROW_INCREASE:
                        r++;
                        break;
                    case COLUMN_DECREASE:
                        col--;
                        break;
                    case ROW_DECREASE:
                        r--;
                        break;
                }
            }
        }
        return a;
    };

    $JssorSlideshowFormations$.$FormationStraightStairs = function (transition) {
        var cols = transition.$Cols;
        var rows = transition.$Rows;
        var formationDirection = transition.$Assembly;
        var count = transition.$Count;
        var a = [];
        var i = 0;
        var col = 0;
        var r = 0;
        var cl = cols - 1;
        var rl = rows - 1;
        var il = count - 1;
        var cr;
        switch (formationDirection) {
            case ASSEMBLY_BOTTOM_LEFT:
            case ASSEMBLY_TOP_RIGHT:
            case ASSEMBLY_TOP_LEFT:
            case ASSEMBLY_BOTTOM_RIGHT:
                var C = 0;
                var R = 0;
                break;
            case ASSEMBLY_LEFT_BOTTOM:
            case ASSEMBLY_RIGHT_TOP:
            case ASSEMBLY_LEFT_TOP:
            case ASSEMBLY_RIGHT_BOTTOM:
                var C = cl;
                var R = 0;
                break;
            default:
                formationDirection = ASSEMBLY_RIGHT_BOTTOM;
                var C = cl;
                var R = 0;
                break;
        }
        col = C;
        r = R;
        while (i < count) {
            cr = r + ',' + col;
            if (isToTop(formationDirection) || isToRight(formationDirection)) {
                PushFormationOrder(a, il - i++, [r, col]);
                //a[cr] = il - i++;
            }
            else {
                PushFormationOrder(a, i++, [r, col]);
                //a[cr] = i++;
            }
            switch (formationDirection) {
                case ASSEMBLY_BOTTOM_LEFT:
                case ASSEMBLY_TOP_RIGHT:
                    col--;
                    r++;
                    break;
                case ASSEMBLY_TOP_LEFT:
                case ASSEMBLY_BOTTOM_RIGHT:
                    col++;
                    r--;
                    break;
                case ASSEMBLY_LEFT_BOTTOM:
                case ASSEMBLY_RIGHT_TOP:
                    col--;
                    r--;
                    break;
                case ASSEMBLY_RIGHT_BOTTOM:
                case ASSEMBLY_LEFT_TOP:
                default:
                    col++;
                    r++;
                    break;
            }
            if (col < 0 || r < 0 || col > cl || r > rl) {
                switch (formationDirection) {
                    case ASSEMBLY_BOTTOM_LEFT:
                    case ASSEMBLY_TOP_RIGHT:
                        C++;
                        break;
                    case ASSEMBLY_LEFT_BOTTOM:
                    case ASSEMBLY_RIGHT_TOP:
                    case ASSEMBLY_TOP_LEFT:
                    case ASSEMBLY_BOTTOM_RIGHT:
                        R++;
                        break;
                    case ASSEMBLY_RIGHT_BOTTOM:
                    case ASSEMBLY_LEFT_TOP:
                    default:
                        C--;
                        break;
                }
                if (C < 0 || R < 0 || C > cl || R > rl) {
                    switch (formationDirection) {
                        case ASSEMBLY_BOTTOM_LEFT:
                        case ASSEMBLY_TOP_RIGHT:
                            C = cl;
                            R++;
                            break;
                        case ASSEMBLY_TOP_LEFT:
                        case ASSEMBLY_BOTTOM_RIGHT:
                            R = rl;
                            C++;
                            break;
                        case ASSEMBLY_LEFT_BOTTOM:
                        case ASSEMBLY_RIGHT_TOP: R = rl; C--;
                            break;
                        case ASSEMBLY_RIGHT_BOTTOM:
                        case ASSEMBLY_LEFT_TOP:
                        default:
                            C = 0;
                            R++;
                            break;
                    }
                    if (R > rl)
                        R = rl;
                    else if (R < 0)
                        R = 0;
                    else if (C > cl)
                        C = cl;
                    else if (C < 0)
                        C = 0;
                }
                r = R;
                col = C;
            }
        }
        return a;
    };

    $JssorSlideshowFormations$.$FormationSquare = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var dc;
        var dr;
        var cr;
        dc = cols < rows ? (rows - cols) / 2 : 0;
        dr = cols > rows ? (cols - rows) / 2 : 0;
        cr = Math.round(Math.max(cols / 2, rows / 2)) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, cr - Math.min(col + 1 + dc, r + 1 + dr, cols - col + dc, rows - r + dr), [r, col]);
        }
        return arr;
    };

    $JssorSlideshowFormations$.$FormationRectangle = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var cr;
        cr = Math.round(Math.min(cols / 2, rows / 2)) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, cr - Math.min(col + 1, r + 1, cols - col, rows - r), [r, col]);
        }
        return arr;
    };

    $JssorSlideshowFormations$.$FormationRandom = function (transition) {
        var a = [];
        var r, col, i;
        for (r = 0; r < transition.$Rows; r++) {
            for (col = 0; col < transition.$Cols; col++)
                PushFormationOrder(a, Math.ceil(100000 * Math.random()) % 13, [r, col]);
        }

        return a;
    };

    $JssorSlideshowFormations$.$FormationCircle = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(Math.sqrt(Math.pow(col - hc, 2) + Math.pow(r - hr, 2))), [r, col]);
        }
        return arr;
    };

    $JssorSlideshowFormations$.$FormationCross = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(Math.min(Math.abs(col - hc), Math.abs(r - hr))), [r, col]);
        }
        return arr;
    };

    $JssorSlideshowFormations$.$FormationRectangleCross = function (transition) {
        var cols = transition.$Cols || 1;
        var rows = transition.$Rows || 1;
        var arr = [];
        var i = 0;
        var col;
        var r;
        var hc = cols / 2 - 0.5;
        var hr = rows / 2 - 0.5;
        var cr = Math.max(hc, hr) + 1;
        for (col = 0; col < cols; col++) {
            for (r = 0; r < rows; r++)
                PushFormationOrder(arr, Math.round(cr - Math.max(hc - Math.abs(col - hc), hr - Math.abs(r - hr))) - 1, [r, col]);
        }
        return arr;
    };

    function GetFormation(transition) {

        var formationInstance = transition.$Formation(transition);

        return transition.$Reverse ? formationInstance.reverse() : formationInstance;

    } //GetFormation

    //var _PrototypeTransitions = [];
    function EnsureTransitionInstance(options, slideshowInterval) {

        var _SlideshowTransition = {
            $Interval: slideshowInterval,  //Delay to play next frame
            $Duration: 1, //Duration to finish the entire transition
            $Delay: 0,  //Delay to assembly blocks
            $Cols: 1,   //Number of columns
            $Rows: 1,   //Number of rows
            $Opacity: 0,   //Fade block or not
            $Zoom: 0,   //Zoom block or not
            $Clip: 0,   //Clip block or not
            $Move: false,   //Move block or not
            $SlideOut: false,   //Slide the previous slide out to display next slide instead
            $FlyDirection: 0,   //Specify fly transform with direction
            $Reverse: false,    //Reverse the assembly or not
            $Formation: $JssorSlideshowFormations$.$FormationRandom,    //Shape that assembly blocks as
            $Assembly: ASSEMBLY_RIGHT_BOTTOM,   //The way to assembly blocks
            $ChessMode: { $Column: 0, $Row: 0 },    //Chess move or fly direction
            $Easing: $JssorEasing$.$EaseSwing,  //Specify variation of speed during transition
            $Round: {},
            $Blocks: [],
            $During: {}
        };

        $JssorUtils$.$Extend(_SlideshowTransition, options);

        _SlideshowTransition.$Count = _SlideshowTransition.$Cols * _SlideshowTransition.$Rows;
        if ($JssorUtils$.$IsFunction(_SlideshowTransition.$Easing))
            _SlideshowTransition.$Easing = { $Default: _SlideshowTransition.$Easing };

        _SlideshowTransition.$FramesCount = Math.ceil(_SlideshowTransition.$Duration / _SlideshowTransition.$Interval);
        _SlideshowTransition.$EasingInstance = GetEasing(_SlideshowTransition);

        _SlideshowTransition.$GetBlocks = function (width, height) {
            width /= _SlideshowTransition.$Cols;
            height /= _SlideshowTransition.$Rows;
            var wh = width + 'x' + height;
            if (!_SlideshowTransition.$Blocks[wh]) {
                _SlideshowTransition.$Blocks[wh] = { $Width: width, $Height: height };
                for (var col = 0; col < _SlideshowTransition.$Cols; col++) {
                    for (var r = 0; r < _SlideshowTransition.$Rows; r++)
                        _SlideshowTransition.$Blocks[wh][r + ',' + col] = { $Top: r * height, $Right: col * width + width, $Bottom: r * height + height, $Left: col * width };
                }
            }

            return _SlideshowTransition.$Blocks[wh];
        };

        if (_SlideshowTransition.$Brother) {
            _SlideshowTransition.$Brother = EnsureTransitionInstance(_SlideshowTransition.$Brother, slideshowInterval);
            _SlideshowTransition.$SlideOut = true;
        }

        return _SlideshowTransition;
    }

    function GetEasing(transition) {
        var easing = transition.$Easing;
        if (!easing.$Default)
            easing.$Default = $JssorEasing$.$EaseSwing;

        var duration = transition.$FramesCount;

        var cache = easing.$Cache;
        if (!cache) {
            var enumerator = $JssorUtils$.$Extend({}, transition.$Easing, transition.$Round);
            cache = easing.$Cache = {};

            $JssorUtils$.$Each(enumerator, function (v, easingName) {
                var easingFunction = easing[easingName] || easing.$Default;
                var round = transition.$Round[easingName] || 1;

                if (!$JssorUtils$.$IsArray(easingFunction.$Cache))
                    easingFunction.$Cache = [];

                var easingFunctionCache = easingFunction.$Cache[duration] = easingFunction.$Cache[duration] || [];

                if (!easingFunctionCache[round]) {
                    easingFunctionCache[round] = [0];
                    for (var t = 1; t <= duration; t++) {
                        var tRound = t / duration * round;
                        var tRoundFloor = Math.floor(tRound);
                        if (tRound != tRoundFloor)
                            tRound -= tRoundFloor;
                        easingFunctionCache[round][t] = easingFunction(tRound);
                    }
                }

                cache[easingName] = easingFunctionCache;

            });
        }

        return cache;
    } //GetEasing

    //Formation Definition -------

    function JssorSlideshowPlayer(slideContainer, slideElement, slideTransition, beginTime, slideContainerWidth, slideContainerHeight) {
        var _Self = this;

        var _Block;
        var _StartStylesArr = {};
        var _AnimationStylesArrs = {};
        var _AnimationBlockItems = [];
        var _StyleStart;
        var _StyleEnd;
        var _StyleDif;
        var _ChessModeColumn = slideTransition.$ChessMode.$Column || 0;
        var _ChessModeRow = slideTransition.$ChessMode.$Row || 0;

        var _Blocks = slideTransition.$GetBlocks(slideContainerWidth, slideContainerHeight);
        var _FormationInstance = GetFormation(slideTransition);
        var _MaxOrder = _FormationInstance.length - 1;
        var _Period = slideTransition.$Duration + slideTransition.$Delay * _MaxOrder;
        var _EndTime = beginTime + _Period;

        var _SlideOut = slideTransition.$SlideOut;
        var _IsIn;

        _EndTime += $JssorUtils$.$IsBrowserChrome() ? 260 : 50;

        _Self.$EndTime = _EndTime;

        _Self.$ShowFrame = function (time) {
            time -= beginTime;

            var isIn = time < _Period;

            if (isIn || _IsIn) {
                _IsIn = isIn;

                if (!_SlideOut)
                    time = _Period - time;

                var frameIndex = Math.ceil(time / slideTransition.$Interval);

                $JssorUtils$.$Each(_AnimationStylesArrs, function (value, index) {

                    var itemFrameIndex = Math.max(frameIndex, value.$Min);
                    itemFrameIndex = Math.min(itemFrameIndex, value.length - 1);

                    if (value.$LastFrameIndex != itemFrameIndex) {
                        if (!value.$LastFrameIndex && !_SlideOut) {
                            $JssorUtils$.$ShowElement(_AnimationBlockItems[index]);
                        }
                        else if (itemFrameIndex == value.$Max && _SlideOut) {
                            $JssorUtils$.$HideElement(_AnimationBlockItems[index]);
                        }
                        value.$LastFrameIndex = itemFrameIndex;
                        $JssorUtils$.$SetStylesEx(_AnimationBlockItems[index], value[itemFrameIndex]);
                    }
                });
            }
        };

        function DisableHWA(elmt) {
            $JssorUtils$.$DisableHWA(elmt);

            var children = $JssorUtils$.$GetChildren(elmt);

            $JssorUtils$.$Each(children, function (child) {
                DisableHWA(child);
            });
        }

        //constructor
        {
            slideElement = $JssorUtils$.$CloneNode(slideElement, true);
            DisableHWA(slideElement);
            if ($JssorUtils$.$IsBrowserIe9Earlier()) {
                var hasImage = !slideElement["no-image"];
                var slideChildElements = $JssorUtils$.$FindChildrenByTag(slideElement, null, true);
                $JssorUtils$.$Each(slideChildElements, function (slideChildElement) {
                    if (hasImage || slideChildElement["jssor-slider"])
                        $JssorUtils$.$SetStyleOpacity(slideChildElement, $JssorUtils$.$GetStyleOpacity(slideChildElement), true);
                });
            }

            $JssorUtils$.$Each(_FormationInstance, function (formationItems, order) {
                $JssorUtils$.$Each(formationItems, function (formationItem) {
                    var row = formationItem[0];
                    var col = formationItem[1];
                    {
                        var columnRow = row + ',' + col;

                        var chessHorizontal = false;
                        var chessVertical = false;
                        var chessRotate = false;

                        if (_ChessModeColumn && col % 2) {
                            if ($JssorDirection$.$IsHorizontal(_ChessModeColumn)) {
                                chessHorizontal = !chessHorizontal;
                            }
                            if ($JssorDirection$.$IsVertical(_ChessModeColumn)) {
                                chessVertical = !chessVertical;
                            }

                            if (_ChessModeColumn & 16)
                                chessRotate = !chessRotate;
                        }

                        if (_ChessModeRow && row % 2) {
                            if ($JssorDirection$.$IsHorizontal(_ChessModeRow)) {
                                chessHorizontal = !chessHorizontal;
                            }
                            if ($JssorDirection$.$IsVertical(_ChessModeRow)) {
                                chessVertical = !chessVertical;
                            }
                            if (_ChessModeRow & 16)
                                chessRotate = !chessRotate;
                        }

                        slideTransition.$Top = slideTransition.$Top || (slideTransition.$Clip & 4);
                        slideTransition.$Bottom = slideTransition.$Bottom || (slideTransition.$Clip & 8);
                        slideTransition.$Left = slideTransition.$Left || (slideTransition.$Clip & 1);
                        slideTransition.$Right = slideTransition.$Right || (slideTransition.$Clip & 2);

                        var topBenchmark = chessVertical ? slideTransition.$Bottom : slideTransition.$Top;
                        var bottomBenchmark = chessVertical ? slideTransition.$Top : slideTransition.$Bottom;
                        var leftBenchmark = chessHorizontal ? slideTransition.$Right : slideTransition.$Left;
                        var rightBenchmark = chessHorizontal ? slideTransition.$Left : slideTransition.$Right;

                        //$JssorDebug$.$Execute(function () {
                        //    topBenchmark = bottomBenchmark = leftBenchmark = rightBenchmark = false;
                        //});

                        slideTransition.$Clip = topBenchmark || bottomBenchmark || leftBenchmark || rightBenchmark;

                        _StyleDif = {};
                        _StyleEnd = { $Top: 0, $Left: 0, $Opacity: 1, $Width: slideContainerWidth, $Height: slideContainerHeight };
                        _StyleStart = $JssorUtils$.$Extend({}, _StyleEnd);
                        _Block = $JssorUtils$.$Extend({}, _Blocks[columnRow]);

                        if (slideTransition.$Opacity) {
                            _StyleEnd.$Opacity = 2 - slideTransition.$Opacity;
                        }

                        if (slideTransition.$ZIndex) {
                            _StyleEnd.$ZIndex = slideTransition.$ZIndex;
                            _StyleStart.$ZIndex = 0;
                        }

                        var allowClip = slideTransition.$Cols * slideTransition.$Rows > 1 || slideTransition.$Clip;

                        if (slideTransition.$Zoom || slideTransition.$Rotate) {
                            var allowRotate = true;
                            if ($JssorUtils$.$IsBrowserIE() && $JssorUtils$.$GetBrowserEngineVersion() < 9) {
                                if (slideTransition.$Cols * slideTransition.$Rows > 1)
                                    allowRotate = false;
                                else
                                    allowClip = false;
                            }

                            if (allowRotate) {
                                _StyleEnd.$Zoom = slideTransition.$Zoom ? slideTransition.$Zoom - 1 : 1;
                                _StyleStart.$Zoom = 1;

                                if ($JssorUtils$.$IsBrowserIe9Earlier() || $JssorUtils$.$IsBrowserOpera())
                                    _StyleEnd.$Zoom = Math.min(_StyleEnd.$Zoom, 2);

                                var rotate = slideTransition.$Rotate;
                                if (rotate == true)
                                    rotate = 1;

                                _StyleEnd.$Rotate = rotate * 360 * ((chessRotate) ? -1 : 1);
                                _StyleStart.$Rotate = 0;
                            }
                        }

                        if (allowClip) {
                            if (slideTransition.$Clip) {
                                var clipScale = slideTransition.$ScaleClip || 1;
                                var blockOffset = _Block.$Offset = {};
                                if (topBenchmark && bottomBenchmark) {
                                    blockOffset.$Top = _Blocks.$Height / 2 * clipScale;
                                    blockOffset.$Bottom = -blockOffset.$Top;
                                }
                                else if (topBenchmark) {
                                    blockOffset.$Bottom = -_Blocks.$Height * clipScale;
                                }
                                else if (bottomBenchmark) {
                                    blockOffset.$Top = _Blocks.$Height * clipScale;
                                }

                                if (leftBenchmark && rightBenchmark) {
                                    blockOffset.$Left = _Blocks.$Width / 2 * clipScale;
                                    blockOffset.$Right = -blockOffset.$Left;
                                }
                                else if (leftBenchmark) {
                                    blockOffset.$Right = -_Blocks.$Width * clipScale;
                                }
                                else if (rightBenchmark) {
                                    blockOffset.$Left = _Blocks.$Width * clipScale;
                                }
                            }

                            _StyleDif.$Clip = _Block;
                            _StyleStart.$Clip = _Blocks[columnRow];
                        }

                        if (slideTransition.$FlyDirection) {

                            var direction = slideTransition.$FlyDirection;

                            if (!chessHorizontal)
                                direction = $JssorDirection$.$ChessHorizontal(direction);

                            if (!chessVertical)
                                direction = $JssorDirection$.$ChessVertical(direction);

                            var scaleHorizontal = slideTransition.$ScaleHorizontal || 1;
                            var scaleVertical = slideTransition.$ScaleVertical || 1;

                            if ($JssorDirection$.$IsToLeft(direction)) {
                                _StyleEnd.$Left += slideContainerWidth * scaleHorizontal;
                            }
                            else if ($JssorDirection$.$IsToRight(direction)) {
                                _StyleEnd.$Left -= slideContainerWidth * scaleHorizontal;
                            }
                            if ($JssorDirection$.$IsToTop(direction)) {
                                _StyleEnd.$Top += slideContainerHeight * scaleVertical;
                            }
                            else if ($JssorDirection$.$IsToBottom(direction)) {
                                _StyleEnd.$Top -= slideContainerHeight * scaleVertical;
                            }
                        }

                        $JssorUtils$.$Each(_StyleEnd, function (propertyEnd, property) {
                            if ($JssorUtils$.$IsNumeric(propertyEnd)) {
                                if (propertyEnd != _StyleStart[property]) {
                                    _StyleDif[property] = propertyEnd - _StyleStart[property];
                                }
                            }
                        });

                        _StartStylesArr[columnRow] = _SlideOut ? _StyleStart : _StyleEnd;

                        var animationStylesArr = [];
                        var virtualFrameCount = Math.round(order * slideTransition.$Delay / slideTransition.$Interval);
                        _AnimationStylesArrs[columnRow] = new Array(virtualFrameCount);
                        _AnimationStylesArrs[columnRow].$Min = virtualFrameCount;

                        var framesCount = slideTransition.$FramesCount;
                        for (var frameN = 0; frameN <= framesCount; frameN++) {
                            var styleFrameN = {};

                            $JssorUtils$.$Each(_StyleDif, function (propertyDiff, property) {
                                var propertyEasings = slideTransition.$EasingInstance[property] || slideTransition.$EasingInstance.$Default;
                                var propertyEasingArray = propertyEasings[slideTransition.$Round[property] || 1];

                                var propertyDuring = slideTransition.$During[property] || [0, 1];
                                var propertyFrameN = (frameN / framesCount - propertyDuring[0]) / propertyDuring[1] * framesCount;
                                propertyFrameN = Math.round(Math.min(framesCount, Math.max(propertyFrameN, 0)));

                                var propertyEasingValue = propertyEasingArray[propertyFrameN];

                                if ($JssorUtils$.$IsNumeric(propertyDiff)) {
                                    styleFrameN[property] = _StyleStart[property] + propertyDiff * propertyEasingValue;
                                }
                                else {
                                    var value = styleFrameN[property] = $JssorUtils$.$Extend({}, _StyleStart[property]);
                                    value.$Offset = [];
                                    $JssorUtils$.$Each(propertyDiff.$Offset, function (rectX, n) {
                                        var offsetValue = rectX * propertyEasingValue;
                                        value.$Offset[n] = offsetValue;
                                        value[n] += offsetValue;
                                    });
                                }
                            });

                            if (_StyleStart.$Zoom) {
                                styleFrameN.$Transform = { $Rotate: styleFrameN.$Rotate || 0, $Scale: styleFrameN.$Zoom, $OriginalWidth: slideContainerWidth, $OriginalHeight: slideContainerHeight };
                            }
                            if (styleFrameN.$Clip && slideTransition.$Move) {
                                var styleFrameNClipOffset = styleFrameN.$Clip.$Offset;
                                var offsetY = (styleFrameNClipOffset.$Top || 0) + (styleFrameNClipOffset.$Bottom || 0);
                                var offsetX = (styleFrameNClipOffset.$Left || 0) + (styleFrameNClipOffset.$Right || 0);

                                styleFrameN.$Left = (styleFrameN.$Left || 0) + offsetX;
                                styleFrameN.$Top = (styleFrameN.$Top || 0) + offsetY;
                                styleFrameN.$Clip.$Left -= offsetX;
                                styleFrameN.$Clip.$Right -= offsetX;
                                styleFrameN.$Clip.$Top -= offsetY;
                                styleFrameN.$Clip.$Bottom -= offsetY;
                            }

                            styleFrameN.$ZIndex = styleFrameN.$ZIndex || 1;

                            _AnimationStylesArrs[columnRow].push(styleFrameN);
                        }

                    } //for
                });
            });

            _FormationInstance.reverse();
            $JssorUtils$.$Each(_FormationInstance, function (formationItems) {
                $JssorUtils$.$Each(formationItems, function (formationItem) {
                    var row = formationItem[0];
                    var col = formationItem[1];

                    var columnRow = row + ',' + col;

                    var image = slideElement;
                    if (col || row)
                        image = $JssorUtils$.$CloneNode(slideElement, true);

                    $JssorUtils$.$SetStyles(image, _StartStylesArr[columnRow]);
                    $JssorUtils$.$SetStyleOverflow(image, "hidden");

                    $JssorUtils$.$SetStylePosition(image, "absolute");
                    slideContainer.$AddClipElement(image);
                    _AnimationBlockItems[columnRow] = image;
                    $JssorUtils$.$ShowElement(image, _SlideOut);
                });
            });
        }
    }

    //JssorSlideshowRunner++++++++
    var _SlideshowRunnerCount = 1;
    $JssorSlideshowRunner$ = window.$JssorSlideshowRunner$ = function (slideContainer, slideContainerWidth, slideContainerHeight, slideshowOptions, handleTouchEventOnly) {

        var _SelfSlideshowRunner = this;

        //var _State = 0; //-1 fullfill, 0 clean, 1 initializing, 2 stay, 3 playing
        var _EndTime;

        var _SliderFrameCount;

        var _SlideshowPlayerBelow;
        var _SlideshowPlayerAbove;

        var _PrevItem;
        var _SlideItem;

        var _TransitionIndex = 0;
        var _TransitionsOrder = slideshowOptions.$TransitionsOrder;

        var _SlideshowTransition;

        var _SlideshowPerformance = 16;

        function SlideshowProcessor() {
            var _SelfSlideshowProcessor = this;
            var _CurrentTime = 0;

            $JssorAnimator$.call(_SelfSlideshowProcessor, 0, _EndTime);

            _SelfSlideshowProcessor.$OnPositionChange = function (oldPosition, newPosition) {
                if ((newPosition - _CurrentTime) > _SlideshowPerformance) {
                    _CurrentTime = newPosition;

                    _SlideshowPlayerAbove && _SlideshowPlayerAbove.$ShowFrame(newPosition);
                    _SlideshowPlayerBelow && _SlideshowPlayerBelow.$ShowFrame(newPosition);
                }
            };

            _SelfSlideshowProcessor.$Transition = _SlideshowTransition;
        }

        //member functions
        _SelfSlideshowRunner.$GetTransition = function (slideCount) {
            var n = 0;

            var transitions = slideshowOptions.$Transitions;

            var transitionCount = transitions.length;

            if (_TransitionsOrder) { /*Sequence*/
                if (transitionCount > slideCount && ($JssorUtils$.$IsBrowserChrome() || $JssorUtils$.$IsBrowserSafari() || $JssorUtils$.$IsBrowserFireFox())) {
                    transitionCount -= transitionCount % slideCount;
                }
                n = _TransitionIndex++ % transitionCount;
            }
            else { /*Random*/
                n = Math.floor(Math.random() * transitionCount);
            }

            transitions[n] && (transitions[n].$Index = n);

            return transitions[n];
        };

        _SelfSlideshowRunner.$Initialize = function (slideIndex, prevIndex, slideItem, prevItem, slideshowTransition) {
            $JssorDebug$.$Execute(function () {
                if (_SlideshowPlayerBelow) {
                    $JssorDebug$.$Fail("slideshow runner has not been cleared.");
                }
            });

            _SlideshowTransition = slideshowTransition;

            slideshowTransition = EnsureTransitionInstance(slideshowTransition, _SlideshowPerformance);

            _SlideItem = slideItem;
            _PrevItem = prevItem;

            var prevSlideElement = prevItem.$Item;
            var currentSlideElement = slideItem.$Item;
            prevSlideElement["no-image"] = !prevItem.$Image;
            currentSlideElement["no-image"] = !slideItem.$Image;

            var slideElementAbove = prevSlideElement;
            var slideElementBelow = currentSlideElement;

            var slideTransitionAbove = slideshowTransition;
            var slideTransitionBelow = slideshowTransition.$Brother || EnsureTransitionInstance({}, _SlideshowPerformance);

            if (!slideshowTransition.$SlideOut) {
                slideElementAbove = currentSlideElement;
                slideElementBelow = prevSlideElement;
            }

            var shift = slideTransitionBelow.$Shift || 0;

            _SlideshowPlayerBelow = new JssorSlideshowPlayer(slideContainer, slideElementBelow, slideTransitionBelow, Math.max(shift - slideTransitionBelow.$Interval, 0), slideContainerWidth, slideContainerHeight);
            _SlideshowPlayerAbove = new JssorSlideshowPlayer(slideContainer, slideElementAbove, slideTransitionAbove, Math.max(slideTransitionBelow.$Interval - shift, 0), slideContainerWidth, slideContainerHeight);

            _SlideshowPlayerBelow.$ShowFrame(0);
            _SlideshowPlayerAbove.$ShowFrame(0);

            _EndTime = Math.max(_SlideshowPlayerBelow.$EndTime, _SlideshowPlayerAbove.$EndTime);

            _SelfSlideshowRunner.$Index = slideIndex;
        };

        _SelfSlideshowRunner.$Clear = function () {
            slideContainer.$Clear();
            _SlideshowPlayerBelow = null;
            _SlideshowPlayerAbove = null;
        };

        _SelfSlideshowRunner.$GetProcessor = function () {
            var slideshowProcessor = null;

            if (_SlideshowPlayerAbove)
                slideshowProcessor = new SlideshowProcessor();

            return slideshowProcessor;
        };

        //Constructor
        {
            if ($JssorUtils$.$IsBrowserIe9Earlier() || $JssorUtils$.$IsBrowserOpera() || (handleTouchEventOnly && $JssorUtils$.$GetWebKitVersion < 537)) {
                _SlideshowPerformance = 32;
            }

            $JssorEventManager$.call(_SelfSlideshowRunner);
            $JssorAnimator$.call(_SelfSlideshowRunner, -10000000, 10000000);

            $JssorDebug$.$LiveStamp(_SelfSlideshowRunner, "slideshow_runner_" + _SlideshowRunnerCount++);
        }
    };
    //JssorSlideshowRunner--------

    //JssorSlider
    function JssorSlider(elmt, options) {
        var _SelfSlider = this;

        //private classes
        function Conveyor() {
            var _SelfConveyor = this;
            $JssorAnimator$.call(_SelfConveyor, -100000000, 200000000);

            _SelfConveyor.$GetCurrentSlideInfo = function () {
                var positionDisplay = _SelfConveyor.$GetPosition_Display();
                var virtualIndex = Math.floor(positionDisplay);
                var slideIndex = GetRealIndex(virtualIndex);
                var slidePosition = positionDisplay - Math.floor(positionDisplay);

                return { $Index: slideIndex, $VirtualIndex: virtualIndex, $Position: slidePosition };
            };

            _SelfConveyor.$OnPositionChange = function (oldPosition, newPosition) {
                var index = Math.floor(newPosition);
                if (index != newPosition && newPosition > oldPosition)
                    index++;

                ResetNavigator(index, true);

                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_POSITION_CHANGE, GetRealIndex(newPosition), GetRealIndex(oldPosition), newPosition, oldPosition);
            };
        }

        //Carousel
        function Carousel() {
            var _SelfCarousel = this;

            $JssorAnimator$.call(_SelfCarousel, 0, 0, { $LoopLength: _SlideCount });

            //Carousel Constructor
            {
                $JssorUtils$.$Each(_SlideItems, function (slideItem) {
                    _Loop && slideItem.$SetLoopLength(_SlideCount);
                    _SelfCarousel.$Chain(slideItem);
                    slideItem.$Shift(_ParkingPosition / _StepLength);
                });
            }
        }
        //Carousel

        //Slideshow
        function Slideshow() {
            var _SelfSlideshow = this;
            var _Wrapper = _SlideContainer.$Elmt;

            $JssorAnimator$.call(_SelfSlideshow, -1, 2, { $Easing: $JssorEasing$.$EaseLinear, $Setter: { $Position: SetPosition }, $LoopLength: _SlideCount }, _Wrapper, { $Position: 1 }, { $Position: -1 });

            _SelfSlideshow.$Wrapper = _Wrapper;

            //Slideshow Constructor
            {
                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_SlideContainer.$Elmt, "debug-id", "slide_container");
                });
            }
        }
        //Slideshow

        //CarouselPlayer
        function CarouselPlayer(carousel, slideshow) {
            var _SelfCarouselPlayer = this;
            var _FromPosition;
            var _ToPosition;
            var _Duration;
            var _StandBy;
            var _StandByPosition;

            $JssorAnimator$.call(_SelfCarouselPlayer, -100000000, 200000000);

            _SelfCarouselPlayer.$OnStart = function () {
                _IsSliding = true;
                _LoadingTicket = null;

                //EVT_SWIPE_START
                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_SWIPE_START, GetRealIndex(_Conveyor.$GetPosition()), _Conveyor.$GetPosition());
            };

            _SelfCarouselPlayer.$OnStop = function () {

                _IsSliding = false;
                _StandBy = false;

                var currentSlideInfo = _Conveyor.$GetCurrentSlideInfo();

                //EVT_SWIPE_END
                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_SWIPE_END, GetRealIndex(_Conveyor.$GetPosition()), _Conveyor.$GetPosition());

                if (!currentSlideInfo.$Position) {
                    OnPark(currentSlideInfo.$VirtualIndex, _CurrentSlideIndex);
                }
            };

            _SelfCarouselPlayer.$OnPositionChange = function (oldPosition, newPosition) {
                var toPosition;

                if (_StandBy)
                    toPosition = _StandByPosition;
                else {
                    toPosition = _ToPosition;

                    if (_Duration)
                        toPosition = _Options.$SlideEasing(newPosition / _Duration) * (_ToPosition - _FromPosition) + _FromPosition;
                }

                _Conveyor.$GoToPosition(toPosition);
            };

            _SelfCarouselPlayer.$PlayCarousel = function (fromPosition, toPosition, duration, callback) {
                $JssorDebug$.$Execute(function () {
                    if (_SelfCarouselPlayer.$IsPlaying())
                        $JssorDebug$.$Fail("The carousel is already playing.");
                });

                _FromPosition = fromPosition;
                _ToPosition = toPosition;
                _Duration = duration;

                _Conveyor.$GoToPosition(fromPosition);
                _SelfCarouselPlayer.$GoToPosition(0);

                _SelfCarouselPlayer.$PlayToPosition(duration, callback);
            };

            _SelfCarouselPlayer.$StandBy = function (standByPosition) {
                _StandBy = true;
                _StandByPosition = standByPosition;
                _SelfCarouselPlayer.$Play(standByPosition, null, true);
            };

            _SelfCarouselPlayer.$SetStandByPosition = function (standByPosition) {
                _StandByPosition = standByPosition;
            };

            _SelfCarouselPlayer.$MoveCarouselTo = function (position) {
                _Conveyor.$GoToPosition(position);
            };

            //CarouselPlayer Constructor
            {
                _Conveyor = new Conveyor();

                _Conveyor.$Combine(carousel);
                _Conveyor.$Combine(slideshow);
            }
        }
        //CarouselPlayer

        //SlideContainer
        function SlideContainer() {
            var _Self = this;
            var elmt = CreatePanel();

            $JssorUtils$.$SetStyleZIndex(elmt, 0);

            _Self.$Elmt = elmt;

            _Self.$AddClipElement = function (clipElement) {
                $JssorUtils$.$AppendChild(elmt, clipElement);
                $JssorUtils$.$ShowElement(elmt);
            };

            _Self.$Clear = function () {
                $JssorUtils$.$HideElement(elmt);
                $JssorUtils$.$ClearInnerHtml(elmt);
            };
        }
        //SlideContainer

        //SlideItem
        function SlideItem(slideElmt, slideIndex) {

            var _SelfSlideItem = this;

            var _CaptionSliderIn;
            var _CaptionSliderOut;
            var _CaptionSliderCurrent;
            var _IsCaptionSliderPlayingWhenDragStart;

            var _Wrapper;
            var _BaseElement = slideElmt;

            var _LoadingScreen;

            var _ImageItem;
            var _ImageElmts = [];
            var _LinkItemOrigin;
            var _LinkItem;
            var _ImageLoading;
            var _ImageLoaded;
            var _ImageLazyLoading;
            var _ContentRefreshed;

            var _Processor;

            var _PlayerInstanceElement;
            var _PlayerInstance;

            var _SequenceNumber;    //for debug only

            $JssorAnimator$.call(_SelfSlideItem, -_DisplayPieces, _DisplayPieces + 1, { $SlideItemAnimator: true });

            function ResetCaptionSlider(fresh) {
                _CaptionSliderOut && _CaptionSliderOut.$Revert();
                _CaptionSliderIn && _CaptionSliderIn.$Revert();

                RefreshContent(slideElmt, fresh);
                _ContentRefreshed = true;

                _CaptionSliderIn = new _CaptionSliderOptions.$Class(slideElmt, _CaptionSliderOptions, 1);
                $JssorDebug$.$LiveStamp(_CaptionSliderIn, "caption_slider_" + _CaptionSliderCount + "_in");
                _CaptionSliderOut = new _CaptionSliderOptions.$Class(slideElmt, _CaptionSliderOptions);
                $JssorDebug$.$LiveStamp(_CaptionSliderOut, "caption_slider_" + _CaptionSliderCount + "_out");

                $JssorDebug$.$Execute(function () {
                    _CaptionSliderCount++;
                });

                _CaptionSliderOut.$GoToBegin();
                _CaptionSliderIn.$GoToBegin();
            }

            function EnsureCaptionSliderVersion() {
                if (_CaptionSliderIn.$Version < _CaptionSliderOptions.$Version) {
                    ResetCaptionSlider();
                }
            }

            //event handling begin
            function LoadImageCompleteEventHandler(completeCallback, loadingScreen, image) {
                if (!_ImageLoaded) {
                    _ImageLoaded = true;

                    if (_ImageItem && image) {
                        var imageWidth = image.width;
                        var imageHeight = image.height;
                        var fillWidth = imageWidth;
                        var fillHeight = imageHeight;

                        if (imageWidth && imageHeight && _Options.$FillMode) {
                            //var aspectRatioSlide = _SlideWidth / _SlideHeight;
                            //var aspectRatioImage = imageWidth / imageHeight;

                            //0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actual size, default value is 0
                            if (_Options.$FillMode & 3) {
                                var fitHeight = false;
                                var ratio = _SlideWidth / _SlideHeight * imageHeight / imageWidth;

                                if (_Options.$FillMode & 1) {
                                    fitHeight = (ratio > 1);
                                }
                                else if (_Options.$FillMode & 2) {
                                    fitHeight = (ratio < 1);
                                }
                                fillWidth = fitHeight ? imageWidth * _SlideHeight / imageHeight : _SlideWidth;
                                fillHeight = fitHeight ? _SlideHeight : imageHeight * _SlideWidth / imageWidth;
                            }

                            $JssorUtils$.$SetStyleWidth(_ImageItem, fillWidth);
                            $JssorUtils$.$SetStyleHeight(_ImageItem, fillHeight);
                            $JssorUtils$.$SetStyleTop(_ImageItem, (_SlideHeight - fillHeight) / 2);
                            $JssorUtils$.$SetStyleLeft(_ImageItem, (_SlideWidth - fillWidth) / 2);
                        }

                        $JssorUtils$.$SetStylePosition(_ImageItem, "absolute");

                        _SelfSlider.$TriggerEvent(JssorSlider.$EVT_LOAD_END, slideItem);
                    }
                }

                $JssorUtils$.$HideElement(loadingScreen);
                completeCallback && completeCallback(_SelfSlideItem);
            }

            function LoadSlideshowImageCompleteEventHandler(nextIndex, nextItem, slideshowTransition, loadingTicket) {
                if (loadingTicket == _LoadingTicket && _CurrentSlideIndex == slideIndex && _AutoPlay) {
                    if (!_Frozen) {
                        var nextRealIndex = GetRealIndex(nextIndex);
                        _SlideshowRunner.$Initialize(nextRealIndex, slideIndex, nextItem, _SelfSlideItem, slideshowTransition);
                        nextItem.$HideContentForSlideshow();
                        _Slideshow.$Locate(nextRealIndex, 1);
                        _Slideshow.$GoToPosition(nextRealIndex);
                        _CarouselPlayer.$PlayCarousel(nextIndex, nextIndex, 0);
                    }
                }
            }

            function SlideReadyEventHandler(loadingTicket) {
                if (loadingTicket == _LoadingTicket && _CurrentSlideIndex == slideIndex) {

                    if (!_Processor) {
                        var slideshowProcessor = null;
                        if (_SlideshowRunner) {
                            if (_SlideshowRunner.$Index == slideIndex)
                                slideshowProcessor = _SlideshowRunner.$GetProcessor();
                            else
                                _SlideshowRunner.$Clear();
                        }

                        EnsureCaptionSliderVersion();

                        _Processor = new Processor(slideIndex, slideshowProcessor, _SelfSlideItem.$GetCaptionSliderIn(), _SelfSlideItem.$GetCaptionSliderOut());
                        _Processor.$SetPlayer(_PlayerInstance);
                    }

                    !_Processor.$IsPlaying() && _Processor.$Replay();
                }
            }

            function ParkEventHandler(currentIndex, previousIndex) {
                if (currentIndex == slideIndex) {

                    if (currentIndex != previousIndex)
                        _SlideItems[previousIndex] && _SlideItems[previousIndex].$ParkOut();

                    _PlayerInstance && _PlayerInstance.$Enable();

                    //park in
                    var loadingTicket = _LoadingTicket = $JssorUtils$.$GetNow();
                    _SelfSlideItem.$LoadImage($JssorUtils$.$CreateCallback(null, SlideReadyEventHandler, loadingTicket));
                }
                else {
                    var distance = Math.abs(slideIndex - currentIndex);
                    var loadRange = _DisplayPieces + _Options.$LazyLoading;
                    if (!_ImageLazyLoading || distance <= loadRange || _SlideCount - distance <= loadRange) {
                        _SelfSlideItem.$LoadImage();
                    }
                }
            }

            function SwipeStartEventHandler() {
                if (_CurrentSlideIndex == slideIndex && _Processor) {
                    _Processor.$Stop();
                    _PlayerInstance && _PlayerInstance.$Quit();
                    _PlayerInstance && _PlayerInstance.$Disable();
                    _Processor.$OpenSlideshowPanel();
                }
            }

            function DragStartEventHandler() {
                if (_CurrentSlideIndex == slideIndex && _Processor) {
                    _Processor.$Stop();
                }
            }

            function LinkClickEventHandler(event) {
                if (_LastDragSucceded) {
                    $JssorUtils$.$CancelEvent(event);
                }
                else {
                    _SelfSlider.$TriggerEvent(JssorSlider.$EVT_CLICK, slideIndex, event);
                }
            }

            function PlayerAvailableEventHandler() {
                _PlayerInstance = _PlayerInstanceElement.pInstance;
                _Processor && _Processor.$SetPlayer(_PlayerInstance);
            }

            _SelfSlideItem.$LoadImage = function (completeCallback, loadingScreen) {
                loadingScreen = loadingScreen || _LoadingScreen;

                if (_ImageElmts.length && !_ImageLoaded) {

                    $JssorUtils$.$ShowElement(loadingScreen);

                    if (!_ImageLoading) {
                        _ImageLoading = true;
                        _SelfSlider.$TriggerEvent(JssorSlider.$EVT_LOAD_START);

                        $JssorUtils$.$Each(_ImageElmts, function (imageElmt) {

                            if (!imageElmt.src) {
                                imageElmt.src = $JssorUtils$.$GetAttribute(imageElmt, "src2");
                                $JssorUtils$.$SetStyleDisplay(imageElmt, imageElmt["display-origin"]);
                            }
                        });
                    }
                    $JssorUtils$.$LoadImages(_ImageElmts, _ImageItem, $JssorUtils$.$CreateCallback(null, LoadImageCompleteEventHandler, completeCallback, loadingScreen));
                }
                else {
                    LoadImageCompleteEventHandler(completeCallback, loadingScreen);
                }
            };

            _SelfSlideItem.$GoForNextSlide = function () {
                if (_SlideshowRunner) {
                    var slideshowTransition = _SlideshowRunner.$GetTransition(_SlideCount);

                    if (slideshowTransition) {
                        var loadingTicket = _LoadingTicket = $JssorUtils$.$GetNow();

                        var nextIndex = slideIndex + 1;
                        var nextItem = _SlideItems[GetRealIndex(nextIndex)];
                        return nextItem.$LoadImage($JssorUtils$.$CreateCallback(null, LoadSlideshowImageCompleteEventHandler, nextIndex, nextItem, slideshowTransition, loadingTicket), _LoadingScreen);
                    }
                }

                PlayTo(_CurrentSlideIndex + _Options.$AutoPlaySteps);
            };

            _SelfSlideItem.$TryActivate = function () {
                ParkEventHandler(slideIndex, slideIndex);
            };

            _SelfSlideItem.$ParkOut = function () {
                //park out
                _PlayerInstance && _PlayerInstance.$Quit();
                _PlayerInstance && _PlayerInstance.$Disable();
                _SelfSlideItem.$UnhideContentForSlideshow();
                _Processor && _Processor.$Abort();
                _Processor = null;
                ResetCaptionSlider();
            };

            //for debug only
            _SelfSlideItem.$StampSlideItemElements = function (stamp) {
                stamp = _SequenceNumber + "_" + stamp;

                $JssorDebug$.$Execute(function () {
                    if (_ImageItem)
                        $JssorUtils$.$SetAttribute(_ImageItem, "debug-id", stamp + "_slide_item_image_id");

                    $JssorUtils$.$SetAttribute(slideElmt, "debug-id", stamp + "_slide_item_item_id");
                });

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_Wrapper, "debug-id", stamp + "_slide_item_wrapper_id");
                });

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_LoadingScreen, "debug-id", stamp + "_loading_container_id");
                });
            };

            _SelfSlideItem.$HideContentForSlideshow = function () {
                $JssorUtils$.$HideElement(slideElmt);
            };

            _SelfSlideItem.$UnhideContentForSlideshow = function () {
                $JssorUtils$.$ShowElement(slideElmt);
            };

            _SelfSlideItem.$EnablePlayer = function () {
                _PlayerInstance && _PlayerInstance.$Enable();
            };

            function RefreshContent(elmt, fresh, level) {
                if (elmt["jssor-slider"])
                    return;

                level = level || 0;

                if (!_ContentRefreshed) {
                    if (elmt.tagName == "IMG") {
                        _ImageElmts.push(elmt);

                        if (!elmt.src) {
                            _ImageLazyLoading = true;
                            elmt["display-origin"] = $JssorUtils$.$GetStyleDisplay(elmt);
                            $JssorUtils$.$HideElement(elmt);
                        }
                    }
                    if ($JssorUtils$.$IsBrowserIe9Earlier()) {
                        $JssorUtils$.$SetStyleZIndex(elmt, $JssorUtils$.$GetStyleZIndex(elmt) + 1);
                    }
                    if (_Options.$HWA && $JssorUtils$.$GetWebKitVersion() > 0) {
                        //if ((_HandleTouchEventOnly && ($JssorUtils$.$GetWebKitVersion() < 534 || !_SlideshowEnabled)) || (!_HandleTouchEventOnly && $JssorUtils$.$GetWebKitVersion() < 535)) {
                        //    $JssorUtils$.$EnableHWA(elmt);
                        //}
                        if (!_HandleTouchEventOnly || ($JssorUtils$.$GetWebKitVersion() < 534 || !_SlideshowEnabled)) {
                            $JssorUtils$.$EnableHWA(elmt);
                        }
                    }
                }

                var childElements = $JssorUtils$.$GetChildren(elmt);

                $JssorUtils$.$Each(childElements, function (childElement, i) {

                    var uAttribute = $JssorUtils$.$GetAttribute(childElement, "u");
                    if (uAttribute == "player" && !_PlayerInstanceElement) {
                        _PlayerInstanceElement = childElement;
                        if (_PlayerInstanceElement.pInstance) {
                            PlayerAvailableEventHandler();
                        }
                        else {
                            $JssorUtils$.$AddEvent(_PlayerInstanceElement, "dataavailable", PlayerAvailableEventHandler);
                        }
                    }

                    if (uAttribute == "caption") {
                        if (!$JssorUtils$.$IsBrowserIE() && !fresh) {
                            var captionElement = $JssorUtils$.$CloneNode(childElement, true);
                            $JssorUtils$.$InsertBefore(elmt, captionElement, childElement);
                            $JssorUtils$.$RemoveChild(elmt, childElement);
                            childElement = captionElement;

                            fresh = true;
                        }
                    }
                    else if (!_ContentRefreshed && !level && !_ImageItem && $JssorUtils$.$GetAttribute(childElement, "u") == "image") {
                        _ImageItem = childElement;

                        if (_ImageItem) {
                            if (_ImageItem.tagName == "A") {
                                _LinkItemOrigin = _ImageItem;
                                $JssorUtils$.$SetStyles(_LinkItemOrigin, _StyleDef);

                                _LinkItem = $JssorUtils$.$CloneNode(_ImageItem, false);
                                //cancel click event on <A> element when a drag of slide succeeded
                                $JssorUtils$.$AddEvent(_LinkItem, "click", LinkClickEventHandler);

                                $JssorUtils$.$SetStyles(_LinkItem, _StyleDef);
                                $JssorUtils$.$SetStyleDisplay(_LinkItem, "block");
                                $JssorUtils$.$SetStyleOpacity(_LinkItem, 0);
                                $JssorUtils$.$SetStyleBackgroundColor(_LinkItem, "#000");

                                _ImageItem = $JssorUtils$.$FindFirstChildByTag(_ImageItem, "IMG");

                                $JssorDebug$.$Execute(function () {
                                    if (!_ImageItem) {
                                        $JssorDebug$.$Error("slide html code definition error, no 'IMG' found in a 'image with link' slide.\r\n" + elmt.outerHTML);
                                    }
                                });
                            }
                            _ImageItem.border = 0;

                            $JssorUtils$.$SetStyles(_ImageItem, _StyleDef);
                        }
                    }

                    RefreshContent(childElement, fresh, level + 1);
                });
            }

            _SelfSlideItem.$OnInnerOffsetChange = function (oldOffset, newOffset) {
                var slidePosition = _DisplayPieces - newOffset;

                SetPosition(_Wrapper, slidePosition);

                //following lines are for future usage, not ready yet
                //if (!_IsDragging || !_IsCaptionSliderPlayingWhenDragStart) {
                //    var _DealWithParallax;
                //    if (IsCurrentSlideIndex(slideIndex)) {
                //        if (_CaptionSliderOptions.$PlayOutMode == 2)
                //            _DealWithParallax = true;
                //    }
                //    else {
                //        if (!_CaptionSliderOptions.$PlayInMode) {
                //            //PlayInMode: 0 none
                //            _CaptionSliderIn.$GoToEnd();
                //        }
                //        //else if (_CaptionSliderOptions.$PlayInMode == 1) {
                //        //    //PlayInMode: 1 chain
                //        //    _CaptionSliderIn.$GoToBegin();
                //        //}
                //        else if (_CaptionSliderOptions.$PlayInMode == 2) {
                //            //PlayInMode: 2 parallel
                //            _DealWithParallax = true;
                //        }
                //    }

                //    if (_DealWithParallax) {
                //        _CaptionSliderIn.$GoToPosition((_CaptionSliderIn.$GetPosition_OuterEnd() - _CaptionSliderIn.$GetPosition_OuterBegin()) * Math.abs(newOffset - 1) * .8 + _CaptionSliderIn.$GetPosition_OuterBegin());
                //    }
                //}
            };

            _SelfSlideItem.$GetCaptionSliderIn = function () {
                return _CaptionSliderIn;
            };

            _SelfSlideItem.$GetCaptionSliderOut = function () {
                return _CaptionSliderOut;
            };

            _SelfSlideItem.$Index = slideIndex;

            $JssorEventManager$.call(_SelfSlideItem);

            //SlideItem Constructor
            {

                var thumb = $JssorUtils$.$FindFirstChildByAttribute(slideElmt, "thumb");
                if (thumb) {
                    _SelfSlideItem.$Thumb = $JssorUtils$.$CloneNode(thumb, true);
                    $JssorUtils$.$HideElement(thumb);
                }
                $JssorUtils$.$ShowElement(slideElmt);

                _LoadingScreen = $JssorUtils$.$CloneNode(_LoadingContainer, true);
                $JssorUtils$.$SetStyleZIndex(_LoadingScreen, 1000);

                //cancel click event on <A> element when a drag of slide succeeded
                $JssorUtils$.$AddEvent(slideElmt, "click", LinkClickEventHandler);

                ResetCaptionSlider(true);

                _SelfSlideItem.$Image = _ImageItem;
                _SelfSlideItem.$Link = _LinkItem;

                _SelfSlideItem.$Item = slideElmt;

                _SelfSlideItem.$Wrapper = _Wrapper = slideElmt;
                $JssorUtils$.$AppendChild(_Wrapper, _LoadingScreen);

                _SelfSlider.$On(203, ParkEventHandler);
                _SelfSlider.$On(22, DragStartEventHandler);
                _SelfSlider.$On(24, SwipeStartEventHandler);

                $JssorDebug$.$Execute(function () {
                    _SequenceNumber = _SlideItemCreatedCount++;
                });

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_Wrapper, "debug-id", "slide-" + slideIndex);
                });
            }
        }
        //SlideItem

        //Processor
        function Processor(slideIndex, slideshowProcessor, captionSliderIn, captionSliderOut) {

            var _SelfProcessor = this;

            var _ProgressBegin = 0;
            var _SlideshowBegin = 0;
            var _SlideshowEnd;
            var _CaptionInBegin;
            var _IdleBegin;
            var _IdleEnd;
            var _ProgressEnd;

            var _IsSlideshowRunning;
            var _IsRollingBack;

            var _PlayerInstance;
            var _IsPlayerOnService;

            var slideItem = _SlideItems[slideIndex];

            $JssorAnimator$.call(_SelfProcessor, 0, 0);

            function UpdateLink() {

                $JssorUtils$.$ClearChildren(_LinkContainer);

                if (_ShowLink && _IsSlideshowRunning && slideItem.$Link) {
                    $JssorUtils$.$AppendChild(_LinkContainer, slideItem.$Link);
                }

                $JssorUtils$.$ShowElement(_LinkContainer, _IsSlideshowRunning || !slideItem.$Image);
            }

            function ProcessCompleteEventHandler() {

                if (_IsRollingBack) {
                    _IsRollingBack = false;
                    _SelfSlider.$TriggerEvent(JssorSlider.$EVT_ROLLBACK_END, slideIndex, _IdleEnd, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
                    _SelfProcessor.$GoToPosition(_IdleBegin);
                }

                _SelfProcessor.$Replay();
            }

            function PlayerSwitchEventHandler(isOnService) {
                _IsPlayerOnService = isOnService;

                _SelfProcessor.$Stop();
                _SelfProcessor.$Replay();
            }

            _SelfProcessor.$Replay = function () {

                var currentPosition = _SelfProcessor.$GetPosition_Display();

                if (!_IsDragging && !_IsSliding && !_IsPlayerOnService && (currentPosition != _IdleEnd || (_AutoPlay && (!_HoverToPause || _HoverStatus))) && _CurrentSlideIndex == slideIndex) {

                    if (!currentPosition) {
                        if (_SlideshowEnd && !_IsSlideshowRunning) {
                            _IsSlideshowRunning = true;

                            _SelfProcessor.$OpenSlideshowPanel(true);

                            _SelfSlider.$TriggerEvent(JssorSlider.$EVT_SLIDESHOW_START, slideIndex, _ProgressBegin, _SlideshowBegin, _SlideshowEnd, _ProgressEnd);
                        }

                        UpdateLink();
                    }

                    var toPosition;
                    var stateEvent = JssorSlider.$EVT_STATE_CHANGE;

                    if (currentPosition == _ProgressEnd) {

                        if (_IdleEnd == _ProgressEnd)
                            _SelfProcessor.$GoToPosition(_IdleBegin);

                        return slideItem.$GoForNextSlide();
                    }
                    else if (currentPosition == _IdleEnd) {
                        toPosition = _ProgressEnd;
                    }
                    else if (currentPosition == _IdleBegin) {
                        toPosition = _IdleEnd;
                    }
                    else if (!currentPosition) {
                        toPosition = _IdleBegin;
                    }
                    else if (currentPosition > _IdleEnd) {
                        _IsRollingBack = true;
                        toPosition = _IdleEnd;
                        stateEvent = JssorSlider.$EVT_ROLLBACK_START;
                    }
                    else {
                        //continue from break (by drag or lock)
                        toPosition = _SelfProcessor.$GetPlayToPosition();
                    }

                    _SelfSlider.$TriggerEvent(stateEvent, slideIndex, currentPosition, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
                    _SelfProcessor.$PlayToPosition(toPosition, ProcessCompleteEventHandler);
                }
            };

            _SelfProcessor.$Abort = function () {
                _SlideshowRunner && _SlideshowRunner.$Index == slideIndex && _SlideshowRunner.$Clear();

                var currentPosition = _SelfProcessor.$GetPosition_Display();
                if (currentPosition < _ProgressEnd) {
                    _SelfSlider.$TriggerEvent(JssorSlider.$EVT_STATE_CHANGE, slideIndex, -currentPosition - 1, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
                }
            };

            _SelfProcessor.$OpenSlideshowPanel = function (open) {
                if (slideshowProcessor) {
                    $JssorUtils$.$SetStyleOverflow(_SlideshowPanel, open && slideshowProcessor.$Transition.$Outside ? "" : "hidden");
                }
            };

            _SelfProcessor.$OnInnerOffsetChange = function (oldPosition, newPosition) {

                if (_IsSlideshowRunning && newPosition >= _SlideshowEnd) {
                    _IsSlideshowRunning = false;
                    UpdateLink();
                    slideItem.$UnhideContentForSlideshow();
                    _SlideshowRunner.$Clear();

                    _SelfSlider.$TriggerEvent(JssorSlider.$EVT_SLIDESHOW_END, slideIndex, _ProgressBegin, _SlideshowBegin, _SlideshowEnd, _ProgressEnd);
                }

                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_PROGRESS_CHANGE, slideIndex, newPosition, _ProgressBegin, _IdleBegin, _IdleEnd, _ProgressEnd);
            };

            _SelfProcessor.$SetPlayer = function (playerInstance) {
                if (playerInstance && !_PlayerInstance) {
                    _PlayerInstance = playerInstance;

                    playerInstance.$On($JssorPlayer$.$EVT_SWITCH, PlayerSwitchEventHandler);
                }
            };

            //Processor Constructor
            {
                if (slideshowProcessor) {
                    _SelfProcessor.$Chain(slideshowProcessor);
                }

                _SlideshowEnd = _SelfProcessor.$GetPosition_OuterEnd();
                _CaptionInBegin = _SelfProcessor.$GetPosition_OuterEnd();
                _SelfProcessor.$Chain(captionSliderIn);
                _IdleBegin = captionSliderIn.$GetPosition_OuterEnd();
                _IdleEnd = _IdleBegin + _Options.$AutoPlayInterval;

                captionSliderOut.$Shift(_IdleEnd);
                _SelfProcessor.$Combine(captionSliderOut);
                _ProgressEnd = _SelfProcessor.$GetPosition_OuterEnd();
            }
        }
        //Processor
        //private classes

        function SetPosition(elmt, position) {
            var orientation = _DragOrientation > 0 ? _DragOrientation : _Options.$PlayOrientation;
            var x = Math.round(_StepLengthX * position * (orientation & 1));
            var y = Math.round(_StepLengthY * position * ((orientation >> 1) & 1));

            if ($JssorUtils$.$IsBrowserIE() && $JssorUtils$.$GetBrowserVersion() >= 10 && $JssorUtils$.$GetBrowserVersion() < 11) {
                elmt.style.msTransform = "translate(" + x + "px, " + y + "px)";
            }
            //else if ($JssorUtils$.$IsBrowserChrome() && $JssorUtils$.$GetBrowserVersion() >= 30 && $JssorUtils$.$GetBrowserVersion() < 32) {
            //    elmt.style.WebkitTransition = "transform 0s";
            //    elmt.style.WebkitTransform = "translate3d(" + x + "px, " + y + "px, 0px) perspective(2000px)";
            //}
            else {
                $JssorUtils$.$SetStyleLeft(elmt, x);
                $JssorUtils$.$SetStyleTop(elmt, y);
            }
        }

        //Event handling begin

        function OnMouseDown(event) {
            _LastDragSucceded = 0;

            if (!_DragOrientationRegistered && RegisterDrag()) {
                OnDragStart(event);
            }
        }

        function OnDragStart(event) {
            _DragStart_CarouselPlaying = _IsSliding;

            _IsDragging = true;
            _DragInvalid = false;
            _LoadingTicket = null;

            $JssorUtils$.$AddEvent(document, _MoveEvent, OnDragMove);

            _LastTimeMoveByDrag = $JssorUtils$.$GetNow() - 50;
            _DragStartPlayToPosition = _CarouselPlayer.$GetPlayToPosition();
            _CarouselPlayer.$Stop();

            if (!_DragStart_CarouselPlaying)
                _DragOrientation = 0;

            if (_HandleTouchEventOnly) {
                var touchPoint = event.touches[0];
                _DragStartMouseX = touchPoint.clientX;
                _DragStartMouseY = touchPoint.clientY;
            }
            else {
                var mousePoint = $JssorUtils$.$GetMousePosition(event);

                _DragStartMouseX = mousePoint.x;
                _DragStartMouseY = mousePoint.y;

                $JssorUtils$.$CancelEvent(event);
            }

            _DragOffsetTotal = 0;
            _DragOffsetLastTime = 0;
            _DragIndexAdjust = 0;
            _DragStartPosition = _Conveyor.$GetPosition();

            //Trigger EVT_DRAGSTART
            _SelfSlider.$TriggerEvent(JssorSlider.$EVT_DRAG_START, GetRealIndex(_DragStartPosition), _DragStartPosition, event);
        }

        function OnDragMove(event) {
            if (_IsDragging && (!$JssorUtils$.$IsBrowserIe9Earlier() || event.button)) {
                var actionPoint;

                if (_HandleTouchEventOnly) {
                    var touches = event.touches;
                    if (touches && touches.length > 0) {
                        actionPoint = new $JssorPoint$(touches[0].clientX, touches[0].clientY);
                    }
                }
                else {
                    actionPoint = $JssorUtils$.$GetMousePosition(event);
                }

                if (actionPoint) {
                    var distanceX = actionPoint.x - _DragStartMouseX;
                    var distanceY = actionPoint.y - _DragStartMouseY;


                    if (Math.floor(_DragStartPosition) != _DragStartPosition)
                        _DragOrientation = _DragOrientation || (_Options.$PlayOrientation & _DragOrientationRegistered);

                    if ((distanceX || distanceY) && !_DragOrientation) {
                        if (_DragOrientationRegistered == 3) {
                            if (Math.abs(distanceY) > Math.abs(distanceX)) {
                                _DragOrientation = 2;
                            }
                            else
                                _DragOrientation = 1;
                        }
                        else {
                            _DragOrientation = _DragOrientationRegistered;
                        }

                        if (_HandleTouchEventOnly && _DragOrientation == 1 && Math.abs(distanceY) - Math.abs(distanceX) > 3) {
                            _DragInvalid = true;
                        }
                    }

                    if (_DragOrientation) {
                        var distance = distanceY;
                        var stepLength = _StepLengthY;

                        if (_DragOrientation == 1) {
                            distance = distanceX;
                            stepLength = _StepLengthX;
                        }

                        if (!_Loop) {
                            if (distance > 0) {
                                var normalDistance = stepLength * _CurrentSlideIndex;
                                var sqrtDistance = distance - normalDistance;
                                if (sqrtDistance > 0) {
                                    distance = normalDistance + Math.sqrt(sqrtDistance) * 5;
                                }
                            }

                            if (distance < 0) {
                                var normalDistance = stepLength * (_SlideCount - _DisplayPieces - _CurrentSlideIndex);
                                var sqrtDistance = -distance - normalDistance;

                                if (sqrtDistance > 0) {
                                    distance = -normalDistance - Math.sqrt(sqrtDistance) * 5;
                                }
                            }
                        }

                        if (_DragOffsetTotal - _DragOffsetLastTime < -2) {
                            _DragIndexAdjust = 1;
                        }
                        else if (_DragOffsetTotal - _DragOffsetLastTime > 2) {
                            _DragIndexAdjust = 0;
                        }

                        _DragOffsetLastTime = _DragOffsetTotal;
                        _DragOffsetTotal = distance;
                        _PositionToGoByDrag = _DragStartPosition - _DragOffsetTotal / stepLength / (_ScaleRatio || 1);

                        if (_DragOffsetTotal && _DragOrientation && !_DragInvalid) {
                            $JssorUtils$.$CancelEvent(event);
                            if (!_IsSliding) {
                                _CarouselPlayer.$StandBy(_PositionToGoByDrag);
                            }
                            else
                                _CarouselPlayer.$SetStandByPosition(_PositionToGoByDrag);
                        }
                        else if ($JssorUtils$.$IsBrowserIe9Earlier()) {
                            $JssorUtils$.$CancelEvent(event);
                        }
                    }
                }
            }
            else {
                OnDragEnd(event);
            }
        }

        function OnDragEnd(event) {
            UnregisterDrag();

            if (_IsDragging) {

                _IsDragging = false;

                _LastTimeMoveByDrag = $JssorUtils$.$GetNow();

                $JssorUtils$.$RemoveEvent(document, _MoveEvent, OnDragMove);

                _LastDragSucceded = _DragOffsetTotal;

                _LastDragSucceded && $JssorUtils$.$CancelEvent(event);

                _CarouselPlayer.$Stop();

                var currentPosition = _Conveyor.$GetPosition();

                _SelfSlider.$TriggerEvent(JssorSlider.$EVT_DRAG_END, GetRealIndex(currentPosition), currentPosition, GetRealIndex(_DragStartPosition), _DragStartPosition, event);

                var toPosition = Math.floor(_DragStartPosition);

                if (Math.abs(_DragOffsetTotal) >= _Options.$MinDragOffsetToSlide) {
                    toPosition = Math.floor(currentPosition);
                    toPosition += _DragIndexAdjust;
                }

                if (!_Loop) {
                    toPosition = Math.min(_SlideCount - _DisplayPieces, Math.max(toPosition, 0));
                }

                var t = Math.abs(toPosition - currentPosition);
                t = 1 - Math.pow(1 - t, 5);

                if (!_LastDragSucceded && _DragStart_CarouselPlaying) {
                    _CarouselPlayer.$Continue(_DragStartPlayToPosition);
                }
                else if (currentPosition == toPosition) {
                    _CurrentSlideItem.$EnablePlayer();
                    _CurrentSlideItem.$TryActivate();
                }
                else {
                    _CarouselPlayer.$PlayCarousel(currentPosition, toPosition, t * _SlideDuration);
                }
            }
        }
        //Event handling end

        function SetCurrentSlideIndex(index) {
            _PrevSlideItem = _SlideItems[_CurrentSlideIndex];
            _PreviousSlideIndex = _CurrentSlideIndex;
            _CurrentSlideIndex = GetRealIndex(index);
            _CurrentSlideItem = _SlideItems[_CurrentSlideIndex];
            ResetNavigator(index);
            return _CurrentSlideIndex;
        }

        function OnPark(slideIndex, prevIndex) {
            _DragOrientation = 0;

            SetCurrentSlideIndex(slideIndex);

            //Trigger EVT_PARK
            _SelfSlider.$TriggerEvent(JssorSlider.$EVT_PARK, GetRealIndex(slideIndex), prevIndex);
        }

        function ResetNavigator(index, temp) {
            $JssorUtils$.$Each(_Navigators, function (navigator) {
                navigator.$SetCurrentIndex(GetRealIndex(index), index, temp);
				
				// fix highlight button bug
				(jQuery)('#slideshow .container .jssorb05').children().each(function (i, e) {
					(jQuery)(this).removeClass('av');
					(jQuery)(this).removeClass('avav');
					if (i == GetRealIndex(index)) {
						(jQuery)(this).addClass('av');
					}
				});
            });
        }

        function RegisterDrag() {
            var dragRegistry = JssorSlider.$DragRegistry || 0;
            var dragOrientation = _Options.$DragOrientation;
            if (_HandleTouchEventOnly)
                (dragOrientation & 1) && (dragOrientation &= 1);
            JssorSlider.$DragRegistry |= dragOrientation;

            return (_DragOrientationRegistered = dragOrientation & ~dragRegistry);
        }

        function UnregisterDrag() {
            if (_DragOrientationRegistered) {
                JssorSlider.$DragRegistry &= ~_Options.$DragOrientation;
                _DragOrientationRegistered = 0;
            }
        }

        function CreatePanel() {
            var div = $JssorUtils$.$CreateDivElement();

            $JssorUtils$.$SetStyles(div, _StyleDef);
            $JssorUtils$.$SetStylePosition(div, "absolute");

            return div;
        }

        function GetRealIndex(index) {
            return (index % _SlideCount + _SlideCount) % _SlideCount;
        }

        function IsCurrentSlideIndex(index) {
            return GetRealIndex(index) == _CurrentSlideIndex;
        }

        function IsPreviousSlideIndex(index) {
            return GetRealIndex(index) == _PreviousSlideIndex;
        }

        //Navigation Request Handler
        function NavigationClickHandler(index, relative) {
            PlayTo(_Loop ? index : GetRealIndex(index), _Options.$SlideDuration, relative);
        }

        function ShowNavigators() {
            $JssorUtils$.$Each(_Navigators, function (navigator) {
                navigator.$Show(navigator.$Options.$ChanceToShow > _HoverStatus);
            });
        }

        function MainContainerMouseOutEventHandler(event) {
            event = $JssorUtils$.$GetEvent(event);
            // we have to watch out for a tricky case: a mouseout occurs on a
            // child element, but the mouse is still inside the parent element.
            // the mouseout event will bubble up to us. this happens in all
            // browsers, so we need to correct for this. technique from:
            // http://www.quirksmode.org/js/events_mouse.html
            var from = event.target ? event.target : event.srcElement;
            var to = event.relatedTarget ? event.relatedTarget : event.toElement;

            if (!$JssorUtils$.$IsChild(elmt, from) || $JssorUtils$.$IsChild(elmt, to)) {
                // the mouseout needs to start from this or a child node, and it
                // needs to end on this or an outer node.
                return;
            }

            _HoverStatus = 1;

            ShowNavigators();

            _SlideItems[_CurrentSlideIndex].$TryActivate();
        }

        function MainContainerMouseOverEventHandler() {
            _HoverStatus = 0;

            ShowNavigators();
        }

        function AdjustSlidesContainerSize() {
            _StyleDef = { $Width: _SlideWidth, $Height: _SlideHeight, $Top: 0, $Left: 0 };

            $JssorUtils$.$Each(_SlideElmts, function (slideElmt, i) {

                $JssorUtils$.$SetStyles(slideElmt, _StyleDef);
                $JssorUtils$.$SetStylePosition(slideElmt, "absolute");
                $JssorUtils$.$SetStyleOverflow(slideElmt, "hidden");

                $JssorUtils$.$HideElement(slideElmt);
            });

            $JssorUtils$.$SetStyles(_LoadingContainer, _StyleDef);
        }

        function PlayToOffset(offset, slideDuration) {
            PlayTo(offset, slideDuration, true);
        }

        function PlayTo(slideIndex, slideDuration, relative) {
            ///	<summary>
            ///		PlayTo( slideIndex [, slideDuration] ); //Play slider to position 'slideIndex' within a period calculated base on 'slideDuration'.
            ///	</summary>
            ///	<param name="slideIndex" type="Number">
            ///		slide slideIndex or position will be playing to
            ///	</param>
            ///	<param name="slideDuration" type="Number" optional="true">
            ///		base slide duration in milliseconds to calculate the whole duration to complete this play request.
            ///	    default value is '$SlideDuration' value which is specified when initialize the slider.
            ///	</param>
            /// http://msdn.microsoft.com/en-us/library/vstudio/bb385682.aspx
            /// http://msdn.microsoft.com/en-us/library/vstudio/hh542720.aspx
            if (_CarouselEnabled && (!_IsDragging || _Options.$NaviQuitDrag)) {
                _IsSliding = true;
                _IsDragging = false;
                _CarouselPlayer.$Stop();

                {
                    //Slide Duration
                    if ($JssorUtils$.$IsUndefined(slideDuration))
                        slideDuration = _SlideDuration;

                    var positionDisplay = _Carousel.$GetPosition_Display();
                    var positionTo = slideIndex;
                    if (relative) {
                        positionTo = positionDisplay + slideIndex;
                        if (slideIndex > 0)
                            positionTo = Math.ceil(positionTo);
                        else
                            positionTo = Math.floor(positionTo);
                    }


                    if (!_Loop) {
                        positionTo = GetRealIndex(positionTo);
                        positionTo = Math.max(0, Math.min(positionTo, _SlideCount - _DisplayPieces));
                    }

                    var positionOffset = (positionTo - positionDisplay) % _SlideCount;
                    positionTo = positionDisplay + positionOffset;

                    var duration = positionDisplay == positionTo ? 0 : slideDuration * Math.abs(positionOffset);
                    duration = Math.min(duration, slideDuration * _DisplayPieces * 1.5);

                    _CarouselPlayer.$PlayCarousel(positionDisplay, positionTo, duration || 1);
                }
            }
        }

        //private functions

        //member functions

        _SelfSlider.$PlayTo = PlayTo;

        _SelfSlider.$GoTo = function (slideIndex) {
            ///	<summary>
            ///		instance.$GoTo( slideIndex );   //Go to the specifed slide immediately with no play.
            ///	</summary>
            PlayTo(slideIndex, 1);
        };

        _SelfSlider.$Next = function () {
            ///	<summary>
            ///		instance.$Next();   //Play the slider to next slide.
            ///	</summary>
            PlayToOffset(1);
        };

        _SelfSlider.$Prev = function () {
            ///	<summary>
            ///		instance.$Prev();   //Play the slider to previous slide.
            ///	</summary>
            PlayToOffset(-1);
        };

        _SelfSlider.$Pause = function () {
            ///	<summary>
            ///		instance.$Pause();   //Pause the slider, prevent it from auto playing.
            ///	</summary>
            _AutoPlay = false;
        };

        _SelfSlider.$Play = function () {
            ///	<summary>
            ///		instance.$Play();   //Start auto play if the slider is currently paused.
            ///	</summary>
            if (!_AutoPlay) {
                _AutoPlay = true;
                _SlideItems[_CurrentSlideIndex] && _SlideItems[_CurrentSlideIndex].$TryActivate();
            }
        };

        _SelfSlider.$SetSlideshowTransitions = function (transitions) {
            ///	<summary>
            ///		instance.$SetSlideshowTransitions( transitions );   //Reset slideshow transitions for the slider.
            ///	</summary>
            $JssorDebug$.$Execute(function () {
                if (!transitions || !transitions.length) {
                    $JssorDebug$.$Error("Can not set slideshow transitions, no transitions specified.");
                }
            });

            _Options.$SlideshowOptions.$Transitions = transitions;
        };

        _SelfSlider.$SetCaptionTransitions = function (transitions) {
            ///	<summary>
            ///		instance.$SetCaptionTransitions( transitions );   //Reset caption transitions for the slider.
            ///	</summary>
            $JssorDebug$.$Execute(function () {
                if (!transitions || !transitions.length) {
                    $JssorDebug$.$Error("Can not set caption transitions, no transitions specified");
                }
            });

            _CaptionSliderOptions.$CaptionTransitions = transitions;
            _CaptionSliderOptions.$Version = $JssorUtils$.$GetNow();
        };

        _SelfSlider.$SlidesCount = function () {
            ///	<summary>
            ///		instance.$SlidesCount();   //Retrieve slides count of the slider.
            ///	</summary>
            return _SlideElmts.length;
        };

        _SelfSlider.$CurrentIndex = function () {
            ///	<summary>
            ///		instance.$CurrentIndex();   //Retrieve current slide index of the slider.
            ///	</summary>
            return _CurrentSlideIndex;
        };

        _SelfSlider.$IsAutoPlaying = function () {
            ///	<summary>
            ///		instance.$IsAutoPlaying();   //Retrieve auto play status of the slider.
            ///	</summary>
            return _AutoPlay;
        };

        _SelfSlider.$IsDragging = function () {
            ///	<summary>
            ///		instance.$IsDragging();   //Retrieve drag status of the slider.
            ///	</summary>
            return _IsDragging;
        };

        _SelfSlider.$IsSliding = function () {
            ///	<summary>
            ///		instance.$IsSliding();   //Retrieve right<-->left sliding status of the slider.
            ///	</summary>
            return _IsSliding;
        };

        _SelfSlider.$IsMouseOver = function () {
            ///	<summary>
            ///		instance.$IsMouseOver();   //Retrieve mouse over status of the slider.
            ///	</summary>
            return !_HoverStatus;
        };

        _SelfSlider.$LastDragSucceded = function () {
            ///	<summary>
            ///		instance.$IsLastDragSucceded();   //Retrieve last drag succeded status, returns 0 if failed, returns drag offset if succeded
            ///	</summary>
            return _LastDragSucceded;
        };

        _SelfSlider.$GetOriginalWidth = function () {
            ///	<summary>
            ///		instance.$GetOriginalWidth();   //Retrieve original width of the slider.
            ///	</summary>
            return $JssorUtils$.$GetStyleWidth(_ScaleWrapper || elmt);
        };

        _SelfSlider.$GetOriginalHeight = function () {
            ///	<summary>
            ///		instance.$GetOriginalWidth();   //Retrieve original height of the slider.
            ///	</summary>
            return $JssorUtils$.$GetStyleHeight(_ScaleWrapper || elmt);
        };

        _SelfSlider.$GetScaleWidth = function () {
            ///	<summary>
            ///		instance.$GetScaleWidth();   //Retrieve scaled width the slider currently displays.
            ///	</summary>
            return $JssorUtils$.$GetStyleWidth(elmt);
        };

        _SelfSlider.$GetScaleHeight = function () {
            ///	<summary>
            ///		instance.$GetScaleHeight();   //Retrieve scaled height the slider currently displays.
            ///	</summary>
            return $JssorUtils$.$GetStyleHeight(elmt);
        };

        _SelfSlider.$SetScaleWidth = function (width) {
            ///	<summary>
            ///		instance.$SetScaleWidth( width );   //Scale the slider to new width and keep aspect ratio.
            ///	</summary>
            $JssorDebug$.$Execute(function () {
                if (!width || width < 0) {
                    $JssorDebug$.$Fail("'$SetScaleWidth' error, 'width' should be positive value.");
                }
            });

            if (!_ScaleWrapper) {
                $JssorDebug$.$Execute(function () {
                    var originalWidthStr = elmt.style.width;
                    var originalHeightStr = elmt.style.height;
                    var originalWidth = $JssorUtils$.$GetStyleWidth(elmt);
                    var originalHeight = $JssorUtils$.$GetStyleHeight(elmt);

                    if (!originalWidthStr) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not specified. Please specify 'width' in pixel.");
                    }

                    if (!originalHeightStr) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not specified. Please specify 'height' in pixel.");
                    }

                    if (originalWidthStr.indexOf('%') != -1) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. Please specify 'width' in pixel.");
                    }

                    if (originalHeightStr.indexOf('%') != -1) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. Please specify 'height' in pixel.");
                    }

                    if (!originalWidth) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'width' of 'outer container' not valid. 'width' of 'outer container' should be positive.");
                    }

                    if (!originalHeight) {
                        $JssorDebug$.$Fail("Cannot scale jssor slider, 'height' of 'outer container' not valid. 'height' of 'outer container' should be positive.");
                    }
                });

                var innerWrapper = $JssorUtils$.$CloneNode(elmt, false);
                $JssorUtils$.$RemoveAttribute(innerWrapper, "id");
                $JssorUtils$.$SetStylePosition(innerWrapper, "relative");
                $JssorUtils$.$SetStyleTop(innerWrapper, 0);
                $JssorUtils$.$SetStyleLeft(innerWrapper, 0);
                $JssorUtils$.$SetStyleOverflow(innerWrapper, "visible");

                _ScaleWrapper = $JssorUtils$.$CloneNode(elmt, false);
                $JssorUtils$.$RemoveAttribute(_ScaleWrapper, "id");
                $JssorUtils$.$SetStyleCssText(_ScaleWrapper, "");
                $JssorUtils$.$SetStylePosition(_ScaleWrapper, "absolute");
                $JssorUtils$.$SetStyleTop(_ScaleWrapper, 0);
                $JssorUtils$.$SetStyleLeft(_ScaleWrapper, 0);
                $JssorUtils$.$SetStyleWidth(_ScaleWrapper, $JssorUtils$.$GetStyleWidth(elmt));
                $JssorUtils$.$SetStyleHeight(_ScaleWrapper, $JssorUtils$.$GetStyleHeight(elmt));
                $JssorUtils$.$SetStyleTransformOrigin(_ScaleWrapper, "0 0");

                $JssorUtils$.$AppendChild(_ScaleWrapper, innerWrapper);

                var children = $JssorUtils$.$GetChildren(elmt);
                $JssorUtils$.$AppendChild(elmt, _ScaleWrapper);
                $JssorUtils$.$AppendChildren(innerWrapper, children);

                $JssorUtils$.$ShowElement(innerWrapper);
                $JssorUtils$.$ShowElement(_ScaleWrapper);
            }

            $JssorDebug$.$Execute(function () {
                if (!_InitialScrollWidth) {
                    _InitialScrollWidth = _SelfSlider.$Elmt.scrollWidth;
                }
            });

            _ScaleRatio = width / $JssorUtils$.$GetStyleWidth(_ScaleWrapper);
            $JssorUtils$.$SetStyleScale(_ScaleWrapper, _ScaleRatio);

            $JssorUtils$.$SetStyleWidth(elmt, width);
            $JssorUtils$.$SetStyleHeight(elmt, _ScaleRatio * $JssorUtils$.$GetStyleHeight(_ScaleWrapper));
        };

        _SelfSlider.$GetVirtualIndex = function (index) {
            var parkingIndex = Math.ceil(GetRealIndex(_ParkingPosition / _StepLength));
            var displayIndex = GetRealIndex(index - _CurrentSlideIndex + parkingIndex);

            if (displayIndex > _DisplayPieces) {
                if (index - _CurrentSlideIndex > _SlideCount / 2)
                    index -= _SlideCount;
                else if (index - _CurrentSlideIndex <= -_SlideCount / 2)
                    index += _SlideCount;
            }
            else {
                index = _CurrentSlideIndex + displayIndex - parkingIndex;
            }

            return index;
        };

        //member functions

        //Inherit $JssorEventManager$
        $JssorEventManager$.call(this);

        //initialize member variables
        _SelfSlider.$Elmt = elmt = $JssorUtils$.$GetElement(elmt);
        //initialize member variables

        var _InitialScrollWidth;    //for debug only
        var _CaptionSliderCount = 1;    //for debug only

        $JssorDebug$.$Execute(function () {
            var outerContainerElmt = $JssorUtils$.$GetElement(elmt);
            if (!outerContainerElmt)
                $JssorDebug$.$Fail("Outer container '" + elmt + "' not found.");
        });

        var _Options = $JssorUtils$.$Extend({
            $FillMode: 0,                   //[Optional] The way to fill image in slide, 0 stretch, 1 contain (keep aspect ratio and put all inside slide), 2 cover (keep aspect ratio and cover whole slide), 4 actuall size, default value is 0
            $LazyLoading: 1,                //[Optional] For image with  lazy loading format (<IMG src2="url" .../>), by default it will be loaded only when the slide comes.
            //But an integer value (maybe 1, 2 or 3) indicates that how far of nearby slides should be loaded immediately as well, default value is 1.
            $StartIndex: 0,                 //[Optional] Index of slide to display when initialize, default value is 0
            $AutoPlay: false,               //[Optional] Whether to auto play, default value is false
            $Loop: true,                    //[Optional] Enable loop(circular) of carousel or not, default value is true
            $HWA: true,                     //[Optional] Enable hardware acceleration or not, default value is true
            $NaviQuitDrag: true,
            $AutoPlaySteps: 1,              //[Optional] Steps to go of every play (this options applys only when slideshow disabled), default value is 1
            $AutoPlayInterval: 3000,        //[Optional] Interval to play next slide since the previous stopped if a slideshow is auto playing, default value is 3000
            $PauseOnHover: 3,               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 3
            $HwaMode: 1,                    //[Optional] Hardware acceleration mode, 0 disabled, 1 enabled, default value is 1

            $SlideDuration: 500,            //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 400
            $SlideEasing: $JssorEasing$.$EaseOutQuad,   //[Optional] Specifies easing for right to left animation, default value is $JssorEasing$.$EaseOutQuad
            $MinDragOffsetToSlide: 20,      //[Optional] Minimum drag offset that trigger slide, default value is 20
            $SlideSpacing: 0, 				//[Optional] Space between each slide in pixels, default value is 0
            $DisplayPieces: 1,              //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), default value is 1
            $ParkingPosition: 0,            //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
            $UISearchMode: 1,               //[Optional] The way (0 parellel, 1 recursive, default value is recursive) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc.
            $PlayOrientation: 1,            //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
            $DragOrientation: 1             //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 both, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

        }, options);

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $JssorUtils$.$Extend({
                $ArrowKeyNavigation: undefined,
                $SlideWidth: undefined,
                $SlideHeight: undefined,
                $SlideshowOptions: undefined,
                $CaptionSliderOptions: undefined,
                $BulletNavigatorOptions: undefined,
                $ArrowNavigatorOptions: undefined,
                $ThumbnailNavigatorOptions: undefined
            },
            _Options);
        });

        var _SlideshowOptions = _Options.$SlideshowOptions;
        var _CaptionSliderOptions = $JssorUtils$.$Extend({ $Class: $JssorCaptionSliderBase$, $PlayInMode: 1, $PlayOutMode: 1 }, _Options.$CaptionSliderOptions);
        var _BulletNavigatorOptions = _Options.$BulletNavigatorOptions;
        var _ArrowNavigatorOptions = _Options.$ArrowNavigatorOptions;
        var _ThumbnailNavigatorOptions = _Options.$ThumbnailNavigatorOptions;

        $JssorDebug$.$Execute(function () {
            if (_SlideshowOptions && !_SlideshowOptions.$Class) {
                $JssorDebug$.$Fail("Option $SlideshowOptions error, class not specified.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (_Options.$CaptionSliderOptions && !_Options.$CaptionSliderOptions.$Class) {
                $JssorDebug$.$Fail("Option $CaptionSliderOptions error, class not specified.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (_BulletNavigatorOptions && !_BulletNavigatorOptions.$Class) {
                $JssorDebug$.$Fail("Option $BulletNavigatorOptions error, class not specified.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (_ArrowNavigatorOptions && !_ArrowNavigatorOptions.$Class) {
                $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.");
            }
        });

        $JssorDebug$.$Execute(function () {
            if (_ThumbnailNavigatorOptions && !_ThumbnailNavigatorOptions.$Class) {
                $JssorDebug$.$Fail("Option $ArrowNavigatorOptions error, class not specified.");
            }
        });

        var _UISearchMode = _Options.$UISearchMode;
        var _ScaleWrapper;
        var _SlidesContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "slides", null, _UISearchMode);
        var _LoadingContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "loading", null, _UISearchMode) || $JssorUtils$.$CreateDivElement(document);
        var _NavigatorContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "navigator", null, _UISearchMode);
        var _ThumbnailNavigatorContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "thumbnavigator", null, _UISearchMode);

        var _SlidesContainerWidth = $JssorUtils$.$GetStyleWidth(_SlidesContainer);
        var _SlidesContainerHeight = $JssorUtils$.$GetStyleHeight(_SlidesContainer);

        $JssorDebug$.$Execute(function () {
            if (isNaN(_SlidesContainerWidth))
                $JssorDebug$.$Fail("Width of slides container wrong specification, it should be specified by inline style in pixels (like style='width: 600px;').");

            if ($JssorUtils$.$IsUndefined(_SlidesContainerWidth))
                $JssorDebug$.$Fail("Width of slides container not specified, it should be specified by inline style in pixels (like style='width: 600px;').");

            if (isNaN(_SlidesContainerHeight))
                $JssorDebug$.$Fail("Height of slides container wrong specification, it should be specified by inline style in pixels (like style='height: 300px;').");

            if ($JssorUtils$.$IsUndefined(_SlidesContainerHeight))
                $JssorDebug$.$Fail("Height of slides container not specified, it should be specified by inline style in pixels (like style='height: 300px;').");

            var slidesContainerOverflow = $JssorUtils$.$GetStyleOverflow(_SlidesContainer);
            var slidesContainerOverflowX = $JssorUtils$.$GetStyleOverflowX(_SlidesContainer);
            var slidesContainerOverflowY = $JssorUtils$.$GetStyleOverflowY(_SlidesContainer);
            if (slidesContainerOverflow != "hidden" && (slidesContainerOverflowX != "hidden" || slidesContainerOverflowY != "hidden"))
                $JssorDebug$.$Fail("Overflow of slides container wrong specification, it should be specified as 'hidden' (style='overflow:hidden;').");

            //var slidesContainerTop = $JssorUtils$.$GetStyleTop(_SlidesContainer);
            //var slidesContainerLeft = $JssorUtils$.$GetStyleLeft(_SlidesContainer);

            //if (isNaN(slidesContainerTop))
            //    $JssorDebug$.$Fail("Top of slides container wrong specification, it should be specified by inline style in pixels (like style='top: 0px;').");

            //if ($JssorUtils$.$IsUndefined(slidesContainerTop))
            //    $JssorDebug$.$Fail("Top of slides container not specified, it should be specified by inline style in pixels (like style='top: 0px;').");

            //if (isNaN(slidesContainerLeft))
            //    $JssorDebug$.$Fail("Left of slides container wrong specification, it should be specified by inline style in pixels (like style='left: 0px;').");

            //if ($JssorUtils$.$IsUndefined(slidesContainerLeft))
            //    $JssorDebug$.$Fail("Left of slides container not specified, it should be specified by inline style in pixels (like style='left: 0px;').");
        });

        $JssorDebug$.$Execute(function () {
            if (!$JssorUtils$.$IsNumeric(_Options.$DisplayPieces))
                $JssorDebug$.$Fail("Option $DisplayPieces error, it should be a numeric value and greater than or equal to 1.");

            if (_Options.$DisplayPieces < 1)
                $JssorDebug$.$Fail("Option $DisplayPieces error, it should be greater than or equal to 1.");

            if (_Options.$DisplayPieces > 1 && _Options.$DragOrientation && _Options.$DragOrientation != _Options.$PlayOrientation)
                $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $DisplayPieces is greater than 1.");

            if (!$JssorUtils$.$IsNumeric(_Options.$ParkingPosition))
                $JssorDebug$.$Fail("Option $ParkingPosition error, it should be a numeric value.");

            if (_Options.$ParkingPosition && _Options.$DragOrientation && _Options.$DragOrientation != _Options.$PlayOrientation)
                $JssorDebug$.$Fail("Option $DragOrientation error, it should be 0 or the same of $PlayOrientation when $ParkingPosition is not equal to 0.");
        });

        var _StyleDef;

        var _SlideElmts = [];

        {
            var slideElmts = $JssorUtils$.$GetChildren(_SlidesContainer);
            $JssorUtils$.$Each(slideElmts, function (slideElmt) {
                if (slideElmt.tagName == "DIV" && !$JssorUtils$.$GetAttribute(slideElmt, "u")) {
                    _SlideElmts.push(slideElmt);
                }
            });
        }

        $JssorDebug$.$Execute(function () {
            if (_SlideElmts.length < 1) {
                $JssorDebug$.$Error("Slides html code definition error, there must be at least 1 slide to initialize a slider.");
            }
        });

        var _SlideItemCreatedCount = 0; //for debug only
        var _SlideItemReleasedCount = 0;    //for debug only

        var _PreviousSlideIndex;
        var _CurrentSlideIndex = -1;
        var _PrevSlideItem;
        var _CurrentSlideItem;
        var _SlideCount = _SlideElmts.length;

        var _SlideWidth = _Options.$SlideWidth || _SlidesContainerWidth;
        var _SlideHeight = _Options.$SlideHeight || _SlidesContainerHeight;

        var _SlideSpacing = _Options.$SlideSpacing;
        var _StepLengthX = _SlideWidth + _SlideSpacing;
        var _StepLengthY = _SlideHeight + _SlideSpacing;
        var _StepLength = (_Options.$PlayOrientation == 1) ? _StepLengthX : _StepLengthY;
        var _DisplayPieces = Math.min(_Options.$DisplayPieces, _SlideCount);

        var _SlideshowPanel;
        var _CurrentBoardIndex = 0;
        var _PlayOrientation = 0;
        var _DragOrientation;
        var _DragOrientationRegistered;
        var _DragInvalid;

        var _HandleTouchEventOnly;

        var _Navigators = [];
        var _Navigator;
        var _DirectionNavigator;
        var _ThumbnailNavigator;

        var _ShowLink;

        var _Frozen;
        var _AutoPlay;
        var _AutoPlaySteps = _Options.$AutoPlaySteps;
        var _HoverToPause = _Options.$PauseOnHover;
        var _AutoPlayInterval = _Options.$AutoPlayInterval;
        var _SlideDuration = _Options.$SlideDuration;

        var _SlideshowRunnerClass;
        var _TransitionsOrder;

        var _SlideshowEnabled;
        var _ParkingPosition;
        var _CarouselEnabled = _DisplayPieces < _SlideCount;
        var _Loop = _Options.$Loop && _CarouselEnabled;

        if (!_Loop)
            _Options.$ParkingPosition = 0;

        if (_Options.$DisplayPieces > 1 || _Options.$ParkingPosition)
            _Options.$DragOrientation &= _Options.$PlayOrientation;

        var _DragEnabled = _Options.$DragOrientation;
        var _LastDragSucceded;

        var _HoverStatus = 1;   //0 Hovering, 1 Not hovering

        //Variable Definition
        var _IsSliding;
        var _IsDragging;
        var _LoadingTicket;

        //The X position of mouse/touch when a drag start
        var _DragStartMouseX = 0;
        //The Y position of mouse/touch when a drag start
        var _DragStartMouseY = 0;
        var _DragOffsetTotal;
        var _DragOffsetLastTime;
        var _DragIndexAdjust;

        var _Carousel;
        var _Conveyor;
        var _Slideshow;
        var _CarouselPlayer;
        var _SlideContainer = new SlideContainer();
        var _ScaleRatio;

        //$JssorSlider$ Constructor
        {
            _AutoPlay = _Options.$AutoPlay;
            _SelfSlider.$Options = options;

            AdjustSlidesContainerSize();

            elmt["jssor-slider"] = true;

            //_SlideshowPanel = CreatePanel();
            //$JssorUtils$.$SetStyleZIndex(elmt, $JssorUtils$.$GetStyleZIndex(elmt));
            //$JssorUtils$.$SetStyleLeft(_SlideshowPanel, $JssorUtils$.$GetStyleLeft(_SlidesContainer));
            //$JssorUtils$.$SetStyleZIndex(_SlidesContainer, $JssorUtils$.$GetStyleZIndex(_SlidesContainer));
            //$JssorUtils$.$SetStyleTop(_SlideshowPanel, $JssorUtils$.$GetStyleTop(_SlidesContainer));
            $JssorUtils$.$SetStyleZIndex(_SlidesContainer, $JssorUtils$.$GetStyleZIndex(_SlidesContainer));
            $JssorUtils$.$SetStylePosition(_SlidesContainer, "absolute");
            _SlideshowPanel = $JssorUtils$.$CloneNode(_SlidesContainer);
            $JssorUtils$.$InsertBefore($JssorUtils$.$GetParentNode(_SlidesContainer), _SlideshowPanel, _SlidesContainer);

            if (_SlideshowOptions) {
                _ShowLink = _SlideshowOptions.$ShowLink;
                _SlideshowRunnerClass = _SlideshowOptions.$Class;

                $JssorDebug$.$Execute(function () {
                    if (!_SlideshowOptions.$Transitions || !_SlideshowOptions.$Transitions.length) {
                        $JssorDebug$.$Error("Invalid '$SlideshowOptions', no '$Transitions' specified.");
                    }
                });

                _SlideshowEnabled = _DisplayPieces == 1 && _SlideCount > 1 && _SlideshowRunnerClass && (!$JssorUtils$.$IsBrowserIE() || $JssorUtils$.$GetBrowserVersion() >= 8);
            }

            _ParkingPosition = (_SlideshowEnabled || _DisplayPieces >= _SlideCount) ? 0 : _Options.$ParkingPosition;

            //SlideBoard
            var _SlideboardElmt = _SlidesContainer;
            var _SlideItems = [];

            var _SlideshowRunner;
            var _LinkContainer;

            var _DownEvent = "mousedown";
            var _MoveEvent = "mousemove";
            var _UpEvent = "mouseup";
            var _CancelEvent;

            var _LastTimeMoveByDrag;
            var _DragStartPosition;
            var _DragStart_CarouselPlaying;
            var _DragStartPlayToPosition;
            var _PositionToGoByDrag;

            //SlideBoard Constructor
            {

                if (window.navigator.msPointerEnabled) {

                    _DownEvent = "MSPointerDown";
                    _MoveEvent = "MSPointerMove";
                    _UpEvent = "MSPointerUp";
                    _CancelEvent = "MSPointerCancel";

                    if (_Options.$DragOrientation) {
                        var touchAction = "none";
                        if (_Options.$DragOrientation == 1) {
                            touchAction = "pan-y";
                        }
                        else if (_Options.$DragOrientation == 2) {
                            touchAction = "pan-x";
                        }

                        $JssorUtils$.$SetAttribute(_SlideboardElmt.style, "-ms-touch-action", touchAction);
                    }
                }
                else if ("ontouchstart" in window || "createTouch" in document) {
                    _HandleTouchEventOnly = true;

                    _DownEvent = "touchstart";
                    _MoveEvent = "touchmove";
                    _UpEvent = "touchend";
                    _CancelEvent = "touchcancel";
                }

                _Slideshow = new Slideshow();

                if (_SlideshowEnabled)
                    _SlideshowRunner = new _SlideshowRunnerClass(_SlideContainer, _SlideWidth, _SlideHeight, _SlideshowOptions, _HandleTouchEventOnly);

                $JssorUtils$.$AppendChild(_SlideshowPanel, _Slideshow.$Wrapper);
                $JssorUtils$.$SetStyleOverflow(_SlidesContainer, "hidden");

                //link container
                {
                    _LinkContainer = CreatePanel();
                    $JssorUtils$.$SetStyleBackgroundColor(_LinkContainer, "#000");
                    $JssorUtils$.$SetStyleOpacity(_LinkContainer, 0);
                    $JssorUtils$.$InsertBefore(_SlideboardElmt, _LinkContainer, _SlideboardElmt.firstChild);
                }

                for (var i = 0; i < _SlideElmts.length; i++) {
                    var slideElmt = _SlideElmts[i];
                    var slideItem = new SlideItem(slideElmt, i);
                    _SlideItems.push(slideItem);
                }

                $JssorUtils$.$HideElement(_LoadingContainer);

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_LoadingContainer, "debug-id", "loading-container");
                });

                _Carousel = new Carousel()
                _CarouselPlayer = new CarouselPlayer(_Carousel, _Slideshow);

                $JssorDebug$.$Execute(function () {
                    $JssorUtils$.$SetAttribute(_SlideboardElmt, "debug-id", "slide-board");
                });

                if (_DragEnabled) {
                    $JssorUtils$.$AddEvent(_SlidesContainer, _DownEvent, OnMouseDown);
                    $JssorUtils$.$AddEvent(document, _UpEvent, OnDragEnd);
                    _CancelEvent && $JssorUtils$.$AddEvent(document, _CancelEvent, OnDragEnd);
                }
            }
            //SlideBoard

            _HoverToPause &= _HandleTouchEventOnly ? 2 : 1;

            //Navigator
            if (_NavigatorContainer && _BulletNavigatorOptions) {
                _Navigator = new _BulletNavigatorOptions.$Class(_NavigatorContainer, _BulletNavigatorOptions);
                _Navigators.push(_Navigator);
            }

            //Direction Arrows
            if (_ArrowNavigatorOptions) {
                _DirectionNavigator = new _ArrowNavigatorOptions.$Class(elmt, _ArrowNavigatorOptions, _Options.$UISearchMode);
                _Navigators.push(_DirectionNavigator);
            }

            //Thumbnail Navigator
            if (_ThumbnailNavigatorContainer && _ThumbnailNavigatorOptions) {
                _ThumbnailNavigatorOptions.$StartIndex = _Options.$StartIndex;
                _ThumbnailNavigator = new _ThumbnailNavigatorOptions.$Class(_ThumbnailNavigatorContainer, _ThumbnailNavigatorOptions);
                _Navigators.push(_ThumbnailNavigator);
            }

            $JssorUtils$.$Each(_Navigators, function (navigator) {
                navigator.$Reset(_SlideCount, _SlideItems, _LoadingContainer);
                navigator.$On($JssorNavigatorEvents$.$NAVIGATIONREQUEST, NavigationClickHandler);
            });

            $JssorUtils$.$AddEvent(elmt, "mouseout", MainContainerMouseOutEventHandler);
            $JssorUtils$.$AddEvent(elmt, "mouseover", MainContainerMouseOverEventHandler);

            ShowNavigators();

            //Keyboard Navigation
            if (_Options.$ArrowKeyNavigation) {
                $JssorUtils$.$AddEvent(document, "keydown", function (e) {
                    if (e.keyCode == $JssorKeyCode$.$LEFT) {
                        //Arrow Left
                        PlayToOffset(-1);
                    }
                    else if (e.keyCode == $JssorKeyCode$.$RIGHT) {
                        //Arrow Right
                        PlayToOffset(1);
                    }
                });
            }

            _SelfSlider.$SetScaleWidth(_SelfSlider.$GetOriginalWidth());
            _CarouselPlayer.$PlayCarousel(_Options.$StartIndex, _Options.$StartIndex, 0);
        }
    }
    //Jssor Slider

    //JssorSlider.$ASSEMBLY_BOTTOM_LEFT = ASSEMBLY_BOTTOM_LEFT;
    //JssorSlider.$ASSEMBLY_BOTTOM_RIGHT = ASSEMBLY_BOTTOM_RIGHT;
    //JssorSlider.$ASSEMBLY_TOP_LEFT = ASSEMBLY_TOP_LEFT;
    //JssorSlider.$ASSEMBLY_TOP_RIGHT = ASSEMBLY_TOP_RIGHT;
    //JssorSlider.$ASSEMBLY_LEFT_TOP = ASSEMBLY_LEFT_TOP;
    //JssorSlider.$ASSEMBLY_LEFT_BOTTOM = ASSEMBLY_LEFT_BOTTOM;
    //JssorSlider.$ASSEMBLY_RIGHT_TOP = ASSEMBLY_RIGHT_TOP;
    //JssorSlider.$ASSEMBLY_RIGHT_BOTTOM = ASSEMBLY_RIGHT_BOTTOM;

    JssorSlider.$EVT_CLICK = 21;
    JssorSlider.$EVT_DRAG_START = 22;
    JssorSlider.$EVT_DRAG_END = 23;
    JssorSlider.$EVT_SWIPE_START = 24;
    JssorSlider.$EVT_SWIPE_END = 25;

    JssorSlider.$EVT_LOAD_START = 26;
    JssorSlider.$EVT_LOAD_END = 27;

    JssorSlider.$EVT_POSITION_CHANGE = 202;
    JssorSlider.$EVT_PARK = 203;

    JssorSlider.$EVT_SLIDESHOW_START = 206;
    JssorSlider.$EVT_SLIDESHOW_END = 207;

    JssorSlider.$EVT_PROGRESS_CHANGE = 208;
    JssorSlider.$EVT_STATE_CHANGE = 209;
    JssorSlider.$EVT_ROLLBACK_START = 210;
    JssorSlider.$EVT_ROLLBACK_END = 211;

    window.$JssorSlider$ = $JssorSlider$ = JssorSlider;

    //(function ($) {
    //    jQuery.fn.jssorSlider = function (options) {
    //        return this.each(function () {
    //            return $(this).data('jssorSlider') || $(this).data('jssorSlider', new JssorSlider(this, options));
    //        });
    //    };
    //})(jQuery);

    //window.jQuery && (jQuery.fn.jssorSlider = function (options) {
    //    return this.each(function () {
    //        return jQuery(this).data('jssorSlider') || jQuery(this).data('jssorSlider', new JssorSlider(this, options));
    //    });
    //});
};

//$JssorBulletNavigator$
var $JssorNavigatorEvents$ = {
    $NAVIGATIONREQUEST: 1,
    $INDEXCHANGE: 2,
    $RESET: 3
};

var $JssorBulletNavigator$ = window.$JssorBulletNavigator$ = function (elmt, options) {
    var self = this;
    $JssorEventManager$.call(self);

    elmt = $JssorUtils$.$GetElement(elmt);

    var _Count;
    var _Length;
    var _Width;
    var _Height;
    var _CurrentIndex;
    var _CurrentInnerIndex = 0;
    var _Options;
    var _Steps;
    var _Lanes;
    var _SpacingX;
    var _SpacingY;
    var _Orientation;
    var _ItemPrototype;
    var _PrototypeWidth;
    var _PrototypeHeight;

    var _ButtonElements = [];
    var _Buttons = [];

    function Highlight(index) {
        if (index != -1)
            _Buttons[index].$Activate(index == _CurrentInnerIndex);
    }

    function OnNavigationRequest(index) {
        self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, index * _Steps);
    }

    self.$Elmt = elmt;
    self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    self.$SetCurrentIndex = function (index) {
        if (index != _CurrentIndex) {
            var lastInnerIndex = _CurrentInnerIndex;
            var innerIndex = Math.floor(index / _Steps);
            _CurrentInnerIndex = innerIndex;
            _CurrentIndex = index;

            Highlight(lastInnerIndex);
            Highlight(innerIndex);

            //self.$TriggerEvent($JssorNavigatorEvents$.$INDEXCHANGE, index);
        }
    };

    self.$Show = function (show) {
        $JssorUtils$.$ShowElement(elmt, show);
    };

    var _Initialized;
    self.$Reset = function (length) {
        if (!_Initialized) {
            _Length = length;
            _Count = Math.ceil(length / _Steps);
            _CurrentInnerIndex = 0;

            var itemOffsetX = _PrototypeWidth + _SpacingX;
            var itemOffsetY = _PrototypeHeight + _SpacingY;

            var maxIndex = Math.ceil(_Count / _Lanes) - 1;

            _Width = _PrototypeWidth + itemOffsetX * (!_Orientation ? maxIndex : _Lanes - 1);
            _Height = _PrototypeHeight + itemOffsetY * (_Orientation ? maxIndex : _Lanes - 1);

            $JssorUtils$.$SetStyleWidth(elmt, _Width);
            $JssorUtils$.$SetStyleHeight(elmt, _Height);

            if (_Options.$AutoCenter & 1) {
                $JssorUtils$.$SetStyleLeft(elmt, ($JssorUtils$.$GetStyleWidth($JssorUtils$.$GetParentNode(elmt)) - _Width) / 2);
            }
            if (_Options.$AutoCenter & 2) {
                $JssorUtils$.$SetStyleTop(elmt, ($JssorUtils$.$GetStyleHeight($JssorUtils$.$GetParentNode(elmt)) - _Height) / 2);
            }

            for (var buttonIndex = 0; buttonIndex < _Count; buttonIndex++) {

                var numberDiv = $JssorUtils$.$CreateSpanElement();
                $JssorUtils$.$SetInnerText(numberDiv, buttonIndex + 1);

                var div = $JssorUtils$.$BuildElement(_ItemPrototype, "NumberTemplate", numberDiv, true);
                $JssorUtils$.$SetStylePosition(div, "absolute");

                var columnIndex = buttonIndex % (maxIndex + 1);
                $JssorUtils$.$SetStyleLeft(div, !_Orientation ? itemOffsetX * columnIndex : buttonIndex % _Lanes * itemOffsetX);
                $JssorUtils$.$SetStyleTop(div, _Orientation ? itemOffsetY * columnIndex : Math.floor(buttonIndex / (maxIndex + 1)) * itemOffsetY);

                $JssorUtils$.$AppendChild(elmt, div);
                _ButtonElements[buttonIndex] = div;
				/*
                if (_Options.$ActionMode & 1)
                    $JssorUtils$.$AddEvent(div, "click", $JssorUtils$.$CreateCallback(null, OnNavigationRequest, buttonIndex));
				
                if (_Options.$ActionMode & 2)
                    $JssorUtils$.$AddEvent(div, "mouseover", $JssorUtils$.$CreateCallback(null, OnNavigationRequest, buttonIndex));
				*/
                _Buttons[buttonIndex] = $JssorUtils$.$Buttonize(div);
            }

            //self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
            _Initialized = true;
        }
    };

    //JssorNavigator Constructor
	
    {
        self.$Options = _Options = $JssorUtils$.$Extend({
            $SpacingX: 0,
            $SpacingY: 0,
            $Orientation: 1,
            $ActionMode: 1
        }, options);

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $JssorUtils$.$Extend({
                $Steps: undefined,
                $Lanes: undefined
            }, _Options);
        });

        _ItemPrototype = $JssorUtils$.$FindFirstChildByAttribute(elmt, "prototype");

        $JssorDebug$.$Execute(function () {
            if (!_ItemPrototype)
                $JssorDebug$.$Fail("Navigator item prototype not defined.");

            if (isNaN($JssorUtils$.$GetStyleWidth(_ItemPrototype))) {
                $JssorDebug$.$Fail("Width of 'navigator item prototype' not specified.");
            }

            if (isNaN($JssorUtils$.$GetStyleHeight(_ItemPrototype))) {
                $JssorDebug$.$Fail("Height of 'navigator item prototype' not specified.");
            }
        });

        _PrototypeWidth = $JssorUtils$.$GetStyleWidth(_ItemPrototype);
        _PrototypeHeight = $JssorUtils$.$GetStyleHeight(_ItemPrototype);

        $JssorUtils$.$RemoveChild(elmt, _ItemPrototype);

        _Steps = _Options.$Steps || 1;
        _Lanes = _Options.$Lanes || 1;
        _SpacingX = _Options.$SpacingX;
        _SpacingY = _Options.$SpacingY;
        _Orientation = _Options.$Orientation - 1;
    }
	
};

var $JssorArrowNavigator$ = window.$JssorArrowNavigator$ = function (elmt, options, uiSearchMode) {
    var self = this;
    $JssorEventManager$.call(self);

    $JssorDebug$.$Execute(function () {
        var arrowLeft = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowleft", null, uiSearchMode);
        var arrowRight = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowright", null, uiSearchMode);

        if (!arrowLeft)
            $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowleft' not defined. Define 'arrowleft' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");

        if (!arrowRight)
            $JssorDebug$.$Fail("Option '$ArrowNavigatorOptions' spepcified, but UI 'arrowright' not defined. Define 'arrowright' to enable direct navigation, or remove option '$ArrowNavigatorOptions' to disable direct navigation.");

        if (isNaN($JssorUtils$.$GetStyleWidth(arrowLeft))) {
            $JssorDebug$.$Fail("Width of 'arrow left' not specified.");
        }

        if (isNaN($JssorUtils$.$GetStyleWidth(arrowRight))) {
            $JssorDebug$.$Fail("Width of 'arrow right' not specified.");
        }

        if (isNaN($JssorUtils$.$GetStyleHeight(arrowLeft))) {
            $JssorDebug$.$Fail("Height of 'arrow left' not specified.");
        }

        if (isNaN($JssorUtils$.$GetStyleHeight(arrowRight))) {
            $JssorDebug$.$Fail("Height of 'arrow right' not specified.");
        }
    });

    var arrowLeft = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowleft", null, uiSearchMode);
    var arrowRight = $JssorUtils$.$FindFirstChildByAttribute(elmt, "arrowright", null, uiSearchMode);
    var _Length;
    var _CurrentIndex;
    var _Options;
    var _Steps;
    var _ContainerWidth = $JssorUtils$.$GetStyleWidth(elmt);
    var _ContainerHeight = $JssorUtils$.$GetStyleHeight(elmt);
    var _ArrowWidth = $JssorUtils$.$GetStyleWidth(arrowLeft);
    var _ArrowHeight = $JssorUtils$.$GetStyleHeight(arrowLeft);

    function OnNavigationRequest(steps) {
        self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, steps, true);
    }

    self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    self.$SetCurrentIndex = function (index, virtualIndex, temp) {
        if (temp) {
            _CurrentIndex = virtualIndex;
        }
        else {
            _CurrentIndex = index;
        }
        //self.$TriggerEvent($JssorNavigatorEvents$.$INDEXCHANGE, index);
    };

    self.$Show = function (show) {
        $JssorUtils$.$ShowElement(arrowLeft, show);
        $JssorUtils$.$ShowElement(arrowRight, show);
    };

    var _Initialized;
    self.$Reset = function (length) {
        _Length = length;
        _CurrentIndex = 0;

        if (!_Initialized) {

            if (_Options.$AutoCenter & 1) {
                $JssorUtils$.$SetStyleLeft(arrowLeft, (_ContainerWidth - _ArrowWidth) / 2);
                $JssorUtils$.$SetStyleLeft(arrowRight, (_ContainerWidth - _ArrowWidth) / 2);
            }

            if (_Options.$AutoCenter & 2) {
                $JssorUtils$.$SetStyleTop(arrowLeft, (_ContainerHeight - _ArrowHeight) / 2);
                $JssorUtils$.$SetStyleTop(arrowRight, (_ContainerHeight - _ArrowHeight) / 2);
            }

            $JssorUtils$.$AddEvent(arrowLeft, "click", $JssorUtils$.$CreateCallback(null, OnNavigationRequest, -_Steps));
            $JssorUtils$.$AddEvent(arrowRight, "click", $JssorUtils$.$CreateCallback(null, OnNavigationRequest, _Steps));

            $JssorUtils$.$Buttonize(arrowLeft);
            $JssorUtils$.$Buttonize(arrowRight);
        }

        //self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
    };

    //JssorDirectionNavigator Constructor
    {
        self.$Options = _Options = $JssorUtils$.$Extend({
            $Steps: 1
        }, options);

        _Steps = _Options.$Steps;
    }
};

//$JssorThumbnailNavigator$
var $JssorThumbnailNavigator$ = window.$JssorThumbnailNavigator$ = function (elmt, options) {
    var _Self = this;
    var _Length;
    var _Count;
    var _CurrentIndex;
    var _Options;
    var _NavigationItems = [];

    var _IsIeQuirks;
    var _Width;
    var _Height;
    var _Lanes;
    var _SpacingX;
    var _SpacingY;
    var _PrototypeWidth;
    var _PrototypeHeight;
    var _DisplayPieces;

    var _Slider;
    var _CurrentMouseOverIndex = -1;

    var _SlidesContainer;
    var _ThumbnailPrototype;

    $JssorEventManager$.call(_Self);
    elmt = $JssorUtils$.$GetElement(elmt);

    function NavigationItem(item, index) {
        var self = this;
        var _Wrapper;
        var _Button;
        var _Thumbnail;

        function Highlight(mouseStatus) {
            _Button.$Activate(_CurrentIndex == index);
        }

        function OnNavigationRequest(event) {
            if (!_Slider.$LastDragSucceded()) {
                var tail = (_Lanes - index % _Lanes) % _Lanes;
                var slideVirtualIndex = _Slider.$GetVirtualIndex((index + tail) / _Lanes);
                var itemVirtualIndex = slideVirtualIndex * _Lanes - tail;
                _Self.$TriggerEvent($JssorNavigatorEvents$.$NAVIGATIONREQUEST, itemVirtualIndex);
            }
        }

        $JssorDebug$.$Execute(function () {
            self.$Wrapper = undefined;
        });

        self.$Index = index;

        self.$Highlight = Highlight;

        //NavigationItem Constructor
        {
            _Thumbnail = item.$Thumb || item.$Image || $JssorUtils$.$CreateDivElement();
            self.$Wrapper = _Wrapper = $JssorUtils$.$BuildElement(_ThumbnailPrototype, "ThumbnailTemplate", _Thumbnail, true);

            _Button = $JssorUtils$.$Buttonize(_Wrapper);
            if (_Options.$ActionMode & 1)
                $JssorUtils$.$AddEvent(_Wrapper, "click", OnNavigationRequest);
            if (_Options.$ActionMode & 2)
                $JssorUtils$.$AddEvent(_Wrapper, "mouseover", OnNavigationRequest);
        }
    }

    _Self.$GetCurrentIndex = function () {
        return _CurrentIndex;
    };

    _Self.$SetCurrentIndex = function (index, virtualIndex, temp) {
        var oldIndex = _CurrentIndex;
        _CurrentIndex = index;
        if (oldIndex != -1)
            _NavigationItems[oldIndex].$Highlight();
        _NavigationItems[index].$Highlight();

        if (!temp) {
            _Slider.$PlayTo(_Slider.$GetVirtualIndex(Math.floor(virtualIndex / _Lanes)));
        }
    };

    _Self.$Show = function (show) {
        $JssorUtils$.$ShowElement(elmt, show);
    };

    var _Initialized;
    _Self.$Reset = function (length, items, loadingContainer) {
        if (!_Initialized) {
            _Length = length;
            _Count = Math.ceil(_Length / _Lanes);
            _CurrentIndex = -1;
            _DisplayPieces = Math.min(_DisplayPieces, items.length);

            var horizontal = _Options.$Orientation & 1;

            var slideWidth = _PrototypeWidth + (_PrototypeWidth + _SpacingX) * (_Lanes - 1) * (1 - horizontal);
            var slideHeight = _PrototypeHeight + (_PrototypeHeight + _SpacingY) * (_Lanes - 1) * horizontal;

            var slidesContainerWidth = slideWidth + (slideWidth + _SpacingX) * (_DisplayPieces - 1) * horizontal;
            var slidesContainerHeight = slideHeight + (slideHeight + _SpacingY) * (_DisplayPieces - 1) * (1 - horizontal);

            $JssorUtils$.$SetStylePosition(_SlidesContainer, "absolute");
            $JssorUtils$.$SetStyleOverflow(_SlidesContainer, "hidden");
            if (_Options.$AutoCenter & 1) {
                $JssorUtils$.$SetStyleLeft(_SlidesContainer, (_Width - slidesContainerWidth) / 2);
            }
            if (_Options.$AutoCenter & 2) {
                $JssorUtils$.$SetStyleTop(_SlidesContainer, (_Height - slidesContainerHeight) / 2);
            }
            //$JssorDebug$.$Execute(function () {
            //    if (!_Options.$AutoCenter) {
            //        var slidesContainerTop = $JssorUtils$.$GetStyleTop(_SlidesContainer);
            //        var slidesContainerLeft = $JssorUtils$.$GetStyleLeft(_SlidesContainer);

            //        if (isNaN(slidesContainerTop)) {
            //            $JssorDebug$.$Fail("Position 'top' wrong specification of thumbnail navigator slides container (<div u=\"thumbnavigator\">...<div u=\"slides\">), \r\nwhen option $ThumbnailNavigatorOptions.$AutoCenter set to 0, it should be specified by inline style in pixels (like <div u=\"slides\" style=\"top: 0px;\">)");
            //        }

            //        if (isNaN(slidesContainerLeft)) {
            //            $JssorDebug$.$Fail("Position 'left' wrong specification of thumbnail navigator slides container (<div u=\"thumbnavigator\">...<div u=\"slides\">), \r\nwhen option $ThumbnailNavigatorOptions.$AutoCenter set to 0, it should be specified by inline style in pixels (like <div u=\"slides\" style=\"left: 0px;\">)");
            //        }
            //    }
            //});
            $JssorUtils$.$SetStyleWidth(_SlidesContainer, slidesContainerWidth);
            $JssorUtils$.$SetStyleHeight(_SlidesContainer, slidesContainerHeight);

            var slideItemElmts = [];
            $JssorUtils$.$Each(items, function (item, index) {
                var navigationItem = new NavigationItem(item, index);
                var navigationItemWrapper = navigationItem.$Wrapper;

                var columnIndex = Math.floor(index / _Lanes);
                var laneIndex = index % _Lanes;

                $JssorUtils$.$SetStyleLeft(navigationItemWrapper, (_PrototypeWidth + _SpacingX) * laneIndex * (1 - horizontal));
                $JssorUtils$.$SetStyleTop(navigationItemWrapper, (_PrototypeHeight + _SpacingY) * laneIndex * horizontal);

                if (!slideItemElmts[columnIndex]) {
                    slideItemElmts[columnIndex] = $JssorUtils$.$CreateDivElement();
                    $JssorUtils$.$AppendChild(_SlidesContainer, slideItemElmts[columnIndex]);
                }

                $JssorUtils$.$AppendChild(slideItemElmts[columnIndex], navigationItemWrapper);

                _NavigationItems.push(navigationItem);
            });

            var slideshowOptions = $JssorUtils$.$Extend({
                $AutoPlay: false,
                $NaviQuitDrag: false,
                $SlideWidth: slideWidth,
                $SlideHeight: slideHeight,
                $SlideSpacing: _SpacingX * horizontal + _SpacingY * (1 - horizontal),
                $MinDragOffsetToSlide: 12,
                $SlideDuration: 200,
                $PauseOnHover: 3,
                $PlayOrientation: _Options.$Orientation,
                $DragOrientation: _Options.$DisableDrag ? 0 : _Options.$Orientation
            }, _Options);

            _Slider = new $JssorSlider$(elmt, slideshowOptions);

            _Initialized = true;
        }

        //_Self.$TriggerEvent($JssorNavigatorEvents$.$RESET);
    };

    //JssorThumbnailNavigator Constructor
    {
        _Self.$Options = _Options = $JssorUtils$.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, options);

        //Sodo statement for development time intellisence only
        $JssorDebug$.$Execute(function () {
            _Options = $JssorUtils$.$Extend({
                $Lanes: undefined,
                $Width: undefined,
                $Height: undefined
            }, _Options);
        });

        _Width = $JssorUtils$.$GetStyleWidth(elmt);
        _Height = $JssorUtils$.$GetStyleHeight(elmt);

        $JssorDebug$.$Execute(function () {
            if (!_Width)
                $JssorDebug$.$Fail("width of 'thumbnavigator' container not specified.");
            if (!_Height)
                $JssorDebug$.$Fail("height of 'thumbnavigator' container not specified.");
        });

        _SlidesContainer = $JssorUtils$.$FindFirstChildByAttribute(elmt, "slides");
        _ThumbnailPrototype = $JssorUtils$.$FindFirstChildByAttribute(_SlidesContainer, "prototype");

        $JssorDebug$.$Execute(function () {
            if (!_ThumbnailPrototype)
                $JssorDebug$.$Fail("prototype of 'thumbnavigator' not defined.");
        });

        $JssorUtils$.$RemoveChild(_SlidesContainer, _ThumbnailPrototype);

        _Lanes = _Options.$Lanes || 1;
        _SpacingX = _Options.$SpacingX;
        _SpacingY = _Options.$SpacingY;
        _PrototypeWidth = $JssorUtils$.$GetStyleWidth(_ThumbnailPrototype);
        _PrototypeHeight = $JssorUtils$.$GetStyleHeight(_ThumbnailPrototype);
        _DisplayPieces = _Options.$DisplayPieces;
    }
};

//$JssorCaptionSlider$
function $JssorCaptionSliderBase$() {
    $JssorAnimator$.call(this, 0, 0);
    this.$Revert = $JssorUtils$.$EmptyFunction;
}

var $JssorCaptionSlider$ = window.$JssorCaptionSlider$ = function (container, captionSlideOptions, playIn) {
    $JssorDebug$.$Execute(function () {
        if (!captionSlideOptions.$CaptionTransitions) {
            $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' not specified.");
        }
        //else if (!$JssorUtils$.$IsArray(captionSlideOptions.$CaptionTransitions)) {
        //    $JssorDebug$.$Error("'$CaptionSliderOptions' option error, '$CaptionSliderOptions.$CaptionTransitions' is not an array.");
        //}
    });

    var _Self = this;
    var _ImmediateOutCaptionHanger;

    var _CaptionTransitions = captionSlideOptions.$CaptionTransitions;
    var _CaptionTuningFetcher = { $Transition: "t", $Delay: "d", $Duration: "du", $ScaleHorizontal: "x", $ScaleVertical: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", $BeginTime: "b" };
    var _CaptionTuningTransfer = {
        $Default: function (value, tuningValue) {
            if (!isNaN(tuningValue.$Value))
                value = tuningValue.$Value;
            else
                value *= tuningValue.$Percent;

            return value;
        },
        $Opacity: function (value, tuningValue) {
            return this.$Default(value - 1, tuningValue);
        }
    };
    _CaptionTuningTransfer.$Zoom = _CaptionTuningTransfer.$Opacity;

    $JssorAnimator$.call(_Self, 0, 0);

    function GetCaptionItems(element, level) {

        var itemsToPlay = [];
        var lastTransitionName;
        var namedTransitions = [];
        var namedTransitionOrders = [];

        //$JssorDebug$.$Execute(function () {

        //    var debugInfoElement = $JssorUtils$.$GetElement("debugInfo");

        //    if (debugInfoElement && playIn) {

        //        var text = $JssorUtils$.$GetInnerHtml(debugInfoElement) + "<br>";

        //        $JssorUtils$.$SetInnerHtml(debugInfoElement, text);
        //    }
        //});

        function FetchRawTransition(captionElmt, index) {
            var rawTransition = {};

            $JssorUtils$.$Each(_CaptionTuningFetcher, function (fetchAttribute, fetchProperty) {
                var attributeValue = $JssorUtils$.$GetAttribute(captionElmt, fetchAttribute + (index || ""));
                if (attributeValue) {
                    var propertyValue = {};

                    if (fetchAttribute == "t") {
                        //if (($JssorUtils$.$IsBrowserChrome() || $JssorUtils$.$IsBrowserSafari() || $JssorUtils$.$IsBrowserFireFox()) && attributeValue == "*") {
                        //    attributeValue = Math.floor(Math.random() * captionSlideOptions.$CaptionTransitions.length);
                        //    $JssorUtils$.$SetAttribute(captionElmt, fetchAttribute + (index || ""), attributeValue);
                        //}

                        propertyValue.$Value = attributeValue;
                    }
                    else if (attributeValue.indexOf("%") + 1)
                        propertyValue.$Percent = $JssorUtils$.$ParseFloat(attributeValue) / 100;
                    else
                        propertyValue.$Value = $JssorUtils$.$ParseFloat(attributeValue);

                    rawTransition[fetchProperty] = propertyValue;
                }
            });

            return rawTransition;
        }

        function GetRandomTransition() {
            //return _CaptionTransitions.length && _CaptionTransitions[Math.floor(Math.random() * 42737 / (i + 1)) % _CaptionTransitions.length];
            return _CaptionTransitions[Math.floor(Math.random() * _CaptionTransitions.length)];
        }

        function EvaluateCaptionTransition(transitionName) {

            var transition;

            if (transitionName == "*") {
                transition = GetRandomTransition();
            }
            else if (transitionName) {

                //indexed transition allowed, just the same as named transition
                var tempTransition = _CaptionTransitions[$JssorUtils$.$ParseInt(transitionName)] || _CaptionTransitions[transitionName];

                if ($JssorUtils$.$IsArray(tempTransition)) {
                    if (transitionName != lastTransitionName) {
                        lastTransitionName = transitionName;
                        namedTransitionOrders[transitionName] = 0;

                        namedTransitions[transitionName] = tempTransition[Math.floor(Math.random() * tempTransition.length)];
                    }
                    else {
                        namedTransitionOrders[transitionName]++;
                    }

                    tempTransition = namedTransitions[transitionName];

                    if ($JssorUtils$.$IsArray(tempTransition)) {
                        tempTransition = tempTransition.length && tempTransition[namedTransitionOrders[transitionName] % tempTransition.length];

                        if ($JssorUtils$.$IsArray(tempTransition)) {
                            //got transition from array level 3, random for all captions
                            tempTransition = tempTransition[Math.floor(Math.random() * tempTransition.length)];
                        }
                        //else {
                        //    //got transition from array level 2, in sequence for all adjacent captions with same name specified
                        //    transition = tempTransition;
                        //}
                    }
                    //else {
                    //    //got transition from array level 1, random but same for all adjacent captions with same name specified
                    //    transition = tempTransition;
                    //}
                }
                //else {
                //    //got transition directly from a simple transition object
                //    transition = tempTransition;
                //}

                transition = tempTransition;

                if ($JssorUtils$.$IsString(transition))
                    transition = EvaluateCaptionTransition(transition);
            }

            return transition;
        }

        var captionElmts = $JssorUtils$.$GetChildren(element);
        $JssorUtils$.$Each(captionElmts, function (captionElmt, i) {

            var transitionsWithTuning = [];
            transitionsWithTuning.$Elmt = captionElmt;
            var isCaption = $JssorUtils$.$GetAttribute(captionElmt, "u") == "caption";

            $JssorUtils$.$Each(playIn ? [0, 3] : [2], function (j, k) {

                if (isCaption) {
                    var transition;
                    var rawTransition;

                    if (j != 2 || !$JssorUtils$.$GetAttribute(captionElmt, "t3")) {
                        rawTransition = FetchRawTransition(captionElmt, j);

                        if (j == 2 && !rawTransition.$Transition) {
                            rawTransition.$Delay = rawTransition.$Delay || { $Value: 0 };
                            rawTransition = $JssorUtils$.$Extend(FetchRawTransition(captionElmt, 0), rawTransition);
                        }
                    }

                    if (rawTransition && rawTransition.$Transition) {

                        transition = EvaluateCaptionTransition(rawTransition.$Transition.$Value);

                        if (transition) {

                            var transitionWithTuning = $JssorUtils$.$Extend({ $Delay: 0, $ScaleHorizontal: 1, $ScaleVertical: 1 }, transition);

                            $JssorUtils$.$Each(rawTransition, function (rawPropertyValue, propertyName) {
                                var tuningPropertyValue = (_CaptionTuningTransfer[propertyName] || _CaptionTuningTransfer.$Default).apply(_CaptionTuningTransfer, [transitionWithTuning[propertyName], rawTransition[propertyName]]);
                                if (!isNaN(tuningPropertyValue))
                                    transitionWithTuning[propertyName] = tuningPropertyValue;
                            });

                            if (!k) {
                                if (rawTransition.$BeginTime)
                                    transitionWithTuning.$BeginTime = rawTransition.$BeginTime.$Value || 0;
                                else if ((playIn ? captionSlideOptions.$PlayInMode : captionSlideOptions.$PlayOutMode) & 2)
                                    transitionWithTuning.$BeginTime = 0;
                            }
                        }
                    }

                    transitionsWithTuning.push(transitionWithTuning);
                }

                if ((level % 2) && !k) {
                    //transitionsWithTuning.$Children = GetCaptionItems(captionElmt, lastTransitionName, [].concat(namedTransitions), [].concat(namedTransitionOrders), level + 1);
                    transitionsWithTuning.$Children = GetCaptionItems(captionElmt, level + 1);
                }
            });

            itemsToPlay.push(transitionsWithTuning);
        });

        return itemsToPlay;
    }

    function CreateAnimator(item, transition, immediateOut) {

        var animatorOptions = {
            $Easing: transition.$Easing,
            $Round: transition.$Round,
            $During: transition.$During,
            $Reverse: playIn && !immediateOut,
            $Optimize: true
        };

        $JssorDebug$.$Execute(function () {
            animatorOptions.$CaptionAnimator = true;
        });

        var captionItem = item;
        var captionParent = $JssorUtils$.$GetParentNode(item);

        var captionItemWidth = $JssorUtils$.$GetStyleWidth(captionItem);
        var captionItemHeight = $JssorUtils$.$GetStyleHeight(captionItem);
        var captionParentWidth = $JssorUtils$.$GetStyleWidth(captionParent);
        var captionParentHeight = $JssorUtils$.$GetStyleHeight(captionParent);

        var toStyles = {};
        var fromStyles = {};
        var scaleClip = transition.$ScaleClip || 1;

        //Opacity
        if (transition.$Opacity) {
            toStyles.$Opacity = 2 - transition.$Opacity;
        }

        animatorOptions.$OriginalWidth = captionItemWidth;
        animatorOptions.$OriginalHeight = captionItemHeight;

        //Transform
        if (transition.$Zoom || transition.$Rotate) {
            toStyles.$Zoom = transition.$Zoom ? transition.$Zoom - 1 : 1;

            if ($JssorUtils$.$IsBrowserIe9Earlier() || $JssorUtils$.$IsBrowserOpera())
                toStyles.$Zoom = Math.min(toStyles.$Zoom, 2);

            fromStyles.$Zoom = 1;

            var rotate = transition.$Rotate || 0;
            if (rotate == true)
                rotate = 1;

            toStyles.$Rotate = rotate * 360;
            fromStyles.$Rotate = 0;
        }
            //Clip
        else if (transition.$Clip) {
            var fromStyleClip = { $Top: 0, $Right: captionItemWidth, $Bottom: captionItemHeight, $Left: 0 };
            var toStyleClip = $JssorUtils$.$Extend({}, fromStyleClip);

            var blockOffset = toStyleClip.$Offset = {};

            var topBenchmark = transition.$Clip & 4;
            var bottomBenchmark = transition.$Clip & 8;
            var leftBenchmark = transition.$Clip & 1;
            var rightBenchmark = transition.$Clip & 2;

            if (topBenchmark && bottomBenchmark) {
                blockOffset.$Top = captionItemHeight / 2 * scaleClip;
                blockOffset.$Bottom = -blockOffset.$Top;
            }
            else if (topBenchmark)
                blockOffset.$Bottom = -captionItemHeight * scaleClip;
            else if (bottomBenchmark)
                blockOffset.$Top = captionItemHeight * scaleClip;

            if (leftBenchmark && rightBenchmark) {
                blockOffset.$Left = captionItemWidth / 2 * scaleClip;
                blockOffset.$Right = -blockOffset.$Left;
            }
            else if (leftBenchmark)
                blockOffset.$Right = -captionItemWidth * scaleClip;
            else if (rightBenchmark)
                blockOffset.$Left = captionItemWidth * scaleClip;

            animatorOptions.$Move = transition.$Move;
            toStyles.$Clip = toStyleClip;
            fromStyles.$Clip = fromStyleClip;
        }

        //Fly
        {
            var direction = transition.$FlyDirection;

            var toLeft = 0;
            var toTop = 0;

            var scaleHorizontal = transition.$ScaleHorizontal;
            var scaleVertical = transition.$ScaleVertical;

            if ($JssorDirection$.$IsToLeft(direction)) {
                toLeft -= captionParentWidth * scaleHorizontal;
            }
            else if ($JssorDirection$.$IsToRight(direction)) {
                toLeft += captionParentWidth * scaleHorizontal;
            }

            if ($JssorDirection$.$IsToTop(direction)) {
                toTop -= captionParentHeight * scaleVertical;
            }
            else if ($JssorDirection$.$IsToBottom(direction)) {
                toTop += captionParentHeight * scaleVertical;
            }

            if (toLeft || toTop || animatorOptions.$Move) {
                toStyles.$Left = toLeft + $JssorUtils$.$GetStyleLeft(captionItem);
                toStyles.$Top = toTop + $JssorUtils$.$GetStyleTop(captionItem);
            }
        }

        //duration
        var duration = transition.$Duration;

        fromStyles = $JssorUtils$.$Extend(fromStyles, $JssorUtils$.$GetStyles(captionItem, toStyles));

        animatorOptions.$Setter = $JssorUtils$.$GetStyleSetterEx();

        return new $JssorAnimator$(transition.$Delay, duration, animatorOptions, captionItem, fromStyles, toStyles);
    }

    function CreateAnimators(streamLineLength, captionItems) {

        $JssorUtils$.$Each(captionItems, function (captionItem, i) {

            $JssorDebug$.$Execute(function () {
                if (captionItem.length) {
                    var top = $JssorUtils$.$GetStyleTop(captionItem.$Elmt);
                    var left = $JssorUtils$.$GetStyleLeft(captionItem.$Elmt);
                    var width = $JssorUtils$.$GetStyleWidth(captionItem.$Elmt);
                    var height = $JssorUtils$.$GetStyleHeight(captionItem.$Elmt);

                    var error = null;

                    if (isNaN(top))
                        error = "style 'top' not specified";
                    else if (isNaN(left))
                        error = "style 'left' not specified";
                    else if (isNaN(width))
                        error = "style 'width' not specified";
                    else if (isNaN(height))
                        error = "style 'height' not specified";

                    if (error)
                        $JssorDebug$.$Error("Caption " + (i + 1) + " definition error, " + error + ".\r\n" + captionItem.$Elmt.outerHTML);
                }
            });

            var animator;
            var captionElmt = captionItem.$Elmt;
            var transition = captionItem[0];
            var transition3 = captionItem[1];

            if (transition) {

                animator = CreateAnimator(captionElmt, transition);
                streamLineLength = animator.$Locate($JssorUtils$.$IsUndefined(transition.$BeginTime) ? streamLineLength : transition.$BeginTime, 1);
            }

            streamLineLength = CreateAnimators(streamLineLength, captionItem.$Children);

            if (transition3) {
                var animator3 = CreateAnimator(captionElmt, transition3, 1);
                animator3.$Locate(streamLineLength, 1);
                _Self.$Combine(animator3);
                _ImmediateOutCaptionHanger.$Combine(animator3);
            }

            if (animator)
                _Self.$Combine(animator);
        });

        return streamLineLength;
    }

    _Self.$Revert = function () {
        _Self.$GoToPosition(_Self.$GetPosition_OuterEnd() * (playIn || 0));
        _ImmediateOutCaptionHanger.$GoToBegin();
    };

    //Constructor
    {
        _ImmediateOutCaptionHanger = new $JssorAnimator$(0, 0);

        //var streamLineLength = 0;
        //var captionItems = GetCaptionItems(container, null, [], [], 1);

        CreateAnimators(0, GetCaptionItems(container, 1));
    }
};


//Event Table

//$EVT_CLICK = 21;			    function(slideIndex[, event])
//$EVT_DRAG_START = 22;		    function(position[, virtualPosition, event])
//$EVT_DRAG_END = 23;		    function(position, startPosition[, virtualPosition, virtualStartPosition, event])
//$EVT_SWIPE_START = 24;		function(position[, virtualPosition])
//$EVT_SWIPE_END = 25;		    function(position[, virtualPosition])

//$EVT_LOAD_START = 26;			function(slideIndex)
//$EVT_LOAD_END = 27;			function(slideIndex)

//$EVT_POSITION_CHANGE = 202;	function(position, fromPosition[, virtualPosition, virtualFromPosition])
//$EVT_PARK = 203;			    function(slideIndex, fromIndex)

//$EVT_PROGRESS_CHANGE = 208;	function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])
//$EVT_STATE_CHANGE = 209;	    function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])

//$EVT_ROLLBACK_START = 210;	function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])
//$EVT_ROLLBACK_END = 211;	    function(slideIndex, progress[, progressBegin, idleBegin, idleEnd, progressEnd])

//$EVT_SLIDESHOW_START = 206;   function(slideIndex[, progressBegin, slideshowBegin, slideshowEnd, progressEnd])
//$EVT_SLIDESHOW_END = 207;     function(slideIndex[, progressBegin, slideshowBegin, slideshowEnd, progressEnd])

//http://www.jssor.com/development/reference-api.html
;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
;
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.2.0'

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.2.0'

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      Plugin.call(actives, 'hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href
    var $this   = $(this)
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? { top: 0, left: 0 } : $element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.2.0'

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
;
/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  var focused = true;

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);
	
    // making variables public

    //if rtl value was not passed and html is in rtl..enable it by default.
  	if(typeof options.rtl=='undefined' && $('html').attr('dir')=='rtl'){
  		options.rtl=true;
    }
    slider.vars = $.extend({}, $.flexslider.defaults, options);
    
    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // depricating this idea, as devices are being released with both of these events
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {};

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) { slider.currentSlide = 0; }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; }
        slider.prop = (vertical) ? "top" : ( slider.vars.rtl ? "marginRight" : "marginLeft" );
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // CUSTOM DIRECTION NAV:
        if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) { methods.controlNav.setup(); }

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.setup(); }

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (slider.vars.rtl? 
                                ((keycode === 37) ? slider.getTarget('next') :
                                (keycode === 39) ? slider.getTarget('prev') : false)
                                :
                                ((keycode === 39) ? slider.getTarget('next') :
                                (keycode === 37) ? slider.getTarget('prev') : false)
                                )
                                ;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) { methods.pausePlay.setup(); }

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); }

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) { slider.pause(); }
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); }
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) { methods.asNav.setup(); }

        // TOUCH
        if (touch && slider.vars.touch) { methods.touch(); }

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange focus", methods.resize); }

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
        				var posFromX;
                if(slider.vars.rtl){
        					posFromX = -1*($slide.offset().right - $(slider).scrollLeft()); // Find position of slide relative to right of slider container	
        				}
        				else
        				{
        					posFromX = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
        				}
                if( posFromX <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture) {
                        e.currentTarget._gesture.addPointer(e.pointerId);
                      }
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              if ( undefined === slide.attr( 'data-thumb-alt' ) ) { slide.attr( 'data-thumb-alt', '' ); }
              altText = ( '' !== slide.attr( 'data-thumb-alt' ) ) ? altText = ' alt="' + slide.attr( 'data-thumb-alt' ) + '"' : '';
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"' + altText + '/>' : '<a href="#">' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' !== captn && undefined !== captn ) { item += '<span class="' + namespace + 'caption">' + captn + '</span>'; }
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a href="#">' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CUSTOM DIRECTION NAV:
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
          // CONTROLSCONTAINER:
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a href="#"></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            onTouchStart = function(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;
                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            };

            onTouchMove = function(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : (slider.vars.rtl?-1:1)*(startX - localX);
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));
              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            };

            onTouchEnd = function(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            };

            el.addEventListener('touchstart', onTouchStart, false);
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = (slider.vars.rtl?-1:1)*accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) { slider.doMath(); }

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) {
                  clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                } else {
                  slider.pause(); //Or just pause
                }
              }
              else {
                if(slider.started) {
                  slider.play(); //Initiated before, just play
                } else {
                  if (slider.vars.initDelay > 0) {
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); //Didn't init before: simply init or wait for it
                  }
                }
              }
            });
          }
        },
        isHidden: function() {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function() {
          var prefixes = ['webkit','moz','ms','o'];
          // if 'hidden' is natively supported just return it
          if ('hidden' in document) {
            return 'hidden';
          }
          // otherwise loop over all the known prefixes until we find one
          for ( var i = 0; i < prefixes.length; i++ ) {
              if ((prefixes[i] + 'Hidden') in document) {
                return prefixes[i] + 'Hidden';
              }
          }
          // otherwise it's not supported
          return null;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) { slider.pause(); }

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) { methods.sync("animate"); }

        // CONTROLNAV
        if (slider.vars.controlNav) { methods.controlNav.active(); }

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); }

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.update(); }

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) { slider.pause(); }
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }

            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
            //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); }
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) { slider.flexAnimate(slider.getTarget("next")); }
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("play"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("pause"); }
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) { clearInterval(slider.animatedSlides); }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("play"); }
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + ((slider.vars.rtl?-1:1)*parseInt(target)+'px') + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) { slider.container.css(slider.args); }

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") { slider.container.find('.clone').remove(); }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
          if(slider.vars.rtl){
              slider.newSlides.css({"width": slider.computedW, "marginLeft" : slider.computedM, "float": "right", "display": "block"});
           }
            else{
              slider.newSlides.css({"width": slider.computedW, "marginRight" : slider.computedM, "float": "left", "display": "block"});
            }
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        if(slider.vars.rtl){
          slider.slides.css({"width": "100%", "float": 'right', "marginLeft": "-100%", "position": "relative"});
        }
        else{
          slider.slides.css({"width": "100%", "float": 'left', "marginRight": "-100%", "position": "relative"});
        }
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(); }
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); }

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.itemM = slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.itemM = slideMargin;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
      slider.computedM = slider.itemM;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) { methods.directionNav.update(); }

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,   		//{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    customDirectionNav: "",         //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {},             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
	rtl: false             //{NEW} Boolean: Whether or not to enable RTL mode
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) { options = {}; }

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) { options.start($this); }
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") { $slider.flexAnimate(options, true); }
      }
    }
  };
})(jQuery);
;
/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function(e){var t=!0;e.flexslider=function(a,n){var i=e(a);"undefined"==typeof n.rtl&&"rtl"==e("html").attr("dir")&&(n.rtl=!0),i.vars=e.extend({},e.flexslider.defaults,n);var r,s=i.vars.namespace,o=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=("ontouchstart"in window||o||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,c="click touchend MSPointerUp keyup",d="",u="vertical"===i.vars.direction,v=i.vars.reverse,p=i.vars.itemWidth>0,m="fade"===i.vars.animation,f=""!==i.vars.asNavFor,g={};e.data(a,"flexslider",i),g={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=e(i.vars.selector,i),i.container=e(i.containerSelector,i),i.count=i.slides.length,i.syncExists=e(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=u?"top":i.vars.rtl?"marginRight":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!m&&i.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return i.pfx=t[a].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=e(i.vars.controlsContainer).length>0&&e(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=e(i.vars.manualControls).length>0&&e(i.vars.manualControls)),""!==i.vars.customDirectionNav&&(i.customDirectionNav=2===e(i.vars.customDirectionNav).length&&e(i.vars.customDirectionNav)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&g.controlNav.setup(),i.vars.directionNav&&g.directionNav.setup(),i.vars.keyboard&&(1===e(i.containerSelector).length||i.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!i.animating&&(39===t||37===t)){var a=i.vars.rtl?37===t?i.getTarget("next"):39===t?i.getTarget("prev"):!1:39===t?i.getTarget("next"):37===t?i.getTarget("prev"):!1;i.flexAnimate(a,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(e,t,a,n){e.preventDefault();var r=0>t?i.getTarget("next"):i.getTarget("prev");i.flexAnimate(r,i.vars.pauseOnAction)}),i.vars.pausePlay&&g.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&g.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),f&&g.asNav.setup(),l&&i.vars.touch&&g.touch(),(!m||m&&i.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",g.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(s+"active-slide").eq(i.currentItem).addClass(s+"active-slide"),o?(a._slider=i,i.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var a=e(this),n=a.index();e(i.vars.asNavFor).data("flexslider").animating||a.hasClass("active")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(c,function(t){t.preventDefault();var a,n=e(this),r=n.index();a=i.vars.rtl?-1*(n.offset().right-e(i).scrollLeft()):n.offset().left-e(i).scrollLeft(),0>=a&&n.hasClass(s+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):e(i.vars.asNavFor).data("flexslider").animating||n.hasClass(s+"active-slide")||(i.direction=i.currentItem<r?"next":"prev",i.flexAnimate(r,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var t,a,n="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",r=1;if(i.controlNavScaffold=e('<ol class="'+s+"control-nav "+s+n+'"></ol>'),i.pagingCount>1)for(var o=0;o<i.pagingCount;o++){if(a=i.slides.eq(o),void 0===a.attr("data-thumb-alt")&&a.attr("data-thumb-alt",""),altText=""!==a.attr("data-thumb-alt")?altText=' alt="'+a.attr("data-thumb-alt")+'"':"",t="thumbnails"===i.vars.controlNav?'<img src="'+a.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+r+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var l=a.attr("data-thumbcaption");""!==l&&void 0!==l&&(t+='<span class="'+s+'caption">'+l+"</span>")}i.controlNavScaffold.append("<li>"+t+"</li>"),r++}i.controlsContainer?e(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),g.controlNav.set(),g.controlNav.active(),i.controlNavScaffold.delegate("a, img",c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(s+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,g.controlNav.active(),i.controlNav.bind(c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(s+"active")||(n>i.currentSlide?i.direction="next":i.direction="prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=e("."+s+"control-nav li "+t,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(s+"active").eq(i.animatingTo).addClass(s+"active")},update:function(t,a){i.pagingCount>1&&"add"===t?i.controlNavScaffold.append(e('<li><a href="#">'+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(a).closest("li").remove(),g.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(a,t):g.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+s+'direction-nav"><li class="'+s+'nav-prev"><a class="'+s+'prev" href="#">'+i.vars.prevText+'</a></li><li class="'+s+'nav-next"><a class="'+s+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.customDirectionNav?i.directionNav=i.customDirectionNav:i.controlsContainer?(e(i.controlsContainer).append(t),i.directionNav=e("."+s+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=e("."+s+"direction-nav li a",i)),g.directionNav.update(),i.directionNav.bind(c,function(t){t.preventDefault();var a;(""===d||d===t.type)&&(a=e(this).hasClass(s+"next")?i.getTarget("next"):i.getTarget("prev"),i.flexAnimate(a,i.vars.pauseOnAction)),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(){var e=s+"disabled";1===i.pagingCount?i.directionNav.addClass(e).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(e).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+s+"prev").addClass(e).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+s+"next").addClass(e).attr("tabindex","-1"):i.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+s+'pauseplay"><a href="#"></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=e("."+s+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=e("."+s+"pauseplay a",i)),g.pausePlay.update(i.vars.slideshow?s+"pause":s+"play"),i.pausePlay.bind(c,function(t){t.preventDefault(),(""===d||d===t.type)&&(e(this).hasClass(s+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(e){"play"===e?i.pausePlay.removeClass(s+"pause").addClass(s+"play").html(i.vars.playText):i.pausePlay.removeClass(s+"play").addClass(s+"pause").html(i.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),a._gesture.addPointer(e.pointerId),T=0,c=u?i.h:i.w,f=Number(new Date),l=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*c:(i.currentSlide+i.cloneOffset)*c)}function t(e){e.stopPropagation();var t=e.target._slider;if(t){var n=-e.translationX,i=-e.translationY;return T+=u?i:n,d=(t.vars.rtl?-1:1)*T,x=u?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){a._gesture.stop()}):void((!x||Number(new Date)-f>500)&&(e.preventDefault(),!m&&t.transitions&&(t.vars.animationLoop||(d=T/(0===t.currentSlide&&0>T||t.currentSlide===t.last&&T>0?Math.abs(T)/c+2:1)),t.setProps(l+d,"setTouch"))))}}function n(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==d){var a=v?-d:d,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):m||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,s=null,d=null,l=null,T=0}}var r,s,l,c,d,f,g,h,S,x=!1,y=0,b=0,T=0;o?(a.style.msTouchAction="none",a._gesture=new MSGesture,a._gesture.target=a,a.addEventListener("MSPointerDown",e,!1),a._slider=i,a.addEventListener("MSGestureChange",t,!1),a.addEventListener("MSGestureEnd",n,!1)):(g=function(e){i.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(i.pause(),c=u?i.h:i.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*c:(i.currentSlide+i.cloneOffset)*c,r=u?b:y,s=u?y:b,a.addEventListener("touchmove",h,!1),a.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,d=u?r-b:(i.vars.rtl?-1:1)*(r-y),x=u?Math.abs(d)<Math.abs(y-s):Math.abs(d)<Math.abs(b-s);var t=500;(!x||Number(new Date)-f>t)&&(e.preventDefault(),!m&&i.transitions&&(i.vars.animationLoop||(d/=0===i.currentSlide&&0>d||i.currentSlide===i.last&&d>0?Math.abs(d)/c+2:1),i.setProps(l+d,"setTouch")))},S=function(e){if(a.removeEventListener("touchmove",h,!1),i.animatingTo===i.currentSlide&&!x&&null!==d){var t=v?-d:d,n=t>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(t)>50||Math.abs(t)>c/2)?i.flexAnimate(n,i.vars.pauseOnAction):m||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}a.removeEventListener("touchend",S,!1),r=null,s=null,d=null,l=null},a.addEventListener("touchstart",g,!1))},resize:function(){!i.animating&&i.is(":visible")&&(p||i.doMath(),m?g.smoothHeight():p?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&g.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!u||m){var t=m?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).height()},e):t.height(i.slides.eq(i.animatingTo).height())}},sync:function(t){var a=e(i.vars.sync).data("flexslider"),n=i.animatingTo;switch(t){case"animate":a.flexAnimate(n,i.vars.pauseOnAction,!1,!0);break;case"play":a.playing||a.asNav||a.play();break;case"pause":a.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=g.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){g.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){var e=g.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(r),r=setTimeout(function(){d=""},3e3)}},i.flexAnimate=function(t,a,n,r,o){if(i.vars.animationLoop||t===i.currentSlide||(i.direction=t>i.currentSlide?"next":"prev"),f&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,o)||n)&&i.is(":visible")){if(f&&r){var c=e(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===t||t===i.count-1,c.flexAnimate(t,!0,!1,!0,o),i.direction=i.currentItem<t?"next":"prev",c.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,a&&i.pause(),i.vars.before(i),i.syncExists&&!o&&g.sync("animate"),i.vars.controlNav&&g.controlNav.active(),p||i.slides.removeClass(s+"active-slide").eq(t).addClass(s+"active-slide"),i.atEnd=0===t||t===i.last,i.vars.directionNav&&g.directionNav.update(),t===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),m)l?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.wrapup(x)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(t).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var d,h,S,x=u?i.slides.filter(":first").height():i.computedW;p?(d=i.vars.itemMargin,S=(i.itemW+d)*i.move*i.animatingTo,h=S>i.limit&&1!==i.visible?i.limit:S):h=0===i.currentSlide&&t===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?v?(i.count+i.cloneOffset)*x:0:i.currentSlide===i.last&&0===t&&i.vars.animationLoop&&"prev"!==i.direction?v?0:(i.count+1)*x:v?(i.count-1-t+i.cloneOffset)*x:(t+i.cloneOffset)*x,i.setProps(h,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(x)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(x)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(x)})}i.vars.smoothHeight&&g.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(e){m||p||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&t&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&g.pausePlay.update("play"),i.syncExists&&g.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&g.pausePlay.update("pause"),i.syncExists&&g.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(e,t){var a=f?i.pagingCount-1:i.last;return t?!0:f&&i.currentItem===i.count-1&&0===e&&"prev"===i.direction?!0:f&&0===i.currentItem&&e===i.pagingCount-1&&"next"!==i.direction?!1:e!==i.currentSlide||f?i.vars.animationLoop?!0:i.atEnd&&0===i.currentSlide&&e===a&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===a&&0===e&&"next"===i.direction?!1:!0:!1},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,a){var n=function(){var a=e?e:(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,n=function(){if(p)return"setTouch"===t?e:v&&i.animatingTo===i.last?0:v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:a;switch(t){case"setTotal":return v?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return v?e:e;case"jumpEnd":return v?e:i.count*e;case"jumpStart":return v?i.count*e:e;default:return e}}();return-1*n+"px"}();i.transitions&&(n=u?"translate3d(0,"+n+",0)":"translate3d("+((i.vars.rtl?-1:1)*parseInt(n)+"px")+",0,0)",a=void 0!==a?a/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",a),i.container.css("transition-duration",a)),i.args[i.prop]=n,(i.transitions||void 0===a)&&i.container.css(i.args),i.container.css("transform",n)},i.setup=function(t){if(m)i.vars.rtl?i.slides.css({width:"100%","float":"right",marginLeft:"-100%",position:"relative"}):i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(l?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):0==i.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&g.smoothHeight();else{var a,n;"init"===t&&(i.viewport=e('<div class="'+s+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,v&&(n=e.makeArray(i.slides).reverse(),i.slides=e(n),i.container.empty().append(i.slides))),i.vars.animationLoop&&!p&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(g.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(g.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),i.newSlides=e(i.vars.selector,i),a=v?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,u&&!p?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(a*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(a*i.computedW,"init"),setTimeout(function(){i.doMath(),i.vars.rtl?i.newSlides.css({width:i.computedW,marginLeft:i.computedM,"float":"right",display:"block"}):i.newSlides.css({width:i.computedW,marginRight:i.computedM,"float":"left",display:"block"}),i.vars.smoothHeight&&g.smoothHeight()},"init"===t?100:0))}p||i.slides.removeClass(s+"active-slide").eq(i.currentSlide).addClass(s+"active-slide"),i.vars.init(i)},i.doMath=function(){var e=i.slides.first(),t=i.vars.itemMargin,a=i.vars.minItems,n=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),p?(i.itemT=i.vars.itemWidth+t,i.itemM=t,i.minW=a?a*i.itemT:i.w,i.maxW=n?n*i.itemT-t:i.w,i.itemW=i.minW>i.w?(i.w-t*(a-1))/a:i.maxW<i.w?(i.w-t*(n-1))/n:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+t*(i.count-1):(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.itemM=t,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding,i.computedM=i.itemM},i.update=function(e,t){i.doMath(),p||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===t&&!p||i.pagingCount>i.controlNav.length?g.controlNav.update("add"):("remove"===t&&!p||i.pagingCount<i.controlNav.length)&&(p&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),g.controlNav.update("remove",i.last))),i.vars.directionNav&&g.directionNav.update()},i.addSlide=function(t,a){var n=e(t);i.count+=1,i.last=i.count-1,u&&v?void 0!==a?i.slides.eq(i.count-a).after(n):i.container.prepend(n):void 0!==a?i.slides.eq(a).before(n):i.container.append(n),i.update(a,"add"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(t){var a=isNaN(t)?i.slides.index(e(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?e(t,i.slides).remove():u&&v?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(a,"remove"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},g.init()},e(window).blur(function(e){t=!1}).focus(function(e){t=!0}),e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){},rtl:!1},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var a=e(this),n=t.selector?t.selector:".slides > li",i=a.find(n);1===i.length&&t.allowOneSlide===!0||0===i.length?(i.fadeIn(400),t.start&&t.start(a)):void 0===a.data("flexslider")&&new e.flexslider(this,t)});var a=e(this).data("flexslider");switch(t){case"play":a.play();break;case"pause":a.pause();break;case"stop":a.stop();break;case"next":a.flexAnimate(a.getTarget("next"),!0);break;case"prev":case"previous":a.flexAnimate(a.getTarget("prev"),!0);break;default:"number"==typeof t&&a.flexAnimate(t,!0)}}}(jQuery);;
/*
(function ($, Drupal) {

  "use strict";
  Drupal.behaviors.zirconSlideshow = {
    attach: function (context, settings) {  
      jQuery(document).ready(function ($) {
        if($('#slideshow_container').length) {
			
            var _SlideshowTransitions = [
            { $Duration: 1500, $Opacity: 2 }
            ];

            var options = {
                $AutoPlay: true,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 3000,
                $PauseOnHover: 0,
                $ArrowKeyNavigation: true,
                $SlideDuration: 500,
                $MinDragOffsetToSlide: 20,
                //$SlideWidth: 1170,
                //$SlideHeight: 390,
                $SlideSpacing: 0,
                $DisplayPieces: 1,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 3,

                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                },

                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$,
                    $ChanceToShow: 2,
                    $AutoCenter: 1,
                    $Steps: 1,
                    $Lanes: 1,
                    $SpacingX: 10,
                    $SpacingY: 10,
                    $Orientation: 1
                },

                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,
                    $ChanceToShow: 2,
                    $Steps: 1
                }
            };
            var jssor_slider1 = new $JssorSlider$("slideshow_container", options);
			
            ScaleSlider();

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider);
            }
			
        }
		
        function ScaleSlider() {
            var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
            if (parentWidth)
                jssor_slider1.$SetScaleWidth(Math.min(parentWidth, 1170));
            else
                window.setTimeout(ScaleSlider, 30);
        }
		

      });
    }
  }


})(jQuery, Drupal);

*/

(jQuery)(function () {
	
	fix_slider_html();
	(jQuery)('#slideshow_container').flexslider({
		animation: "slide",
	});
	onDrag();
	
	function fix_slider_html() {
		var parent = (jQuery)('#slideshow_container');
		var sliderContainer = (jQuery)(parent.children()[1]);
		var slider = (jQuery)('<ul class="slides"></ul>');
		sliderContainer.children().each(function (i, e) {
			var self = (jQuery)(this);
			var image = self.find('.views-field-field-slideshow img').parent().parent();
			var title = self.find('.views-field-title a').parent();
			
			var newElement = '<li>' + image.html() + '<p class="flex-caption">' + title.html() + '</p></li>';
			
			(jQuery)(slider).append(newElement);
		});
		parent.empty();
		parent.append(slider);
	}
	
	function onDrag() {
		var isDragging = false;
		var img = (jQuery)('#slideshow_container .slides img');
		var deltaX, deltaY;
		
		img.mousedown(function(event) {
			isDragging = false;
			deltaX = event.offsetX;
			//deltaY = event.offsetY;
		})
		.mousemove(function(event) {
			isDragging = true;
		})
		.mouseup(function(event) {
			var wasDragging = isDragging;
			
			isDragging = false;
			deltaX -= event.offsetX;
			//deltaY -= event.offsetY;
			
			if (Math.abs(deltaX) > 20/* || Math.abs(deltaY) > 20*/) {
				if (deltaX < 0) {
					movePrev();
				} else {
					moveNext();
				}
				/*
				if (Math.abs(deltaX) > Math.abs(deltaY)) {
					if (deltaX < 0) {
						movePrev();
					} else {
						moveNext();
					}
				} else {
					if (deltaY < 0) {
						moveTop();
					} else {
						moveDown();
					}
				}
				*/				
			}
		});
	}
	
	function moveNext() {
		(jQuery)('#slideshow_container').flexslider({
			direction: "horizontal"
		});
		(jQuery)('#slideshow_container').flexslider("next");
	}
	
	function movePrev() {
		(jQuery)('#slideshow_container').flexslider({
			direction: "horizontal"
		});
		(jQuery)('#slideshow_container').flexslider("prev");
	}
	
	function moveTop() {
		(jQuery)('#slideshow_container').flexslider({
			direction: "vertical"
		});
		(jQuery)('#slideshow_container').flexslider("next");
	}
	
	function moveDown() {
		(jQuery)('#slideshow_container').flexslider({
			direction: "vertical"
		});
		(jQuery)('#slideshow_container').flexslider("prev");
	}
	
	/*
		<ul class="slides">
            <li>
  	    	    <img src="images/kitchen_adventurer_cheesecake_brownie.jpg" />
              <p class="flex-caption">Adventurer Cheesecake Brownie</p>
  	    		</li>
  	    		<li>
  	    	    <img src="images/kitchen_adventurer_lemon.jpg" />
              <p class="flex-caption">Adventurer Lemon</p>
  	    		</li>
  	    		<li>
  	    	    <img src="images/kitchen_adventurer_donut.jpg" />
              <p class="flex-caption">Adventurer Donut</p>
  	    		</li>
  	    		<li>
  	    	    <img src="images/kitchen_adventurer_caramel.jpg" />
              <p class="flex-caption">Adventurer Caramel</p>
  	    		</li>
          </ul>
		*/
});;
(function ($, Drupal) {

  "use strict";
  Drupal.behaviors.zirconCarousel = {
    attach: function (context, settings) {  
      $(document).ready(function() {
        if($('.carousel-responsive').length) {
        $('.carousel-responsive').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
          });
        }
      });

      if($('html').attr('dir')=='rtl') {
        $('.carousel-responsive').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 4,
          rtl:true,
          responsive: [{
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          }, {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }, {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }]
        });
      }
    }
  };


})(jQuery, Drupal);





;
"use strict";

(function ($, Drupal) {

  Drupal.Zircon = Drupal.Zircon || {};
  Drupal.behaviors.zircon = {
    attach: function (context, settings) {
      

      $('.btn-btt').smoothScroll({speed: 1000});
      if($("#search-block-form [name='keys']").val() === "") {
        $("#search-block-form input[name='keys']").val(Drupal.t("Keywords"));
      }
      $("#search-block-form input[name='keys']").focus(function() {
        if($(this).val() === Drupal.t("Keywords")) {
          $(this).val("");
        }
      }).blur(function() {
        if($(this).val() === "") {
          $(this).val(Drupal.t("Keywords"));
        }
      });

      Drupal.Zircon.setInputPlaceHolder('email', 'user@example.com', '.simplenews-subscriber-form .form-type-email');

      $(window).scroll(function() {
        if($(window).scrollTop() > 200) {
            $('.btn-btt').show();
          }
          else {
            $('.btn-btt').hide();
          }
     }).resize(function(){
        if($(window).scrollTop() > 200) {
            $('.btn-btt').show();
          }
          else {
            $('.btn-btt').hide();
          }
      });   

  
        }
      }  
  Drupal.Zircon.setInputPlaceHolder = function (name, text, selector) {
  selector = selector == undefined ? '' : selector + ' ';

  if ($.support.placeholder) {
    $(selector + 'input[type="' + name + '"]').attr('placeholder', Drupal.t(text));
  }
  else {
    $(selector + 'input[type="' + name + '"]').val(Drupal.t(text));
    $(selector + 'input[type="' + name + '"]').focus(function(){
      if(this.value == Drupal.t(text)) {
        this.value='';
      }
    }).blur(function(){
      if(this.value == '') {
        this.value=Drupal.t(text);
      }
    });
  }
}

})(jQuery, Drupal);


;
(jQuery)(function () {
	
	fix_placeholder();
	fix_contact_form();
	
	function fix_placeholder() {
		(jQuery)('[placeholder]').focus(function() {
			var input = (jQuery)(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = (jQuery)(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur().parents('form').submit(function() {
			(jQuery)(this).find('[placeholder]').each(function() {
				var input = (jQuery)(this);
				if (input.val() == input.attr('placeholder')) {
				input.val('');
				}
			})
		});	
	}
	
	function fix_contact_form() {
		var userAgent = window.navigator.userAgent;
		if (userAgent.indexOf('Firefox')) {
			var form = (jQuery)('#contact-message-feedback-form');
			var parent = form.parent();
			var formHTML = parent.html();
			parent.empty();
			parent.html(formHTML);
		}	
	}
});;
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
/**
 * @file
 * Attaches behaviors for Drupal's active link marking.
 */

(function (Drupal, drupalSettings) {

  'use strict';

  /**
   * Append is-active class.
   *
   * The link is only active if its path corresponds to the current path, the
   * language of the linked path is equal to the current language, and if the
   * query parameters of the link equal those of the current request, since the
   * same request with different query parameters may yield a different page
   * (e.g. pagers, exposed View filters).
   *
   * Does not discriminate based on element type, so allows you to set the
   * is-active class on any element: a, li…
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.activeLinks = {
    attach: function (context) {
      // Start by finding all potentially active links.
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='" + queryString + "']" : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors;

      // If this is the front page, we have to check for the <front> path as
      // well.
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      // Add language filtering.
      selectors = [].concat(
        // Links without any hreflang attributes (most of them).
        originalSelectors.map(function (selector) { return selector + ':not([hreflang])'; }),
        // Links with hreflang equals to the current language.
        originalSelectors.map(function (selector) { return selector + '[hreflang="' + path.currentLanguage + '"]'; })
      );

      // Add query string selector for pagers, exposed filters.
      selectors = selectors.map(function (current) { return current + querySelector; });

      // Query the DOM.
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function (context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };

})(Drupal, drupalSettings);
;
/**
 * @file
 * JavaScript API for the History module, with client-side caching.
 *
 * May only be loaded for authenticated users, with the History module enabled.
 */

(function ($, Drupal, drupalSettings, storage) {

  'use strict';

  var currentUserID = parseInt(drupalSettings.user.uid, 10);

  // Any comment that is older than 30 days is automatically considered read,
  // so for these we don't need to perform a request at all!
  var thirtyDaysAgo = Math.round(new Date().getTime() / 1000) - 30 * 24 * 60 * 60;

  // Use the data embedded in the page, if available.
  var embeddedLastReadTimestamps = false;
  if (drupalSettings.history && drupalSettings.history.lastReadTimestamps) {
    embeddedLastReadTimestamps = drupalSettings.history.lastReadTimestamps;
  }

  /**
   * @namespace
   */
  Drupal.history = {

    /**
     * Fetch "last read" timestamps for the given nodes.
     *
     * @param {Array} nodeIDs
     *   An array of node IDs.
     * @param {function} callback
     *   A callback that is called after the requested timestamps were fetched.
     */
    fetchTimestamps: function (nodeIDs, callback) {
      // Use the data embedded in the page, if available.
      if (embeddedLastReadTimestamps) {
        callback();
        return;
      }

      $.ajax({
        url: Drupal.url('history/get_node_read_timestamps'),
        type: 'POST',
        data: {'node_ids[]': nodeIDs},
        dataType: 'json',
        success: function (results) {
          for (var nodeID in results) {
            if (results.hasOwnProperty(nodeID)) {
              storage.setItem('Drupal.history.' + currentUserID + '.' + nodeID, results[nodeID]);
            }
          }
          callback();
        }
      });
    },

    /**
     * Get the last read timestamp for the given node.
     *
     * @param {number|string} nodeID
     *   A node ID.
     *
     * @return {number}
     *   A UNIX timestamp.
     */
    getLastRead: function (nodeID) {
      // Use the data embedded in the page, if available.
      if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
        return parseInt(embeddedLastReadTimestamps[nodeID], 10);
      }
      return parseInt(storage.getItem('Drupal.history.' + currentUserID + '.' + nodeID) || 0, 10);
    },

    /**
     * Marks a node as read, store the last read timestamp client-side.
     *
     * @param {number|string} nodeID
     *   A node ID.
     */
    markAsRead: function (nodeID) {
      $.ajax({
        url: Drupal.url('history/' + nodeID + '/read'),
        type: 'POST',
        dataType: 'json',
        success: function (timestamp) {
          // If the data is embedded in the page, don't store on the client
          // side.
          if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
            return;
          }

          storage.setItem('Drupal.history.' + currentUserID + '.' + nodeID, timestamp);
        }
      });
    },

    /**
     * Determines whether a server check is necessary.
     *
     * Any content that is >30 days old never gets a "new" or "updated"
     * indicator. Any content that was published before the oldest known reading
     * also never gets a "new" or "updated" indicator, because it must've been
     * read already.
     *
     * @param {number|string} nodeID
     *   A node ID.
     * @param {number} contentTimestamp
     *   The time at which some content (e.g. a comment) was published.
     *
     * @return {bool}
     *   Whether a server check is necessary for the given node and its
     *   timestamp.
     */
    needsServerCheck: function (nodeID, contentTimestamp) {
      // First check if the content is older than 30 days, then we can bail
      // early.
      if (contentTimestamp < thirtyDaysAgo) {
        return false;
      }

      // Use the data embedded in the page, if available.
      if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
        return contentTimestamp > parseInt(embeddedLastReadTimestamps[nodeID], 10);
      }

      var minLastReadTimestamp = parseInt(storage.getItem('Drupal.history.' + currentUserID + '.' + nodeID) || 0, 10);
      return contentTimestamp > minLastReadTimestamp;
    }
  };

})(jQuery, Drupal, drupalSettings, window.localStorage);
;
/**
 * @file
 * Attaches behaviors for the Comment module's "X new comments" link.
 *
 * May only be loaded for authenticated users, with the History module
 * installed.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Render "X new comments" links wherever necessary.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches new comment links behavior.
   */
  Drupal.behaviors.nodeNewCommentsLink = {
    attach: function (context) {
      // Collect all "X new comments" node link placeholders (and their
      // corresponding node IDs) newer than 30 days ago that have not already
      // been read after their last comment timestamp.
      var nodeIDs = [];
      var $placeholders = $(context)
        .find('[data-history-node-last-comment-timestamp]')
        .once('history')
        .filter(function () {
          var $placeholder = $(this);
          var lastCommentTimestamp = parseInt($placeholder.attr('data-history-node-last-comment-timestamp'), 10);
          var nodeID = $placeholder.closest('[data-history-node-id]').attr('data-history-node-id');
          if (Drupal.history.needsServerCheck(nodeID, lastCommentTimestamp)) {
            nodeIDs.push(nodeID);
            // Hide this placeholder link until it is certain we'll need it.
            hide($placeholder);
            return true;
          }
          else {
            // Remove this placeholder link from the DOM because we won't need
            // it.
            remove($placeholder);
            return false;
          }
        });

      if ($placeholders.length === 0) {
        return;
      }

      // Perform an AJAX request to retrieve node read timestamps.
      Drupal.history.fetchTimestamps(nodeIDs, function () {
        processNodeNewCommentLinks($placeholders);
      });
    }
  };

  /**
   * Hides a "new comment" element.
   *
   * @param {jQuery} $placeholder
   *   The placeholder element of the new comment link.
   *
   * @return {jQuery}
   *   The placeholder element passed in as a parameter.
   */
  function hide($placeholder) {
    return $placeholder
      // Find the parent <li>.
      .closest('.comment-new-comments')
      // Find the preceding <li>, if any, and give it the 'last' class.
      .prev().addClass('last')
      // Go back to the parent <li> and hide it.
      .end().hide();
  }

  /**
   * Removes a "new comment" element.
   *
   * @param {jQuery} $placeholder
   *   The placeholder element of the new comment link.
   */
  function remove($placeholder) {
    hide($placeholder).remove();
  }

  /**
   * Shows a "new comment" element.
   *
   * @param {jQuery} $placeholder
   *   The placeholder element of the new comment link.
   *
   * @return {jQuery}
   *   The placeholder element passed in as a parameter.
   */
  function show($placeholder) {
    return $placeholder
      // Find the parent <li>.
      .closest('.comment-new-comments')
      // Find the preceding <li>, if any, and remove its 'last' class, if any.
      .prev().removeClass('last')
      // Go back to the parent <li> and show it.
      .end().show();
  }

  /**
   * Processes new comment links and adds appropriate text in relevant cases.
   *
   * @param {jQuery} $placeholders
   *   The placeholder elements of the current page.
   */
  function processNodeNewCommentLinks($placeholders) {
    // Figure out which placeholders need the "x new comments" links.
    var $placeholdersToUpdate = {};
    var fieldName = 'comment';
    var $placeholder;
    $placeholders.each(function (index, placeholder) {
      $placeholder = $(placeholder);
      var timestamp = parseInt($placeholder.attr('data-history-node-last-comment-timestamp'), 10);
      fieldName = $placeholder.attr('data-history-node-field-name');
      var nodeID = $placeholder.closest('[data-history-node-id]').attr('data-history-node-id');
      var lastViewTimestamp = Drupal.history.getLastRead(nodeID);

      // Queue this placeholder's "X new comments" link to be downloaded from
      // the server.
      if (timestamp > lastViewTimestamp) {
        $placeholdersToUpdate[nodeID] = $placeholder;
      }
      // No "X new comments" link necessary; remove it from the DOM.
      else {
        remove($placeholder);
      }
    });

    // Perform an AJAX request to retrieve node view timestamps.
    var nodeIDs = Object.keys($placeholdersToUpdate);
    if (nodeIDs.length === 0) {
      return;
    }

    /**
     * Renders the "X new comments" links.
     *
     * Either use the data embedded in the page or perform an AJAX request to
     * retrieve the same data.
     *
     * @param {object} results
     *   Data about new comment links indexed by nodeID.
     */
    function render(results) {
      for (var nodeID in results) {
        if (results.hasOwnProperty(nodeID) && $placeholdersToUpdate.hasOwnProperty(nodeID)) {
          $placeholdersToUpdate[nodeID]
            .attr('href', results[nodeID].first_new_comment_link)
            .text(Drupal.formatPlural(results[nodeID].new_comment_count, '1 new comment', '@count new comments'))
            .removeClass('hidden');
          show($placeholdersToUpdate[nodeID]);
        }
      }
    }

    if (drupalSettings.comment && drupalSettings.comment.newCommentsLinks) {
      render(drupalSettings.comment.newCommentsLinks.node[fieldName]);
    }
    else {
      $.ajax({
        url: Drupal.url('comments/render_new_comments_node_links'),
        type: 'POST',
        data: {'node_ids[]': nodeIDs, 'field_name': fieldName},
        dataType: 'json',
        success: render
      });
    }
  }

})(jQuery, Drupal, drupalSettings);
;

(function ($, Drupal) {

    Drupal.SkinsMenu = Drupal.SkinsMenu || {}

    Drupal.behaviors.skinMenuAction = {
        attach: function (context) {

            $(window).load(function() { 

                $('#change-skin').once('load').on('click', function(){
                    $('#change-skin i').toggleClass('spin');
                    $('#change_skin_menu_wrapper').toggleClass('fly-out');
                });


                $(".change-skin-button").click(Drupal.SkinsMenu.changeSkinHandle);

                $(".change-layout-button").on("click", Drupal.SkinsMenu.changeLayoutHandle);

                $(".change-background-button").on("click", Drupal.SkinsMenu.changeBackgroundHandle);

                Drupal.SkinsMenu.fixCacheBug();
                Drupal.SkinsMenu.fixCacheBugBackground();
            });


        }
        
    }


    Drupal.SkinsMenu.onClickResetDefaultSettings = function() {

        var answer = confirm(Drupal.t('Are you sure you want to reset your theme settings to default theme settings?'))
        if (answer){

            var base_path = drupalSettings.path.baseUrl;        
            $.cookie("weebpal_skin", 'default', {path: base_path});
            $.cookie("weebpal_layout", 'layout-default', {path: base_path});
            $.cookie("weebpal_background", 'bg-default', {path: base_path});
            return true;
        }
        return false;
    }

    Drupal.SkinsMenu.changeSkinHandle = function() {

        parts = this.href.split("/");
        style = parts[parts.length - 1];
        var base_path = drupalSettings.path.baseUrl;

        $.cookie("weebpal_skin", style, {path: base_path});
        window.location.reload();
        return true;
    }



    Drupal.SkinsMenu.changeLayoutHandle = function () {

        var layout_class = $(this).attr("id");
        //var layout_width = drupalSettings.layout_width;
        
        // For demo
        //var layout_width = 1200; 

        var layout_width = parseInt($.cookie("weebpal_layout_width"));
        if(!layout_width){
            layout_width = 1200;
        }

        var base_path = drupalSettings.path.baseUrl;

        $.cookie("weebpal_layout", layout_class, {path: base_path});

        $("#page").removeAttr("style");
        $("#page").removeClass("boxed");
        $(".background").addClass("hidden");
        var current_background = $.cookie("weebpal_background");
        $("body").removeClass(current_background);
        if (layout_class != "layout-default") {

            $("#page").css("max-width", layout_width);
            $("#page").css("margin", "0 auto");
            $("#page").addClass("boxed");
            $(".background").removeClass("hidden");
            $("body").addClass(current_background);
        }
        $(".change-layout-button").removeClass("active");
        if(!$(this).hasClass("active"))
            $(this).addClass("active");
        return true;
    }

   
    Drupal.SkinsMenu.changeBackgroundHandle = function () {

        parts = this.href.split("/");
        style = parts[parts.length - 1];
        var current_background = $.cookie("weebpal_background");
        var base_path = drupalSettings.path.baseUrl;

        $.cookie("weebpal_background", style, {path: base_path});
        $("body").removeClass(current_background);
        $("body").addClass(style);
        
        return true;
    }

    Drupal.SkinsMenu.fixCacheBug = function(){ 

        var cookieState = $.cookie("weebpal_layout");
        if(!cookieState)
            return;

        var currentState = $('#change_skin_menu_wrapper .layout .switch-btn > .active').attr('id');
        if (currentState == cookieState)
            return;

        $('#'+cookieState).click();



    }



Drupal.SkinsMenu.fixCacheBugBackground = function(){ 

    if ($.cookie("weebpal_layout") == 'layout-boxed') {

     var cookieBackground = $.cookie("weebpal_background");
        if (!cookieBackground) 
            return;
        var currentBackground = $('#change_skin_menu_wrapper .background .change-background > .active').attr('class');

        console.log(currentBackground);

        if (currentBackground == cookieBackground)
            return;
       // $('.'+currentBackground).click();


       $('#change_skin_menu_wrapper .background .change-background').find('.'+currentBackground.substr(0,4) + ' a').click();
         $('#change_skin_menu_wrapper .background .change-background').find('.'+cookieBackground + ' a').click();
     }
}





})(jQuery, Drupal);



                  

                  
                  


                  





                  
;
