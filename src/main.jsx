import ReactDOM from 'react-dom'
import App from '@/App'
import Provider from '@/context'
import '@/styles/globals.css'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('__app'),
)
