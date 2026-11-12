(function(){
  var S=window.SITE,$=function(s,r){return(r||document).querySelector(s)};
  function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
  // Skills
  var sk=$("#skills-grid");Object.keys(S.skills).forEach(function(k){var c=el("div","card reveal","<h3>"+esc(k)+"</h3>");var t=el("div","tags");S.skills[k].forEach(function(s){t.appendChild(el("span","tag",esc(s)))});c.appendChild(t);sk.appendChild(c)});
  // Projects
  var pg=$("#projects-grid");S.projects.forEach(function(p){
    var h="<h3>"+esc(p.name)+"</h3><div class=meta>"+esc(p.domain)+"</div><ul><li><strong>Problem:</strong> "+esc(p.problem)+"</li><li><strong>My contribution:</strong> "+esc(p.mine)+"</li></ul>";
    [p.flow,p.flow2].forEach(function(f,i){if(f)h+='<div class=flow role=img aria-label="'+(i?"Second":"Main")+' pipeline: '+esc(f.join(", "))+'">'+f.map(function(x){return"<span>"+esc(x)+"</span>"}).join("<i>→</i>")+"</div>"});
    h+="<ul><li><strong>Outcome:</strong> "+esc(p.out)+"</li></ul><div class=tags>"+p.stack.map(function(x){return"<span class=tag>"+esc(x)+"</span>"}).join("")+"</div>";
    var c=el("article","card reveal"+(p.feature?" feature":""),h);if(p.feature)c.style.gridColumn="1/-1";pg.appendChild(c)});
  // Resumes
  var rg=$("#resume-grid");S.resumes.forEach(function(r){rg.appendChild(el("div","card reveal","<h3>"+esc(r.title)+"</h3><p class=meta>"+esc(r.desc)+'</p><div class=btns><a class="btn primary" href="'+r.file+'" target=_blank rel=noopener>View PDF</a><a class=btn href="'+r.file+'" download>Download</a></div>'))});
  var hr=$("#hero-resume");if(hr)hr.href=S.resumes[0].file;
  // Rotating role
  var rt=$("#rotator"),ri=0,ci=0,del=false,rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
  function type(){var w=S.roles[ri],d=80;
    if(!del){ci++;rt.textContent=w.slice(0,ci);if(ci===w.length){del=true;d=1600}}
    else{ci--;rt.textContent=w.slice(0,ci);d=40;if(ci===0){del=false;ri=(ri+1)%S.roles.length;d=350}}
    setTimeout(type,d)}
  if(rm)rt.textContent=S.roles[0];else type();
  // Theme
  var root=document.documentElement,tb=$("#theme");
  try{var t=localStorage.getItem("theme");if(t)root.dataset.theme=t}catch(e){}
  tb.onclick=function(){var n=root.dataset.theme==="light"?"dark":"light";root.dataset.theme=n;tb.setAttribute("aria-pressed",n==="light");try{localStorage.setItem("theme",n)}catch(e){}};
  // Mobile menu
  var m=$("#menu"),ul=$("#nav-list");m.onclick=function(){var o=ul.classList.toggle("open");m.setAttribute("aria-expanded",o)};
  ul.addEventListener("click",function(e){if(e.target.tagName==="A"){ul.classList.remove("open");m.setAttribute("aria-expanded","false")}});
  // Progress + back to top
  var bar=$("#progress"),top=$("#top");
  function sc(){var h=document.documentElement,y=h.scrollTop,max=h.scrollHeight-h.clientHeight;bar.style.width=(max>0?y/max*100:0)+"%";top.classList.toggle("show",y>600)}
  addEventListener("scroll",sc,{passive:true});sc();top.onclick=function(){scrollTo({top:0,behavior:rm?"auto":"smooth"})};
  // Reveal
  var els=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window&&!rm){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.08});els.forEach(function(e){io.observe(e)})}else els.forEach(function(e){e.classList.add("in")});
  $("#year").textContent=new Date().getFullYear();
})();
