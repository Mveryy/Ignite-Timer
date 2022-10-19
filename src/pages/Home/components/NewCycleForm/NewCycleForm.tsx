import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { Context } from '../../../../context/Context'
import {
  InputContainer,
  Label,
  MinutesAmountInput,
  Span,
  TaskInput,
} from './styles'

export default function NewCycleForm() {
  const { activeCycle } = useContext(Context)
  const { register } = useFormContext()

  return (
    <InputContainer>
      <Label htmlFor="task">Vou trabalhar em</Label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <Label htmlFor="minutesAmount">durante</Label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="- 00 +"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <Span>minutos.</Span>
    </InputContainer>
  )
}
