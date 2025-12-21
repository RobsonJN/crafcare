console.log('Script carregado - Sistema de Pedidos de Perfumes');

const perfumesData = {
    compartilhavel: [
        { nome: "212 VIP BLACK ELIXIR", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 },
        // ... (dados existentes - mantidos iguais)
        { nome: "TOBACCO VANILLE", preco200ml: 233, preco100ml: 171, preco30ml: 95, preco50ml: 107 }
    ],
    
    feminino: [
        { nome: "212 NYC", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 },
        // ... (dados existentes - mantidos iguais)
        { nome: "YES I AM", preco200ml: 225, preco100ml: 163, preco30ml: 95, preco50ml: 107 }
    ],
    
    masculino: [
        { nome: "212 HEROES", preco200ml: 219, preco100ml: 157, preco30ml: 95, preco50ml: 107 },
        // ... (dados existentes - mantidos iguais)
        { nome: "Y LE PARFUM", preco200ml: 215, preco100ml: 153, preco30ml: 95, preco50ml: 107 }
    ],
    
    body: [
        { nome: "BARE VANILLA", preco: 100 },
        { nome: "COCONUT", preco: 100 },
        { nome: "LOVE SPELL", preco: 100 },
        { nome: "MANGO TEMPTATION", preco: 100 },
        { nome: "VANILLA LACE", preco: 100 },
        { nome: "WHITE CITRUS B B WORKS", preco: 100 }
    ]
};

// Estado da aplicação
let cart = [];
let deliveryInfo = null;
let currentTab = 'compartilhavel';
let isLoading = false;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, iniciando aplicação...');
    showLoading();
    setTimeout(() => {
        initApp();
        hideLoading();
    }, 500);
});

function initApp() {
    console.log('Inicializando aplicação...');
    renderAllPerfumes();
    setupEventListeners();
    updateCartCount();
    updateQuickSummary();
    loadCart();
    loadDeliveryInfo();
    console.log('Aplicação inicializada com sucesso!');
}

function renderAllPerfumes() {
    console.log('Renderizando perfumes...');
    renderPerfumeGrid('compartilhavel', perfumesData.compartilhavel);
    renderPerfumeGrid('feminino', perfumesData.feminino);
    renderPerfumeGrid('masculino', perfumesData.masculino);
    renderBodySplashGrid('body', perfumesData.body);
    applyFilters();
}

function renderPerfumeGrid(genero, perfumes) {
    const grid = document.getElementById(`${genero}-grid`);
    if (!grid) {
        console.error(`Grid não encontrado: ${genero}-grid`);
        return;
    }
    
    console.log(`Renderizando ${perfumes.length} perfumes ${genero}`);
    grid.innerHTML = '';
    
    perfumes.forEach((perfume, index) => {
        const card = createPerfumeCard(perfume, genero, index);
        grid.appendChild(card);
    });
}

