import MyBadge from './MyBadge.vue'

export default {
  title: 'Components/MyBadge',
  component: MyBadge,
}

export const Default = {
  args: { text: 'New', color: 'green' },
}

export const Warning = {
  args: { text: 'Warning', color: 'orange' },
}
