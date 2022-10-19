import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
`

export const HistoryTitle = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};
`

export const HistoryContent = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`

export const TableHead = styled.thead``

export const TableRow = styled.tr``

export const TableHeader = styled.th`
  background-color: ${({ theme }) => theme.colors['gray-600']};
  color: ${({ theme }) => theme.colors['gray-100']};
  padding: 1rem;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.6;

  &:first-child {
    border-top-left-radius: 8px;
    padding-left: 1.5rem;
  }

  &:last-child {
    border-top-right-radius: 8px;
    padding-right: 1.5rem;
  }
`

export const TableBody = styled.tbody``

export const TableData = styled.td`
  background-color: ${({ theme }) => theme.colors['gray-700']};
  border-top: 4px solid ${({ theme }) => theme.colors['gray-800']};
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.6;

  &:first-child {
    padding-left: 1.5rem;
    width: 50%;
  }

  &:last-child {
    padding-right: 1.5rem;
  }
`
const STATUS_COLORS = {
  green: 'green-500',
  red: 'red-500',
  yellow: 'yellow-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) =>
      props.theme.colors[STATUS_COLORS[props.statusColor]]};
  }
`
