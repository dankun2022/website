<template>
  <div>
    <div class="solution">
      <h3>解决方案</h3>
      <div>
        <span>安盾信息多年行业积累，致力于为客户提供优质服务</span>
        <a href="">查看全部产品</a>
      </div>
      <ul>
        <li>
          <img src="@/assets/img/home/solution-icon1.png" alt="" />
          <h4>软件组成分析方案</h4>
          <p>
            清源SCA，是由安盾研发团队自主研发，基于多年的开源软件、开源合规和漏洞数据的积累，通过多种行业领先的算法打造出安全、合规、高效、易用的软件成分分析系统，为企业梳理研发过程中的软件物料清单，解决研发开源治理过程中的安全和合规问题。
          </p>
        </li>
        <li>
          <img src="@/assets/img/home/solution-icon2.png" alt="" />
          <h4>车联网安全评估服务</h4>
          <p>
            TARA（威胁分析和风险评估）是ISO/SAE
            21434（道路车辆(网络安全工程)）定义的关键活动，通过TARA能够系统分析汽车产品（组件/系统）所面临的威胁，评估可能造成的危害程度，提出有针对性的抵御威胁的防护对策和整改措施，防范和化解系统安全风险。TARA评估服务是安盾信息结合多年安全服务经验，面向汽车行业所推出的一项综合性评估服务，评估范围覆盖道路车辆E/E系统的需求、设计、开发、生产、操作、维护等阶段周期的网络安全风险。
          </p>
        </li>
        <li>
          <img src="@/assets/img/home/solution-icon3.png" alt="" />
          <h4>专家渗透测试服务</h4>
          <p>
            在应用系统发布和使用之前，保证其安全性和可靠性非常重要。渗透测试作为一种安全脆弱性测试方法，被广泛应用于应用系统的安全测试中。它可以在应用程序发布之前发现潜在的漏洞，并消除相应的威胁。
            安盾信息所提供的渗透测试服务，是模拟真正的黑客入侵攻击方法，发现并利用目标应
            用系统的安全脆弱性。服务过程以高级安全专家人工渗透为主，在风险可控的情况下，尽可能的暴露出目标应用系统的安全脆弱性
          </p>
        </li>
        <li>
          <img src="@/assets/img/home/solution-icon3.png" alt="" />
          <h4>代码审计服务</h4>
          <p>
            安盾信息提供的代码审计是将代码安全缺陷形成审计检查列表，对照用户提供的代码逐检查。检查列表会根据被审计的对象和应用场景进行调整。
            服务采用专业代码审计工具对代码进行审计，形成审计报告，并对审计出的回题与标准相关审计项逐人工核对。对于使用外部开源代码较多的系统，在审计时将先检测开源代码的使用率，开源代码的安全缺陷从已知洞角度检查对于误报问题，安盾信息辅以安全专家人工比对审计核查的方式开展。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.solution {
  width: 100%;
  height: 660px;
  padding-top: 66px;
  text-align: center;
  background-image: url(@/assets/img/home/solution-bg.png);
}

.solution h3 {
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
}

.solution div {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}

.solution a {
  margin-left: 40px;
  cursor: pointer;
  color: #1854fb;
}

.solution ul {
  margin-top: 88px;
  display: flex;
  justify-content: center;
}

.solution ul li {
  width: 280px;
  height: 410px;
  padding: 0px 20px 15px;
  margin: 0 15px;
  border-radius: 5px;
  box-shadow: 0 6px 15px 0 rgba(206, 209, 218, 0.4);
  background: linear-gradient(180deg, #dfdfdf, #fff);
}

.solution ul li img {
  display: block;
  width: 60px;
  height: 60px;
  margin: 30px auto 0;
}

.solution ul li h4 {
  margin: 20px 0;
  font-size: 18px;
  font-weight: 400;
}

.solution ul li p {
  font-size: 12px;
  color: #3d485d;
  line-height: 22px;
}
</style>
