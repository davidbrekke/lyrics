import AppContainer from '@components/layout/AppContainer'
import Header from '@components/layout/Header'

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      {children}
    </AppContainer>
  )
}

export default Layout
