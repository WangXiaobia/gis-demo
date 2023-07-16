<template>
  <div class="map-box"></div>
</template>
<script>
import test from './test.js'
export default {
  props: {
  },
  watch: {
  },
  data() {
    return {
    instance:null,
    }
  },
  methods: {
    findData(){
        this.instance = new test({ map: '1', type:'2' });
        this.instance.fun()
    }



  },
}
</script>

<style lang="less" scoped>
.map-box {
  width: 100%;
  height: 100%;
  position: relative;
  #map {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    canvas {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      top: 0;
    }
  }
  #overviewmap-target {
    position: fixed;
    right: 1rem;
    top: 7.46rem;
    z-index: 999;
    padding: 0.12rem;
    width: 3.1rem;
    height: 2.47rem;
    background: linear-gradient(149.91deg, rgba(32, 121, 255, 0.4) 0.25%, rgba(11, 21, 37, 0) 8.81%),
      radial-gradient(50% 3.57% at 50% 100%, rgba(45, 150, 255, 0.6) 0%, rgba(21, 44, 78, 0) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 2.21%, rgba(24, 99, 206, 0.05) 100%), rgba(27, 45, 73, 0.9);
    box-shadow: 0px 2px 8px rgba(14, 33, 62, 0.4);
    backdrop-filter: blur(12px);

    border-radius: 0.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /deep/ .ol-overviewmap {
      left: 0.12rem;
      top: 0.12rem;
      bottom: 0.12rem;
      right: 0.12rem;
      .ol-overviewmap-box {
        border: 1.5px solid #ff0000;
      }
      .ol-overviewmap-map {
        width: 2.86rem;
        height: 2.23rem;
        border: 0;
      }
    }
    /deep/ .ol-control button {
      display: none;
      color: #fff;
      background-color: #73abf5;
    }
  }
  #scale-line {
    position: absolute;
    right: 170px;
    bottom: 8px;
    z-index: 2000;
    height: 10px;
    text-align: center;
    border: 1px solid;
    border-top: 0;
    font-size: 10px;
    color: white;
    /deep/.scaleLine {
      font-size: 16px;
      // background: black;
      color: white;
      font-size: 10px;
      font-family: '微软雅黑';
      margin-top: -8px;
    }
  }
  #scale-line.whiteColor {
    color: black;
    /deep/.scaleLine {
      color: black;
    }
  }
}
</style>
<style lang="less">
/*闪烁预警样式*/
.point_animation {
  background: rgba(68, 210, 255, 1);
  left: -5px;
  top: -5px;
  width: 10px;
  height: 10px;
  border: 2px rgba(68, 210, 255, 1) solid;
  border-radius: 50%;
  position: absolute;
}

.point_animation p,
.point_animation span {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 5px;
  height: 5px;
  animation: point_animation 2.5s infinite;
  box-shadow: 0px 0px 1px rgba(68, 210, 255, 1) inset;
  margin: 0px;
  border-radius: 50%;
}
.point_animation span {
  animation-delay: 0.8s;
}
@keyframes point_animation {
  10% {
    transform: scale(1);
  }
  100% {
    transform: scale(8);
  }
}
.point_animation2 {
  background: rgba(255, 161, 0, 1);
  left: -5px;
  top: -5px;
  width: 10px;
  height: 10px;
  border: 2px rgba(255, 161, 0, 1) solid;
  border-radius: 50%;
  position: absolute;
}

.point_animation2 p,
.point_animation2 span {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 5px;
  height: 5px;
  animation: point_animation2 2.5s infinite;
  box-shadow: 0px 0px 1px rgba(255, 161, 0, 1) inset;
  margin: 0px;
  border-radius: 50%;
}
.point_animation2 span {
  animation-delay: 0.8s;
}
@keyframes point_animation2 {
  10% {
    transform: scale(1);
  }
  100% {
    transform: scale(8);
  }
}
.point_animation3 {
  background: rgba(246, 16, 46, 1);
  left: -8px;
  top: -8px;
  width: 15px;
  height: 15px;
  border: 2px rgba(246, 16, 46, 1) solid;
  border-radius: 50%;
  position: absolute;
}

.point_animation3 p,
.point_animation3 span {
  position: absolute;
  left: 2px;
  top: 2px;
  width: 5px;
  height: 5px;
  animation: point_animation2 2.5s infinite;
  box-shadow: 0px 0px 1px rgba(246, 16, 46, 1) inset;
  margin: 0px;
  border-radius: 50%;
}
.point_animation3 span {
  animation-delay: 0.8s;
}
@keyframes point_animation3 {
  10% {
    transform: scale(1);
  }
  100% {
    transform: scale(8);
  }
}
</style>
