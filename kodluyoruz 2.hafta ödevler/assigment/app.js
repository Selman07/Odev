const app = Vue.createApp ({
    data() {
        return {
            inputValue : "",

            course : {
                title : "",
                status : false
            },
            courses : [

            ],
            uyari1 : false ,
            uyari2 : false
        };
    },
    methods: {
        newCourse(){

            this.uyari1 = false;
            this.uyari2 = false;

            //  For loop ile daha önceden eklenmiş olan kursları kontrol ettir
            //  Eğer bu kurs daha önceden eklenmiş ise return uyarı döndür.
            //  For döngüsünü daha önceden eklenen kurslar (this.courses) kadar döndür.
            // [
            //     {title:"a",status:true},
            //     {title:"b",status:}
            // ];

            for (let i = 0; i < this.courses.length; i++) {
                const course_name = this.courses[i];

                if (course_name.title == this.inputValue) {
                    this.inputValue = "" ;
                    return this.uyari2 = true;
                }
            }

            if (this.inputValue === "" ) {
                return this.uyari1 = true;
            }
            else {
                this.course.title = this.inputValue ;
                this.courses.push ({...this.course });
                this.inputValue = "" ;
            }
            

        }
    },
    watch: {
        uyari1(value) {
          if (value)  {
              setTimeout (() => {
                  this.uyari1 = false ; 
              }, 3000 );
          }
        },
       


    },
});
app.mount("#app");
