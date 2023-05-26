<template>
  <div>
    <div class="advantage">
      <h3>我们的优势</h3>
      <div>
        <span>提供具有国际竞争力的自主创新安全产品和最佳实践服务</span>
        <a href="">查看全部产品</a>
      </div>
      <ul>
        <li>
          <img src="@/assets/img/home/advantage-icon.png" alt="" />
          <h4>卓越团队</h4>
          <p>卓越的研究团队，精湛的技术团队，为客户提供有力的保障</p>
        </li>
        <li>
          <img src="@/assets/img/home/advantage-icon.png" alt="" />
          <h4>安全创新</h4>
          <p>以安全为核心，以创新为驱动力，为客户营造更加安全高效网络环境</p>
        </li>
        <li>
          <img src="@/assets/img/home/advantage-icon.png" alt="" />
          <h4>专业防护</h4>
          <p>汇聚网安领域专家，技术精英，为用户提供全面的防护能力检验</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.advantage {
  width: 100%;
  height: 600px;
  padding-top: 66px;
  text-align: center;
  color: #fff;
  background-image: url(@/assets/img/home/advantage-bg.png);
  background-size: 100% 100%;
}

.advantage h3 {
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
}

.advantage div {
  margin-top: 10px;
  font-size: 14px;
  line-height: 20px;
}

.advantage a {
  margin-left: 40px;
  cursor: pointer;
}

.advantage ul {
  margin-top: 66px;
  display: flex;
  justify-content: center;
}

.advantage ul li {
  width: 320px;
  height: 330px;
  text-align: center;
  background: rgba(3, 3, 3, 0.49);
  cursor: pointer;
}

.advantage ul li:hover {
  background: rgba(2, 89, 220, 0.49);
}

.advantage ul li img {
  width: 60px;
  height: 60px;
  margin-top: 56px;
}

.advantage ul li h4 {
  margin: 34px 0 20px;
  font-size: 20px;
  font-weight: 400;
}

.advantage ul li p {
  padding: 0 72px;
  font-size: 16px;
  line-height: 26px;
}
</style>
