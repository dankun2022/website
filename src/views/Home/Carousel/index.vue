<template>
  <el-carousel :interval="5000" arrow="always" width="100%" height="640px">
    <!-- <el-carousel-item v-for="item in imgArray" :key="item">
      <img :src="item" class="rightImg" height="640px" />
    </el-carousel-item> -->
    <el-carousel-item class="img-one">
      <div>
        <div class="img-body">
          <h3>安盾信息</h3>
          <div>
            安盾是一家领先的实战创新型网络安全公司，专业的网络安全综合解決方案提供商。公司秉承“安全左移、以攻促防”的安全理念，专注于开源治理、漏洞风险检测、安全防御建设和攻防型人オ培养，致力于帮助用户先于黑客发现并及时解决安全问题，共同打造个更安全、更便捷、更美好的互联网世界。
          </div>
          <a href="">查看详情</a>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item class="img-two">
      <div>
        <div class="img-body">
          <h3>软件组成分析系统</h3>
          <div>
            SCA用于管理在应用程序和Docker中使用开源和第三方代码所带来的安全、质量和许可证合规性风险。为用户提供无与伦比的第三方代码可视性，并能够在整个软件供应链和整个应用程序生命周期中对其进行控制
          </div>
          <a href="">查看详情</a>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item class="img-three">
      <div>
        <div class="img-body">
          <h3>专业服务</h3>
          <div>
            为用户提供贯穿信息系统完整生命周期的安全技术专业服务。致力于在系统投产前弥补安全缺陷，优化资源配置，建立和维护全面、有效、合规的信息安全管理体系，保障业务运营和战略达成。
          </div>
          <a href="">查看详情</a>
        </div>
      </div>
    </el-carousel-item>
    <el-carousel-item class="img-four">
      <div>
        <div class="img-body">
          <h3>解决方案</h3>
          <div>
            <h4>开源治理</h4>
            开源引入过程进行管理，帮助开源用户规范开源流程，提升企业的开源治理能力。覆盖组织架构、风险管理、技术管理、安全评估等方面需遵循的规范和应具备的能力，帮助用户构建和提升开源软件治理能力。
          </div>
          <div>
            <h4>车联网安全评估</h4>
            TARA（威胁分析和风险评估）是ISO/SAE 21434（道路车辆(网络安全工程)）定义的关键活动，通过TARA能够系统分析汽车产品（组件/系统）所面临的威胁，评估可能造成的危害程度，提出有针对性的抵御威胁的防护对策和整改措施，防范和化解系统安全风险。
          </div>
          <a href="">查看详情</a>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {};
</script>

<style>
.el-carousel__item {
  color: #fff;
  display: flex !important;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  background-size: 100% 100%;
}
.img-one {
  background-image: url(@/assets/img/banner/about.png);
}

.img-two {
  background-image: url(@/assets/img/banner/devsecops.png);
}

.img-three {
  background-image: url(@/assets/img/banner/service.png);
}

.img-four {
  background-image: url(@/assets/img/banner/solution.png);
}

.el-carousel__item > div {
  width: 1300px;
  margin: 0 auto;
}

.img-body {
  width: 700px;
}

.img-body h3 {
  font-size: 30px;
  font-weight: 500;
}

.img-body div {
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 39px;
}

.img-body div h4{
    font-size: 20px;
    font-weight: 400;
}

.img-body a {
  display: inline-block;
  width: 120px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-top: 50px;
  border-radius: 27px;
  font-size: 18px;
  color: #fff;
  background: #0259dc;
  cursor: pointer;
}
</style>
