<template>
  <b-container class="pg-section">
    <b-container fluid="sm" class="content-container py-3">
      <h3 class="pb-3">About</h3>
      <b-row>
        <b-col cols="12" class="p-0">
          <p>
            By way of introduction, my name is Dineen, and I am a Full-Stack
            Designer with previous professional experience in marketing,
            consulting, commerce, and operations management within the
            commercial real estate industry.
          </p>
          <p>
            I seek complexity and the challenge of unwinding the underlying
            issues. I am at my best when developing solutions that effectively
            communicate the client’s value proposition and reinforce clarity,
            usability, and brand across various digital mediums.
          </p>
          <p>
            In my previous role, I gravitated towards opportunities that
            ultimately validated my overwhelming interest in digital design. So
            much so, it motivated me to pursue and complete a formal education
            in UX, UI, and Front-End Development at Seattle University.
          </p>
          <p>
            By combining my 6+ years of commercial real estate brokering and
            office management experience with my technical skillset I can
            effectively collaborate cross-functionally to translate high-level
            requirements and interaction flows into clean, intuitive user
            interfaces and experiences.
          </p>
          <p>
            I aim to craft content, communications, and experiences that mix
            personality with function while maintaining the client's needs.
            Using empathy, curiosity and design lets create simple and effective
            solutions to complex problems.
          </p>
          <p>
            Combining my work experience and technical based skillset allows me
            to understand office and team dynamic, as well as necessary web
            improvements. I aim for solutions that mix in personality with
            function while maintaining a client's needs.
          </p>
          <div>
            <b-img :src="require('../assets/dineenlauren2.png')" fluid></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
  import { BImg } from 'bootstrap-vue';
  export default {
    name: 'about',
    components: {
      BImg,
    },
  };
</script>

<style scoped>
  .pg-section p {
    margin-bottom: 1rem !important;
  }
  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  @media only screen and (min-width: 576px) {
    .content-container {
      max-width: 600px;
    }
  }

  /* BOOTSTRAP STYLING */
  /* .dark-tab {
    background-color: #706e6e !important;
    border: 1px solid #706e6e !important;
    border-radius: 0.4rem !important;
    padding: 0.3rem 0.2rem !important;
    font-weight: 500 !important;
    color: white !important;
  }
  .light-tab {
    border: 1px solid#CA7A69 !important;
    border-radius: 0.4rem !important;
    padding: 0.3rem 0.2rem !important;
    color: #706e6e !important;
    font-weight: 500 !important;
  }
  .section-container {
    background-color: rgb(236, 211, 183);
    margin: 10px 0;
  }
  .row-vert {
    min-height: 10rem;
    margin-top: 1rem;
    background-color: purple;
  }
  .col,
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col,
  .col-auto,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm,
  .col-sm-auto,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md,
  .col-md-auto,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg,
  .col-lg-auto,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl,
  .col-xl-auto {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 0.25rem;
  } */
</style>
