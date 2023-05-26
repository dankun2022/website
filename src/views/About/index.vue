<template>
  <div>
    <div class="about-one">
      <div>
        <div class="about-body">
          <h3>安盾信息</h3>
          <div>
            安盾是一家领先的实战创新型网络安全公司，专业的网络安全综合解決方案提供商。公司秉承“安全左移、以攻促防”的安全理念，专注于开源治理、漏洞风险检测、安全防御建设和攻防型人オ培养，致力于帮助用户先于黑客发现并及时解决安全问题，共同打造个更安全、更便捷、更美好的互联网世界。
          </div>
        </div>
      </div>
    </div>
    <div class="about-two">
      <div class="about-two-body">
        <div class="about-two-left">
          <div class="about-two-left-title">
            <span>公司简介/</span>
            <span>company profile</span>
          </div>
          <div>
            <p>
              安盾信息是一家领先的实战创新型网络安全公司，专业的网络安全综合解决方案提供商。
            </p>
            <p>
              公司秉承“安全左移，以攻促防”的安全理念，专注于开源治理漏洞，风险检测，安全防御建设和攻防型人才培养，致力于帮助用户先于黑客发现并及时解决安全问题，共同打造一个更安全，更便捷，更美好的互联网世界。
            </p>
          </div>
        </div>
        <img src="@/assets/img/about/about-us.png" alt="" />
      </div>
    </div>
    <div class="about-center">
      <div class="about-center-body">
        <div class="about-center-text">
          <img src="@/assets/img/about/company-vision-icon.png" alt="" />
          <ul>
            <li>企业愿景</li>
            <li>提供具有国际竞争力的自主创新安全产品和最佳实践服务</li>
          </ul>
        </div>
        <img src="@/assets/img/about/company-vision.png" alt="" />
      </div>
    </div>
    <div class="about-center">
      <div class="about-center-body">
        <img src="@/assets/img/about/company-mission.png" alt="" />
        <div class="about-center-text">
          <img src="@/assets/img/about/company-mission-icon.png" alt="" />
          <ul>
            <li>企业使命</li>
            <li>帮助客户全面提升其IT基础设施的安全性和生产效能</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="about-center">
      <div class="about-center-body">
        <div class="about-center-text">
          <img src="@/assets/img/about/company-vision-icon.png" alt="" />
          <ul>
            <li>价值观</li>
            <li>诚信、创新、务实 严格、严肃、严明 沉静、责任、成长</li>
          </ul>
        </div>
        <img src="@/assets/img/about/company-value.png" alt="" />
      </div>
    </div>
    <div class="about-six">
      <div class="about-six-body">
        <div></div>
        <div class="about-six-right">
          <div>
            <img src="@/assets/img/about/address-icon.png" alt="" />
            <span>上海</span>
          </div>
          <p>地址：上海市徐汇区云锦路500号绿地汇中心A幢2008室</p>
          <p>支持热线：021-64181628</p>
          <p>邮箱：info@sectrend.com.cn</p>
          <p>网址：www.sectrend.com.cn</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
/* 第一块 */
.about-one {
  width: 100%;
  height: 640px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  background-size: 100% 100%;
  background-image: url(@/assets/img/banner/about.png);
}

.about-one > div {
  width: 1300px;
  margin: 0 auto;
}

.about-body {
  width: 700px;
}

.about-body h3 {
  font-size: 30px;
  font-weight: 500;
}

.about-body div {
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 39px;
}

/* 第二块 */
.about-two {
  padding: 95px 0px 75px;
}

.about-two-body {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.about-two-left-title span:nth-child(1) {
  font-size: 30px;
  color: rgb(51, 51, 51);
}

.about-two-left-title span:nth-child(2) {
  font-size: 20px;
  color: rgb(102, 102, 102);
}

.about-two-left div:nth-child(2) {
  margin-top: 35px;
  font-size: 18px;
  color: rgb(102, 102, 102);
}

.about-two-body img {
  flex-shrink: 0;
  width: 429px;
  height: 305px;
  margin-left: 104px;
}

/* 第三四五块 */
.about-center {
  padding: 25px 0px;
  background-color: rgb(246, 250, 253);
}

.about-center-body {
  width: 950px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.about-center-text {
  width: 310px;
}

.about-center-text > img {
  width: 78px;
  height: 35px;
}
ul li {
  list-style-type: disc;
}
ul li::marker {
  font-size: 30px;
  color: rgb(145, 141, 141);
}
ul li:nth-child(1) {
  margin-top: 35px;
  font-size: 20px;
  color: rgb(102, 102, 102);
}

ul li:nth-child(2) {
  margin-top: 12px;
  font-size: 20px;
  color: rgb(153, 153, 153);
}

.about-center-body > img {
  width: 402px;
  height: 402px;
}

/* 第六块 */
.about-six {
  padding: 25px 0px;
}

.about-six-body {
  width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.about-six-body > div {
  width: 602px;
  height: 255px;
}

.about-six-right {
  margin-left: 92px;
}

.about-six-right div {
  display: flex;
  align-items: center;
}

.about-six-right img {
  width: 44px;
  height: 44px;
}

.about-six-right span {
  margin-left: 4px;
  font-size: 26px;
  color: rgb(14, 20, 33);
}

.about-six-right p {
  margin-top: 15px;
  font-size: 16px;
  color: rgb(102, 102, 102);
}
</style>
