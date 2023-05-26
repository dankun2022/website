<template>
  <div class="sidebar">
    <el-col :span="12" class="sidebar-box">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        background-color="rgba(245,247,250)"
        text-color="#000"
        active-text-color="blue"
        :unique-opened="true"
      >
        <el-menu-item
          style="
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 400;
            color: #000;
          "
        >
          <span slot="title">服务预览</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <span @click="content">安全检测</span>
          </template>
          <el-menu-item-group>
            <a href="#detection1"><el-menu-item index="1-1">渗透测试</el-menu-item></a>
            <a href="#detection2"><el-menu-item index="1-2">漏洞扫描</el-menu-item></a>
            <a href="#detection3"><el-menu-item index="1-3">配置核查</el-menu-item></a>
            <a href="#detection4"><el-menu-item index="1-3">代码审计</el-menu-item></a>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span @click="content">安全咨询</span>
          </template>
          <el-menu-item-group>
            <a href="#consult1"> <el-menu-item index="2-1">信息安全管理体系咨询</el-menu-item></a>
            <a href="#consult2"> <el-menu-item index="2-2">风险评估</el-menu-item></a>
            <a href="#consult3"> <el-menu-item index="2-3">等级保护咨询</el-menu-item></a>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span @click="content">安全保障</span>
          </template>
          <el-menu-item-group>
           <a href="#guarantee1"> <el-menu-item index="3-1">重要时期保障</el-menu-item></a>
           <a href="#guarantee2"> <el-menu-item index="3-2">应急响应</el-menu-item></a>
           <a href="#guarantee3"> <el-menu-item index="3-3">安全运营</el-menu-item></a>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span @click="content">安全培训</span>
          </template>
          <el-menu-item-group>
           <a href="#cultivate1"> <el-menu-item index="4-1">安全技能培训</el-menu-item></a>
           <a href="#cultivate2"> <el-menu-item index="4-2">安全意识培训</el-menu-item></a>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import EventBus from "@/Bus/index";
export default {
  name: "Sidebar",
  data() {
    return {
      typeS: ["安全检测", "安全咨询", "安全保障", "安全培训"],
    };
  },
  methods: {
    //展开事件
    handleOpen(key, keyPath) {
      this.$router.push({
        path: "/service",
        query: {
          id: key * 1,
        },
      });
      EventBus.$emit("content", this.typeS[key - 1]);
    },
    content(event) {},
  },
  mounted() {},
};
</script>

<style scoped>
.sidebar-box {
  width: 350px;
  height: 100%;
  font-size: 14px;
  padding: 0 0 0 160px;
  background-color: rgba(245, 247, 250);
}
</style>
