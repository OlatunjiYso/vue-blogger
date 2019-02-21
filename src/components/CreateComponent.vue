<template>
  <div id="create-component">
    <div class="main">
    <h1 id="main-header"> Create a post</h1>
    <div class="field-pack">
    <label class="title">Title: </label>
    <input id="title-input" v-model="blogpost.title" type="text" />
    </div>
    <div class="field-pack">
    <label class="body">Enter your post here: </label>
    <textarea maxlength= "2000" id="post-body-input" type="text" v-model="blogpost.body"> </textarea>
    </div>
    <div class="category-pack">
    <label class="category">Select category</label>
    <select v-model="blogpost.category">
      <option v-for="category in categories" v-bind:key="category[0]"> {{category}} </option>
    </select>
    </div>

    <div class="form-controls">
      <button class="form-button-save" v-on:click="addPost">Save</button>
      <button class="form-button-cancel" v-on:click="clearPost">Cancel</button>
    </div>
    <div class="toast" v-show="showToast"> 
      <span> Thank you! Your post was added.</span>
    </div>
    </div>
    <!-- Footer -->
    <app-footer> </app-footer>
  </div>
  
</template>

<script>
import Footer from './FooterComponent.vue'

export default {
  components: {
    'app-footer': Footer
  },
  data() {
    return {
      blogpost: {
        title: '',
        body: '',
        category: 'Life Style'
      },
      categories: [
        'Life Style',
        'Entertainment',
        'Technology',
        'Sport',
        'Food',
        'Politics'
      ],
      showToast: false
    }
  },
  methods: {
    addPost(){
      let blogPost = this.blogpost;
      this.$http.post('http://localhost:4000/blogposts/add',blogPost)
      .then((response)=> {
        this.showToast = true;
        this.clearToast();
      })
    },
    clearPost(){
      this.blogpost.title= "";
      this.blogpost.body= "";
    },
    clearToast(){
      setTimeout(()=>{
        this.showToast = false
         this.$router.push('/blogposts')
      }, 2000)
    },
  }
};
</script>

<style scoped>
#create-component {
  /* height: 100vh; */
  width: 90%;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
  /* align-items: center; */
}

.field-pack {
  display:flex;
  flex-direction:column;
  width: 60%;
  margin: 10px auto;
}

.category-pack {
  display:flex;
  flex-direction:column;
  width: 60%;
  margin: 10px auto;
}
.toast {
  background-color: rgb(217, 199, 247);
  width: 40%;
  margin: 10px auto;
  padding:30px;
}
.title {
  margin-bottom: 10px;
  font-size: 22px;
  color:rgb(102, 27, 167);
}

.body {
  margin-bottom: 10px;
  font-size: 22px;
}

#title-input {
  height: 20px;
  border: 1px solid rgba(50, 25, 73, 0.6);
  margin-bottom: 20px;
  font-size: 20px;
  color:rgba(76, 18, 151, 0.8);
  padding: 20px;
  text-align: center;
}

#post-body-input {
  height: 300px;
  border: 1px solid rgba(58, 25, 148, 0.6);
  margin-bottom: 20px;
  font-size: 18px;
  color:rgba(55, 22, 107, 0.65);
  padding: 20px;
  line-height: 30px;
}
.form-button-save {
  padding:10px 34px;
  margin: 10px 34px 10px 0;
  background-color: rgb(224, 210, 248);
  font-size: 16px;
}

.form-button-cancel {
  padding:10px 30px;
  margin: 10px 30px;
  background-color: #e49dbe;
  font-size: 16px
}
.form-controls{
  width: 60%;
  margin: 10px auto;
}
#main-header {
  color:rgb(105, 65, 168);
  width: 60%;
  margin: 10px auto 40px auto;
}
select {
  height: 30px;
  margin-top: 10px;
  width:60%
}
label {
  color: rgb(129, 86, 185);
  font-size: 18px;

}
</style>