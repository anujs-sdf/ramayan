# Ramayana: A Journey of Courage and Compassion

An interactive, choice-driven retelling of the Ramayana. Travel through eleven chapters, meet the characters, and reflect on the choices you made along the way.

## Features

- Eleven illustrated story chapters, two choices per chapter, and a personalized journey review.
- Ten interface and story languages: English, Hindi, German, Russian, Japanese, Spanish, French, Portuguese, Simplified Chinese, and Arabic.
- Right-to-left layout for Arabic.
- An English source guide with original summaries of the six Valmiki Ramayana Kandas represented on ValmikiRamayan.net, direct chapter-index links, translator credits, and a note that the translation has no stated open reuse license.
- Search- and share-friendly metadata that follows the current language and chapter, including Open Graph, Twitter Cards, canonical and `hreflang` links, and JSON-LD.
- Shareable chapter URLs such as `?lang=es&scene=1`.
- Optional mantra background intensity and browser-generated Indian-classical-inspired ambient music. Music is off by default and starts only when enabled.
- Original chapter-specific vector artwork, responsive layout, and character profiles.
- Static site served by Nginx in Docker.

## Run locally

The site uses only static files and can be opened directly:

1. Open `index.html` in a modern browser.
2. Select a language from the menu.
3. Choose **Begin the journey**, then select an option in each chapter.

For a local HTTP server, run this from the project directory:

```powershell
py -m http.server 8000
```

Then visit <http://localhost:8000>.

## Run with Docker

Install and start Docker Desktop, then run from the project directory:

```powershell
docker compose up --build -d
```

Open <http://localhost:8080>. To stop the service:

```powershell
docker compose down
```

The Compose service builds the included `Dockerfile` and serves the static site with Nginx. Docker Desktop on Windows may require WSL 2 and a system restart during initial setup.

## Project files

- `index.html` — responsive interface, scene rendering, navigation, and audio controls.
- `valmiki.html` — original, source-linked summaries of the six Kandas available on ValmikiRamayan.net; no translated passages are reproduced.
- `story-data.js` — English, Hindi, German, Russian, and Japanese story catalogs.
- `extended-scenes.js` — additional scenes for the original five catalogs.
- `journey-scenes.js` — four further journey chapters in the original five catalogs.
- `additional-languages.js` — Spanish, French, Portuguese, Simplified Chinese, and Arabic catalogs.
- `scene-artwork.js` — original vector illustrations for each story chapter.
- `favicon.svg`, `robots.txt` — site icon and crawler instructions.
- `Dockerfile`, `compose.yaml`, `.dockerignore` — container configuration.
- `ramayana_story.py` — standalone terminal version of the interactive story.

## Artwork and audio

The opening artwork is [Rama-Sita coronation](https://commons.wikimedia.org/wiki/File:Rama-Sita_coronation.jpg), identified on Wikimedia Commons as public domain. The remaining chapter illustrations are original inline SVG artwork. The ambient soundtrack is generated locally by the browser's Web Audio API; it does not load or transmit audio files.

SEO metadata is updated client-side for each chapter and language. Serve the site over HTTP(S) for canonical URLs, search indexing, and social sharing; opening the HTML directly with `file://` is intended only for local play.

## Contributing translations

Language catalogs are bundled in JavaScript so the story works without a translation API. Keep scene order, choice counts, character IDs, and `quality` values (`compassion` or `resolve`) consistent across every language. For Arabic or other right-to-left translations, set the catalog's `dir` to `"rtl"`; otherwise use `"ltr"`.
