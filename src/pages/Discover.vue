<template>
  <div class="discover">
  	<v-layout row>
	  <v-flex md12 lg10 offset-lg1>
	  	<!-- row 1 -->
	  	 <v-layout row>
	       <v-flex xs12 xl12 pb-0>
	  	   	  <v-card-actions class="pb-0">
		    	<h1 class="main-title mb-3">Get more out of Google Analytics</h1>
		    	<v-spacer></v-spacer>
		    	<v-btn flat color="blue">View More</v-btn>
		      </v-card-actions>
		    </v-flex>
	  	 </v-layout>
		  <v-layout row>
		    <v-flex 
		     xs12 
		     sm4
		     v-for="card in cards"
			 :key="card.title"
		    >
		      <v-card>
		        <v-card-media>
			      	<img :src="card.image">
			    </v-card-media>

		        <v-card-title primary-title>
		          <div>
		            <h3 class="headline mb-1">{{card.title}}</h3>
		            <div class="grey--text text--lighten-1 font-weight-light"> {{text}} </div>
		          </div>
		        </v-card-title>

		        <v-card-actions>
		          <v-btn flat color="blue">{{card.btn}}</v-btn>
		        </v-card-actions>
		      </v-card>
		    </v-flex>

		  </v-layout>



		  <!-- row 2 -->
		  <v-layout row>
	       <v-flex xs12 xl12 pb-0>
	  	   	  <v-card-actions class="pb-0">
		    	<h1 class="main-title mb-3">Become an Expert</h1>
		    	<v-spacer></v-spacer>
		    	<v-btn flat color="blue">View More</v-btn>
		      </v-card-actions>
		    </v-flex>
	  	 </v-layout>
		  <v-layout row>
		    <v-flex 
		     xs12 
		     sm4
		     v-for="card in cards2"
			 :key="card.title"
		    >
		      <v-card>
		        <v-card-media>
			      	<img :src="card.image">
			    </v-card-media>

		        <v-card-title primary-title>
		          <div>
		            <h3 class="headline mb-1">{{card.title}}</h3>
		            <div class="grey--text text--lighten-1 font-weight-light"> {{text}} </div>
		          </div>
		        </v-card-title>

		        <v-card-actions>
		          <v-btn flat color="blue">{{card.btn}}</v-btn>
		        </v-card-actions>
		      </v-card>
		    </v-flex>

		  </v-layout>



		  <!-- row 3 -->
		  <v-layout row>
	       <v-flex xs12 xl12 pb-0>
	  	   	  <v-card-actions class="pb-0">
		    	<h1 class="main-title mb-3">Expand your measurement strategy</h1>
		    	<v-spacer></v-spacer>
		    	<v-btn flat color="blue">View More</v-btn>
		      </v-card-actions>
		    </v-flex>
	  	 </v-layout>
		  <v-layout row>
		    <v-flex 
		     xs12 
		     sm4
		     v-for="card in cards3"
			 :key="card.title"
		    >
		      <v-card>
		        <v-card-media>
			      	<img :src="card.image">
			    </v-card-media>

		        <v-card-title primary-title>
		          <div>
		            <h3 class="headline mb-1">{{card.title}}</h3>
		            <div class="grey--text text--lighten-1 font-weight-light"> {{text}} </div>
		          </div>
		        </v-card-title>

		        <v-card-actions>
		          <v-btn flat color="blue">{{card.btn}}</v-btn>
		        </v-card-actions>
		      </v-card>
		    </v-flex>
		  </v-layout>


		  <!-- row 4 -->
		  <v-layout row>
	       <v-flex xs12 xl12 pb-0>
	  	   	  <v-card-actions class="pb-0">
		    	<h1 class="main-title mb-3">Tools for developers</h1>
		    	<v-spacer></v-spacer>
		    	<v-btn flat color="blue">View More</v-btn>
		      </v-card-actions>
		    </v-flex>
	  	 </v-layout>
		  <v-layout row>
		    <v-flex 
		     xs12 
		     sm4
		     v-for="card in cards4"
			 :key="card.title"
		    >
		      <v-card>
		        <v-card-media>
			      	<img :src="card.image">
			    </v-card-media>

		        <v-card-title primary-title>
		          <div>
		            <h3 class="headline mb-1">{{card.title}}</h3>
		            <div class="grey--text text--lighten-1 font-weight-light"> {{text}} </div>
		          </div>
		        </v-card-title>

		        <v-card-actions>
		          <v-btn flat color="blue">{{card.btn}}</v-btn>
		        </v-card-actions>
		      </v-card>
		    </v-flex>

		  </v-layout>
		 </v-flex>
	</v-layout>
  </div>
</template>

<script>
export default {
  name: 'Discover',
  data () {
    return {
    	rows:[{no:'1'},{no:'2'},{no:'3'}],
    	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    	cards: [
	        { image: require('../assets/ga_app.png'), title: 'Google Analytics App', btn:'GO'},
	        { image: require('../assets/ga_demo.png'), title: 'Google Analytics Demo', btn:'GO'},
	        { image: require('../assets/custom_alerts.png'), title: 'Custom Alerts', btn:'GO'}
	      ],
	    cards2: [
	        { image: require('../assets/academy.png'), title: 'Analytics Academy', btn:'GO'},
	        { image: require('../assets/help_center.png'), title: 'Analytics Help Center', btn:'GO'},
	        { image: require('../assets/blog.png'), title: 'Official Analytics Blog', btn:'GO'}
	      ],
	    cards3: [
	        { image: require('../assets/attribution.png'), title: 'Attribution', btn:'GO'},
	        { image: require('../assets/data_studio.png'), title: 'Data Studio', btn:'GO'},
	        { image: require('../assets/optimize.png'), title: 'Optimize', btn:'GO'}
	      ],
	    cards4: [
	        { image: require('../assets/cloud.png'), title: 'Google Cloud Platform', btn:'GO'},
	        { image: require('../assets/reporting_api.png'), title: 'Reporting API', btn:'GO'},
	        { image: require('../assets/embed_api.png'), title: 'Embed API', btn:'GO'}
	      ]
    }
  }
}
</script>