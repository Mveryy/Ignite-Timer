import React, { createContext, ReactNode, useReducer, useState } from 'react'

type ProviderProps = {
  children: ReactNode
}

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CreateCycleProps {
  task: string
  minutesAmount: number
}

type ContextProps = {
  cycles: Cycle[]
  activeCycleId: string | null
  setActiveCycleId: React.Dispatch<React.SetStateAction<string | null>>
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>
  handleCreateTask: (data: CreateCycleProps) => void
  handleInterruptCycle: () => void
}

export const Context = createContext({} as ContextProps)

export function ContextProvider({ children }: ProviderProps) {
  const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
    if (action.type === 'createCycle') {
      return [...state, action.payload.newCycle]
    }

    return state
  }, [])

  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const handleCreateTask = (data: CreateCycleProps) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: 'createCycle',
      payload: { newCycle },
    })
    // setCycles((prevState) => [...prevState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  const handleInterruptCycle = () => {
    dispatch({
      type: 'interruptCycle',
      payload: { activeCycleId },
    })
    // setCycles((state) =>
    //   state.map((cycle) => {
    //     if (cycle.id === activeCycleId) {
    //       return { ...cycle, interruptedDate: new Date() }
    //     } else {
    //       return cycle
    //     }
    //   }),
    // )
    setActiveCycleId(null)
  }

  // const markCurrentCycleAsFinished = () => {
  //   dispatch({
  //     type: 'markCurrentCycleAsFinished',
  //     payload: { activeCycleId },
  //   })
  //   // setCycles((state) =>
  //   //   state.map((cycle) => {
  //   //     if (cycle.id === activeCycleId) {
  //   //       return { ...cycle, interruptedDate: new Date() }
  //   //     } else {
  //   //       return cycle
  //   //     }
  //   //   }),
  //   // )
  // }

  return (
    <Context.Provider
      value={{
        cycles,
        activeCycleId,
        setActiveCycleId,
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
