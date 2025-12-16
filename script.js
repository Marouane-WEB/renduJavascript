
const shop1 = document.getElementById("shop");
const service1 = document.getElementById("service");
const temoins = document.getElementById("temoignage");

const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;


fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log('Données récupérées avec succès :', data);

        console.log(data.produits);

        displayProducts(data);
        displayService(data);
        displayTemoignage(data);

    })

function displayProducts(data) {
    let produits = data.produits;
    produits.forEach(produit => {

        const article = document.createElement("article");
        article.classList.add("produits");
        const title = document.createElement("h3");
        const descri = document.createElement("p");
        const image = document.createElement("img");

        title.textContent = produit.nom;
        descri.textContent = produit.description;
        console.log(produit['image-url']);
        console.log(image);

        image.src = produit["image-url"];




        article.appendChild(title);
        article.appendChild(descri);
        article.appendChild(image);
        shop1.appendChild(article);

    });

}

function displayService(data) {

    let services = data.services;
    
    services.forEach(service => {
        // creer une card
        const serviceclient = document.createElement("article");
        serviceclient.classList.add("produit");
        const title = document.createElement("h3");
        const descri = document.createElement("p");

        // insérer du contenu
        
        title.textContent = service.nom;
        descri.textContent = service.description;

        // mettre les elements dans la card
        serviceclient.appendChild(title);
        serviceclient.appendChild(descri);
        // mettre la card dans le html dans le container
        service1.appendChild(serviceclient);
        
    });
     
}

 function displayTemoignage(data) {

    let temoignagnes = data.temoignages;
    
    temoignagnes.forEach(temoignage => {
        
        const nomclient = document.createElement("h4");
        nomclient.textContent = temoignage.prenom;

        const commente = document.createElement("p");
        commente.textContent = temoignage.commentaire;

        const experience = document.createElement("p");
        experience.textContent = temoignage.typeExperience;

        const note = document.createElement("p");

        note.textContent= `${temoignage.note}/5`;

        
        nomclient.appendChild(commente);
        nomclient.appendChild(experience);
        nomclient.appendChild(note);
       
        temoins.appendChild(nomclient);


    });
 }



