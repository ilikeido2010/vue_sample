<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links-doing</h2>
    <input type = 'text' name = 'xingming' v-model="xingming"" />
    <br><button class ='but' type='submit' @click="submit" > 开始答题 </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld4',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      xingming: ''
    }
  },
  methods:{
        submit(){
          var xingming=this.xingming
          var xiayitihao='1'
          this.$router.push({
              path:'./gettimu',
              query:{
                xingming:xingming,
                xiayitihao: xiayitihao,
                },
            })
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
