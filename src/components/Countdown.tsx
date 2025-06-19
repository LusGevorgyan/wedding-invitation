import { useEffect, useState } from 'react'

export default function Countdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null)

  useEffect(() => {
    const weddingDate = new Date('2025-07-20T00:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const diff = weddingDate.getTime() - now.getTime()
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      setDaysLeft(days > 0 ? days : 0)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return <p>{daysLeft !== null ? `${daysLeft} days to go` : 'Loading...'}</p>
}
