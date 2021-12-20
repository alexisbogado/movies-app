import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function useHandleLocation(handler) {
  const location = useLocation()

  useEffect(() => handler(), [ location ])
}
