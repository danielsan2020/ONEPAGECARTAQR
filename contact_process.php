<?php

	require("class.phpmailer.php");
	require("class.smtp.php");

	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPAuth = true;
	$mail->Port = 587; 
	$mail->IsHTML(true); 
	$mail->CharSet = "utf-8";

	$to = "ricardo.rdzalt@gmail.com";	//Correo a donde llegaran los mails

    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $csubject = $_REQUEST['subject'];
    $cmessage = $_REQUEST['message'];

	$smtpHost = "smtp.gmail.com";	//SMTP del servicio de correos
	$smtpUsuario = "rikardo150@gmail.com";	//Correo desde donde será enviado
	$smtpClave = "";	//Password del correo desde donde será enviado

	$mail->Host = $smtpHost; 
	$mail->Username = $smtpUsuario; 
	$mail->Password = $smtpClave;
	$mail->From = $from;
	$mail->FromName = $name;
	$mail->AddAddress($to); // Esta es la dirección a donde enviamos los datos del formulario

	/*
    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	*/
	$subject = "Tienes un mensaje de Menú OnlineQR";
	$mail->Subject = $subject;
	
    $link = 'https://www.menuonlineqr.com/';

	$body = "<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><title>Menú OnlineQR</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	$body .= "<a href='{$link}'></a><br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
	$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
	$body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
	$body .= "</tr>";
	$body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$csubject}</td></tr>";
	$body .= "<tr><td></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

	$mail->Body = $body;
	
	$mail->send();
	
	header('location:./contacto.html');

?>