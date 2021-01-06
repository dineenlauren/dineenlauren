<template>
  <div class="experience">
    <!-- <b-row class="pink">
      <b-col cols="12" md="6" class="purple">
        <h2>TECH</h2>
        <div class="circle-1 absolute">Vue.js</div>
        <div class="circle-2 absolute">HTML</div>
        <div class="circle-3 absolute">CSS</div>
        <div class="circle-4 absolute">CSS</div>
        <div class="circle-5 absolute">JS</div>
      </b-col>
      <b-col cols="12" md="6" class="purple">
        <h2>TECH</h2>
        <div class="circle-1 absolute">ONE</div>
        <div class="circle-2 absolute">TWO</div>
        <div class="circle-3 absolute">THREE</div>
        <div class="circle-4 absolute">FOUR</div>
      </b-col>
    </b-row> -->
  </div>
</template>

<script>
  export default {
    name: 'Experience',
  };
</script>

<style scoped>
  .text-center {
    text-align: center !important;
  }
  .purple {
    position: relative;
    width: auto;
    height: 300px;
    /* padding-top: calc(7rem + 72px);
    padding-bottom: 7rem; */
  }

  .absolute {
    position: absolute;
    border-radius: 100%;
  }
  .circle-1 {
    background: #ff6a0092;
    width: 8rem;
    height: 8rem;
    top: 40%;
    left: 20%;
    padding-top: 3rem;
    /* padding-bottom: rem; */
  }

  .circle-2 {
    background: #ff6a0092;
    height: 6rem;
    width: 6rem;
    top: 2rem;
    left: 35%;
  }

  .circle-3 {
    background: #ff6a0092;
    height: 5rem;
    width: 5rem;
    top: 7rem;
    left: 35%;
  }

  .circle-4 {
    background: #ff6a0092;
    height: 4rem;
    width: 4rem;
    top: 8rem;
    left: 5%;
  }
</style>
