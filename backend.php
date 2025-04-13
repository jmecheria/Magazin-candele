<?php
// backend.php

$dataFile = 'orders.json';

// Funcție pentru citirea comenzilor
function readOrders($dataFile) {
    if (!file_exists($dataFile)) {
        file_put_contents($dataFile, json_encode([]));
    }
    return json_decode(file_get_contents($dataFile), true);
}

// Funcție pentru scrierea comenzilor în fișier
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
    
    // Notificare e-mail către admin (folosind adresa furnizată)
    $to = "irimia.teodor.17@gmail.com";
    $subject = "Nouă comandă plasată - Magazin Bisericesc";
    $message = "A fost plasată o nouă comandă:\n\n";
    $message .= "ID Comandă: " . $order['id'] . "\n";
    $message .= "Client: " . $order['customer']['name'] . "\n";
    $message .= "Contact: " . $order['customer']['contact'] . "\n\n";
    $message .= "Detalii Produse:\n";
    foreach ($order['items'] as $item) {
        $message .= "Produs ID: " . $item['id'] . " - Cantitate: " . $item['quantity'] . "\n";
    }
    $message .= "\nTotal Comandă: " . $order['total'] . " Lei\n";
    
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
    $headers .= "From: Magazin Bisericesc <no-reply@yourdomain.com>" . "\r\n";
    
    // Trimiterea e-mailului (asigură-te că serverul tău este configurat corespunzător pentru trimiterea e-mailurilor)
    mail($to, $subject, $message, $headers);
    
    echo json_encode(["success" => true, "order" => $order]);
    exit;
} else {
    echo json_encode(["error" => "Acțiune necunoscută."]);
    exit;
}
?>
