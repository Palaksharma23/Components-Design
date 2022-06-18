<template>
  <div>
    <a-layout>
      <a-row class="navbar">
        <a-col  class="logo">
          <a href="/">
            <img src="../assets/moja_global_logo.png" alt="moja global logo" height="40" width="57" />
          </a>
        </a-col>
        <a-col class="content" align="middle">
          <a-row   justify="center" type="flex">
            <a-col>
              <a href="https://docs.moja.global/projects/flint-ui/en/latest/" target="_blank" rel="noreferrer noopener"
                >Documentation
              </a>
            </a-col>
            <a-col>
              <a href="https://docs.moja.global/projects/flint-ui/en/latest/" target="_blank" rel="noreferrer noopener"
                >Documentation
              </a>
            </a-col>
            <a-col>
              <a href="https://docs.moja.global/projects/flint-ui/en/latest/" target="_blank" rel="noreferrer noopener"
                >Documentation
              </a>
            </a-col>
            <a-col>
              <a href="https://docs.moja.global/projects/flint-ui/en/latest/" target="_blank" rel="noreferrer noopener"
                >Documentation
              </a>
            </a-col>
            <a-col>
              <a href="https://github.com/moja-global/FLINT-UI" target="_blank" rel="noreferrer noopener">Github </a>
            </a-col>
            <a-col> <a href="mailto:info@moja.global" target="_blank" rel="noreferrer noopener">Contact Us </a> </a-col>
          </a-row>
        </a-col>
      </a-row>
      <a-row class="navbar navbar-mobile">
        <a-col>
          <a-row type="flex" justify="space-between">
            <a-col class="logo"
              ><img src="../assets/moja_global_logo.png" alt="moja global logo" height="40" width="57"
            />
            </a-col>
            <a-col>
              <div v-if="!showMenu" type="menu" @click="toggleNavbar()" class="icon">+</div>
              <div v-if="showMenu" type="close" @click="toggleNavbar()" class="icon">-</div>
            </a-col>
          </a-row>
        </a-col>
        <a-col v-if="showMenu" class="content_mobile">
          <a-row type="flex" justify="space-between" class="menu-mobile">
            <a-col>
              <a href="https://docs.moja.global/projects/flint-ui/en/latest/" target="_blank" rel="noreferrer noopener"
                >Documentation
              </a>
            </a-col>
            <a-col>
              <a href="https://github.com/moja-global/FLINT-UI" target="_blank" rel="noreferrer noopener">Github </a>
            </a-col>
            <a-col> <a href="mailto:info@moja.global" target="_blank" rel="noreferrer noopener">Contact Us </a> </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-layout>
  </div>
</template>

<script> 

import { ref } from 'vue'
export default {
  name: 'LandingPageNavbar',
  components: { 
  },
  setup() {
    const showMenu = ref(false)
    function toggleNavbar() {
      showMenu.value = !showMenu.value
    }
    return { showMenu, toggleNavbar }
  }
}
</script>

<style scoped>
.navbar { 
    display: flex;
  padding: 1.2rem 1.4rem;
  background: white;
  font-size: 1.1rem;
  color: #475447;
}
.navbar a:hover {
  border-bottom: solid 2px #475447;
}
.navbar a {
  color: #475447;
} 
.content {
    margin-left: auto;
}
.navbar-mobile {
  display: none;
}
.anticon {
  margin: 20px;
  font-size: 24px;
  cursor: pointer;
}
.menu-mobile {
  margin: 1rem 4rem;
      display: flex;
    flex-direction: column;
}
.menu-mobile .ant-col {
  margin: 1rem 0;
}
.icon {
    float: right;
    position: relative;
    top: -4px;
    font-size: xxx-large;
}
@media only screen and (max-width: 768px) {
  .navbar {
    display: none;
  }
  .navbar-mobile {
    display: block;
  }
}
</style>