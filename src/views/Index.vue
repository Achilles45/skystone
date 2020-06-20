<template>
  <div class="home">
    <Navbar />
    <Banner />
    <About />
    <Intro />
     <Process />
      <Intro2 />
    <Income />
    <Advantages />
    <Footer /> 
  </div>
</template>

<script>
// @ is an alias to /src
// import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import About from '@/components/About.vue'
import Intro from '@/components/Intro.vue'
import Process from '@/components/Process.vue'
import Intro2 from '@/components/Intro2.vue'
import Income from '@/components/Income.vue'
import Advantages from '@/components/Advantages.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Navbar,
    Banner,
    About,
    Intro,
    Income,
    Process,
     Intro2,
    Advantages,
    Footer
  }
}
</script>
