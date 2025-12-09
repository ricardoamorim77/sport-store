// VENDOR_PHONE: número de WhatsApp (DDI+DDD sem +)
const VENDOR_PHONE = "5562994613564"; 


function loadCart(){ 
    try{
        return JSON.parse(localStorage.getItem('sport_cart') || '[]');
    } catch(e){
        console.error("Erro ao carregar o carrinho do localStorage:", e);
        return [];
    }
}

// Função para salvar o carrinho no localStorage
function saveCart(c){ 
    localStorage.setItem('sport_cart', JSON.stringify(c));
}

// Função para formatar o preço em BRL
function formatBRL(v){ 
    return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}


function showToast(message) {
  const toast = document.getElementById('cart-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000); // Remove após 3 segundos
}


function updateCartCount(){ 
    const el = document.getElementById('cart-count'); 
    
    if(el) el.textContent = loadCart().length; 
}


function renderCartItems(){
  const container = document.getElementById('cart-items');
  if(!container) return;
  const cart = loadCart();
  container.innerHTML = '';
  let total = 0;
  
  cart.forEach((it,idx)=>{
    total += it.price;
    const div = document.createElement('div');
    div.className='cart-item';
    
    div.innerHTML = `
      <img src="assets/shirts/${it.teamId}-${it.sku}.svg" onerror="this.src='assets/shirts/placeholder.svg'">
      <div>
        <strong>${it.team} - ${it.title}</strong>
        <div>${it.size} • ${it.tipo}</div>
        <div>${it.nome !== '-' ? `Nome: ${it.nome}` : ''} ${it.numero !== '-' ? `Nº: ${it.numero}` : ''}</div>
      </div>
      <div style="margin-left:auto">
        <button data-idx="${idx}" class="remove-item order-btn" style="background:transparent;color:#f00;border:1px solid #f00;">Remover</button>
      </div>
    `;
    container.appendChild(div);
  });
  
  const totalEl = document.getElementById('cart-total');
  if(totalEl) totalEl.textContent = 'Total: ' + formatBRL(total);

  // Adiciona evento de clique para remover itens
  Array.from(document.getElementsByClassName('remove-item')).forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const idx = Number(e.target.getAttribute('data-idx'));
      const cart = loadCart();
      
      // Remove 1 item no índice especificado
      cart.splice(idx,1);
      
      saveCart(cart);
      renderCartItems(); // Re-renderiza a lista após a remoção
      updateCartCount(); // Atualiza o contador
      showToast('Item removido do carrinho.');
    });
  });
}

// 3. Monta a mensagem para o WhatsApp
function sendCartToWhatsApp(){
  const cart = loadCart();
  if(!cart.length){ showToast('O carrinho está vazio.'); return; }
  
  let total = 0;
  let msg = `Pedido de camisetas - Loja: SPORT STORE\n\nItens:\n`;
  
  cart.forEach((it,idx)=>{
    total += it.price;
    msg += `${idx+1}) ${it.team} - ${it.title}\n`;
    msg += `   Tipo: ${it.tipo} | Tamanho: ${it.size}\n`;
    if(it.tipo === 'personalizada'){
        msg += `   Personalização: ${it.nome} - Nº ${it.numero}\n`;
    }
    msg += `   Preço: R$ ${it.price.toFixed(2)}\n`;
  });
  
  msg += `\nTotal do Pedido: R$ ${total.toFixed(2)}`;
  
  const wa = `https://wa.me/${VENDOR_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(wa,'_blank');
}


// --- Inicialização Universal do Carrinho (Rodar em todas as páginas) ---

document.addEventListener('DOMContentLoaded', ()=> {
    // 1. Handlers para modal (abrir/fechar)
    const openCartBtn = document.getElementById('open-cart');
    if(openCartBtn) {
        openCartBtn.addEventListener('click', ()=>{
            renderCartItems(); 
            const modal = document.getElementById('cart-modal');
            if(modal) modal.setAttribute('aria-hidden','false');
        });
    }

    const closeCartBtn = document.getElementById('close-cart');
    if(closeCartBtn) {
        closeCartBtn.addEventListener('click', ()=> {
            const modal = document.getElementById('cart-modal');
            if(modal) modal.setAttribute('aria-hidden','true');
        });
    }

    // 2. Handler para enviar pedido
    const sendCartBtn = document.getElementById('send-whatsapp');
    if(sendCartBtn) {
        sendCartBtn.addEventListener('click', sendCartToWhatsApp);
    }
    
    // 3. Atualiza a contagem no carregamento inicial (ex: index.html abre)
    updateCartCount();
});

// 4. Atualiza a contagem quando o usuário volta para a aba (Correção de Sincronização)
window.onfocus = updateCartCount;