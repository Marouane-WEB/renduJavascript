const API_URL =`https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;


const collectionmain = document.getElementById("Collection");
const container = document.createElement("div");
container.classList.add("carte-liste");



  fetch(API_URL)
      .then(response => response.json())
      .then(data => {
         console.log('Données récupérées avec succès :', data);
      })
      
 
      data.produits.forEach(element => {


        
      });