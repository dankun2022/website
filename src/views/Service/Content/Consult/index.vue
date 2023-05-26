<template>
  <div class="consult">
    <div class="consult-important">
      <h2 class="" style="color: #000" id="consult1">信息安全管理体系咨询（ISMS）概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          ISO27001是部针对信息技术、安全技术、信息安全管理体系(ISMS)的国际标准若重关注保持信息的密性、完整性、可用性，另外也可包括例如真实性、可核查性、不可否认性和可靠性等，获得1SO27001相关证书意味着组织基本符合了信息安全管理领域最佳行业实践，为企业提高市场竞争力，改进企业内部管理英定了基础。安盾信息结合以往的1SO27001认证实施经验，基于实施过程方法论，推出了IS027001认证咨询服务，来解决当前企业所面临的难题。
        </p>
      </div>
    </div>
    <div class="consult-meet">
      <h2 class="" style="color: #000" id="consult2">风险评估概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          风险评估服务由资产评估、威胁评估、脆弱性评估、风险分析、风险处置计划等部分组成；通过服务帮助客户了解网络与信息系统的安全状况，同时通过对发现的问题和风险进行综合分析，输出最优化的方案建议。
        </p>
      </div>
    </div>
    <div>
      <h2 class="consult-safety" style="color: #000" id="consult3">等级保护咨询概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          依据国家相关法律法规，为用户提供一站式等级保护咨询服务，专业的咨询服务能在符合网络安全等级保护基础上，保障网络安全与信息化建设相协调，控制网络安全建设成本，优化网络安全资源的配置。
        </p>
      </div>
      <h2 class="consult-safety" style="color: #000">等级保护咨询收益</h2>
      <ul>
        <li>
          <img src="@/assets/img/service/security-check/stcs-icon-1.png" />
          服务本身除了帮助用户快速获证之外，还聚焦服务过程帮助发现安全现状与安全要求的差距以及获得中长期的等级保护建设发展规划建议。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Consult",
};
</script>

<style lang="less" scoped>
.consult {
  width: 100%;
  height: 100%;
}
.consult > div {
  width: 100%;
  margin: 45px 0px 0px;
  padding: 20px 20px 42px;
}
.consult > div:nth-child(2n + 1) {
  color: #999;
}
.consult > div:nth-child(2n) {
  background: rgba(245, 245, 245);
}
ul {
  width: 100%;
  height: 50%;
  margin-top:10px;
  display: flex;
  li {
    width: 33.3%;
    margin-left: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 92px;
      height: 92px;
      margin-right: 5px;
    }
  }
}
</style>
