<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://dataworker.ru');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

// Sanitize input
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? htmlspecialchars(strip_tags(trim($data['phone']))) : '';
$company = isset($data['company']) ? htmlspecialchars(strip_tags(trim($data['company']))) : '';
$subject_field = isset($data['subject']) ? htmlspecialchars(strip_tags(trim($data['subject']))) : '';
$message = htmlspecialchars(strip_tags(trim($data['message'])));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Email settings
$to = 'info@dataworker.ru';
$subject = 'Новая заявка с сайта DataWorker';

// Build email body
$body = "Новая заявка с сайта dataworker.ru\n";
$body .= "================================\n\n";
$body .= "Имя: $name\n";
$body .= "Email: $email\n";
if ($phone) $body .= "Телефон: $phone\n";
if ($company) $body .= "Компания: $company\n";
if ($subject_field) $body .= "Тема: $subject_field\n";
$body .= "\nСообщение:\n$message\n";
$body .= "\n================================\n";
$body .= "Отправлено: " . date('d.m.Y H:i:s') . "\n";

// Email headers
$headers = [
    'From: noreply@dataworker.ru',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: DataWorker Website'
];

// Send email
$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>
