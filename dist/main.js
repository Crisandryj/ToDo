(()=>{"use strict";document.addEventListener("click",(t=>{const e=t.target.matches("[data-dropdown-button]");if(!e&&null!=t.target.closest("[data-dropdown]"))return;let s;e&&(s=t.target.closest("[data-dropdown]"),s.classList.toggle("active")),document.querySelectorAll("[data-dropdown].active").forEach((t=>{t!==s&&t.classList.remove("active")}))}));class t{constructor(t){this.name=t,this.items=[]}setItem(t){this.items.push(t)}getItems(){return this.items}}const e=document.getElementById("projectform");e.addEventListener("submit",(s=>{s.preventDefault();const o=e.elements.name,n=new t(o.value);console.log(n)}))})();