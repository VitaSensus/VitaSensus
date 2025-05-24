<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Получаем данные из POST-запроса
$data = json_decode(file_get_contents('php://input'), true);

// Проверяем наличие необходимых полей
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Пожалуйста, заполните все обязательные поля'
    ]);
    exit;
}

// Валидация email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Пожалуйста, введите корректный email'
    ]);
    exit;
}

// Настройки для отправки письма
$to = 'info@vitasensus.com'; // Замените на реальный email
$subject = 'Новое сообщение с сайта VitaSensus';
$headers = [
    'From' => 'VitaSensus Website <noreply@vitasensus.com>',
    'Reply-To' => $data['email'],
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/html; charset=UTF-8'
];

// Формируем тело письма
$message = "
<html>
<head>
    <title>Новое сообщение с сайта VitaSensus</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #C5A572; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Новое сообщение с сайта VitaSensus</h2>
        </div>
        <div class='content'>
            <p><strong>Имя:</strong> " . htmlspecialchars($data['name']) . "</p>
            <p><strong>Email:</strong> " . htmlspecialchars($data['email']) . "</p>
            <p><strong>Сообщение:</strong></p>
            <p>" . nl2br(htmlspecialchars($data['message'])) . "</p>
        </div>
        <div class='footer'>
            <p>Это сообщение было отправлено с формы обратной связи на сайте VitaSensus</p>
        </div>
    </div>
</body>
</html>
";

// Логируем попытку отправки
error_log("Attempting to send email to: " . $to);

// Отправляем письмо
$mailSent = mail($to, $subject, $message, implode("\r\n", array_map(
    function ($v, $k) { return "$k: $v"; },
    $headers,
    array_keys($headers)
)));

if ($mailSent) {
    error_log("Email sent successfully to: " . $to);
    // Сохраняем сообщение в базу данных (опционально)
    // saveToDatabase($data);

    echo json_encode([
        'success' => true,
        'message' => 'Спасибо! Ваше сообщение отправлено.'
    ]);
} else {
    error_log("Failed to send email to: " . $to . ". Error: " . error_get_last()['message']);
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.'
    ]);
}

// Функция для сохранения в базу данных (опционально)
function saveToDatabase($data) {
    // Здесь код для сохранения в базу данных
    // Например, используя MySQL:
    /*
    $db = new PDO('mysql:host=localhost;dbname=vitasensus', 'username', 'password');
    $stmt = $db->prepare('INSERT INTO messages (name, email, message, created_at) VALUES (?, ?, ?, NOW())');
    $stmt->execute([$data['name'], $data['email'], $data['message']]);
    */
}
?> 