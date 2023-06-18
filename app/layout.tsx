import Header from "@/components/Header/Header";
import "./globals.css";
import AuthProvider from "@/providers/auth";
import { Footer } from "@/components/Footer/Footer";

export const metadata = {
  title: "Car shop",
  description: "Website to buy buy cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
