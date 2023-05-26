<template>
  <div>
    <div class="footer">
      <div class="footer-body">
        <div class="footer-first">
          <div>
            <p>产品介绍</p>
            <ul>
              <li>产品动态</li>
              <li>公司活动</li>
              <li>客户案例</li>
            </ul>
          </div>
          <div>
            <p>快速入口</p>
            <ul>
              <li>帮助文档</li>
              <li>申请试用</li>
            </ul>
          </div>
          <div>
            <p>服务与支持</p>
            <ul>
              <li>
                <div>支持热线</div>
                <div>021-64181628</div>
              </li>
              <li>
                <div>邮箱</div>
                <div>info@sectrend.com.cn</div>
              </li>
              <li>
                <div>网址</div>
                <div>www.sectrend.com.cn</div>
              </li>
            </ul>
          </div>
          <div>
            <p>关注我们</p>
            <ul>
              <li>
                <ul class="footer-attention">
                  <li class="left-img">
                    <img src="../assets/img/qrcode-1.png" alt="" />
                    <div>更多详情</div>
                    <div>请扫码联系</div>
                  </li>
                  <li class="right-img">
                    <img src="../assets/img/qrcode-2.png" alt="" />
                    <div>扫一扫</div>
                    <div>请关注我们</div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-second">
          <span>所有：上海安盾信息技术有限公司</span>
          <span>地址：上海市徐汇区云锦路500号绿地汇中心A幢2008室</span>
        </div>
        <div class="footer-third">
          COPYRIGHT © SHANGHAI SECTREND TECHNOLOGY CO., LTD. 2021 ALL RIGHTS
          REVERSED
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>
<style scoped>
.footer {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: rgb(255, 255, 255);
  background: linear-gradient(rgb(180, 184, 194) 0%, rgb(126, 129, 138) 100%);
  padding: 34px 0 32px;
}

.footer-body {
  margin: 0 auto;
}

.footer-first {
  display: flex;
  padding-bottom: 25px;
  border-bottom: 1px solid #c9ccd5;
}

.footer-first > div {
  width: 228px;
}

.footer-first div p {
  font-size: 18px;
}

.footer-first div > ul {
  margin-top: 34px;
}

.footer-first div ul li {
  font-size: 14px;
  margin-top: 10px;
}

.footer-attention {
  display: flex;
}

.footer-attention img {
  width: 66px;
  height: 66px;
  margin-bottom: 10px;
}

.footer-attention .right-img {
  margin: 0 0 0 15px;
}

.footer-attention .left-img {
  margin-top: 0;
}

.footer-second {
  margin: 25px 0 10px;
  font-size: 14px;
}

.footer-second span:nth-child(2) {
  margin-left: 20px;
}
</style>
