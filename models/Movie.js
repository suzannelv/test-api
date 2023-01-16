const movies = [
    {
      "titre" : "Arbre à gratter",
      "materieu" : "Panneaux d'aggloméré, Sisal, Peluche, tissu 100 % Polyester.",
      "description" : "Ce beau griffoir très pratique plaira beaucoup à votre chat. L'arbre à chat offre de nombreuses possibilités pour jouer, se faire les griffes ou se cacher. En grimpant sur l'échelle, votre chat pourra atteindre la niche du premier étage. Juste à côté de la niche, il y a une corde de jeu. Toujours au premier étage, un trou permet d'accéder à un confortable hamac. La nacelle juste un peu plus haut est parfaite pour se prélasser. Le spacieux deuxième étage, où votre chat pourra s'étirer à son aise, mène à un tunnel surmonté d'une plateforme d'observation se trouvant à une hauteur de 141 cm.",
      "couleur" : "Beige",
      "imageUrl" : "1.jpg",
      "poids": "13.9 kg",
      "dimension": "105L x 60l x 141H centimètres",
      "_id":"chat_gratter"
    },
    {
      "titre" : "Arbre à chat",
      "materieu" : "Sisal.",
      "description" : "Avec cette maison de jeu lionto en peluche douce, tous les souhaits de vos pattes de velours restent ouverts. La grotte douillette invite à se reposer et à se cacher et les deux balles en peluche suspendues assurent le plaisir de jeu nécessaire. Le lit d'appoint est idéal pour les périodes de repos et l'observation de l'environnement. Les troncs en sisal robuste aident à entretenir les griffes et à garder votre chat loin des meubles. Grâce à sa conception fine, vous pouvez placer la colonne à griffer partout et attirer tous les regards avec sa couleur gris foncé. La notice de montage est facile à comprendre et est fournie avec le jeu de vis correspondant. Contenu de la livraison : 1 arbre à chat, 1 notice de montage (français non garanti), vis.",
      "couleur" : "Gris",
      "imageUrl" : "2.jpg",
      "poids": "6.6 kg",
      "dimension": "40L x 40l x 60H centimètres",
      "_id":"chat_arbre"
    },
    {
      "titre" : "Arbre à chat",
      "materieu" : "Sisal.",
      "description" : "Plaque de base: ca. 50 x 50 cm - Hauteur: 133 cm - Dimensions hors tout: 60 x 60 x 133 cm - Barre de sisal: 8 cm en diamètre - 1 antre - 1 plates-formes - Etoffe extra moelleuse - Sisal robuste pour la soin des griffes.",
      "couleur" : "Beige/blanc",
      "imageUrl" : "3.jpg",
      "poids": "11 kg",
      "dimension": "60L x 60l x 133H centimètres",
      "_id":"chat_arbre_activite"
    },
    {
      "titre" : "Panier chat",
      "materieu" : "Fibre de polyester.",
      "description" : "Idéal pour un chat, ce panier pour animal de compagnie est léger et peut se placer dans une chambre, un salon, un bureau ou tout autre pièce de vie confortable, de préférence là où il puisse faire tranquillement un somme tout en restant prêt de vous.",
      "couleur" : "Maron",
      "imageUrl" : "4.jpg",
      "poids": "0.5 kg",
      "dimension": "50.8L x 50.8l x 20H centimètres",
      "_id":"chat_panier"
    },
    

];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




