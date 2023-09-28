let potJeton = 21;
const joueur1 = {
  de1 : 0,
  de2 : 0,
  de3 : 0,

}

const verifCombo = (de3x) => {

  // for(let elem of combo) {
     
  //   let resultVerif = {}
  //   if(parseInt(de3x) === parseInt(elem["id"])) {
  //     console.log("elem ID combo :" , elem["id"])
  //     resultVerif.result  = elem
  //     resultVerif.message = `vous avez obtenu ${elem["name"]} qui vaut ${elem["nbJeton"]} jetons`
  //     return resultVerif
  //      //
  //   }
  //   else {
  //     resultVerif.message = `vous avez obtenu une combinaison basique qui vaut 1 jeton`
  //     return resultVerif
  //   }
  // }
  let compaCombo =  combo.filter((x) => x.id === de3x  )
  console.log("compacombo : " , compaCombo)

}
  







const jouerDe = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max-min)) + min;
}


const charge = (joueur) => {
  
  let combinaison = []
  joueur["de1"] = jouerDe(1,7)
  joueur["de2"] = jouerDe(1,7)
  joueur["de3"] = jouerDe(1,7)
  console.log("après : ", joueur["de1"])
  console.log("après : ", joueur["de2"])
  console.log("après : ", joueur["de3"])
  combinaison.push(joueur["de1"]);
  combinaison.push(joueur["de2"]);
  combinaison.push(joueur["de3"]);

  console.log("raw :", combinaison)
  let sortedJoined = parseInt(combinaison.sort().reverse().join(''))
  joueur.sortedCombo = sortedJoined
  
  console.log("sorted :", sortedJoined)


  joueur.resultatTxt = verifCombo(parseInt(sortedJoined))

  console.log(joueur)

  return joueur

}

console.log(joueur1)






