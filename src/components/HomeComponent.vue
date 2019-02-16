<template>
  <div id="home-component">
    <h1 class="header">Welcome to our blogging app</h1>
    <div id="home-body">
      <div class="category-section">
        <div class="category-section-body">
          <h4 class="categories-header">Blog Categories</h4>
          <ul class="category-items">
            <li class="category-item">Category one</li>
            <li class="category-item">Category one</li>
            <li class="category-item">Category one</li>
            <li class="category-item">Category one</li>
            <li class="category-item">Category one</li>
            <li class="category-item">Category one</li>
          </ul>
        </div>
      </div>
      <div class="blogs-section">
        <h4 class="blog-section-header">Category One</h4>
        <ul id="post-list-items">
          <li class="post-list-item">
            <div class="post-card">
              <h3 id="blog-title">Blog 1</h3>
            </div>
          </li>
          <li class="post-list-item">
            <div class="post-card">
              <h3 id="blog-title">Blog 2</h3>
            </div>
          </li>
          <li class="post-list-item">
            <div class="post-card">
              <h3 id="blog-title">Blog 1</h3>
            </div>
          </li>
          <li class="post-list-item">
            <div class="post-card">
              <h3 id="blog-title">Blog 2</h3>
            </div>
          </li>
          <li class="post-list-item">
            <div class="post-card">
              <h3 id="blog-title">Blog 1</h3>
            </div>
          </li>
          <li class="post-list-item">
            <div class="post-card">
              <h3 id="blog-title">Blog 2</h3>
            </div>
          </li>
          <li class="post-list-item">
            <div class="post-card">
              <h3 id="blog-title">Blog 2</h3>
            </div>
          </li>
          <li class="post-list-item">
            <div class="post-card">
              <h3 id="blog-title">Blog 2</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#home-component {
  height: 100vh;
}
#home-body {
  display: flex;
}
.category-section {
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: rgb(241, 250, 241);
  margin-right: 5%;
  color: rgb(80, 80, 80);
}
.blogs-section {
  border: 1px solid rgb(221, 221, 221);
}
.blog-section-header {
  text-align: center;
  color: rgb(82, 81, 81);
  font-size: 22px;
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
  margin: 0 auto
}
.header {
  text-align: center;
  padding: 20px;
  background-color: rgb(252, 243, 231);
  color: rgb(32, 29, 24);
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
}

.post-card {
  height: 200px;
  width: 160px;
  background-color: rgb(234, 252, 233);
  margin: 10px;
}

#blog-title {
  text-align: center;
}
</style>