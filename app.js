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
            this.result = this.num * 2;
            if (this.result == "") {
                alert("Please Enter Number")
            }
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

const ConditionalsandLoops = {
    data() {
        return {
            seen: true,
            todos: [{
                    text: 'Learn JavaScript'
                },
                {
                    text: 'Learn Vue'
                },
                {
                    text: 'Build something awesome'
                }
            ],
            products: [{
                    name: "Laptop",
                    price: 10
                },
                {
                    name: "Mouse",
                    price: 15
                },
                {
                    name: "Keyboard",
                    price: 5
                },
                {
                    name: "Desktop",
                    price: 25
                }
            ],
            newProduct: {
                name: '',
                price: ''
            },
            AboutMe: {
                name: "Abdul Bashir",
                nicname: "bashir",
                Home: "Rajshshi"

            }
        }
    },
    computed: {
        total_price() {
            return this.products.reduce((sum, product) => {
                return sum +=product.price;
            },0);
        }
    },
    methods: {
        AddProduct() {
            if (this.newProduct.name == "") {
                alert("please Enter Product name.")
            } else if (this.newProduct.price == "") {
                alert("please Enter Product Price.")
            } else {
                this.products.push(this.newProduct)
                this.newProduct.name = null;
            }

        },
        removeProduct(i) {
            this.products.splice(i, 1)
        }
    }
}

const InvoiceProject = {
    data() {
        return {
            items: [
                { description: "Website design", quantity: 1, price: 300 }
              ]
        }
    },
    methods: {
        addRow() {
            this.items.push({ description: "", quantity: 1, price: 0 });
        },
        removeRow(i) {
            this.items.splice(i, 1)
        }

    }
}
Vue.createApp(app_data).mount('#app')
Vue.createApp(event_modifier).mount('#event_modifier')
Vue.createApp(TowWayDataBinding).mount('#TowWayDataBinding')
Vue.createApp(ConditionalsandLoops).mount('#ConditionalsandLoops')
Vue.createApp(InvoiceProject).mount('#InvoiceProject')