<template>
  <div id="edit-component">
    <h2 class="grey-text">Edit your posts here</h2>
    <div class="field-pack">
      <label class="form-label grey-text">Title</label>
      <input id="title-edit-input" v-model="post.title" type="text">
    </div>
    <div class="field-pack">
      <label class="form-label grey-text">Body</label>
      <textarea id="body-edit-input" type="text"> </textarea>
    </div>
    <div class="form-controls">
      <button class="form-button-save">Save</button>
      <button class="form-button-cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    };
  }
};
</script>

<style>
#edit-component {
  width: 80%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
.field-pack {
  display:flex;
  width: 60%;
  flex-direction:column
}

.form-label {
  margin-bottom: 5px;
  font-size: 20px;
  
}
.grey-text {
color: rgb(94, 61, 61);
}
#title-edit-input {
  height: 30px;
  border: 1px solid rgb(129, 129, 129);
  margin-bottom: 20px;
  font-size: 26px;
  color: rgb(64, 77, 64);
  padding: 20px;
  text-align: center;
  font-family: "palatino";
}

#body-edit-input {
  height: 300px;
  border: 1px solid rgb(138, 139, 137);
  margin-bottom:20px;
  font-size: 16px;
  color:rgb(45, 46, 45);
  padding: 20px;
}
.form-button-save {
  padding: 10px;
  margin: 10px;
  background-color: rgb(212, 235, 212);
}

.form-button-cancel {
  padding: 10px;
  margin: 10px;
  background-color: rgb(248, 237, 240);
}
</style>