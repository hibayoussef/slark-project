
// import colors from 'vuetify/lib/util/colors'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconFont:'md' || 'fa'
    },
    theme: { 
        // themes:{
        //     light:{
        //         background: '#D53C3C'
        //     },
        //     dark:{
        //         background: '#F4F3F4'
        //     }
        // },
        disable: true }
});
