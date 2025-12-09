
function qs(k){ return new URLSearchParams(location.search).get(k) }

document.addEventListener('DOMContentLoaded', ()=> {
  const teamId = qs('team');
  // 1. Carrega os dados do time
  fetch('teams_full.json').then(r=>r.json()).then(teams=>{
    // Garante que o time seja carregado, ou usa o primeiro como fallback
    const team = teams.find(t=>t.id===teamId) || teams[0]; 
    renderTeamPage(team);
  });
  
  // O js/cart.js JÁ CUIDA DA INICIALIZAÇÃO DO BOTÃO, MODAL E SINCRONIZAÇÃO
});

function renderTeamPage(team){
  document.getElementById('team-name').textContent = team.name;
  document.getElementById('team-group').textContent = team.group || '';
  const logoEl = document.getElementById('team-logo');
  if(logoEl) logoEl.src = `assets/logos/${team.id}.svg`;

  const grid = document.getElementById('shirts-grid');
  if(!grid) return;
  grid.innerHTML = '';

  for(let i=1;i<=5;i++){
    const card = document.createElement('div');
    card.className='shirt-card';
    
    card.innerHTML = `
      <div class="shirt-img"><img loading="lazy" src="assets/shirts/${team.id}-${i}.svg" alt="${team.name} ${i}" onerror="this.src='assets/shirts/placeholder.svg'"></div>
      <div class="shirt-title">Camisa ${i}</div>
      <div class="note">Preço: <strong class="price-lisa">R$ 129,90</strong> (Lisa) / <strong class="price-personalizada">R$ 159,90</strong> (Personalizada)</div>
      <div class="row">
        <label class="small">Tamanho
          <select class="select size-select"><option>P</option><option>M</option><option>G</option><option>GG</option><option>XG</option></select>
        </label>
        <label class="small">Tipo
          <select class="select kind-select"><option value="lisa">Lisa</option><option value="personalizada">Personalizada</option></select>
        </label>
        <button class="order-btn add-cart">Adicionar ao carrinho</button>
      </div>
      <div class="personal-area" style="display:none;margin-top:8px">
        <input type="text" class="input-name" placeholder="Nome (ex: RICARDO)"><br><br>
        <input type="number" class="input-number" placeholder="Número (ex: 10)">
        <br><br>
      </div>
      <br>
      <button class="order-btn buy-now" style="width:100%;margin-top:4px">Finalizar no WhatsApp</button>
    `;
    const kind = card.querySelector('.kind-select');
    const personal = card.querySelector('.personal-area');
    kind.addEventListener('change', ()=> personal.style.display = kind.value==='personalizada' ? 'block' : 'none');

    // ADICIONAR AO CARRINHO (Lógica Reforçada)
    const addBtn = card.querySelector('.add-cart');
    addBtn.addEventListener('click', ()=>{
      // 1. Coleta de dados (Elementos)
      const sizeEl = card.querySelector('.size-select');
      const kindEl = card.querySelector('.kind-select');
      const nameEl = card.querySelector('.input-name');
      const numberEl = card.querySelector('.input-number');

      // Se por algum motivo o HTML não estiver completo (prevenção de erros)
      if (!sizeEl || !kindEl || !nameEl || !numberEl) {
          console.error("Erro: Um ou mais elementos do formulário não foram encontrados.");
          showToast('Erro ao capturar dados. Recarregue a página.');
          return;
      }
      
      const size = sizeEl.value;
      const tipo = kindEl.value;
      const nome = nameEl.value || '-';
      const numero = numberEl.value || '-';
      
      let precoText;
      if (tipo === 'lisa') {
          precoText = card.querySelector('.price-lisa')?.textContent;
      } else {
          precoText = card.querySelector('.price-personalizada')?.textContent;
      }
      
      // 2. PARSE SEGURO DO PREÇO (Converte R$ 129,90 para o número 129.90)
      let precoNum = 0;
      if (precoText) {
          // 1. Remove R$ e espaços
          // 2. Substitui a vírgula (decimal BR) por ponto (decimal JS)
          const cleanPriceString = precoText.replace('R$', '').trim().replace(',', '.');
          precoNum = parseFloat(cleanPriceString) || 0;
      }
      
      if (precoNum === 0) {
          console.error("Erro: Preço da camisa lido como zero. Verifique o HTML.");
          showToast('Erro ao calcular o preço.');
          return;
      }
      
      // 3. Cria o objeto do item
      const item = {
          team: team.name,
          teamId: team.id,
          sku: i,
          title: `Camisa ${i}`,
          size: size,
          tipo: tipo,
          nome: nome,
          numero: numero,
          price: precoNum 
      };
      
      
      console.log("Item pronto para salvar:", item);

      // 4. Ação do carrinho (Funções GLOBAIS do cart.js)
      const cart = loadCart();
      cart.push(item);
      saveCart(cart);
      updateCartCount();
      showToast('Item adicionado ao carrinho!'); 
    });

    // botão "Finalizar no WhatsApp" por camisa (compra rápida)
    const buyNowBtn = card.querySelector('.buy-now');
    buyNowBtn.addEventListener('click', ()=>{
      const size = card.querySelector('.size-select').value;
      const tipo = card.querySelector('.kind-select').value;
      const nome = card.querySelector('.input-name').value || '-';
      const numero = card.querySelector('.input-number').value || '-';
      const precoText = tipo==='lisa' ? card.querySelector('.price-lisa').textContent : card.querySelector('.price-personalizada').textContent;
      
      // PARSE SEGURO DO PREÇO aqui também
      const cleanPriceString = precoText.replace('R$', '').trim().replace(',', '.');
      const precoNum = parseFloat(cleanPriceString) || 0;
      
      let msg = `Pedido rápido - SPORT STORE\n`;
      msg += `Time: ${team.name}\nCamisa: Camisa ${i}\nTipo: ${tipo}\nTamanho: ${size}\nNome: ${nome}\nNúmero: ${numero}\nPreço: R$ ${precoNum.toFixed(2)}`;
      
      
      const wa = `https://wa.me/${VENDOR_PHONE}?text=${encodeURIComponent(msg)}`;
      window.open(wa,'_blank');
    });

    grid.appendChild(card);
  }
}