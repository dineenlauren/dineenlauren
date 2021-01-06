<template>
  <div class="masthead text-center text-white">
    <b-row align-h="around" class="masthead-content">
      <b-col md="5" lg="5" class="">
        <h4 class="masthead-heading">University of Washington</h4>
        <h5>Seattle</h5>
        <ul class="list">
          <li>
            Lorem ipsum dolor sit amet
          </li>
          <li>
            Consectetur adipiscing elit
          </li>
          <li>
            Sed do eiusmod tempor incididunt
          </li>
        </ul>
      </b-col>
      <b-col md="5" lg="5" offset-lg="0" class="">
        <h4>University of Washington</h4>
        <h5>Seattle</h5>
        <ul class="list">
          <li>
            Lorem ipsum dolor sit amet
          </li>
          <li>
            Consectetur adipiscing elit
          </li>
          <li>
            Sed do eiusmod tempor incididunt
          </li>
        </ul>
      </b-col>
    </b-row>
    <div class="bg-circle-1 bg-circle pink"></div>
    <div class="bg-circle-2 bg-circle green"></div>
    <div class="bg-circle-3 bg-circle yellow"></div>
    <div class="bg-circle-4 bg-circle yellow"></div>
  </div>
</template>

<script>
  export default {
    name: 'Education',
  };
</script>

<style scoped>
  h5 {
    color: #6c757d;
  }
  .list {
    padding-left: 0;
    list-style: none;
    border: 1px solid red;
  }

  .masthead {
    position: relative;
    overflow: hidden;
    padding-top: calc(7rem + 72px);
    padding-bottom: 7rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
  }

  .masthead-content {
    z-index: 1;
    position: relative;
  }

  .bg-circle {
    z-index: 0;
    position: absolute;
    border-radius: 100%;
    /* background: linear-gradient(0deg, #ee0979 0%, #ff6a00 100%); */
  }

  .bg-circle-1 {
    height: 30rem;
    width: 30rem;
    bottom: -10rem;
    left: 0rem;
  }

  .bg-circle-2 {
    height: 20rem;
    width: 20rem;
    top: -5rem;
    right: -5rem;
  }

  .bg-circle-3 {
    height: 20rem;
    width: 20rem;
    bottom: -10rem;
    right: 5%;
  }

  .bg-circle-4 {
    height: 30rem;
    width: 30rem;
    top: -5rem;
    right: 35%;
  }

  .pink-border {
    border-radius: 5%;
  }
  .green {
    border-radius: 100%;
  }
</style>
