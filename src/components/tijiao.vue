<template>
    <div class="tijiao">题目
    </div>
</template>

<script>
  export default {
      name: 'Test',
      components: {},
      data () {
          return {

          }
      },
      mounted () {
        var xingming=this.$route.query.xingming
        var tihao=this.$route.query.tihao
        var daan=this.$route.query.daan
        var xiayitihao=this.$route.query.xiayitihao
        console.log('------in tijiao.vue-----')
        console.log(xingming)
        console.log(tihao)
        console.log(daan)
        var url='http://127.0.0.1:5000/tijiao?xingming='+xingming+'&tihao='+tihao+'&xiayitihao='+xiayitihao+'&daan='+daan
        console.log(url)
        this.$axios.get(url)
        console.log('before gettimu')
        this.$router.push({
              path:'./gettimu',
              query:{
                xingming:xingming,
                xiayitihao: xiayitihao,
                },
            })
      }

  }
</script>
