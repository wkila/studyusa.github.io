<?php

    if (isset($_POST)) {
        print("Имя: " . $_POST['name']);
        print("<br>Email: " . $_POST['email']);
        print("<br>Телефон: " . $_POST['phone']);
    }

    // session_start();

    // unset($_SESSION['name']);
    // unset($_SESSION['email']);
    // unset($_SESSION['phone']);

    // function redirect() {
    //     header('Location: index.html');
    //     exit;
    // }
    // $to = "adminStudyUsa@gmail.com";
    // $from = "managerStudyUsa@gmail.com";

    // $name = htmlspecialchars(trim($_POST["name"]));
    // $email = htmlspecialchars(trim($_POST["email"]));
    // $phone = htmlspecialchars(trim($_POST["phone"]));

    // $_SESSION["name"] = $name;
    // $_SESSION["email"] = $email;
    // $_SESSION["phone"] = $phone;

    // if (strlen($name) < 3) {
    //     redirect();
    // }elseif (strpos($email, "@") && strlen($email) < 5) {
    //     redirect();
    // }elseif (strlen($phone) < 9) {
    //     redirect();
    // }else {
    //     $subject = "=?utf-8?B?".base64_encode($subject)."?=";
    //     $headers = "From: $name\r\nReply-to:$name\r\nContent-type:text/plain; charset=urf-8\r\n";
    //     mail("admin@itproger.com", $subject, $name, $headers);
    //     $_SESSION['success_mail'] = "Вы успешно отправили письмо!";

    //     redirect();
    
    // }
