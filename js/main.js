// Данные продуктов
const products = {
    ru: [
        {
            id: 1,
            name: 'Вода из источника BQ-2',
            description: 'Кристально чистый источник гармонии и здоровья, добываемый из скважины глубиной 82 метра в Рогатец-Собонки, Чехия. С антиоксидантными свойствами (ОВП -206 мВ, pH 8.2), укрепляет иммунитет и омолаживает кожу, волосы и ногти.',
            image: 'images/products/water.jpg',
            details: {
                'Минерализация': '333 мг/л',
                'Тип': 'HCO3-Na-Ca',
                'Источник': 'Рогатец-Собонки, Чехия',
                'Глубина': '82 метра'
            }
        },
        {
            id: 2,
            name: 'Натуральный гранатовый сок',
            description: 'Эликсир жизненной силы из спелых гранатов. Богат антиоксидантами и витаминами, поддерживает здоровье сердца и повышает энергию.',
            image: 'images/products/juice.jpg',
            details: {
                'Объем': '1 литр',
                'Состав': '100% гранатовый сок',
                'Хранение': 'Хранить в прохладном месте'
            }
        },
        {
            id: 3,
            name: 'Мед',
            description: 'Сладкий дар природы с цветущих лугов. Богат антиоксидантами, укрепляет иммунитет и успокаивает организм.',
            image: 'images/products/honey.jpg',
            details: {
                'Вес': '500 г',
                'Происхождение': 'Чешские луга',
                'Тип': 'Цветочный мед'
            }
        },
        {
            id: 4,
            name: 'Оливковое масло',
            description: 'Жидкое золото Средиземноморья, изготовленное из собранных вручную оливок. Поддерживает здоровье сердца и способствует долголетию.',
            image: 'images/products/oil.jpg',
            details: {
                'Объем': '500 мл',
                'Тип': 'Extra Virgin',
                'Происхождение': 'Испания'
            }
        }
    ],
    en: [
        {
            id: 1,
            name: 'Water from Source BQ-2',
            description: 'A crystal-clear source of harmony and health, extracted from an 82-meter deep well in Rogatec-Sobonki, Czech Republic. With antioxidant properties (ORP -206 mV, pH 8.2), it strengthens immunity and rejuvenates skin, hair, and nails.',
            image: 'images/products/water.jpg',
            details: {
                'Mineralization': '333 mg/l',
                'Type': 'HCO3-Na-Ca',
                'Source': 'Rogatec-Sobonki, Czech Republic',
                'Depth': '82 meters'
            }
        },
        {
            id: 2,
            name: 'Natural Pomegranate Juice',
            description: 'An elixir of vital energy from ripe pomegranates. Rich in antioxidants and vitamins, supports heart health and boosts energy.',
            image: 'images/products/juice.jpg',
            details: {
                'Volume': '1 liter',
                'Ingredients': '100% pomegranate juice',
                'Storage': 'Store in a cool place'
            }
        },
        {
            id: 3,
            name: 'Honey',
            description: 'Nature\'s sweet gift from flowering meadows. Rich in antioxidants, strengthens immunity and soothes the body.',
            image: 'images/products/honey.jpg',
            details: {
                'Weight': '500 g',
                'Origin': 'Czech meadows',
                'Type': 'Flower honey'
            }
        },
        {
            id: 4,
            name: 'Olive Oil',
            description: 'Liquid gold of the Mediterranean, made from hand-picked olives. Supports heart health and promotes longevity.',
            image: 'images/products/oil.jpg',
            details: {
                'Volume': '500 ml',
                'Type': 'Extra Virgin',
                'Origin': 'Spain'
            }
        }
    ],
    es: [
        {
            id: 1,
            name: 'Agua de la Fuente BQ-2',
            description: 'Una fuente cristalina de armonía y salud, extraída de un pozo de 82 metros de profundidad en Rogatec-Sobonki, República Checa. Con propiedades antioxidantes (ORP -206 mV, pH 8.2), fortalece la inmunidad y rejuvenece la piel, el cabello y las uñas.',
            image: 'images/products/water.jpg',
            details: {
                'Mineralización': '333 mg/l',
                'Tipo': 'HCO3-Na-Ca',
                'Fuente': 'Rogatec-Sobonki, República Checa',
                'Profundidad': '82 metros'
            }
        },
        {
            id: 2,
            name: 'Zumo Natural de Granada',
            description: 'Un elixir de energía vital de granadas maduras. Rico en antioxidantes y vitaminas, apoya la salud del corazón y aumenta la energía.',
            image: 'images/products/juice.jpg',
            details: {
                'Volumen': '1 litro',
                'Ingredientes': '100% zumo de granada',
                'Almacenamiento': 'Conservar en lugar fresco'
            }
        },
        {
            id: 3,
            name: 'Miel',
            description: 'Dulce regalo de la naturaleza de prados floridos. Rica en antioxidantes, fortalece la inmunidad y calma el cuerpo.',
            image: 'images/products/honey.jpg',
            details: {
                'Peso': '500 g',
                'Origen': 'Prados checos',
                'Tipo': 'Miel de flores'
            }
        },
        {
            id: 4,
            name: 'Aceite de Oliva',
            description: 'Oro líquido del Mediterráneo, elaborado con aceitunas recolectadas a mano. Apoya la salud del corazón y promueve la longevidad.',
            image: 'images/products/oil.jpg',
            details: {
                'Volumen': '500 ml',
                'Tipo': 'Extra Virgen',
                'Origen': 'España'
            }
        }
    ]
};