function createPerfumeCard(perfume, genero, index) {
    const card = document.createElement('div');
    card.className = `perfume-card ${genero}`;
    card.dataset.id = `${genero}-${index}`;
    card.dataset.name = perfume.nome.toLowerCase();
    
    // Calcular preço mínimo e máximo para ordenação
    const prices = [];
    if (perfume.preco200ml !== undefined) prices.push(perfume.preco200ml);
    if (perfume.preco100ml !== undefined) prices.push(perfume.preco100ml);
    if (perfume.preco30ml !== undefined) prices.push(perfume.preco30ml);
    if (perfume.preco50ml !== undefined) prices.push(perfume.preco50ml);
    
    if (prices.length > 0) {
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        card.dataset.minPrice = minPrice;
        card.dataset.maxPrice = maxPrice;
    } else {
        card.dataset.minPrice = 0;
        card.dataset.maxPrice = 0;
    }
    
    const tem200ml = perfume.preco200ml !== undefined;
    const tem100ml = perfume.preco100ml !== undefined;
    const tem30ml = perfume.preco30ml !== undefined;
    const tem50ml = perfume.preco50ml !== undefined;
    
    // Determinar a fragrância original inspirada
    let originalName = perfume.nome;
    const brandMarkers = ['- LV', '- YSL', '- XERJOF', '- XERJOF', 'BY KILIAN', 'BYREDO', 'REPLICA', '.PARFUMS', '- O.PARISI', '- CHANEL', '- CREED', 'LATTAFA', 'NISHANE', '- DIOR'];
    
    brandMarkers.forEach(marker => {
        if (originalName.includes(marker)) {
            originalName = originalName.split(marker)[0].trim();
        }
    });
    
    let sizeOptionsHTML = '<div class="size-options">';
    
    if (tem200ml) {
        sizeOptionsHTML += `
            <div class="size-option" data-size="200ml" data-price="${perfume.preco200ml}">
                <label>
                    <input type="radio" name="${genero}-${index}" value="200ml">
                    200ml <span class="concentration-badge">30% Extract Parfum</span>
                </label>
                <span class="price">R$ ${perfume.preco200ml},00</span>
            </div>
        `;
    }
    
    if (tem100ml) {
        sizeOptionsHTML += `
            <div class="size-option" data-size="100ml" data-price="${perfume.preco100ml}">
                <label>
                    <input type="radio" name="${genero}-${index}" value="100ml">
                    100ml <span class="concentration-badge">33% Extract Parfum</span>
                </label>
                <span class="price">R$ ${perfume.preco100ml},00</span>
            </div>
        `;
    }
    
    if (tem30ml) {
        sizeOptionsHTML += `
            <div class="size-option" data-size="30ml" data-price="${perfume.preco30ml}">
                <label>
                    <input type="radio" name="${genero}-${index}" value="30ml">
                    30ml <span class="concentration-badge">33% Extract Parfum</span>
                </label>
                <span class="price">R$ ${perfume.preco30ml},00</span>
            </div>
        `;
    }
    
    if (tem50ml) {
        sizeOptionsHTML += `
            <div class="size-option" data-size="50ml" data-price="${perfume.preco50ml}">
                <label>
                    <input type="radio" name="${genero}-${index}" value="50ml">
                    50ml <span class="concentration-badge">20% Colônia</span>
                </label>
                <span class="price">R$ ${perfume.preco50ml},00</span>
            </div>
        `;
    }
    
    sizeOptionsHTML += '</div>';
    
    card.innerHTML = `
        <h3>${perfume.nome}</h3>
        <div class="inspired-info">
            <strong>Inspirado em:</strong> ${originalName}
        </div>
        ${sizeOptionsHTML}
        <button class="add-btn" disabled>
            <i class="fas fa-cart-plus"></i> Adicionar
        </button>
    `;
    
    // Eventos do card
    setupCardEvents(card, perfume, genero, originalName);
    
    return card;
}

