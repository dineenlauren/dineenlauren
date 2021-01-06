<template>
  <div class="skills">
    <b-row align-h="around">
      <b-col md="4">
        <div class="pink">
          <h5 class="mb-3">Tech</h5>
          <ul class="p-0 m-0">
            <li>Vue.js</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Github</li>
          </ul>
        </div>
      </b-col>
      <b-col md="4">
        <div class="yellow">
          <h5 class="mb-3">Creative</h5>
          <ul class="p-0 m-0">
            <li>Adobe Photoshop</li>
            <li>Adobe XD</li>
            <li>Bootstrap</li>
            <li>BootstrapVue</li>
          </ul>
        </div>
      </b-col>
      <b-col md="4">
        <div class="green">
          <h5 class="mb-3">Client CMS</h5>
          <ul class="p-0 m-0">
            <li>Wordpress.org</li>
            <li>Wordpress.com</li>
            <li>Wix</li>
            <li>Weebly</li>
          </ul>
        </div>
      </b-col>
    </b-row>

    <!-- ROW 2 -->
    <b-row align-h="around">
      <b-col md="4" order-md="2">
        <b-row class="yellow-border p-1">
          <b-col class="yellow">
            <h5 class="mb-3">Title...?</h5>
            <ul class="p-0 m-0">
              <li>UX</li>
              <li>UI</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4" order-md="3">
        <b-row class="pink-border p-1">
          <b-col class="pink">
            <h5 class="mb-3">2</h5>
            <p class="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4">
        <b-row class="green-border p-1">
          <b-col class="green">
            <h5 class="mb-3">2</h5>
            <p class="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'Skills',
  };
</script>

<style scoped>
  ul {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  li {
    display: block;
  }
  .pink {
    background-clip: padding-box;
    outline: 2px solid #ca7a69;
    outline-offset: 5px;
  }
  .yellow {
    background-clip: padding-box;
    outline: 2px solid #fec666;
    outline-offset: 5px;
  }
  .green {
    background-clip: padding-box;
    outline: 2px solid #a4aa84;
    outline-offset: 5px;
  }
</style>
