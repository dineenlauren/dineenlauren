<template>
  <section>
    <b-navbar toggleable="sm" type="light" variant="light" fixed="top">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        <img :src="logo" class="logo-img" />
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" fixed="top">
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
  export default {
    name: 'SiteNav',
    data() {
      return {
        logo: require('../assets/logo.png'),
      };
    },
  };
</script>

<style scoped>
  a.nav-link {
    text-transform: uppercase !important;
    font-size: 20px !important;
    border: solid 1px rgba(255, 255, 255, 0) !important;
  }
  a.nav-link:hover {
    color: black !important;
    border-top: solid 1px black !important;
    border-bottom: solid 1px black !important;
  }
  .logo-img {
    height: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #81948b;
  }
</style>
