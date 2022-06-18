<template>
  <div class="dropdown">
    <button
      href="#"
      class="dropbtn"
      @click="toggleVisibility"
      v-on:keydown.space.exact.prevent="toggleVisibility"
      v-on:keydown.esc.exact="hideDropdown"
      v-on:keydown.shift.tab="hideDropdown"
      v-on:keydown.up.exact.prevent="startArrowKeys"
      v-on:keydown.down.exact.prevent="startArrowKeys"
    >
      Dropdown
    </button>
    <div v-if="isVisible" ref="dropdown" class="dropdown-content">
      
    <slot></slot>
 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      focusedIndex: 0,
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
      console.log("method",this.isVisible)
    },
    hideDropdown() {
      this.isVisible = false;
      this.focusedIndex = 0;
      console.log("hide",this.isVisible)
    },
    startArrowKeys() {
      if (this.isVisible) {
        // this.$refs.account.focus()
        const startkey = this.$refs.dropdown.children[0];
        // console.log(editButtonRef);
        // editButtonRef.style.backgroundColor = '#66bb6a';
        startkey.focus();
      }
    },
    focusPrevious() {
      if (this.focusedIndex == 0) {
        this.focusedIndex = 2;
      } else {
        this.focusedIndex = this.focusedIndex - 1;
      }
      // console.log(this.focusedIndex); 
        this.focusItem(); 
    },
    focusNext() {
      if (this.focusedIndex == 2) {
        this.focusedIndex = 0;
      } else {
        this.focusedIndex = this.focusedIndex + 1;
      }
      // console.log(this.focusedIndex); 
        this.focusItem(); 
    },
    focusItem() {
      const focuseditem = this.$refs.dropdown.children[this.focusedIndex];
      // here.style.backgroundColor = '#66bb6a'
      // console.log(here.href);
      focuseditem.focus();
    },
    click() {
      window.open(this.$refs.dropdown.children[this.focusedIndex].href,"_self")
    },
  },
};
</script>

<style scoped> 
.dropbtn {
  background-color: #d0afff;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
} 
.dropdown {
  background-color: #d0afff;
  position: relative;
  display: inline-block;
} 
.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px #d0afff;
  z-index: 1;
}
 
a {
  color: 	black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: #d0afff;
}

a:focus {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: #ffa32d;
} 
a:hover {
  background-color: white;
} 
.dropdown:hover .dropbtn {
  background-color: #ffa32d;
}
</style>
