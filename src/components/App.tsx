import Chat from './chat/Chat'
import Base from './grid/Base'
import Header from './header/Header'
import CustomThemeProvider from './theme/CustomThemeProvider'

const App = () => (
  <CustomThemeProvider>
    <Base>
      <>
        <Header />
        <Chat />
      </>
    </Base>
  </CustomThemeProvider>
)

export default App
