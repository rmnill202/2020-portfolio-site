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
        primary:            '#984cad',

        primary_accent_01:  '#984cad',
        primary_accent_02:  '#984cad',
        
        primary_text:       '#ffffff',
        // primary_icon:       '#df9646',
        // primary_icon_inner: '#eee',
        primary_icon:       '#caa4d5',
        primary_icon_inner: '#7b3f6e',

        background:         '#ffffff',
        // bg_accent_01:       '#df8355', //df8355
        // bg_accent_02:       '#df616b', //df616b
        // bg_accent_03:       '#290036',
        // #df5555
        // #c13636
        // #8c2f47
        // #7b3f6e
        bg_accent_01:       '#df5555', 
        bg_accent_02:       '#8c2f47', 
        bg_accent_03:       '#290036',

        bg_text:            '#fff',

        card_background:    '#443a5e',
        card_text:          '#fff',
        card_accent:        '#df4646',
        card_accent_2:      '#583b5b',
        card_accent_3:      '#370537',
        navbar_color:       '#984cad',
        navbar_text:        '#fff',
        link_color:         '#fff',


        //
        // primary:            '#cc6c99',

        // primary_accent_01:  '#9e5477',
        // primary_accent_02:  '#9e5477',
        
        // primary_text:       '#ffffff',
        // primary_icon:       '#f4e0e1',
        // primary_icon_inner: '#cc6c99',

        // background:         '#886a6a',
        // bg_accent_01:       '#f4e0e1',
        // bg_accent_02:       '#313131',
        // bg_accent_03:       '#cd2976',
        // bg_text:            '#fff',

        // card_background:    '#F1E3D3',
        // card_text:          '#272727',

        // navbar_color:       '#fff',
        // link_color:         '#fff',


        // Sea and Coral
        // primary:            '#f76c6c',

        // primary_accent_01:  '#f54e4e',
        // primary_accent_02:  '#f54e4e',
        
        // primary_text:       '#fff',
        // primary_icon:       '#f76c6c',
        // primary_icon_inner: '#fff',

        // background:         '#a8d0e6',
        // bg_accent_01:       '#374785',
        // bg_accent_02:       '#24305e',
        // bg_accent_03:       '#24305e',
        // bg_text:            '#24305e',

        // card_background:    '#24305e',
        // card_text:          '#fff',

        // navbar_color:       '#24305e',
        // link_color:         '#fff',


        // Orange Box
        // primary:            '#dfae7f',

        // primary_accent_01:  '#272727',
        // primary_accent_02:  '#272727',
        
        // primary_text:       '#fff',
        // primary_icon:       '#dfae7f',
        // primary_icon_inner: '#272727',

        // background:         '#e87e0d',
        // bg_accent_01:       '#272727',
        // bg_accent_02:       '#3c5964',
        // bg_accent_03:       '#293d43',
        // bg_text:            '#272727',

        // card_background:    '#272727',
        // card_text:          '#fff',

        // navbar_color:       '#272727',
        // link_color:         '#fff',

                
        ///// Purple Poppy
        // primary:            '#8E7DBE',

        // primary_accent_01:  '#574c75',
        // primary_accent_02:  '#403857',
        
        // primary_text:       '#ffffff',
        // primary_icon:       '#f7f4f0',
        // primary_icon_inner: '#8E7DBE',

        // background:         '#f7f4f0',
        // bg_accent_01:       '#F1E3D3',
        // bg_accent_02:       '#F2D0A9',
        // bg_accent_03:       '#D88C9A',
        // bg_text:            '#272727',

        // card_background:    '#f7f4f0',
        // card_text:          '#272727',

        // navbar_color:       '#574c75',
        // link_color:         '#e6af70',


        
        // primary:            '#a79fbf',

        // primary_accent_01:  '#6b667a',
        // primary_accent_02:  '#383640',
        
        // primary_text:       '#ffffff',
        // primary_icon:       '#f7f4f0',
        // primary_icon_inner: '#a79fbf',

        // background:         '#f7f4f0',
        // bg_accent_01:       '#F1E3D3',
        // bg_accent_02:       '#F2D0A9',
        // bg_accent_03:       '#D88C9A',
        // bg_text:            '#272727',

        // card_background:    '#F1E3D3',
        // card_text:          '#272727',

        // navbar_color:       '#272727',
        
        // link_color:         '#D88C9A',



        // primary:            '#b35340',
        // secondary:          '#9e9292',

        // primary_accent_01:  '#b35340',
        // primary_accent_02:  '#b35340',
        
        // primary_text:       '#ffffff',
        // primary_icon:       '#b35340',
        // primary_icon_inner: '#fff',

        // background:         '#233342',
        // bg_accent_01:       '#bbbbbb',
        // bg_accent_02:       '#777777',
        // bg_accent_03:       '#233342',
        // bg_text:            '#ffffff',

        // card_background:    '#eeeeee',
        // card_text:          '#212121',


        // primary:            '#E5446D',
        // secondary:          '#9e9292',

        // primary_accent_01:  '#ad4c65',
        // primary_accent_02:  '#c44767',
      
        // primary_text:       '#F8F4E3',
        // primary_icon:       '#F8F4E3',
        // primary_icon_inner: '#E5446D',

        // background:         '#ffffff',
        // bg_accent_01:       '#e3927b',
        // bg_accent_02:       '#c44767',
        // bg_accent_03:       '#FF8966',
        // bg_text:            '#212121',

        // card_background:    '#eeeeee',
        // card_text:          '#212121',


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
