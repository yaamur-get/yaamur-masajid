import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        {/* Google Fonts - Cairo Arabic Font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Fallback Arabic fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
