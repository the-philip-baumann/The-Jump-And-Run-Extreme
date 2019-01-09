<?php 

    $page = $_GET['page'] ?? 'home';

    // pages-Whitelist
    $pages = [
        'home',
        'Jump-And-Run'
    ];
?>
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>The Jump And Run Extrem</title>
    <link rel="stylesheet" href="../../res/images/image.png">
    <script type="module" src="styles/libaries/main.js"></script>
</head>
<body>
    <?php 
        if (!in_array($page, $pages)) {
            include 'views/404.view.php';
        }
        else { 
            include 'views/' . $page . '.view.php';
        }
    ?>
</body>
</html>