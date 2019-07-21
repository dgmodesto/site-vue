<template>
  <div class="cockipitContainer">
    <b-tabs content-class="mt-3" justified>
      <b-tab title="Cockipit Geral" active>
        <cockipitGeral />
      </b-tab>
      <b-tab title="Cockipit Aprovação">
        <cockipitApprove />
      </b-tab>
      <b-tab title="Cockipit Cadernos">
        <p>I'm the tab with the very, very long title</p>
      </b-tab>
    </b-tabs>
    <cfooter />
  </div>
</template>

<script>
import cockipitGeral from "./CockipitGeral";
import cockipitApprove from "./CockipitApprove";
import cfooter from "./Cfooter";

export default {
  el: "cockipit-container",
  components: {
    cockipitGeral,
    cockipitApprove,
    cfooter
  },
  data() {
    return {};
  }
};
</script>

<style>
.cockipitContainer .nav-justified .nav-item {
  background-color: teal;
}

.cockipitContainer .nav-tabs .nav-link.active {
  color: teal;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

.cockipitContainer .nav-tabs .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: white;
  background-color: teal;
}
</style>
