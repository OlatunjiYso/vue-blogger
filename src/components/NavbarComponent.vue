<template>
  <div id="nav-component">
    <ul>
      <li class="nav-item"> <router-link to="/blogposts" > Home </router-link></li>
       <li class="nav-item"> <router-link to="/create" > Add Post </router-link> </li>
       <li class="nav-item"> <router-link to="/blogposts" > About </router-link></li>
       <li class="nav-item"> <router-link to="/create"> New </router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped> 
#nav-component {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color:  rgb(243, 223, 252);
  height: 15%;
}

.nav-item {
  margin:1rem 3rem;
  display: inline;
}

</style>