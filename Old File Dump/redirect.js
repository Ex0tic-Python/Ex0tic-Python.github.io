// Import Statement: import {redirectMain} from "path/to/script";
const base_link = "https://ex0tic-python.github.io/";
const linkDict = {
    "en": {
        "home": "",
        "about me": "About-Me/",
        "my links": "My-Links/",
        "secret": "Secret/"
    },
    "es": {
        "home": "es/",
        "about me": "es/Sobre-Mi/",
        "my links": "es/Mis-Enlaces/",
        "secret": "es/Secreto/"
    }
}

export function redirectMain(key, lang, new_tab=false) {
    if (new_tab === false) {
        window.open(base_link + linkDict[lang][key] + window.location.search);
    }
}
