const app = Vue.createApp({
    data() {
        return {

            comment : [
                {
                    comment : "Yorum 1",
                    dislike : '' ,
                    like : ''  
                },
                {
                    comment : "Yorum 2",
                    dislike : '' ,
                    like : ''  
                },
                {
                    comment : "Yorum 3",
                    dislike : '' ,
                    like : ''  
                },
                {
                    comment : "Yorum 4",
                    dislike : '' ,
                    like : ''  
                },
            ]

        }
    },
});


app.mount("#app");