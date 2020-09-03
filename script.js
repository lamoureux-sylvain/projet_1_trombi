// script pour changement des photos automatique
var user_keys = [],
  konami = '38,38,40,40,37,39,37,39,66,65';
document.onkeydown = function (e) {
  user_keys.push(e.keyCode)

  if (user_keys.toString().indexOf(konami) >= 0) {

    let change = document.getElementsByClassName("villani")
    for (i = 0; i < change.length; i++) {
      change[i].src = "photos/CVillani.webp";
    }

    let change1 = document.getElementsByClassName("thuglife")
    for (i = 0; i < change1.length; i++) {
      change1[i].src = "photos/b2oba.webp";
    }

    let change2 = document.getElementsByClassName("poincare")
    for (i = 0; i < change2.length; i++) {
      change2[i].src = "photos/poincare.webp";
    }

    user_keys = [];
  }
}

// script pour ouvrir la pop up selon l'id du profil
function info_page(id) {
  if (id == "01") {
    var name = "Éléonore D'Herbigny";
    var age = "Inconnu";
    var mail = "mail: orleans@wildcodeschool.com";
    var tel = "tél: 06 58 11 24 70";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/el%C3%A9onore-bourguignon-d%E2%80%99herbigny-0654a5187/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien2;

    alert(message);
  }
  if (id == "02") {
    var name = "Cyril Simonin";
    var age = "32 ans";
    var mail = "mail: simonin.cyril91@gmail.com";
    var tel = "tél: 06 45 71 46 71";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/cyril-simonin/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien2;

    alert(message);
  }
  if (id == "03") {
    var name = "Remi Julien";
    var age = "Inconnu";
    var mail = "mail: Inconnu";
    var tel = "tél: Inconnu";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/remi-julien/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien2;

    alert(message);
  }
  if (id == "04") {
    var name="frédéric BERTRAND";
    var age="50 ans";
    var mail="mail: fredericbertrand888@gmail.com";
    var tel="tél: 06.18.09.94.27";
    var lien1="Git: https://github.com/fredericbertrand";
    var lien2="LinkedIn: https://www.linkedin.com/in/frederic-bertrand/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
  if (id == "05") {
    var name="Godefroy Courtin";
    var age="30 ans";
    var mail="mail: courtin.godefroy@gmail.com";
    var tel="tél: 06.50.87.75.90";
    var lien1="Git: https://github.com/GodefroyCourtin";
    var lien2="LinkedIn: https://www.linkedin.com/in/godefroy-courtin/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
  if (id == "06") {
    var name="Stéphanie Dumont";
    var age="35 ans";
    var mail="mail: stephanie_dumont@hotmail.fr";
    var tel="tél: 00.00.00.00.00";
    var lien1="Git: https://github.com/Stephanie89dumont";
    var lien2="LinkedIn: https://www.linkedin.com/in/dumontstephanie/";

    alert(message);
  }
  if (id == "07") {
    var name = "Sylvain ELINEAU";
    var age = "34 ans";
    var mail = "mail: elineau.sylvain@gmail.com";
    var tel = "tél: 06.70.67.77.67";
    var lien1 = "Git: https://github.com/elineau45";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/sylvain-elineau/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
  if (id == "08") {
    var name = "Benjamin Gouchon";
    var age = "27 ans";
    var mail = "mail: gouchonbenjamin@gmail.com";
    var tel = "tél: 06.77.24.07.55";
    var lien1 = "Git: https://github.com/BENJAMINGG";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/benjamin-gouchon/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
  if (id == "09") {
    var name = "Patrick Mwimanzi";
    var age = "37ans";
    var mail = "patrickrene.mwimanzi@gmail.com";
    var tel = "tél: 06.61.61.42.40";
    var lien1 = "Git:https://github.com/pazzo10om";
    var lien2 = "LinkedIn: linkedin.com/in/patrick-rené-mwimanzi-8a100a69";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
  if (id == "10") {
    var name = "Sylvain Lamoureux";
    var age = "32 ans";
    var mail = "mail: lamoureux.sylvain@gmail.com";
    var tel = "tél: 06.61.01.03.15";
    var lien1 = "Git: https://github.com/lamoureux-sylvain";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/sylvain-lamoureux/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
  if (id == "11") {
    var name="Rolique OPONGA";
    var age="46 ans";
    var mail="mail: faisceaux.coherent@gmail.com";
    var tel="tél: 07.81.79.53.62";
    var lien1="Git: https://github.com/RoliqueSuperSonic9000";
    var lien2="LinkedIn: https://www.linkedin.com/in/rolique-oponga-7254131b6/";

    alert(message);
  }
  if (id == "12") {
    var name = "Paola Pondi";
    var age = "22 ans";
    var mail = "mail: paola.pondi@gmail.com";
    var tel = "tél: 07.87.51.54.08";
    var lien1 = "Git: https://github.com/trudyglory/";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/paola-pondi/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
  if (id == "13") {
    var name="Pierre rabu";
    var age="45 ans";
    var mail="mail: rabu.pierre.data@free.fr";
    var tel="tél: 06.14.78.31.38";
    var lien1="Git: https://github.com/PierreRWCS";
    var lien2="LinkedIn: linkedin.com/in/pierre-rabu-69082b3a;
    alert(message);
  }
  if (id == "14") {
    var name = "Étienne Rist";
    var age = "20 ans";
    var mail = "mail: etiennerist9@gmail.com";
    var tel = "tél: 07.82.67.66.90";
    var lien1 = "Git: https://github.com/etienne-rist";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/etienne-rist-0750931a4/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
  if (id == "15") {
    var name = "Alexandre Vilbert";
    var age = "25 ans";
    var mail = "alexandre.vilbert@gmail.com";
    var tel = "06.65.02.33.07";
    var lien1 = "Git: https://github.com/AlexV2204";
    var lien2 = "LinkedIn: https://www.linkedin.com/in/alexandre-vilbert-5408051b0/";
    var message = name + '\n\n' + age + '\n' + mail + '\n' + tel + '\n\n' + lien1 + '\n' + lien2;

    alert(message);
  }
}


function info_page2(id) {
  id = id + "ip";
  var elmt = document.getElementById(id);
  var blur = document.getElementById("blur");

  blur.style.visibility = "visible";
  elmt.style.visibility = "visible";
}
