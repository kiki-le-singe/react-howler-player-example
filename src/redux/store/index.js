import { isDev } from '../../config'

const store = isDev() ?
  require('./configureStoreDev').default :
  require('./configureStoreProd').default

export default store
