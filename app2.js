// ############PROJET TRIPODVISOR ################### //

/* #### On veut que le formulaire d'inscription à la newsletter n'apparaisse que si on clique sur le lien "newsletter" dans le menu du haut ########  */

/*################################################################ */
// Dans le fichier HTML, on rajoute un "id" (idendtifiant unique) au niveau du menu newsletter "id = menu-newsletter" pour pouvoir le distinguer des autres item du menu et bien le cibler !
/*################################################################ */

//------------------------------------------------------------------
// Etape 1 : on cache le formulaire d'inscription (on ajoute un class)
// Etape 2 : on pose un ecouteur d'event sur "newsletter" en haut du menu pour faire apparaitre le formulaire d'inscription
// Etape 3 : on pose un ecouteur d'event sur la croix du formulaire pour faire disparaitre le formulaire d'inscription à la newsletter
// Etape 4 : on pose un écouteur d'event quand on scroll à 300px
// Etape 5 : on veut interdire les adresses emails "fausses" dans le formulaire d'inscription et afficher un message d'erreur
//------------------------------------------------------------------

//----------------------- 2EME PROGRAMME -------------------------------------------
// Etape 1 : on va créer une fonction "initiale" qui va cacher ou afficher le formulaire d'inscription
// Etape 2 : on pose un ecouteur d'event sur "newsletter" en haut du menu pour faire apparaitre le formulaire d'inscription
// Etape 3 : on pose un ecouteur d'event sur la croix du formulaire pour faire disparaitre le formulaire d'inscription à la newsletter
// Etape 4 : on pose un écouteur d'event quand on scroll à 300px
// Etape 5 : on veut interdire les adresses emails "fausses" dans le formulaire d'inscription et afficher un message d'erreur
//------------------------------------------------------------------

// Clic sur "Newsletter" et l'enveloppe de la balise "a" du menu en haut

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

// Variante avec Queryselector sur une seule ligne avec addEventListener:
/* document.querySelector("#menu-newsletter").addEventListener("click", (e) => {
  e.preventdefault();
  console.log("avec queryselector");
});
 */

// -----@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@--------------

// ----------------           Etape 1        ----------------------------

// tableau des noms de domaines interdits dans le formulaire d'inscription à la newletter

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

// On créé une fonction "initiale" qui va permettre d'afficher ou cacher le formulaire d'inscription de la newsletter
// Nom de cette fonction = "initiale()"

// On cible le formulaire d'inscription à la newsletter dont la class est "newsletter"
let formNewsletter = document.querySelector(".newsletter");

function initiale() {
  // On cible "newsletter" dans le menu en haut à droite de la page d'accueil et on ajoute un evenement et une fonction
  document
    .getElementById("menu-newsletter")
    .addEventListener("click", clickFormNewsletter);
  // On cible la croix du formulaire d'inscription et on ajoute un evenement et une fonction
  document
    .querySelector(".newsletter__close")
    .addEventListener("click", clickFormNewsletter);

  window.addEventListener("scroll", scrollFormNewsletter);
}

// #########  CREATION DE LA FONCTION clickFormNewsletter ##########################################

// On rajoute la class "newsletter--hidden" dans le fichier HTML au niveau de la balise du formulaire d'inscription à la newsletter

// On créé une fonction qui va afficher ou cacher le formulaire d'inscription à la newsletter
// Nom de la fonction = clickFormNewsletter

// On créé une variable qui permet de savoir si le formulaire est affiché ou pas
// Si vrai (true) : le formulaire a été fermé - l'utilisateur a cliqué sur la croix du formulaire (dont la class est "newletter__close")
let formNewsletterClose = false;

function clickFormNewsletter(e) {
  event.preventDefault();

  // on veut savoir l'utilisateur a cliqué la croix du formulaire d'inscription de la newsletter" dont la  class est = "newsletter__close" ; si oui la formulaire disparait et la variable formNewsletterClose est = true
  // On récupère le true or false avec le "target" et  "contains"
  if (e.target.classList.contains("newsletter__close")) {
    // la réponse est oui / vrai on a cliqué sur la croix
    formNewsletterClose = true;
    // du coup, on ajoute la class "newsletter--hidden" qui va permettre de cacher le formulaire d'inscription à la newsletter
    formNewsletter.classList.add("newsletter--hidden");
  } else {
    // si n'a pas cliqué sur la croix, on retire la class "newsletter--hidden " : le formulaire apparait
    formNewsletter.classList.remove("newsletter--hidden");
  }
}

// ##### CREATION DE LA FONCTION scrollFormNewsletter ######################################

// On créé une fonction qui va faire apparaitre le formulaire d'inscription à la newsletter quand on scroll à plus de 700 pixel

function scrollFormNewsletter() {
  // On travaille sur windon directement donc pas besoin du paramètre event
  // Condition pour que le formulaire apparaisse lors du scroll
  if (window.scrollY > 700 && formNewsletterClose === false) {
    // On fait apparaitre le formulaire en retirant la class "newsletter--hidden" qui cachait le formulaire
    formNewsletter.classList.remove("newsletter--hidden");
  }
}

initiale();

// ----------------           Etape 2       ----------------------------

//On fait apparaitre le formulaire d'inscription à la newsletter quand on clique sur "newsletter" dans le menu

/* On cible l'élément choisi : newsletter du menu en haut :
const newsletterClick = document.getElementById("menu-newsletter");
// On ajoute un écouteur d'évènement type "click" (on aurait pu mettre au survol de la souris - mouseover) à notre cible :
newsletterClick.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("j'appuie sur newsletter en haut du menu");
  // On fait apparaitre le formulaire en rajoutant la class "newletter--hidden" qui ne cache plus le formulaire
  formNewsletter.classList.remove("newsletter--hidden");
});
*/

// ----------------           Etape 3      ----------------------------

// On fait disparaître le formulaire en cliquant sur la croix du formulaire: on pose un ecouteur d'event sur la croix du formulaire

// On cible la croix du formulaire :
//const buttonCLoseForm = document.querySelector(".newsletter__close");
//console.log(buttonCLoseForm);

// On pose un écouteur d'event sur la croix
//buttonCLoseForm.addEventListener("click", (e) => {
//console.log("j'appuie sur la croix du formulaire d'inscription");

//formNewsletter.classList.add("newsletter--hidden");
//});

// ----------------           Etape 4      ----------------------------

// On fait apparaitre le formulaire quand on scroll la page d'accueil à 700px

/* On pose un écouteur sur la fenêtre pour écouteur l'event "srcoll":
window.addEventListener("scroll", scrollForm);

// On fait une fonction pour cibler le scroll de la page à 300px :
function scrollForm(e) {
  if (window.scrollY > 700) {
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
} */
