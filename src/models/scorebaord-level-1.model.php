<?php    
    $score = $_GET['score'] ?? 'error has accured';

    $username = 'root';
    $password = '';
    $database = new PDO('mysql:host=localhost;dbname=the-jump-and-run-extreme', $username, $password);

    $manipulated = substr("$score", 44, 9);

    $fehlerListeLength = 0;
    $fehlerListe = [];
    $fehler;
    $url = "rangliste-level-1.view.php";
    $needle = ".";
    $haystack = $score;
    $checking_point = strpos($haystack, $needle);
    $additional_url_1 = "37";
    $additional_url_2 = "s";
    $checking_addition_url_1 = strpos($haystack, $additional_url_1);
    $checking_addition_url_2 = strpos($haystack, $additional_url_2);
    
    
    if(isset($_POST['eintragen'])){
        $username = $_POST['username']?? "";

 

        if($username === ""){
            $fehlerListe[] = " Bitte Username eingeben.";
        }
        else if ($username > 25){
            $fehlerListe[] = "Username ist nicht zulässig.";
        }else if($manipulated < 10000){
            $fehlerListe[]= "Jegliche Art von Manipulierung des Scores ist Ihnen untersagt";
        }
        else if($checking_point == false){
            $fehlerListe[] = "Das Manipulieren des Scores ist Ihnen untersagt.";
        }
        else if($checking_addition_url_1 == false){
            $fehlerListe[] = "Jegliche Art von Manipulierung des Scores ist Ihnen untersagt.";
        }
        else if($checking_addition_url_2 == false){
            $fehlerListe[] = "Jegliche Art von Manipulierung des Scores ist Ihnen untersagt.";
        }


        $fehlerListeLength = sizeof($fehlerListe);

        if($fehlerListeLength === 0){
            
            $statement = $database->prepare("INSERT INTO `scoreboard` (username, score) VALUES(:username, :score) ");
            $statement->execute([':username' => $username, ':score' => $manipulated]);

            header('Location:' .$url);
        }

    }
    






?>
