(function(){
  var f=document.getElementById("contact-form");if(!f)return;
  var S=window.SITE,st=document.getElementById("status"),btn=f.querySelector("button[type=submit]");
  var re=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,code="";
  function rnd(n){return crypto.getRandomValues(new Uint32Array(1))[0]%n}
  function draw(){
    code=String(10000+rnd(90000));
    var cv=document.getElementById("cap-canvas"),x=cv.getContext("2d");
    x.fillStyle="#1b2540";x.fillRect(0,0,150,46);
    for(var i=0;i<7;i++){x.strokeStyle="hsl("+rnd(360)+",60%,60%)";x.lineWidth=1+rnd(2);x.beginPath();x.moveTo(rnd(150),rnd(46));x.lineTo(rnd(150),rnd(46));x.stroke()}
    for(i=0;i<5;i++){x.save();x.translate(14+i*27,31+rnd(7)-3);x.rotate((rnd(60)-30)/100);x.font="bold 26px monospace";x.fillStyle="#e6ebf5";x.fillText(code[i],0,0);x.restore()}
    for(i=0;i<40;i++){x.fillStyle="rgba(255,255,255,.35)";x.fillRect(rnd(150),rnd(46),2,2)}
  }
  draw();document.getElementById("cap-new").onclick=function(){draw();f.elements.captcha.value=""};
  function show(c,m){st.className=c;st.textContent=m}
  function bad(n,m){f.elements[n].setAttribute("aria-invalid","true");document.getElementById("e-"+n).textContent=m;return 1}
  f.addEventListener("submit",function(ev){
    ev.preventDefault();var n=0;
    ["name","email","subject","message","captcha"].forEach(function(k){f.elements[k].removeAttribute("aria-invalid");document.getElementById("e-"+k).textContent=""});
    var v=function(k){return f.elements[k].value.trim()};
    if(!v("name"))n+=bad("name","Please enter your name.");
    if(!v("email"))n+=bad("email","Please enter your email.");else if(!re.test(v("email")))n+=bad("email","Enter a valid email address.");
    if(!v("subject"))n+=bad("subject","Please add a subject.");
    if(v("message").length<10)n+=bad("message","Message should be at least 10 characters.");
    if(v("captcha")!==code){n+=bad("captcha","That number doesn't match. Try the new one.");draw();f.elements.captcha.value=""}
    if(n){show("bad","Please fix the highlighted fields.");return}
    if(f.elements.botcheck.checked)return; // honeypot
    var key=S.web3formsKey;
    if(!key||key==="USER_WILL_CONFIGURE_THIS"){
      location.href="mailto:"+S.email+"?subject="+encodeURIComponent(v("subject"))+"&body="+encodeURIComponent(v("message")+"\n\n— "+v("name")+" ("+v("email")+")");
      show("ok","Contact form isn't configured yet, so your email app was opened instead.");return}
    btn.disabled=true;btn.textContent="Sending…";show("","");
    fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},
      body:JSON.stringify({access_key:key,name:v("name"),email:v("email"),subject:"[Portfolio] "+v("subject"),message:v("message"),botcheck:""})})
    .then(function(r){return r.json()}).then(function(d){
      if(d.success){show("ok","Thanks! Your message was sent. I'll reply soon.");f.reset();draw()}else throw new Error(d.message)})
    .catch(function(){show("bad","Couldn't send right now. Please email "+S.email+" directly.")})
    .finally(function(){btn.disabled=false;btn.textContent="Send message"});
  });
})();
