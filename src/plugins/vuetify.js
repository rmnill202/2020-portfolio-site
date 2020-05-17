import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary:            '#707070',
        secondary:          '#9e9292',

        primary_accent_01:  '#d2d2d2',
        primary_accent_02:  '#c4c4c4',
        
        primary_text:       '#ffffff',
        primary_icon:       '#ffffff',
        primary_icon_inner: '#757575',

        background:         '#ffffff',
        bg_accent_01:       '#bbbbbb',
        bg_accent_02:       '#777777',
        bg_accent_03:       '#000000',
        bg_text:            '#757575',

        // primary:            '#b84847',
        // secondary:          '#9e9292',

        // primary_accent_01:  '#353535',
        // primary_accent_02:  '#323232',
        
        // primary_text:       '#ffffff',
        // primary_icon:       '#503a51',
        // primary_icon_inner: '#8c678e',
        // bg_text:            '#ffffff',

        // background:         '#454545',
        // bg_accent_01:       '#b84847',
        // bg_accent_02:       '#353535',
        // bg_accent_03:       '#252525',
        // bg_text:            '#ffffff',
      },
    },
  },
});
