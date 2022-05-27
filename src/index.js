//import axios from "axios";

const btn = document.querySelector("button");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const div = document.querySelector("#cards");
const corpo = document.getElementById("corpo");
const corpoum = document.getElementById("corpoum");
const graficomedio = document.getElementById("graficomedio");
const graficomedioum = document.getElementById("graficomedioum");

btn.addEventListener("click", function () {
  //Mostrar cards ao clicar no botão
  if (div.style.display === "none") {
    corpo.style.display = "none";
    graficomedio.style.display = "none";
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  //Requisitar cotação para o ação(imput) informada
  const acao = document.getElementById("acao").value;

  // Promisse para realizar requisição
  axios
    .get("https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/" + acao)
    .then((resp) => {
      // Gerando tabela ao clicar no card da tabela
      corpoum.addEventListener("click", function () {
        //console.log("clicou");
        //Mostrar tabela ao clicar no botão
        if (corpo.style.display === "none") {
          div.style.display = "none";
          corpo.style.display = "block";
        } else {
          corpo.style.display = "none";
        }

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

        for (let index = 0; index < resp.data.length; index++) {
          // Inserindo os data's da requisição no corpo da tabela
          let row = document.createElement("tr");
          let heading_1 = document.createElement("td");
          heading_1.innerHTML = resp.data[index].nm_empresa_rdz;
          let heading_2 = document.createElement("td");
          heading_2.innerHTML = resp.data[index].vl_maximo;
          let heading_3 = document.createElement("td");
          heading_3.innerHTML = resp.data[index].vl_minimo;
          let heading_4 = document.createElement("td");
          heading_4.innerHTML = resp.data[index].dt_pregao;

          row.appendChild(heading_1);
          row.appendChild(heading_2);
          row.appendChild(heading_3);
          row.appendChild(heading_4);
          thead.appendChild(row);
        }
      });
      // Ao clicar no card do gráfico, abrir gráfico
      graficomedioum.addEventListener("click", function () {
        //console.log("clicouuuu");
        //Mostrar tabela ao clicar no botão
        if (graficomedio.style.display === "none") {
          div.style.display = "none";
          graficomedio.style.display = "block";
        } else {
          graficomedio.style.display = "none";
        }
        //Gerar gráfico com biblioteca chart.js
        const aux = [];
        const labels = [];
        for (let i = 0; i < 300; i++) {
          aux.push(resp.data[i].vl_maximo);
          labels.push(resp.data[i].dt_pregao);
        }

        const data = {
          labels: labels,
          datasets: [
            {
              label: "Valor médio (R$)",
              backgroundColor: "rgb(0, 50, 115)",
              borderColor: "rgb(0, 50, 115)",
              data: aux
            }
          ]
        };

        const config = {
          type: "line",
          data: data,
          options: {}
        };

        const myChart = new Chart(document.getElementById("myChart"), config);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
