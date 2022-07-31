<script>
import SYSTEX_API_DATA from '@/assets/systex_api_data.json'
import CardLayoutVue from '../components/CardLayout.vue'
import BScroll from '@better-scroll/core'
import { RouterLink, RouterView } from 'vue-router'
const bs = new BScroll('.div', {
  disableMouse: false,
  disableTouch: false
})

export default {
  name: 'app',
  components: {
    CardLayoutVue
  },
  data() {
    return {
      systex_url: 'https://smuat.megatime.com.tw/EAS/Apps/systex/hr_elearning/hr_elearning_20220602_181350.json',
      fetchData: null
    }
  },
  methods: {
    async fetch_SYSTEX_API() {
      //const data = await fetch(`${this.systex_url}`)
      //this.fetchData = await data.json()
      //console.log(this.fetchData)
      this.fetchData = SYSTEX_API_DATA.DataList
      console.log(SYSTEX_API_DATA.DataList)
    },
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        probeType: 0,
        click: true
      })
    },
    clickHandler(item) {
      window.alert(item)
    },
  },
  created() {
    this.fetch_SYSTEX_API()
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.bs.destroy()
  },
}
</script>

<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item" v-for="(item, index) in fetchData" :key="index">
          <router-link :to="{ name: 'detail', params: { title: `${item.title}`, content: `${JSON.stringify(item)}` } }">
            <CardLayoutVue :passData='item' />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.core-container .scroll-wrapper {
  height: calc(100% - 30px);
  position: relative;
  overflow: hidden;
}

.core-container .scroll-wrapper .scroll-item {
  text-align: center;
}

.core-container {
  padding-left: 5px;
  padding-right: 5px;
}

a {
  color: #222222;
  font-family: monospace;
  font-weight: bold;
  text-decoration: none;
}
</style>
