const Vue = require("vue");
const VueGoogleMaps = require("vue2-google-maps");
const App = require("./App.vue");

Vue.use(VueGoogleMaps);

window.app = new Vue({
	el: "#app",
	render: draw => draw(App)
});
