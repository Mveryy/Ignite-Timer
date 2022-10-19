import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Context } from '../../context/Context'
import Countdown from './components/Countdown/Countdown'
import NewCycleForm from './components/NewCycleForm/NewCycleForm'
import { FormContainer, HomeContainer, StartButton, StopButton } from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1),
  minutesAmount: zod.number().min(5).max(60),
})

type FormProps = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
  const { activeCycle, handleCreateTask, handleInterruptCycle } =
    useContext(Context)

  const newCycleForm = useForm<FormProps>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: undefined,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: FormProps) {
    handleCreateTask(data)
    reset()
  }

  const task = watch('task')
  const isTaskInputEmpty = !task

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopButton>
        ) : (
          <StartButton type="submit" disabled={isTaskInputEmpty}>
            <Play size={24} />
            Começar
          </StartButton>
        )}
      </FormContainer>
    </HomeContainer>
  )
}
