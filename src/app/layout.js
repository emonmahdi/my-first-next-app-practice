import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <div className="">{children}</div>
        <footer className="bg-gray-400 py-12">This is Footer</footer>
      </body>
    </html>
  );
}
