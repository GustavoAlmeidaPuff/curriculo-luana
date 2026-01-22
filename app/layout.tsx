import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luana Furtado - Fotógrafa Artística | Currículo',
  description: 'Fotógrafa artística especializada em composição, luz e enquadramento. Criação de artes para anúncios, fotografia de produtos e design visual. Portfólio profissional disponível.',
  openGraph: {
    title: 'Luana Furtado - Fotógrafa Artística',
    description: 'Fotógrafa artística especializada em composição, luz e enquadramento. Criação de artes para anúncios, fotografia de produtos e design visual. Explore uma coleção única de fotografias artísticas e retratos.',
    url: 'https://portifolioluana.vercel.app/',
    siteName: 'Luana Furtado - Fotógrafa Artística',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luana Furtado - Fotógrafa Artística',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luana Furtado - Fotógrafa Artística',
    description: 'Fotógrafa artística especializada em composição, luz e enquadramento. Criação de artes para anúncios, fotografia de produtos e design visual.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: #ffffff;
              color: #000000;
              line-height: 1.6;
            }
            @media (max-width: 768px) {
              body {
                padding: 0;
              }
              .download-button {
                position: fixed !important;
                top: 10px !important;
                right: 10px !important;
                padding: 10px 16px !important;
                font-size: 14px !important;
              }
            }
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
