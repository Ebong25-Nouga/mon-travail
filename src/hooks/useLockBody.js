import { useEffect } from 'react'

// Bloque le défilement de la page (menu mobile ouvert, galerie plein écran…)
export default function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [locked])
}
