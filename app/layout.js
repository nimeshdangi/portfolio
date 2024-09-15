// Import the Navbar component
import Navbar from "../components/Navbar";
// import "../styles/globals.css";
import "./globals.css";

// RootLayout component to wrap your app
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar will be globally rendered here */}
        <Navbar />
        {/* Render the specific page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}

