import { Cycle } from './reducer'

export enum ActionTypes {
  createCycle = 'createCycle',
  interruptCycle = 'interruptCycle',
  markCurrentCycleAsFinished = 'markCurrentCycleAsFinished',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.createCycle,
    payload: { newCycle },
  }
}

export function interruptCycleAction() {
  return {
    type: ActionTypes.interruptCycle,
  }
}
