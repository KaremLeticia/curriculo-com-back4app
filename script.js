Parse.initialize("AR5eZtu6zDuLYuxLjBk9c8bTo9NU2HRHiNUZ7PkE", "9lnIhp3LNmawDFNRLNbcXr5IgIqmcXFRkOMFoV9d"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

const recado = Parse.Object.extend("recado");
const Hobbie = Parse.Object.extend("Hobbie");

const h3Descricao = document.getElementById("h3Descricao");
const listarecados = document.getElementById("listarecados");
const listahobbies = document.getElementById("listahobbies");
const inputDescricao = document.getElementById("inputDescricao");
const btInserir = document.getElementById("btInserir");


const lerrecados = async () => {
  const query = new Parse.Query(recado);
  try {
    const results = await query.find();
    listarecados.innerHTML = "";
    for (const recado of results) {
      const descricao = recado.get("descricao");
      const lirecado = document.createElement("li");
      const textNode = document.createTextNode(
        ` ${descricao}`
      );
      lirecado.appendChild(textNode);
      listarecados.appendChild(lirecado);
    }
  } catch (error) {
    console.error("Ocorreu um erro ao carregar os recados", error);
  }
};



const inserirrecado = async () => {
  const descricao = inputDescricao.value.trim();
  if (!descricao) {
    alert("Favor inserir uma descrição!");
    return;
  }
  const recado = new Parse.Object("recado");
  recado.set("descricao", descricao);
  try {
    const result = await recado.save();
    console.log("recado created", result.id);
  } catch (error) {
    console.error("Error while creating recado: ", error);
  }
  inputDescricao.value = "";
  inputDescricao.focus();
  lerrecados();
};

lerrecados();

btInserir.onclick = inserirrecado;

const lerhobbies = async () => {
  const query = new Parse.Query(Hobbie);
  try {
    const results = await query.find();
    listahobbies.innerHTML = "";
    for (const hobbie of results) {
      const descricao = hobbie.get("nome");
      const lihobbie = document.createElement("li");
      const textNode = document.createTextNode(
        ` ${descricao}`
      );
      lihobbie.appendChild(textNode);
      listahobbies.appendChild(lihobbie);
    }
  } catch (error) {
    console.error("Ocorreu um erro ao carregar os Hobbies", error);
  }
};


/*
const inserirhobbie = async () => {
  const descricao = inputDescricao.value.trim();
  if (!descricao) {
    alert("Favor inserir um Hobbie!");
    return;
  }
  const hobbie = new Parse.Object("Hobbie");
  hobbie.set("nome", descricao);
  try {
    const result = await hobbie.save();
    console.log("Hobbie criado", result.id);
  } catch (error) {
    console.error("Erro ao adicionar hobbie: ", error);
  }
  inputDescricao.value = "";
  inputDescricao.focus();
  lerhobbies();
};
*/

lerhobbies()
//btInserirHobbie.onclick = inserirhobbie;

