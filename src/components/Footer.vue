<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-xs-center"
    >

      <v-card-text class="white--text">
        &copy;2018 — VueAnylatics by <strong><a class="white--text" href="http://www.waseembarcha.com">Waseem Barcha</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    	icons: [
        'facebook',
        'twitter',
        'google-plus',
        'linkedin',
        'instagram'
      ]
      
    })
  }
</script>

<style>
  .off-title{
    font-size: 40px;
    font-weight: 300;
    letter-spacing: 0;
    margin-top: 10px;
    margin-bottom: 20px;
  }
</style>
