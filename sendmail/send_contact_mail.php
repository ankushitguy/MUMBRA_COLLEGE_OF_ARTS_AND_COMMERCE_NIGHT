<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

require'PHPMailerAutoload.php';
//Create a new PHPMailer instance
    $mail = new PHPMailer;
//Set an alternative reply-to address
    $mail->addReplyTo($email, $name);
//Set who the message is to be sent to
    $mail->addAddress('mail@mumbranightcollege.in');
//Set the subject line
    $mail->isHTML(true);

    $mail->Subject = $subject;
    $mail->Body = '<p>'.$message.'</p>';
    $mail->AltBody = 'This is a plain-text message body';
try {
    $mail->send();
} catch (phpmailerException $e) {
}







