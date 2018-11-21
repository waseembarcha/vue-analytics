<template>
	<v-layout row>
	  <v-flex lg12 xl10 offset-xl1>
	  	<v-layout>
	  		<v-flex xs12 lg7>
	    		<h1 class="main-title">Vue Analytics Home</h1>
	    		<v-card>
				  <div class="tabs-s1">
				    <v-tabs
				      v-model="active"
				      color="white"
				      light
				      icons-and-text
				      slider-color="blue lighten-1"
				    >
				      <v-tab
				        v-for="tab in tabs"
				        :key="tab.title"

				      >
				      	<h3 class="tabs__item__title">{{tab.title}}</h3>
				        
				        <p class="tabs__item__sub-title">{{tab.subtitle}}</p>
				        <span class="tabs__item__conversion-rate"><strong>&darr;</strong> {{tab.percent}}</span>
				      </v-tab>
				      <v-tab-item
				        v-for="tab in tabs"
				        :key="tab.url"
				      >
				        <v-card flat>
				          <v-card-text>
				          	<img :src="tab.url" style="max-width:600px;">
				          </v-card-text>
				        </v-card>
				      </v-tab-item>
				    </v-tabs>
				  </div>
				  <v-card-actions class="pt-0">
				  	<v-select
			          :items="items"
			          label="Last 7 days"
			          single-line
			        ></v-select>
				  	<v-spacer></v-spacer>
			        <v-btn flat >Audience Overview
			        	<v-icon dark>keyboard_arrow_right</v-icon>
			        </v-btn>
			      </v-card-actions>
				</v-card>
	  		</v-flex>
	  		<v-flex xs12 lg5>
	    		<h1 class="main-title">Intelligence</h1>
	    		<v-card color="blue darken-1" class="white--text current--status">
	              <v-container fluid grid-list-lg>
	                <v-layout row>
	                  <v-flex xs12>
	                    <div class="statics">
	                      <div class="body-1">Active Users right now</div>
	                      <div class="lg-text">8</div>
	                    </div>
	                    <div class="curr--users">
	                      <div class="caption custom-caption">Page views per minute
	                      </div>
	                      <div class="d-flex caption custom-caption">No data avalible
	                      </div>
	                    </div>
	                    <div class="time-wise">
	                      <div class="d-flex caption custom-caption">Top active pages
	                      	<v-spacer></v-spacer>
	                      	<span class="text-xs-right">Active Users</span>
	                      </div>
	                      <div class="d-flex body-1 custom-caption">/index.html
	                      	<v-spacer></v-spacer>
	                      	<span class="text-xs-right">4</span>
	                      </div>
	                      <div class="d-flex body-1 custom-caption">/about.html
	                      	<v-spacer></v-spacer>
	                      	<span class="text-xs-right">2</span>
	                      </div>
	                      <div class="d-flex body-1 custom-caption">/contact.html
	                      	<v-spacer></v-spacer>
	                      	<span class="text-xs-right">1</span>
	                      </div>
	                      <div class="d-flex body-1 custom-caption">/projects.html
	                      	<v-spacer></v-spacer>
	                      	<span class="text-xs-right">1</span>
	                      </div>

	                    </div>


	                  </v-flex>
	                </v-layout>
	              </v-container>
	              <v-card-actions >
			        <v-spacer></v-spacer>
			        <v-btn flat color="white">Real-Time Reports
			        	<v-icon dark>keyboard_arrow_right</v-icon>
			        </v-btn>
			      </v-card-actions>
	            </v-card>
	  		</v-flex>
	  	</v-layout>
	  </v-flex>
	</v-layout>
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
			tabs:[
				{title: 'Users', subtitle:'20',percent:'12.45%',url:require('../assets/users-report.png')},
				{title: 'Sessions', subtitle:'14',percent:'33.24%',url:require('../assets/sessions-report.png')},
				{title: 'Bounce Rate', subtitle:'44%',percent:'12.00%',url:require('../assets/bounce-report.png')},
				{title: 'Session Duration', subtitle:'3m 28s',percent:'63.24%',url:require('../assets/duration-report.png')}
			],
			active: null,
		    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		    items: ['Last 7 days','Last 28 days', 'Last 90 days', 'Last 12 months']
		}
	}
}
</script>
<style>
	.tabs-s1 .tabs__container--icons-and-text{
		height: 100px;
	}
	.tabs-s1 .tabs__slider-wrapper{
		top:0;
	}
	.tabs-s1 .tabs__slider{
		height: 4px;
	}
	.tabs-s1 .tabs__item{
		display: block;
		padding-top:20px;
		text-align: left !important;
	}
	.tabs-s1 .tabs__item__title{
	    font: 400 14px/10px 'Roboto',sans-serif;
	    letter-spacing: 0;
	    text-transform: capitalize;

	    margin-bottom: 15px;
	}
	.tabs-s1 .tabs__item__sub-title{
		color: rgba(0,0,0,0.87);
	    font: 300 26px/20px 'Roboto',sans-serif;
	    letter-spacing: 0;
	    margin-bottom: 10px;
	    text-transform: lowercase;
	}
	.tabs-s1 .tabs__item__conversion-rate{
		color: #db4437;
	    font: 400 12px/10px 'Roboto',sans-serif;
	    letter-spacing: .01px;
	}
	.current--status .lg-text{
		color: #fff;
	    font: 300 50px 'Roboto',sans-serif;
	    letter-spacing: 0;
	    margin-top: 13px;
	    margin-bottom: 30px;
	}
	.current--status .custom-caption{
		border-bottom:1px solid #aaa;
		color: #eee;
		font-size: 12px;
		font-weight: 400;
		padding-bottom: 8px;
		padding-top: 8px;
	}
	.current--status .curr--users{
		height: 120px;
	}
</style>