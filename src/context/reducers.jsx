export default function reducers(state, action) {
  switch (action.type) {
    case 'EDIT':
      return {
        input: action.payload,
        isOpen: false,
      }

    case 'POST':
      return {
        input: state.input,
        isOpen: true,
      }

    default:
      return {
        input: '',
        isOpen: false,
      }
  }
}
