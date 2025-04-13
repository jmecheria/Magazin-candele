<?php
// backend.php

$dataFile = 'orders.json';

function readOrders($dataFile) {
    if (!file_exists($dataFile)) {
        file_put_contents($dataFile, json_encode([]));
    }
    $data = file_get_contents($dataFile);
    return json_decode($data, true);
}

function writeOrders($dataFile, $orders) {
    file_put_contents($dataFile, json_encode($orders, JSON_PRETTY_PRINT));
}

header('Content-Type: application/json');

$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($action === 'getOrders') {
    $orders = readOrders($dataFile);
    echo json_encode($orders);
    exit;
} elseif ($action === 'placeOrder' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $order = json_decode($input, true);
    if (!$order) {
        http_response_code(400);
        echo json_encode(["error" => "Date de comandă invalide."]);
        exit;
    }
    $orders = readOrders($dataFile);
    $orders[] = $order;
    writeOrders($dataFile, $orders);
    echo json_encode(["success" => true, "order" => $order]);
    exit;
} else {
    echo json_encode(["error" => "Acțiune necunoscută."]);
    exit;
}
?>
