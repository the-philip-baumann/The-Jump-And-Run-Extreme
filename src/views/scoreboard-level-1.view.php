<?php
    include "../models/scorebaord-level-1.model.php";
?>

<head>
<link rel="stylesheet" href="../styles/css/styles_2.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css">
</head>


<body>

    <div class="wrapper">
        <form method="POST">
            <fieldset id="main-box">
                <div class="add-score">
                    <input class="form-control" type="text" id="username" name="username" placeholder="Username">
                </div>

                <div class="add-score">
                    <input class="form-control" type="text" id="score" name="score" value="<?php if($manipulated > 10000){

                    echo $manipulated;}else{echo "";} ?> " disabled >
                </div>

                <div class="form-actions">
                    <input class="btn btn-primary" type="submit" value="Score eintragen" name="eintragen" id="eintragen">
                    <a class="size" href="jump-and-run-level-1.view.php" class="btn">Erneut versuchen</a>
                    <a class="size" href="rangliste-level-1.view.php" class="btn">Rangliste</a>
                </div>  
            </fieldset>
        </form>
        <?php if(sizeof($fehlerListe) > 0): ?>
                <?php 
                echo "<div class=error-box>";
                ?>
                <?php foreach($fehlerListe as $fehler ): ?>
                <?php echo "<li class=list> $fehler </li>";
                ?>
                <?php endforeach; ?>
                <?php
                echo "</div>";
                ?>
                <?php endif; ?>
    </div>

        <div class="next-level">
            <a href="Jump-And-Run-level-2.view.php">Bereit dein können auf die Probe zu stellen ?</a>
        </div>

</body>