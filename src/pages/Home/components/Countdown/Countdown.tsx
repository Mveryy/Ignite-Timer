import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { Context } from '../../../../context/Context'
import { CountdownContainer, SeparatorCountdown, SpanCountdown } from './styles'

export default function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setAmountSecondsPassed,
    markCurrentCycleAsFinished,
  } = useContext(Context)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: any

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    } else {
      document.title = 'Ignite Timer'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <SpanCountdown>{minutes[0]}</SpanCountdown>
      <SpanCountdown>{minutes[1]}</SpanCountdown>
      <SeparatorCountdown>:</SeparatorCountdown>
      <SpanCountdown>{seconds[0]}</SpanCountdown>
      <SpanCountdown>{seconds[1]}</SpanCountdown>
    </CountdownContainer>
  )
}
