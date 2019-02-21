<template>
  <div id="footer-component">
    <div class="footer-item">
      <h5>Aspects</h5>
      <ul>
        <li>Blogging</li>
        <li>Life</li>
        <li>Support</li>
        <li>Manage</li>
      </ul>
    </div>
    <div class="footer-item">
      <h5>Address</h5>
      <ul>
        <li> No 345 azxt </li>
        <li> Ilupeju </li>
        <li> Anthony Arena </li>
        <li> Lagos state/ </li>
      </ul>
    </div>
     <div class="footer-item">
      <h5>Aspects</h5>
      <ul>
        <li>Blogging</li>
        <li>Life</li>
        <li>Support</li>
        <li>Manage</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer-component {
  display: flex;
  justify-content: flex-start;
  background-color: rgb(46, 7, 78) !important;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', sans-serif;
  color: rgb(196, 195, 195);
}

h5 {
  padding: 2px 10px;
  background-color: rgb(197, 196, 196);
  color: rgb(37, 11, 71);
  margin: 10px 40px;
}
li {
  list-style-type: none
}
.footer-item{
  padding: 20px 0;
  margin-right: 30%;
}
</style>