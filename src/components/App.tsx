import { Provider } from 'react-redux'
import store from '../store/index'
import ChatLoader from './chat/ChatLoader'
import Base from './grid/Base'
import Header from './header/Header'
import CustomThemeProvider from './theme/CustomThemeProvider'

const App = () => (
  <Provider store={store}>
    <CustomThemeProvider>
      <Base>
        <>
          <Header />
          <ChatLoader />
        </>
      </Base>
    </CustomThemeProvider>
  </Provider>
)

export default App
