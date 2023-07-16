<template>
    <div class="container">
      <ol-data-source/>
    </div>
  </template>
  
  <script>
import olDataSource from "./component/olDataSource.vue";
  export default {
    name: '多地图加载',
    components: {
        olDataSource,
    },
  }
  </script>
  
  <style  lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    // top: 64px;
    right: 0;
    position: relative;
    background: #fff;
  }
  
  </style>
  