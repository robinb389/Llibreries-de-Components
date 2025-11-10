import MyBadge from './components/MyBadge.vue'
import MyAlert from './components/MyAlert.vue'
import MyNavbar from './components/MyNavbar.vue'
import MyModal from './components/MyModal.vue'

export { MyBadge, MyAlert, MyNavbar, MyModal }

export default {
  install(app) {
    app.component('MyBadge', MyBadge)
    app.component('MyAlert', MyAlert)
    app.component('MyNavbar', MyNavbar)
    app.component('MyModal', MyModal)
  }
}
