<template>  
   <footer>
    <p>{{copyrighti}}</p>
   </footer>
</template>

<script>

export default {
  
  data() {
   return {
    copyright: 'copyright of 2022'
   }    
   
  }
}
</script>

<style scoped>
footer{
    background: l#343;
    padding: 6px;
}
p{
  color:#211;
  text-align: left;
}


</style>