// Переводы
const translations = {
    ru: {
        philosophy: 'Философия',
        products: 'Продукты',
        contact: 'Контакты',
        discover: 'Открыть для себя VitaSensus',
        send: 'Отправить',
        name: 'Ваше имя',
        email: 'Email',
        message: 'Ваше сообщение',
        learnMore: 'Узнать больше'
    },
    en: {
        philosophy: 'Philosophy',
        products: 'Products',
        contact: 'Contact',
        discover: 'Discover VitaSensus',
        send: 'Send',
        name: 'Your name',
        email: 'Email',
        message: 'Your message',
        learnMore: 'Learn more'
    },
    es: {
        philosophy: 'Filosofía',
        products: 'Productos',
        contact: 'Contacto',
        discover: 'Descubrir VitaSensus',
        send: 'Enviar',
        name: 'Tu nombre',
        email: 'Email',
        message: 'Tu mensaje',
        learnMore: 'Saber más'
    }
};

// Текущий язык
let currentLang = localStorage.getItem('language') || 'ru';

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Устанавливаем начальный язык
    changeLanguage(currentLang);
    
    initializeLanguageSwitcher();
    initializeContactForm();
    initializeScrollAnimation();
    initModal();
});

// Инициализация продуктов
function initializeProducts() {
    const productsGrid = document.querySelector('.products__grid');
    if (!productsGrid) return;

    products[currentLang].forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Создание карточки продукта
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Создаем HTML для карточки
    card.innerHTML = `
        <div class="product-card__image">
            <img src="${product.image}" alt="${product.name}" class="product-card__img">
            <div class="product-card__badge">${translations[currentLang]['product-' + product.id + '-badge']}</div>
        </div>
        <div class="product-card__content">
            <h3 class="product-card__title">${product.name}</h3>
            <p class="product-card__subtitle">${translations[currentLang]['product-' + product.id + '-subtitle']}</p>
            <div class="product-card__description">
                <p>${product.description}</p>
            </div>
            <div class="product-card__features">
                ${Object.entries(product.details).map(([key, value]) => `
                    <li><i class="fas fa-check"></i> <span>${key}: ${value}</span></li>
                `).join('')}
            </div>
            <button class="btn btn--primary product-card__btn" data-product-id="${product.id}">
                ${translations[currentLang].learnMore}
            </button>
        </div>
    `;

    // Добавляем обработчик клика по кнопке
    const btn = card.querySelector('.product-card__btn');
    btn.addEventListener('click', () => showProductModal(product));

    return card;
}

// Показ модального окна с деталями продукта
function showProductModal(product) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal__content">
            <button class="modal__close">&times;</button>
            <div class="modal__body">
                <img src="${product.image}" alt="${product.name}" class="modal__image">
                <div class="modal__info">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <div class="modal__details">
                        ${Object.entries(product.details).map(([key, value]) => `
                            <div class="modal__detail">
                                <strong>${key}:</strong> ${value}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Закрытие модального окна
    const closeBtn = modal.querySelector('.modal__close');
    closeBtn.addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    });
}

// Инициализация переключателя языков
function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.language-switcher__dropdown a');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });
}

// Смена языка
function changeLanguage(lang) {
    if (currentLang === lang) return;
    
    // Сохраняем новый язык
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Обновление текстов
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Обновление плейсхолдеров
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Обновление атрибутов alt
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[lang][key]) {
            element.alt = translations[lang][key];
        }
    });

    // Обновление кнопки языка
    const langBtn = document.querySelector('.language-switcher__btn');
    if (langBtn) {
        langBtn.textContent = lang.toUpperCase();
    }

    // Обновление мета-тегов
    document.documentElement.lang = lang;
}

// Инициализация формы контактов
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Здесь будет отправка данных на сервер
        console.log('Form data:', data);

        // Показываем сообщение об успехе
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
}

// Инициализация анимации при скролле
function initializeScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
}

// Добавление стилей для модального окна
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal__content {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 800px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    }

    .modal__close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--color-text);
    }

    .modal__body {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
    }

    .modal__image {
        width: 100%;
        height: auto;
        border-radius: 4px;
    }

    .modal__info {
        padding: 1rem 0;
    }

    .modal__details {
        margin-top: 1rem;
    }

    .modal__detail {
        margin-bottom: 0.5rem;
    }

    .product-card {
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .product-card:hover {
        transform: translateY(-5px);
    }

    .product-card__image {
        height: 200px;
        overflow: hidden;
    }

    .product-card__image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .product-card__content {
        padding: 1.5rem;
    }

    .product-card__title {
        margin-bottom: 1rem;
        color: var(--color-primary);
    }

    .product-card__subtitle {
        margin-bottom: 1rem;
        color: var(--color-text-light);
    }

    .product-card__description {
        margin-bottom: 1.5rem;
        color: var(--color-text-light);
    }

    .product-card__features {
        margin-bottom: 1.5rem;
    }

    .product-card__features li {
        margin-bottom: 0.5rem;
    }

    .product-card__features li i {
        margin-right: 0.5rem;
    }

    .product-card__features li span {
        color: var(--color-text-light);
    }

    .product-card__btn {
        width: 100%;
    }

    @media (max-width: 768px) {
        .modal__body {
            grid-template-columns: 1fr;
        }
    }
`;

document.head.appendChild(style);

// Модальное окно
function initModal() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal__close');

    // Открытие модального окна
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Закрытие модального окна
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Закрытие по кнопке
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    // Закрытие по клику вне модального окна
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal);
                }
            });
        }
    });
} 