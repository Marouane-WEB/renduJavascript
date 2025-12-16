const collectionmain = document.getElementById("Collection");
const container = document.createElement("div");
container.classList.add("carte-liste");


fetch(API_URL)
      .then(response => response.json())
      .then(data => {
         console.log('Données récupérées avec succès :', data);

      })
      .catch(error => console.error('Erreur lors de la récupération des données :', error));
   //**! FIN FETCH */





