<head>
    <link rel="stylesheet" src="jumpandrunstyles/jumpandrunstyles.css">
</head>


<body>
    <?php
        include "../models/Jump-And-Run.model.php";
        echo $score;
    ?>
    <div class="wrapper">
        <div class="add-score">
            <label class="form-label" for="username">Username</label>
            <input class="form-control" type="text" id="username" name="username" placeholder="Max Mustermann">
        </div>

        <div class="add-score">
            <label class="form-label" for="score">Score</label>
            <input class="form-control" type="text" id="score" name="score">
        </div>
    </div>
</body>