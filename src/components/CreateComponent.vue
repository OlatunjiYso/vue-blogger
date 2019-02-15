<template>
  <div id="create-component">
    <label class="title">What is the title of your post</label>
    <input id="title-input" type="text">
    <label class="body">Enter your post here</label>
    <input id="body-input" type="text">
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
#create-component {
  width: 80%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin-bottom: 10px;
  font-size: 22px;
  color:rgb(54, 54, 54);
}

.body {
  margin-bottom: 10px;
  font-size: 22px;
  color:rgb(54, 54, 54);
}

#title-input {
  width: 80%;
  height: 60px;
  border: 1px solid rgb(129, 129, 129);
  margin-bottom: 20px;
}

#body-input {
  width: 80%;
  height: 300px;
  border: 1px solid rgb(129, 129, 129);
  margin-bottom: 20px;
}
.form-button-save {
  padding:10px 34px;
  margin: 10px 34px;
  background-color: rgb(212, 235, 212);
  font-size: 16px
}

.form-button-cancel {
  padding:10px 30px;
  margin: 10px 30px;
  background-color: rgb(248, 237, 240);
  font-size: 16px
}
</style>