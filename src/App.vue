<template>
  <div id="app">
    <v-app id="inspire">
      <sidebar-topbar></sidebar-topbar>
      <v-content>
        <v-container fluid grid-list-xl>
          
          <router-view/>

        </v-container>
        <v-container fluid pa-0 ma-0>
          <v-layout row align-end>
            <v-flex xs12 xl12 >
          
              <main-footer></main-footer>
            </v-flex>
          </v-layout>
        </v-container>


      </v-content>
      <create-contact></create-contact>
    </v-app>  
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ModelCreateContact from '@/components/ModelCreateContact'
export default {
  name: 'App',
  components:{
      'sidebar-topbar' :Navbar,
      'main-footer' :Footer,
      'create-contact' :ModelCreateContact
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>
  .main-title{
    font-size: 20px;
    font-weight: 300;
    color: #4a4a4a;
    letter-spacing: 0;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .border-bottom{
        border-bottom: 1px solid rgba(0,0,0,0.12);
  }
</style>
