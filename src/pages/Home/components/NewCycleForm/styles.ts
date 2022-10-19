import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors['gray-100']};
  font-weight: bold;
  align-items: center;
  width: 100%;
`
export const Label = styled.label``
const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &:disabled {
    opacity: 0.7;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

  &:disabled {
    opacity: 0.7;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const Span = styled.span``
