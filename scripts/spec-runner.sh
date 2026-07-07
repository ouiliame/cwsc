#!/usr/bin/env bash
# Spec runner: compiles every example contract e2e (.cws -> Rust crate),
# then cargo-checks every generated crate. Exits nonzero if anything fails.
#
# Usage: scripts/spec-runner.sh [project-filter]
#   e.g. scripts/spec-runner.sh lang-features

set -u
export PATH="$HOME/.cargo/bin:$PATH"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
export CARGO_TARGET_DIR="$ROOT/.cargo-target"

FILTER="${1:-}"
declare -a RESULTS=()
FAIL=0

for proj_dir in examples/*/; do
  proj="$(basename "$proj_dir")"
  [[ -f "$proj_dir/cwsproject.json" ]] || continue
  [[ -n "$FILTER" && "$proj" != *"$FILTER"* ]] && continue

  # e2e: one run per top-level contract file
  for cws in "$proj_dir"src/*.cws; do
    [[ -e "$cws" ]] || continue
    contract="$(basename "$cws" .cws)"
    out="$(bun src/e2e.ts "$proj" "$contract" 2>&1)"
    if [[ $? -ne 0 ]]; then
      RESULTS+=("FAIL e2e    $proj/$contract")
      FAIL=1
      echo "--- e2e FAIL: $proj/$contract ---"
      echo "$out" | tail -15
    else
      RESULTS+=("pass e2e    $proj/$contract")
    fi
  done

  # cargo check every generated crate in this project
  for manifest in "$proj_dir"build/*/Cargo.toml; do
    [[ -e "$manifest" ]] || continue
    crate_dir="$(dirname "$manifest")"
    crate="$proj/$(basename "$crate_dir")"
    out="$(cargo check --manifest-path "$manifest" --quiet 2>&1)"
    if [[ $? -ne 0 ]]; then
      nerr="$(echo "$out" | grep -c '^error')"
      RESULTS+=("FAIL cargo  $crate ($nerr errors)")
      FAIL=1
      echo "--- cargo FAIL: $crate ---"
      echo "$out" | grep -E '^error' | sort | uniq -c | sort -rn | head -12
    else
      RESULTS+=("pass cargo  $crate")
    fi
  done
done

echo
echo "================ SPEC RUNNER SUMMARY ================"
printf '%s\n' "${RESULTS[@]}"
echo "====================================================="
exit $FAIL
