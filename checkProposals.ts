import { Connection, PublicKey } from '@solana/web3.js'
import axios from 'axios'
import { getConnectionContext } from 'utils/connection'
import {
  getGovernanceAccounts,
  Governance,
  Proposal,
  ProposalState,
  pubkeyFilter,
} from '@solana/spl-governance'
import { getCertifiedRealmInfo } from '@models/registry/api'
import { accountsToPubkeyMap } from '@tools/sdk/accounts'
import { Command } from 'commander'


const fiveMinutesSeconds = 5 * 60
const toleranceSeconds = 30

export function installCheckProposals(program: Command) {
  program
    .command('add-liquidity')
    .description('Provide liquidity to the liquidity pool')
    .argument('<amount-sol>', 'SOL amount to add to liquidity pool', parseFloat)
    .action(async (amountSol: number) => {
      await checkProposals({
        amountSol,
      })
    })