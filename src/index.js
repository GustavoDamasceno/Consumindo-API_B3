//import axios from "axios";

const btn = document.querySelector("button");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

//Requisitar cotação para o ação(imput) informada
btn.addEventListener("click", function () {
  const acao = document.getElementById("acao").value;

  // gerando tabela com os dados requisitados da API
  table.appendChild(thead);
  table.appendChild(tbody);

  //add a tabela inteira na tag div(corpo)
  document.getElementById("corpo").appendChild(table);

  // Criando e adicionando dados p/ primeira linha da tabela
  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "Empresa";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "Valor maximo";
  let heading_3 = document.createElement("th");
  heading_3.innerHTML = "valor minimo";
  let heading_4 = document.createElement("th");
  heading_4.innerHTML = "Data";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  thead.appendChild(row_1);

  // Promisse para realizar requisição
  axios
    .get("https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/" + acao)
    .then((resp) => {
      for (let index = 0; index < resp.data.length; index++) {
        // Inserindo os data's da requisição no corpo da tabela
        let row = document.createElement("tr");
        let heading_1 = document.createElement("th");
        heading_1.innerHTML = resp.data[index].nm_empresa_rdz;
        let heading_2 = document.createElement("th");
        heading_2.innerHTML = resp.data[index].vl_maximo;
        let heading_3 = document.createElement("th");
        heading_3.innerHTML = resp.data[index].vl_minimo;
        let heading_4 = document.createElement("th");
        heading_4.innerHTML = resp.data[index].dt_pregao;

        row.appendChild(heading_1);
        row.appendChild(heading_2);
        row.appendChild(heading_3);
        row.appendChild(heading_4);
        thead.appendChild(row);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// API utilizada: https://api-cotacao-b3.labdo.it/
