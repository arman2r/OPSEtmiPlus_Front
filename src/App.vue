<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
-->
  <el-container class="layout-container-demo">
    <el-aside :width="asideWidth">
      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :value="false">expand</el-radio-button>
        <el-radio-button :value="true">collapse</el-radio-button>
      </el-radio-group>
      -->
      <!--<el-button class="hidden-sm-and-up" @click="toggleCollapse"><el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"></path></svg></el-icon></el-button>-->
      <el-scrollbar>
        
        <el-menu :default-openeds="defaultOpen" :collapse="isCollapse" @open="handleOpen" @close="handleClose">

          <router-link to="/gestantes">
            <el-menu-item index="1">

              <el-icon><icon-menu><svg style="font-size: 24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M9 4c0-1.11.89-2 2-2c1.11 0 2 .89 2 2c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2m7 9c0-1.34-.83-2.5-2-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3v7h2v5h3v-5h3z" />
                </svg>
              </icon-menu></el-icon>

              <template #title>Gestantes</template>

            </el-menu-item>
          </router-link>

          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                    d="M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64" />
                </svg>
              </el-icon>
              <span>Control Gestantes</span>
            </template>
            <el-menu-item-group>
              <el-menu-item disabled index="1-1"><router-link to="/vihList">VIH</router-link></el-menu-item>
              <el-menu-item disabled index="1-2"><router-link to="/vihList">Hepatitis B</router-link></el-menu-item>
              <el-menu-item disabled index="1-3"><router-link to="/vihList">Chagas</router-link></el-menu-item>
              <el-menu-item disabled index="1-4"><router-link to="/vihList">Sifilis</router-link></el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container class="medium-padding">
      <router-view />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { onUnmounted } from 'vue';



export default class App extends Vue {
  asideWidth = '200px'
  defaultOpen = ['2']
  isCollapse = false

  toggleCollapse() {
    this.isCollapse = !this.isCollapse
    if(this.isCollapse === false){
      this.asideWidth = '200px'
    } else {
      this.asideWidth = '64px'
    }
    
  }

  handleOpen(key: string, keyPath: string[]) {
    console.log(key, keyPath)
  }
  handleClose(key: string, keyPath: string[]) {
    console.log(key, keyPath)
  }

  onResize(): void {
    // Handle screen resize logic here
    // You can access the window size using `window.innerWidth` and `window.innerHeight`
    //console.log('tamaño window', window.innerWidth)
    if (window.innerWidth <= 991) {
      this.isCollapse = true;
      this.asideWidth = '64px'
    } else {
      this.isCollapse = false
      this.asideWidth = '200px'
    }
  }

  mounted(): void {
    this.onResize();
    /*if (window.innerWidth <= 991) {
      this.isCollapse = true;
      this.asideWidth = '64px'
    } else {
      this.isCollapse = false
      this.asideWidth = '200px'
    }*/
  }

  /*beforeUnmount(): void {
    window.removeEventListener('resize', this.onResize);
  }*/

  /*onUnmounted() {
    resizeObserver.disconnect();
  };*/

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.medium-padding {
  padding: 2rem;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.layout-container-demo {
  max-width: 1360px;
  width: 100%;
  margin: auto;
}

.el-scrollbar__view {
  height: 100% !important;
}

.el-scrollbar ul.el-menu {
  height: 100% !important;
}

@media(max-width: 991px) {
  .medium-padding {
    padding: 1rem;
  }
}
</style>