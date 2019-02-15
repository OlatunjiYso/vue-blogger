<template>
  <div id="edit-component">
    <label class="edit-title">Make your changes here</label>
    <input id="edit-field" type="text">
    <div class="form-controls">
      <button class="form-button-save">Save</button>
      <button class="form-button-cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#edit-component {
  width: 80%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-title {
  margin-bottom: 50px;
  font-size: 22px;
  color:rgb(54, 54, 54);
}

#edit-field {
  width: 80%;
  height: 300px;
  border: 1px solid rgb(129, 129, 129);
  margin-bottom: 20px;
}
.form-button-save {
  padding:10px;
  margin: 10px;
  background-color: rgb(212, 235, 212);
}

.form-button-cancel {
  padding:10px;
  margin: 10px;
  background-color: rgb(248, 237, 240);
}
</style>