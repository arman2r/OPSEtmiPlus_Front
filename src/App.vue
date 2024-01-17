<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
-->
  <el-container class="layout-container-demo">
    <el-aside :width="asideWidth">
      <el-scrollbar>
        <el-menu :default-openeds="defaultOpen" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><svg style="font-size: 24px" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M9 4c0-1.11.89-2 2-2c1.11 0 2 .89 2 2c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2m7 9c0-1.34-.83-2.5-2-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3v7h2v5h3v-5h3z" />
                </svg></el-icon>
              <span>Gestantes</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/vih">VIH</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/hepatitisB">Epatitis B</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/chagas">Chagas</router-link></el-menu-item>
              <el-menu-item index="1-4"><router-link to="/sifilis">Sifilis</router-link></el-menu-item>
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
 

export default class App extends Vue {
  asideWidth = '200px'
  defaultOpen = ['1']
  isCollapse = false
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
    window.addEventListener('resize', this.onResize);
    if (window.innerWidth <= 991) {
      this.isCollapse = true;
      this.asideWidth = '64px'
    } else {
      this.isCollapse = false
      this.asideWidth = '200px'
    }
  }

  beforeUnmount(): void {
    window.removeEventListener('resize', this.onResize);
  }


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

@media(max-width: 991px) {
  .medium-padding {
    padding: 1rem;
  }
}
</style>