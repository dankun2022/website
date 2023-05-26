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
</style>