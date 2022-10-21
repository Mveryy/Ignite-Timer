import { differenceInSeconds } from 'date-fns'
import React, {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCycleAction,
  interruptCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { Cycle, CyclesReducer } from '../reducers/cycles/reducer'

type ProviderProps = {
  children: ReactNode
}

interface CreateCycleProps {
  task: string
  minutesAmount: number
}

type ContextProps = {
  cycles: Cycle[]
  activeCycleId: string | null
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>
  handleCreateTask: (data: CreateCycleProps) => void
  handleInterruptCycle: () => void
  markCurrentCycleAsFinished: () => void
}

export const Context = createContext({} as ContextProps)

export function ContextProvider({ children }: ProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  const handleCreateTask = (data: CreateCycleProps) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  const handleInterruptCycle = () => {
    dispatch(interruptCycleAction())
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state', stateJSON)
  }, [cyclesState])

  return (
    <Context.Provider
      value={{
        cycles,
        activeCycleId,
        activeCycle,
        amountSecondsPassed,
        setAmountSecondsPassed,
        handleCreateTask,
        handleInterruptCycle,
        markCurrentCycleAsFinished,
      }}
    >
      {children}
    </Context.Provider>
  )
}
