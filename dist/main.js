(()=>{"use strict";class e{constructor(e){this.name=e,this.items=[]}setItem(e){this.items.push(e)}getItems(){return this.items}}class t{constructor(e,t,n,o,d){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.complete=d}markComplete(){this.complete=!0}unmarkComplete(){this.complete=!1}}const n=document.getElementById("projectform"),o=document.getElementById("todoform"),d=document.querySelector("#newproject"),c=document.querySelector("#newitem"),s=document.getElementById("content");function l(e){return e.split(" ").join("")}function a(e){const t=s.querySelector(`.${l(e)}`),n=document.createElement("table"),o=document.createElement("tr"),d=document.createElement("th"),c=document.createElement("th"),a=document.createElement("th"),i=document.createElement("th");o.appendChild(c),o.appendChild(a),o.appendChild(i),o.appendChild(d),n.appendChild(o),t.appendChild(n)}function i(e){const t=document.createElement("div"),n=document.createElement("h2"),o=document.createElement("div");o.classList.add("heading"),t.classList.add(l(e)),t.classList.add("items"),s.appendChild(t),o.appendChild(n),t.appendChild(o),n.textContent=e;const d=document.createElement("button");d.setAttribute("id",e),d.textContent="Remove Project",o.appendChild(d)}const m=document.getElementById("content"),r=new e("Inbox");i(r.name),a(r.name),n.addEventListener("submit",(t=>{t.preventDefault(),function(){const t=n.elements.name;!function(e){const t=document.createElement("option");t.setAttribute("value",e),document.getElementById("projects").appendChild(t),t.textContent=e}(t.value);const o=new e(t.value);i(o.name),function(e){const t=document.getElementById("myDropdown"),n=document.createElement("a");n.classList.add(l(e)),n.classList.add("items"),t.appendChild(n),n.textContent=e}(o.name),a(t.value)}(),n.reset()})),d.addEventListener("click",(()=>{n.classList.toggle("hide")})),o.addEventListener("submit",(e=>{e.preventDefault(),function(){const e=o.elements.projects,n=o.elements.title,d=o.elements.description,c=o.elements.dueDate,s=o.elements.priority,l=new t(n.value,d.value,c.value,s.value),a=document.querySelector(`.${e.value}.items table`),i=document.createElement("tr"),m=document.createElement("td");m.textContent=l.description;const r=document.createElement("td"),u=document.createElement("td"),p=document.createElement("input");u.appendChild(p),p.setAttribute("type","radio"),s.value>=50?p.style.borderColor="red":p.style.borderColor="blue",p.addEventListener("click",(()=>{i.remove()})),i.appendChild(u),i.appendChild(m),i.appendChild(r),a.appendChild(i)}(),o.reset()})),c.addEventListener("click",(()=>{o.classList.toggle("hide")}));const u=document.getElementById("myDropdown");document.querySelector(".dropbtn").addEventListener("click",(()=>{u.classList.toggle("show")})),window.onclick=function(e){if(!e.target.matches(".dropbtn")){const e=document.getElementsByClassName("dropdown-content");let t;for(t=0;t<e.length;t++){const n=e[t];n.classList.contains("show")&&n.classList.remove("show")}}},m.addEventListener("click",(e=>{e.target.matches("button")&&(document.getElementsByClassName(e.target.parentNode.parentNode.className)[0].remove(),e.target.parentNode.parentNode.removeChild(e.target.closest("div")))}))})();