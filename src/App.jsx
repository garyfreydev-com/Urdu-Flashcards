import { useState, useCallback } from 'react';
import alphabet from './urduAlphabet';
import './App.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [deck, setDeck] = useState(alphabet.map((_, i) => i));
  const [position, setPosition] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);

  const current = alphabet[deck[position]];
  const total = deck.length;

  const go = useCallback((delta) => {
    setFlipped(false);
    setPosition((p) => (p + delta + total) % total);
  }, [total]);

  const toggleShuffle = () => {
    if (isShuffled) {
      setDeck(alphabet.map((_, i) => i));
      setPosition(0);
    } else {
      setDeck(shuffle(alphabet.map((_, i) => i)));
      setPosition(0);
    }
    setFlipped(false);
    setIsShuffled((s) => !s);
  };

  return (
    <div className="app">
      <h1 className="title">Urdu Alphabet</h1>

      <div className="counter">{position + 1} / {total}</div>

      <div
        className="card-scene"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f);
          if (e.key === 'ArrowLeft') go(-1);
          if (e.key === 'ArrowRight') go(1);
        }}
        aria-label={flipped ? `Sound: ${current.sound}` : `Urdu letter ${current.letter}, tap to reveal`}
      >
        <div className={`card ${flipped ? 'flipped' : ''}`} key={deck[position]}>
          <div className="face front">
            <span className="urdu-letter">{current.letter}</span>
          </div>
          <div className="face back">
            <span className="sound-name">{current.sound}</span>
            <span className="sound-example">{current.example}</span>
          </div>
        </div>
      </div>

      <div className="controls">
        <button className="nav-btn" onClick={() => go(-1)} aria-label="Previous letter">
          &#8592;
        </button>

        <button
          className={`shuffle-btn ${isShuffled ? 'active' : ''}`}
          onClick={toggleShuffle}
          title={isShuffled ? 'Shuffle on' : 'Shuffle off'}
          aria-label={isShuffled ? 'Shuffle on, click to turn off' : 'Shuffle off, click to shuffle'}
        >
          &#x1F500;
        </button>

        <button className="nav-btn" onClick={() => go(1)} aria-label="Next letter">
          &#8594;
        </button>
      </div>
    </div>
  );
}
