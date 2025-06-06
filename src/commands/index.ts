import { Command } from 'commander'
import { installCheckProposals } from './checkProposals'

export function installCommands(program: Command) {
  installCheckProposals(program)
}
