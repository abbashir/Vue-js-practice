const app_data = {
    data() {
        return {
            counter: 0,
            bd_msg: 'Hello Bangladesh',
            user_info: {
                name: "Abdul Bashir",
                email: "bashir.vu@gmail.com",
                web: "http://bashirbd.com/"
            }
        }
    },
    methods: {
        Reverse_msg() {
            this.bd_msg = this.bd_msg
                .split('')
                .reverse()
                .join('')
        },
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        incrementByParameter(counter_value) {
            this.counter = this.counter + counter_value;
        },
        decrementByParameter(counter_value) {
            this.counter = this.counter - counter_value;
        }
    }
}

const event_modifier = {
    data() {
        return {
            input_name: ""
        }
    },
    methods: {
        handleUserInput(evt) {
            this.input_name = evt.target.value;
        },
        handleCardEvent(evt1) {
            alert("I am div, you clicked me !")
        },
        AddToCartEvent(evt1) {
            alert("Product Added in cart")
        }

    }
}

const TowWayDataBinding = {
    data() {
        return {
            num: "",
            result: ""
        }
    },
    methods: {
        getDouble(evt) {
            this.result = this.num *2;
        },
        getSquare(evt) {
            this.result = this.num * this.num;
        },
        Reset(evt) {
            this.num = "";
            this.result = "";
        }

    }
}
Vue.createApp(app_data).mount('#app')
Vue.createApp(event_modifier).mount('#event_modifier')
Vue.createApp(TowWayDataBinding).mount('#TowWayDataBinding')