<template>
  <b-container fluid="sm" class="mt-5 content-container relative">
    <div class="project-title">
      <h3>Property OMs</h3>
      <ul>
        <li>
          <a href="./OM.pdf" target="_blank">View OM</a>
        </li>
      </ul>
    </div>
    <b-row align-h="center">
      <b-col cols="12" lg="11" class="video-gif">
        <b-embed
          type="video"
          aspect="4by3"
          controls
          loop="true"
          muted
          allowfullscreen
        >
          <source src="../assets/union-street-capital.webm" type="video/webm" />
          <source src="../assets/union-street-capital.mp4" type="video/mp4" />
        </b-embed>
      </b-col>
      <b-col cols="12" class="project-text">
        <p><span class="emphasis">Tech: </span> Words, words, words, words</p>
        <p>
          <span class="emphasis">What it is: </span> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <p>
          <span class="emphasis">The cool thing about it: </span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'Project2',
  };
</script>

<style scoped>
  .project-title {
    background-color: #ca7a69;
  }
  .content-container {
    border-radius: 10px;
    box-shadow: 5px 15px 31px #706e6e;
    margin-bottom: 20px;
    padding: 0px 0 20px 0 !important;
  }
  .emphasis {
    font-weight: 700;
  }

  ul {
    list-style: none;
  }
  li {
    display: inline-block;
  }
  li > a {
    color: #292929;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 576px) {
    .content-container {
      max-width: 600px;
    }
  }
</style>
