<template>
  <div id="nav-component">
      <h5> Home </h5>

       <h5> Posts </h5>

      <h5> About </h5>

      <h5> You </h5>
  </div>
</template>

<script>
export default {
}
</script>

<style> 
#nav-component {
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  background-color: rgb(7, 14, 8);
  color: #fff
}

h5 {
  padding: 2px 10px;
  background-color: rgb(197, 196, 196);
  color: rgb(7, 14, 8);
  margin: 10px 40px

}
</style>