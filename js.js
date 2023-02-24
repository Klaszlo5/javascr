window.addEventListener("load", init);
function init(){
  const htm = document.getElementById("tartalom");
  console.log(htm);

  const tartalomE = document.querySelectorAll(".tart");
  console.log(tartalomE);
  console.log(tartalomE[1]);

  let szoveg = "Hello World"
  tartalomE[0].innerHTML = "<p>" + szoveg + "</p>";

  let lista = ["rántott majom", "fincsi", "nemtudom"];
  let et = "<ul>";
  for (let index = 0; index < lista.length; index++) {
    et += `<li>${lista[index]}</li>`;
  }
  et += "</ul>";
  htm.innerHTML += et;

  kepeks();
}
function kepeks() {
  const tartalomKep = document.querySelectorAll("#kepek");
  const kepek = ["./kep/index.jpg", "./kep/index1.jpg", "./kep/index3.jpg"];
  for (let index = 0; index < kepek.length; index++) {
    tartalomKep[0].innerHTML += `<img src="${kepek[index]}" alt="kajak"/>`;
  }
}