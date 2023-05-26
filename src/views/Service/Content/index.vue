<template>
  <div class="content">
    <header class="content-header">
      <div>{{ content }}类服务</div>
      <hr style="" />
      <div>服务热线：<span style="color: blue"> 021-64181628</span></div>
    </header>
    <router-view />

    <detection v-show="serviceType * 1 === 1 ? true : false"></detection>
    <consult v-show="serviceType * 1 === 2 ? true : false"></consult>
    <guarantee v-show="serviceType * 1 === 3 ? true : false"></guarantee>
    <cultivate v-show="serviceType * 1 === 4 ? true : false"></cultivate>
  </div>
</template>

<script>
import Detection from "./Detection/index.vue";
import Consult from "./Consult/index.vue";
import Guarantee from "./Guarantee/index.vue";
import Cultivate from "./Cultivate/index.vue";
import EventBus from "@/Bus/index.js";

export default {
  name: "Content",
  data() {
    return {
      serviceType: this.$route.query.id || 1,
      content: "安全检测",
      imgSum: {
        detection: "@/assets/img/service/security-check/stcs-icon-1.png",
        consult: ["@/assets/img/service/security-check/stcs-icon-2.png"],
        guarantee: ["@/assets/img/service/security-check/stcs-icon-3.png"],
        cultivate: ["@/assets/img/service/security-check/stcs-icon-4.png"],
      },
    };
  },

  components: {
    Guarantee,
    Detection,
    Consult,
    Cultivate,
  },
  // computed: {
  //   serviceType() {
  //     return this.$route.query.id;
  //   },
  // },
  watch: {
    $route(to, from) {
      this.serviceType = to.query.id;
    },
  },
  methods: {
    //service中所需图片
  },
  mounted() {
    EventBus.$on("content", (data) => {
      this.content = data;
    });
  },
};
</script>

<style scoped>
.content {
  width: 1154px;
  padding: 42px 100px 78px 138px;
  display: flex;
  flex-direction: column;
}
.content-header {
  width: 916px;
  height: 138px;
  padding: 30px 40px;
  text-align: center;
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-header > div {
  margin-bottom: 10px;
}
.content-header > div:nth-child(1) {
  font-size: 24px;
}
</style>
