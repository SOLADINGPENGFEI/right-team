<template>
  <div id="app">
    <!-- <div class="header">
        <img src="./img/index_logo.png" alt="">
        <div class="nav_case">
          <span @click="goHere('index')">首页</span>
          <span @click="goHere('productCenter')">产品中心</span>
          <span @click="goHere('successCase')">成功案例</span>
          <span>渠道合作</span>
          <span>新闻资讯</span>
          <span>关于明科</span>
        </div>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  watch: {},
  methods: {
    goHere(path){
      this.$router.push({path:'/'+path});
    }
  },
  async mounted() {},
  updated() {}
};
</script>
<style lang="less" scoped>
#app{
  width: 100%;
  height: 100%;
}

.header{
  padding: 0 3.59rem;
  line-height: 0.67rem;
  display: flex;
  justify-content: space-between;
  background: #282830;
  img{
    height: 0.67rem;
    width: 1.89rem;
  }
  .nav_case{
    display: inline-block;
    span{
      padding-right: 0.45rem;
      font-size: 0.18rem;
      color: #fff;
      cursor: pointer;
    }
  }
}

</style>

