<?php
// $action=$_REQUEST['action'];
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
if (($name=="")||($email=="")||($message==""))
    {
    echo "All fields are required, please fill <a href=\"\">the form</a> again.";
    }
else{
    $from="From: $name<$email>\r\nReturn-path: $email";
    $subject="Message sent using your contact form";
    mail("rosa.swaby@nyu.edu", $subject, $message, $from);
    header('Location: index.html');
    }
?>
