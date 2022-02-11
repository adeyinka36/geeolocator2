import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
//
//     app.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyA2JSIHNlUQIS6lZYBZcyvz7sxegRHLr3s'
//     }, installComponents: true
// })
// app.component('google-maps', VueGoogleMaps.Map);
app.mount('#app')

