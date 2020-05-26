<template>
  <section class="sc-line-api"> 
    <div class="container">
    <h1>Line API</h1>
      <img src="@/assets/img/qr-code.png">
      <p>
        <a href="https://lin.ee/3Xtt7Ce0m">
          <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0">
        </a>
      </p>
    </div>
  </section>
</template>

<script>
  export default {
  }
</script>
<style lang="stylus">
  .sc-line-api{
    text-align: center;
    padding-bottom: 70px;
    a{
      margin-top: 40px;
      display: inline-block;
    }
    img{
      max-width: 100%;
    }
  }
  @media screen and (max-width: 580px) {
    .sc-line-api{
      padding-bottom: 40px;
    }
  }
</style>