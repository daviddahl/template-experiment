(function(){var x={2048:'"',4096:"'",6144:""},B=[1,1,1,1,1,1,,,,1,,1],C=[0,1,4,4,5,5,,1,2,10,,9,9,12,12,12,7,,,6,6,8,2],D={"break":1,"case":1,"continue":1,"delete":1,"do":1,"else":1,"finally":1,"instanceof":1,"return":1,"throw":1,"try":1,"typeof":1}
function E(a){var b=a.length,d=a.charAt(b-1);switch(d){case "+":case "-":for(var e=b-1;e>0&&a.charAt(e-1)===d;)--e;a=b-e;return(a&1)===1;case ".":if(b===1)return 1;a=a.charAt(b-2);return!("0"<=a&&a<="9");case "/":return b===1;default:return/[#%&(*,:-?[^{-~]/.test(d)?1:(a=a.match(/[\w$]+$/))&&D[a[0]]===1}}
function F(a,b){if(a===b)return a;if(a===(b&-24577|a&24576))return a&-24577|24576;var d=a&229376;if(a===(b&-229377|d)){var e=b&229376;return a&-229377|(d!==131072&&e!==131072&&d!==196608&&e!==196608?163840:196608)}d=a&31;e=b&31;if(d>e)var j=a,a=b,b=j,j=d,d=e,e=j;return d==3&&e==4?b:d===4&&(a&224)===(b&224)&&(e===5||(b&6144)===6144)?a:23}function G(a){var b=a&31;b===6&&(a=H(a&224,a&1792,6144));return a}
function H(a,b,d){var e,j=0,q=0;switch(b){case 1024:e=8;break;case 256:e=16;j=8192;break;case 512:e=9;break;case 768:e=22;q=32768;break;default:throw Error(b)}return e|a|b|d|j|q}
var ca=function(){function a(a){return a.indexOf("&")<0?a:a.replace(/&(?:#(?:(x[\da-f]+)|(\d+))|(lt|gt|amp|quot|apos));/gi,function(a,I,b,g){return I||b?String.fromCharCode(0+(I||b)):c[g.toLowerCase()]})}function b(a){this.a=a}function d(a,g,f){var c=a.prototype=new b(/(?!)/);c.constructor=a;c.f=g;if(f)c.i=f}function e(a,b){this.a=a;this.p=b}function j(a,b){this.a=a;this.q=b}function q(a){this.a=a}function s(a){this.a=a}function h(a){this.a=a}function u(a,b){this.a=a;this.o=b}function l(a,b){this.a=
a;this.g=b}function i(a,b){this.a=a;this.g=b}function y(a){this.a=a}function o(a){this.a=a}function m(a){this.a=a}function v(a){this.a=a}function z(a){this.a=a}function A(a){this.a=a}function t(a){this.a=a}function w(){this.b=this.c=0}function g(b,g){for(;b;){var c;var f=b,n=g&6144;c=f.length;n===0?c=-1:n===6144?c=(f=f.match(/[\s>]/))?f.index:c:(f=f.indexOf(x[n]),c=f>=0?f:c);if(c===-1)c=new w,c.j(b,g),b=b.substring(c.c),g=c.b;else{for(var f=b.length,f=c<f?c+x[g&6144].length:-1,n=a(b.substring(0,c)),
d=new w;n.length!==0;)d.j(n,g),n=n.substring(d.c),g=d.b;if(f!==-1)b=b.substring(f),g=4|g&224;else{if(c!==b.length)throw Error();b=""}}}return g}var c={u:"<",t:">",r:"&",v:'"',s:"'"};b.prototype.i=function(){return 1};b.prototype.f=function(){throw Error()};d(e,function(){return this.p});d(j,function(){return 4|this.q});var Z={32:8208,64:9,224:0,160:1,96:1,128:1,192:1};d(q,function(a){a&=224;var b=Z[a];if(typeof b!=="number")throw Error(a);return b===1?b|a:b});d(s,function(a){return 4|a&224});var aa=
{action:1,archive:1,background:1,cite:1,classid:1,codebase:1,data:1,dsync:1,href:1,longdesc:1,src:1,usemap:1};d(h,function(a,b){var c=b[1].toLowerCase(),c="on"===c.substring(0,2)?256:"style"===c?512:aa[c]===1?768:1024;return 5|a&224|c});d(u,function(a){return H(a&224,a&1792,this.o)});d(l,function(a){return a&-229408|this.g});d(i,function(a){return a&8160|this.g});d(y,function(a,b){switch(a&24576){case 16384:return a&-24608|8208;case 8192:return a&-24608|21;default:throw Error("Ambiguous / could be a RegExp or division.  Please add parentheses before `"+
b[0]+"`")}});d(o,function(a,b){return a&-24577|(E(b[0])?8192:16384)});d(m,function(a){return a});var p=new m(/$/),n=new b(/[#?]|$/);n.f=function(a,b){var c=a&229376;c===32768&&(c=65536);if(c!==131072){var g=b[0];"?"===g&&c!==196608?c=98304:"#"===g&&(c=131072)}return a&-229377|c};d(v,function(){return 228},function(a){return(a&1792)===0});var r=new v(/<\/script\b/i),k=new v(/<\/style\b/i),ba={96:"textarea",128:"title",160:"listing",192:"xmp"};d(z,function(){return 228},function(a,b){return b[1].toLowerCase()===
ba[a&224]});d(A,function(a,b){var c=b[1],c='"'===c?14:"'"===c?15:13;return a&-229408|c|32768});d(t,function(a){return a&-24608|16400});var f=[];f[0]=[new m(/^[^<]+/),new e(/<\!--/,7),new j(/<script(?=[\s/>]|$)/i,32),new j(/<style(?=[\s/>]|$)/i,64),new j(/<textarea(?=[\s/>]|$)/i,96),new j(/<title(?=[\s/>]|$)/i,128),new j(/<xmp(?=[\s/>]|$)/i,192),new e(/<\/?/,2)];f[2]=[new e(/^[a-z]+/i,3),new e(/^(?=[\W\d_])/,0)];f[3]=[new m(/^[\d:a-z-]*(?:[^\W_]|$)/i),new j(/^(?=[\s/>])/,224)];f[4]=[new h(/^\s*([a-z][\w-]*)/i),
new q(/^\s*\/?>/),new m(/^\s+$/)];f[5]=[new l(/^\s*=/,6),new s(/^/)];f[6]=[new u(/^\s*"/,2048),new u(/^\s*'/,4096),new u(/^(?=[^\s"'>])/,6144),new s(/^(?=>|\s+[\w-]+\s*=)/),new m(/^\s+/)];f[7]=[new e(/--\>/,0),p];f[8]=[p];f[9]=[new l(/\/\*/,10),new l(/"/,11),new l(/'/,12),new A(/\burl\s*\(\s*(["']?)/i),k,p];f[10]=[new l(/\*\//,9),k,p];f[11]=[new l(/"/,9),new m(/\\(?:\r\n?|[\n\f"])/),new e(/[\n\f\r]/,23),k,p];f[12]=[new l(/'/,9),new m(/\\(?:\r\n?|[\n\f'])/),new e(/[\n\f\r]/,23),k,p];f[13]=[new l(/[\s)\\]/,
9),n,new l(/["']/,23),k];f[15]=[new l(/'/,9),n,new m(/\\(?:\r\n?|[\n\f'])/),new e(/[\n\f\r]/,23),k];f[14]=[new l(/"/,9),n,new m(/\\(?:\r\n?|[\n\f"])/),new e(/[\n\f\r]/,23),k];f[16]=[new l(/\/\*/,18),new l(/\/\//,17),new i(/"/,19),new i(/'/,20),new y(/\//),new o(/(?:[^\s"'/<\\]|<(?!\/script))+/i),new m(/\s+/),r];f[18]=[new l(/\*\//,16),r,p];f[17]=[new l(/[\n\r\u2028\u2029]/,16),r,p];f[19]=[new t(/"/),r,new m(/^(?:[^\n\r"<\\\u2028\u2029]|\\(?:\r\n?|[^\r<]|<(?!\/script))|<(?!\/script))+/i)];f[20]=[new t(/'/),
r,new m(/^(?:[^\n\r'<\\\u2028\u2029]|\\(?:\r\n?|[^\r<]|<(?!\/script))|<(?!\/script))+/i)];f[21]=[new t(/\//),r,new m(/^(?:[^\n\r/<[\\\u2028\u2029]|\\.|\\?<(?!\/script)|\[(?:[^\n\r<\\\]\u2028\u2029]|\\.)*|\\?<(?!\/script)])+/i)];f[22]=[n];f[1]=[new z(/<\/(\w+)\b/),p];w.prototype.j=function(a,b){if((b&31)===23)this.c=a.length,this.b=b;else{var c=2147483647,g=-1,n,d,p=f[b&31],e,r,j,k,l,i=p.length;for(l=0;l<i;++l)if(e=p[l],r=a.match(e.a))j=r.index,j<c&&(k=j+r[0].length,e.i(b,r)&&(c=j,g=k,n=e,d=r));n?
(this.b=n.f(b,d),this.c=g):(this.b=23,this.c=a.length);if(this.c===0&&(this.b&31)===(b&31))throw Error(b)}};return g}();function J(){}J.prototype.toString=function(){return this.content};function K(){function a(a){this.content=a}var b=a.prototype=new J;b.constructor=a;b.contentKind=0;return a}var da=K(0),ea=K(1),fa=K(2);SanitizedHtml=da;SanitizedJsStrChars=ea;SanitizedUri=fa
function L(a){return a&&a.contentKind===0?a:a instanceof Array?a.map(L).join(""):a===void 0?"":String(a).replace(M,N)}function ga(a){return a&&a.contentKind===0?String(a.content).replace(O,N):String(a).replace(M,N)}function ha(a){a&&a.contentKind===0?(a=String(a.content).replace(P,""),a=String(a).replace(O,N)):a=String(a).replace(M,N);return a}function ia(a){a&&a.contentKind===0?(a=String(a.content).replace(P,""),a=String(a).replace(ja,N)):a=String(a).replace(ka,N);return a}
function la(a){var a=String(a),a=!ma.test(a)?"zSafehtmlz":a,b,d=a.indexOf("=");return d>=0&&(b=a.charAt(a.length-1))!='"'&&b!="'"?a.substring(0,d+1)+'"'+a.substring(d+1)+'"':a}function na(a){a=String(a);return a=!oa.test(a)?"zSafehtmlz":a}function Q(a){return a&&a.contentKind===1?a.content:String(a).replace(pa,R)}function qa(a){var b;return a==null?" null ":(b=typeof a)=="boolean"||b=="number"?" "+a+" ":"'"+Q(a)+"'"}function ra(a){return String(a).replace(sa,R)}var S=/['-)]/g
function T(a){return"%"+a.charCodeAt(0).toString(16)}function ta(a){if(a&&a.contentKind===2)return U(a);a=encodeURIComponent(a);return a.replace(S,T)}function U(a){a=String(a);if(/[\0- "<>\\{}\x7f\x85\xa0\u2028\u2029\uff00-\uffff]|%(?![\da-f]{2})/i.test(a)){for(var a=a.split(/(%[\da-f]{2}|[#$&+,/:;=?@[\]])/i),b=a.length-1;b>=0;b-=2)a[b]=encodeURIComponent(a[b]);a=a.join("")}return a.replace(S,T)}function ua(a){var b=String(a);return va.test(b)?U(a):"#zSafehtmlz"}
function wa(a){return String(a).replace(xa,ya)}function za(a){a==null?a="":(a=String(a),a=!Aa.test(a)?"zSafehtmlz":a);return a}var V={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"};function N(a){return V[a]||(V[a]="&#"+a.charCodeAt(0)+";")}var W={"\t":"\\t","\n":"\\n","\x0c":"\\f","\r":"\\r","/":"\\/","\\":"\\\\"};function R(a){var b;if(!(b=W[a])){b=a.charCodeAt(0).toString(16);var d=b.length<=2?"\\x00":"\\u0000";b=d.substring(0,d.length-b.length)+b;b=W[a]=b}return b}var X={}
function ya(a){return X[a]||(X[a]="\\"+a.charCodeAt(0).toString(16)+" ")}
var M=/[\0"&'<>]/g,O=/[\0"'<>]/g,ka=/[\0\t-\r "&'/<->`\x85\xa0\u2028\u2029-]/g,ja=/[\0\t-\r "'/<->`\x85\xa0\u2028\u2029-]/g,pa=/[\0\b-\r"&'/<->\\\x85\u2028\u2029]/g,sa=/[\0\b-\r"$&-/:<-?[-^{-}\x85\u2028\u2029]/g,xa=/[\0\b-\r"&-*/:->@\\{}\x85\xa0\u2028\u2029]/g,Aa=/^(?!-*(?:expression|(?:moz-)?binding))(?:[#.]?-?\w[\w-]*(?:-[_a-z][\w-]*)*-?|-?(?:\d+(?:\.\d*)?|\.\d)(?:[a-z]{1,2}|%)?|!important|)$/i,va=/^(?:(?:https?|mailto):|[^#&/:?]*(?:[#/?]|$))/i,ma=/^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[\w$:-]*|dir=(?:ltr|rtl))$/i,
oa=/^(?!script|style|title|textarea|xmp|no)[\w$:-]*$/i,P=/<(?:!|\/?[a-z])(?:[^"'>]|"[^"]*"|'[^']*')*>/gi,Ba=[L,ga,ha,ia,na,la,Q,qa,ra,wa,za,ta,U,ua]
function Y(a,b){var d={};a.replace(/{{\/([a-z]\w*)}/gi,function(a,b){d[b]=1});var e=["T",b?String(b):""],j=[e],q=e,s=String(a).match(/\${[^}]*}|{{\/?[a-z][^\W_]*\b(?:}?[^}])*}}|[\S\s][^${]*/gi);if(s)for(var h,u=0,l=s.length;u<l;++u){var i=s[u];h=i.substring(0,2);if(h=="${"){h=i.match(/^\${([\S\s]+)}$/);if(!h)break;q.push(["$",h[1]])}else if(h=="{{"){h=i.match(/^{{(\/?)([a-z][^\W_]*)((?:}?[^}])*)}}$/i);if(!h)break;var i=h[2],y=h[3];h[1]?j.length>1&&q[0]===i&&(q=j[--j.length-1]):(h=[i,y],q.push(h),
1===d[i]&&j.push(q=h))}else h=q.length-1,h>1&&"string"===typeof q[h]?q[h]+=i:q[h+1]=i}return e}function Ca(a){function b(a){for(var b=2,e=a.length;b<e;++b)d(a[b])}function d(a){if(typeof a==="string")e.push(a);else{var d=a[0],s=a[1];d==="$"?e.push("${",s,"}"):(e.push("{{",d,s,"}}"),b(a),e.push("{{/",d,"}}"))}}var e=[];a[0]==="T"?b(a):d(a);return e.join("")}
function Da(a){function b(a){if(typeof a==="object"){a.e=++y;for(var c=2,d=a.length;c<d;++c)b(a[c])}}function d(a){function b(a){function c(){}c.prototype=a;return new c}var d={},e;for(e in a)l.call(a,e)&&(d[e]=b(a[e]));return d}function e(a,b,e){if(--A<=0)throw Error("too much recursion");var i=a.e;if(i in e.d)return e.d[i];var p=d(e);p.d[i]=b;var n=j(a,b,p);if(n!==b&&(p.d[i]=n,p=d(e),b=j(a,b,p),b!==n))throw n=a.h,Error(n);var a=p,r;for(r in e)if(l.call(e,r)){var p=e[r],b=a[r],k;for(k in b)l.call(b,
k)&&(p[k]=b[k])}return n}function j(a,c,d){function j(a,c,g){if(typeof a==="string")return ca(a,c);var k=2,h=a.length,f=c;switch(a[0]){case "html":return a[0]="$",a[1]="new SanitizedHtml("+a[1]+")",a.length=2,j(a,c,g);case "if":for(var g=c,m=h;--m>=2;){var o=a[m];if("else"===o[0]){""===o[1]&&(g=null);break}}for(;k<=h;++k)if(o=a[k],k===h||"else"===o[0]){if(g!==null&&(c=F(g,c),(c&31)===23))throw Error();g=c;c=f}else c=j(o,c,a);c=g;break;case "each":for(k=2;--k>=0;){h=c;a[0]="";try{m=j(a,c,g),c=F(h,
m)}finally{a[0]="each"}if((c&31)===23)throw Error()}break;case "tmpl":case "wrap":if(f=q(a)){if(!/__C\d+$/.test(f)&&(g=f,f=c?g+"__C"+c:g,l.call(i,f)?f=i[f]:l.call(i,g)?(g=i[g],g=v(g),g.h=f,b(g),f=i[f]=g):f=void 0,f))d.k[a.e]=f.h,c=e(f,c,d)}else throw Error();if("wrap"===a[0]){for(f=0;k<h;++k)f=j(a[k],f,a);if(f!=0)throw Error()}break;case "$":c=G(c);k={};a:{h=k;c=G(c);f=C[c&31];switch(c&229376){case 32768:f=13;c=c&-229377|65536;break;case 98304:f=11;break;case 0:break;case 131072:case 65536:(c&1792)!==
768&&(f=12);break;default:c=23;break a}if(f===void 0)c=23;else{g=null;m=c&6144;if(m!==0)switch(f){case 0:break;case 2:m===6144&&(f=3);break;case 3:break;default:B[f]||(g=m===6144?3:2)}h.m=f;h.n=g}}if((c&31)===23)throw Error();h=/^\s*(?:\$\.encode|noAutoescape)\b/;if(!h.test(a[1])&&typeof k.m==="number"){h=[];h[0]=k.m;if(typeof k.n==="number")h[1]=k.n;d.l[a.e]=h}break;default:for(;k<h;++k)c=j(a[k],c,a)}return c}return j(a,c)}function q(a){return(a=a[1].match(/(?:^|\))\s*"#([^\s)]+)"\s*$/))&&a[1]}function s(a){var b=
a[0];if(b==="tmpl"||b==="wrap")if((b=q(a))&&h(b))return 1;for(b=a.length;--b>=2;)if(s(a[b]))return 1;return 0}function h(a){if(l.call(t,a))return t[a];var b=i[a];if(b){for(var d=b.length;--d>=0;)if("noAutoescape"===b[d][0])return t[a]=0,t[a]=s(b);return t[a]=1}}function u(a){var b=a.e;switch(a[0]){case "noAutoescape":return w=0,"";case "$":if(w){var d=z.l[b];if(d){for(var e=a[1],b=0;b<d.length;++b)e="$.encode["+d[b]+"]("+e+")";a[1]=e}}break;case "tmpl":case "wrap":(b=z.k[b])&&(a[1]=a[1].replace(/\s*"#[^\s)]+"\s*$/,
' "#'+b+'"'))}b=2;for(d=a.length;b<d;++b)e=a[b],typeof e!=="string"&&(a[b]=u(e));return a}var l=Object.hasOwnProperty,i={},y=0,o;for(o in a)if(l.call(a,o)){var m=a[o];typeof m==="string"&&(m=Y(m));m.h=o;b(i[o]=m)}var v;v=typeof JSON!==void 0?function(a){return JSON.parse(JSON.stringify(a))}:function(a){for(var a=a.slice(),b=a.length;--b>=0;)typeof a[b]=="object"&&(a[b]=v(a[b]));return a};var z={l:{},k:{},d:{}},A=10,t={};for(o in i)l.call(i,o)&&h(o);for(o in t)1===t[o]&&e(i[o],0,z);var w;for(o in i)l.call(i,
o)&&(w=1,u(i[o]));return i}parseJqueryTemplate=Y;renderJqueryTemplate=Ca;sanitizeTemplates=Da;$.extend($.encode,Ba)})()