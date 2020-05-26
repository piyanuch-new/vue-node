<template>
  <section class="sc-express"> 
    <div class="container">
      <h1>ExpressJs</h1>
      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>find X Y Z Value : </td>
            <td>
              <ul>
                <li v-for="(value, key) in items.xyz">
                  {{ key }} = {{ value }}                  
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>find B C Value : </td>
            <td>              
              <ul>
                <li v-for="(value, key) in items.ab">
                  {{ key }} = {{ value }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
  const API = "http://localhost:3000/"
  export default {
    data() {
      return {
        items: []
      }
    },
    mounted() {
      var self = this
      $.ajax({
        method: 'GET',
        url: API,
        crossDomain: true,
        success: function (data) {
          self.items = data
        },
        error: function (xhr, status) {

        }
      })
    }
  }
</script>
<style lang="stylus">
  .sc-express{
    text-align: center;
    padding-bottom: 70px;
    table{
      width: 100%;
    }
    th{
      background: #86baa3;
      padding: 15px 10px;
      color: #fff;
    }
    td{
      width: 50%;
      padding: 10px;
      vertical-align: top;
      color: #86baa3;
      border: 1px solid  #86baa3;
    }
    ul{
      max-width: 250px;
      margin: 0 auto;
      list-style: none;
    }
  }
  @media screen and (max-width: 580px) {
    .sc-express{
      padding-bottom: 40px;
    }
  }
</style>