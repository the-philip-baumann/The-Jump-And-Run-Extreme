<head>
    <link rel="stylesheet" href="../styles/css/styles_2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css">
</head>
<?php
    include "../models/rangliste-level-1.model.php";
?>
<body>
    <div class="wrapper">
        <fieldset>
            <table>
                <tr>
                    <th class="user_score_title">Username</th>
                    <th class="user_score_title">Score</th>
                </tr>
            <?php
                foreach($allPostsTable as $row):

                   
           ?>
                    
            <tr>
                <td class="font-fat"><?= htmlspecialchars($row['username'], ENT_QUOTES, "UTF-8"); ?><b></th>
                <td class="font-fat"><?= htmlspecialchars($row['score'], ENT_QUOTES, "UTF-8"); ?></th>
            </tr>
            
           
            
            <?php
                endforeach;
                
            ?>
            </table>
            </fieldset>


            <form action="jump-and-run-level-1.view.php">
                <input class="btn btn-primary" type="submit" value="Zurück zum Spiel" name="eintragen" id="eintragen">
            </form>

            <div class="next-level">
                <a href="Jump-And-Run-level-2.view.php">Bereit dein können auf die Probe zu stellen ?</a>
            </div>

            

    </div>
</body>