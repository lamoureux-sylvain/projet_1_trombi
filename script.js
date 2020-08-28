// script pour changement des photos automatique
var user_keys = [],
    konami = '38,38,40,40,37,39,37,39,66,65';
document.onkeydown = function(e){
  user_keys.push(e.keyCode)

  if (user_keys.toString().indexOf(konami) >= 0) {

    let change = document.getElementsByClassName("villani")
    for (i=0; i < change.length; i++ ) {
      change[i].src = "photos/CVillani.webp";
      }
    
    let change1 = document.getElementsByClassName("thuglife")
    for (i=0; i < change1.length; i++ ) {
      change1[i].src = "photos/b2oba.webp";
      }

    let change2 = document.getElementsByClassName("poincare")
    for (i=0; i < change2.length; i++ ) {
    change2[i].src = "photos/poincare.webp";
    }

    user_keys = [];
  }
}

// script pour ouvrir la pop up selon l'id du profil
function info_page(id) {
  id = id+"ip";
  var elmt = document.getElementById(id);
  var blur = document.getElementById("blur");
  
  blur.style.visibility="visible";
  elmt.style.visibility="visible";
}