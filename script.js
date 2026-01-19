
        const WHATSAPP_NUMBER = "5562994613564"; 
        const PRICE_LISA = 139.90;
        const PRICE_PERSO = 169.90;

        const teams = [
            // BRASILEIRÃO
            { id: 'flamengo', name: 'Flamengo', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_brazilian_crest.svg' },
            { id: 'palmeiras', name: 'Palmeiras', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg' },
            { id: 'corinthians', name: 'Corinthians', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png' },
            { id: 'santos', name: 'Santos', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Santos_logo.svg' },
            { id: 'saopaulo', name: 'São Paulo', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/4/4b/S%C3%A3o_Paulo_Futebol_Clube.png' },
            { id: 'gremio', name: 'Grêmio', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/f/f1/Gr%C3%AAmio_FBPA.png' },
            { id: 'atleticomg', name: 'Atlético-MG', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Atletico_mineiro_galo.png' },
            { id: 'fluminense', name: 'Fluminense', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/a/a3/Fluminense_FC_escudo.png' },
            { id: 'botafogo', name: 'Botafogo', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Botafogo_de_Futebol_e_Regatas_logo.svg' },
            { id: 'fortaleza', name: 'Fortaleza', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Fortaleza_Esporte_Clube_logo.svg' },
            { id: 'internacional', name: 'Internacional', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Escudo_do_Sport_Club_Internacional.svg' },
            { id: 'athletico', name: 'Athletico-PR', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/c/c7/Club_Athletico_Paranaense_2018.png' },
            { id: 'cruzeiro', name: 'Cruzeiro', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Cruzeiro_Esporte_Clube_%28logo%29.svg' },
            { id: 'bahia', name: 'Bahia', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/e/e1/Esporte_Clube_Bahia_logo.png' },
            { id: 'vasco', name: 'Vasco', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascoDaGama.png' },
            { id: 'bragantino', name: 'Bragantino', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/9/9e/Red_Bull_Bragantino.png' },
            { id: 'cuiaba', name: 'Cuiabá', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/5/52/Cuiab%C3%A1EC2020.png' },
            { id: 'goias', name: 'Goiás', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Goi%C3%A1s_Esporte_Clube_logo.svg' },
            { id: 'coritiba', name: 'Coritiba', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Coritiba_FBC_%282022%29.png' },
            { id: 'vitoria', name: 'Vitória', category: 'br', logo: 'https://upload.wikimedia.org/wikipedia/pt/e/e0/ECVit%C3%B3ria.png' },

            // INTERNACIONAIS (25 CLUBES)
            { id: 'real', name: 'Real Madrid', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
            { id: 'barca', name: 'Barcelona', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
            { id: 'city', name: 'Man. City', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg' },
            { id: 'bayern', name: 'Bayern Mun.', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg' },
            { id: 'psg', name: 'PSG', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg' },
            { id: 'liverpool', name: 'Liverpool', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
            { id: 'inter', name: 'Inter Milão', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg' },
            { id: 'leverkusen', name: 'Bayer Leverkusen', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg' },
            { id: 'dortmund', name: 'Borussia Dortmund', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg' },
            { id: 'arsenal', name: 'Arsenal', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' },
            { id: 'chelsea', name: 'Chelsea', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg' },
            { id: 'atleticomadrid', name: 'Atlético de Madrid', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg' },
            { id: 'benfica', name: 'Benfica', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/S.L._Benfica_logo.svg' },
            { id: 'united', name: 'Man. United', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
            { id: 'juventus', name: 'Juventus', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg' },
            { id: 'roma', name: 'AS Roma', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg' },
            { id: 'atalanta', name: 'Atalanta', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/6/66/Atalanta_BC_logo.svg' },
            { id: 'milan', name: 'AC Milan', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg' },
            { id: 'leipzig', name: 'RB Leipzig', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg' },
            { id: 'porto', name: 'Porto', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4c/FC_Porto.svg' },
            { id: 'frankfurt', name: 'Eintracht Frankfurt', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Eintracht_Frankfurt_Logo.svg' },
            { id: 'tottenham', name: 'Tottenham', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg' },
            { id: 'brugge', name: 'Club Brugge', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Club_Brugge_KV_logo.svg' },
            { id: 'psv', name: 'PSV Eindhoven', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/0/05/PSV_Eindhoven.svg' },
            { id: 'bilbao', name: 'Athletic Bilbao', category: 'intl', logo: 'https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg' },

            // SELEÇÕES (25 SELEÇÕES)
            { id: 'brasil', name: 'Brasil', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/pt/b/bb/Crest_of_the_Confedera%C3%A7%C3%A3o_Brasileira_de_Futebol.svg' },
            { id: 'argentina', name: 'Argentina', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Argentina_national_football_team_logo.svg' },
            { id: 'espanha', name: 'Espanha', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/3/31/Spain_National_Football_Team_badge.svg' },
            { id: 'franca', name: 'França', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/France_national_football_team_seal.svg/1200px-France_national_football_team_seal.svg.png' },
            { id: 'inglaterra', name: 'Inglaterra', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/England_national_football_team_crest.svg' },
            { id: 'portugal', name: 'Portugal', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Portuguese_Football_Federation.svg' },
            { id: 'holanda', name: 'Holanda', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/7/78/Netherlands_national_football_team_logo.svg' },
            { id: 'belgica', name: 'Bélgica', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Royal_Belgian_FA_logo_2019.svg' },
            { id: 'alemanha', name: 'Alemanha', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e3/Germany_national_football_team_logo.svg' },
            { id: 'croacia', name: 'Croácia', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Croatia_national_football_team_crest.svg' },
            { id: 'marrocos', name: 'Marrocos', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Morocco_national_football_team_logo.svg' },
            { id: 'italia', name: 'Itália', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Italy_national_football_team_logo.svg/1200px-Italy_national_football_team_logo.svg.png' },
            { id: 'colombia', name: 'Colômbia', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/6/61/Colombia_national_football_team_crest.svg' },
            { id: 'usa', name: 'Estados Unidos', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/8/86/United_States_Soccer_Federation_logo.svg' },
            { id: 'mexico', name: 'México', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Mexico_national_football_team_crest.svg' },
            { id: 'uruguai', name: 'Uruguai', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Uruguay_national_football_team_crest.svg/1200px-Uruguay_national_football_team_crest.svg.png' },
            { id: 'suica', name: 'Suíça', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Swiss_Football_Association_logo.svg' },
            { id: 'japao', name: 'Japão', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Japan_national_football_team_crest.svg/1200px-Japan_national_football_team_crest.svg.png' },
            { id: 'senegal', name: 'Senegal', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/2/25/Senegal_national_football_team_logo.svg' },
            { id: 'ira', name: 'Irã', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Iran_Football_Federation_logo.svg' },
            { id: 'dinamarca', name: 'Dinamarca', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Danish_Football_Association_logo.svg' },
            { id: 'coreiadosul', name: 'Coreia do Sul', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Korea_Football_Association_logo.svg' },
            { id: 'equador', name: 'Equador', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Ecuador_national_football_team_crest.svg' },
            { id: 'austria', name: 'Áustria', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Austria_national_football_team_crest.svg' },
            { id: 'turquia', name: 'Turquia', category: 'nations', logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/Turkey_national_football_team_logo.svg' }
        ];

        let cart = [];

        function init() {
            const grids = { 
                br: document.getElementById('grid-br'), 
                intl: document.getElementById('grid-intl'), 
                nations: document.getElementById('grid-nations') 
            };
            
            teams.forEach(t => {
                if(grids[t.category]) {
                    grids[t.category].innerHTML += `
                        <div class="team-badge" onclick="showTeam('${t.id}')">
                            <img src="${t.logo}" alt="${t.name}">
                            <p>${t.name}</p>
                        </div>
                    `;
                }
            });
            lucide.createIcons();
        }

        function showHome() {
            document.getElementById('view-home').style.display = 'block';
            document.getElementById('view-team').style.display = 'none';
            window.scrollTo(0,0);
        }

        function showTeam(teamId) {
            const team = teams.find(t => t.id === teamId);
            document.getElementById('current-team-name').innerText = team.name;
            document.getElementById('current-team-logo').src = team.logo;
            
            const display = document.getElementById('shirts-display');
            display.innerHTML = '';
            
            const models = ['Titular 24/25', 'Reserva 24/25', 'Third Edition'];
            
          models.forEach((name, idx) => {
    // 1. Criamos um caminho padrão (caso não tenha foto na pasta)
    let imgPath = `https://via.placeholder.com/500/101823/FFFFFF?text=${team.name.toUpperCase()}`;

    // 2. Verificamos o time e qual camisa é (idx 0 é titular, idx 1 é reserva)
    if (team.id === 'flamengo') {
        if (idx === 0) imgPath = 'img/Flamengo 1.jpeg';
        if (idx === 1) imgPath = 'img/Flamengo2.jpg';
    } 
    else if (team.id === 'palmeiras' && idx === 0) {
        imgPath = 'img/Palmeiras 1.jpg';
    } 
    else if (team.id === 'santos' && idx === 0) {
        imgPath = 'img/Santo1.jpg';
    }

    // 3. Agora o HTML usa a variável imgPath que definimos acima
    display.innerHTML += `
        <div class="shirt-card" id="shirt-${idx}">
            <div class="shirt-img-box">
                <img src="${imgPath}" alt="${name}">
            </div>
            <h3 style="margin-bottom:5px;">${name}</h3>
            <p class="shirt-price" id="price-tag-${idx}">R$ ${PRICE_LISA.toFixed(2)}</p>
            
            <div class="options-row">
                <select class="size-val">
                    <option>P</option>
                    <option selected>M</option>
                    <option>G</option>
                    <option>GG</option>
                </select>
                <select class="kind-val" onchange="updateShirtPrice(this, ${idx})">
                    <option value="lisa">Modelo Liso</option>
                    <option value="perso">Personalizada</option>
                </select>
            </div>

            <div class="personalization" id="perso-box-${idx}">
                <input type="text" placeholder="Nome nas costas" class="name-input">
                <input type="number" placeholder="Número" class="num-input">
            </div>

            <div class="btn-group">
                <button class="btn btn-cart" onclick="addToCart('${team.name}', '${name}', ${idx})">
                    <i data-lucide="shopping-cart"></i> Adicionar
                </button>
                <button class="btn btn-wa" onclick="orderNow('${team.name}', '${name}', ${idx})">
                    <i data-lucide="zap"></i> Comprar Agora
                </button>
            </div>
        </div>
    `;
});


            document.getElementById('view-home').style.display = 'none';
            document.getElementById('view-team').style.display = 'block';
            lucide.createIcons();
            window.scrollTo(0,0);
        }

        function updateShirtPrice(el, idx) {
            const isPerso = el.value === 'perso';
            document.getElementById(`perso-box-${idx}`).style.display = isPerso ? 'block' : 'none';
            document.getElementById(`price-tag-${idx}`).innerText = `R$ ${(isPerso ? PRICE_PERSO : PRICE_LISA).toFixed(2)}`;
        }

        function toggleCart() {
            document.getElementById('cart-modal').classList.toggle('active');
            const overlay = document.getElementById('overlay');
            overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        }

        function addToCart(team, shirt, idx) {
            const card = document.getElementById(`shirt-${idx}`);
            const kind = card.querySelector('.kind-val').value;
            const price = kind === 'perso' ? PRICE_PERSO : PRICE_LISA;
            
            cart.push({
                team, 
                shirt, 
                size: card.querySelector('.size-val').value,
                kind: kind,
                nome: card.querySelector('.name-input').value || '-',
                num: card.querySelector('.num-input').value || '-',
                price: price
            });
            
            updateCartUI();
            toggleCart();
        }

        function updateCartUI() {
            const list = document.getElementById('cart-list');
            const count = document.getElementById('cart-count');
            count.innerText = cart.length;
            list.innerHTML = '';
            let total = 0;

            cart.forEach((item, i) => {
                total += item.price;
                list.innerHTML += `
                    <div class="cart-item">
                        <div>
                            <strong style="color:var(--primary)">${item.team}</strong><br>
                            <small>${item.shirt} (${item.size})</small><br>
                            ${item.kind === 'perso' ? `<small><i>Perso: ${item.nome} (${item.num})</i></small>` : ''}
                        </div>
                        <div style="text-align:right">
                            <b>R$ ${item.price.toFixed(2)}</b><br>
                            <span onclick="removeItem(${i})" style="color:#ff4444; font-size:11px; cursor:pointer; font-weight:700;">REMOVER</span>
                        </div>
                    </div>
                `;
            });
            document.getElementById('cart-total-value').innerText = `R$ ${total.toFixed(2)}`;
        }

        function removeItem(i) {
            cart.splice(i, 1);
            updateCartUI();
        }

        function orderNow(team, shirt, idx) {
            const card = document.getElementById(`shirt-${idx}`);
            const kind = card.querySelector('.kind-val').value;
            let msg = `🔥 *NOVO PEDIDO - SPORT STORE*\n\n⚽ Time: *${team}*\n👕 Modelo: ${shirt}\n📏 Tamanho: ${card.querySelector('.size-val').value}\n🏷️ Tipo: ${kind.toUpperCase()}`;
            if(kind === 'perso') {
                msg += `\n✍️ Nome: ${card.querySelector('.name-input').value}\n🔢 Número: ${card.querySelector('.num-input').value}`;
            }
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
        }

        function finishOrderCart() {
            if(!cart.length) return;
            let total = 0;
            let msg = `🛒 *MEU CARRINHO - SPORT STORE*\n\n`;
            cart.forEach((item, i) => {
                msg += `${i+1}. *${item.team}* (${item.size}) - R$ ${item.price.toFixed(2)}\n`;
                total += item.price;
            });
            msg += `\n💰 *VALOR TOTAL: R$ ${total.toFixed(2)}*`;
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
        }

        window.onload = init;