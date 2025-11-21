#!/bin/bash

# Script to generate PWA icons from dentalvets-logo.jpg

cd "$(dirname "$0")/../public"

if [ ! -f "dentalvets-logo.jpg" ]; then
    echo "Error: dentalvets-logo.jpg not found"
    exit 1
fi

# Generate 192x192 icon
sips -z 192 192 dentalvets-logo.jpg --out icon-192x192.png 2>/dev/null
echo "✓ Created icon-192x192.png"

# Generate 512x512 icon
sips -z 512 512 dentalvets-logo.jpg --out icon-512x512.png 2>/dev/null
echo "✓ Created icon-512x512.png"

# Generate favicon
sips -z 32 32 dentalvets-logo.jpg --out favicon.ico 2>/dev/null
echo "✓ Created favicon.ico"

# Generate apple-touch-icon
sips -z 180 180 dentalvets-logo.jpg --out apple-touch-icon.png 2>/dev/null
echo "✓ Created apple-touch-icon.png"

echo ""
echo "PWA icons generated successfully!"
