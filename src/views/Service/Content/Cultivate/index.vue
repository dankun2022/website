<template>
  <div class="cultivate">
    <div class="cultivate-important">
      <h2 class="" style="color: #000" id="cultivate1">安全技能培训概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          安盾信息所提供的安全技能培础课程，是为进一步加强网络安全人才培养，以网络安全培训作为网络安全人才技能提升的重要手段。通过技能培训，可以有效提升学员的技术、沟通、领导、协调等各方面能力。
          技能培训的学习路线为三个阶段，基本覆盖初级的基础技术、基于工作角色而需要掌握的中级进阶技术以及进阶的高级关键技能
        </p>
      </div>
    </div>
    <div class="cultivate-meet">
      <h2 class="" style="color: #000" id="cultivate2">安全意识培训概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          人的安全是企业安全的最后一道防线，信息安全意识淡薄是网络安全事件频发的关键因素。安盾信息多年企业安全意识教育经验，总结出一套安全意识培训框架，可以帮助提升企业信息安全意识文化。
        </p>
      </div>
    </div>
    <div>
      <h2 class="cultivate-safety" style="color: #000" id="cultivate3">安全运营概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          服务依托于公司先进的运营理念，结合专业的安全服务工程师以及自主可控的管理工具，在维护了企业安全的同时，也提升了服务效率。
        </p>
        <p>
          通过服务服务可以对整体的网络状况包括网络设备、服务器设备等进行完整的周期性安全评估，对了解、掌握目前网络、系统安全状况和风险防范起到了积极的推动作用。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cultivate",
};
</script>

<style lang="less" scoped>
.cultivate {
  width: 100%;
  height: 100%;
}
.cultivate > div {
  width: 100%;
  margin: 45px 0px 0px;
  padding: 20px 20px 42px;
}
.cultivate > div:nth-child(2n + 1) {
  color: #999;
}
.cultivate > div:nth-child(2n) {
  background: rgba(245, 245, 245);
}
</style>
