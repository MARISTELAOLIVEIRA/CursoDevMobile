// Transforma blocos ```quiz em widgets interativos no browser.
// Regras: bloco pré-renderizado de código com classe 'language-quiz' (Material theme)
(function(){
  function parseJson(code){ try { return JSON.parse(code); } catch(e){ return null; } }
  function createQuizElement(q){
    const wrap = document.createElement('div');
    wrap.className = 'quiz-box';
    const title = document.createElement('div');
    title.className = 'quiz-question';
    title.textContent = q.question;
    wrap.appendChild(title);
    const list = document.createElement('div'); list.className='quiz-options';
    Object.entries(q.options).forEach(([k,v])=>{
      const btn = document.createElement('button');
      btn.type='button'; btn.className='quiz-option';
      btn.dataset.key=k; btn.textContent = k+') '+v;
      list.appendChild(btn);
    });
    wrap.appendChild(list);
    const info = document.createElement('div'); info.className='quiz-feedback'; wrap.appendChild(info);
    const multi = Array.isArray(q.answer);
    if(multi){
      const submit = document.createElement('button'); submit.textContent='Responder'; submit.className='quiz-submit';
      wrap.appendChild(submit);
      submit.addEventListener('click', ()=>finish());
    }
    const chosen = new Set();
    list.addEventListener('click', e=>{
      const b = e.target.closest('button.quiz-option'); if(!b) return;
      const key = b.dataset.key;
      if(Array.isArray(q.answer)) {
        if(chosen.has(key)) { chosen.delete(key); b.classList.remove('selected'); }
        else { chosen.add(key); b.classList.add('selected'); }
      } else {
        chosen.clear(); chosen.add(key);
        [...list.querySelectorAll('.quiz-option')].forEach(x=>x.classList.remove('selected'));
        b.classList.add('selected');
        finish();
      }
    });
    function finish(){
      if(chosen.size===0) return;
      const expected = Array.isArray(q.answer) ? q.answer.map(a=>String(a).toLowerCase()).sort() : [String(q.answer).toLowerCase()];
      const got = [...chosen].map(a=>a.toLowerCase()).sort();
      const ok = expected.length===got.length && expected.every((v,i)=>v===got[i]);
      info.textContent = ok ? '✅ Correto' : '❌ Correto: '+ expected.join(',');
      if(q.explanation) {
        const exp = document.createElement('div'); exp.className='quiz-explanation'; exp.textContent='💡 '+q.explanation; info.appendChild(exp);
      }
      wrap.classList.add(ok?'correct':'incorrect');
      recordProgress(q.id, ok);
    }
    return wrap;
  }
  function recordProgress(id, ok){
    try {
      const key='cdm_progress';
      const data = JSON.parse(localStorage.getItem(key)||'{}');
      data[id] = { answered:true, correct: ok, ts: Date.now() };
      localStorage.setItem(key, JSON.stringify(data));
      document.dispatchEvent(new CustomEvent('cdm-progress-updated'));
    } catch(e) {}
  }
  function enhance(){
    document.querySelectorAll('pre code.language-quiz').forEach(codeEl => {
      if(codeEl.dataset.enhanced) return;
      const raw = codeEl.textContent.trim();
      const q = parseJson(raw); if(!q || !q.question) return;
      codeEl.dataset.enhanced='1';
      const quizEl = createQuizElement(q);
      const container = document.createElement('div'); container.className='quiz-container';
      container.appendChild(quizEl);
      const pre = codeEl.parentElement; pre.replaceWith(container);
    });
  }
  document.addEventListener('DOMContentLoaded', enhance);
  document.addEventListener('DOMContentLoaded', ()=>{
    // Reaplicar quando navegação SPA do mkdocs material troca página
    if(window.MutationObserver){
      const obs = new MutationObserver(()=>enhance());
      obs.observe(document.querySelector('main'), { childList:true, subtree:true });
    }
  });
})();
