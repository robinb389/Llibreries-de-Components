import MyNavbar from './MyNavbar.vue'
import MyBadge from './MyBadge.vue'

export default { title: 'Components/MyNavbar', component: MyNavbar }

export const Default = {
  render: (args) => ({
    components: { MyNavbar, MyBadge },
    setup() { return { args } },
    template: `<MyNavbar v-bind="args"><MyBadge text="Login" color="blue"/></MyNavbar>`
  }),
  args: { title: 'My App' }
}
