// All page tags that will be changed according to language
const page_ids = [
    "Page Title",
    "Page Header",
    "Main Text 1",
    "Website Repo Button",
    "Main Text 2",
    "Pages Header",
    "Home Link",
    "About Link",
    "Links Link",
    "Services Link",
    "Boring Link",
    "Languages Header",
];
// Page tags that need their link and text content changed
const page_links = [
    "Home Link",
    "About Link",
    "Links Link",
    "Services Link",
    "Boring Link"
]

// Function for returning JSON data
async function getJSONData(requestURL) {
    fetch(requestURL).then(response => response.json())
    return response.json;
}

// Get URL params and determine the language to load the page in
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('Language') == true) {
    const lang_param = (urlParams.get('Language')).toUpperCase();

    if (lang_param == 'EN') {
        console.log("Language Parameter set to English(EN)");
    }

    else if (lang_param == 'ES') {
        console.log("Language Parameter set to Spanish(ES)");
        data = getJSONData('https://raw.githubusercontent.com/Ex0tic-Python/ex0tic-python.github.io/main/Translations/ES/index-es.json');

        for (id of page_ids) {
            if (id in page_links) {
                document.getElementById(id).textContent = data[id]["Text Content"];
                document.getElementById(id).href = data[id]["URL"];
            }
            else {
                document.getElementById(id).textContent = data[id];
            }
        }
    }
    else {
        console.log("Unknown Language Parameter entered. Defaulting to English(EN)");
    }
}
