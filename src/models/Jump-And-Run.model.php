<?php    
    $score = $_GET['score'] ?? 'error has accured';

    $username = 'root';
    $password = '';
    $database = new PDO('mysql:host=localhost;dbname=the-jump-and-run-extreme', $username, $password);


    $fehlerListeLength = 0;
    $fehlerListe = [];
    $fehler;
    $url = "Jump-And-Run.view.php";

    
    
    if(isset($_POST['eintragen'])){
        $username = $_POST['username']?? "";



        if($username === ""){
            $fehlerListe[] = " Bitte Username eingeben.";
        }else if ($username > 25){
            $fehlerListe[] = "Username ist nicht zulässig.";
        }

        if($score < 1){
            $fehlerliste[] = "Die Manipulation des Scores ist nicht erlaubt.";
        }

        $fehlerListeLength = sizeof($fehlerListe);

        if($fehlerListeLength === 0){
            
            $statement = $database->prepare("INSERT INTO `scoreboard` (username, score) VALUES(:username, :score) ");
            $statement->execute([':username' => $username, ':score' => $score]);

            //header('Location:' .$url);
        }

    }
    






?>
