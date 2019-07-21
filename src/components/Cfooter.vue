<template>
  <div class="Cfooter">
    <div class="right">
      <b-button variant="info" size="sm">botão direito</b-button>
    </div>

    <div class="left">
      <b-button variant="info" size="sm">botão esquerdo</b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.Cfooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(226, 226, 226);
  color: white;
  text-align: center;
  height: 40px;
  padding: 5px;
}

.Cfooter .right {
  /* background-color: teal; */
  height: 100%;
  width: 50%;
  float: right;
  text-align: right;
}

.Cfooter .left {
  /* background-color: green; */
  height: 100%;
  width: 50%;
  float: left;
  display: flex;
}
</style>
