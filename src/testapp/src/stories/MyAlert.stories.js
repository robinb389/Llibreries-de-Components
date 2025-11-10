import MyAlert from './MyAlert.vue'

export default {
  title: 'Components/MyAlert',
  component: MyAlert,
}

export const Info = { args: { type: 'info', message: 'Info alert' } }
export const Success = { args: { type: 'success', message: 'Success alert' } }
export const Error = { args: { type: 'error', message: 'Error alert' } }
