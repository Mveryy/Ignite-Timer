import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`

export const BaseButton = styled.button`
  width: 100%;
  margin: auto;
  height: 4rem;
  border: 0;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors['green-500']};
  color: ${({ theme }) => theme.colors['gray-100']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`
export const StartButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors['green-500']};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['green-700']};
  }
`
export const StopButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors['red-500']};
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors['red-700']};
  }
`
