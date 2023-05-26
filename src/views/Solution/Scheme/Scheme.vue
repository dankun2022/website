<template>
  <div>
    <div class="scheme">
      <div class="scheme-stem">
        <div class="scheme-stem-one" ><router-link to="/openscheme" active-class="active">开源治理方案</router-link></div>
        <div class="scheme-stem-one" ><router-link to="/carscheme" active-class="active">车联网安全评估方案</router-link></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Scheme'
}

</script>

<style scoped>
a {
  color: black;
}

.scheme {
  height: 80px;
  background-color: rgb(246,250,253);
}
.scheme-stem{
  width: 1300px;
  margin: 0 auto;
  display: flex;
}
.scheme-stem-one{
  height: 80px;
  width: 250px;
}
.scheme-stem-one a{
  height: 80px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
}
.active{
  background-color: rgb(255,255,255);
  color: #0259dc;
}
</style>
