import { useEffect, useState } from 'react'

export default function usePageTitle(initialTitle) {
  const [ title, setTitle ] = useState(initialTitle)

  useEffect(() => {
    document.title = `Movies App - ${title}`
  }, [ title ])

  return { title, setTitle }
}
