<template>
  <div class="">
    <Header></Header>
    <div class="center">
      <router-view/>
    </div>
    <Footer></Footer>
    <el-backtop>
      <div style="height: 100%;width: 100%;">
        <img src="../../img/top.png" alt="" style="width:100%;height:100%" >
      </div>
    </el-backtop>
    <div class="information">
      <img src="../../img/information.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.information{
  width: 40px;
  height: 40px;
  img{
    width: 42px;
    height: 42px;
    position: fixed;
    bottom: 100px;
    right: 40px;
  }
}
</style>