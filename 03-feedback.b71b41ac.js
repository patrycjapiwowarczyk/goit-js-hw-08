function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,u=setTimeout(h,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function h(){var e=v();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function w(e){return u=void 0,p&&i?b(e):(i=o=void 0,a)}function O(){var e=v(),n=S(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),j=document.querySelector('input[name="email"]'),S=document.querySelector('textarea[name="message"]'),h=e(t)((function(e,t){localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:t}))}),500);b.addEventListener("input",(()=>{h(j.value,S.value)}));const w=localStorage.getItem("feedback-form-state");if(w){const{email:e,message:t}=JSON.parse(w);emailInput.value=e,messageInput.value=t}b.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:j.value,message:S.value}),localStorage.removeItem("feedback-form-state"),j.value="",S.value=""}));
//# sourceMappingURL=03-feedback.b71b41ac.js.map
