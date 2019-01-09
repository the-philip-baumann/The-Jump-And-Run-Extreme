<?php
    $username = "root";
    $password = "";
    $database = new PDO('mysql:host=localhost;dbname=the-jump-and-run-extreme', $username, $password);


    $statement = $database->prepare('SELECT * FROM `scoreboard-2` order by score asc');
    
    $statement->execute();
    $allPostsTable= $statement->fetchAll();

    
?>



