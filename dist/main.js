(()=>{"use strict";class e{constructor(e){this.name=e,this.items=[]}setItem(e){this.items.push(e)}getItems(){return this.items}}class t{constructor(e,t,n,c,d){this.title=e,this.description=t,this.dueDate=n,this.priority=c,this.complete=d}markComplete(){this.complete=!0}unmarkComplete(){this.complete=!1}}const n=document.getElementById("projectform"),c=document.getElementById("todoform"),d=document.querySelector("#newproject"),o=document.querySelector("#newitem"),i=document.querySelector(".content"),s=document.querySelector(".sidebar");function l(e){return e.split(" ").join("")}function m(e){const t=document.createElement("div"),n=document.createElement("h2");t.classList.add(l(e)),t.classList.add("projects"),i.appendChild(t),t.appendChild(n),n.textContent=e}function a(e){const t=document.createElement("div"),n=document.createElement("h2");t.classList.add(l(e)),t.classList.add("projects"),s.appendChild(t),t.appendChild(n),n.textContent=e}document.querySelector(".content");const r=new e("Default");m(r.name),a(r.name),n.addEventListener("submit",(t=>{t.preventDefault(),function(){const t=n.elements.name;!function(e){const t=document.createElement("option");t.setAttribute("value",e),document.getElementById("projects").appendChild(t),t.textContent=e}(t.value);const c=new e(t.value);m(c.name),a(c.name)}(),n.reset()})),d.addEventListener("click",(()=>{n.classList.toggle("hide")})),c.addEventListener("submit",(e=>{e.preventDefault(),function(){const e=c.elements.projects,n=c.elements.title,d=c.elements.description,o=c.elements.dueDate,s=c.elements.priority;!function(e,t){const n=i.querySelector(`.${l(t.value)}`),c=document.createElement("table"),d=document.createElement("th"),o=(document.createElement("th"),document.createElement("th"),document.createElement("th"),document.createElement("tr")),s=document.createElement("tr"),m=document.createElement("td"),a=document.createElement("td"),r=document.createElement("td"),u=document.createElement("td");c.classList.add("item");const p=document.createElement("input");p.setAttribute("type","radio"),p.addEventListener("click",(()=>{c.remove()})),d.textContent="Description",o.appendChild(d),s.appendChild(m),s.appendChild(a),s.appendChild(r),s.appendChild(u),s.appendChild(p),c.appendChild(s),m.textContent=e.description,a.textContent=e.title,r.textContent=e.dueDate,u.textContent=e.priority,n.appendChild(c)}(new t(n.value,d.value,o.value,s.value),e)}(),c.reset()})),o.addEventListener("click",(()=>{c.classList.toggle("hide")}))})();