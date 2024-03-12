/* #### On veut que le formulaire d'inscription à la newsletter n'apparaisse que si on clique sur le lien "newsletter" dans le menu du haut ########  */

/*################################################################ */
// On rajoute un "id" unique au niveau du menu newletter "id = menu-newsletter" pour pouvoir le distinguer des autres item du menu et bien le cibler!
/*################################################################ */

//------------------------------------------------------------------
// Etape 1 : on cache le formulaire d'inscription
// Etape 2 : on pose un ecouteur d'event sur le menu newsletter pour faire apparaitre le formulaire d'inscription
// Etape 3 : on pose un ecouteur d'event sur la croix du formulaire pour faire disparaitre le formulaire d'inscription
// Etape 4 : on pose un écouteur d'event quand on scroll à 300px
// Etape 5 : on veut interdire les adresses emails "fausses" dans le formulaire d'inscription et afficher un message d'erreur
//------------------------------------------------------------------

// Clic sur Newsletter et l'enveloppe de la balise "a" du menu en haut

// On cible l'id menu-newsletter :
/* document.getElementById("menu-newsletter").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("tu as cliqué sur newsletter");
});
*/

// Variante avec une constante :
/* const newsletterClick = document.getElementById("menu-newsletter");
// On ajoute un écouteur d'évènement type "click" à notre cible :
newsletterClick.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("code en détail");
});
*/

// Variante avec Queryselector:
/* document.querySelector("#menu-newsletter").addEventListener("click", (e) => {
  e.preventdefault();
  console.log("avec queryselector");
});
 */

// -----@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--------------

// ----------------           Etape 1        ----------------------------

// On cache le formulaire d'inscription à la newsletter qui apparait par défault sur la page du site  :

const formNewsletter = document.querySelector(".newsletter");
formNewsletter.classList.add("newsletter--hidden");

const fordiddenDomains = [
  "@yopmail.com",
  "@yopmail.fr",
  "@yopmail.net",
  "@cool.fr.nf",
  "@jetable.fr.nf",
  "@courriel.fr.nf",
  "@moncourrier.fr.nf",
  "@monemail.fr.nf",
  "@monmail.fr.nf",
  "@hide.biz.st",
  "@mymail.infos.st",
];

// ----------------           Etape 2       ----------------------------

//On fait apparaitre le formulaire d'inscription à la newsletter quand on clique sur "newsletter" dans le menu

// On cible l'élément choisi : newsletter du menu en haut :
const newsletterClick = document.getElementById("menu-newsletter");
// On ajoute un écouteur d'évènement type "click" à notre cible :
newsletterClick.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("code en détail");
  formNewsletter.classList.remove("newsletter--hidden");
});

// ----------------           Etape 3      ----------------------------

// On fait disparaître le formulaire en cliquant sur la croix du formulaire: on pose un ecouteur d'event sur la croix du formulaire

// On cible la croix du formulaire :
const buttonCLoseForm = document.querySelector(".newsletter__close");
console.log(buttonCLoseForm);

// On pose un écouteur d'event sur la croix
buttonCLoseForm.addEventListener("click", (e) => {
  console.log("j'appuie sur la croix du formulaire d'inscription");
  formNewsletter.classList.add("newsletter--hidden");
});

// ----------------           Etape 4      ----------------------------

// On fait apparaitre le formulaire quand on scroll la page d'accueil à 300px

// On pose un écouteur sur la fenêtre pour écouteur l'event "srcoll":
window.addEventListener("scroll", scrollForm);

// On fait une fonction pour cibler le scroll de la page à 300px :
function scrollForm(e) {
  if (window.scrollY > 300) {
    formNewsletter.classList.remove("newsletter--hidden");
  }
}

//----------------------    Etape 5 -------------------------------------

// On veut interdire les adresses emails "fausses"

// On va cibler l'input du formulaire d'inscription qui a l'id "subscriber-email"

const userInput = document.getElementById("subscriber-email");

// On pose un event et on va récupérer l'email
userInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});

// On vérifie si l'email du l'user n'est pas interdit
// On créé une fonction

// fonction qui teste les nom de domaines
function testDomains(emailExtension) {
  // pour chaque nom de domaine de la liste forbiddenDomains (liste des domaines interdit)
  for (const extension of forbiddenDomains) {
    // si un nom de domaine des users est inclus dans cette liste
    if (emailExtension.includes(extension)) {
      // on retroune vraie
      return true;
    }
    //sinon on retourne faux
    return false;
  }
}
