const cocktails = {
    citrusbliss: {
        name: "Citrus Bliss",
        description: "Le Citrus Bliss est un cocktail rafraîchissant et vibrant, idéal pour les amateurs de saveurs citronnées. Avec sa couleur jaune éclatante et sa garniture de tranche de citron, il est parfait pour apporter une touche de soleil à votre journée.",
        ingredients: ["60 ml de vodka", "30 ml de jus de citron frais", "15 ml de sirop de sucre", "Glaçons", "Tranche de citron pour la décoration"],
        img: "img/cocktails/CitrusBliss.jpg",
        cout: 2,
    },
    lemondelight: {
        name: "Lemon Delight",
        description: "Le Lemon Delight est un cocktail lumineux et rafraîchissant, parfait pour une après-midi ensoleillée. Avec sa couleur jaune éclatante et sa tranche de citron en garniture, il apporte une touche de fraîcheur et de zeste à toute occasion.",
        ingredients: ["40 ml de gin", "30 ml de jus de citron frais", "15 ml de sirop de sucre", "Glaçons", "Tranche de citron pour la décoration"],
        img: "img/cocktails/LemonDelight.jpg",
        cout: 3
    },
    margaritaglacee: {
        name: "Margarita Glacée",
        description: "Une Margarita rafraîchissante et glacée, parfaite pour les chaudes journées d’été. Ce cocktail classique est un mélange harmonieux de saveurs acidulées et sucrées, avec une touche de fraîcheur grâce aux quartiers de lime.",
        ingredients: ["60 ml de tequila", "30 ml de triple sec (cointreau)", "30 ml de jus de citron frais", "Glaçons", "Tranche de citron pour la décoration", "Sel pour le bord du verre"],
        img: "img/cocktails/MargaritaGlacee.jpg",
        cout: 4
    },
    negronisoleil: {
        name: "Negroni Soleil",
        description: "Un classique revisité, parfait pour les amateurs de saveurs intenses. Ce Negroni met en avant l'amertume douce du gin, équilibrée par la rondeur de l'orange. Son look éclatant évoque le coucher de soleil.",
        ingredients: ["3 cl de gin", "3 cl de vermouth rouge", "3 cl de Campari", "1 tranche d'orange", "Glaçons"],
        img: "img/cocktails/NegroniSoleil.jpg",
        cout: 3
    },
    rougedete: {
        name: "Rouge d'été",
        description: "Un cocktail rafraîchissant aux notes fruitées et légèrement amères. Idéal pour se désaltérer en terrasse sous le soleil d'été, grâce à son équilibre parfait entre douceur et fraîcheur.",
        ingredients: ["4 cl de Campari", "6 cl de Prosecco", "15 ml de sirop de sucre", "2 cl d'eau gazeuse", "1 tranche d'orange", "Glaçons"],
        img: "img/cocktails/Rougedete.jpg",
        cout: 2
    },
    summerbreeze: {
        name: "Summer Breeze",
        description: "Le Summer Breeze est un cocktail rafraîchissant et vibrant, parfait pour les journées chaudes. Avec ses fruits frais, ses herbes aromatiques et ses fleurs comestibles, il apporte une touche de fraîcheur et d’élégance à chaque gorgée.",
        ingredients: ["60 ml de vodka", "30 ml de jus de citron frais", "15 ml de sirop de sucre", "Glaçons", "Fruits frais (fraises/framboises)", "Herbes aromatiques (menthe)", "Fleurs comestibles pour la décoration"],
        img: "img/cocktails/SummerBreeze.jpg",
        cout: 5
    },
    sunsetmartini: {
        name: "Sunset Martini",
        description: "Un cocktail élégant et vibrant, le Sunset Martini est parfait pour une soirée sophistiquée. Avec ses couleurs chaudes et ses garnitures d\’olive et d\’orange, il évoque les couchers de soleil tropicaux.",
        ingredients: ["60 ml de vodka", "30 ml de vermouth rouge", "15 ml de jus d’orange frais", "Glaçons", "Olives vertes pour la décoration", "Tranche d’orange pour la décoration"],
        img: "img/cocktails/SunsetMartini.jpg",
        cout: 4
    },
    tequilasunriseshots: {
        name: "Tequila Sunrise Shots",
        description: "Les Tequila Sunrise Shots sont parfaits pour une soirée tropicale. Avec leur bord salé et une touche de citron, ils apportent une explosion de saveurs ensoleillées à chaque gorgée.",
        ingredients: ["60 ml de tequila", "Sel (pour le bord du verre)", "Citrons frais (pour le jus et la décoration)"],
        img: "img/cocktails/TequilaSunriseShots.jpg",
        cout: 3
    }
}

const urlParams = new URLSearchParams(window.location.search);
const cocktail = urlParams.get('cocktail');



const title = document.querySelector(".itemTitle")
const description = document.querySelector(".itemParagraph")
const ingredients = document.querySelector("ul")
const image = document.querySelector(".cocktailImg")
const cout = document.querySelector(".cout")

if (!cocktails.hasOwnProperty(cocktail)) {
    document.querySelector(".product__container").classList.add("hidden")
    document.querySelector(".product__container").classList.remove("product__container")
    document.querySelector(".none").classList.remove("hidden")
} else {
    title.textContent = cocktails[cocktail].name
    description.textContent = cocktails[cocktail].description
    
    for (let i=0; i < cocktails[cocktail].ingredients.length; i++) {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(cocktails[cocktail].ingredients[i]));
        ingredients.appendChild(li)
    }
    image.src = cocktails[cocktail].img
    let amount = ""
    for (let a = 0; a < cocktails[cocktail].cout; a++) {
        amount+="$"
    }
    cout.textContent=amount
}


