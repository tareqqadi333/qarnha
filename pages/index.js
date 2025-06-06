import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 10 }}>قارِنها – Qarnha</h1>
      <p style={{ marginBottom: 20 }}>مقارنة بين بطاقات الائتمان والمحافظ الإلكترونية في السعودية</p>
      <Card>
        <h2 style={{ fontSize: 18 }}>بطاقة الأهلي الائتمانية</h2>
        <p>نسبة فائدة: 2.5% شهرياً</p>
        <p>الحد الأدنى للراتب: 3000 ريال</p>
        <Button>تفاصيل أكثر</Button>
      </Card>
    </main>
  );
}
