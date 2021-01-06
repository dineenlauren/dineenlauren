<template>
  <b-container class="pg-section">
    <h1 class="p-4">Projects</h1>
    <b-container fluid="sm" class="content-container relative">
      <div class="project-title">
        <h3>RSVP App</h3>
      </div>
      <b-row align-h="center">
        <b-col cols="10" class="video-gif">
          <b-embed
            type="video"
            aspect="4by3"
            loop="true"
            muted
            playsinline
            controls
          >
            <source src="../assets/rsvp-firestore-app.webm" type="video/webm" />
            <source src="../assets/rsvp-firestore-app.mp4" type="video/mp4" />
          </b-embed>
        </b-col>
        <b-col cols="10" class="project-text">
          <p><span class="emphasis">Tech: </span> Vue | Firestore | Firebase</p>
          <p>
            <span class="emphasis">What it is: </span> A RSVP website allowing
            users to login and update their RSVP status.
          </p>
          <p>
            <span class="emphasis">The cool thing about it: </span>This is a
            replica of a real wedding website I created for a friend's wedding.
            They needed to restrict their guest count, so important points to
            accomodate:
          </p>
          <b-row cols="1">
            <b-col>
              <p class="emphasis-sm">
                Eliminate the ability for guests to sign themselves up
              </p>
              <p></p>
              <p></p>
            </b-col>
            <b-col class="mt-3">
              <p class="emphasis-sm">
                Add restrictions for adding guests
              </p>
              <p></p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid="sm" class="mt-5 content-container relative">
      <div class="project-title">
        <h3>RSVP App</h3>
      </div>
      <b-row align-h="center">
        <b-col cols="12" lg="11" class="video-gif">
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
        <b-col cols="12" class="project-text">
          <p><span class="emphasis">Tech: </span> Words, words, words, words</p>
          <p>
            <span class="emphasis">What it is: </span> Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
          <p>
            <span class="emphasis">The cool thing about it: </span> Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>
<script>
  export default {
    name: 'projects',
  };
</script>
<style scoped>
  .pg-section {
    padding-bottom: 20px;
  }
  .project-text {
    padding: 10px;
  }
  div.project-text > p {
    margin-bottom: 10px !important;
  }
  .video-gif {
    object-fit: cover;
    /* margin: 3px; */
  }

  .project-title {
    padding: 20px;
    position: relative;
    min-height: 100px;
    left: -2rem;
    top: -0.5rem;
    color: white;
    background-image: url('../assets/grid.png');
    background-color: #a4aa84;
  }

  .content-container {
    border-radius: 10px;
    box-shadow: 5px 15px 31px #706e6e;
    margin-bottom: 20px;
    padding: 0px 0 20px 0 !important;
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
  .emphasis-sm {
    color: #6c757d !important;
    font-weight: 700;
  }
  li.list {
    list-style: none;
  }

  @media only screen and (min-width: 576px) {
    .content-container {
      max-width: 600px;
    }
    .project-title {
      left: -2rem;
    }
    .video-gif {
      top: -2rem;
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
