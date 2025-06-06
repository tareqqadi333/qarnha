import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 10 }}>ﬁ«—ˆ‰Â« ñ Qarnha</h1>
      <p style={{ marginBottom: 20 }}>„ﬁ«—‰… »Ì‰ »ÿ«ﬁ«  «·«∆ „«‰ Ê«·„Õ«›Ÿ «·≈·ﬂ —Ê‰Ì… ›Ì «·”⁄ÊœÌ…</p>

      <div style={{ display: 'grid', gap: 20 }}>
        <Card>
          <h2 style={{ fontSize: 18 }}>»ÿ«ﬁ… «·√Â·Ì «·«∆ „«‰Ì…</h2>
          <p>‰”»… ›«∆œ…: 2.5% ‘Â—Ì«</p>
          <p>«·Õœ «·√œ‰Ï ··—« »: 3000 —Ì«·</p>
          <Button> ›«’Ì· √ﬂÀ—</Button>
        </Card>

        <Card>
          <h2 style={{ fontSize: 18 }}>»ÿ«ﬁ… STC Pay «·—ﬁ„Ì…</h2>
          <p>·«  ÊÃœ —”Ê„ ”‰ÊÌ…</p>
          <p> ’œ— „»«‘—… ⁄»— «· ÿ»Ìﬁ</p>
          <Button> ›«’Ì· √ﬂÀ—</Button>
        </Card>

        <Card>
          <h2 style={{ fontSize: 18 }}>»ÿ«ﬁ… «·—Ì«÷ »·« Ì‰ÌÊ„</h2>
          <p>‰”»… ›«∆œ…: 1.7% ‘Â—Ì«</p>
          <p>«·Õœ «·√œ‰Ï ··—« »: 8000 —Ì«·</p>
          <Button> ›«’Ì· √ﬂÀ—</Button>
        </Card>
      </div>
    </main>
  );
}
