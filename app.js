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
                return sum += product.price;
            }, 0);
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
            items: [{
                description: "Website design",
                quantity: 1,
                price: 300
            }]
        }
    },
    methods: {
        addRow() {
            this.items.push({
                description: "",
                quantity: 1,
                price: 0
            });
        },
        removeRow(i) {
            this.items.splice(i, 1)
        }

    }
}

const WatcherApp = {
    data() {
        return {
            mobile: '',
            message: ''
        }
    },
    watch: {
        mobile(newValue) {
            if (isNaN(newValue)) {
                this.message = "Please enter valid mobile no.";
            } else {
                this.message = "";
            }
        }
    },
    methods: {

    }
}

const TicketApp = {
    data() {
        return {
            ButtonStatus: false,
            confirmed: false,
            name: '',
            mobile: '',
            appliedCoupon: null,
            couponCode: "",
            coupons: [{
                    code: "100TAKAOFF",
                    discount: 100
                },
                {
                    code: "200TAKAOFF",
                    discount: 200
                }
            ],
            seatStates: {
                sold: {
                    text: "Sold",
                    color: "#ff0000"
                },
                available: {
                    text: "Available",
                    color: "#fff"
                },
                booked: {
                    text: "Booked",
                    color: "gray"
                },
                selected: {
                    text: "Selected",
                    color: "#00ff00"
                }
            },
            seats: [{
                    name: "A1",
                    type: "available",
                    price: 500
                },
                {
                    name: "A2",
                    type: "available",
                    price: 500
                },
                {
                    name: "A3",
                    type: "available",
                    price: 500
                },
                {
                    name: "A4",
                    type: "available",
                    price: 500
                },
                {
                    name: "B1",
                    type: "available",
                    price: 450
                },
                {
                    name: "B2",
                    type: "available",
                    price: 450
                },
                {
                    name: "B3",
                    type: "available",
                    price: 450
                },
                {
                    name: "B4",
                    type: "available",
                    price: 450
                },
                {
                    name: "C1",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C2",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C3",
                    type: "sold",
                    price: 500
                },
                {
                    name: "C4",
                    type: "sold",
                    price: 500
                },
                {
                    name: "D1",
                    type: "available",
                    price: 400
                },
                {
                    name: "D2",
                    type: "available",
                    price: 400
                },
                {
                    name: "D3",
                    type: "available",
                    price: 400
                },
                {
                    name: "D4",
                    type: "available",
                    price: 400
                },
                {
                    name: "E1",
                    type: "available",
                    price: 300
                },
                {
                    name: "E2",
                    type: "available",
                    price: 300
                },
                {
                    name: "E3",
                    type: "booked",
                    price: 300
                },
                {
                    name: "E4",
                    type: "booked",
                    price: 300
                },
                {
                    name: "F1",
                    type: "available",
                    price: 300
                },
                {
                    name: "F2",
                    type: "available",
                    price: 300
                },
                {
                    name: "F3",
                    type: "available",
                    price: 300
                },
                {
                    name: "F4",
                    type: "available",
                    price: 300
                }
            ]

        }
    },
    mounted() {
        this.$watch(vm => [vm.name, vm.mobile], val => {
            if (this.name != '' && this.mobile != '') {
                this.ButtonStatus = true;
            } else {
                this.ButtonStatus = false;
            }

        }, {
            immediate: true, // run immediately
            deep: true // detects changes inside objects. not needed here, but maybe in other cases
        })
    },
    computed: {
        selectedSeats() {
            let sc = this.seats.filter((item) => item.type === "selected");
            return sc;
        },
        totalCost() {
            let tc = 0;
            this.selectedSeats.forEach((seat) => {
                tc += seat.price;
            });

            if (this.appliedCoupon !== null) {
                tc = tc - this.appliedCoupon.discount;
            }

            return tc;
        },


    },
    watch: {
        couponCode(newValue) {
            if (newValue.length === 10) {
                let searchedCoupons = this.coupons.filter(
                    (item) => item.code === newValue
                );

                if (searchedCoupons.length === 1) {
                    this.appliedCoupon = searchedCoupons[0];
                    this.couponCode = "";
                } else {
                    alert("Coupon not valid!");
                }
            }
        },

    },
    methods: {
        handleClick(i) {
            let clickedSeat = this.seats[i];

            // prevent select: sold & booked seat
            if (clickedSeat.type === "sold" || clickedSeat.type === "booked") {
                alert("You can not select this seat");
                return;
            }

            // prevent more then 3 seat select
            if (clickedSeat.type == "available" && this.selectedSeats.length > 2) {
                alert("You can not select more than 3 seats");
                return;
            }

            // For deselect
            clickedSeat.type = clickedSeat.type === "selected" ? "available" : "selected";
            console.log(clickedSeat);
        },
        confirm() {
            if (!this.name || !this.mobile) {
                alert("Please enter name and mobile");
                return;
            }

            this.confirmed = true;
        },
        resetData() {
            this.confirmed = false;
            this.name = "";
            this.mobile = "";
            this.appliedCoupon = null;

            this.seats.forEach((seat) => {
                if (seat.type === "selected") {
                    seat.type = "sold";
                }
            });
        }

    }
}

// New App
const ComponentwithTemplateApp = {
    data() {
        return {
            message: 'Hello'
        }
    },
}

// Define a new component called button-counter
var a = Vue.createApp(ComponentwithTemplateApp)
a.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })

// Mount
a.mount('#ComponentwithTemplateApp')



Vue.createApp(app_data).mount('#app')
Vue.createApp(event_modifier).mount('#event_modifier')
Vue.createApp(TowWayDataBinding).mount('#TowWayDataBinding')
Vue.createApp(ConditionalsandLoops).mount('#ConditionalsandLoops')
Vue.createApp(InvoiceProject).mount('#InvoiceProject')
Vue.createApp(WatcherApp).mount('#WatcherApp')
Vue.createApp(TicketApp).mount('#TicketApp')



