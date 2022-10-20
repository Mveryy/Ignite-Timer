import React, { createContext, ReactNode, useReducer, useState } from 'react'
import {
  ActionTypes,
  addNewCycleAction,
  interruptCycleAction,
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
}

export const Context = createContext({} as ContextProps)

export function ContextProvider({ children }: ProviderProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const [cyclesState, dispatch] = useReducer(CyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

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
      }}
    >
      {children}
    </Context.Provider>
  )
}
