<template>
  <footer>    
    <i class="material-icons">person_pin</i>
    <p>
      111/17 Moo 6 Village Centro  Pinklao - Wongwaen,<br>
      Soi Wat Phra Ngoen, Bang Muang, Bang Yai, Nonthaburi, 11140
    </p> 
    <ul class="bx-social wow fadeIn">
      <li>
        <a href="https://www.linkedin.com/in/piyanuch/" target="_blank">
          <img src="@/assets/img/icon/in.svg">
        </a>	
      </li>
      <li>
        <a href="https://www.youtube.com/user/NiNewZaZa" target="_blank">
          <img src="@/assets/img/icon/yt.svg">
        </a>	
      </li>
      <li>
        <a href="https://www.facebook.com/piyanuch.ninew" target="_blank">
          <img src="@/assets/img/icon/fb.svg">
        </a>	
      </li>								
    </ul>
    <ul class="row-contact">
      <li>
        <a href="tel:+66860315303" class="wow fadeIn">
          <i class="material-icons">call</i>
          <p>+66639854224</p>
        </a>		
      </li>
      <li>
        <a href="mailto:ninew.sopha@gmail.com" class="wow fadeIn">
          <i class="material-icons">mail</i>
          <p>piyanuch.natakuatung@gmail.com</p>
        </a>		
      </li>
    </ul>	
    <nav>
      © Copyright 2020 Piyanuch Natakuatung
    </nav>    
  </footer>
</template>

<script>
  export default {
  }
</script>
<style  lang="stylus">
  color-primary = #86baa3;
  color-light   = #ecf6e2;
  color-hl      = #cda324;
  color-yellow  = #ffcc33;
  footer {
    text-align: center;
    padding: 25px 0;
    font-size: 15px;
    color: #ecf6e2;
    background: #86baa3;  
    i:first-child{
      font-size: 54px;
      margin-bottom: 10px;
      color: #f3f8f6;
    }  
    .bx-social{
      display: block;
      overflow: hidden;
      margin: 30px auto;
      font-size: 0;
      padding: 0;
      li{
        display: inline-block;
        vertical-align: middle;
      }
      a{
        color: color-detail;
        font-size: 2rem;
        background: color-light;
        width: 44px;
        height: 44px;
        display: block;
        line-height: 40px;
        border-radius: 20px;
        margin: 0 15px;
        background: #fff;
        opacity: 0.9;
        img{
          width: 30px;
        }
        &:hover{
          opacity: 1;
        }	
      }
    }
    .row-contact{
      padding: 0;
      li{
        display: inline-block;
      }
      a{
        color: #ecf6e2;
        padding: 0 20px;
        font-size: 1.1em;
        line-height: 1.4em;    
        *{
          display: inline-block;
          vertical-align: middle;
          margin: 0;
        }	
      }
      i{
        font-size: 1.1em;
      }
    }
    nav{
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #93d1b6;
    }
  }
</style>