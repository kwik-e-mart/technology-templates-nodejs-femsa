#!/bin/bash
npm install -g eslint
npm install --dev

# Define the directory to analyze and report file
PROJECT_DIR="."
REPORT_FILE="eslint-report.json"
OUTPUT_FORMAT="json" # You can choose other formats like json if needed

# Run ESLint analysis
echo "Running ESLint analysis on $PROJECT_DIR..."
eslint "$PROJECT_DIR" -f "$OUTPUT_FORMAT" -o "$REPORT_FILE"

# Optional: Count the number of issues
CODE_SMELLS=$(jq '[.[] | .messages | map(select(.severity == 2)) | length] | add' eslint-report.json)
rm $REPORT_FILE

echo "Total number of issues found: $CODE_SMELLS"
# export
# export NP_DRY_RUN=true
np metadata create --entity build --data "{\"linter\": {\"code_smells\": $CODE_SMELLS}}"

