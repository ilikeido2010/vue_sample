<template>
    <div class="GetTimu">题目
      <br>

      <br> {{ tihao }}:{{tigan}}
      <div v-for="item in neirong" :key="item.daan">
          <br><input type = 'radio' name = 'daan' :value="item.daan" v-model="daan"> {{item.daan}}:{{item.xuanxiang}}
      </div>
      <br><input type = 'hidden' name = 'xingming' :value="xingming" />
      <br><button class ='but' type='submit' @click="submit" > 下一题 </button>

    </div>
</template>

<script>
  export default {
      name: 'GetTimu',
      components: {},
      data () {
          return {
                    info: '',
                    xingming: '',
                    tihao:'1',
                    tigan:'ceshi',
                    neirong:[{}],
                    daan: '',
                    msg: ''
                }
      },
      mounted () {
        var xingming=this.$route.query.xingming
        var xiayitihao=this.$route.query.xiayitihao
        var msg=''
        console.log('------in gettimu.vue-----')
        console.log(xingming)
        console.log(xiayitihao)
        var url=''
        if(parseInt(xiayitihao,10)<3){
          url='http://127.0.0.1:5000/chuti?xingming='+xingming+'&xiayitihao='+xiayitihao
          this.$axios
            .get(url)
            .then(response => (
            this.tihao= response['data']['tihao'],
            this.tigan=response['data']['tigan'],
            this.neirong= response['data']['neirong'],
            this.daan='',
            this.info = response)
            )
        }
        else{
          console.log('finish')
          this.$router.replace('/jieshu')
         }
      },
      methods:{
        submit(){
           console.log(this.tihao),
           console.log(this.daan)
           var xiayitihao=parseInt(this.tihao,10)+1
           var xingming=this.neirong[0].xingming
           console.log(xingming)
           console.log(xiayitihao)
           this.$router.push({
              path:'./tijiao',
              query:{
                tihao:this.tihao,
                xingming:xingming,
                xiayitihao: xiayitihao,
                daan:this.daan
                },
            })

        }
      }
  }
</script>
