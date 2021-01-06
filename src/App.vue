<template>
  <div id="app">
    <SiteNav id="nav" />

    <div class="profile-bg">
      <b-img :src="image" class="profile-img" alt="profile photo"></b-img>
    </div>
    <b-row>
      <b-col cols="12" lg="4">
        <div class="title-text">
          <h1>Dineen</h1>
          <h1>Lauren</h1>
          <h4>Web</h4>
          <h4>Developement</h4>
        </div>
      </b-col>
      <b-col cols="12" lg="8">
        <div class="transition-container">
          <transition name="view" mode="out-in">
            <router-view />
          </transition>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import SiteNav from './components/SiteNav';

  export default {
    components: {
      SiteNav,
    },
    data() {
      return {
        tabIndex: 0,
        image: require('./assets/profile.png'),
      };
    },
  };
</script>

<style>
  #app {
    flex: 1 0 auto;
    background-color: black;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  #nav {
    padding: 10px;
  }
  .profile-img {
    position: absolute;
    bottom: 0;
    max-width: 450px;
  }
  .profile-bg {
    position: fixed;
    height: 100vh;
    width: 100%;
    bottom: 0;
    left: 0;
    background-image: url('./assets/rainbow-drops.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
