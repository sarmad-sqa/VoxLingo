# VoxLingo

### Urdu → English · Voice preview · Synced captions · Video download

VoxLingo is a browser-based caption studio. Paste Urdu text, translate to English, preview speech with karaoke-style captions, then record the stage and download the video.

## Live demo

[vox-lingo.vercel.app](https://vox-lingo.vercel.app/)

## Features

- Urdu → English translation (Google Translate, with MyMemory fallback)
- Timed karaoke captions on a live canvas stage
- Speech preview
- Record & download with embedded voice audio (no screen-share)
- Runs entirely in the browser — no account

## How to use

1. Open the [live site](https://vox-lingo.vercel.app/).
2. Enter Urdu text.
3. Click **Translate to English**.
4. Click **Preview speech** to hear the result and watch captions.
5. Click **Record & prepare download**.
6. When recording finishes, use **Download video**.

## UI

The interface is a dark caption-studio layout: Fraunces for the brand, Manrope for UI, and Noto Nastaliq Urdu for input. The preview stage sits first; translate and export follow in clear steps.

## Audio in downloads

Recording fetches speech through a same-origin `/api/tts` proxy, then mixes that audio into the video with the Web Audio API. That avoids the silent-capture issue browsers apply to cross-origin TTS.

## Translation & troubleshooting

Translation tries **Google Translate** first, then **MyMemory** (with an email quota parameter). Results are cached in `sessionStorage`, and 429 responses are retried with short backoff.

Recording always finishes when captions complete (with a hard timeout backup), so the download link appears even if browser speech `onend` does not fire.

## Project links

- Live: https://vox-lingo.vercel.app/
- Source: this repository (`index.html`)
