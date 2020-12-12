const app = Vue.createApp ({
    data() {
        return {
          resultColor: null,
          div_text:"",
          color_palette: [
              {
                  id: "red",
                  css_class : 'red-box',
                  text : " Kırmızı yandırıldı"
                },
                {
                    id: "green",
                    css_class : 'green-box',
                    text : "Yeşil Yandırıldı"
                },
                {
                    id: "blue",
                    css_class : 'blue-box',
                    text : "Mavi Yandırıldı"
                },
                {
                    id: "pink",
                    css_class : 'pink-box',
                    text : "Pembe Yandırıldı"
                }
                
            ],      
        };
    },
    methods: {
        changeColor(class_name,color_text) {
        return this.resultColor = class_name,  this.div_text = color_text;
    }
}

})
app.mount("#app");
