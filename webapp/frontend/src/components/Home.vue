<template>
  <section class="home">    
    <article>
      <div class="profile wow fadeIn">
        <img src="@/assets/img/me1.jpg" class="item active">
        <img src="@/assets/img/me2.jpg" class="item">
        <img src="@/assets/img/me3.jpg" class="item">
        <img src="@/assets/img/me4.jpg" class="item">
      </div>
      <h1 class="wow rubberBand">Piyanuch  Na Takuatung</h1>
      <p class="wow fadeIn" data-wow-delay="0.3s">
        With 9 years of experience in develop and design<br> from marketing & advertising industry.
      </p>
    </article>
  </section>
</template>

<script>
  export default  {
    mounted () { 
      setInterval(() => {
        let active = $('.profile .item.active')

        if ( active.length == 0 ) active = $('.profile .item:last')

        let next =  active.next().length ? active.next()
            : $('.profile .item:first')


        active.addClass('last-active')

        next.css({opacity: 0.0})
          .addClass('active')
          .animate({opacity: 1.0}, 1000, function() {
            active.removeClass('active last-active');
        })
      }, 4000 )
    }
  }
</script>
<style lang="stylus">
  @-webkit-keyframes zoomBox {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.06);
              transform: scale(1.06);
    }
  }
  @keyframes zoomBox {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    100% {
      -webkit-transform: scale(1.06);
              transform: scale(1.06);
    }
  }
  .home {
    padding: 80px 40px;
    text-align: center;
    h1 {
      margin: 0 0 20px;
      font-family: 'Great Vibes';
    }
    p{
      color: #666;
      font-size: 1.2em;
    }
  }
  .profile {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 150px;
    position: relative;
    z-index: 1;
    border: 4px solid #86baa3;
    margin: 0 auto 20px;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
    }
    .active {
      opacity: 1;
      z-index: 2;
      -webkit-animation: zoomBox 5s linear;
              animation: zoomBox 5s linear;
      -webkit-animation-iteration-count: 1;
              animation-iteration-count: 1;
    }
  }
  @media screen and (max-width: 1800px) {
    .profile {
      width: 270px;
      height: 270px;
    }
  }
  @media screen and (max-width: 1440px) {
    .profile {
      width: 20%;
      height: 0;
      padding-bottom: 20%;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 1370px) {
    .profile {
      width: 16%;
      padding-bottom: 16%;
    }
  }
  @media screen and (max-width: 1024px) {
    .profile {
      width: 22%;
      padding-bottom: 22%;
    }
  }
  @media screen and (max-width: 580px) {
    .home {
      padding: 40px 20px;
    }
    .home h1 {
      font-size: 2.2em;
    }
    .home p {
      font-size: 1em;
    }
    .home p br {
      display: none;
    }
    .profile {
      width: 50%;
      padding-bottom: 50%;
    }
  }
  @media screen and (max-width: 320px) {
    .home h1 {
      font-size: 2em;
    }
  }
</style>