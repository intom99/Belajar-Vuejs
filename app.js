
var app = new Vue({
    el: '#app',
    data: {
        maximum: 50,
        products: null,
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            inputWidth: 70,
            sliderStatus: true
        }
    },
    mounted: function () {
        fetch('https://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
                this.products = data;
            })
    },
    computed: {
        sliderState: function () {
            return this.style.sliderStatus ? 'd-flex' : 'd-none';
        }
    },
    methods: {
        before: function (el) {
            el.className = 'd-none';
        },
        enter: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function () {
                el.className = 'row d-flex mb-3 align-item-center animate__animated animate__fadeInRight';
            }, delay)

        },
        leave: function (el) {
            var delay = el.dataset.index * 100;
            setTimeout(function () {
                el.className = 'row d-flex mb-3 align-item-center animate__animated animate__fadeOutRight';
            }, delay)
        },
        addItem: function (products) {
            this.cart.push(products);
        }
    }

});
