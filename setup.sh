#!/usr/bin/env bash

set -euo pipefail
npm install -g @microsoft/rush pnpm tsx
rush install --purge
rush update --full
rush update-autoinstaller --name rush-prettier
rush update-autoinstaller --name rush-commitlint
rush update-autoinstaller --name rush-github-action-cache
rush retest
