<template>
  <div id="create-component">
    <h1 id="main-header"> Create a post</h1>
    <div class="field-pack">
    <label class="title">Title: </label>
    <input id="title-input" v-model="post.title" type="text" />
    </div>
    <div class="field-pack">
    <label class="body">Enter your post here: </label>
    <textarea maxlength= "2000" id="post-body-input" type="text" v-model="post.body"> </textarea>
    </div>

    <div class="form-controls">
      <button class="form-button-save" v-on:click="addPost">Save</button>
      <button class="form-button-cancel" v-on:click="clearPost">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    }
  },
  methods: {
    addPost(){
      console.log(this.post.title, this.post.body)
    },
    clearPost(){
      this.post.title= "";
      this.post.body= "";
    }
  }
};
</script>

<style>
#create-component {
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.field-pack {
  display:flex;
  width: 60%;
  flex-direction:column
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
  height: 20px;
  border: 1px solid rgb(129, 129, 129);
  margin-bottom: 20px;
  font-size: 26px;
  color:rgb(64, 77, 64);
  padding: 20px;
  text-align: center;
  font-family: "palatino"
}

#post-body-input {
  height: 300px;
  border: 1px solid rgb(138, 139, 137);
  margin-bottom: 20px;
  font-size: 16px;
  color:rgb(45, 46, 45);
  padding: 20px;
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
#main-header {
  color:rgb(66, 75, 66)
}
</style>