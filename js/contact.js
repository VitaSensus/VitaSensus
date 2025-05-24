document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const currentLang = localStorage.getItem('language') || 'ru';

    // Сообщения об ошибках на разных языках
    const messages = {
        ru: {
            success: 'Спасибо! Ваше сообщение отправлено.',
            error: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.',
            required: 'Пожалуйста, заполните все обязательные поля',
            invalidEmail: 'Пожалуйста, введите корректный email'
        },
        en: {
            success: 'Thank you! Your message has been sent.',
            error: 'An error occurred while sending the message. Please try again later.',
            required: 'Please fill in all required fields',
            invalidEmail: 'Please enter a valid email address'
        },
        es: {
            success: '¡Gracias! Tu mensaje ha sido enviado.',
            error: 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
            required: 'Por favor, completa todos los campos obligatorios',
            invalidEmail: 'Por favor, introduce una dirección de correo electrónico válida'
        }
    };

    // Функция для отображения уведомлений
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;

        // Добавляем стили для уведомления
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 4px;
            color: white;
            font-size: 16px;
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
            background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        `;

        document.body.appendChild(notification);

        // Удаляем уведомление через 5 секунд
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.5s ease-in';
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    // Добавляем стили для анимаций
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

    // Обработчик отправки формы
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Получаем значения полей
        const formData = {
            name: contactForm.querySelector('#name').value.trim(),
            email: contactForm.querySelector('#email').value.trim(),
            message: contactForm.querySelector('#message').value.trim()
        };

        // Валидация
        if (!formData.name || !formData.email || !formData.message) {
            showNotification(messages[currentLang].required, 'error');
            return;
        }

        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification(messages[currentLang].invalidEmail, 'error');
            return;
        }

        // Блокируем кнопку отправки
        submitButton.disabled = true;
        submitButton.textContent = currentLang === 'ru' ? 'Отправка...' : 
                                 currentLang === 'en' ? 'Sending...' : 
                                 'Enviando...';

        try {
            const response = await fetch('php/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                showNotification(messages[currentLang].success);
                contactForm.reset();
            } else {
                showNotification(result.message || messages[currentLang].error, 'error');
            }
        } catch (error) {
            showNotification(messages[currentLang].error, 'error');
        } finally {
            // Разблокируем кнопку отправки
            submitButton.disabled = false;
            submitButton.textContent = currentLang === 'ru' ? 'Отправить' : 
                                     currentLang === 'en' ? 'Send' : 
                                     'Enviar';
        }
    });
}); 