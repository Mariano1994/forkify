var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,g,m,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},$={};S=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var M={},O={};O=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;M=O?j.bind(j):function(){return j.apply(j,arguments)};var F={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;o=P&&!F.call({1:2},1)?function(e){var t=P(this,e);return!!t&&t.enumerable}:F;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},q={},I=Function.prototype,H=I.call,N=O&&I.bind.bind(H,H),C={},A=(q=O?N:function(e){return function(){return H.apply(e,arguments)}})({}.toString),R=q("".slice);C=function(e){return R(A(e),8,-1)};var z=Object,D=q("".split);T=$(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?D(e,""):z(e)}:z;var W={},G={};G=function(e){return null==e};var B=TypeError;W=function(e){if(G(e))throw new B("Can't call method on "+e);return e},x=function(e){return T(W(e))};var U={},J={},Y={},Q={},V="object"==typeof document&&document.all;Q=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},Y=function(e){return"object"==typeof e?null!==e:Q(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=q({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=k.process,eo=k.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&(s=(a=es.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var ec=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Q(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},ef=String;ep=function(e){try{return ef(e)}catch(e){return"Object"}};var eh=TypeError;ed=function(e){if(Q(e))return e;throw new eh(ep(e)+" is not a function")},el=function(e,t){var r=e[t];return G(r)?void 0:ed(r)};var ev={},eg=TypeError;ev=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!Y(n=M(r,e))||Q(r=e.valueOf)&&!Y(n=M(r,e))||"string"!==t&&Q(r=e.toString)&&!Y(n=M(r,e)))return n;throw new eg("Can't convert object to primitive value")};var em={},ey={},eb={};eb=!1;var e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__",eE=ey=k[ek]||e_(ek,{});(eE.versions||(eE.versions=[])).push({version:"3.36.0",mode:eb?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"}),em=function(e,t){return ey[e]||(ey[e]=t||{})};var eS={},e$={},eM=Object;e$=function(e){return eM(W(e))};var eO=q({}.hasOwnProperty);eS=Object.hasOwn||function(e,t){return eO(e$(e),t)};var ej={},eF=0,eP=Math.random(),eL=q(1..toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eL(++eF+eP,36)};var ex=k.Symbol,eT=em("wks"),eq=ee?ex.for||ex:ex&&ex.withoutSetter||ej,eI=TypeError,eH=(eS(eT,e="toPrimitive")||(eT[e]=et&&eS(ex,e)?ex[e]:eq("Symbol."+e)),eT[e]);J=function(e,t){if(!Y(e)||K(e))return e;var r,n=el(e,eH);if(n){if(void 0===t&&(t="default"),r=M(n,e,t),!Y(r)||K(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),ev(e,t)},U=function(e){var t=J(e,"string");return K(t)?t:t+""};var eN={},eC={},eA=k.document,eR=Y(eA)&&Y(eA.createElement);eC=function(e){return eR?eA.createElement(e):{}},eN=!S&&!$(function(){return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var ez=Object.getOwnPropertyDescriptor;i=S?ez:function(e,t){if(e=x(e),t=U(t),eN)try{return ez(e,t)}catch(e){}if(eS(e,t))return L(!M(o,e,t),e[t])};var eD={},eW={};eW=S&&$(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eB=String,eU=TypeError;eG=function(e){if(Y(e))return e;throw new eU(eB(e)+" is not an object")};var eJ=TypeError,eY=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eV="enumerable",eK="configurable",eX="writable";c=S?eW?function(e,t,r){if(eG(e),t=U(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eX in r&&!r[eX]){var n=eQ(e,t);n&&n[eX]&&(e[t]=r.value,r={configurable:eK in r?r[eK]:n[eK],enumerable:eV in r?r[eV]:n[eV],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eG(e),t=U(t),eG(r),eN)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eJ("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=S?function(e,t,r){return c(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eZ={},e0={},e1=Function.prototype,e2=S&&Object.getOwnPropertyDescriptor,e4=eS(e1,"name")&&(!S||S&&e2(e1,"name").configurable),e3={},e9=q(Function.toString);Q(ey.inspectSource)||(ey.inspectSource=function(e){return e9(e)}),e3=ey.inspectSource;var e8={},e7={},e6=k.WeakMap;e7=Q(e6)&&/native code/.test(String(e6));var e5={},te=em("keys");e5=function(e){return te[e]||(te[e]=ej(e))};var tt={};tt={};var tr="Object already initialized",tn=k.TypeError,ti=k.WeakMap;if(e7||ey.state){var to=ey.state||(ey.state=new ti);to.get=to.get,to.has=to.has,to.set=to.set,u=function(e,t){if(to.has(e))throw new tn(tr);return t.facade=e,to.set(e,t),t},l=function(e){return to.get(e)||{}},d=function(e){return to.has(e)}}else{var ta=e5("state");tt[ta]=!0,u=function(e,t){if(eS(e,ta))throw new tn(tr);return t.facade=e,eD(e,ta,t),t},l=function(e){return eS(e,ta)?e[ta]:{}},d=function(e){return eS(e,ta)}}var ts=(e8={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=l(t)).type!==e)throw new tn("Incompatible receiver, "+e+" required");return r}}}).enforce,tc=e8.get,tu=String,tl=Object.defineProperty,tp=q("".slice),tf=q("".replace),th=q([].join),tv=S&&!$(function(){return 8!==tl(function(){},"length",{value:8}).length}),tg=String(String).split("String"),tm=e0=function(e,t,r){"Symbol("===tp(tu(t),0,7)&&(t="["+tf(tu(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eS(e,"name")||e4&&e.name!==t)&&(S?tl(e,"name",{value:t,configurable:!0}):e.name=t),tv&&r&&eS(r,"arity")&&e.length!==r.arity&&tl(e,"length",{value:r.arity});try{r&&eS(r,"constructor")&&r.constructor?S&&tl(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ts(e);return eS(n,"source")||(n.source=th(tg,"string"==typeof t?t:"")),e};Function.prototype.toString=tm(function(){return Q(this)&&tc(this).source||e3(this)},"toString"),eZ=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&e0(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var ty={},tb={},t_={},tw={},tk={},tE={},tS=Math.ceil,t$=Math.floor;tE=Math.trunc||function(e){var t=+e;return(t>0?t$:tS)(t)},tk=function(e){var t=+e;return t!=t||0===t?0:tE(t)};var tM=Math.max,tO=Math.min;tw=function(e,t){var r=tk(e);return r<0?tM(r+t,0):tO(r,t)};var tj={},tF={},tP=Math.min;tF=function(e){var t=tk(e);return t>0?tP(t,9007199254740991):0},tj=function(e){return tF(e.length)};var tL=function(e){return function(t,r,n){var i,o=x(t),a=tj(o);if(0===a)return!e&&-1;var s=tw(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tx={includes:tL(!0),indexOf:tL(!1)}.indexOf,tT=q([].push);t_=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!eS(tt,r)&&eS(n,r)&&tT(o,r);for(;t.length>i;)eS(n,r=t[i++])&&(~tx(o,r)||tT(o,r));return o};var tq=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return t_(e,tq)},f=Object.getOwnPropertySymbols;var tI=q([].concat);tb=X("Reflect","ownKeys")||function(e){var t=p(eG(e));return f?tI(t,f(e)):t},ty=function(e,t,r){for(var n=tb(t),o=0;o<n.length;o++){var a=n[o];eS(e,a)||r&&eS(r,a)||c(e,a,i(t,a))}};var tH={},tN=/#|\.prototype\./,tC=function(e,t){var r=tR[tA(e)];return r===tD||r!==tz&&(Q(t)?$(t):!!t)},tA=tC.normalize=function(e){return String(e).replace(tN,".").toLowerCase()},tR=tC.data={},tz=tC.NATIVE="N",tD=tC.POLYFILL="P";tH=tC,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||e_(c,{}):k[c]&&k[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tH(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;ty(a,o)}(e.sham||o&&o.sham)&&eD(a,"sham",!0),eZ(r,n,a,e)}};var tW={},tG={},tB=Function.prototype,tU=tB.apply,tJ=tB.call;tG="object"==typeof Reflect&&Reflect.apply||(O?tJ.bind(tU):function(){return tJ.apply(tU,arguments)});var tY={},tQ={},tV=(tQ=function(e){if("Function"===C(e))return q(e)})(tQ.bind);tY=function(e,t){return ed(e),void 0===t?e:O?tV(e,t):function(){return e.apply(t,arguments)}};var tK={};tK=X("document","documentElement");var tX={};tX=q([].slice);var tZ={},t0=TypeError;tZ=function(e,t){if(e<t)throw new t0("Not enough arguments");return e};var t1={};t1=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t2={};t2="process"===C(k.process);var t4=k.setImmediate,t3=k.clearImmediate,t9=k.process,t8=k.Dispatch,t7=k.Function,t6=k.MessageChannel,t5=k.String,re=0,rt={},rr="onreadystatechange";$(function(){h=k.location});var rn=function(e){if(eS(rt,e)){var t=rt[e];delete rt[e],t()}},ri=function(e){return function(){rn(e)}},ro=function(e){rn(e.data)},ra=function(e){k.postMessage(t5(e),h.protocol+"//"+h.host)};t4&&t3||(t4=function(e){tZ(arguments.length,1);var t=Q(e)?e:t7(e),r=tX(arguments,1);return rt[++re]=function(){tG(t,void 0,r)},v(re),re},t3=function(e){delete rt[e]},t2?v=function(e){t9.nextTick(ri(e))}:t8&&t8.now?v=function(e){t8.now(ri(e))}:t6&&!t1?(m=(g=new t6).port2,g.port1.onmessage=ro,v=tY(m.postMessage,m)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&h&&"file:"!==h.protocol&&!$(ra)?(v=ra,k.addEventListener("message",ro,!1)):v=rr in eC("script")?function(e){tK.appendChild(eC("script"))[rr]=function(){tK.removeChild(this),rn(e)}}:function(e){setTimeout(ri(e),0)});var rs=(tW={set:t4,clear:t3}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rs},{clearImmediate:rs});var rc=tW.set,ru={},rl={};rl="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rd=k.Function,rp=/MSIE .\./.test(en)||rl&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ru=function(e,t){var r=t?2:1;return rp?function(n,i){var o=tZ(arguments.length,1)>r,a=Q(n)?n:rd(n),s=o?tX(arguments,r):[],c=o?function(){tG(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rf=k.setImmediate?ru(rc,!1):rc;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rf},{setImmediate:rf});const rh="https://forkify-api.herokuapp.com/api/v2/recipes/",rv="7df1a3d0-5162-4e88-8f43-39a9b80db8f4",rg=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rm=async function(e){try{let t=await Promise.race([fetch(e),rg(10)]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},ry=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rg(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rb={recipe:{},search:{query:"",results:[],currentPage:1,resultsPerPage:10},bookmarks:[]},r_=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rw=async function(e){try{let t=await rm(`${rh}${e}?key=${rv}`);rb.recipe=r_(t),rb.bookmarks.some(t=>t.id===e)?rb.recipe.bookmarked=!0:rb.recipe.bookmarked=!1}catch(e){throw e}},rk=async function(e){try{rb.search.query=e;let t=await rm(`${rh}?search=${e}&key=${rv}`);rb.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rb.search.currentPage=1}catch(e){throw e}},rE=function(e=rb.search.currentPage){rb.search.currentPage=e;let t=(e-1)*rb.search.resultsPerPage,r=e*rb.search.resultsPerPage;return rb.search.results.slice(t,r)},rS=function(e){rb.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rb.recipe.servings}),rb.recipe.servings=e},r$=function(){localStorage.setItem("bookmarks",JSON.stringify(rb.bookmarks))},rM=function(e){rb.bookmarks.push(e),console.log(rb.bookmarks),e.id===rb.recipe.id&&(rb.recipe.bookmarked=!0),r$()},rO=function(e){let t=rb.bookmarks.findIndex(t=>t.id===e);rb.bookmarks.splice(t,1),e===rb.recipe.id&&(rb.recipe.bookmarked=!1),r$()};!function(){let e=localStorage.getItem("bookmarks");e&&(rb.bookmarks=JSON.parse(e))}();const rj=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredit format! Please use the correct format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await ry(`${rh}?key=${rv}`,r);rb.recipe=r_(n),rM(rb.recipe)}catch(e){throw e}};var rF={};rF=new URL("icons.c14567a0.svg",import.meta.url).toString();class rP{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderSpinner(){let e=`<div class="spinner">
  <svg>
    <use href="${_(rF)}#icon-loader"></use>
  </svg>
  </div> 
  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._ErrorMessage){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${_(rF)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSuccessMessage(e=this._SuccessMessage){let t=`
    <div class="error">
            <div>
              <svg>
                <use href="${_(rF)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rL extends rP{_parentElement=document.querySelector(".recipe");_ErrorMessage="We could not find the recipe. Plase try another one";_SuccessMessage="";addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;if(n<1)return alert("Must have at least one serving");e(n)})}addHandlerAddBookMark(e){this._parentElement.addEventListener("click",t=>{t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_(rF)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_(rF)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${_(rF)}}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${_(rF)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
    <svg>
        <use href="${_(rF)}#icon-user"></use>
    </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${_(rF)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    
    ${this._data.ingredients.map(e=>this._generateMarkupIngredient(e)).join("")}
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${_(rF)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}_generateMarkupIngredient(e){return`  
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${_(rF)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>`}}var rx=new rL;class rT{_parentElement=document.querySelector(".search");getQuery(){return this._parentElement.querySelector(".search__field").value}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e(),this._clearInput()})}}var rq=new rT;class rI extends rP{_parentElement=document.querySelector(".results");_ErrorMessage="No recipes found for yout query! Please try again";_SuccessMessage="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
    <a class="preview__link ${e.id===t?"preview__link--active":""}" 
     href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.image}" alt="${e.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
      </div>

      <div class="preview__user-generated ${e.key?"":"hidden"}">
     
      <svg>
          <use href="${_(rF)}#icon-user"></use>
      </svg>
      </div>
      
    </a>
  </li>
    
    `}}var rH=new rI;class rN extends rP{_parentElement=document.querySelector(".pagination");addHandlerClickButton(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.currentPage,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
          <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${_(rF)}#icon-arrow-right"></use>
            </svg>
          </button>
      `:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${_(rF)}#icon-arrow-left"></use>
        </svg>
        <span> Page ${e-1}</span>
      </button>
      `:e<t?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${_(rF)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>

    <butto data-goto="${e+1}"n class="btn--inline pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${_(rF)}#icon-arrow-right"></use>
      </svg>
    </butto>

      `:""}}var rC=new rN;class rA extends rP{_parentElement=document.querySelector(".bookmarks__list");_ErrorMessage=`No bookmark yet. Find a nice recipe and bookmark it \u{1F609}`;_SuccessMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){let t=window.location.hash.slice(1);return`
    <li class="preview">
    <a class="preview__link ${e.id===t?"preview__link--active":""}" 
     href="#${e.id}">
      <figure class="preview__fig">
        <img src="${e.image}" alt="${e.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>  
        
        <div class="recipe__user-generated ${e.key?"":"hidden"}">
        <svg>
            <use href="${_(rF)}#icon-user"></use>
        </svg>
        </div>
      </div>
     
    </a>
  </li>
    
    `}}var rR=new rA;class rz extends rP{_parentElement=document.querySelector(".upload");_SuccessMessage="Recipe was successfully added";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_buttonToOpenModal=document.querySelector(".nav__btn--add-recipe");_buttonToCloseModal=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerOpenModal(),this._addHandlerCloseModal()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerOpenModal(){this._buttonToOpenModal.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseModal(){this._buttonToCloseModal.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUploadFormData(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rD=new rz,rW=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function j(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;M(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rW}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rW:Function("r","regeneratorRuntime = r")(rW)}const rG=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rx.renderSpinner(),rH.update(rE()),rR.update(rb.bookmarks),await rw(e),rx.render(rb.recipe)}catch(e){rx.renderError()}},rB=async function(){try{rH.renderSpinner();let e=rq.getQuery();if(!e)return;await rk(e),rH.render(rE()),rC.render(rb.search)}catch(e){console.log(e)}},rU=async function(e){try{rD.renderSpinner(),await rj(e),console.log(rb.recipe),rx.render(rb.recipe),rD.renderSuccessMessage(),rR.render(rb.bookmarks),window.history.pushState(null,"",`#${rb.recipe.id}`),setTimeout(()=>{rD.toggleWindow()},1500)}catch(e){console.error(e),rD.renderError(e.message)}};rR.addHandlerRender(function(){rR.render(rb.bookmarks)}),rx.addHandlerRender(rG),rx.addHandlerUpdateServings(function(e){rS(e),rx.update(rb.recipe)}),rx.addHandlerAddBookMark(function(){rb.recipe.bookmarked?rO(rb.recipe.id):rM(rb.recipe),rx.update(rb.recipe),rR.render(rb.bookmarks)}),rq.addHandlerSearch(rB),rC.addHandlerClickButton(function(e){rH.render(rE(e)),rC.render(rb.search)}),rD.addHandlerUploadFormData(rU);
//# sourceMappingURL=index.dbfca711.js.map
