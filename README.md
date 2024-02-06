# Trip O'dvisor :airplane:

Salut jeune développeur. Il paraît que tu as des tripes ? Alors ce projet est fait pour toi !
On a un projet assez révolutionnaire de conseils touristiques pour aider les gens à organiser leurs voyages. On y trouvera des avis, des guides, des bons plans sur les destinations les plus recherchées, les restaurants les plus fins, les hôtels les plus luxueux, etc.

Le projet est déjà bien avancé. Tu trouveras l'intégration HTML/CSS  de la page des voyages directement dans le fichier `index.html`.

Pimpant, non ?

Oui c'est beau, mais ça manque de pep's. Moi je veux que ça bouge ! Il reste plein de fonctionnalités à implémenter ! On te propose de commencer par la newsletter.

## Newsletter

Notre intégrateur nous a fait un super encart de newsletter (en bas à droite ;)). Ça attire l'oeil et ça rapporte plein d'emails, c'est super !
Par contre, je veux que cet encart n'apparaisse que si on clique sur le lien `newsletter` en haut de l'écran. Et qu'il se ferme si on clique sur la croix, c'est évident !

Après si t'as un peu de temps libre, je veux bien qu'il s'affiche aussi si on "scrolle" un peu dans la page. Par exemple, dès qu'on a scrollé 300px, hop ! Apparition inexpliquée de la newsletter !



<details>
  <summary>Un peu d'aide ? On te conseille quand même de rechercher un peu avant d'ouvrir cette aide</summary>
  
  Tu peux suivre les étapes suivantes : 
  - Commence par cacher l'encart par défaut. Si tu regarde attentivement, il te suffit d'ajouter une classe à l'élément dans le fichier HTML.
  - Ajoute un écouteur d'évènements sur le lien Newsletter dans le header. 
    - Attention au selecteur ! 
    - Pense à empêcher la redirection également (ie, le comportement par défaut d'un lien hypertexte)
  - Dans la fonction associée à l'évènement, déclenche l'affichage de l'élément (en lui retirant la classe, peut être ?).
  - Enfin, répete ces étapes pour la fermeture ;). 

</details>

## Bonus 

Alors ok, notre encart fonctionne. Mais, on ne veut que de véritables emails dans notre encart Newsletter ! 
Des petits malins s'amusent à mettre des [emails jetables](https://yopmail.com/fr/) pour ne pas recevoir nos beaux emailings. Donc il faudrait afficher un message d'erreur si l'utilisateur a inscrit une adresse jetable. 
En gros, si l'adresse email inscrite contient une des adresses données ci-dessous, alors on affiche un message d'erreur.

<details>
  <summary>Liste des domaines d'emails jetables</summary>
  
  ```js
  const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    '@yopmail.net',
    '@cool.fr.nf',
    '@jetable.fr.nf',
    '@courriel.fr.nf',
    '@moncourrier.fr.nf',
    '@monemail.fr.nf',
    '@monmail.fr.nf',
    '@hide.biz.st',
    '@mymail.infos.st',
  ]
  ```
</details>


## Bonus, le retour
Tu as fini ? N'hésite pas à rajouter des fonctionnalités, il reste plein de choses à faire ! Voici une liste de possibilités non exhaustive sans ordre particulier : 

- Tu remarqueras que le slider n'est pas tout à fait terminé, n'hésite pas à t'y coller.
- Le changement de thème non plus d'ailleurs 🤔 (mais le CSS des thèmes a l'air d'avoir été fait, lui).
- Le filtrage des commentaire en bas de page n'est pas très fonctionnel non plus.
- N'importe quelle _feature_ qui te ferait envie :). 

