import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import {
  HistoryContainer,
  HistoryTitle,
  HistoryContent,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableData,
  TableHeader,
  Status,
} from './styles'

export default function History() {
  const { cycles } = useContext(Context)

  return (
    <HistoryContainer>
      <HistoryTitle>Meu histórico</HistoryTitle>
      <HistoryContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Tarefa</TableHeader>
              <TableHeader>Duração</TableHeader>
              <TableHeader>Início</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {cycles.map((cycle) => {
              return (
                <TableRow key={cycle.id}>
                  <TableData>{cycle.task}</TableData>
                  <TableData>{cycle.minutesAmount} minutos</TableData>
                  <TableData>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </TableData>
                  <TableData>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </TableData>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </HistoryContent>
    </HistoryContainer>
  )
}
