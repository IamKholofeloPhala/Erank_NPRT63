import './globals.css';

export const metadata = {
  title: 'Taxi Rank App',
  description: 'Taxi rank management platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
