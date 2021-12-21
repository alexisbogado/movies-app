import { Title, CollapseIcon, Options } from './styles'
import CheckBox from 'components/checkbox'
import { useState } from 'react'

export default function ExpandableFilter({ show, items, title }) {
  const [ isCollapsed, setIsCollapsed ] = useState(!show)

  return (
    <>
      <Title onClick={() => setIsCollapsed(!isCollapsed)}>
        <CollapseIcon>{isCollapsed ? '+' : '-'}</CollapseIcon>

        {title}
      </Title>

      <Options className={isCollapsed ? 'collapsed' : ''}>
        {items.map((item, index) => <CheckBox {...item} key={index} />)}
      </Options>
    </>
  )
}
