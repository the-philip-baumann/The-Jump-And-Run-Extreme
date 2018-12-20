<?php
    $username = "root";
    $password = "";
    $database = new PDO('mysql:host=localhost;dbname=the-jump-and-run-extreme', $username, $password);


    $statement = $database->prepare('SELECT * FROM `scoreboard` order by score desc');
    $statement->execute();
    $allPostsTable= $statement->fetchAll();

    
?>



