const data = {
vivo:{
title:"📱 vivo V70",
html:`
<div class="card">
<h2>สัญญา SBR0001339</h2>

<p>ยอดผ่อน : 2,230 บาท / เดือน</p>
<p>จำนวนงวด : 14 งวด</p>
<p>สถานะ : 🟠 รอชำระ</p>

<button class="btn">งวดที่ 1</button>
<button class="btn">งวดที่ 2</button>
<button class="btn">งวดที่ 3</button>
</div>
`
},

watch:{
title:"⌚ Redmi Watch 5 Lite",
html:`
<div class="card">
<h2>ยอดคงเหลือ 3,180 บาท</h2>

<p>265 บาท / สัปดาห์</p>
<p>12 งวด</p>
<p>🟠 รอชำระ</p>
</div>
`
},

soundcore:{
title:"🎧 Soundcore R60i NC",
html:`
<div class="card">
<h2>ยอดคงเหลือ 1,300 บาท</h2>

<p>130 บาท / สัปดาห์</p>
<p>12 งวด</p>
<p>🟠 รอชำระ</p>
</div>
`
}
};

const p=new URLSearchParams(location.search);

const id=p.get("id");

document.getElementById("title").innerHTML=data[id].title;

document.getElementById("content").innerHTML=data[id].html;