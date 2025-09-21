import "./globals.css";

export const metadata = {
  title: "Auth System",
  description: "Next.js + Express + MySQL Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
