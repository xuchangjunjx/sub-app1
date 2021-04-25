<template>
  <div class="about">
    <h1 class="h1">子应用page1</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.http("1111"));
  }
};
</script>
