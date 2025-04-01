import "../styles/global.css";
import Navbar from "./layouts/navbar";

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    )
  }