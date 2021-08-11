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

    // Meta HTML
    var title_meta = document.getElementById('title_meta');
    title_meta.content = "Home Page";

    // Main Body HTML
    var main_text = document.getElementById('main_text');
    main_text.setAttribute('style', 'white-space: pre;');
    main_text.textContent = "Welcome to my website!\nTo start with, I wanted to say thanks for stopping by, It really means a lot to me.\nAnywas, a bit more info on the site:\n\nThe reason I made this site is because I had nothing to do and it would be nice to make a site for myself using HTML and CSS which I never got to apply after learning, so its a nice refresher.\nBecause I don't wanna pay every year for a site (even though it's like $7 a year which isn't anything at all), I decided to host it on Github pages. Free hosting for Static pages. So I just wrote the HTML and CSS (which you can see by pressing CTRL+U) and now we are here :)\nI plan to maintain my website until I get bored, or forget about it. For now, I'll use it for my personal stuff, such as my services and what not.\n\nAs I mentioned above, I am using Github to host the site. You can find the repo here:";
    document.getElementById('title').textContent = "Home Page";
    document.getElementById('page_header').textContent = "Welcome to my Website";
    document.getElementById('repo_button').textContent = "Website Repo";
    document.getElementById('final_text').textContent = "Anyways, that's about it. Thanks for stopping by. If you want, take a look around with the navagation buttons below. Again, thanks and have a great day :D";
    
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
    
    // Meta HTML
    var title_meta = document.getElementById('title_meta');
    title_meta.content = "Pagina de Inicio";

    // Main Body HTML
    var main_text = document.getElementById('main_text');
    main_text.setAttribute('style', 'white-space: pre;');
    main_text.textContent = "¡Bienvenido a mi sitio web!\nPara empezar, quería dar las gracias por visitar mi sitio web, realmente significa mucho para mí.\nDe todos modos, un poco más de información en el sitio:\n\nLa razón por la que hice este sitio es porque no tenía nada que hacer y Sería bueno hacer un sitio para mí usando HTML y CSS que nunca llegué a aplicar después de aprender.\nPorque no quiero pagar todos los años por un sitio (a pesar de que son como $7 al año, lo que no es nada en absoluto), decidí alojarlo en las páginas de Github. Alojamiento gratuito para páginas estáticas. Así que escribí HTML y CSS (que puedes ver presionando CTRL + U) y ahora estamos aquí :)\nPlaneo mantener mi sitio web hasta que me aburra o me olvide. Por ahora, lo usaré para mis cosas personales, como mis servicios y lo que no.\n\nComo mencioné anteriormente, estoy usando Github para alojar el sitio. Puedes encontrar el repositorio aquí:";
    document.getElementById('title').textContent = "Pagina de Inicio";
    document.getElementById('page_header').textContent = "Bienvenido a mi sitio Web";
    document.getElementById('repo_button').textContent = "Repositorio del sitio Web";
    document.getElementById('final_text').textContent = "De todos modos, eso es todo. Gracias por visitar mi sitio web. Si lo desea, eche un vistazo con los botones de navegación a continuación. Nuevamente, gracias y que tengas un gran día :D";
    
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
