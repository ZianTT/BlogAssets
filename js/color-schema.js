!function(c,s){var l=s.documentElement,u="ZianTT_Color_Scheme",t="--color-mode",d="data-user-color-scheme",r="data-default-color-scheme",g="#color-toggle-icon";function m(e){try{return localStorage.getItem(e)}catch(e){return null}}function a(){var e=getComputedStyle(l).getPropertyValue(t);return"string"==typeof e?e.replace(/["'\s]/g,""):null}function h(){l.setAttribute(d,v());var e=u;try{localStorage.removeItem(e)}catch(e){}}var f={dark:!0,light:!0};function v(){var e="string"==typeof(e=l.getAttribute(r))?e.replace(/["'\s]/g,""):null;return f[e]||(e=a(),f[e])?e:18<=(e=(new Date).getHours())||0<=e&&e<=6?"dark":"light"}function o(e){var t,r,e=e||m(u)||v();if(e===v())h();else{if(!f[e])return void h();l.setAttribute(d,e)}var a=e,o=(f[a]&&(t=y("dark"),a&&(t=y(a)),(o=s.querySelector(g))?(o.setAttribute("class","iconfont "+t),o.setAttribute("data",b[a])):ZianTT.utils.waitElementLoaded(g,function(){var e=s.querySelector(g);e&&(e.setAttribute("class","iconfont "+t),e.setAttribute("data",b[a]))}),s.documentElement.getAttribute("data-user-color-scheme"))&&(o=getComputedStyle(s.documentElement).getPropertyValue("--navbar-bg-color").trim(),s.querySelector('meta[name="theme-color"]').setAttribute("content",o)),e),i=s.getElementById("highlight-css"),n=s.getElementById("highlight-css-dark"),i=("dark"===o?(n&&n.removeAttribute("disabled"),i&&i.setAttribute("disabled","")):(i&&i.removeAttribute("disabled"),n&&n.setAttribute("disabled","")),setTimeout(function(){s.querySelectorAll(".markdown-body pre").forEach(e=>{var t=0<=ZianTT.utils.getBackgroundLightness(e)?"code-widget-light":"code-widget-dark",e=e.querySelector(".code-widget-light, .code-widget-dark");e&&(e.classList.remove("code-widget-light","code-widget-dark"),e.classList.add(t))})},200),e),n=(c.REMARK42&&c.REMARK42.changeTheme(i),c.CUSDIS&&c.CUSDIS.setTheme(i),s.querySelector(".utterances-frame"));n&&(r="dark"===i?c.UtterancesThemeDark:c.UtterancesThemeLight,n.contentWindow.postMessage({type:"set-theme",theme:r},"https://utteranc.es")),(n=s.querySelector("iframe.giscus-frame"))&&(r="dark"===i?c.GiscusThemeDark:c.GiscusThemeLight,n.contentWindow.postMessage({giscus:{setConfig:{theme:r}}},"https://giscus.app"))}var b={dark:"light",light:"dark"};function y(e){return"icon-"+e}function i(){var e=m(u);if(f[e])e=b[e];else{if(null!==e)return;var t=s.querySelector(g);t&&(e=t.getAttribute("data")),t&&f[e]||(e=b[a()])}var t=u,r=e;try{localStorage.setItem(t,r)}catch(e){}return e}o(),ZianTT.utils.waitElementLoaded(g,function(){o();var t,e=s.querySelector("#color-toggle-btn");e&&(e.addEventListener("click",function(){o(i())}),t=s.querySelector(g))&&(e.addEventListener("mouseenter",function(){var e=t.getAttribute("data");t.classList.replace(y(b[e]),y(e))}),e.addEventListener("mouseleave",function(){var e=t.getAttribute("data");t.classList.replace(y(e),y(b[e]))}))})}(window,document);