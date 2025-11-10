import MyModal from './MyModal.vue'
import { ref } from 'vue'

export default { title: 'Components/MyModal', component: MyModal }

export const Default = {
  render: (args) => ({
    components: { MyModal },
    setup() {
      const visible = ref(true)
      const close = () => visible.value = false
      return { args, visible, close }
    },
    template: `<MyModal :visible="visible" v-bind="args" @close="close">Modal Content</MyModal>`
  }),
  args: { title: 'Example Modal' }
}
