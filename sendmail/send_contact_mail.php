<?php


require 'PHPMailerAutoload.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;

//Set an alternative reply-to address
$mail->addReplyTo('ronrease@protonmail.com', 'Ron Rease');
//Set who the message is to be sent to
$mail->addAddress('ankushitguy@gmail.com');
//Set the subject line
$mail->isHTML(true);

$mail->Subject = 'Test2';

$mail->Body = '<h1>This is a plain-text message body</h1>';
$mail->AltBody = 'This is a plain-text message body';


//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
?>


<?php
//// the message
//$msg = "First line of text\nSecond line of text";
//
//// use wordwrap() if lines are longer than 70 characters
//$msg = wordwrap($msg,70);
//// send email
//if (mail("ronrease@protonmail.com", "My subject", $msg)) {
//    echo "Success";
//}else{
//    echo "Fail";
//}
//?>
<!---->
<!---->
<!---->






