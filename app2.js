// ###########################    PROJET TRIPODVISOR        ###################################### //

/* #### On veut que le formulaire d'inscription à la newsletter n'apparaisse que si on clique sur le lien "newsletter" dans le menu du haut ########  */

/*################################################################ */
// Dans le fichier HTML, on rajoute un "id" (idendtifiant unique) au niveau du menu newsletter "id = menu-newsletter" pour pouvoir le distinguer des autres item du menu et bien le cibler !
/*################################################################ */

//----------------------- 2EME METHODE && BONUS -------------------------------------------
// Etape 1 : on va créer une fonction "initiale" qui va cacher ou afficher le formulaire d'inscription
// Etape 2 : on pose un ecouteur d'event sur "newsletter" en haut du menu pour faire apparaitre le formulaire d'inscription
// Etape 3 : on pose un ecouteur d'event sur la croix du formulaire pour faire disparaitre le formulaire d'inscription à la newsletter
// Etape 4 : on pose un écouteur d'event quand on scroll à 300px
// Etape 5 : on veut interdire les adresses emails "fausses" dans le formulaire d'inscription et afficher un message d'erreur
// Etape 6 : on met en place le slider (carrousel)
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

const formNewsletter = document.querySelector(".newsletter");

const forbiddenDomains = [
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

function initiale() {
  // Ecouteur d'event sur "newsletter" du menu en haut à droite
  document
    .getElementById("menu-newsletter")
    .addEventListener("click", clickFormNewsletter);

  // Ecouteur d'event sur la croix du formulaire d'inscription de la newsletter
  document
    .querySelector(".newsletter__close")
    .addEventListener("click", clickFormNewsletter);

  // Ecouteur d'event quand on scroll
  window.addEventListener("scroll", scrollFormNewsletter);

  //Ecouteur d'event quand on valide le formulaire d'inscription à la nwsletter
  document
    .getElementById("newsletter--form")
    .addEventListener("submit", submitForm);
}

// #########  CREATION DE LA FONCTION QUI FAIT APPARAITRE LE FORMULAIRE QUAND ON CLIQUE SUR NEWSLETTER DANS LE MENU EN HAUT A DROITE ET QUI FAIT DISPARAITRE LE FORMULAIRE QUAND ON CLIQUE SUR LA CROIX   ################

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

// ##### CREATION DE LA FONCTION QUI FAIT APPARAITRE LE FORMULAIRE LORS DU SCROLL ########################

// On créé une fonction qui va faire apparaitre le formulaire d'inscription à la newsletter quand on scroll à plus de 700 pixel

function scrollFormNewsletter() {
  // On travaille sur windon directement donc pas besoin du paramètre event
  // Condition pour que le formulaire apparaisse lors du scroll
  if (window.scrollY > 700 && formNewsletterClose === false) {
    // On fait apparaitre le formulaire en retirant la class "newsletter--hidden" qui cachait le formulaire
    formNewsletter.classList.remove("newsletter--hidden");
  }
}

// ######################################        BONUS 1       ###########################################

// ######## CREATION DE LA FONCTION QUI CONTROLE LES NOM DE DOMAINE DES ADRESSES EMAILS ###################

// Function quand tu valides le formulaire d'inscription à la newsletter
function submitForm(e) {
  event.preventDefault();
  console.log(e.target[0].value);
  const mailUser = e.target[0].value;
  const domainUser = "@" + mailUser.split("@")[1];
  console.log(domainUser);
  const badMail = testDomains(domainUser);
  console.log(badMail);
  if (badMail) {
    alert("Votre adresse n'est pas conforme !");
  } else {
    alert("Vous êtes bien abonné à notre newsletter !");
  }
}

// On vérifie si l'email du l'user n'est pas interdit
// On créé une fonction qui teste les nom de domaines
function testDomains(emailExtension) {
  // pour chaque nom de domaine de la liste forbiddenDomains (liste des domaines interdit)
  for (const extension of forbiddenDomains) {
    // si un nom de domaine des users est inclus dans cette liste
    if (emailExtension.includes(extension)) {
      // on retroune vrai
      return true;
      console.log(emailExtension);
    }
    //sinon on retourne faux
    return false;
    console.log(e.target.value);
  }
}

// ######################################        BONUS 2       ###########################################
// #############################  MISE EN PLACE DU SLIDESHOW   ###########################################

// On s'intéresse à l'élément slider - le carrousel
// class de l'élément slider = "slider"
// On va rajouter 4 images dans le slider
// On a 2 chevrons sur lequel on peut cliquer et afficher une nouvelle image
// On va poser des events sur les 2 chevrons type "click" et on affichera une image différente à chaque click sur les chevrons
// Un chevron a gauche (précédent) et un à droite (suivant)

// Il faut rajouter manuellement les images en html directement dans le fichier html au niveau de la balise slider

// On pointe la balise slider (le carroussel)
let slider = document.querySelector(".slider");

// Fonction qui fait tourner le carroussel
function sliderShow() {
  // On pointe les boutons "chevrons"
  let chevrons = slider.querySelectorAll(".slider__btn");

  // chevrons de gauche = chevrons[0] et droite = chevrons[1]

  // On pose un ecouteur d'evenment quand on click sur les 2 boutons
  chevrons[0].addEventListener("click", clickSliderButton);
  chevrons[1].addEventListener("click", clickSliderButton);
}

// ####################   Pose click sur chevron de gauche (précédent)   #################

// On créé une fonction pour changer les images par la gauche

// On créé une variable pour l'image courante
let indexImageCourent = 0;

// On pointe toutes les images du slide-show
let images = slider.querySelectorAll(".slider__img");

// On construit la fonction du bouton de gauche
function left() {
  // On créé une variable
  let leftImage;
  // si l'image a pour index = 0 alors notre image de gauche a pour index -1 ; car la liste des images est considérées comme un tableau
  if (indexImageCourent === 0) {
    leftImage = images.length - 1;
  } else {
    leftImage = indexImageCourent - 1;
  }
  // On va retirer la class "slider__img__current" à l'image en courante
  images[indexImageCourent].classList.remove("slider__img--current");

  // On va ajouter la class "slide__img__current" à l'image de gauche
  images[leftImage].classList.add("slider__img--current");
  indexImageCourent = leftImage;
}

// ####################   Pose click sur chevron de droite (suivant)   ######################

// On créé une fonction pour changer les images par la droite

function right() {
  let rightImage;
  if (indexImageCourent + 1 >= images.length) {
    rightImage = 0;
  } else {
    rightImage = indexImageCourent + 1;
  }

  // On retire la class "slider__img__current" a l'image en courante
  images[indexImageCourent].classList.remove("slider__img--current");
  // On ajoute la class "slider__img__current" à l'image de droite
  images[rightImage].classList.add("slider__img--current");
  indexImageCourent = rightImage;
}

// ################   Fonction pour activer les click sur les chevrons ###############

function clickSliderButton(e) {
  let direction = e.target.getAttribute("aria-label");
  console.log(direction);

  if (direction === "Suivant") {
    right();
  } else {
    left();
  }
}

// On lance la fonction du formulaire d'inscription de la newsletter
initiale();

// On lance la fonction pour faire tourner le carrousel
sliderShow();
