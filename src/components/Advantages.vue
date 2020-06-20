<template>
  <div class="advantages" id="advantages">
      <div class="container">
          <div class="row">
              <div class="col-12 text-center">
                  <h2>OUR PLATFORM ADVANTAGES</h2>
                  <p>We are the platform of opportunities. Build your net worth with us and we grow together everyday. Before you know it, your success is easily achievable.</p>
              </div>
          </div>
          <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-10">
                  <div class="box__content">
                     <div class="icon__holder">
                          <i class="fa fa-user"></i>
                     </div>
                      <div class="content">
                          <h3>SUSTAINABLE SYSTEM</h3>
                          <p>We are here to provide a sustainable system that will enable people to become digital entrepreneurs.</p>
                      </div>
                  </div>
                   <div class="box__content">
                     <div class="icon__holder">
                          <i class="fa fa-lock"></i>
                     </div>
                      <div class="content">
                          <h3>STRONG SECURITY</h3>
                          <p>Your account is always secured and protected with Faithful Givers Investment.</p>
                      </div>
                  </div>
                   <div class="box__content">
                     <div class="icon__holder">
                          <i class="fa fa-globe"></i>
                     </div>
                      <div class="content">
                          <h3>PASSION</h3>
                          <p>Faithful Givers Investment is created solely out of the passion to raise everyone without exception. We are ready to keep you strong for the journey ahead.</p>
                      </div>
                  </div>
                  <div class="box__content">
                     <div class="icon__holder">
                          <i class="fa fa-envelope"></i>
                     </div>
                      <div class="content">
                          <h3>24/7 SUPPORT</h3>
                          <p>You can contact us anytime if you're having issues using our platform.</p>
                      </div>
                  </div><br><br>
              </div>
              <div class="col-md-1"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.advantages{
    background: #F8F8FF;
    h2{
        color: #000;
        font-weight: bold;
    }
    .box__content{
        display: flex;
        border: 1px solid #ebebeb;
        background: #fff;
        padding: 1.3rem 2rem;
        margin: .7rem 0;
        .content{
            h3{
                font-weight: bold;
                color: #000;
                font-size: 1.5rem;
            }
        }
        .icon__holder{
            padding-right: 3rem;
            font-size: 3rem;
        }
        .fa-lock{
            color: #3F51B5;
        }
        .fa-globe{
            color: #2196F3;
        }
        .fa-envelope{
            color: #FF5722;
        }
    }
}
</style>