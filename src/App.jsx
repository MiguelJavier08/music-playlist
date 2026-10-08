import { useState } from "react";
import "./style.css";

const tracks = [
  { title: "Buseng", artist: "Reiven" },
  { title: "Shatol", artist: "GC" },
  { title: "Monghe", artist: "Latay" },
  { title: "Humigop ako", artist: "GC" },
  { title: "Buknoy", artist: "Kihano" },
  { title: "Shades", artist: "Rafs" },
  { title: "Bobs", artist: "Jeremy" },
];

export default function App() {
  const [playing, setPlaying] = useState(null);
  const [faves, setFaves] = useState([]);

  const toggleFave = (t) =>
    setFaves(faves.includes(t) ? faves.filter((f) => f !== t) : [...faves, t]);

  return (
    <div className="app">
      <div className="top">
        <span>◀</span>
        <span>MUSIC PLAYLIST</span>
        <span>☰</span>
      </div>

      <h1>Ayasib Album</h1>
      <p className="sub">♫</p>

      <div className="cover-wrap">
        <div className="disc" />
        <img className="cover" src="/ayasib.jpg" alt="Ayasib Album" />
      </div>

      <div className="list">
        {tracks.map((t) => (
          <div key={t.title} className={`track ${playing === t.title ? "active" : ""}`}>
            <div className="name" onClick={() => setPlaying(playing === t.title ? null : t.title)}>
              <b>{playing === t.title ? "▶ " : ""}{t.title}</b>
              <small>by {t.artist}</small>
            </div>
            <div className="icons">
              <span onClick={() => toggleFave(t.title)}>{faves.includes(t.title) ? "★" : "☆"}</span>
              <span>▶</span>
              <span>≡</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}