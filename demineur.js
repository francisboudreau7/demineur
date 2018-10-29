// INF1015 -TP1-Démineur
//Auteurs: Francis Boudreau et Laura Bégin
//2018-11-05
load("untitled7.js");
var afficherImage = function (x, y, colormap, image) {
var hauteur=image.length;
var largeur=image[1].length;
for(var i=0;i<=hauteur-1;i++){
    
    for(var j=0;j<=largeur-1;j++){
    setPixel(x+i,y+j,colormap[image[j][i]]);
    }
}
};
var attendreClic = function () {

    do {
        var souris = getMouse();
        pause(0.01);
    } while (souris.down == false);
    return (souris.x, souris.y);

};
var placerMines = function (largeur,hauteur,nbMines, x, y) {
var largeurCase= Math.floor(largeur/image.length);
var hauteurCase=Math.floor(hauteur/image[1].length);
    var mines= Array(largeurCase,hauteurCase);
while(nbMine>0){
var case = {x:Math.floor(Math.random()*largeurCase),y:Math.floor(Math.random()*hauteurCase)}
if(mines[case.x][case.y]==false)
&& Math.floor(x/largeurCase)!=case.x 
&&Math.floor(y/hauteurCase)!=case.y{
    mines[case.x][case.y]=true;
    nbMines-=1;
}
}
    
};

var demineur = function (largeur, hauteur, nbMines) {};

setScreenMode(largeur, hauteur);
attendreClic();
placerMines(largeur,hauteur,nbMines, x, y);

var testDemineur = function () {};