<template>
  <div class="map-box">
    <div id="map" ref="rootmap"></div>
    <change-base-map @changeBaseValue="getChangeBaseValue" />
  </div>
</template>
<script>
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import TileGrid from 'ol/tilegrid/TileGrid'
import ChangeBaseMap from './ChangeBaseMap.vue'
import TileImage from 'ol/source/TileImage'
import { get } from 'ol/proj'
import { TileArcGISRest } from 'ol/source'
export default {
  components: { ChangeBaseMap },
  data() {
    return {
      map_layers: {},
      map: null,
    }
  },
  methods: {
    initMap() {
      const view = new View({
        projection: 'EPSG:4326',
        center: [114.90317, 32.00218], //光山
        zoom: 13,
      })
      // 天地图卫星图
      var tianditu_img = this.addXYZLayer(
        'http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=c6ea8a2d7a9794e4075bb6105b997762',
        false
      )
      // 天地图行政图
      var tianditu_vec = this.addXYZLayer(
        'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=c6ea8a2d7a9794e4075bb6105b997762',
        true
      )
      // 天地图行政图注记
      var tianditu_cva = this.addXYZLayer(
        'http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=c6ea8a2d7a9794e4075bb6105b997762',
        true
      )
      // 天地图影像图注记
      var tianditu_cia = this.addXYZLayer(
        'http://t4.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=c6ea8a2d7a9794e4075bb6105b997762',
        false
      )
      this.map_layers = {
        moon: tianditu_img, // 卫星图
        admin: tianditu_vec, // 地形图
        cva: tianditu_cva, // 注记1
        cia: tianditu_cia, // 注记2
      };
      this.map = new Map({
        //底图注掉即可
        layers: [
          tianditu_img,
          tianditu_vec,
          tianditu_cva,
          tianditu_cia,
        ],
        target: "map",
        view: view,
      });
    },

        // 增加XYZ格式的地图服务图层
  addXYZLayer(url, visible) {
    let source = new XYZ({
      url: url,
      wrapX: true,
      crossOrigin: 'anonymous',
    })
    let layer = new TileLayer({
      source: source,
      visible: visible,
    })
    return layer
  },
  getChangeBaseValue(value) {
      for (var key in this.map_layers) {
          this.map_layers[key].setVisible(false);  
      }
      if(value == 'admin'){
        this.map_layers['admin'].setVisible(true);
        this.map_layers['cva'].setVisible(true);
      }else{
        this.map_layers['moon'].setVisible(true);
        this.map_layers['cia'].setVisible(true);
      }
    },
  },

  mounted() {
    let vm = this
    setTimeout(function () {
      let _this = vm
      _this.initMap()
      //   _this.getEsriData()
      _this.map.getView().on('change:resolution', () => {
        let zoom = _this.map.getView().getZoom() //获取当前地图的缩放级别
      })
    }, 500)
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
      // width: 100%;
      // height: 100%;
    }
  }
}
</style>