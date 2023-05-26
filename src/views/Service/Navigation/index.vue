<template>
  <div class="navigation">
    <div class="navigation-triangle"></div>
    <ul class="navigation-content">
      <li
        v-for="item in title"
        :key="item.id"
        @click="navigationRouter(item.id)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from "@/Bus/index";
export default {
  name: "Navigation",
  data() {
    return {
      title: [
        { id: 1, text: "安全检测" },
        { id: 2, text: "安全咨询" },
        { id: 3, text: "安全保障" },
        { id: 4, text: "安全培训" },
      ],
      typeS: ["安全检测", "安全咨询", "安全保障", "安全培训"],
    };
  },
  methods: {
    navigationRouter(value) {
      EventBus.$emit("content", this.typeS[value - 1]);
      this.$router.push({
        name: "service",
        query: {
          id: value,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.navigation {
  background: rgb(255, 255, 255);
  color: #000;
  width: 150px;
  height: 140px;
  font-size: 12px;
  border-radius: 5%;
  position: relative;
  cursor: pointer;

}
.navigation-triangle {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom: 7px solid rgb(255, 255, 255);
  position: absolute;
  top: -8%;
  left: 45%;
}
.navigation-content {
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
