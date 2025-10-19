const app = Vue.createApp ({
    data() {
        return{
            baslik: 'Basic ToDo App', 
            items:[],
            item: '',   
        };
    },
    methods: {
        addItem() {
            if(!this.item) { return }
            this.items.push(this.item);
            this.item = "";
        },
        deleteItem(i) {
            this.items.splice(i,1)
        }
    }
});

app.mount('#app');