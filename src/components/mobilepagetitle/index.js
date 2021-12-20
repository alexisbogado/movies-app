import { useContext } from 'react'
import { MainContext } from 'contexts/mainContext'
import { PageTitle } from './styles'
import HamburgerIcon from 'components/icons/hamburguer'

export default function MobilePageTitle({ title }) {
  const { open } = useContext(MainContext)

  return (
    <PageTitle>
      <div onClick={() => open()}>
        <HamburgerIcon />
      </div>

      {title}
    </PageTitle>
  )
}