// Projet Tripodvisor : appli()

// Création fonction globale

const appli = {
  // -------------------Variables-------------------------------
  // On cible le formulaire d'inscription
  formNewsletter: document.querySelector(".newsletter"),
  // On cible l'élément choisi : newsletter du menu en haut
  newsletterClick: document.getElementById("menu-newsletter"),
  // On cible la croix du formulaire :
  buttonCLoseForm: document.querySelector(".newsletter__close"),

  // -----------------Fonction de démarrage de l'application--------------------

  // On regroupe les écouteurs d'event et les fonctions dans la fonction init()

  init: function () {
    // On appelle la fonction pour cacher le formulaire d'inscription
    appli.hiddenForm();

    // On pose un écouteur pour faire apparaitre le formulaire quand on clique sur le menu dans "newsletter"
    appli.newsletterClick.addEventListener("click", appli.clickNewsletterMenu);

    // On pose un écouteur pour fermer le formulaire quand on clique sur la croix
    appli.buttonCLoseForm.addEventListener("click", appli.closeForm);

    // On pose un écouteur sur la fenêtre de notre navigateur pour l'event scroll
    window.addEventListener("scroll", appli.scrollForm);
  },

  // ----------------------------Fonctions---------------------------------------

  // Fonction N°1 - pour cacher le formulaire d'inscription à la newsletter qui apparaît par défault sur la page d'accueil
  hiddenForm: function () {
    appli.formNewsletter.classList.add("newsletter--hidden");
  },

  //Fonction N°2 - pour faire apparaitre le formulaire d'inscription à la newsletter quand on clique sur "newsletter" en haut du menu
  clickNewsletterMenu: function (e) {
    e.preventDefault();
    appli.formNewsletter.classList.remove("newsletter--hidden");
  },

  // Fonction N°3 - On pose un écouteur d'event sur la croix
  closeForm: function (e) {
    appli.formNewsletter.classList.add("newsletter--hidden");
  },

  // On fait une fonction pour cibler le scroll de la page à 300px :
  scrollForm: function (e) {
    if (window.scrollY > 500) {
      appli.formNewsletter.classList.remove("newsletter--hidden");
    }
  },
};

// Je lance l'application init()
appli.init();
