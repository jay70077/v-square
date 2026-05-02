import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "V-Square Facade - Innovative Façade Construction",
  description: "Providing spectacular building skins and innovative façades engineered for ambitious, unique architectural creations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
