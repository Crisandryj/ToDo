(()=>{"use strict";document.addEventListener("click",(e=>{const t=e.target.matches("[data-dropdown-button]");if(!t&&null!=e.target.closest("[data-dropdown]"))return;let n;t&&(n=e.target.closest("[data-dropdown]"),n.classList.toggle("active")),document.querySelectorAll("[data-dropdown].active").forEach((e=>{e!==n&&e.classList.remove("active")}))}));class e{constructor(e){this.name=e,this.items=[]}setItem(e){this.items.push(e)}getItems(){return this.items}}class t{constructor(e,t,n,s,c){this.title=e,this.description=t,this.dueDate=n,this.priority=s,this.complete=c}markComplete(){this.complete=!0}unmarkComplete(){this.complete=!1}}const n=document.getElementById("projectform"),s=document.getElementById("todoform"),c=document.querySelector("#newproject"),o=document.querySelector("#newitem"),d=document.querySelector(".content"),l=document.querySelector(".sidebar"),a=[];function i(e){const t=document.createElement("option");t.setAttribute("value",e),document.getElementById("projects").appendChild(t),t.textContent=e}n.addEventListener("submit",(t=>{t.preventDefault(),function(){const t=n.elements.name;i(t.value);const s=new e(t.value);a.push(s),function(e){i();const t=document.createElement("ul");d.appendChild(t);const n=document.createElement("div"),s=document.createElement("h1");n.classList.add(e),n.classList.add("projects"),d.appendChild(n),n.appendChild(s),s.textContent=e}(s.name),function(e){const t=document.createElement("ul");l.appendChild(t);const n=document.createElement("div"),s=document.createElement("h1");n.classList.add(e),n.classList.add("projects"),l.appendChild(n),n.appendChild(s),s.textContent=e}(s.name)}(),n.reset()})),c.addEventListener("click",(()=>{n.classList.toggle("hide")})),s.addEventListener("submit",(e=>{e.preventDefault();const n=s.elements.projects,c=s.elements.title,o=s.elements.description,l=s.elements.dueDate,a=s.elements.priority;!function(e,t){console.log(t.value);const n=d.querySelector(`.${t.value}`),s=document.createElement("p");s.textContent=e.description,n.appendChild(s)}(new t(c.value,o.value,l.value,a.value),n),s.reset()})),o.addEventListener("click",(()=>{s.classList.toggle("hide")}))})();