import { Reenie_Beanie, Space_Grotesk } from 'next/font/google';
import "./globals.css";

export const reenieBeanie = Reenie_Beanie({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-reenie-beanie',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: "Still/Life Studio",
  description: "Still Life Design Studio is a new practice offering innovative design services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${reenieBeanie.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
