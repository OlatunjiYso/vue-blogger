<template>
  <div id="edit-component">
    <h2 class="grey-text">Edit your posts here</h2>
    <div class="field-pack">
      <label class="form-label grey-text">Title</label>
      <input id="title-edit-input" v-model="blogpost.title" type="text">
    </div>
    <div class="field-pack">
      <label class="form-label grey-text">Body</label>
      <textarea id="body-edit-input" v-model="blogpost.body" type="text"> </textarea>
    </div>
    <div class="form-controls">
      <button class="form-button-save" v-on:click="updatePost()" prevent>Save</button>
      
       <router-link v-bind:to="'/blogpost/'+blogpost._id"> 
      <button class="form-button-cancel">Cancel</button>
       </router-link>
    </div>
    <div class="toast" v-show="showToast"> 
      <span> Thank you! Your post was updated.</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blogpost: {},
      showToast: false
    };
  },
  methods: {
    updatePost() {
      this.$http.put('http://localhost:4000/blogposts/' + this.id, this.blogpost)
      .then((res)=> {
       this.showToast = true;
        this.clearUpdateToast()
      })
    },
    clearUpdateToast() {
      setTimeout(()=> {
        this.showToast = false;
        this.$router.push('/blogpost/'+this.id)
      }, 2000)
    }
  },
    created(){
    this.$http.get('http://localhost:4000/blogposts/' + this.id)
    .then((response)=> {
      this.blogpost = response.body.blogPost;
    })
    .catch((err)=> {

    })
  }
};
</script>

<style scoped>
#edit-component {
  width: 80%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
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
color: rgb(66, 48, 85);
}
#title-edit-input {
  height: 30px;
  border: 1px solid rgb(129, 129, 129);
  margin-bottom: 20px;
  font-size: 26px;
  color: rgb(86, 85, 87);
  padding: 20px;
  text-align: center;
}

#body-edit-input {
  height: 350px;
  border: 1px solid rgb(86, 85, 87);;
  margin-bottom:20px;
  padding: 20px;
  font-size: 22px;
  line-height: 50px;
  color:grey;
}
.form-button-save {
  padding: 10px;
  margin: 10px;
  background-color: rgb(117, 113, 163);
}
.form-button-cancel {
  padding: 10px;
  margin: 10px;
  background-color: rgb(247, 199, 211);
}
.toast {
  background-color: rgb(206, 199, 238);
  width: 40%;
  margin: 10px auto;
  padding:15px;
}
</style>