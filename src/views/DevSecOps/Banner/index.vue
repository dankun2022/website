<template>
    <div class="el-carousel_item is-active is-animating">
        <div class="swiper-banner flex flex-cross-center">
            <div class="page-content">
                <div class="swiper-item">
                    <h3 class="swiper-item-title">软件组成分析系统</h3>
                    <div class="swiper-item-desc">
                        SCA用于管理在应用程序和Docker中使用开源和第三方代码所带来的安全、质量和许可证合规性风险。
                        为用户提供无与伦比的第三方代码可视性，并能够在整个软件供应链和整个应用程序生命周期中对其进行控制
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
  export default {
      name:'Banner'
  }

</script>

  <style  scoped>
  .el-carousel_item.is-active{
    /* z-index: 2; */
  }
  .el-carousel_item{
    width: 100%;
    /* display: inline-block; */
    /* overflow: hidden; */
  }
  .el-carousel_item{
    /* position: absolute; */
    height: 100%;
    /* top: 0;
    left: 0; */
  }
  .swiper-banner{
      background-image: url(@/assets/img/devsecops/devsecops.png);
      height: 640px;
      /* background-size: 100% 100%; */
      /* background-position: 50%; */
      width: 100%;
  }
  .flex-cross-center{
    align-items: center;
  }
  .flex{
    display: flex;
  }
  .page-content{
      width: 1300px;
      margin: 0 auto;
  }
  .swiper-item{
    width: 700px;
  }
  .swiper-item .swiper-item-title {
      font-size: 30px;
      font-weight: 500;
      color: aliceblue;
      justify-content: center;
      align-items: center;
      width: 700px;
  }
  .swiper-item .swiper-item-desc{
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    color: aliceblue;
    line-height: 39px;
  }
  </style>
