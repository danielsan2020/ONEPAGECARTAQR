<?php


require("class.phpmailer.php");
require("class.smtp.php");

try {

    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $csubject = $_REQUEST['subject'];
    $cmessage = $_REQUEST['message'];
// Valores enviados desde el formulario
if ( !isset($from) || !isset($name)  || !isset($csubject)  || !isset($cmessage) ) {
    die ("Es necesario completar todos los datos del formulario");
}

$destinatario = "info@menuonlineqr.com";


// Datos de la cuenta de correo utilizada para enviar v�a SMTP
$smtpHost = "smtp.gmail.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "massivacom19@gmail.com";  // Mi cuenta de correo
$smtpClave = "Comunicacion19";  // Mi contrase�a


$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;


$mail->From = $from; // Email desde donde env�o el correo.
$mail->FromName = $name;
$mail->AddAddress($destinatario); // Esta es la direcci�n a donde enviamos los datos del formulario

$mail->Subject = "Formulario desde el Sitio Web Menú Online QR"; // Este es el titulo del email.
$mensajeHtml = nl2br($cmessage);
$link = 'https://menuonlineqr.com/';

$body = "<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><title>Menú Online QR</title></head><body>";
$body .= "<table style='width: 100%;'>";
$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
$body .= "<a href='{$link}'><br><br>";
$body .= "</td></tr></thead><tbody><tr>";
$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
$body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
$body .= "</tr>";
$body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$csubject}</td></tr>";
$body .= "<tr><td></td></tr>";
$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
$body .= "</tbody></table>";
$body .= "</body></html>";
$mail->Body = $body; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$mail->send(); 
echo 'Message has been sent';


}
catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

header('location:./contacto.html');

?>