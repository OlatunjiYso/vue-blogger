<template>
  <div id="blog-component">
    <div class="title-section">
      <h2 class="title">{{blogpost.title}}</h2>
    </div>

    <div class="body-section">
      <p class="body">{{blogpost.body}}</p>
    </div>
    <div class="control-section">
      <router-link v-bind:to="'/edit/'+blogpost._id"> 
      <button class="blog-button-edit">Edit</button>
      </router-link>
      <button class="blog-button-delete" v-on:click="deletePost()">Delete</button>
    </div>
  </div>
</template>

<script>
import Footer from './FooterComponent.vue';

export default {
  components: {
    'app-footer': Footer
  },
  data() {
    return {
      id: this.$route.params.id,
      blogpost: {}
    };
  },
  methods: {
    deletePost(){
      this.$http.delete('http://localhost:4000/blogposts/' + this.id)
      .then((res)=> {
        this.$router.push('/blogposts')
      })
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
#blog-component {
  width: 60%;
  margin: 60px auto 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
}
.title-section {
  padding: 10px 100px;
  
}

.title {
  text-decoration: underline;
  color:rgb(83, 33, 129);
  font-size: 40px;
}

.body-section {
  padding: 10px;
  margin-bottom: 5px;
  font-size: 22px;
  line-height: 50px;
  color:rgb(88, 85, 88);
}

.control-section {
padding: 30px 10px;
width: 90%;
margin: auto auto 20px auto;
}

.blog-button-edit {
  padding: 10px;
  margin: 10px;
  background-color: rgb(216, 189, 252);
}

.blog-button-delete {
  float: right;
  padding: 10px;
  margin: 10px;
  background-color: rgb(252, 189, 236);
}
</style>