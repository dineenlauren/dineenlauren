<template>
  <b-container class="pg-section">
    <h3 class="p-4">Projects</h3>

    <b-container fluid="sm" class="content-container">
      <b-row>
        <b-col cols="12" class="p-0">
          <b-embed
            type="video"
            aspect="4by3"
            autoplay="true"
            loop="true"
            muted
            playsinline
          >
            <source src="../assets/rsvp.webm" type="video/webm" />
            <source src="../assets/rsvp.mp4" type="video/mp4" />
          </b-embed>
        </b-col>
        <b-col cols="12" offset-md="2" class="project-text">
          <h5 class="m-0">RSVP App</h5>
          <p><span class="emphasis">Tech: </span> Words, words, words, words</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </b-col>
      </b-row>
      <!-- <div class="gif-container"></div>
      <div class="relative project-content"></div> -->
    </b-container>
    <b-container fluid="sm" class="content-container">
      <b-row>
        <b-col cols="12" class="p-0">
          <b-embed
            type="video"
            aspect="4by3"
            autoplay="true"
            loop="true"
            muted
            playsinline
          >
            <source src="../assets/rsvp.webm" type="video/webm" />
            <source src="../assets/rsvp.mp4" type="video/mp4" />
          </b-embed>
        </b-col>
        <b-col cols="12" offset-md="2" class="project-text">
          <h5 class="m-0">RSVP App</h5>
          <p><span class="emphasis">Tech: </span> Words, words, words, words</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid="sm" class="content-container">
      <b-row>
        <b-col cols="12" class="p-0">
          <b-embed
            type="video"
            aspect="4by3"
            autoplay="true"
            loop="true"
            muted
            playsinline
          >
            <source src="../assets/rsvp.webm" type="video/webm" />
            <source src="../assets/rsvp.mp4" type="video/mp4" />
          </b-embed>
        </b-col>
        <b-col cols="12" offset-md="2" class="project-text">
          <h5 class="m-0">RSVP App</h5>
          <p><span class="emphasis">Tech: </span> Words, words, words, words</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <!-- <b-container>
      <div class="relative img-left">
        <video autoplay muted playsinline>
          <source
            poster="poster.png"
            src="../assets/rsvp.webm"
            type="video/webm"
          />
          <source src="../assets/rsvp.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="relative project-content">
        <h5 class="m-0">RSVP App</h5>
        <p><span class="emphasis">Tech: </span> Words, words, words, words</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </b-container>
    <b-container>
      <div class="relative img-left">
        <b-img src="https://placekitten.com/200/200"></b-img>
      </div>
      <div class="relative project-content">
        <h5 class="m-0">RSVP App</h5>
        <p><span class="emphasis">Tech: </span> Words, words, words, words</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </b-container> -->
  </b-container>
</template>
<script>
  export default {
    name: 'projects',
  };
</script>
<style scoped>
  /* NEW STUFF TESTING */
  .pg-section {
    padding-bottom: 20px;
  }
  /* OLD STUFF   */
  .content-container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 15px 31px #706e6e;
    margin-bottom: 20px;
    padding-bottom: 20px;
    /* margin-top: -10px;
    margin-left: 0px; */
    /* padding: 10px; */
  }
  video {
    border-radius: 10px !important;
  }
  .project-text {
    background-color: pink;
  }
  /* .img-left {
    z-index: 1;
    left: -2rem;
  }

  .img-right {
    z-index: 1;
    right: -2rem;
  } */
  .project-content {
    margin-left: auto;
    text-align: left;
    top: -1rem;
    box-shadow: 2px 7px 7px #706e6e;
    border: 1px solid rgba(0, 0, 0, 0.22);
    padding: 2rem 1rem 1rem 2rem;
  }
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }
  .emphasis {
    font-weight: 700;
  }

  @media only screen and (min-width: 576px) {
    .content-container {
      max-width: 500px;
    }
    .content-img {
      left: -3rem;
    }
    .content {
      margin-left: auto;
      top: -1rem;
      max-width: 400px;
      /* left: 1rem; */
      box-shadow: 2px 7px 7px #706e6e;
      /* max-width: 600px; */
      border: 1px solid rgba(0, 0, 0, 0.22);
      padding: 3rem 1rem 1rem 2rem;
    }
  }
</style>
