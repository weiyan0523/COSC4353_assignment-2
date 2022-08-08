<?php

session_start();

if (isset($_SESSION["user_id"])) {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = "SELECT * FROM user
            WHERE id = {$_SESSION["user_id"]}";
            
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Home page</title>
    <meta charset="UTF-8">
    <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">-->
    <link rel="stylesheet" href="index.css">
</head>
<body>
    
    <h1>Home Page</h1>
    
    <?php if (isset($user)): ?>
        
        <h2><center>Hello <?= htmlspecialchars($user["name"]) ?></center></h2>
        
        <h2><a href="logout.php">Click here if you are sure you want to log out</a></h2>
        <h2><a href="http://20.55.70.6:8080/website/afterlogin/afterlogin.html">Create a profile</a></h2>
    <?php else: ?>
        
        <h2><a href="login.php"><center>Click here to Login</a> or <a href="signup.html">Click here to sign up</center></a></h2>
        
    <?php endif; ?>
    
</body>
</html>
    
    
