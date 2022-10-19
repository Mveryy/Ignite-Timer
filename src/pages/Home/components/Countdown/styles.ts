import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme.colors['gray-100']};
  display: flex;
  gap: 1rem;

  @media (max-width: 680px) {
    display: grid;
    grid-template-columns: 8rem 1fr;
  }
`

export const SpanCountdown = styled.span`
  background-color: ${({ theme }) => theme.colors['gray-700']};
  padding: 2rem 1rem;
  border-radius: 8px;
`

export const SeparatorCountdown = styled.div`
  padding: 1rem 0;
  color: ${({ theme }) => theme.colors['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 680px) {
    display: none;
  }
`
