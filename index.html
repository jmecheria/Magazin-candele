<?php
// Blocul PHP de la început gestionează salvarea și preluarea comenzilor

// Dacă cererea POST conține un parametru "orderData", salvează comanda
if (isset($_POST['orderData'])) {
    $orderData = json_decode($_POST['orderData'], true);
    $file = 'orders.json';
    if(file_exists($file)) {
        $orders = json_decode(file_get_contents($file), true);
        if(!$orders) {
            $orders = [];
        }
    } else {
        $orders = [];
    }
    $orders[] = $orderData;
    file_put_contents($file, json_encode($orders, JSON_PRETTY_PRINT));
    echo json_encode(["status" => "success"]);
    exit;
}

// Dacă există un parametru GET "loadOrders", returnează toate comenzile
if (isset($_GET['loadOrders'])) {
    $file = 'orders.json';
    if(file_exists($file)) {
        $orders = json_decode(file_get_contents($file), true);
        if(!$orders) {
            $orders = [];
        }
    } else {
        $orders = [];
    }
    header('Content-Type: application/json');
    echo json_encode($orders);
    exit;
}
?>
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Magazinul de Candele & Tradiții</title>
  
  <!-- jsPDF pentru generarea facturii -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet">
  
  <style>
    /* Variabile CSS */
    :root {
      --primary-gradient: linear-gradient(90deg, #b71c1c, #b71c1c 40%, transparent 40%);
      --primary-color: #b71c1c;
      --secondary-color: #000;
      --highlight-color: #ff8a80;
      --button-bg: #e53935;
      --button-hover: #c62828;
      --error-color: #b71c1c;
      --light-bg: #fdf8f6;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      font-family: 'Merriweather', serif;
      line-height: 1.6;
      background: var(--light-bg);
      color: #000; /* text negru în pagină */
      padding-bottom: 60px;
      scroll-behavior: smooth;
    }
    /* Dezactivare click-dreapta (soluție client-side) */
    window.oncontextmenu = function() { return false; };

    /* HEADER – cu panglică roșie; fixat pentru a fi vizibil, dar elementele de pagină pot fi accesate */
    header {
      background: var(--primary-gradient);
      color: #fff;
      padding: 10px 20px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1100;
    }
    .header-container {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    .logo { width: 60px; }
    .header-title { font-size: 28px; margin-left: 10px; }
    nav ul {
      list-style: none;
      display: flex;
      align-items: center;
    }
    nav ul li { margin-left: 20px; }
    nav ul li a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.3s;
    }
    nav ul li a:hover { color: var(--highlight-color); }
    .cart-icon { width: 30px; vertical-align: middle; }
    .cart-count {
      background: #e74c3c;
      color: #fff;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 12px;
      margin-left: 2px;
    }
    .hamburger { display: none; font-size: 28px; cursor: pointer; background: none; border: none; color: #fff; }
    
    /* TIMER – fixat sub header, vizibil permanent */
    #countdown-timer {
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      background: #333;
      color: #fff;
      padding: 10px;
      text-align: center;
      font-size: 22px;
      font-weight: bold;
      z-index: 1090;
      border-bottom: 2px solid var(--primary-color);
    }
    
    /* Buton fix pentru coș (pe mobil) */
    .fixed-cart {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--button-bg);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
      z-index: 1100;
      cursor: pointer;
      display: none;
    }
    .fixed-cart:hover { background: var(--button-hover); }
    
    /* PAGINILE SITE-ULUI */
    #pages { padding-top: 140px; }
    #pages section { max-width: 1200px; margin: 40px auto; padding: 0 20px; display: none; opacity: 0; transition: opacity 0.5s ease-in-out; }
    #pages section.active { display: block; opacity: 1; }
    
    /* Slider */
    .slider { position: relative; width: 100%; height: 450px; overflow: hidden; margin-bottom: 20px; }
    .slides img { width: 100%; height: 450px; object-fit: cover; position: absolute; top: 0; left: 0; opacity: 0; transition: opacity 1s ease-in-out; }
    .slides img.active { opacity: 1; }
    .slider .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 450px; background: rgba(0,0,0,0.4); display: flex; justify-content: center; align-items: center; }
    .btn-shop { padding: 12px 24px; background: var(--button-bg); border: none; color: #fff; font-size: 20px; cursor: pointer; border-radius: 6px; transition: background 0.3s; }
    .btn-shop:hover { background: var(--button-hover); }
    .slider-indicators { position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 100; }
    .slider-indicators button { width: 12px; height: 12px; border-radius: 50%; border: none; background-color: rgba(255,255,255,0.5); cursor: pointer; transition: background-color 0.3s; }
    .slider-indicators button.active { background-color: rgba(255,255,255,0.9); }
    
    /* Bara de căutare în Produse */
    #search-container { text-align: center; margin-bottom: 20px; }
    #search-container input {
      padding: 10px 15px;
      width: 80%;
      max-width: 400px;
      border: 2px solid #ccc;
      border-radius: 30px;
      font-size: 16px;
      outline: none;
      transition: all 0.3s;
      background: #fff;
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ccc" viewBox="0 0 16 16"><path d="M11.742 10.344l3.85 3.85-1.397 1.397-3.85-3.85a6.5 6.5 0 1 1 1.397-1.397zm-5.242 1.656a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/></svg>');
      background-repeat: no-repeat;
      background-size: 20px;
      background-position: 10px 50%;
      padding-left: 40px;
    }
    #search-container input:focus { border-color: var(--button-bg); box-shadow: 0 0 8px rgba(41,128,185,0.5); }
    #filter-toggle, #sort-toggle { display: none; background: none; border: none; font-size: 24px; cursor: pointer; color: var(--button-bg); margin: 10px auto; }
    #filter-bar, #sort-bar { text-align: center; margin-bottom: 20px; }
    #filter-bar button, #sort-bar button {
      padding: 8px 14px;
      margin: 5px;
      border: none;
      border-radius: 4px;
      background: var(--button-bg);
      color: #fff;
      cursor: pointer;
      transition: background 0.3s;
    }
    #filter-bar button:hover, #sort-bar button:hover { background: var(--button-hover); }
    
    /* Grilă Produse */
    .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .product-card {
      border: 1px solid #ddd;
      padding: 15px;
      text-align: center;
      background: #fff;
      border-radius: 8px;
      box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      cursor: pointer;
    }
    .product-card:hover { transform: scale(1.03); box-shadow: 2px 2px 12px rgba(0,0,0,0.2); }
    .product-card img { width: 100%; height: 200px; object-fit: cover; border-radius: 4px; margin-bottom: 10px; }
    .product-card h3 { font-size: 22px; margin-bottom: 5px; }
    .product-card p { font-size: 18px; margin-bottom: 10px; }
    .product-card input[type="number"] {
      width: 70px;
      padding: 8px;
      margin-bottom: 10px;
      border: 2px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      text-align: center;
      transition: border-color 0.3s;
    }
    /* Pentru a deschide modalul cu descriere doar la click pe card */
    .product-card input[type="number"],
    .product-card button { cursor: auto; }
    .product-card button { padding: 10px 16px; background: #e67e22; border: none; color: #fff; border-radius: 6px; transition: background 0.3s; }
    .product-card button:hover { background: #d35400; }
    .no-products { text-align: center; font-size: 20px; color: var(--error-color); margin: 20px; }
    
    /* Secțiuni Info (Despre Noi, Termeni & Condiții, Evenimente) */
    .info-section {
      background: url('evenimente-bg.jpg') no-repeat center center/cover;
      padding: 40px 20px;
      border: 2px solid var(--primary-color);
      margin-bottom: 40px;
      border-radius: 8px;
    }
    .info-section .content-text {
      background: rgba(255,255,255,0.9);
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .info-section h2 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 20px;
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    /* Calendar în Evenimente */
    .calendar {
      margin-top: 20px;
      overflow-x: auto;
    }
    .calendar table {
      width: 100%;
      border-collapse: collapse;
      min-width: 400px;
    }
    .calendar th, .calendar td {
      padding: 8px;
      border: 1px solid var(--primary-color);
      text-align: left;
      font-size: 14px;
    }
    .calendar th { background: var(--primary-color); color: #fff; }
    .calendar td.important {
      background: var(--button-bg);
      color: #fff;
      font-weight: bold;
    }
    
    /* Formular de Comandă */
    .order-form {
      margin: 30px auto;
      max-width: 500px;
      background: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
      border: 1px solid #ddd;
    }
    .order-form h2 { text-align: center; margin-bottom: 20px; color: var(--primary-color); }
    .order-form label { font-weight: bold; margin-bottom: 5px; display: block; }
    .order-form input[type="text"],
    .order-form input[type="email"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 15px;
    }
    .order-form button {
      width: 48%;
      padding: 12px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .order-form button[type="submit"] { background: var(--button-bg); color: #fff; }
    .order-form button[type="submit"]:hover { background: var(--button-hover); }
    .order-form .reset-btn { background: #c0392b; color: #fff; }
    .order-form .reset-btn:hover { background: #a93226; }
    
    /* Coș de Cumpărături */
    #cart-container {
      margin: 30px auto;
      max-width: 500px;
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      border: 1px solid #ddd;
    }
    .cart-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #ccc; }
    .cart-item:last-child { border-bottom: none; }
    .cart-item span { font-size: 16px; }
    .cart-item input[type="number"] {
      width: 60px;
      padding: 5px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 5px;
    }
    .cart-item button { padding: 5px 10px; background: #c0392b; border: none; color: #fff; border-radius: 4px; cursor: pointer; transition: background 0.3s; }
    .cart-item button:hover { background: #a93226; }
    
    /* Admin Panel – Comenzi */
    #comenzi {
      max-width: 1200px;
      margin: 40px auto;
      padding: 20px;
    }
    #comenzi h2 {
      text-align: center;
      font-size: 32px;
      margin-bottom: 20px;
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .comanda {
      border: 1px solid #ddd;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 4px;
      background: #fff;
    }
    .comanda button {
      margin-top: 5px;
      padding: 5px 10px;
      background: var(--button-bg);
      border: none;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .comanda button:hover { background: var(--button-hover); }
    
    /* Footer */
    footer {
      background: #fff0f0;
      border-top: 2px solid var(--primary-color);
      padding: 20px;
      text-align: center;
      font-size: 16px;
      color: #555;
    }
    .footer-container { max-width: 1200px; margin: auto; }
    .footer-logos img { width: 30px; vertical-align: middle; margin: 0 5px; }
    footer a { text-decoration: none; color: var(--primary-color); }
    .back-to-top {
      position: fixed;
      bottom: 30px;
      left: 30px;
      background: var(--secondary-color);
      color: #fff;
      border: none;
      padding: 10px 14px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
      display: none;
      transition: background 0.3s;
      z-index: 1100;
    }
    .back-to-top:hover { background: var(--primary-color); }
    
    @media (max-width: 768px) {
      .header-container { flex-direction: column; text-align: center; }
      nav ul { flex-direction: column; display: none; }
      nav ul.active { display: flex; }
      nav ul li { margin: 10px 0; }
      .hamburger { display: block; }
      .slider, .slides img { height: 220px; }
      .overlay { height: 220px; }
      #filter-bar, #sort-bar { display: none; }
      #filter-bar.active, #sort-bar.active { display: block; }
      #filter-toggle, #sort-toggle { display: inline-block; }
      #search-container input { width: 90%; }
      .fixed-cart { display: flex; }
      #countdown-timer { font-size: 16px; }
    }
    
    .fade-in { animation: fadeIn 1s ease-in-out; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  </style>
</head>
<body>
  <!-- HEADER -->
  <header>
    <div class="header-container">
      <img src="logo.jpg" alt="Logo" class="logo">
      <span class="header-title">Magazinul de Candele & Tradiții</span>
      <button class="hamburger" onclick="toggleMenu()">&#9776;</button>
      <nav>
        <ul id="nav-menu">
          <li><a onclick="showPage('home')">Acasă</a></li>
          <li><a onclick="showPage('produse')">Produse</a></li>
          <li><a onclick="showPage('despre-noi')">Despre Noi</a></li>
          <li><a onclick="showPage('termeni-si-conditii')">Termeni & Condiții</a></li>
          <li>
            <a onclick="showPage('cos')">
              <img src="cos.jpg" alt="Coș" class="cart-icon">
              <span class="cart-count" id="cart-count">0</span>
            </a>
          </li>
          <li><a onclick="showPage('evenimente')">Evenimente</a></li>
          <li><a onclick="showPage('comenzi')">Comenzi</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <!-- TIMER FIXED -->
  <div id="countdown-timer"><span id="timer"></span></div>
  
  <!-- PAGINILE SITE-ULUI -->
  <div id="pages">
    <!-- Acasă -->
    <section id="home" class="active fade-in">
      <div class="slider">
        <div class="slides">
          <img src="icoana1.jpg" alt="Slider 1" class="active">
          <img src="lumânare.jpg" alt="Slider 2">
          <img src="candela-mare.jpg" alt="Slider 3">
        </div>
        <div class="overlay">
          <button class="btn-shop" onclick="showPage('produse')">Vezi Produsele</button>
        </div>
        <div class="slider-indicators">
          <button onclick="setSlide(0)" id="indicator-0" class="active"></button>
          <button onclick="setSlide(1)" id="indicator-1"></button>
          <button onclick="setSlide(2)" id="indicator-2"></button>
        </div>
      </div>
      <h2>Bine ai venit la Magazinul de Candele & Tradiții</h2>
      <p class="content-text">
        Descoperă colecția noastră unică de lumânări și accesorii tradiționale. Află povestea și valorile care ne definesc.
      </p>
    </section>
    
    <!-- Produse -->
    <section id="produse" class="fade-in">
      <h2 id="prod-title" style="text-align: center; color: var(--primary-color);">Produsele Noastre</h2>
      <div id="search-container">
        <input type="text" id="product-search" placeholder="Caută produs..." onkeyup="searchProducts()">
      </div>
      <button id="filter-toggle" onclick="toggleFilter()">Filtre</button>
      <button id="sort-toggle" onclick="toggleSort()">Sortare</button>
      <div id="filter-bar">
        <button onclick="filterProducts('all')">Toate</button>
        <button onclick="filterProducts('candele')">Candele</button>
        <button onclick="filterProducts('lumânări')">Lumânări</button>
        <button onclick="filterProducts('tămâie')">Tămâie</button>
        <button onclick="filterProducts('accesorii')">Accesorii</button>
        <button onclick="filterProducts('icoane')">Icoane</button>
      </div>
      <div id="sort-bar">
        <button onclick="sortProducts('asc')">Preț: Crescător</button>
        <button onclick="sortProducts('desc')">Preț: Descrescător</button>
        <button onclick="sortProducts('alpha')">Alfabetic</button>
      </div>
      <div class="product-grid" id="product-grid">
        <!-- Produsele se vor genera dinamic -->
      </div>
      <div id="no-products" class="no-products" style="display: none;">Nu s-au găsit produse.</div>
    </section>
    
    <!-- Despre Noi -->
    <section id="despre-noi" class="fade-in info-section">
      <h2>Despre Noi</h2>
      <div class="content-text">
        <p><strong>Magazinul de Candele & Tradiții</strong> se dedică promovării valorilor culturale și spirituale. Fiecare produs este creat cu pasiune, combinând tradiția cu un design modern pentru a oferi o experiență autentică.</p>
        <p>Detalii importante:</p>
        <ul>
          <li>Produsele reflectă măiestria și tradiția autentică.</li>
          <li>Experiența de cumpărare îți permite să descoperi o lume de tradiții și credință.</li>
          <li>Valorile noastre sunt fundamentate pe credință și cultură.</li>
        </ul>
      </div>
    </section>
    
    <!-- Termeni & Condiții -->
    <section id="termeni-si-conditii" class="fade-in info-section">
      <h2>Termeni & Condiții</h2>
      <div class="content-text">
        <ul>
          <li>Produsele sunt disponibile în limita stocului și pot avea mici variații.</li>
          <li>Imaginile sunt orientative; produsul livrat poate diferi ușor.</li>
          <li>Comenzile se procesează în 1-2 zile lucrătoare, după confirmarea stocului.</li>
          <li>Livrarea se realizează prin curier rapid, conform termenelor stabilite.</li>
          <li>Returul este permis în termen de 14 zile, conform legislației.</li>
          <li>Datele personale sunt protejate conform normelor GDPR.</li>
        </ul>
        <p>Prin utilizarea site-ului, confirmați că ați citit și acceptat acești termeni.</p>
      </div>
    </section>
    
    <!-- Evenimente – Calendar Ortodox pentru luna aprilie -->
    <section id="evenimente" class="fade-in info-section">
      <h2>Calendar Ortodox – Aprilie</h2>
      <div class="content-text">
        <p>Această secțiune prezintă calendarul complet al lunii aprilie, cu sfinții și sărbătorile importante conform tradiției ortodoxe.</p>
        <div class="calendar">
          <table>
            <thead>
              <tr>
                <th>Ziua</th>
                <th>Sfânt/Sărbătoare</th>
                <th>Detalii</th>
              </tr>
            </thead>
            <tbody>
              <!-- Exemplu pentru 30 de zile – completează după calendarul real -->
              <tr>
                <td>1 April</td>
                <td class="important">Sfântul Ioan</td>
                <td>Slujbe speciale, procesiuni.</td>
              </tr>
              <tr>
                <td>2 April</td>
                <td>Sfântul Fecioarei</td>
                <td>Rugăciune și meditație.</td>
              </tr>
              <tr>
                <td>3 April</td>
                <td>Sfântul Gavriil</td>
                <td>Memorare și pomenire.</td>
              </tr>
              <!-- ... continuă până la 30 April ... -->
              <tr>
                <td>30 April</td>
                <td class="important">Sfântul Grigorie</td>
                <td>Sărbătoare majoră, evenimente speciale.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    
    <!-- Secțiunea Coș -->
    <section id="cos" class="fade-in">
      <h2>Coșul de Cumpărături</h2>
      <div id="cart-container">
        <!-- Produsele se vor genera dinamic -->
      </div>
      <h3>Total: <span id="total-amount">0</span> RON</h3>
      <h2>Finalizare Comandă</h2>
      <!-- Formularul folosește FormSubmit pentru a trimite emailul; completează "YOUR_FORMSUBMIT_URL" -->
      <form id="order-form" class="order-form" action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
        <!-- Pentru FormSubmit adaugă aceste inputuri suplimentare -->
        <input type="hidden" name="_next" value="https://exemplu.ro/thankyou.html">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="orderData" id="orderData">
        <h2>Completează Datele pentru Comandă</h2>
        <label for="customer-name">Nume:</label>
        <input type="text" id="customer-name" name="customer_name" required>
        <label for="customer-email">Email:</label>
        <input type="email" id="customer-email" name="customer_email" required>
        <label for="customer-phone">Telefon:</label>
        <input type="text" id="customer-phone" name="customer_phone" required>
        <label for="customer-address">Adresă:</label>
        <input type="text" id="customer-address" name="customer_address" required>
        <!-- Această valoare va fi completată dinamic cu detaliile coșului -->
        <input type="hidden" id="order-details" name="order_details" value="">
        <div style="display: flex; justify-content: space-between;">
          <button type="submit">Plasează Comandă</button>
          <button type="reset" class="reset-btn">Resetare</button>
        </div>
      </form>
    </section>
    
    <!-- Secțiunea Comenzi – fără autentificare; toate comenzile sunt încărcate de pe server -->
    <section id="comenzi" class="fade-in">
      <h2>Toate Comenzile Plasate</h2>
      <div id="orders-list">
        <!-- Comenzile se vor prelua din orders.json (prin PHP) -->
      </div>
      <div style="text-align: center; margin-top: 15px;">
        <button onclick="clearAllOrders()" style="padding: 10px 20px; background: #c0392b; border: none; color: #fff; border-radius: 6px; cursor: pointer;">Șterge Toate Comenzile</button>
      </div>
    </section>
  </div>
  
  <!-- Footer -->
  <footer>
    <div class="footer-container">
      <p>&copy; 2025 Magazinul de Candele & Tradiții. Toate drepturile rezervate.</p>
      <div class="footer-logos">
        <img src="anpc.jpg" alt="Logo">
      </div>
    </div>
  </footer>
  
  <!-- Back to Top -->
  <button class="back-to-top" onclick="scrollToTop()">&#8679;</button>
  
  <!-- Buton fix pentru Coș (pe mobil) -->
  <div class="fixed-cart" onclick="showPage('cos')">
    <img src="cos.jpg" alt="Coș" style="width: 30px;">
    <span class="cart-count" id="fixed-cart-count">0</span>
  </div>
  
  <!-- Modal Produs (deschide descriere completă la click pe card) -->
  <div id="product-modal" class="modal" onclick="closeModal(event)">
    <div class="modal-content">
      <span class="modal-close" onclick="closeModal(event)">&times;</span>
      <div id="modal-body"></div>
    </div>
  </div>
  
  <!-- Script pentru salvarea comenzilor în orders.json (folosind AJAX către același fișier PHP) -->
  <script>
    // Funcția de interceptare a formularului – salvează datele comenzii în orders.json prin AJAX,
    // apoi permite trimiterea către FormSubmit
    document.getElementById("order-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Previi trimiterea standard
      // Construiește obiectul de comandă
      const order = {
        customerName: document.getElementById("customer-name").value,
        customerEmail: document.getElementById("customer-email").value,
        customerPhone: document.getElementById("customer-phone").value,
        customerAddress: document.getElementById("customer-address").value,
        details: document.getElementById("order-details").value,
        date: new Date().toLocaleString()
      };
      // Setează inputul ascuns pentru FormSubmit
      document.getElementById("orderData").value = JSON.stringify(order);
      
      // Trimite comanda prin AJAX către acest fișier (același URL)
      const formData = new URLSearchParams();
      formData.append("orderData", JSON.stringify(order));
      
      fetch(window.location.href, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === "success") {
          // După salvare, se trimite formularul către FormSubmit pentru email
          // Eliminăm handler-ul pentru a evita ciclicitatea
          document.getElementById("order-form").removeEventListener("submit", arguments.callee);
          document.getElementById("order-form").submit();
        } else {
          alert("Eroare la salvarea comenzii.");
        }
      })
      .catch(err => {
        alert("Eroare: " + err);
      });
    });
    
    /* Coșul de cumpărături */
    let cart = [];
    
    function renderProducts() {
      const grid = document.getElementById("product-grid");
      grid.innerHTML = "";
      products.forEach(prod => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-category", prod.category);
        card.setAttribute("data-description", prod.description);
        card.innerHTML = `
          <img src="${prod.image}" alt="${prod.name}">
          <h3>${prod.name}</h3>
          <p>Preț: ${prod.price} RON</p>
          <p style="font-size:14px; color:green;">Stoc: ${prod.stock}</p>
          <input type="number" id="qty-${prod.id}" min="1" value="1" onclick="event.stopPropagation()">
          <button onclick="event.stopPropagation(); addToCart('${prod.name}', ${prod.price}, '${prod.id}', document.getElementById('qty-${prod.id}').value)">Adaugă în Coș</button>
        `;
        card.addEventListener("click", function() { openModal(card); });
        grid.appendChild(card);
      });
    }
    renderProducts();
    
    /* Slider */
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    const indicators = Array.from(document.querySelectorAll('.slider-indicators button'));
    function setSlide(index) {
      slides.forEach((img, idx) => {
        img.classList.toggle('active', idx === index);
        indicators[idx].classList.toggle('active', idx === index);
      });
      currentSlide = index;
    }
    function autoRotateSlides() {
      currentSlide = (currentSlide + 1) % slides.length;
      setSlide(currentSlide);
    }
    setInterval(autoRotateSlides, 4000);
    
    /* Timer */
    const events = [
      { name: "Paști", start: new Date("Apr 20, 2025 00:00:00").getTime(), duration: 3*24*60*60*1000, message: "Hristos a înviat!" },
      { name: "Înălțarea Domnului", start: new Date("May 29, 2025 00:00:00").getTime(), duration: 24*60*60*1000, message: "Hristos s-a înălțat!" },
      { name: "Rusalii", start: new Date("Jun 8, 2025 00:00:00").getTime(), duration: 24*60*60*1000, message: "Rusalii: Pogorârea Duhului Sfânt" },
      { name: "Adormirea Maicii Domnului", start: new Date("Aug 15, 2025 00:00:00").getTime(), duration: 24*60*60*1000, message: "Adormirea Maicii Domnului" },
      { name: "Crăciun", start: new Date("Dec 25, 2025 00:00:00").getTime(), duration: 7*24*60*60*1000, message: "Sărbătoarea Nașterii" }
    ];
    function updateEventTimer() {
      const now = new Date().getTime();
      let currentEvent = null, nextEvent = null;
      for (let ev of events) {
        if (now >= ev.start && now < ev.start + ev.duration) { currentEvent = ev; break; }
        else if (now < ev.start) { nextEvent = ev; break; }
      }
      const timerEl = document.getElementById("timer");
      if (currentEvent) { timerEl.innerText = currentEvent.message; }
      else if (nextEvent) {
        const distance = nextEvent.start - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timerEl.innerText = `Timp până la ${nextEvent.name}: ${days} zile ${hours} ore ${minutes} minute ${seconds} secunde`;
      } else {
        timerEl.innerText = "Nu mai există evenimente planificate.";
      }
    }
    setInterval(updateEventTimer, 1000);
    
    /* Navigare */
    function showPage(pageId) {
      document.querySelectorAll("#pages section").forEach(section => section.classList.remove("active"));
      document.getElementById(pageId).classList.add("active");
      document.getElementById("nav-menu").classList.remove("active");
      // Dacă pagina afișată este "comenzi", se încarcă lista de comenzi
      if (pageId === "comenzi") {
        loadOrders();
      }
    }
    function toggleMenu() { document.getElementById("nav-menu").classList.toggle("active"); }
    
    /* Filtrare, căutare, sortare produse */
    function filterProducts(category) {
      let cards = document.querySelectorAll(".product-card");
      let count = 0;
      cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block"; count++;
        } else {
          card.style.display = "none";
        }
      });
      document.getElementById("no-products").style.display = (count === 0 ? "block" : "none");
    }
    function searchProducts() {
      const query = document.getElementById("product-search").value.toLowerCase();
      let cards = document.querySelectorAll(".product-card");
      let count = 0;
      cards.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();
        if (name.includes(query)) { card.style.display = "block"; count++; }
        else { card.style.display = "none"; }
      });
      document.getElementById("no-products").style.display = (count === 0 ? "block" : "none");
    }
    function sortProducts(criteria) {
      const grid = document.getElementById("product-grid");
      let cards = Array.from(grid.getElementsByClassName("product-card"));
      cards.sort((a, b) => {
        let nameA = a.querySelector("h3").innerText.toLowerCase();
        let nameB = b.querySelector("h3").innerText.toLowerCase();
        let priceA = parseFloat(a.querySelector("p").innerText.replace(/[^\d\.]/g, ''));
        let priceB = parseFloat(b.querySelector("p").innerText.replace(/[^\d\.]/g, ''));
        if (criteria === "asc") return priceA - priceB;
        else if (criteria === "desc") return priceB - priceA;
        else if (criteria === "alpha") return nameA.localeCompare(nameB);
      });
      cards.forEach(card => grid.appendChild(card));
    }
    function toggleFilter() { document.getElementById("filter-bar").classList.toggle("active"); }
    function toggleSort() { document.getElementById("sort-bar").classList.toggle("active"); }
    
    /* Coș & gestionare stoc */
    function addToCart(name, price, prodId, qty) {
      qty = parseInt(qty);
      const prod = products.find(p => p.id === prodId);
      if (prod.stock < qty) { alert("Stoc insuficient!"); return; }
      prod.stock -= qty;
      localStorage.setItem("products", JSON.stringify(products));
      renderProducts();
      const existing = cart.find(item => item.id === prodId);
      if (existing) { existing.qty += qty; }
      else { cart.push({ id: prodId, name, price, qty }); }
      updateCartUI();
    }
    function updateCartUI() {
      const container = document.getElementById("cart-container");
      container.innerHTML = "";
      let total = 0;
      cart.forEach((item, idx) => {
        total += item.price * item.qty;
        container.innerHTML += `
          <div class="cart-item">
            <span>${item.name} - ${item.qty} x ${item.price} RON</span>
            <span>
              <input type="number" value="${item.qty}" min="1" onchange="updateItem(${idx}, this.value)">
              <button onclick="removeItem(${idx})">Șterge</button>
            </span>
          </div>
        `;
      });
      document.getElementById("total-amount").innerText = total;
      // Actualizează afișajul numărului de produse în coș
      document.getElementById("cart-count").innerText = cart.reduce((sum, item) => sum + item.qty, 0);
      document.getElementById("fixed-cart-count").innerText = cart.reduce((sum, item) => sum + item.qty, 0);
      document.getElementById("order-details").value = JSON.stringify(cart);
    }
    function updateItem(idx, newQty) {
      newQty = parseInt(newQty);
      let item = cart[idx];
      let prod = products.find(p => p.id === item.id);
      let oldQty = item.qty;
      if (newQty < oldQty) { prod.stock += (oldQty - newQty); }
      else if (newQty > oldQty) {
        if (prod.stock < (newQty - oldQty)) { alert("Stoc insuficient pentru actualizare!"); return; }
        prod.stock -= (newQty - oldQty);
      }
      item.qty = newQty;
      localStorage.setItem("products", JSON.stringify(products));
      renderProducts();
      updateCartUI();
    }
    function removeItem(idx) {
      let item = cart[idx];
      let prod = products.find(p => p.id === item.id);
      prod.stock += item.qty;
      localStorage.setItem("products", JSON.stringify(products));
      renderProducts();
      cart.splice(idx, 1);
      updateCartUI();
    }
    
    /* Preluare Comenzi din orders.json (server) */
    function loadOrders() {
      fetch(window.location.href + "?loadOrders=true")
        .then(response => response.json())
        .then(orders => {
          const ordersDiv = document.getElementById("orders-list");
          ordersDiv.innerHTML = "";
          if (!orders || Object.keys(orders).length === 0) {
            ordersDiv.innerHTML = "<p>Nu există comenzi.</p>";
            return;
          }
          Object.keys(orders).forEach(function(key, idx) {
            let order = orders[key];
            let orderDiv = document.createElement("div");
            orderDiv.className = "comanda";
            orderDiv.innerHTML = `<strong>Comanda ${idx + 1}</strong><br>
                                  Nume: ${order.customerName}<br>
                                  Email: ${order.customerEmail}<br>
                                  Telefon: ${order.customerPhone}<br>
                                  Adresă: ${order.customerAddress}<br>
                                  Detalii: ${order.details}<br>
                                  Data: ${order.date}<br>
                                  <button onclick="generateInvoiceForOrder('${key}')">Descarcă Factura</button>
                                  <button onclick="deleteOrder('${key}')" style="margin-left:10px;">Șterge Comanda</button>`;
            ordersDiv.appendChild(orderDiv);
          });
        });
    }
    
    /* Ștergere Comandă */
    function deleteOrder(key) {
      if (confirm("Ești sigur că vrei să ștergi această comandă?")) {
        fetch(window.location.href, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: "deleteOrderKey=" + encodeURIComponent(key)
        })
        .then(response => response.json())
        .then(data => {
          if(data.status === "deleted") {
            alert("Comanda a fost ștearsă!");
            loadOrders();
          } else {
            alert("Eroare la ștergerea comenzii.");
          }
        });
      }
    }
    
    /* Generare Factură pentru o comandă */
    function generateInvoiceForOrder(key) {
      fetch(window.location.href + "?loadOrders=true")
      .then(response => response.json())
      .then(orders => {
        if(!orders || !orders[key]) { alert("Comandă invalidă!"); return; }
        const order = orders[key];
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Furnizor", 10, 20);
        doc.text("Client", 110, 20);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text("Candele & Tradiții SRL", 10, 28);
        doc.text("Str. Exemplu nr.1, București", 10, 36);
        doc.text("CUI: RO123456", 10, 44);
        doc.text("Telefon: 0123456789", 10, 52);
        doc.text(`Nume: ${order.customerName}`, 110, 28);
        doc.text(`Email: ${order.customerEmail}`, 110, 36);
        doc.text(`Telefon: ${order.customerPhone}`, 110, 44);
        doc.text(`Adresă: ${order.customerAddress}`, 110, 52);
        doc.line(10, 60, 200, 60);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        const invoiceNumber = Math.floor(Math.random() * 1000000);
        const invoiceDate = new Date().toLocaleDateString();
        doc.text("FACTURĂ FISCALĂ", 105, 70, { align: "center" });
        doc.setFontSize(12);
        doc.text(`Factura Nr: ${invoiceNumber}`, 105, 78, { align: "center" });
        doc.text(`Data emiterii: ${invoiceDate}`, 105, 86, { align: "center" });
        let startY = 96;
        doc.setFont("helvetica", "bold");
        doc.text("Produs", 10, startY);
        doc.text("Cantitate", 70, startY, { align: "center" });
        doc.text("Preț Unitar", 100, startY, { align: "center" });
        doc.text("Subtotal", 140, startY, { align: "center" });
        doc.line(10, startY+2, 200, startY+2);
        doc.setFont("helvetica", "normal");
        let posY = startY + 10;
        let orderItems = JSON.parse(order.details);
        orderItems.forEach(item => {
          const itemTotal = item.price * item.qty;
          doc.text(item.name, 10, posY);
          doc.text(String(item.qty), 70, posY, { align: "center" });
          doc.text(String(item.price) + " RON", 100, posY, { align: "center" });
          doc.text(String(itemTotal) + " RON", 140, posY, { align: "center" });
          posY += 10;
          if (posY > 250) { doc.addPage(); posY = 20; }
        });
        const total = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);
        doc.setFont("helvetica", "bold");
        doc.text(`Total: ${total} RON`, 140, posY+10, { align: "center" });
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text("Mulțumim pentru încredere!", 10, 290);
        doc.save(`Factura_${invoiceNumber}.pdf`);
      });
    }
    
    /* Modal Produs – deschide descrierea completă la click pe card */
    function openModal(card) {
      const modal = document.getElementById("product-modal");
      const modalBody = document.getElementById("modal-body");
      const imgSrc = card.querySelector("img").src;
      const title = card.querySelector("h3").innerText;
      const price = card.querySelector("p").innerText;
      const description = card.getAttribute("data-description") || "Fără descriere";
      modalBody.innerHTML = `<img src="${imgSrc}" alt="${title}">
                             <h2>${title}</h2>
                             <p>${price}</p>
                             <p>${description}</p>`;
      modal.style.display = "block";
    }
    function closeModal(event) {
      if (event.target.classList.contains("modal") || event.target.classList.contains("modal-close")) {
        document.getElementById("product-modal").style.display = "none";
      }
    }
    
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.addEventListener("scroll", () => {
      document.querySelector(".back-to-top").style.display = window.pageYOffset > 300 ? "block" : "none";
    });
  </script>
</body>
</html>
