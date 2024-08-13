<?php
$to = "lansonz@yandex.ru";
$tema = "Новый заказ!"; 
$message = "Заказ от: ".$_POST['name']."<br>"."<br>";
$message .= "E-mail: ".$_POST['email']."<br>";
$message .= "Номер телефона: ".$_POST['phone']."<br>"."<br>";
$message .= "Детали заказа: "."<br>".$_POST['details']."<br>";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
?>