import Header from "@/app/components/Header";
import "./globals.css";
import AuthProvider from "@/context/AuthContext";
import { Footer } from "@/app/components/Footer";

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
