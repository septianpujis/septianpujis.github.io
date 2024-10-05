import "./globals.css";

export const metadata = {
  title: "Septian Puji",
  description: "Portofolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
