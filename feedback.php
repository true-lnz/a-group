<?php
$to = "lansonz@yandex.ru"; // емайл получателя данных из формы
$tema = "Новый заказ!"; // тема полученного емайла
$message = "Заказ от: ".$_POST['name']."<br>"."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['phone']."<br>"."<br>"; //полученное из формы name=phone
$message .= "Детали заказа: "."<br>".$_POST['details']."<br>"; //полученное из формы name=message
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>