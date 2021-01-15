<template>
  <b-container fluid="sm" class="content-container relative">
    <div class="project-title">
      <h3 class="m-0">Potter / Star Wars API</h3>
      <ul>
        <li>
          <a
            href="https://www.dineenlauren.com/vue-app-project/#/"
            target="blank"
            >View Site</a
          >
        </li>
        <li class="mx-2">|</li>
        <li>
          <a
            href="https://github.com/dineenlauren/vue-app-project/tree/gh-pages"
            target="blank"
            >View Code</a
          >
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
          <source src="../assets/first-api.webm" type="video/webm" />
          <source src="../assets/first-api.mp4" type="video/mp4" />
        </b-embed>
      </b-col>
      <b-col cols="12" class="project-text">
        <p><span class="emphasis">Tech: </span> Vue | Axios | BootstrapVue</p>
        <p>
          <span class="emphasis">What it is: </span> My first ever API project
          using Vue.js and Axios
        </p>
        <p>
          <span class="emphasis">The cool thing about it: </span>
        </p>
        <b-row cols="1">
          <b-col>
            <p class="emphasis-sm">
              [ one ]
            </p>
          </b-col>
          <b-col class="mt-3">
            <p class="emphasis-sm">
              [ two ]
            </p>
            <p></p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'Project1',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .project-title {
    background-color: #a4aa84;
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
