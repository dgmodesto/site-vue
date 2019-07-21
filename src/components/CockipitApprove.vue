<template>
  <div>
    <!-- <b-table
      id="table-cockipit-approve"
      striped
      small
      hover
      show-empty
      :items="filtered"
      primary-key="tecnologia"
      :tbody-transition-props="transProps"
    >
      <template slot="top-row" slot-scope="{ fields }">
        <td v-for="(field, index) in fields" :key="index">
          {{filters[filters[index].key]}}
          <input
            v-model="filters[filters[index].key]"
            :placeholder="field.label"
            type="text"
          />
        </td>
      </template>
    </b-table>-->

    <v-client-table :columns="columns" :data="items" :options="options"></v-client-table>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data() {
    return {
      transProps: {
        // Transition name
        name: "flip-list"
      },
      columns: ["tecnologia", "nome", "arquitetura", "criacao", "status"],
      items: [
        {
          tecnologia: "Vue Js",
          nome: "Utilização de Rotas",
          arquitetura: "mvc",
          criação: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          status: "Pendente"
        },
        {
          tecnologia: "dotnet core",
          nome: "implementação de apis",
          arquitetura: "ddd",
          criação: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          status: "aprovado"
        },
        {
          tecnologia: "dotnet core",
          nome: "implementação de apis",
          arquitetura: "ddd",
          criação: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1)),
          status: "aprovado"
        }
      ],
      options: {
        headings: {
          tecnologia: "tecnologia",
          nome: "nome",
          arquitetura: "arquitetura",
          criacao: "criacao",
          status: "status"
        },
        templates: {
          criacao: function(row) {
            debugger;
            // return this.calcAge(row.criacao);
            // https://codepen.io/ikbelkirasan/pen/zzgXzv?editors=0110
          }
        },
        customFilters: [
          {
            name: "alphabet",
            callback: function(row, query) {
              return row.name[0] == query;
            }
          }
        ],
        filterable: ["tecnologia", "nome", "arquitetura", "criacao"],
        dateColumns: ["criacao"]
      }
    };
  },
  methods: {
    calcAge: function(criacao) {
      return criacao.fromNow("years");
    },

    alphabetFilter: function(letter) {
      this.selectedLetter = letter;
      this.$broadcast("vue-tables.filter::alphabet", letter);
    }
  }
};
function randomDate(start, end) {
  return moment(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function randomOption() {
  return Math.floor(Math.random() * 5);
}
</script>




<style>
table#table-cockipit-approve .flip-list-move {
  transition: transform 1s;
}

td {
  text-align: left;
}

th:nth-child(n + 2),
td:nth-child(n + 2) {
  text-align: center;
}

thead tr:nth-child(2) th {
  font-weight: normal;
}

.VueTables__sort-icon {
  margin-left: 10px;
}

.VueTables__dropdown-pagination {
  margin-left: 10px;
}

.VueTables__highlight {
  background: yellow;
  font-weight: normal;
}

.VueTables__sortable {
  cursor: pointer;
}

.VueTables__date-filter {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
}

.VueTables__filter-placeholder {
  color: #aaa;
}

.VueTables__list-filter {
  width: 120px;
}
</style>
