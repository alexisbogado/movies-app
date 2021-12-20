import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PageContainer, ContentWrapper } from './app.styles'
import { MainContextProvider } from './contexts/mainContext'
import SideNavBar from './components/sidenavbar'
import Discover from './pages/discover'

import './css/app.css'

export default function App() {
  return (
    <Router>
      <PageContainer>
        <MainContextProvider>
          <SideNavBar />

          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} />
            </Switch>
          </ContentWrapper>
        </MainContextProvider>
      </PageContainer>
    </Router>
  )
}
