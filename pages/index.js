import React from 'react';
import { Card } from '../components/ui/card';

export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 10 }}>قارِنها – Qarnha</h1>
      <p style={{ marginBottom: 20 }}>مقارنة بين بطاقات الائتمان والمحافظ الإلكترونية في السعودية</p>

      <div style={{ display: 'grid', gap: 20 }}>
        <Card>
          <h2 style={{ fontSize: 18 }}>بطاقة الأهلي الائتمانية</h2>
          <p>نسبة فائدة: 2.5% شهرياً</p>
          <p>الحد الأدنى للراتب: 3000 ريال</p>
          <a href="/cards/alahli" style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            marginTop: '10px'
          }}>
            تفاصيل أكثر
          </a>
        </Card>

        <Card>
          <h2 style={{ fontSize: 18 }}>بطاقة STC Pay الرقمية</h2>
          <p>لا توجد رسوم سنوية</p>
          <p>تصدر مباشرة عبر التطبيق</p>
          <a href="/cards/stcpay" style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            marginTop: '10px'
          }}>
            تفاصيل أكثر
          </a>
        </Card>

        <Card>
          <h2 style={{ fontSize: 18 }}>بطاقة الرياض بلاتينيوم</h2>
          <p>نسبة فائدة: 1.7% شهرياً</p>
          <p>الحد الأدنى للراتب: 8000 ريال</p>
          <a href="/cards/riyadh" style={{
            display: 'inline-block',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            marginTop: '10px'
          }}>
            تفاصيل أكثر
          </a>
        </Card>
      </div>
    </main>
  );
}



