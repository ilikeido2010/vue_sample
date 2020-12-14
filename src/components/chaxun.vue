<template>
  <div class="chaxun">
    <h2>查询页面</h2>
    <input type = 'text' name = 'xingming' v-model='chaxunxingming' />
    <br><button class ='but' type='submit' @click="submit" > 查询 </button>
    <div v-if="show" >
      <br>姓名:<input type = 'text' name = 'xingming' v-model='xingming' />
      <br>成绩:<input type = 'text' name = 'chengji' v-model='chengji' />
      <br>评语:<input type = 'text' name = 'pingyu' v-model='pingyu' />
    </div>



  </div>
</template>

<script>
export default {
  name: 'chaxun',
  data () {
    return {
      chaxunxingming: '',
      xingming: '',
      chengji: '',
      pingyu: '',
      show: false
    }
  },
  methods:{
        submit(){
          if(this.chaxunxingming==''){
            console.log("it is blank"),
            this.show='false'
          }else{
          var chaxunxingming=this.chaxunxingming
          var url='http://127.0.0.1:5000/gerenchaxun?xingming='+chaxunxingming
          console.log(url)
          this.$axios
            .get(url)
            .then(response => (
            this.xingming= response['data']['xingming'],
            this.chengji=response['data']['chenji'],
            this.pingyu= response['data']['pingyu'],
            this.show='True'
            ))
          }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
