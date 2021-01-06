<template>
  <div class="about-me">
    <b-row class="justify-content-md-center">
      <b-col class="col-group">
        <p class="mb-3">
          My name is Dineen and I am a full-stack designer with a background in
          sales and business operations. I have a knack for UX, UI and Front-End
          Development as well as an instinct for streamlining processes to
          promote efficiency.
        </p>
        <p class="mb-3">
          Combining my work experience and technical based skillset allows me to
          understand office and team dynamic, as well as necessary web
          improvements. I aim for solutions that mix in personality with
          function while maintaining a client's needs.
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'AboutMe',
    data() {
      return {
        image: require('../assets/profile.png'),
      };
    },
  };
</script>

<style scoped></style>
