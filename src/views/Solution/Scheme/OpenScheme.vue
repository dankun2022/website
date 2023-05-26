<template>
    <div>
        <div class="all">
            <div class="nav">
                <div class="juzhong zixun">咨询和培训</div>
                <div class="juzhong peixun">知识类培训和咨询</div>
                <div class="nav-list">
                    <div class="list-one">
                        <div class="list-one-biaoti">
                            <div><img src="@/assets/img/solution/solution-icon-1.png" alt=""></div>
                            <div class="card-title">合规类知识咨询</div>
                        </div>
                        <p class="card-row">许可证类：许可证相关知识，Top20许可证解读，许可证兼容性，许可证合规风险，相关场景下的许可证合规指引</p>
                        <p class="card-row">EAR类：何为开源软件等EAR，如何判断开源软件受EAR管制？如何进行开源软件的BIS备案；公司确保EAR合规？</p>
                        <p class="card-row">其他合规：GDPR和产品安全</p>
                    </div>
                    <div class="list-one">
                        <div class="list-one-biaoti">
                            <div><img src="@/assets/img/solution/solution-icon-1.png" alt=""></div>
                            <div class="card-title">知识类培训和咨询</div>
                        </div>

                        <p class="card-row">针对项目组成员，产品线，管理人员，公司领导甚至所有人员进行开源软件生态，开源软件合规和安全风险累方面的知识培训，已使大家正确理解开源和开发风险</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="all alls">
            <div class="nav">
                <div class="juzhong zixun">合规类实践</div>
                <div class="juzhong peixun">合规类实践</div>
                <div class="nav-list">
                    <div class="list-ones">
                        <div class="list-one-biaoti">
                            <div><img src="@/assets/img/solution/solution-icon-1.png" alt=""></div>
                            <div class="card-title">合规类知识咨询</div>
                        </div>
                        <p class="card-rows">开源软件许可证合规管理规范</p>
                        <p class="card-rows">场景分析，场景治理，版本合规分发</p>
                        <p class="card-rows">借助SCA工具进行开源许可证治理</p>

                    </div>
                    <div class="list-ones">
                        <div class="list-one-biaoti">
                            <div><img src="@/assets/img/solution/solution-icon-1.png" alt=""></div>
                            <div class="card-title">知识类培训和咨询</div>
                        </div>
                        <p class="card-rows">开源软件许可证合规管理规范</p>
                        <p class="card-rows">场景分析，场景治理，版本合规分发</p>
                        <p class="card-rows">借助SCA工具进行开源许可证治理</p>
                        <p class="card-rows">场景分析，场景治理，版本合规分发</p>
                        <p class="card-rows">借助SCA工具进行开源许可证治理</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="all">
            <div class="nav">
                <div class="juzhong zixun">如何构建企业合规一体化治理能力</div>
                <div class="juzhong peixun">如何构建企业合规一体化治理能力</div>
                <div class="nav-lists">
                    <div class="nav-list-three">
                        <div class="nav-list-row">
                            <img src="@/assets/img/solution/solution-icon-3.png" alt="">
                            <p>企业如何构建开源合规&安全治理能力</p>
                        </div>
                    </div>
                    <div class="nav-list-three">
                        <div class="nav-list-row">
                            <img src="@/assets/img/solution/solution-icon-3.png" alt="">
                            <p>企业如何构建开源合规&安全治理能力</p>
                        </div>
                    </div>
                    <div class="nav-list-three">
                        <div class="nav-list-row">
                            <img src="@/assets/img/solution/solution-icon-3.png" alt="">
                            <p>企业如何构建开源合规&安全治理能力</p>
                        </div>
                    </div>
                </div>
                <div class="nav-lists list-row">
                    <div class="nav-list-three">
                        <div class="nav-list-row">
                            <img src="@/assets/img/solution/solution-icon-3.png" alt="">
                            <p>企业如何构建开源合规&安全治理能力</p>
                        </div>
                    </div>
                    <div class="nav-list-three">
                        <div class="nav-list-row">
                            <img src="@/assets/img/solution/solution-icon-3.png" alt="">
                            <p>企业如何构建开源合规&安全治理能力</p>
                        </div>
                    </div>
                    <div class="nav-list-three">
                        <div class="nav-list-row">
                            <img src="@/assets/img/solution/solution-icon-3.png" alt="">
                            <p>企业如何构建开源合规&安全治理能力</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></template>

<script>
export default {
    components: {

    }
}

</script>

<style scoped>
.all {
    background-color: rgb(250, 250, 250);
    /* padding: 54px 0 94px; */
}
.alls{
    background-color: rgb(243, 245, 248);
}

.nav {
    width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.juzhong {
    display: flex;
    align-items: center;
    justify-content: center;
}

.zixun {
    font-size: 38px;
    color: #333;
    font-weight: 400;
    padding-top: 54px;
}

.peixun {
    margin-top: 6px;
    font-size: 16px;
    color: #999;
}

.nav-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 94px;
    margin-top: 54px;
}

.list-one {
    height: 250px;
    width: 606px;
    padding: 42px;
    border: 1px solid #fff;
    box-shadow: 4px 10px 12px 0 rgba(0,54,143,.06);
    background: linear-gradient(180deg,#f3f5f8,#fdfdfe);
}
.list-ones{
    height: 250px;
    width: 606px;
    padding: 42px;
    box-shadow: 4px 10px 12px 0 hsla(0,0%,75.7%,.11);
    background: linear-gradient(180deg,#fff,#fdfdfe);
}
.list-one-biaoti {
    display: flex;
    height: 40px;
    align-items: center;
    margin-bottom: 16px;
}

img {
    height: 32px;
    width: 32px;
}

.card-title {
    margin-left: 6px;
    font-size: 20px;
    color: #333;
}

.card-row {
    font-size: 14px;
    color: #676b74;
    margin-bottom: 16px;
}
.card-rows{
    font-size: 14px;
    color: #676b74;
}
.nav-list-three{
    width: 408px;
    height: 166px;
    /* margin-bottom: 54px; */
    margin-top: 54px;
    padding: 42px;
    display: flex;
    align-items: center;
    border: 1px solid #fff;
    box-shadow: 4px 10px 12px 0 rgba(0,54,143,.06);
    background: linear-gradient(180deg,#f3f5f8,#fdfdfe);
}
.nav-list-row{
    display: flex;
    align-items: center;
}
.nav-list-row p{
    font-size: 18px;
    color: #333;
}
.nav-lists{
    display: flex;
    justify-content: space-between;
}

.list-row{
    padding-bottom: 188px;
}
</style>