function setupCardEvents(card, perfume, genero, originalName) {
    const sizeOptions = card.querySelectorAll('.size-option');
    const addBtn = card.querySelector('.add-btn');
    
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            addBtn.disabled = false;
            addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar (R$ ${this.dataset.price},00)`;
        });
    });
    
    addBtn.addEventListener('click', function() {
        const selectedSizeOption = card.querySelector('.size-option.selected');
        if (selectedSizeOption) {
            const size = selectedSizeOption.dataset.size;
            const price = parseInt(selectedSizeOption.dataset.price);
            
            addToCart(perfume.nome, genero, size, price, originalName);
            openCartSidebar();
            
            // Feedback visual
            const originalText = addBtn.innerHTML;
            addBtn.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
            addBtn.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                addBtn.innerHTML = originalText;
                addBtn.style.backgroundColor = '';
                
                // Reset selection
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                card.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
                addBtn.disabled = true;
                addBtn.innerHTML = `<i class="fas fa-cart-plus"></i> Adicionar`;
            }, 1500);
        }
    });
}

function renderBodySplashGrid(genero, items) {
    const grid = document.getElementById(`${genero}-grid`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    items.forEach((item, index) => {
        let originalName = item.nome;
        
        const card = document.createElement('div');
        card.className = `perfume-card ${genero}`;
        card.dataset.id = `${genero}-${index}`;
        card.dataset.name = item.nome.toLowerCase();
        card.dataset.minPrice = item.preco;
        card.dataset.maxPrice = item.preco;
        
        card.innerHTML = `
            <h3>${item.nome}</h3>
            <div class="inspired-info">
                <strong>Inspirado em:</strong> ${originalName}
            </div>
            <div class="size-options">
                <div class="size-option selected" data-size="200ml" data-price="${item.preco}">
                    <label>
                        <input type="radio" name="${genero}-${index}" value="200ml" checked>
                        200ml <span class="concentration-badge">20% Body Splash</span>
                    </label>
                    <span class="price">R$ ${item.preco},00</span>
                </div>
            </div>
            <button class="add-btn">
                <i class="fas fa-cart-plus"></i> Adicionar (R$ ${item.preco},00)
            </button>
        `;
        
        grid.appendChild(card);
        
        const addBtn = card.querySelector('.add-btn');
        
        addBtn.addEventListener('click', function() {
            addToCart(item.nome, 'body', '200ml', item.preco, originalName);
            openCartSidebar();
        });
    });
}

function setupEventListeners() {
    console.log('Configurando event listeners...');
    
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            switchTab(tab);
        });
    });
    
    // Busca global
    document.getElementById('global-search').addEventListener('input', function() {
        applyFilters();
    });
    
    // Buscas específicas
    document.getElementById('search-compartilhavel').addEventListener('input', function() {
        applyFilters();
    });
    
    document.getElementById('search-feminino').addEventListener('input', function() {
        applyFilters();
    });
    
    document.getElementById('search-masculino').addEventListener('input', function() {
        applyFilters();
    });
    
    document.getElementById('search-body').addEventListener('input', function() {
        applyFilters();
    });
    
    // Filtros
    document.getElementById('sort-by').addEventListener('change', function() {
        applyFilters();
    });
    
    // Carrinho
    document.getElementById('cart-toggle').addEventListener('click', openCartSidebar);
    document.getElementById('close-cart').addEventListener('click', closeCartSidebar);
    document.getElementById('cart-overlay').addEventListener('click', closeCartSidebar);
    document.getElementById('quick-view-cart').addEventListener('click', openCartSidebar);
    
    // Exportar/Importar Carrinho
    document.getElementById('export-cart').addEventListener('click', exportCart);
    document.getElementById('import-cart').addEventListener('click', importCart);
    document.getElementById('export-cart-sidebar').addEventListener('click', exportCart);
    document.getElementById('quick-export-cart').addEventListener('click', exportCart);
    document.getElementById('export-bottom').addEventListener('click', exportCart);
    document.getElementById('import-bottom').addEventListener('click', importCart);
    
    // Limpar carrinho
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    
    // Enviar pedido
    document.getElementById('cart-send-whatsapp').addEventListener('click', sendToWhatsApp);
    
    // Modal de entrega
    document.getElementById('delivery-info').addEventListener('click', openDeliveryModal);
    document.getElementById('go-home').addEventListener('click', goToHome);
    document.getElementById('close-delivery-modal').addEventListener('click', closeDeliveryModal);
    document.getElementById('delivery-modal-overlay').addEventListener('click', closeDeliveryModal);
    document.getElementById('save-delivery-info').addEventListener('click', saveDeliveryInfo);
    
    // Opções de entrega
    document.querySelectorAll('.delivery-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.delivery-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            const deliveryType = this.dataset.type;
            if (deliveryType === 'delivery') {
                document.getElementById('address-form').style.display = 'block';
                document.getElementById('pickup-info').style.display = 'none';
            } else {
                document.getElementById('address-form').style.display = 'none';
                document.getElementById('pickup-info').style.display = 'block';
            }
        });
    });
    
    // Validação de formulários em tempo real
    setupFormValidation();
    
    console.log('Event listeners configurados!');
}

function setupFormValidation() {
    const phoneInputs = ['client-phone', 'pickup-phone'];
    
    phoneInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                validatePhoneInput(this);
            });
        }
    });
}

function validatePhoneInput(input) {
    const phoneDigits = input.value.replace(/\D/g, '');
    const isValid = validatePhone(phoneDigits);
    
    // Mostrar/ocultar mensagem de erro
    const errorId = input.id + '-error';
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
        if (phoneDigits && !isValid) {
            errorElement.textContent = 'Telefone inválido. Deve ter 11 dígitos e começar com 55 (DDD Brasil).';
            input.classList.add('invalid');
        } else {
            errorElement.textContent = '';
            input.classList.remove('invalid');
        }
    }
    
    return isValid;
}

// Função de validação de telefone aprimorada (Melhoria 1)
function validatePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 11 && digits.startsWith('55'); // DDD brasileiro
}

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) btn.classList.add('active');
    });
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tab}-tab`) content.classList.add('active');
    });
    
    currentTab = tab;
    applyFilters();
}

