<template>
  <div id="app">
    <mainHeader></mainHeader>
    <main>
      <router-view></router-view>
    </main>
    <mainFooter></mainFooter>
  </div>
</template>
<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import $ from 'jquery'
  export default {
    name: 'App',
    components:{
      'mainHeader':Header,
      'mainFooter':Footer
    }
  }
</script>
<style lang="stylus">
  .box-center{    
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  body {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.6em;
    background: #FFE;
    color: #666;
    padding: 0;
    margin: 0;
  }
  h1, h2, p, ul, li{    
    padding: 0;
    margin: 0;
  }
  h1 {
    color: #86baa3;
    font-size: 3.5em;
    padding: 0;
    line-height: 1.4em;
    margin: 1em 0;
    font-weight: normal;
  }
  h2 {
    font-size: 1.5em;
    color: #86baa3;
  }
  h3 {
    font-size: 1.3em;
  }
  main {
    margin-top: 104px;
    overflow: hidden;
  }
  a {
    text-decoration: none;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    &:hover{
      text-decoration: none;
    }
  }
  .container {
    width: 100%;
    padding: 0 30px;
    max-width: 1400px;
    overflow: hidden;
    margin: 0 auto;
  }
  @media screen and (max-width: 780px) {
    h1{
      font-size: 3.2em;
    }
  }
  @media screen and (max-width: 580px) {
    h1{
      font-size: 2.5em;
      margin: 0.5em;
    }
    h2{
      font-size: 1.4em;
    }
    h3{
      font-size: 1.2em;
    }
    h4{
      font-size: 1.1em;
    }
    main{
      margin-top: 66px;
    }
  }
  @media screen and (max-width: 320px) {
    body{
      font-size: 14px;
    }
    h3{
      font-size: 1.1em;
    }
    h4{
      font-size: 1em;
    }
  }
</style>