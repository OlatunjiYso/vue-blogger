<template>
  <div id="home-component">
    <div class="home-banner">
      <h1 class="header">Vue ~ Blogger</h1>
    </div>
      <div id="search-section">
        <label id="search-label"> 🤔</label>
        <input id="search-input" type="text" v-model="searchInput" v-on:input="handleSearch()">
      </div>
    <div id="home-body">
      <div class="category-section">
        <div class="category-section-body">
          <h3 class="categories-header">Blog Categories</h3>
          <ul class="category-items">
            <li class="category-item" v-on:click="changeCategory('Life Style 👌', 'Life Style')">Life Style 👌</li>
            <li class="category-item" v-on:click="changeCategory('Entertainment 🎸', 'Entertainment')">Entertainment 🎸</li>
            <li class="category-item" v-on:click="changeCategory('Technology 💻', 'Technology')">Technology 💻</li>
            <li class="category-item" v-on:click="changeCategory('Sport ⚽️', 'Sport')">Sport ⚽️</li>
            <li class="category-item" v-on:click="changeCategory('Food 🍸', 'Food')">Food 🍸</li>
            <li class="category-item" v-on:click="changeCategory('Politics ✌🏽', 'Politics')">Politics ✌🏽</li>
            <li class="category-item" v-on:click="changeCategory('All Categories 🌗', 'All')">All 🌗</li>
          </ul>
        </div>
      </div>
      <div v-show="displayedBlogposts.length!=0" class="blogs-section">
        <h4 class="blog-section-header">{{currentCategory}}</h4>
        <ul id="post-list-items">
          <li class="post-list-item" v-for="blogPost in displayedBlogposts" v-bind:key="blogPost._id">
            <div class="post-card">
              <router-link v-bind:to="'/blogpost/'+blogPost._id">
                <h3 class="blog-title" id="blog.title">{{blogPost.title}}</h3>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <div v-show="displayedBlogposts.length==0" class="alt-blogs-section">
         <p class="blog-section-header">{{currentCategory}}</p>
        <h5>No blogs Yet</h5>
        <h3> 😔</h3>
      </div>
    </div>
      <app-footer> </app-footer>
  </div>
</template>

<script>
import Footer from './FooterComponent.vue'

export default {
  components: {
    'app-footer': Footer,
  },
  data() {
    return {
      currentCategory: "All",
      blogPosts: [],
      displayedBlogposts: [],
      searchInput: ''
    };
  },
  methods: {
    changeCategory(displayedCategory, category) {
      this.currentCategory = displayedCategory;
      if(category == 'All') {
        this.displayedBlogposts = this.blogPosts;
      } else {
        const categorizedBlogposts = this.blogPosts.filter( blogPost => blogPost.category == category)
        this.displayedBlogposts = categorizedBlogposts;
      }
    },
    fetchAllPosts() {
      this.$http.get("http://localhost:4000/blogposts").then(response => {
        this.blogPosts = response.body.blogPosts;
        this.displayedBlogposts = response.body.blogPosts;
      });
    },
    handleSearch() {
       this.currentCategory = '';
        let filtered = this.blogPosts.filter((blogPost) => {
        return blogPost.title.match(this.searchInput)
      })
      this.displayedBlogposts = filtered
    }
  },
 
  created() {
    this.fetchAllPosts();
  }
};
</script>

<style scoped>
#home-body {
  display: flex;
  height: 100vh;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
}
.home-banner {
 height: 12rem;
 background-color: rgb(243, 229, 250);
 margin-bottom: 2rem;
 display:flex;
 align-items: center;
 justify-content: center ;
 border-radius: 10px;
}
.category-section {
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: rgb(229, 227, 248);
  margin-right: 1%;
  color: rgb(109, 86, 124);
}
.blogs-section {
  width: 70%;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(248, 244, 255)
}
#search-section {
  width: 50%;
  margin: 1rem auto;
}

#search-input {
  padding: 5px;
  width:70%;
  height: 2rem;
  font-size: 22px;
  padding: 5px 15px;
  color: rgb(63, 57, 68);
}

#search-label {
  width: 20%;
  padding:10px;
 font-size: 2rem;
}

.alt-blogs-section {
  width: 50%;
  margin:10px auto;
  border: 1px solid rgb(221, 221, 221);
  text-align:center;
  font-size:4em;
}
.blog-section-header {
  text-align: center;
  color: rgb(68, 19, 114);
  font-size: 2rem;
}
.category-section-body {
  width: 70%;
  margin: 2px auto;
}
#post-list-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
.header {
  color: rgb(112, 63, 158);
  text-align:center;
  font-size:5rem;
  width: 60%;
  font-weight: lighter;
}

.post-list-item {
  list-style-type: none;
}
.category-items {
  padding: 0;
}
.category-item {
  width: 60%;
  margin: 4px 2px 30px 2px;
  list-style-type: none;
  padding: 5px 5px;
  border: 1px solid rgb(149, 155, 149);
  border-radius: 4px;
  cursor: pointer;
}
.banner-img {
  width: 30%;
  margin: 5px auto;
  height: 10rem;
  display : block
}
.post-card {
  height: 8rem;
  width: 15em;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(188, 163, 194);
  margin: 5px;
}

#blog-title {
  text-align: center;
}
.blog-title {
  text-align: center;
}
</style>