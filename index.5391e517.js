const e=document.querySelector("#home-btn"),t=document.querySelector("#library-btn"),r=document.querySelector("#search-form"),s=document.querySelector("#library-buttons"),n=document.querySelector("#header-logo");r.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value;console.log(t)})),t.addEventListener("click",(function(){t.classList.add("current-btn"),e.classList.remove("current-btn"),s.classList.remove("visually-hidden"),r.classList.add("visually-hidden"),n.classList.add("header-logo--library")})),e.addEventListener("click",(function(){e.classList.add("current-btn"),t.classList.remove("current-btn"),s.classList.add("visually-hidden"),r.classList.remove("visually-hidden"),n.classList.remove("header-logo--library")}));
//# sourceMappingURL=index.5391e517.js.map