function applyFilters() {
    const sortBy = document.getElementById('sort-by').value;
    const globalSearch = document.getElementById('global-search').value.toLowerCase().trim();
    
    // Aplicar em cada categoria
    ['compartilhavel', 'feminino', 'masculino', 'body'].forEach(genero => {
        const grid = document.getElementById(`${genero}-grid`);
        if (!grid) return;
        
        const cards = Array.from(grid.querySelectorAll('.perfume-card'));
        const tabSearch = document.getElementById(`search-${genero}`)?.value.toLowerCase().trim() || '';
        
        let visibleCards = [];
        
        // Aplicar filtros a cada card
        cards.forEach(card => {
            const perfumeName = card.querySelector('h3').textContent.toLowerCase();
            
            // Verificar busca global
            const matchesGlobalSearch = globalSearch === '' || perfumeName.includes(globalSearch);
            
            // Verificar busca da aba
            const matchesTabSearch = tabSearch === '' || perfumeName.includes(tabSearch);
            
            // Mostrar card se passar por todos os filtros
            const shouldShow = matchesGlobalSearch && matchesTabSearch;
            card.style.display = shouldShow ? 'block' : 'none';
            
            if (shouldShow) {
                visibleCards.push(card);
            }
        });
        
        // Ordenar cards visíveis
        visibleCards.sort((a, b) => {
            const nameA = a.querySelector('h3').textContent.toLowerCase();
            const nameB = b.querySelector('h3').textContent.toLowerCase();
            
            let priceA, priceB;
            
            if (sortBy === 'price-desc') {
                priceA = parseFloat(a.dataset.maxPrice) || 0;
                priceB = parseFloat(b.dataset.maxPrice) || 0;
                return priceB - priceA;
            } else if (sortBy === 'price-asc') {
                priceA = parseFloat(a.dataset.minPrice) || 0;
                priceB = parseFloat(b.dataset.minPrice) || 0;
                return priceA - priceB;
            } else if (sortBy === 'name-desc') {
                return nameB.localeCompare(nameA);
            } else {
                return nameA.localeCompare(nameB);
            }
        });
        
        // Reordenar no DOM de forma mais eficiente
        const fragment = document.createDocumentFragment();
        
        // Adicionar cards visíveis na ordem correta
        visibleCards.forEach(card => {
            fragment.appendChild(card);
        });
        
        // Adicionar os cards ocultos no final
        cards.forEach(card => {
            if (card.style.display === 'none') {
                fragment.appendChild(card);
            }
        });
        
        // Substituir todo o conteúdo do grid
        grid.innerHTML = '';
        grid.appendChild(fragment);
    });
}

