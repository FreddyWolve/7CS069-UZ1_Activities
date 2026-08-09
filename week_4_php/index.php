<?php
// Activity 1: Simulating a basic backend controller/routing concept
$page_title = "Week 4: Web Framework Basics";
$framework_concepts = ["Routing", "Middleware", "CSRF Protection", "Controllers", "Views"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container mt-5">
        <div class="card shadow border-0 p-4">
            <h1 class="text-primary mb-3">CodeIgniter & Laravel Tutorial Notes</h1>
            <p class="lead">This file demonstrates the basic structure of passing data from a PHP backend controller into a View layout.</p>
            
            <h3 class="mt-4">Core Framework Concepts Covered:</h3>
            <ul class="list-group">
                <?php foreach ($framework_concepts as $concept): ?>
                    <li class="list-group-item"><?php echo $concept; ?></li>
                <?php endphp; ?>
            </ul>
        </div>
    </div>
</body>
</html>