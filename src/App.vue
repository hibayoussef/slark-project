<template>
  <v-app>
     <div>
        <div class="flex w-full overflow-auto h-screen bg-page">
            <!-- <navbar class="w-full flex-1 max-w-72"/> -->
            <div class="px-4 flex-1 max-h-screen overflow-auto">
                <div class="pb-16">
                    <router-view></router-view>
                </div>
            </div>
        </div> 
     </div> 
 </v-app>
</template>
<script>
    // import navbar from '../src/components/shared/navbar'
    export default {
      components:{
    //    navbar
      }
    }

</script>