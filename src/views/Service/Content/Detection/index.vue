<template>
  <div class="detection">
    <div class="detection-index1">
      <h2 class="" style="color: #000" id="detection1">渗透测试概述</h2>
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
      <h2 class="" style="color: #000">渗透测试收益</h2>
      <ul style="margin: 20px 0">
        <li>
          <img
            src="@/assets/img/service/security-check/stcs-icon-1.png"
          />直面安全脆弱点 有助于内部安全的提升
        </li>
        <li>
          <img
            src="@/assets/img/service/security-check/stcs-icon-1.png"
            alt=""
          />帮助更好地了解应用系统运行状态，预防攻击者对应用系统恶意攻击
        </li>
        <li>
          <img
            src="@/assets/img/service/security-check/stcs-icon-1.png"
            alt=""
          />完善信息安全保障体系，确保信息安全控制措施有效
        </li>
      </ul>
    </div>
    <div class="detection-index2">
      <h2 class="" style="color: #000" id="detection2">漏洞扫描概述</h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          服务采取“人”与“工具”结合的模式，所使用的安全漏洞扫描工具是国内外领先的扫描器，安全专家的介入有效提高漏洞结果准确率，以及降低扫描工具对评估环境的负担和风险。提供专业的漏洞修复报告并且配备专业的安全专家进行人工解读，确保漏洞能及时得到专业的修复指导。
        </p>
        <h2 class="" style="color: #000">漏洞扫描收益</h2>
        <ul style="margin: 20px 0">
          <li>
            <img
              src="@/assets/img/service/security-check/stcs-icon-1.png"
              alt=""
            />
            漏洞扫描服务能够帮助用户识别各种复杂的Web应用以及IT资产
          </li>
          <li>
            <img
              src="@/assets/img/service/security-check/stcs-icon-1.png"
              alt=""
            />
            能够全面深入发现主机和应用中存在的安全弱点
          </li>
          <li>
            <img
              src="@/assets/img/service/security-check/stcs-icon-1.png"
              alt=""
            />
            降低国家利益、社会利益、企业利益乃至个人利益的受损风险
          </li>
        </ul>
      </div>
    </div>
    <div class="detection-index3">
      <h2 class="detection-safety" style="color: #000" id="detection3">
        配置核查概述
      </h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          基线检查服务能够帮助客户IT人员，高效的检查设备、收集数据、制作和审核风险报告，识别各项不符合安全规范要求的系统。
        </p>
      </div>
      <h2 class="" style="color: #000">配置核查收益</h2>
      <ul style="margin: 20px 0">
        <li>
          <img
            src="@/assets/img/service/security-check/stcs-icon-1.png"
            alt=""
          />
          服务可以覆盖客户上线安全检查、第三方入网安全检查、合规安全检查、日常安全检查等全方位检查
        </li>
        <li>
          <img
            src="@/assets/img/service/security-check/stcs-icon-1.png"
            alt=""
          />同时可以基于大数据收集与核查评估结果，综合提升客户安全能力
        </li>
      </ul>
    </div>
    <div class="detection-index4">
      <h2 class="detection-safety" style="color: #000" id="detection4">
        代码审计概述
      </h2>
      <img
        src="@/assets/img/service/title-line.png"
        alt=""
        style="width: 100%"
      />
      <div style="margin: 20px 0">
        <p>
          代码审计服务能够对整个信息系统的所有源代码进行检查，从整套代码切入最终明至某个威胁点并加以验证，以此明确整体系统中的安全隐患点。
        </p>
      </div>
      <h2 class="" style="color: #000">代码审计收益</h2>
      <ul style="margin: 20px 0">
        <li>
          <img
            src="@/assets/img/service/security-check/stcs-icon-1.png"
            alt=""
          />
          源代码审计服务可有效督促管理人员杜绝任何一处小的缺陷，从而降低整体风险。
        </li>
        <li>
          <img
            src="@/assets/img/service/security-check/stcs-icon-1.png"
            alt=""
          />
          通过专业的源代码审计报告，能为用户开发人员提供安全问题的解决方案，完善代码安全开发规范。
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EventBus from "@/Bus/index";
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  mounted() {
    // EventBus.$on("imgSum", (data) => {
    //   this.imgUrl = data.detection;
    // });
  },
  beforeDestroy() {
    // EventBus.$off("imgSum");
  },
};
</script>
<style lang="less" scoped>
.detection {
  width: 100%;
  height: 100%;
}
.detection > div {
  width: 100%;
  margin: 45px 0px 0px;
  padding: 20px 20px 42px;
}
.detection > div:nth-child(2n + 1) {
  color: #999;
}
.detection > div:nth-child(2n) {
  background: rgba(245, 245, 245);
}
ul {
  width: 100%;
  height: 50%;
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
