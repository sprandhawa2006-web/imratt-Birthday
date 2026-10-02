/* Birthday surprise for Imrattt */
const CONFIG={password:'0510',girlfriendName:'Imrattt',birthdayDate:'05/10/2026',coverTitle:"Imrattt's 19th Birthday ♡",letterTitle:'Happy 19th Birthday, Imrattt ♡'};
const views=[...document.querySelectorAll('.view')],$=id=>document.getElementById(id);let pin='';
function showView(id){views.forEach(v=>v.classList.toggle('active',v.id===id));window.scrollTo({top:0,behavior:'instant'})}
function burst(count=70){const layer=$('confetti'),colours=['#6ca5ff','#ef78ad','#f1d15a','#a77de8','#64d4a5','#fff'];for(let i=0;i<count;i++){const p=document.createElement('i');p.className='confetti-piece';p.style.left=Math.random()*100+'vw';p.style.background=colours[Math.floor(Math.random()*colours.length)];p.style.setProperty('--drift',(Math.random()*160-80)+'px');p.style.animationDelay=Math.random()*.35+'s';p.style.animationDuration=(2.1+Math.random()*1.9)+'s';layer.appendChild(p);setTimeout(()=>p.remove(),4400)}}
function updatePin(){[...document.querySelectorAll('.pin-box')].forEach((b,i)=>{b.classList.toggle('active',i===Math.min(pin.length,3));b.innerHTML=i<pin.length?'<span>♥</span>':''})}
function submit(){if(pin.length!==4)return;if(pin===CONFIG.password){$('pinMessage').textContent='Unlocked ♡';burst(45);setTimeout(()=>showView('acceptView'),500)}else{$('pinMessage').textContent='Not our secret hehe ♡ Try again.';setTimeout(()=>{pin='';updatePin()},500)}}
$('playBtn').onclick=()=>showView('lockView');
$('keypad').onclick=e=>{const k=e.target.closest('button')?.dataset.key;if(!k)return;$('pinMessage').textContent='';if(k==='clear')pin='';else if(k==='back')pin=pin.slice(0,-1);else if(pin.length<4)pin+=k;updatePin();submit()};
$('yesBtn').onclick=()=>{burst(90);setTimeout(()=>showView('giftsView'),300)};
const no=$('noBtn');function dodge(){no.style.position='absolute';no.style.left=Math.random()*60+'%';no.style.top=(Math.random()*50-10)+'px';no.textContent=['NO 🥺','are you sure? 🥹','pls 😭','YES is better ♡'][Math.floor(Math.random()*4)]}no.onpointerenter=dodge;no.onclick=dodge;
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>showView(b.dataset.open));document.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>showView('giftsView'));
$('coverTitle').textContent=CONFIG.coverTitle;$('letterDate').textContent=CONFIG.birthdayDate;$('letterTitle').textContent=CONFIG.letterTitle;updatePin();