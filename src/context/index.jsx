import { createContext, useCallback, useReducer } from 'react'
import reducers from './reducers'

export const Konteks = createContext()

const Provider = ({ children }) => {
  const init = { input: '', isOpen: false }
  const [state, dispatch] = useReducer(reducers, init)
  const footerDatas = [
    {
      title: 'Our Features',
      items: ['Adaptive', 'Faster', 'Intergated'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Blog', 'Join Us'],
    },
    {
      title: 'Help',
      items: ['API Documentation', 'System Status', 'Talk to Support'],
    },
  ]
  const featureLists = [
    {
      title: 'Work fast, done fast',
      para: 'Consectetur odio amet risus ut mattis sed tempor, sed luctus consequat in pellentesque neque nec auctor eu mi mauris, sapien aliquam duis eget id morbi auctor ac tellus ut',
    },
    {
      title: 'Work out the details',
      para: 'Consectetur odio amet risus ut mattis sed tempor, sed luctus consequat in pellentesque neque nec auctor eu mi mauris, sapien aliquam duis eget id morbi auctor ac tellus ut',
    },
    {
      title: 'Customized your needs',
      para: 'Consectetur odio amet risus ut mattis sed tempor, sed luctus consequat in pellentesque neque nec auctor eu mi mauris, sapien aliquam duis eget id morbi auctor ac tellus ut',
    },
  ]

  const handleOnChange = useCallback(
    (e) => {
      dispatch({ type: 'EDIT', payload: e.target.value })
    },
    [state, dispatch],
  )

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (!state.input.length) return
      console.log(state.input)
      dispatch({ type: 'POST' })
    },
    [state, dispatch],
  )

  const handleClose = useCallback(() => dispatch({ type: 'CLOSE' }), [state, dispatch])

  return (
    <Konteks.Provider value={{ state, dispatch, handleOnChange, handleSubmit, handleClose, footerDatas, featureLists }}>
      {children}
    </Konteks.Provider>
  )
}

export default Provider
