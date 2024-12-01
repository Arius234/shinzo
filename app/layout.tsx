// app/layout.tsx
import '../public/styles/global.css';

export const metadata = {
  title: 'Shinzo - Trouvez l’amour',
  description: 'Confirmez vos sentiments avec Shinzo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
