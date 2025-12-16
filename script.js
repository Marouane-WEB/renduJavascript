const shop1 = document.getElementById("shop");
const service1 = document.getElementById("service");
const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;


fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log('Données récupérées avec succès :', data);

        console.log(data.produits);

        displayProducts(data);

    })
    
    function displayProducts(data) {
        let produits = data.produits;
        produits.forEach(produit => {
            
            const article = document.createElement("article");
            article.classList.add("produits");
            const title = document.createElement("h3");
            const descri = document.createElement("p");
            const image = document.createElement("img");
            
            title.textContent = produit.name;
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

           let services = data.services
        
       }


    
    