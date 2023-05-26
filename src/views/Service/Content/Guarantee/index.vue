<template>
  <div class="guarantee">
    <div class="guarantee-important">
      <h2 class="" style="color: #000" id="guarantee1">重要时期保障概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          渗透测试是完全模拟黑客可能使用的攻击技术和漏洞发现技术，对目标系统的安全做深入的探测，发现系统最脆弱的环节。
        </p>
        <p>
          渗透测试和黑客入侵最大区别在于渗透测试是经过客户授权，采用可控制、非破坏性质的方法和手段发现目标和网络设备中存在弱点，帮助管理者知道自己网络所面临的问题，同时提供安全加固意见帮助客户提升系统的安全性。服务采取远程/现场漏洞挖掘的方式进行服务
        </p>
      </div>
    </div>
    <div class="guarantee-meet">
      <h2 class="" style="color: #000" id="guarantee2">应急响应概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          应急响应服务是以快速响应、快速报告、快速修复、快速恢复为行动指南，积极开展网络安全事件的预防、发现、预警和协调处置等工作的安全服务。提供包括比如入侵取证、灾难恢复、疑难木马查杀等工作内容；
        </p>
        <p>
          凭借在应急响应领域丰富的经验，能够针对问题快速定位与处理，降低损失并且快速追踪到事件的源头。
        </p>
      </div>
    </div>
    <div>
      <h2 class="guarantee-safety" style="color: #000" id="guarantee3">
        安全运营概述
      </h2>
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
  name: "guarantee",
};
</script>

<style scoped>
.guarantee {
  width: 100%;
  height: 100%;
}
.guarantee > div {
  width: 100%;
  margin: 45px 0px 0px;
  padding: 20px 20px 42px;
}
.guarantee > div:nth-child(2n + 1) {
  color: #999;
}
.guarantee > div:nth-child(2n) {
  background: rgba(245, 245, 245);
}
</style>
