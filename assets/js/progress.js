// Atualiza a página de progresso (progresso.md) e exibe resumo.
(function(){
  function load(){
    try { return JSON.parse(localStorage.getItem('cdm_progress')||'{}'); } catch(e){ return {}; }
  }
  function summarize(){
    const data = load();
    // Agrupar por módulo (prefixo quiz id antes do primeiro '-') ex: quiz-js-1 -> js
    const entries = Object.entries(data);
    const summary = {};
    entries.forEach(([id,val])=>{ const mod = id.split('-')[1]||'misc'; (summary[mod]=summary[mod]||{answered:0,correct:0}).answered++; if(val.correct) summary[mod].correct++; });
    return { data, summary };
  }
  function percent(a,b){ return b? Math.round((a/b)*100):0; }
  function render(){
    const box = document.getElementById('progress-summary');
    const tableBody = document.querySelector('#progress-table tbody');
    if(!box || !tableBody) return;
    const { summary } = summarize();
    tableBody.innerHTML='';
    let totalAnswered=0,totalCorrect=0,totalSlots=0;
    Object.keys(summary).sort().forEach(mod => {
      const s=summary[mod];
      totalAnswered+=s.answered; totalCorrect+=s.correct; totalSlots+=s.answered; // slots = quizzes respondidos (não temos total global aqui)
      const tr=document.createElement('tr');
      tr.innerHTML=`<td>${mod}</td><td>${s.answered}</td><td>${s.answered}</td><td>${percent(s.correct,s.answered)}%</td>`;
      tableBody.appendChild(tr);
    });
    box.textContent = `Quizzes respondidos: ${totalAnswered} | Corretos: ${totalCorrect} (${percent(totalCorrect,totalAnswered)}%)`;
  }
  document.addEventListener('DOMContentLoaded', render);
  document.addEventListener('cdm-progress-updated', render);
  document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('clear-progress');
    if(btn) btn.addEventListener('click', ()=>{ localStorage.removeItem('cdm_progress'); render(); });
  });
})();
