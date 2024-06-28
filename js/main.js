// estrapolo il metodo del framework che ci permette di creare app Vue
const { createApp } = Vue;

// creo l'istanza di un'app VUE e la collogo all'ID contenitore 
createApp ({
    data(){
        return {
            mailList : [],
        }
    },
    methods: {

    },
    mounted(){

        // esegui per 10 volte l'estrapolazione di una mail casuale
        for(i = 0; i < 10; i++){
            // usato axios per prendere il risultato dell'api link
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((risposta) =>{

                // response è un oggetto quindi dal console.log vedo quale proprietà mi serve per prendere solo le mail
                const result = risposta.data.response;

                // inserisci il risultato nell'array vuoto in Data
                this.mailList.push(result);
                
                // console.log(risposta);
                // console.log(result);
                console.log(this.mailList.length);
            }).catch(function(error){
                console.log(error.message);
            })
        }
            
        
    }

}).mount("#container");