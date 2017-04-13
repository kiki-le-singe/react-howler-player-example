import { connect } from 'react-redux'

import { actions } from '../../redux/actions/CounterActions'
import App from './App'

const mapStateToProps = state => ({
  counter: state.counter
})

const app = App
const connectedApp = connect(mapStateToProps, actions)(app)

export { connectedApp as default, app }
