<?php
$to = 'webmaster@simonsein.com';
$subject = 'Solicitud Pagina WEB!';
$message = 'Nombre:' . $_POST["your_name"] . "\n";
$message .= 'Email:' . $_POST["your_email"] . "\n";
$message .= 'Telefono:' . $_POST["your_phone"] . "\n";
$message .= 'Comments:' . $_POST["your_comments"] . "\n";
$headers = 'From: ' . $_POST['email'] . "\r\n" .
    'Reply-To: ' . $_POST['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail ($to, $subject, $message, $headers);
header("Location: thanks.html");
?>