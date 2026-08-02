<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Allows React frontend to connect

// Simulating a database response for CRUD operations (Read)
$response_data = [
    "status" => "success",
    "module" => "Week 5: Connected Components",
    "tasks_completed" => [
        ["id" => 1, "task" => "Convert PHP views to JSON API", "status" => "Completed"],
        ["id" => 2, "task" => "Setup CRUD API Endpoints", "status" => "Simulated"],
        ["id" => 3, "task" => "Connect Client-side to Backend", "status" => "Active"]
    ]
];

// Output the data in JSON format
echo json_encode($response_data);
exit();
?>
