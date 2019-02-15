<template>
  <div id="home-component">
    <h1 class="header"> Welcome to our blogging app</h1>

    <ul id="post-list-items">

      <li class="post-list-item">
        <div class="post-card"> 
         <h3 id="blog-title"> Blog 1 </h3>
        </div>
     </li>
     <li class="post-list-item">
        <div class="post-card"> 
          <h3 id="blog-title"> Blog 2 </h3>
        </div>
     </li>

    <li class="post-list-item">
        <div class="post-card"> 
         <h3 id="blog-title"> Blog 1 </h3>
        </div>
     </li>
     <li class="post-list-item">
        <div class="post-card"> 
          <h3 id="blog-title"> Blog 2 </h3>
        </div>
     </li>

    </ul>
    
  </div>
</template>

<script>
export default {
}
</script>

<style> 
#home-component {
  width: 70%;
  margin: 120px auto 120px 350px;
  background-color: rgb(233, 233, 233);
}
.header {
  padding: 40px;
  text-align: center;
}

#post-list-items {
  display:flex;
  flex-direction: row;
}

.post-list-item {
  list-style-type: none;  
}

.post-card {
 height: 200px;
 width: 160px;
 background-color: #fff;
 margin: 10px
}

#blog-title {
  text-align: center;
}
</style>