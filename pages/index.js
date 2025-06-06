import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 24, marginBottom: 10 }}>������� � Qarnha</h1>
      <p style={{ marginBottom: 20 }}>������ ��� ������ �������� �������� ����������� �� ��������</p>

      <div style={{ display: 'grid', gap: 20 }}>
        <Card>
          <h2 style={{ fontSize: 18 }}>����� ������ ����������</h2>
          <p>���� �����: 2.5% ������</p>
          <p>���� ������ ������: 3000 ����</p>
          <Button>������ ����</Button>
        </Card>

        <Card>
          <h2 style={{ fontSize: 18 }}>����� STC Pay �������</h2>
          <p>�� ���� ���� �����</p>
          <p>���� ������ ��� �������</p>
          <Button>������ ����</Button>
        </Card>

        <Card>
          <h2 style={{ fontSize: 18 }}>����� ������ ���������</h2>
          <p>���� �����: 1.7% ������</p>
          <p>���� ������ ������: 8000 ����</p>
          <Button>������ ����</Button>
        </Card>
      </div>
    </main>
  );
}
