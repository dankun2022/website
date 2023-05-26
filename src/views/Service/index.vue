<template>
  <div class="service">
    <Header></Header>
    <div class="service-foot"><Sidebar></Sidebar> <Content></Content></div>
  </div>
</template>

<script>
import Content from "./Content/index.vue";
import Header from "./Header/index.vue";
import Sidebar from "./Sidebar/index.vue";
export default {
  components: { Content, Header, Sidebar },
  data() {
    return {};
  },
};
</script>

<style>
.service {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.service-foot {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
