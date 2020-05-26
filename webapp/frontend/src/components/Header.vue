<template>
  <header>
  <a href="/" class="logo">P</a>
    <a class="btn-mobile">
      <span></span>
      <span></span>
      <span></span>         
    </a>
    <nav>
        <ul class="menu">
          <li>
            <a href="/static">Static</a>
          </li>
          <li>
            <a href="/google-api">Google API</a>
          </li>
          <li>
            <a href="/line-api">Line API</a>
          </li>
          <li>
            <a href="/express-js">Express.js</a>
          </li>            
        </ul>
    </nav>
  </header>
</template>

<script>
  export default {
  }
</script>
<style lang="stylus">
  header {
    width: 100%;
    padding: 5px;
    line-height: 1.8em;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    background: #fff;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
  }
  header .logo {
    color: #86baa3;
    font-family: "Great Vibes",cursive;
    font-size: 2em;
    width: 54px;
    height: 54px;
    line-height: 61px;
    text-align: center;
    display: block;
    border-radius: 50%;
    border: 2px solid #86baa3;
    margin: 5px auto 10px;
  }
  header .btn-mobile {
    width: 50px;
    display: none;
    padding: 5px 7px;
    border-radius: 5px;
    float: right;
    border: 2px solid #86baa3;
  }
  header .btn-mobile span {
    width: 100%;
    height: 4px;
    background: #86baa3;
    display: block;
    border-radius: 3px;
    margin: 5px 0;
  }
  header nav {
    overflow: hidden;
  }
  header .menu {
    width: 100%;
    text-align: center;
  }
  header .menu li {
    display: inline-block;
    padding: 0 10px;
  }
  header .menu a {
    display: block;
    text-transform: uppercase;
    font-size: 1.2em;
    color: #7c9479;
  }
  header .menu a:hover {
    color: #86baa3;
  }
  
  @media screen and (max-width: 580px) {
    header{
      padding: 10px;
      .logo{
        float: left;
        margin: 0;
        font-size: 1.6em;
        width: 46px;
        height: 46px;
        line-height: 50px;
      }
      .btn-mobile{
        display: block;
      }
      nav{
        position: fixed;
        top: 60px;
        left: 0;
        width: 100%;
        height: calc(100vh - 60px);
        background: rgba(0,0,0,0.4);
        z-index: 22;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s all ease-out;
      }
      .menu{
        padding: 15vh 0 20vh;
        background: #fff;
        li{
          display: block;
          padding: 10px;
        }
      }
    }
    .open-menu {
      overflow-y: hidden;
      header nav{
        opacity: 1;
        visibility: visible;
      }
    }
    main{
      margin-top: 66px;
    }
  }
</style>