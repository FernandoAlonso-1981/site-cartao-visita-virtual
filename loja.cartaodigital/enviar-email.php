<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera e sanitiza o número de WhatsApp
    $numero = filter_var($_POST['numero'], FILTER_SANITIZE_STRING);

    // Validação básica
    if (empty($numero) || !preg_match('/^\+?\d+ \(\d{2}\) \d{5}-\d{4}$/', $numero)) {
        die('Número inválido.');
    }

    // Configurações do e-mail
    $to = 'contato@vovosolucoes.com.br';
    $subject = 'Número de WhatsApp Recebido';
    $message = 'Número de WhatsApp recebido: ' . htmlspecialchars($numero, ENT_QUOTES, 'UTF-8');

    // Cabeçalhos adicionais para maior segurança
    $headers = "From: no-reply@seudominio.com\r\n" .
               "Reply-To: no-reply@seudominio.com\r\n" .
               "X-Mailer: PHP/" . phpversion() . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envio do e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo 'E-mail enviado com sucesso!';
    } else {
        echo 'Falha ao enviar e-mail.';
    }
} else {
    // Se não for uma requisição POST, nega acesso
    http_response_code(405); // Method Not Allowed
    echo 'Método não permitido.';
}
?>
