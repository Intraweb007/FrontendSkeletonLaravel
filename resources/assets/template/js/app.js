require('./bootstrap');

Vue.component('example', require('./components/example.vue'));

const app = new Vue({
    el: 'body'
});

swal({title: "Success!", text: "Fun!", type: "success", confirmButtonText: "Cool"});
