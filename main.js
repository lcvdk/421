let potJeton = 21;
const joueur1 = {
  de1 : 0,
  de2 : 0,
  de3 : 0,

}

const joueur2 = {
  de1 : 0,
  de2 : 0,
  de3 : 0,

}

const verifCombo = (de3x) => {
  let compaCombo =  combo.filter((x) => x.id === de3x  )
  console.log("compacombo : " , compaCombo)
  if(compaCombo.length === 0)  {
    let infoDe = {};
    infoDe.id = de3x;
    infoDe.name = `une combinaison basique`;
    infoDe.nbJeton = 1;
    compaCombo.push(infoDe)
    return compaCombo 
  }
    else return compaCombo
}
  







const jouerDe = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min)) + min;
}


const charge = (joueur) => {
  
  let combinaison = []
  //jouer les 3 dés
  joueur["de1"] = jouerDe(1,7)
  joueur["de2"] = jouerDe(1,7)
  joueur["de3"] = jouerDe(1,7)
  //check des résultats
  console.log("après : ", joueur["de1"])
  console.log("après : ", joueur["de2"])
  console.log("après : ", joueur["de3"])
  //ajoute les valeurs de chaque dé dans le tableau combinaison
  combinaison.push(joueur["de1"]);
  combinaison.push(joueur["de2"]);
  combinaison.push(joueur["de3"]);
  console.log("raw :", combinaison)
  
  //copie du tableau trié de manière décroissante, et fusionné en un nombre
  let sortedJoined = parseInt(combinaison.sort().reverse().join(''))
  
  //ajout du nombre a l'attibut de l'objet joueur
  joueur.sortedCombo = sortedJoined
  console.log("sorted :", sortedJoined)

  // 
  joueur.resultatTxt = verifCombo(sortedJoined)

  console.log(joueur)

  return joueur

}

console.log(joueur1)






