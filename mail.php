<?php

if ($_POST) {
    $mail = htmlspecialchars($_POST['mail']);
    $name = htmlspecialchars($_POST['name']);
    $to = "info@yofumo.com";
    $msg = "You have new 'I want " . $_POST['wish'] . "' message via Yofumo website. From $name <$mail>";
    $sbj = "New 'I want " . $_POST['wish'] . "' message";
    $headers = 'From: ' . $mail . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    if(mail($to, $sbj, $msg, $headers)) {
        echo 1;
    } else {
        echo 0;
    }
}