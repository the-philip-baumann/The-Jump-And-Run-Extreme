<head>
    <script type="module" src="../styles/libaries/main.js"></script>
    <link rel="stylesheet" href="jumpandrunstyles/jumpandrunstyles.css">
</header>

<?php 
    include "../models/Jump-And-Run.model.php";
?>

<div id="background">
    <canvas id="myCanvas" width="1900px" height="840" style="border:1px solid #000000;"></canvas>
</div>

<form method="GET" action="scoreboard.view.php">
    <input id="hiddenScore" name="hiddenScore" type="textbox" hidden>
</form>

