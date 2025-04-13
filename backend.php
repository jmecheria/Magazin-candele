<?php
// backend.php

// Numele fișierului pentru stocarea comenzilor
$dataFile = 'orders.json';

// Funcție pentru a citi comenzile din fișierul JSON (creează fișierul dacă nu există)
function readOrders($dataFile) {
    if (!file_exists($dataFile)) {
        file_put_contents($dataFile, json_encode([]));
    }
    return json_decode(file_get_contents($dataFile), true);
}

// Funcție pentru a scrie comenzile în fișierul JSON
function writeOrders($dataFile, $orders) {
    file_put_contents($dataFile, json_encode($orders, JSON_PRETTY_PRINT));
}

// Setăm antetul ca JSON
header('Content-Type: application/json');

// Determinăm acțiunea cererii
$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($action === 'getOrders') {
    $orders = readOrders($dataFile);
    echo json_encode($orders);
    exit;
} elseif ($action === 'placeOrder' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    // Preluăm datele din cererea POST
    $input = file_get_contents('php://input');
    $order = json_decode($input, true);
    if (!$order) {
        http_response_code(400);
        echo json_encode(["error" => "Date de comandă invalide."]);
        exit;
    }
    // Adăugăm comanda în lista existentă
    $orders = readOrders($dataFile);
    $orders[] = $order;
    writeOrders($dataFile, $orders);
    
    // Trimitem notificare e-mail către admin
    $to = "admin@example.com";  // Actualizează cu adresa de e-mail reală
    $subject = "Nouă comandă plasată - Magazin Bisericesc";
    
    $message = "A fost plasată o nouă comandă:\n\n";
    $message .= "ID Comandă: " . $order['id'] . "\n";
    $message .= "Client: " . $order['customer']['name'] . "\n";
    $message .= "Contact: " . $order['customer']['contact'] . "\n\n";
    $message .= "Detalii produse:\n";
    foreach ($order['items'] as $item) {
        $message .= "Produs ID: " . $item['id'] . " - Cantitate: " . $item['quantity'] . "\n";
    }
    $message .= "\nTotal comandă: " . $order['total'] . " Lei\n";
    
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
    $headers .= "From: Magazin Bisericesc <no-reply@yourdomain.com>" . "\r\n";
    
    // Trimiterea e-mailului (poate fi nevoie de configurarea corespunzătoare a serverului)
    mail($to, $subject, $message, $headers);
    
    echo json_encode(["success" => true, "order" => $order]);
    exit;
} else {
    echo json_encode(["error" => "Acțiune necunoscută."]);
    exit;
}
?>
