# Governance notifier bot CLI

A notification bot that checks on-chain activity in a Solana governance realms and notifies about new proposals through webhooks or messaging services.

The code was based on idea from governance ui
[scripts](https://github.com/solana-labs/governance-ui/blob/4d75b2368cefb9d314e381a968c983995ba329e2/scripts/governance-notifier.ts).

## How to runM

```bash
pnpm install
pnm cli --help

Usage: index [options] [command]

Notify about Solana SPL Governance newly created proposals via webhook calls

Options:
  -V, --version                         output the version number
  -u, --url <url-or-moniker>            URL of Solana cluster or moniker (m/mainnet/mainnet-beta, d/devnet, t/testnet) (default: "mainnet-beta")
  --commitment <commitment>             Solana RPC client connection commitment (default: "confirmed")
  -d, --debug                           Debug (default: false)
  -v, --verbose                         alias for --debug (default: false)
  -r, --redis <redis-url>               Redis URL (e.g., redis://localhost:6379). If provided, the notifier uses Redis to store its last run, preventing the loss of any notifications.
  --webhook                             Enable webhook notifications
  --telegram                            Enable Telegram notifications
  --discord                             Enable Discord notifications
  --slack                               Enable Slack notifications
  --webhook-url <url>                   Webhook URL for webhook notifications (env: WEBHOOK_URL)
  --telegram-token <token>              Bot token for Telegram notifications (env: TELEGRAM_TOKEN)
  --telegram-chat-id <chatId>           Chat ID for Telegram notifications (env: TELEGRAM_CHAT_ID)
  --discord-url <url>                   Webhook URL for Discord notifications (env: DISCORD_WEBHOOK_URL)
  --discord-notification-color <color>  Color for Slack notifications in decimal format (default: aero blue) (default: "13238245")
  --slack-token <token>                 Bearer token for Slack notifications (env: SLACK_BEARER_TOKEN)
  --slack-feed <feedName>               Feed name for Slack notifications (env: SLACK_FEED)
  --slack-notification-color <color>    Color for Slack notifications in hex format (default: aero blue) (default: "#c9ffe5")
  --bot-name <botName>                  Name of bot that will be announced in notification (default: "SPL Governance Notifier")
  -h, --help                            display help for command