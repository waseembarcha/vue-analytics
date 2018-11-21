<template>
  <div>
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
      <template v-for="item in items">
        <v-layout
        row
        v-if="item.heading"
        align-center
        :key="item.heading"
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
            {{ item.heading }}
            </v-subheader>
          </v-flex>
        </v-layout>

        <v-layout 
          row
          v-else-if="item.search"
          align-center
          :key="item.search"
        >
          <v-text-field
            flat
            solo
            prepend-icon="search"
            :placeholder="item.search"
            class="input-search"
          ></v-text-field>
        </v-layout>

        <v-list-group
        v-else-if="item.children"
        v-model="item.model"
        :key="item.text"
        :prepend-icon="item.model ? item.icon : item['icon-alt']"
        append-icon=""
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
            <v-list-tile-title >
              {{ item.text }}
            </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click=""
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon v-bind:class="{'ml-5':child.icon,'mr-3':child.icon}">{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title 
                v-bind:class="{'ml-5':!child.icon}"
              >
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else router :to="item.path" @click="" :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
            {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="primary"
      dark
      flat
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      fixed
      class="border-bottom"
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Vue Analytics</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge overlap color="orange">
          <span slot="badge">2</span>
          <v-icon>notifications</v-icon>
        </v-badge>
      </v-btn>
      <!-- <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn> -->
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-btn icon large>
      <v-avatar size="32px" tile>
        <img
        src="../assets/avatar.png"
        alt="Avatar"
        >
      </v-avatar>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { search: 'Search reports and help' },
        { icon: 'home', text: 'Home', path:'/home'},
        { 
          icon: 'playlist_add', 
          'icon-alt': 'playlist_add',
          text: 'Customization',
          model: false,
          children: [
            { text: 'Dashboard'},
            { text: 'Custom Reports' },
            { text: 'Saved Reports' },
            { text: 'Custom Alerts' }
          ]
        },
        { heading: 'Reports' },
        { icon: 'access_time', text: 'Real-Time', path:'/real-time'},
        { icon: 'person', text: 'Audience', path:'/audience'},
        { icon: 'device_hub', text: 'Acquistion', path:'/acquistion'},
        { icon: 'view_quilt', text: 'Behaviour', path:'/behaviour'},
        { icon: 'assistant_photo', text: 'Conversions', path:'/conversions'},
        { heading: 'Settings' },
        { icon: 'lightbulb_outline', text: 'Discover', path:'/'},
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
          {icon: 'content_copy', text: 'Import' },
          {icon: 'publish', text: 'Export' },
          {icon: 'print', text: 'Print' },
          {icon: 'undo', text: 'Undo changes' },
          {icon: 'help_outline', text: 'Help' }
          ]
        }
      ]
    })
  }
</script>

<style>
  .navigation-drawer .list__tile__action, .list__group__header .list__group__header__prepend-icon{
    min-width: 45px;
  }
  .list__group__header .list__group__header__prepend-icon{
    padding-right: 0px;
  }
  .navigation-drawer .list__tile__title{
    text-transform: uppercase;
    font-size: 13px;
    color: rgba(0,0,0,0.54);
    font-weight: 500;
    letter-spacing: -0.06px;
  }
  .navigation-drawer .list__group__items .list__tile__title{
    text-transform: capitalize;
    font-size: 13px;
    font-weight: 400;
    color: rgba(0,0,0,0.54);
  }
  .input-search input[type="text"]{
    font-size: 13px;
  }
  .input-search.input-group--solo .input-group__input{
    padding-top:12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(0,0,0,.12);
  }
  .input-search .input-group__prepend-icon{
    color: #777 !important;
    font-size: 22px;
  }
  .input-search .input-group__prepend-icon:hover{
    cursor: pointer;
  }
  .input-search input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #777;
  }
  .input-search input::-moz-placeholder { /* Firefox 19+ */
    color: #777;
  }
  .input-search input:-ms-input-placeholder { /* IE 10+ */
    color: #777;
  }
</style>