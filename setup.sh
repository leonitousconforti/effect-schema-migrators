#!/usr/bin/env bash

set -euo pipefail
npm install -g pnpm @microsoft/rush tsx
rush install --purge
rush update-autoinstaller --name rush-prettier
rush update-autoinstaller --name rush-commitlint
rush update-autoinstaller --name rush-github-action-cache
rush retest
