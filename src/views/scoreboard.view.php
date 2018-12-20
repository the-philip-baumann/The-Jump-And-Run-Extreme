<head>
    <link rel="stylesheet" href="jumpandrunstyles/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css">
</head>


<body>
    <?php
        include "../models/Jump-And-Run.model.php";
        echo "Score = $score" ;
    ?>
    <div class="wrapper">
        <form method="POST">
            <fieldset id="main-box">
                <div class="add-score">
                    <input class="form-control" type="text" id="username" name="username" placeholder="Username">
                </div>

                <div class="add-score">
                    <input class="form-control" type="text" id="score" name="score" value="<?php echo $score; ?>" disabled >
                </div>

                <div class="form-actions">
                    <input class="btn btn-primary" type="submit" value="Score eintragen" name="eintragen" id="eintragen">
                    <a href="jump-and-run.view.php" class="btn">Erneut versuchen</a>
                    <a href="rangliste.view.php" class="btn">Rangliste</a>
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
</body>