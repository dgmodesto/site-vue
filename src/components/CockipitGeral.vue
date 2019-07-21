<template>
  <div>
    <b-table
      id="table-cockipit-geral"
      striped
      hover
      small
      :items="items"
      :fields="fields"
      primary-key="name"
      :tbody-transition-props="transpops"
    ></b-table>
  </div>
</template>

<script>
export default {
  el: "cockipit-geral",
  components: {},
  data() {
    return {
      transpops: {
        name: "flip-list"
      },
      fields: [
        { key: "name", sortable: true },
        { key: "age", sortable: true },
        { key: "gender", sortable: true }
      ],
      items: [
        {
          age: 32,
          name: "Douglas Modesto",
          gender: "Masculino"
        },
        { age: 31, name: "Cintia Modesto", gender: "Feminino" },
        { age: 5, name: "Kauanny Modesto", gender: "Feminino" }
      ]
    };
  }
};
</script>

<style>
table#table-cockipit-geral .flip-list-move {
  transition: transform 1s;
}
</style>
