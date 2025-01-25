export const metadata = {
  title: "Auth Page",
  description: "You have to login or Reg",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen">{children}</div>
        <footer className="bg-gray-400 py-12">This is Footer</footer>
      </body>
    </html>
  );
}
