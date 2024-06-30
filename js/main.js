// estrapolo il metodo del framework che ci permette di creare app Vue
const { createApp } = Vue;

// creo l'istanza di un'app VUE e la collogo all'ID contenitore 
createApp ({
    data(){
        return {
            userProfile: {
                name: 'Obi-Wan Kenobi',
                avatar: './img/avatar-icon-6.jpg'
            },
            activeContact: 0,
            userText: '',
            textSearched:'',
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar-icon-4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar-icon-5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Signorina Rottermeier ',
                    avatar: './img/avatar-icon-7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar-icon-8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar-icon-27.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Il maggiordomo',
                    avatar: './img/avatar-icon-10.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico detto Darth Maul',
                    avatar: './img/avatar-icon-9.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar-icon-11.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    methods: {
        changeContact(indice){
            this.activeContact = indice;
        },
        sendMessage(){
            // creazione dell'oggetto che andrò ad inserire nel mio array di messages
            const newMessage = {
                date: 'data',
                message: this.userText, 
                status: 'sent'
            };

            // percorso dove devo inserire l'oggetto messaggio appena creatp
            this.contacts[this.activeContact].messages.push(newMessage);

            this.userText = '';

            // dopo un tot di tempo fare comparire un messaggio con ok
            setTimeout(() => {
                const response = {
                    date: 'data',
                    message: 'ok',
                    status: 'recieved'
                };

                this.contacts[this.activeContact].messages.push(response);

            }, 1000)   
        },
        searchContact(){
            // dovrebbe ciclare nell'array dei contatti e guardare il nome
            for(i = 0; i < this.contacts.length; i++){

                if(!this.contacts[i].name.toLowerCase().includes(this.textSearched)){
                this.contacts[i].visible = false;
                } else if(this.contacts[i].name.toLowerCase().includes(this.textSearched) || this.textSearched === ''){
                    this.contacts[i].visible = true;
                }

                // console.log(this.contacts[i].name);
                // console.log(this.textSearched);
                // console.log(this.contacts[i].name.toLowerCase().includes(this.textSearched));

                console.log(this.contacts[i].visible);
                // console.log(this.contacts.visible);
                
            };
            
        }

    },
    mounted(){

        // // esegui per 10 volte l'estrapolazione di una mail casuale
        // for(i = 0; i < 10; i++){
        //     // usato axios per prendere il risultato dell'api link
        //     axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((risposta) =>{

        //         // response è un oggetto quindi dal console.log vedo quale proprietà mi serve per prendere solo le mail
        //         const result = risposta.data.response;

        //         // inserisci il risultato nell'array vuoto in Data
        //         this.mailList.push(result);
                
        //         // console.log(risposta);
        //         // console.log(result);
        //         console.log(this.mailList.length);
        //     }).catch(function(error){
        //         console.log(error.message);
        //     })
        // }
            
        
    }

}).mount("#app");