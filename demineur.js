// Ensemble d'images de taille 16x16 pixels.  Chaque element du
// tableau images correspond a une image d'une tuile du jeu demineur.
// Une image est representee par un tableau des rangees de pixels.
// Chaque rangee est un tableau contenant l'index de la couleur dans
// le tableau colormap.

var images =
    [
     [ // 0
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 1
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      [8,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
      [8,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 2
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,2,2,2,2,2,2,2,2,0,0,0,0],
      [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
      [8,0,0,2,2,2,0,0,0,0,2,2,2,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0],
      [8,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0],
      [8,0,0,0,0,0,2,2,2,2,2,0,0,0,0,0],
      [8,0,0,0,2,2,2,2,2,0,0,0,0,0,0,0],
      [8,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0],
      [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
      [8,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 3
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],
      [8,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
      [8,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0],
      [8,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0],
      [8,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],
      [8,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 4
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,4,4,4,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,4,4,4,0,4,4,4,0,0,0,0],
      [8,0,0,0,4,4,4,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,4,4,4,0,0,4,4,4,0,0,0,0],
      [8,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0],
      [8,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0],
      [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 5
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
      [8,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,5,5,5,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,5,0,0,0],
      [8,0,0,5,5,5,5,5,5,5,5,5,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 6
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0],
      [8,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0],
      [8,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,6,6,6,6,6,6,6,6,6,0,0,0,0],
      [8,0,0,6,6,6,6,6,6,6,6,6,6,0,0,0],
      [8,0,0,6,6,6,0,0,0,0,6,6,6,0,0,0],
      [8,0,0,6,6,6,0,0,0,0,6,6,6,0,0,0],
      [8,0,0,6,6,6,6,6,6,6,6,6,6,0,0,0],
      [8,0,0,0,6,6,6,6,6,6,6,6,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 7
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,7,7,7,7,7,7,7,7,7,7,0,0,0],
      [8,0,0,7,7,7,7,7,7,7,7,7,7,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,7,7,7,0,0,0],
      [8,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0],
      [8,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // 8
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
      [8,0,0,8,8,8,8,8,8,8,8,8,8,0,0,0],
      [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
      [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
      [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
      [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
      [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
      [8,0,0,8,8,8,0,0,0,0,8,8,8,0,0,0],
      [8,0,0,8,8,8,8,8,8,8,8,8,8,0,0,0],
      [8,0,0,0,8,8,8,8,8,8,8,8,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // mine
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
      [8,0,0,0,7,0,7,7,7,7,7,0,7,0,0,0],
      [8,0,0,0,0,7,7,7,7,7,7,7,0,0,0,0],
      [8,0,0,0,7,7,9,9,7,7,7,7,7,0,0,0],
      [8,0,0,0,7,7,9,9,7,7,7,7,7,0,0,0],
      [8,0,7,7,7,7,7,7,7,7,7,7,7,7,7,0],
      [8,0,0,0,7,7,7,7,7,7,7,7,7,0,0,0],
      [8,0,0,0,7,7,7,7,7,7,7,7,7,0,0,0],
      [8,0,0,0,0,7,7,7,7,7,7,7,0,0,0,0],
      [8,0,0,0,7,0,7,7,7,7,7,0,7,0,0,0],
      [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0],
      [8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
     ],
     [ // mine sur fond rouge
      [8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
      [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
      [8,3,3,3,7,3,7,7,7,7,7,3,7,3,3,3],
      [8,3,3,3,3,7,7,7,7,7,7,7,3,3,3,3],
      [8,3,3,3,7,7,9,9,7,7,7,7,7,3,3,3],
      [8,3,3,3,7,7,9,9,7,7,7,7,7,3,3,3],
      [8,3,7,7,7,7,7,7,7,7,7,7,7,7,7,3],
      [8,3,3,3,7,7,7,7,7,7,7,7,7,3,3,3],
      [8,3,3,3,7,7,7,7,7,7,7,7,7,3,3,3],
      [8,3,3,3,3,7,7,7,7,7,7,7,3,3,3,3],
      [8,3,3,3,7,3,7,7,7,7,7,3,7,3,3,3],
      [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
      [8,3,3,3,3,3,3,3,7,3,3,3,3,3,3,3],
      [8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
     ],
     [ // tuile non-devoilee
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0],
      [9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,9,0,0,0,0,0,0,0,0,0,0,0,0,8,8],
      [9,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]
    ],
    [ // 12 Test
      [0]
    ],
    [ // 13 Test
      [9,9],
      [9,9]
    ],
    [ // 14 Test
      [7,7],
      [7,7]
    ],
    [ // 15 Test
      [1,3,2],
      [4,5,6]
    ],
    [ // 16 Test
      [0]
    ]
  ];

// Ensemble de couleurs utilisees dans la definition des images
// ci-dessus.  A tout endroit ou le nombre c apparait dans une image,
// la couleur RGB du pixel est colormap[c].

var colormap =
    [
     { r: 192, g: 192, b: 192 },
     { r:   0, g:   0, b: 255 },
     { r:   0, g: 128, b:   0 },
     { r: 255, g:   0, b:   0 },
     { r:   0, g:   0, b: 128 },
     { r: 128, g:   0, b:   0 },
     { r:   0, g: 128, b: 128 },
     { r:   0, g:   0, b:   0 },
     { r: 128, g: 128, b: 128 },
     { r: 255, g: 255, b: 255 }
    ];

// IFT1015 - TP1 - Démineur
// Auteurs: Francis Boudreau et Laura Bégin
// 2018-11-05

// Ce programme est une variante simplifiee du jeu de demineur.

// La fonction afficherImage affiche a l'ecran a la coordonnee (x,y) l'image
// indiquee par le parametre image qui utilise les couleurs definies par le
// parametre colormap.

var afficherImage = function (x, y, colormap, image) {

  var hauteur = image.length; // hauteur de l'image en nombre de rangees de
                              // pixels.
  var largeur = image[0].length; // largeur de l'image en nombre de colonnes
                                 // pixels.

  // Analyse un des douze elements du tableau image qui represente chacun une
  // image. Les 256 entiers de l'image (16 de hauteur, 16 de largeur) indiquent
  // l'index de la couleur dans le tableau colormap qui sera affichee par un
  // pixel a la coordonnee (x,y).

  for(var i=0; i<=largeur-1; i++) {
    for(var j=0; j<=hauteur-1; j++) {
      setPixel(x+i,y+j,colormap[image[j][i]]); // Change le contenu du pixel
                                               // a la coordonnee (x,y) par une
                                               // couleur composee de trois
                                               // champs RGB definis selon le
                                               // tableau colormap.
      }
    }
};

// La fonction attendreClic attend que le bouton de souris soit appuye pour
// retourner la tuile sur laquelle le pointeur a clique.

var attendreClic = function () {

    do {
        // getMouse retourne un enregistrement qui contient trois champs : x, y
        // et down. Les champs x et y indiquent la coordonnee du pixel pointe
        // par la souris et le champs down indique true si le bouton de souris
        // est appuye.

        var souris = getMouse();
        pause(0.01); // ne pas demander trop souvent l'etat de la souris.
    } while (souris.down == false);

    var tuile = [Math.floor(souris.x / images[1].length),
                 Math.floor(souris.y / images[1][1].length)];
    return (tuile);
};

// La fonction placerMines retourne un tableau ou chaque element indique s'il
// y a une mine sous la tuile a cette coordonnee par un booleen.

var placerMines = function (largeur, hauteur, nbMines, x, y) {

  var i,j; // Coordonnee en largeur et en hauteur;
  var nbPlace = 0; // Nombre de mines placees

  var mines = Array(largeur); // Creation du tableau a deux dimensions.
  for (var i=0; i<largeur; i++) {
    mines[i] = Array(hauteur);
  }

  mines[x][y] = false; // Assignation de la valeur false a la premiere case
                       // cliquee pour ne pas qu'une mine lui soit attribuee.
  while (nbPlace < nbMines && nbPlace < largeur*hauteur-1) {
    i = Math.floor(Math.random() * largeur);
    j = Math.floor(Math.random() * hauteur); // Prend une case aleatoire.

    if (mines[i][j] == null) {
      mines[i][j] = true; // Place une mines s'il n'y en a pas dans la case.
      nbPlace++;
    }
  }

  for (var i=0; i<largeur; i++) {
    for (var j=0; j<hauteur; j++) {
      if (mines[i][j] != true) {
        mines[i][j] = false; // Assigne false aux cases qui n'ont pas de mine.
      }
    }
  }
  return(mines);
};

// La fonction afficherTuiles simule un écran dans l'interface CodeBoot pour
// afficher le jeu selon le nombre de cases souhaitees en hauteur et en
// largeur et selon la largeur et la hauteur souhaitees pour chaque case.

var afficherTuiles = function (largeurCases, hauteurCases, largeur, hauteur) {

  setScreenMode(largeur * largeurCases, hauteur * hauteurCases);

    // Affiche un jeu de depart de cases grises.

    for(var i=0; i<hauteur*hauteurCases; i+=hauteurCases) {
        for(var j=0; j<largeur*largeurCases; j+=largeurCases) {
            afficherImage(j,i,colormap,images[11]);
        }
    }
};

// La fonction compterMines retourne le nombre de mines qui se trouvent dans
// les cases adjacentes a la derniere qui a ete cliquee.

var compterMines = function (mines, x, y, largeur, hauteur) {

  var nbMinesAdj=0; // Nombre de mines dans les cases adjacentes.

  for (var i=x-1; i<=x+1; i++) {
    for(var j=y-1; j<=y+1; j++) {

            if(i>=0 && i<largeur && j>=0 && j<hauteur) {
                if(mines[i][j] == true)
                nbMinesAdj+=1;
            }
        }
    }
    return(nbMinesAdj);
};

// La fonction devoilerCasesAdj devoile les 8 cases autour de la case cliquee.

var devoilerCasesAdj = function (x, y, largeur, hauteur, mines, casesDevoile) {

  var nbMines; // Nombre de mines qui se trouvent dans les cases adjacentes.

  for (var i=x-1; i<=x+1; i++) {
    for (var j=y-1; j<=y+1; j++) { // Analyse toutes les cases adjacentes.

      if (i>=0 && i<largeur && j>=0 && j<hauteur) {
        nbMines = compterMines(mines,i,j,largeur,hauteur);
        casesDevoile[i][j] = true; // Met la valeur true aux elements du
                                   // tableau des casesDevoile qui representent
                                   // les cases adjacentes qui seront devoilees

        if (nbMines == 0) {
          // Affiche une tuile grise sur les cases qui n'ont pas de mines
          // adjacentes.
          afficherImage(i*16, j*16, colormap, images[0]);
        } else {
          // Affiche une tuile correspondant aux nombres de mines adjacentes
          // a la case.
          afficherImage(i*16, j*16, colormap, images[nbMines]);
        }
      }
    }
  }
};

// La fonction ceerCasesDevoile cree un tableau booleen qui indique quelles
// cases ont ete devoilees.

var creerCasesDevoile = function (hauteur,largeur) {

  var casesDevoile = Array(largeur); // Tableau en deux dimensions ou chaque
                                     // element represente une case.

  for (var i=0; i<largeur; i++) {
    casesDevoile[i] = Array(hauteur);
    }

  for (var i=0; i<=largeur-1; i++) {
    for (var j=0; j<=hauteur-1; j++) {
      casesDevoile[i][j] = false; // Avant le premier tour, tous les elements
                                  // sont faux car aucune case n'a encore ete
                                  // devoilee.
    }
  }
  return casesDevoile;
};

// La fonction verifierCasesDevoile compte le nombre de cases devoilees pour
// savoir si le joueur a gagne la partie (en cliquant sur toutes les tuiles
// sans mines).

var verifierCasesDevoile = function (casesDevoile, nbMines, largeur, hauteur) {

  var nbCasesDevoilee = 0; // Nombre total de cases devoilees.

  for (var i=0; i<largeur; i++) {
    for (var j=0; j<hauteur; j++) {

      if (casesDevoile[i][j] == true) {
        nbCasesDevoilee++;
      }
    }
  }

  if ((largeur*hauteur)-nbMines == nbCasesDevoilee) {
    return true; // Retourne true si toutes les cases du jeu excluant les mines
                 // ont ete devoilees.
    } else {
      return false;
    }
};

// La fonction devoilerMinesFin affiche toutes les mines du jeu lorsque
// le joueur perd la partie en cliquant sur une mine.

var devoilerMinesFin = function (mines, largeur, hauteur, x, y) {

  for (var i=0; i<largeur; i++) {
    for (var j=0; j<hauteur; j++) {

      if (mines[i][j] == true) {

        // Affiche l'image mine sur fond gris pour toutes les tuiles du jeu
        // ou il y a des mines, sauf celle qui a ete cliquee.

        afficherImage(i*16, j*16, colormap, images[9]);

        // Affiche l'image mine sur fond rouge sur la tuile cliquee.

        afficherImage(x*16, y*16, colormap, images[10]);
      }
    }
  }
};

// La fonction demineur s'occupe du deroulement du jeu.

var demineur = function (largeur, hauteur, nbMines) {

  var finPartie = false; // Indique si la partie est terminee ou non.
  var partieGagnee = false; // Indique si la partie est gagnee ou non.
  var largCases = images[1].length; // Largeur des cases en nombre de colonnes
                                    // de pixels.
  var hautCases = images[1][1].length; // Hauteur des cases en nombre de
                                       // rangees de pixels.
  var nbMinesAdj; // Nombre de mines adjacentes a la case.
  var premierTour = true; // Vrai seulement au premier tour.
  var casesDevoile = creerCasesDevoile(hauteur,largeur); // Tableau sur l'etat
                                                         // des cases.
  var souris; // Prendra la coordonnee et l'etat de la souris.
  afficherTuiles(largCases,hautCases,largeur,hauteur); // Simuler l'ecran.

  while(finPartie == false) {

    souris = attendreClic();

    if (premierTour == true) {

      // Place les mines dans le jeu seulement apres le premier clic.

      var mines = placerMines(largeur, hauteur, nbMines, souris[0], souris [1]);
      premierTour = false;
    }

    if (mines[souris[0]][souris[1]] == false) { // Si le joueur ne clique pas
                                                // sur une mine.
        nbMinesAdj = compterMines(mines,souris[0],souris[1],largeur,hauteur);

        // Affiche le nombre de mines adjacentes dans la tuile.

        if(nbMinesAdj != 0) {
          afficherImage(souris[0]*largCases, souris[1]*hautCases,
                        colormap, images[nbMinesAdj]);
          casesDevoile[souris[0]][souris[1]] = true;
        } else {

          // Devoiler les tuiles adjacentes si la case cliquee n'est pas
          // adjacente a une mine.

          devoilerCasesAdj(souris[0], souris[1], largeur, hauteur, mines,
                           casesDevoile);
        }

    } else { // Si le joueur clique sur une mine, affiche la tuile mine sur
             // fond rouge et termine la partie.

        afficherImage(souris[0]*largCases,souris[1]*hautCases,
                      colormap,images[10]);
        finPartie = true;
    }

    partieGagnee = verifierCasesDevoile(casesDevoile, nbMines,
                                        largeur, hauteur);

    if (partieGagnee == true) {
      finPartie = true;
    }
  }

  devoilerMinesFin(mines, largeur, hauteur, souris[0], souris[1]);
  pause(1); // Pour laisser le temps a toutes les mines de se devoiler.

  if (partieGagnee == true) {
    alert("Vous avez gagne!");
  } else {
    alert("Dommage, vous avez perdu.");
  }
};

var testDemineur = function () {

// Tests de afficherImage.

  setScreenMode(1,1);
  afficherImage(0, 0, colormap, images[12]);
  assert(exportScreen() == "#c0c0c0");

  setScreenMode(3,2);
  afficherImage(1, 0, colormap, images[13]);
  assert(exportScreen() == "#000000#ffffff#ffffff\n#000000#ffffff#ffffff");

  setScreenMode(2,2);
  afficherImage(0, 0, colormap, images[14]);
  assert(exportScreen() == "#000000#000000\n#000000#000000");

  setScreenMode(3,2);
  afficherImage(0, 0, colormap, images[15]);
  assert(exportScreen() == "#0000ff#ff0000#008000\n#000080#800000#008080");

  setScreenMode(2,2);
  afficherImage(1, 1, colormap, images[16]);
  assert(exportScreen() == "#000000#000000\n#000000#c0c0c0");

// Tests de placerMines.

  assert(placerMines(2, 2, 3, 0, 0) == "false,true,true,true");
  assert(placerMines(2, 2, 3, 1, 0) == "true,true,false,true");
  assert(placerMines(2, 3, 5, 1, 1) == "true,true,true,true,false,true");
  assert(placerMines(2, 2, 4, 0, 0) == "false,true,true,true");
  assert(placerMines(2, 2, 1, 0, 0) == "false,true,false,false" ||
                                       "false,false,true,false" ||
                                       "false,false,false,true");
};

testDemineur();
