#!/usr/bin/env sh
set -eu

PORT="${PORT:-4173}"

echo "Starting SCORING at http://localhost:${PORT}/"
python3 -m http.server "$PORT"
