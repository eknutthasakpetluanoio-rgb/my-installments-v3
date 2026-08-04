from pathlib import Path

js = r"""// My Installments V3 - detail.js

const contracts = {
  vivo: {
    title: "📱 vivo V70",
    contract: "SBR0001339",
    installmentAmount: 2230,
    totalInstallments: 14,
    dates: [
      "15/08/2569","15/09/2569","15/10/2569","15/11/2569",
      "15/12/2569","15/01/2570","15/02/2570","15/03/2570",
      "15/04/2570","15/05/2570","15/06/2570","15/07/2570",
      "15/08/2570","15/09/2570"
    ]
  }
};

function renderSchedule(id="vivo"){
  const c = contracts[id];
  const container = document.getElementById("schedule");
  if(!container || !c) return;

  container.innerHTML = "";

  c.dates.forEach((date,index)=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>งวดที่ ${index+1}</h3>
      <div class="row">
        <span>กำหนดชำระ</span>
        <strong>${date}</strong>
      </div>
      <div class="row">
        <span>ยอด</span>
        <strong>${c.installmentAmount.toLocaleString()} บาท</strong>
      </div>
      <button class="btn" onclick="markPaid(${index})">
        ชำระแล้ว
      </button>
    `;
    container.appendChild(card);
  });
}

function markPaid(index){
  alert(`บันทึกงวดที่ ${index+1} แล้ว (เวอร์ชันถัดไปจะบันทึกลง Local Storage)`);
}

document.addEventListener("DOMContentLoaded",()=>{
  renderSchedule();
});
"""

path = Path("/mnt/data/detail.js")
path.write_text(js, encoding="utf-8")
print(path)
