<template>
    <div class="swiper-banner">
      <div class="page-content">
          <div class="banner-item">
              <div class="banner-item-title">解决方案</div>
              <div class="banner-item-children">
                  <h3>开源治理</h3>
                  <div class="page">开源引入过程进行管理，帮助开源用户规范开源流程，提升企业的开源治理能力。覆盖组织架构、风险管理、技术管理、安全评估等方面需遵循的规范和应具备的能力，帮助用户构建和提升开源软件治理能力。</div>
              </div>
              <div>
                  <h3>车联网安全评估</h3>
                  <div class="page">TARA（威胁分析和风险评估）是ISO/SAE 21434（道路车辆(网络安全工程)）定义的关键活动，通过TARA能够系统分析汽车产品（组件/系统）所面临的威胁，评估可能造成的危害程度，提出有针对性的抵御威胁的防护对策和整改措施，防范和化解系统安全风险。</div>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'SolutionBanner'
  }
  
  </script>
  
  <style  scoped>
  .swiper-banner{
      background-image: url(@/assets/img/banner/solution.png);
      height: 640px;
      width: 100%;
      display: flex;
      align-items: center;
  }
  .page-content{
      width: 1300px;
      margin: 0 auto;
      display: flex;
      align-items: center;
  }
  .banner-item{
      display: flex;
      flex-direction: column;
      width: 700px;
  }
  .banner-item-title{
      left: 0;
      font-size: 30px;
      color: aliceblue;
  }
  h3{
      color: aliceblue;
      font-weight: 400;
      margin-top: 15px;
      margin-bottom: 10px;
  }
  .page{
      color: aliceblue;
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
  }
  </style>
  