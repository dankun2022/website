<template>
  <div>
    <div class="page-header">
      <div class="page-content header-content" @mouseleave="isHover = false">
        <img src="@/assets/img/logo.png" alt="" class="logo" />
        <div class="header-nav">
          <div class="header-nav-item first-item">
            <router-link to="/home">首页</router-link>
          </div>
          <div class="header-nav-item">
            <router-link to="/devsecops">DevSecOps产品</router-link>
          </div>
          <div class="header-nav-item item-service" @mouseover="isHover = true">
            <router-link to="/service">专业服务</router-link>
            <Navigation
              class="item-service-navigation"
              @mouseover="isHover = true"
              v-show="isHover"
            ></Navigation>
          </div>
          <div class="header-nav-item">
            <router-link to="/solution">解决方案</router-link>
          </div>
          <div class="header-nav-item">
            <router-link to="/about">关于安盾</router-link>
          </div>
        </div>
        <router-link to="/Job" class="add-us">安盾信息</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../views/Service/Navigation/index.vue";
export default {
  name: "Header",
  data() {
    return {
      isHover: false,
    };
  },
  components: { Navigation },
};
</script>
<style scoped>
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.3);
}

.header-content {
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  position: relative;
}

.page-content {
  width: 1300px;
  margin: 0 auto;
}

.logo {
  width: 120px;
  height: 60px;
}

.header-nav {
  margin-left: 130px;
  display: flex;
}

.first-item {
  margin-left: 0;
}

.header-nav-item {
  margin-left: 40px;
  display: block;
  color: #fff;
}
.item-service {
  position: relative;
  height: 100%;
}
/* .item-service:hover > .item-service-navigation {
  opacity: 1;
} */
.item-service-navigation {
  /* opacity: 0; */
  position: absolute;
  top: 200%;
  left: -80%;
  transition: 0.3s ease-in-out;
}
a {
  color: #fff;
}

.active {
  color: #0259dc;
}

.add-us {
  position: absolute;
  right: 0;
  height: 40px;
  width: 100px;
  background-color: #0259dc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
