<template>
    <div class="page-devsecops">
        <!--开源风险-->
        <div class="page-content section-opensource">
            <h2 class="opensource-title">开源风险分析产品</h2>
            <br>
            <p class="opensource-desc">全球视野的开源分析工具，快速分析，全面检索，准确定位，安全与合规并重，联合高校的流程及完善的组织，提供开源治理最佳实践方案。</p>
        </div>

        <!--产品功能-->
        <div class="section-panel section-function">
            <img class="section-panel-title" src="@/assets/img/devsecops/product-function.png">
            <div class="page-content text-center">
                <img class="product-function-detail" src="@/assets/img/devsecops/product-function-detail.png">
            </div>
        </div>
        
        <!-- 产品特色 -->
        <div class="section-panel section-feature">
            <img class="section-panel-title" src="@/assets/img/devsecops/product-feature.png" alt="">
            <div class="page-content">
                <ul class="feature-list">
                    <li class="feature-item flex">
                        <img class="feature-icon" src="@/assets/img/devsecops/icon-feature-1.png" alt="">
                        <div class="feature-desc">
                        <p class="feature-title">开发语言扫描</p>
                        <p class="feature-intro">支持604位开发语言的扫描</p>
                        </div>
                    </li>
                    <li class="feature-item flex">
                        <img class="feature-icon" src="@/assets/img/devsecops/icon-feature-2.png" alt="">
                        <div class="feature-desc">
                        <p class="feature-title">引入开源组件</p>
                        <p class="feature-intro">多种检测引擎识别不同方式引入的开源组件，如：代码片段识别、文件识别、组件识别、构建识别等</p>
                        </div>
                    </li>
                    <li class="feature-item flex">
                        <img class="feature-icon" src="@/assets/img/devsecops/icon-feature-3.png" alt="">
                        <div class="feature-desc">
                        <p class="feature-title">识别版本许可证</p>
                        <p class="feature-intro">全面识别版本许可证与组件许可证，分析开源合规风险</p>
                        </div>
                    </li>
                    <li class="feature-item flex">
                        <img class="feature-icon" src="@/assets/img/devsecops/icon-feature-4.png" alt="">
                        <div class="feature-desc">
                        <p class="feature-title">业界领先扫描速度</p>
                        <p class="feature-intro">业界领先的扫描速度，单文件扫描仅需20微妙</p>
                        </div>
                    </li>
                    <li class="feature-item flex">
                        <img class="feature-icon" src="@/assets/img/devsecops/icon-feature-5.png" alt="">
                        <div class="feature-desc">
                        <p class="feature-title">无代码泄漏风险</p>
                        <p class="feature-intro">代码进行不可逆加密后识别，无代码泄露风险</p>
                        </div>
                    </li>
                    <li class="feature-item flex">
                        <img class="feature-icon" src="@/assets/img/devsecops/icon-feature-6.png" alt="">
                        <div class="feature-desc">
                        <p class="feature-title">海量数据储备</p>
                        <p class="feature-intro">拥有海量数据储备，，嵌入到企业代码研发流程中，从设计到发布全流程深入探测其中风险</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <!-- 产品优势 -->
        <div class="section-panel section-advantage">
            <img class="section-panel-title" src="@/assets/img/devsecops/product-advantage.png" alt="">
            <div class="page-content">
                <ul class="advantage-list">
                    <li class="advantage-item text-center">
                        <img class="advantage-icon" src="@/assets/img/devsecops/advantage-icon-1.png" alt="">
                        <p class="advantage-intro">支持所有语言的代码扫描</p>
                    </li>
                    <li class="advantage-item text-center">
                        <img class="advantage-icon" src="@/assets/img/devsecops/advantage-icon-2.png" alt="">
                        <p class="advantage-intro">自定义引擎实现编排与自动化响应</p>
                    </li>
                    <li class="advantage-item text-center">
                        <img class="advantage-icon" src="@/assets/img/devsecops/advantage-icon-3.png" alt="">
                        <p class="advantage-intro">业内领先的扫描速度</p>
                    </li>
                    <li class="advantage-item text-center">
                        <img class="advantage-icon" src="@/assets/img/devsecops/advantage-icon-4.png" alt="">
                        <p class="advantage-intro">代码加密识别，（代码加密识别，无代码泄露风险）</p>
                    </li>
                    <li class="advantage-item text-center">
                        <img class="advantage-icon" src="@/assets/img/devsecops/advantage-icon-5.png" alt="">
                        <p class="advantage-intro">多种扫描引擎识别不用方式引入的开源组件</p>
                    </li>
                    <li class="advantage-item text-center">
                        <img class="advantage-icon" src="@/assets/img/devsecops/advantage-icon-6.png" alt="">
                        <p class="advantage-intro">全面识别版本许可证、组建许可证以及文件许可证，分析开源合规风险</p>
                    </li>
                    <li class="advantage-item text-center">
                        <img class="advantage-icon" src="@/assets/img/devsecops/advantage-icon-7.png" alt="">
                        <p class="advantage-intro">支持CI/CD集成，嵌入到企业代码研发过程中，从设计到发布全流程深入探测风险</p>
                    </li>
                    <li class="advantage-item text-center">
                        <img class="advantage-icon" src="@/assets/img/devsecops/advantage-icon-8.png" alt="">
                        <p class="advantage-intro">符合国际认可的软件物料清单标准</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    export default{
        name:"Page"
    }
</script>
<style lang="scss" scoped>
.section-opensource{
    padding: 90px 0 60px;
}
.opensource-title{
    display: inline-block;
    font-size: 40px;
    color: #3B3D40;
}
.opensource-desc{
    display: inline-block;
    margin-top: 22px;
    font-size: 20px;
    color: #666666;
}
.section-panel-title {
  display: block;
  width: 424px;
  height: 109px;
  margin: 32px auto 38px;
}

.product-function-detail {
  width: 1278px;
}
.section-feature {
  width: 100%;
  height: 570px;
  background: url('../assets/img/devsecops/product-feature-bg.png') no-repeat center/100% 100%;
  .feature-list {
    display: flex;
    flex-wrap: wrap;
    .feature-item {
      width: 33.33%;
      padding-right: 66px;
      margin-bottom: 50px;
      .feature-icon {
        width: 58px;
        height: 58px;
      }
      .feature-desc {
        margin-left: 6px;
        .feature-title {
          font-size: 20px;
          color: #333333;
        }
        .feature-intro {
          margin-top: 12px;
          font-size: 18px;
          color: #676B74;
        }
      }
    }
  }
}

.section-advantage {
  background-color: #999;
  .advantage-list {
    display: flex;
    flex-wrap: wrap;
    .advantage-item {
      width: 309px;
      height: 240px;
      margin: 0 6px 40px;
      padding: 25px 44px 0;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.93);
      .advantage-icon {
        width: 88px;
        height: 88px;
      }
      .advantage-intro {
        margin-top: 25px;
        font-size: 18px;
        color: #888;
      }
    }
  }
}
</style>