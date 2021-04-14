<template>
  <v-app>
    <div class="main-sidebar-container">
      <div class="main-sidebar-container_content">
        <v-navigation-drawer class="deep-purple accent-4" dark permanent>
          <div class="main-sidebar-container_content_header">
            <img class="logo" src="../../../src/assets/logo_base.png" />
          </div>

          <v-divider></v-divider>

          <div class="sidebar-search">
            <div class="cu2-search_simple-layout cu2-search">
              <div class="cu2-search__inner ">
                <div class="cu2-search__icon icon">
                  <svg class="ng-star-inserted">
                    <use
                      xlink:href="https://app.clickup.com/map.e7a227c29e2316abeae1.svg#svg-sprite-cu3-search"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>

         <div class="cu2-search__text"> Search </div>

          <v-list>
            <v-list-item v-for="item in items" :key="item.title" class="twoSection" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <template v-slot:append>
            <div class="pa-2">
              <v-btn block>
                Logout
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "Notifications", icon: "mdi-account" },
        { title: "Pulse", icon: "mdi-account-group-outline" },
        { title: "Goals", icon: "mdi-account" },
        { title: "Show less", icon: "mdi-account-group-outline" }
      ],
      mini: true,
    };
  },
};
</script>

<style scoped>
.main-sidebar-container {
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 60%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
}
.main-sidebar-container_content {
  width: 50%;
  height: 100%;
}

.main-sidebar-container_content_header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 10%;
  padding-left: 1rem;
}

.logo {
  display: flex;
  width: 50%;
  z-index: 1;
  position: fixed;
}

.sidebar-search {
  display: flex;
  align-items: center;
  height: 32px;
  flex-shrink: 0;
  margin: 0 8px 10px;
}
.cu2-search_simple-layout {
  width: auto;
  height: 100%;
  flex-grow: 1;
  border-radius: 4px;
  background: #f6f7f9;
}

.cu2-search {
  transition: background-color 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  overflow: hidden;
  flex-shrink: 0;
}

.cu2-search__inner {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.cu2-search__icon {
  transition: fill 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
}

.icon svg {
    display: block;
}

.cu2-search__text{
        display: block;
    font: 400 12px/1 Gotham Pro,Proxima Nova,arial,serif;
    color: rgba(124,130,141,.5);
      transition: color .2s cubic-bezier(.785,.135,.15,.86) 0s;
    cursor: pointer;
    display: none;
}

.twoSection{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
}
</style>
