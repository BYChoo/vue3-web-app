<template>
  <div class="free-container">
    <div class="list-wrap">
      <ul class="list">
        <li class="list-item" v-for="(item, index) in dataList" :key="index">
          <div>
            {{index + 1}}
          </div>
          <div class="img-box">
            <img :src="item['im:image'][0].label" alt="">
          </div>
          <div>
            <p v-text="item['im:name'].label"></p>
            <p v-text="item['category'].attributes.label"></p>
          </div>
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
.free-container{
  padding: 0 .9375rem;
}
.list {
  margin-top: .9375rem;
}
.img-box img{
  width: 4.375rem;
  margin-right: .625rem;
  margin-left: .3125rem;
}
.list-item {
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: .625rem 0;
}
</style>
