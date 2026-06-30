# Urdu Alphabet Flashcards

An interactive flashcard app for learning the Urdu alphabet. Each card shows an Urdu letter — tap or click it to flip and reveal the English sound and pronunciation hint.

**Live app:** [urdu-flashcards.web.app](https://urdu-flashcards.web.app)

## Features

- All 39 letters of the Urdu alphabet
- Tap/click a card to flip and reveal the English sound
- Forward and back arrows to navigate through the deck
- Shuffle button to randomize the order (just like a music shuffle)
- Keyboard support: arrow keys to navigate, Space/Enter to flip
- Works on mobile and desktop
- Dark mode supported automatically

## Tech Stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- Hosted on [Firebase Hosting](https://firebase.google.com/docs/hosting)
- Urdu script rendered with [Noto Nastaliq Urdu](https://fonts.google.com/noto/specimen/Noto+Nastaliq+Urdu) font

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Deploying

```bash
npm run build
firebase deploy --only hosting
```
