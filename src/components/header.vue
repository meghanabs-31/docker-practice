<template>  
   <header>
    <h1>{{title}}</h1>
   </header>
</template>

<script>

export default {
  
  data() {
   return {
    title: 'Ninja app'
   }    
   
  }
}
</script>

<style scoped>
header{
    background: light green;
    padding: 10px;
}
h1{
  color:#226;
}


</style>