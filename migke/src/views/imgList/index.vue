<template>
  <div class="content">
    <ul>
      <li v-for="(item,index) in list" :key="index" class="imgs">
        <img :src="item" alt>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        require("../../img/1.png"),
        require("../../img/2.png"),
        require("../../img/3.png"),
        require("../../img/4.png"),
        require("../../img/5.png"),
        require("../../img/6.png"),
        require("../../img/11.png"),
        require("../../img/12.png"),
        require("../../img/13.png")
      ]
    }
  }
};
</script>
<style>
.content {
  height: 400px;
  margin-top: 62px;
  width: 100%;
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
}
ul li{
    width:28%;
    height: 80rpx;
    margin-top: 20px;
}
.imgs img{
    width: 100%;
    height: 100%;
}
</style>
