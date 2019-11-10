<?php

require_once '../vendor/autoload.php';
$loader = new \Twig\Loader\FilesystemLoader(
     '../public/html' );
$twig = new \Twig\Environment($loader);

$myName = 'Igor';
$cities = [ 'Lviv','Kuiv','Rivn'];




echo $twig->render('app.html',[
    'title' => '1st twig page',
    'username' => $myName,
    'cities' => $cities 
]);

?>