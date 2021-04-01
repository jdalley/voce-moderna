#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main"  ]] ; then
  # Proceed with the build
	echo "✅ - 'main' branch detected, build can proceed."
  exit 1;
else
  # Don't build
  echo "❌ - no 'main' branch detected, build cancelled."
  exit 0;
fi