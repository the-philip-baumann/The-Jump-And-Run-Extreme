<head>
    <link rel="stylesheet" href="jumpandrunstyles/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.min.css">
</head>
<?php
    include "../models/rangliste.models.php";
?>
<body>
    <div class="wrapper">
        <fieldset>
            <?php
                foreach($allPostsTable as $row):    
            ?>
                    
            <h5>
            <?= htmlspecialchars($row['username'], ENT_QUOTES, "UTF-8"); ?>
            <?= htmlspecialchars($row['score'], ENT_QUOTES, "UTF-8"); ?>
            </h5>
            
            <?php
                endforeach;
            ?>

        </fieldset>
    </div>
</body>