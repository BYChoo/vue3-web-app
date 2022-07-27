<template>
  <div class="container">
    <top-bar :dataList="topBarList"></top-bar>
    <free-list :dataList="freeList"></free-list>
  </div>
</template>

<script>
import { ref } from 'vue';
import api from '@/api'
import TopBar from './components/topBar.vue'
import FreeList from './components/free-list.vue'
export default {
  name: 'App',
  components: {
    TopBar,
    FreeList
  },
  setup() {
    const value = ref('');
    return { value };
  },
  data() {
    return {
      topBarList: [], // 头部列表
      freeList: [], // 热销列表
    }
  },
  async mounted() {
    this.getGrossData()
    this.getFreeData()
  },
  methods: {
    async getGrossData() {
      try {
        const data = await api.getBannerList({limit:10})
        this.topBarList = data.data.feed ? data.data.feed.entry:[]
      } catch(err) {
        console.log(err);
      }
    },
    async getFreeData() {
      try {
        const data = await api.getFreeList({limit:100})
        this.freeList = data.data.feed ? data.data.feed.entry:[]
        console.log(this.topBarList);
      } catch(err) {
        console.log(err);
      } 
    }
  }
}
</script>

<style>
  .container {
    overflow-x: hidden;
  }
</style>
