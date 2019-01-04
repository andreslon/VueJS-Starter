<template> 
    <md-app md-waterfall md-mode="reveal" >
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

         <md-list>
        <md-list-item md-expand md-expanded="true">
          <md-icon>whatshot</md-icon>
          <span class="md-list-item-text">News</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">World</md-list-item>
            <md-list-item class="md-inset">Europe</md-list-item>
            <md-list-item class="md-inset">South America</md-list-item>
          </md-list>
        </md-list-item>
        <md-list-item md-expand md-expanded="true">
          <md-icon>videogame_asset</md-icon>
          <span class="md-list-item-text">Games</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset">Console</md-list-item>
            <md-list-item class="md-inset">PC</md-list-item>
            <md-list-item class="md-inset">Phone</md-list-item>
          </md-list>
        </md-list-item>
      </md-list>
      </md-app-drawer>

      <md-app-content>
       <HelloWorld/>
      </md-app-content>
    </md-app> 

  <!-- <div id="app">
    <img src="./assets/logo.png">
     {{ env }}
    <HelloWorld/>
  </div> -->
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
     return {
         env: process.env.NODE_ENV
     }
  }
}
</script>

<style lang="scss" scoped>
.md-app {
  // min-height: 100vh;
   height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

$list-width: 320px; 
 

.control {
  min-width: 250px;
  display: flex;
  flex-direction: column; 
}
</style>