// Funções do Carrinho
function addToCart(name, genero, size, price, originalName) {
    console.log(`Adicionando ao carrinho: ${name} - ${size}`);
    
    const existingIndex = cart.findIndex(item => 
        item.name === name && item.size === size
    );
    
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            name,
            genero,
            size,
            price,
            originalName: originalName || name,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    updateCartCount();
    updateCartDisplay();
    updateQuickSummary();
    saveCart();
    
    showNotification('Item adicionado ao carrinho!', 'success');
}

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const itemName = cart[index].name;
        cart.splice(index, 1);
        updateCartCount();
        updateCartDisplay();
        updateQuickSummary();
        saveCart();
        showNotification(`${itemName} removido do carrinho.`, 'info');
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function updateQuickSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('quick-items-count').textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
    document.getElementById('quick-total-price').textContent = `Total: R$ ${totalPrice},00`;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total-price');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        cartTotal.textContent = 'R$ 0,00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        // Adicionar informação de concentração baseada no tamanho
        let concentration = '';
        if (item.size === '200ml') {
            concentration = ' (30% Extract Parfum)';
        } else if (item.size === '100ml' || item.size === '30ml') {
            concentration = ' (33% Extract Parfum)';
        } else if (item.size === '50ml') {
            concentration = ' (20% Colônia)';
        }
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <small>${item.size}${concentration} | ${getGeneroName(item.genero)}</small>
                    <div class="price">R$ ${item.price},00</div>
                    <div class="inspired-cart">Inspirado em: ${item.originalName}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-index="${index}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                        <button class="quantity-btn plus" data-index="${index}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-item-btn" data-index="${index}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    cartTotal.textContent = `R$ ${total},00`;
    
    // Adicionar eventos aos controles de quantidade
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            cart[index].quantity += 1;
            updateCartCount();
            updateCartDisplay();
            updateQuickSummary();
            saveCart();
        });
    });
    
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                updateCartCount();
                updateCartDisplay();
                updateQuickSummary();
                saveCart();
            }
        });
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const index = parseInt(this.dataset.index);
            let newQuantity = parseInt(this.value);
            
            if (isNaN(newQuantity) || newQuantity < 1) {
                newQuantity = 1;
                this.value = 1;
            }
            
            cart[index].quantity = newQuantity;
            updateCartCount();
            updateCartDisplay();
            updateQuickSummary();
            saveCart();
        });
    });
    
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            removeFromCart(index);
        });
    });
}

function getGeneroName(genero) {
    switch(genero) {
        case 'compartilhavel': return 'Compartilhável';
        case 'feminino': return 'Feminino';
        case 'masculino': return 'Masculino';
        case 'body': return 'Body Splash';
        default: return genero;
    }
}

function openCartSidebar() {
    document.getElementById('cart-overlay').style.display = 'block';
    document.getElementById('cart-sidebar').classList.add('open');
}

function closeCartSidebar() {
    document.getElementById('cart-overlay').style.display = 'none';
    document.getElementById('cart-sidebar').classList.remove('open');
}

function clearCart() {
    if (cart.length === 0) {
        showNotification('O carrinho já está vazio.', 'info');
        return;
    }
    
    if (confirm('Tem certeza que deseja limpar todos os itens do carrinho?')) {
        const itemCount = cart.length;
        cart = [];
        updateCartCount();
        updateCartDisplay();
        updateQuickSummary();
        saveCart();
        showNotification(`${itemCount} itens removidos do carrinho.`, 'info');
    }
}

