<template>
  <div class="top-container">
    <h3>Recommend</h3>
    <div class="list-wrap">
      <ul class="list">
        <li class="list-item" v-for="(item, index) in dataList" :key="index">
          <div class="img-box">
            <img :src="item['im:image'][0].label" alt="">
          </div>
          <p v-text="item['im:name'].label"></p>
          <p v-text="item['category'].attributes.label"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    dataList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-container{
  padding: 0 .9375rem;
  border-top: 1px solid #ccc;
}
.list {
  display: flex;
  flex-wrap: nowrap;
  margin-top: .9375rem;
  overflow-x: scroll;
}
.img-box img{
  width: 4.375rem;
}
.list-item {
  text-align: center;
}
.list-item P {
  width: 5.625rem;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
</style>
