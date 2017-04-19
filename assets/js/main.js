/*DESARROLLANDO 01*/
window.addEventListener("load", function){
  var canchaGrande = document.createElement("div");
  var canchaMediana = document.createElement("div");
  var arco01 = document.createElement("div");
  var pelota01 = document.createElement("div");

  var arco02 = document.createElement("div");
  var pelota02 = document.createElement("div");
  var pelota03 = document.createElement("div");
  var areaCirculo = document.createElement("div");

      canchaGrande.appendChild(canchaMediana);
        var cancha01Div = document.getElementById("canchaGrande");
        document.getElementById().body.appendChild(cancha01Grande,canchaDiv);

      canchaMediana.appendChild(arco01);
        var arco01Div = document.getElementById("canchaMediana");
        document.getElementById().div.appendChild(canchaMediana,arco01Div);

      arco01.appendChild(pelota01);
        var pelota01Div = document.getElementById("arco01");
        document.getElementById().div.appendChild(arco01, pelota01Div);

      canchaMediana.appendChild(arco02);
        var arco02Div = document.getElementById("canchaMediana");
        document.getElementById().div.appendChild(canchaMediana,arco01Div);

      arco01.appendChild(pelota02);
        var pelota02Div = document.getElementById("arco02");
        document.getElementById().div.appendChild(arco02, pelota01Div);



      canchaMediana.appendChild(arco02);
        arco02.appendChild(pelota02);

      canchaMediana.appendChild(pelota03);
      canchaMediana.appendChild(areaCirculo);

}
/*DESARROLLANDO 02
var canchaGrande = document.getElementsByClassName("canchaGrande")[0];
var canchaMediana = document.getElementsByClassName("canchaMediana")[0];

var pelota01 = document.getElementsById("pelota01");
var pelota02 = document.getElementsById("pelota02");
var pelota03 = document.getElementsById("pelota03");

var areaCirculo = document.getElementsById("areaCirculo");
var arco01 = document.getElementsById("arco01");
var arco02 = document.getElementsById("arco02");

  canchaGrande.style.position = "relative";
  canchaGrande.style.width = "840px";
  canchaGrande.style.height = "440px";
  canchaGrande.style.background = "#8CB27D";

  canchaMediana.style.position = "absolute";
  canchaMediana.style.width = "819px";
  canchaMediana.style.height = "419px";
  canchaMediana.style.background = "#8CB27D";
  canchaMediana.style.top = "9.1px";
  canchaMediana.style.left = "9.1px";
  canchaMediana.style.border = "2px solid white";

  arco01.style.position = "absolute";
  arco01.style.display = "inline";
  arco01.style.width = "142px";
  arco01.style.height = "142px";
  arco01.style.background = "#8CB27D";
  arco01.style.border = "2px solid white";
  arco01.style.top = "135px";

  arco02.style.position = "absolute";
  arco02.style.display = "inline";
  arco02.style.width = "142px";
  arco02.style.height = "142px";
  arco02.style.background = "#8CB27D";
  arco02.style.border = "2px solid white";
  arco02.style.top = "135px";
  arco02.style.left = "674.9px";
*/
