<template>
 <div class="banner">
   <div class="container">
     <div class="row">
       <div class="col-12 text-center">
         <div class="text">
           <h1><span class="orange">Skystone Capital </span>Investment Platform</h1>
           <h3>OVER 13K MEMBERS ON <i class="fab fa-telegram"></i> TELEGRAM!</h3>
           <h3>Invest your money today and get 50% interest within 5 days using our investment programme.</h3>
           <h3>Buy and Sell <i class="fab fa-bitcoin"></i> Bitcoin with the leading bitcoin exchange provider, we also grant loans to our customers who have successfully crossed their top up level which is 50k.</h3>
           <div class="button__holder">
             <router-link to="/signup" class="banner__btn">REGISTER NOW!</router-link>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.banner{
    margin-top: -15px;
    min-height: 80vh;
    background: linear-gradient( to bottom, rgba(4, 0, 253, 1), rgba(9, 168, 22, 0.447) ), url('../assets/images/banner.jpg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    padding: 6rem 0;
    .text{
      color: #fff;
      .orange{
        color: $secondary-color;
        font-weight: bold;
      }
      h1{
        padding-bottom: 1.4rem;
      }
      h3{
        font-size: 1.6rem;
        padding: .4rem 0;
      }
      .button__holder{
        margin-top: 4rem;
        .banner__btn{
        background: $secondary-color;
        color: #fff;
        text-decoration: none;
        padding: 1.2rem 1.4rem;
        border-radius: 3px;
        font-weight: 400;
      }
      }
    }
}

@media only screen and (max-width: 600px){
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: rgba(4,9,30,.85) !important;
  }
}
</style>