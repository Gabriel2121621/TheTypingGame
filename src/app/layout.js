import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>The typing Game</title>
        <link rel="icon" href="/icon.ico"/>
      </head>
      <body className={jetbrains.className}>
        {children}
      </body>
    </html>
  );
}
