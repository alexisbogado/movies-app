import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PageContainer, ContentWrapper } from './app.styles'
import { MainContextProvider } from './contexts/mainContext'
import { routes } from './routes'
import MobilePageTitle from 'components/mobilepagetitle'
import SideNavBar from './components/sidenavbar'

import './css/app.css'

export default function App() {
  return (
    <Router>
      <PageContainer>
        <MainContextProvider>
          <SideNavBar />

          <ContentWrapper>
            <MobilePageTitle />
            
            <Switch>
              {routes.map((route, index) => (
                <Route {...route} key={index} />
              ))}
            </Switch>
          </ContentWrapper>
        </MainContextProvider>
      </PageContainer>
    </Router>
  )
}