// Função de backup/exportação do carrinho (Melhoria 3)
function exportCart() {
    if (cart.length === 0) {
        showNotification('O carrinho está vazio. Não há nada para exportar.', 'warning');
        return;
    }
    
    const exportData = {
        cart: cart,
        deliveryInfo: deliveryInfo,
        exportDate: new Date().toISOString(),
        appVersion: '1.0.0'
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `carrinho-perfumes-${new Date().toISOString().slice(0,10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('Carrinho exportado com sucesso!', 'success');
}

function importCart() {
    document.getElementById('import-file').click();
}

// Setup do input de importação
document.getElementById('import-file').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedData = JSON.parse(event.target.result);
            
            // Validar estrutura do arquivo
            if (!importedData.cart || !Array.isArray(importedData.cart)) {
                throw new Error('Arquivo inválido: estrutura do carrinho não encontrada.');
            }
            
            if (confirm(`Importar ${importedData.cart.length} itens do arquivo? Esta ação substituirá seu carrinho atual.`)) {
                cart = importedData.cart;
                if (importedData.deliveryInfo) {
                    deliveryInfo = importedData.deliveryInfo;
                    localStorage.setItem('delivery_info', JSON.stringify(deliveryInfo));
                }
                
                updateCartCount();
                updateCartDisplay();
                updateQuickSummary();
                saveCart();
                
                showNotification('Carrinho importado com sucesso!', 'success');
                closeCartSidebar();
                openCartSidebar();
            }
        } catch (error) {
            console.error('Erro ao importar:', error);
            showNotification('Erro ao importar arquivo. Verifique se o arquivo é válido.', 'error');
        }
        
        // Resetar input
        e.target.value = '';
    };
    
    reader.readAsText(file);
});

function saveCart() {
    try {
        localStorage.setItem('perfume_cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Erro ao salvar carrinho:', error);
        showNotification('Erro ao salvar carrinho. O navegador pode estar em modo privado.', 'error');
    }
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem('perfume_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            console.log(`Carrinho carregado: ${cart.length} itens`);
            updateCartCount();
            updateQuickSummary();
        }
    } catch (error) {
        console.error('Erro ao carregar carrinho:', error);
        cart = [];
    }
}

// Funções de Entrega
function openDeliveryModal() {
    document.getElementById('delivery-modal-overlay').style.display = 'block';
    document.getElementById('delivery-modal').style.display = 'block';
    
    // Carregar informações salvas
    if (deliveryInfo) {
        if (deliveryInfo.type === 'delivery') {
            document.querySelector('.delivery-option[data-type="delivery"]').click();
            document.getElementById('client-name').value = deliveryInfo.name || '';
            document.getElementById('client-address').value = deliveryInfo.address || '';
            document.getElementById('client-complement').value = deliveryInfo.complement || '';
            document.getElementById('client-phone').value = deliveryInfo.phone || '';
        } else {
            document.querySelector('.delivery-option[data-type="pickup"]').click();
            document.getElementById('pickup-name').value = deliveryInfo.name || '';
            document.getElementById('pickup-phone').value = deliveryInfo.phone || '';
        }
    }
}

function closeDeliveryModal() {
    document.getElementById('delivery-modal-overlay').style.display = 'none';
    document.getElementById('delivery-modal').style.display = 'none';
}

function saveDeliveryInfo() {
    const deliveryType = document.querySelector('.delivery-option.selected').dataset.type;
    
    let info = { type: deliveryType };
    let isValid = true;
    
    // Limpar mensagens de erro
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    if (deliveryType === 'delivery') {
        const name = document.getElementById('client-name').value.trim();
        const address = document.getElementById('client-address').value.trim();
        const complement = document.getElementById('client-complement').value.trim();
        const phone = document.getElementById('client-phone').value.replace(/\D/g, '');
        
        // Validações
        if (!name) {
            document.getElementById('name-error').textContent = 'Nome é obrigatório.';
            isValid = false;
        }
        
        if (!address) {
            document.getElementById('address-error').textContent = 'Endereço é obrigatório.';
            isValid = false;
        }
        
        if (!phone) {
            document.getElementById('phone-error').textContent = 'Telefone é obrigatório.';
            isValid = false;
        } else if (!validatePhone(phone)) {
            document.getElementById('phone-error').textContent = 'Telefone inválido. Deve ter 11 dígitos e começar com 55 (DDD Brasil).';
            isValid = false;
        }
        
        if (isValid) {
            info = { ...info, name, address, complement, phone };
        }
    } else {
        const name = document.getElementById('pickup-name').value.trim();
        const phone = document.getElementById('pickup-phone').value.replace(/\D/g, '');
        
        // Validações
        if (!name) {
            document.getElementById('pickup-name-error').textContent = 'Nome é obrigatório.';
            isValid = false;
        }
        
        if (!phone) {
            document.getElementById('pickup-phone-error').textContent = 'Telefone é obrigatório.';
            isValid = false;
        } else if (!validatePhone(phone)) {
            document.getElementById('pickup-phone-error').textContent = 'Telefone inválido. Deve ter 11 dígitos e começar com 55 (DDD Brasil).';
            isValid = false;
        }
        
        if (isValid) {
            info = { ...info, name, phone };
        }
    }
    
    if (!isValid) {
        showNotification('Por favor, corrija os erros no formulário.', 'error');
        return;
    }
    
    deliveryInfo = info;
    localStorage.setItem('delivery_info', JSON.stringify(info));
    showNotification('Informações salvas com sucesso!', 'success');
    closeDeliveryModal();
}

function loadDeliveryInfo() {
    try {
        const savedInfo = localStorage.getItem('delivery_info');
        if (savedInfo) {
            deliveryInfo = JSON.parse(savedInfo);
            console.log('Informações de entrega carregadas:', deliveryInfo);
        }
    } catch (error) {
        console.error('Erro ao carregar informações de entrega:', error);
        deliveryInfo = null;
    }
}

// Função para enviar para WhatsApp
function sendToWhatsApp() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio. Adicione perfumes antes de enviar o pedido.', 'warning');
        return;
    }
    
    // Validação reforçada do formulário de retirada
    if (!deliveryInfo) {
        openDeliveryModal();
        showNotification('Por favor, preencha as informações de entrega/retirada antes de enviar o pedido.', 'warning');
        return;
    }
    
    // Validação específica para retirada no local
    if (deliveryInfo.type === 'pickup' && (!deliveryInfo.name || !deliveryInfo.phone)) {
        openDeliveryModal();
        document.querySelector('.delivery-option[data-type="pickup"]').click();
        showNotification('Para retirada no local, é necessário informar seu nome e telefone.', 'warning');
        return;
    }
    
    // Validação específica para entrega
    if (deliveryInfo.type === 'delivery' && (!deliveryInfo.name || !deliveryInfo.address || !deliveryInfo.phone)) {
        openDeliveryModal();
        document.querySelector('.delivery-option[data-type="delivery"]').click();
        showNotification('Para entrega, é necessário informar seu nome, endereço e telefone.', 'warning');
        return;
    }
    
    // Validação do telefone
    if (!validatePhone(deliveryInfo.phone)) {
        openDeliveryModal();
        showNotification('O telefone informado é inválido. Deve ter exatamente 11 dígitos e começar com 55 (DDD Brasil).', 'error');
        if (deliveryInfo.type === 'delivery') {
            document.querySelector('.delivery-option[data-type="delivery"]').click();
            document.getElementById('client-phone').value = deliveryInfo.phone;
            document.getElementById('client-phone').focus();
        } else {
            document.querySelector('.delivery-option[data-type="pickup"]').click();
            document.getElementById('pickup-phone').value = deliveryInfo.phone;
            document.getElementById('pickup-phone').focus();
        }
        return;
    }
    
    let message = `*PEDIDO DE PERFUMES - CRAFTCARE STORE*\n\n`;
    message += `*Perfumes inspirados nas melhores fragrâncias do mercado*\n\n`;
    
    // Agrupar por gênero
    const grupos = {
        compartilhavel: cart.filter(item => item.genero === 'compartilhavel'),
        feminino: cart.filter(item => item.genero === 'feminino'),
        masculino: cart.filter(item => item.genero === 'masculino'),
        body: cart.filter(item => item.genero === 'body')
    };
    
    ['compartilhavel', 'feminino', 'masculino', 'body'].forEach(genero => {
        if (grupos[genero].length > 0) {
            message += `*${getGeneroName(genero).toUpperCase()}:*\n`;
            grupos[genero].forEach(item => {
                // Adicionar informação de concentração
                let concentration = '';
                if (item.size === '200ml') {
                    concentration = ' (30% Extract Parfum)';
                } else if (item.size === '100ml' || item.size === '30ml') {
                    concentration = ' (33% Extract Parfum)';
                } else if (item.size === '50ml') {
                    concentration = ' (20% Colônia)';
                } else if (item.genero === 'body') {
                    concentration = ' (20% Body Splash)';
                }
                
                message += `- ${item.name}${concentration}\n`;
                message += `  Tamanho: ${item.size} | Quantidade: ${item.quantity} | R$ ${item.price * item.quantity},00\n`;
            });
            message += '\n';
        }
    });
    
    // Calcular total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `*TOTAL: R$ ${total},00*\n\n`;
    
    // Informações de concentração
    message += `*INFORMAÇÕES TÉCNICAS:*\n`;
    message += `• 200ml: 30% Extract Parfum\n`;
    message += `• 100ml e 30ml: 33% Extract Parfum\n`;
    message += `• 50ml: 20% Colônia\n`;
    message += `• Body Splash: 20%\n\n`;
    
    // Adicionar informações de entrega/retirada
    if (deliveryInfo.type === 'delivery') {
        message += `*DADOS PARA ENTREGA:*\n`;
        message += `Nome: ${deliveryInfo.name}\n`;
        message += `Telefone: ${deliveryInfo.phone}\n`;
        message += `Endereço: ${deliveryInfo.address}\n`;
        if (deliveryInfo.complement) {
            message += `Complemento: ${deliveryInfo.complement}\n`;
        }
        message += `\n*Frete: A combinar*\n`;
    } else {
        message += `*RETIRADA NO LOCAL:*\n`;
        message += `Nome: ${deliveryInfo.name}\n`;
        message += `Telefone: ${deliveryInfo.phone}\n`;
        message += `\n*Endereço para retirada será informado após confirmação.*\n`;
    }
    
    message += `\n*Obrigado pelo pedido!*\n`;
    message += `\n*Pedido gerado em:* ${new Date().toLocaleString('pt-BR')}\n`;
    
    // Número do WhatsApp
    const phoneNumber = "5519998978060"; // Formato internacional
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Feedback
    showNotification('Pedido enviado para o WhatsApp!', 'success');
}

// Funções auxiliares
function goToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    switchTab('compartilhavel');
}

// Função de notificação (Melhoria 2)
function showNotification(message, type = 'success') {
    // Remover notificações anteriores
    document.querySelectorAll('.notification').forEach(notification => notification.remove());
    
    // Criar notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Funções de carregamento (Melhoria 2)
function showLoading() {
    isLoading = true;
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'flex';
    }
}

function hideLoading() {
    isLoading = false;
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

// Adicionar estilos para animações (se necessário)
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Prevenir recarregamento da página se houver dados não salvos
window.addEventListener('beforeunload', function(event) {
    if (cart.length > 0) {
        event.preventDefault();
        event.returnValue = 'Você tem itens no carrinho. Tem certeza que deseja sair?';
    }
});

// Inicializar também quando a página estiver totalmente carregada
window.addEventListener('load', function() {
    console.log('Página totalmente carregada');
});