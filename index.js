Vue.component("ayden", {
    props: [],
    template:
    `<div>Ayden</div>`
})

var app = new Vue({
    el: '#root',
    data: {
       name: "Xiaowen Ling" 
    },
    methods: {
        functionName: function () {
            return this.name = "danny"
        }
    },//just function
    computed: {
       
    },//make function here also update the state
    filters: {
        cap: function(value) {
            return value.toUpperCase()
        }
    },
    created: function() {

    },
    mounted: function() {
        
    }

})

