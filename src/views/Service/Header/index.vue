<template>
  <div class="herder">
    <div class="herder-item">
      <div class="herder-item1">
        <h3 class="herder-item-title">专业服务</h3>
        <div class="herder-item-content">
          为用户提供贯穿信息系统完整生命周期的安全技术专业服务。致力于在系统投产前弥补安全缺陷，优化资源配置，建立和维护全面、有效、合规的信息安全管理体系，保障业务运营和战略达成。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Herder",
};
</script>

<style scoped>
.herder {
  background-image: url("@/assets/img/service/shi-img/service.0c917809.png");
  background-size: 100% 100%;
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.herder-item {
  width: 1300px;
  color: aliceblue;
  font-family: "Microsoft Yahei";
}
.herder-item1 {
  width: 700px;
  height: 100%;
}
.herder-item-title {
  font-size: 30px;
  font-weight: 400;
}
.herder-item-content {
  font-size: 16px;
  line-height: 40px;
}
</style>