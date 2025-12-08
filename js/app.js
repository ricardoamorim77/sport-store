// FUNÇÕES DE CARRINHO (loadCart, updateCartCount, etc.) ESTÃO NO js/cart.js
// O js/cart.js JÁ CUIDA DA INICIALIZAÇÃO E SINCRONIZAÇÃO DO BOTÃO DO CARRINHO.

fetch('teams_full.json').then(r=>r.json()).then(teams=>{
  const gridBr = document.getElementById('grid-br');
  const gridLib = document.getElementById('grid-lib');
  const gridEu = document.getElementById('grid-eu');
  const gridOut = document.getElementById('grid-outros');
  const gridSel = document.getElementById('grid-sel');

  teams.forEach(t=>{
    const card = document.createElement('div');
    card.className='team-card';
    const img = document.createElement('img');
    img.loading='lazy';
    img.src = `assets/logos/${t.id}.svg`;
    img.alt = t.name;
    const span = document.createElement('span');
    span.textContent = t.name;
    card.appendChild(img);
    card.appendChild(span);
    card.onclick = ()=> window.location = `team.html?team=${encodeURIComponent(t.id)}`;

    if(t.group === 'Clubes Brasileiros') gridBr.appendChild(card);
    else if(t.group === 'Libertadores') gridLib.appendChild(card);
    else if(t.group === 'Clubes Europeus') gridEu.appendChild(card);
    else if(t.group === 'Outros Clubes') gridOut.appendChild(card);
    else if(t.group === 'Seleções') gridSel.appendChild(card);
  });
});