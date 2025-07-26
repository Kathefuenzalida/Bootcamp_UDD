//Programa que saluda en varios idiomas
//Solicito que usuario ingrese el idioma
let idioma = prompt("Introduce idioma deseado, Español, Aleman, Frances, Ingles, Arabe: "); 
let saludo;
//Realizamos la operación según la opción elegida
    switch (idioma) {
        case "Español":
            saludo = ("Hola, espero tengas un lindo día.");
            break;
        case "Aleman":
            saludo = ("Hallo, ich hoffe, Sie haben einen schönen Tag.");
            break;
        case "Frances":
            saludo = ("Bonjour, j’espère que tu passes une belle journée.");
            break;
        case "Ingles":
            saludo = ("Hello, I hope you have a nice day.");
            break;
        case "Arabe":
            saludo = ("مرحبًا، آمل أن يكون يومك جميلًا");
            break;
        default: 
        alert ("Idioma no valido, elije entre Español, Aleman, Frances, Ingles, Arabe")
        break;
    }
     alert (saludo);
    // Ahora pregunto si quiere un mensaje de despedida
    let despedida = prompt("Quieres un mensaje de despedida?, escribe si o no")
    let adios;
    // Si elige despedida
    if (despedida === "si") {
        let idioma2 = prompt("Introduce idioma deseado, Español, Aleman, Frances, Ingles, Arabe): ")
        //Realizamos la operación según la opción elegida
    switch (idioma2) {
        case "Español":
            adios = ("Adios, nos vemos!");
            break;
        case "Aleman":
            adios = ("Tschüss, bis bald!");
            break;
        case "Frances":
            adios = ("Au revoir, à bientôt!");
            break;
        case "Ingles":
            adios = ("Goodbye, see you!");
            break;
        case "Arabe":
            adios = ("مع السلامة، أراك لاحقًا");
            break;
        default: 
        alert ("Idioma no valido, elije entre Español, Aleman, Frances, Ingles, Arabe)")
    break;
    }
    } else {
        alert ("Gracias por visitar nuestro sitio web.")
    }
    alert (adios);