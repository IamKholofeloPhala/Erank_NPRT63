import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Taxi Rank App</h1>
      <p>Welcome to the taxi rank management platform.</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard/passenger">Passenger Dashboard</Link>
      </div>
    </main>
  );
}
