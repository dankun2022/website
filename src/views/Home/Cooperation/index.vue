<template>
  <div>
    <div class="cooperation">
      <ul class="action animation1">
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
      </ul>
      <ul class="action animation2">
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
      </ul>
      <ul class="action animation3">
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
      </ul>
      <ul class="action animation4">
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
        <li class="action-four"></li>
        <li class="action-one"></li>
        <li class="action-two"></li>
        <li class="action-three"></li>
      </ul>
      <div class="mask-layer">
        <div class="mask-layer-body">
          <div class="mask-layer-title">合作案例</div>
          <div class="mask-layer-intro">了解更多安盾，请联系我们</div>
          <div class="mask-layer-btn">查看更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.cooperation {
  position: relative;
  padding: 40px 0px;
  overflow: hidden;
}
.action {
  width: 5200px;
  white-space: nowrap;
}

.animation1 {
  animation: scroll-8c9ebdc6 40s linear infinite;
}

.animation2 {
  animation: scroll-8c9ebdc6 35s linear infinite;
}

.animation3 {
  animation: scroll-8c9ebdc6 50s linear infinite;
}

.animation4 {
  animation: scroll-8c9ebdc6 38s linear infinite;
}

@keyframes scroll-8c9ebdc6 {
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(-2600px, 0, 0);
  }
}

.action li {
  display: inline-block;
  width: 200px;
  height: 80px;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 100% 100%;
}

.action-one {
  background-image: url(@/assets/img/cooperation/bdtb.png);
}

.action-two {
  background-image: url(@/assets/img/cooperation/lianjia.png);
}

.action-three {
  background-image: url(@/assets/img/cooperation/saic.png);
}

.action-four {
  background-image: url(@/assets/img/cooperation/uniqlo.png);
}

.mask-layer {
  position: absolute;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsla(0, 0%, 100%, 0.82);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mask-layer-body {
  width: 380px;
  height: 236px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mask-layer-title {
  font-size: 30px;
  color: #333;
}

.mask-layer-intro {
  margin: 12px 0;
  font-size: 16px;
  color: #767676;
}

.mask-layer-btn {
  width: 140px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #767676;
  font-size: 16px;
  color: #767676;
  background: hsla(0, 0%, 100%, 0);
  cursor: pointer;
}
</style>
