<template>
  <div class="hello">
    <h1 class="main-title">Conversions Page Here</h1>
    <template>
	  <div class="text-xs-center">
	    <v-progress-circular
	      :rotate="360"
	      :size="100"
	      :width="15"
	      :value="value"
	      color="teal"
	    >
	      {{ value }}
	    </v-progress-circular>

	    <v-progress-circular
	      :rotate="-90"
	      :size="100"
	      :width="15"
	      :value="value"
	      color="primary"
	    >
	      {{ value }}
	    </v-progress-circular>

	    <v-progress-circular
	      :rotate="90"
	      :size="100"
	      :width="15"
	      :value="value"
	      color="red"
	    >
	      {{ value }}
	    </v-progress-circular>

	    <v-progress-circular
	      :rotate="180"
	      :size="100"
	      :width="15"
	      :value="value"
	      color="pink"
	    >
	      {{ value }}
	    </v-progress-circular>
	  </div>
	</template>
    <template>
	  <v-layout>
	    <v-flex xs12 sm6 offset-sm3>
	      <v-card>
	        <v-card-media
	          class="white--text"
	          height="200px"
	          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
	        >
	          <v-container fill-height fluid>
	            <v-layout fill-height>
	              <v-flex xs12 align-end flexbox>
	                <span class="headline">Top 10 Australian beaches</span>
	              </v-flex>
	            </v-layout>
	          </v-container>
	        </v-card-media>
	        <v-card-title>
	          <div>
	            <span class="grey--text">Number 10</span><br>
	            <span>Whitehaven Beach</span><br>
	            <span>Whitsunday Island, Whitsunday Islands</span>
	          </div>
	        </v-card-title>
	        <v-card-actions>
	          <v-btn flat color="orange">Share</v-btn>
	          <v-btn flat color="orange">Explore</v-btn>
	        </v-card-actions>
	      </v-card>
	    </v-flex>
	  </v-layout>
	</template>
    
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        interval: {},
        value: 0
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000)
    }
  }
</script>

<style  scoped>
  .v-progress-circular{
    margin: 1rem;}
</style>