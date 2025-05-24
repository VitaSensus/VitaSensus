document.addEventListener('DOMContentLoaded', () => {
    // Получаем текущий язык из localStorage или устанавливаем русский по умолчанию
    let currentLang = localStorage.getItem('language') || 'ru';
    
    // Функция для обновления текста на странице
    function updateContent(lang) {
        // Обновляем все элементы с атрибутом data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Обновляем плейсхолдеры в формах
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Обновляем атрибуты alt для изображений
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            const key = element.getAttribute('data-i18n-alt');
            if (translations[lang][key]) {
                element.alt = translations[lang][key];
            }
        });

        // Обновляем текст кнопки переключения языка
        const langBtn = document.querySelector('.language-switcher__btn');
        if (langBtn) {
            langBtn.textContent = lang.toUpperCase();
        }

        // Сохраняем выбранный язык
        localStorage.setItem('language', lang);
        currentLang = lang;

        // Обновляем мета-теги для SEO
        document.documentElement.lang = lang;
        
        // Обновляем заголовок и описание в зависимости от языка
        const metaDescriptions = {
            ru: 'VitaSensus - премиальный бренд натуральных продуктов для гармоничного образа жизни. Вода, соки, мед и другие натуральные продукты.',
            en: 'VitaSensus - premium brand of natural products for a harmonious lifestyle. Water, juices, honey, and other natural products.',
            es: 'VitaSensus - marca premium de productos naturales para un estilo de vida armonioso. Agua, zumos, miel y otros productos naturales.'
        };

        const titles = {
            ru: 'VitaSensus - Гармония через природу',
            en: 'VitaSensus - Harmony through Nature',
            es: 'VitaSensus - Armonía a través de la Naturaleza'
        };

        document.title = titles[lang];
        document.querySelector('meta[name="description"]').setAttribute('content', metaDescriptions[lang]);
    }

    // Обработчик клика по кнопке переключения языка
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', (e) => {
            const target = e.target;
            if (target.tagName === 'A' && target.hasAttribute('data-lang')) {
                e.preventDefault();
                const newLang = target.getAttribute('data-lang');
                if (newLang !== currentLang) {
                    updateContent(newLang);
                }
            }
        });
    }

    // Инициализация языка при загрузке страницы
    updateContent(currentLang);
}); 