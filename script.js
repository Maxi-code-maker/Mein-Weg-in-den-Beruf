'use strict';
// Die Inhalte stehen in aufgaben.js. Dieser Teil steuert nur die Bedienung.
const main = document.getElementById('main');
let session = null;
const results = new Map(); // Nur Arbeitsspeicher: kein Speichern, kein Senden.
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function focusHeading() { main.querySelector('h1, h2')?.focus(); window.scrollTo(0, 0); }
function home() {
  session = null;
  document.title = 'Mein Weg in den Beruf';
  main.innerHTML = `<section class="hero"><div><div class="eyebrow">Deine Berufsvorbereitung</div><h1 tabindex="-1">Mein Weg<br><span>in den Beruf.</span></h1><p>Was kann ich gut? Welcher Beruf passt zu mir?<br>Finde es heraus. Schritt für Schritt.</p><a class="primary" href="#lernen/staerken">Mit Thema 1 starten <span aria-hidden="true">↗</span></a></div><div class="path-panel"><div class="eyebrow">So lernst du hier</div><div class="path-step"><span class="step-number">1</span><div>Eine Antwort wählen<small>Du hast Zeit. Lies in Ruhe.</small></div></div><div class="path-step"><span class="step-number">2</span><div>Die Erklärung lesen<small>Du lernst mit jeder Antwort.</small></div></div><div class="path-step"><span class="step-number">3</span><div>Weiter üben<small>Du kannst alles wiederholen.</small></div></div></div></section><section aria-labelledby="topics-title"><div class="section-title"><h2 id="topics-title">Deine Lernbereiche</h2><p>${LERNBEREICHE.length} Themen · ${LERNBEREICHE.filter(t=>t.freigeschaltet).length} bereit</p></div><div class="topics">${LERNBEREICHE.map((t,i)=>`<article class="topic ${t.freigeschaltet?'active':''}"><div class="topic-top"><span class="topic-icon" aria-hidden="true">${t.symbol}</span><span class="badge ${t.freigeschaltet?'ready':''}">${t.freigeschaltet?'Bereit zum Lernen':'In Vorbereitung'}</span></div><h3>${i+1}. ${escapeHTML(t.titel)}</h3><p>${escapeHTML(t.beschreibung)}</p>${t.freigeschaltet?`<a class="text-button" href="#lernen/${t.id}">${results.has(t.id)?`Erneut üben · zuletzt ${results.get(t.id)}/${t.aufgaben.length}`:`${t.aufgaben.length} Aufgaben starten`} <span aria-hidden="true">→</span></a>`:`<span class="meta">${t.aufgaben.length} Beispielaufgaben vorbereitet</span>`}</article>`).join('')}</div></section><aside class="notice"><strong>Beispielinhalte für den Unterricht.</strong> Die Lehrkraft muss die Aufgaben vor dem Einsatz fachlich prüfen. Die Punkte bewerten deine Antworten, nicht deine persönlichen Stärken.</aside><details><summary>Gut zu wissen: deine Ergebnisse</summary><p>Es gibt keine Anmeldung. Diese Website fragt keine persönlichen Daten ab und sendet keine Ergebnisse. Punkte bleiben nur während dieser Nutzung im Arbeitsspeicher. Wenn du die Seite neu lädst oder schließt, werden sie zurückgesetzt. Du brauchst keinen Ton.</p></details>`;
  focusHeading();
}
function question() {
  const {topic,index,score} = session;
  const q = topic.aufgaben[index];
  session.answered = false;
  document.title = `${topic.titel} – Mein Weg in den Beruf`;
  main.innerHTML = `<div class="quiz-wrap"><nav class="quiz-nav" aria-label="Lernnavigation"><a class="text-button" href="#start">← Alle Lernbereiche</a><span class="badge">${score} Punkte</span></nav><p class="quiz-kicker">Lernbereich ${LERNBEREICHE.indexOf(topic)+1} · Beispielaufgaben</p><h1 tabindex="-1">${escapeHTML(topic.titel)}</h1><div class="progress-label"><span>Aufgabe ${index+1} von ${topic.aufgaben.length}</span><span id="completed">${index} beantwortet</span></div><progress max="${topic.aufgaben.length}" value="${index}" aria-label="Beantwortete Aufgaben"></progress><section class="question-card" aria-labelledby="question-title"><p class="type-label">${escapeHTML(q.typ)}</p><h2 id="question-title">${escapeHTML(q.frage)}</h2><p class="instruction">${q.typ==='Lückentext'?'Welches Wort passt in die Lücke?':'Wähle eine Antwort.'}</p>${q.tipp ? `<details class="hint"><summary>Tipp zur Aufgabe</summary><div class="hint-content"><p>${escapeHTML(q.tipp)}</p><small>Ein Tipp kostet keine Punkte.</small></div></details>` : ''}<div class="answers" role="group" aria-labelledby="question-title">${q.antworten.map((a,i)=>`<button type="button" class="answer" data-choice="${i}"><span class="choice-letter" aria-hidden="true">${String.fromCharCode(65+i)}</span><span>${escapeHTML(a)}</span></button>`).join('')}</div><div id="feedback" role="status" aria-live="polite" aria-atomic="true"></div><button type="button" class="primary next" id="next" hidden>${index===topic.aufgaben.length-1?'Ergebnis ansehen':'Nächste Aufgabe'} <span aria-hidden="true">→</span></button></section><p class="session-note">1 Punkt je richtiger Antwort · Du kannst später erneut üben.</p></div>`;
  main.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>answer(Number(button.dataset.choice))));
  main.querySelector('#next').addEventListener('click',()=>{if(!session.answered)return;session.index++;session.index===topic.aufgaben.length?result():question();});
  focusHeading();
}
function answer(choice) {
  if (!session || session.answered) return;
  const q=session.topic.aufgaben[session.index];
  session.answered=true;
  const correct=q.antworten[choice]===q.richtig;
  if(correct) session.score++;
  main.querySelectorAll('[data-choice]').forEach((button,i)=>{
    button.disabled=true;
    if(q.antworten[i]===q.richtig){button.classList.add('correct');button.insertAdjacentHTML('beforeend','<span class="answer-mark" aria-label="Richtige Antwort">✓</span>');}
    else if(i===choice){button.classList.add('wrong');button.insertAdjacentHTML('beforeend','<span class="answer-mark" aria-label="Deine Antwort ist falsch">×</span>');}
  });
  const feedback=main.querySelector('#feedback');
  feedback.className=`feedback ${correct?'':'wrong'}`;
  feedback.innerHTML=`<strong>${correct?'Richtig! +1 Punkt':'Das stimmt noch nicht. 0 Punkte.'}</strong><p>${correct?'':`Richtig ist: <strong>${escapeHTML(q.richtig)}</strong>. `}${escapeHTML(q.erklaerung)}</p>`;
  main.querySelector('.quiz-nav .badge').textContent=`${session.score} Punkte`;
  main.querySelector('progress').value=session.index+1;
  main.querySelector('#completed').textContent=`${session.index+1} beantwortet`;
  main.querySelector('#next').hidden=false;
  main.querySelector('#next').focus({preventScroll:true});
  feedback.scrollIntoView({block:'nearest',behavior:'instant'});
}
function result() {
  const {topic,score}=session;
  results.set(topic.id,score);
  main.innerHTML=`<div class="quiz-wrap"><a class="text-button" href="#start">← Alle Lernbereiche</a><section class="result"><div class="result-symbol" aria-hidden="true">✓</div><div class="eyebrow">Lernbereich geschafft</div><h1 tabindex="-1">Du hast geübt!</h1><p>${escapeHTML(topic.titel)}</p><div class="score">${score} / ${topic.aufgaben.length}</div><strong>Punkte erreicht</strong><p>${score===topic.aufgaben.length?'Alle Antworten sind richtig. Gut gemacht!':'Jede Übung hilft dir weiter. Du kannst die Aufgaben noch einmal lösen.'}</p><div class="result-actions"><button class="primary" id="retry">Noch einmal üben ↻</button><a class="secondary" href="#start">Zur Lernübersicht</a></div></section><p class="session-note">Beim Wiederholen beginnt die Punktzahl wieder bei 0.</p></div>`;
  main.querySelector('#retry').addEventListener('click',()=>{session={topic,index:0,score:0,answered:false};question();});
  focusHeading();
}
function route() {
  const topic=LERNBEREICHE.find(t=>`#lernen/${t.id}`===location.hash && t.freigeschaltet);
  if(topic){session={topic,index:0,score:0,answered:false};question();}else{home();}
}
window.addEventListener('hashchange',route);
route();
