/* #### On veut que le formulaire d'inscription à la newsletter n'apparaisse que si on clique sur le lien "newsletter" dans le menudu haut ########  */

// On va créer une fonction pour réaliser cela :

// Etape 1 : on cible le lien "newsletter" en haut du menu
// Etape 2 : on pose un écouteur de clic
// Etape 3 : on affiche la class du formulaire d'inscription

// Creation de la fonction

// Clic sur le logo enveloppe
/* document.querySelector(".icon-mail").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("tu as cliqué sur le logo de la newsletter en haut du menu");
});

// Clic sur "newsletter" du menu en haut
// Il faut ajouter une class à newsletter pour le cibler
// Je cible l'endroit où je veux ajouter une class
document.querySelector;
*/

// Clic sur le texte "newsletter" "<a>"
document.getElementById("menu-newsletter").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(
    "tu as cliqué sur la div newletter logo et texte de la newsletter en haut du menu"
  );
});

// Clic sur "newsletter" du menu en haut
// Il faut ajouter une class à newsletter pour le cibler
// Je cible l'endroit où je veux ajouter une class
document.querySelector;
