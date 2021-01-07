<template>
  <b-container class="pg-section">
    <h1 class="p-4">Projects</h1>
    <Project1 />
    <Project2 />
    <Project3 />
  </b-container>
</template>
<script>
  import Project1 from '../components/Project1';
  import Project2 from '../components/Project2';
  import Project3 from '../components/Project3';
  export default {
    name: 'projects',
    components: {
      Project1,
      Project2,
      Project3,
    },
  };
</script>
<style>
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
    padding: 0 !important;
    /* margin: 3px; */
  }

  .project-title {
    padding: 20px;
    position: relative;
    min-height: 100px;
    top: -0.5rem;
    color: white;
    background-image: url('../assets/grid.png');
  }

  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }

  .emphasis-sm {
    color: #6c757d !important;
    font-weight: 700;
  }

  @media only screen and (min-width: 576px) {
    .project-title {
      left: -2rem;
    }
    .video-gif {
      top: -2rem;
      padding-right: 15px !important;
      padding-left: 15px !important;
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
