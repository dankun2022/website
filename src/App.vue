<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <PageFooter></PageFooter>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* css3盒子模型 */
  box-sizing: border-box;
}

/* em 和 i 斜体的文字不倾斜 */
em,
i {
  font-style: normal;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #333;
}

/* 去掉li 的小圆点 */
li {
  list-style: none;
}

img {
  /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
  border: 0;
  /* 取消图片底侧有空白缝隙的问题 */
  vertical-align: middle;
}

button {
  /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
  cursor: pointer;
  text-decoration: none;
}
</style>
