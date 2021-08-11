# HTML Template

```html
<!DOCTYPE html>
<html>

    <head>
        <!-- Meta Data -->
        <meta charset  = "UTF-8">
        <meta name     = "viewport"    content = "width=device-width, initial-scale=1.0">
        <meta name     = "author"      content = "Ex0tic_Python">
        <meta name     = "description" content = "<!-- DESCRIPTION -->">
        <meta property = "og:title"    content = "Ex0tic_Python's Website">
        <meta property = "og:image"    content = "https://github.com/Ex0tic-Python/ex0tic-python.github.io/blob/main/gaemr.jpg?raw=true">

        <!-- Links -->
        <link rel = "stylesheet" href = "..\main.css">
        
        <title id = "title"></title>
    </head>

    <body bgcolor = "#101010">
        <!-- Main Text HTML -->
        <div id = "text_css">
            <header>
                <h1 id = "page_header"></h1>
                <hr class = "large" align = "left" />
            </header>
            <!-- MAIN TEXT HERE -->
            <br />
        </div>

        <!-- Footer HTML -->
        <div id = "footer_css">
            <footer>
                <p id = "pages_header"></p>
                <nav class = "nav_foot">
                    <ul>
                        <li><a href = "" id="home_link"></a></li>
                        <li><a href = "" id="about_link"></a></li>
                        <li><a href = "" id="links_link"></a></li>
                        <li><a href = "" id="services_link"></a></li>
                        <li><a href = "" id="boring_link">...</a></li>
                    </ul>
                </nav>
                <p><br /><br /></p>
                <p id = "languages_header"></p>
                <nav class = "nav_foot">
                    <ul>
                        <li><a href = "https://ex0tic-python.github.io/<!-- PAGE -->?Language=EN">English</a></li>
                        <li><a href = "https://ex0tic-python.github.io/<!-- PAGE -->?Language=ES">Español</a></li>
                    </ul>
                </nav>
                <p><br /><br /></p>
            </footer>
        </div>
        <script src = "<!-- SCRIPT -->"></script>
    </body>

</html>
```

# JavaScript Template

```js
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var lang = '';

if (urlParams.has('Language') == true) {
    const param = urlParams.get('Language');
    if (param == 'EN') {
        console.log("Language Parameter set to English(EN)");
        lang = 'EN';
    } else if (param == 'ES') {
        console.log("Language Parameter set to Spanish(ES)");
        lang = 'ES';
    } else {
        console.log("Unknown Language Parameter entered. Defaulting to English(EN)");
        lang = 'EN';
    }

} else {
    console.log("No Language parameter specified. Defaulted to English(EN)")
    lang = 'EN';
}

if (lang == 'EN') {
    console.log("Page Loaded in English(EN)");

    // Main Body HTML
    

    // Footer HTML
    var home_link = document.getElementById('home_link');
    var about_link = document.getElementById('about_link');
    var links_link = document.getElementById('links_link');
    var services_link = document.getElementById('services_link');
    var boring_link = document.getElementById('boring_link');
    document.getElementById('pages_header').textContent = "Pages";
    document.getElementById('languages_header').textContent = "Languages";
    home_link.textContent = "Home Page"
    about_link.textContent = "About Me";
    links_link.textContent = "My Links";
    services_link.textContent = "My Services";
    home_link.href = "https://ex0tic-python.github.io/?Language=EN";
    about_link.href = "https://ex0tic-python.github.io/Ex0tic%20Python/about_main.html?Language=EN";
    links_link.href = "https://ex0tic-python.github.io/Ex0tic%20Python/links_main.html?Language=EN";
    services_link.href = "https://ex0tic-python.github.io/Services/services_main.html?Language=EN";
    boring_link.href = "https://ex0tic-python.github.io/Secrets/boring_main.html?Language=EN";

} else if (lang == 'ES') {
    console.log("Page Loaded in Spanish(ES)")

    // Main Body HTML
        

    // Footer HTML
    var home_link = document.getElementById('home_link');
    var about_link = document.getElementById('about_link');
    var links_link = document.getElementById('links_link');
    var services_link = document.getElementById('services_link');
    var boring_link = document.getElementById('boring_link');
    document.getElementById('pages_header').textContent = "Paginas";
    document.getElementById('languages_header').textContent = "Idiomas"
    home_link.textContent = "Pagina de Inicio";
    about_link.textContent = "Sobre Mí";
    links_link.textContent = "Mis Enlaces";
    services_link.textContent = "Mis Servicios";
    home_link.href = "https://ex0tic-python.github.io/?Language=ES";
    about_link.href = "https://ex0tic-python.github.io/Ex0tic%20Python/about_main.html?Language=ES";
    links_link.href = "https://ex0tic-python.github.io/Ex0tic%20Python/links_main.html?Language=ES";
    services_link.href = "https://ex0tic-python.github.io/Services/services_main.html?Language=ES";
    boring_link.href = "https://ex0tic-python.github.io/Secrets/boring_main.html?Language=ES";
}
```
