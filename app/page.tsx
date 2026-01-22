'use client'

import { useRef } from 'react'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return

    try {
      // Criar uma nova janela com o conteúdo para impressão
      const printWindow = window.open('', '_blank')
      if (!printWindow) {
        alert('Por favor, permita pop-ups para gerar o PDF')
        return
      }

      // Clonar o conteúdo
      const content = contentRef.current.cloneNode(true) as HTMLElement
      
      // Criar HTML completo com estilos
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <title>Currículo - Luana Furtado da Silva</title>
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                background-color: #ffffff;
                color: #000000;
                line-height: 1.6;
                padding: 20px;
              }
              @media print {
                body {
                  padding: 0;
                }
                @page {
                  margin: 10mm;
                  size: A4;
                }
              }
              a {
                color: #2563eb;
                text-decoration: none;
              }
              a:hover {
                text-decoration: underline;
              }
            </style>
          </head>
          <body>
            ${content.innerHTML}
          </body>
        </html>
      `

      printWindow.document.write(htmlContent)
      printWindow.document.close()

      // Aguardar o conteúdo carregar e então imprimir
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
          // Fechar a janela após um tempo
          setTimeout(() => {
            printWindow.close()
          }, 1000)
        }, 250)
      }
    } catch (error) {
      console.error('Erro ao gerar PDF:', error)
      alert('Erro ao gerar PDF. Tente usar a opção de impressão do navegador.')
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <button
          onClick={handleDownloadPDF}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#dc2626',
            color: '#ffffff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1000,
            transition: 'background-color 0.2s',
          }}
          className="download-button"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#b91c1c'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#dc2626'
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.backgroundColor = '#b91c1c'
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.backgroundColor = '#dc2626'
          }}
        >
          📄 Baixar em PDF
        </button>

        <div ref={contentRef} style={{ backgroundColor: '#ffffff', padding: '35px' }}>
          <div style={{ marginBottom: '22px' }}>
            <p style={{ fontSize: '2em', fontWeight: '600', marginBottom: '18px', marginTop: 0, padding: 0 }}>
              Luana Furtado da Silva
            </p>

            <div style={{ fontSize: '15px', lineHeight: '1.7' }}>
              <div>Igrejinha – RS</div>
              <div>(51) 99942-1776</div>
              <div>luanafurta082@gmail.com</div>
              <div>
                Portfólio:{' '}
                <a
                  href="https://portifolioluana.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#2563eb', textDecoration: 'none' }}
                >
                  https://portifolioluana.vercel.app/
                </a>
              </div>
            </div>
          </div>

          <section style={{ marginBottom: '20px' }}>
            <h2 style={{ color: '#dc2626', fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>
              Competências
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.7' }}>
              Fotografia (composição, luz e enquadramento), noções de design para anúncios, criatividade e senso estético, organização, responsabilidade e proatividade, atendimento ao público.
            </p>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h2 style={{ color: '#dc2626', fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>
              Experiência
            </h2>

            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '6px' }}>
                Freelancer, Igrejinha – RS - <em>Design e Loja de Acessórios</em>
              </div>
              <ul style={{ marginLeft: '20px', fontSize: '15px', lineHeight: '1.7' }}>
                <li>Criação de artes para anúncios</li>
                <li>Fotografia de produtos</li>
                <li>Organização da loja e atendimento ao público</li>
              </ul>
            </div>

            <div>
              <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '6px' }}>
                2023 – 2024
              </div>
              <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '6px' }}>
                SENAI, Igrejinha – RS - <em>Jovem Aprendiz</em>
              </div>
              <ul style={{ marginLeft: '20px', fontSize: '15px', lineHeight: '1.7' }}>
                <li>Apoio em rotinas administrativas e trabalho em equipe</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '20px' }}>
            <h2 style={{ color: '#dc2626', fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>
              Formação Acadêmica
            </h2>

            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '6px' }}>
                2025
              </div>
              <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '12px' }}>
                Ensino Médio Completo - <em>Ensino Médio</em>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '6px' }}>
                Cursos Complementares:
              </div>
              <ul style={{ marginLeft: '20px', fontSize: '15px', lineHeight: '1.7' }}>
                <li>Operador Logístico – SENAI (800h)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
