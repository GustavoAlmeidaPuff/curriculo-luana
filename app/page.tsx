'use client'

import { useRef } from 'react'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()
      const margin = 15
      const maxWidth = pageWidth - (margin * 2)
      let yPos = margin

      // Função para converter cor hex para RGB
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 }
      }

      // Função para adicionar texto com quebra de linha
      const addText = (text: string, fontSize: number, isBold: boolean = false, color: string = '#000000') => {
        doc.setFontSize(fontSize)
        const rgb = hexToRgb(color)
        doc.setTextColor(rgb.r, rgb.g, rgb.b)
        if (isBold) {
          doc.setFont('helvetica', 'bold')
        } else {
          doc.setFont('helvetica', 'normal')
        }
        
        const lines = doc.splitTextToSize(text, maxWidth)
        lines.forEach((line: string) => {
          if (yPos > pageHeight - margin) {
            doc.addPage()
            yPos = margin
          }
          doc.text(line, margin, yPos)
          yPos += fontSize * 0.5
        })
        yPos += 3
      }

      // Nome
      addText('Luana Furtado da Silva', 20, true)
      yPos += 5

      // Informações de contato
      addText('Igrejinha – RS', 12)
      addText('(51) 99942-1776', 12)
      
      // Email como link clicável
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 255)
      doc.setFont('helvetica', 'normal')
      const emailText = 'luanafurta082@gmail.com'
      const emailWidth = doc.getTextWidth(emailText)
      doc.text(emailText, margin, yPos)
      doc.link(margin, yPos - 4, emailWidth, 5, { url: 'mailto:luanafurta082@gmail.com' })
      doc.setTextColor(0, 0, 0)
      yPos += 9
      
      // Portfólio como link clicável
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      const portfolioLabel = 'Portfólio: '
      doc.text(portfolioLabel, margin, yPos)
      const portfolioText = 'https://portifolioluana.vercel.app/'
      const portfolioX = margin + doc.getTextWidth(portfolioLabel)
      const portfolioWidth = doc.getTextWidth(portfolioText)
      doc.setTextColor(0, 0, 255)
      doc.text(portfolioText, portfolioX, yPos)
      doc.link(portfolioX, yPos - 4, portfolioWidth, 5, { url: 'https://portifolioluana.vercel.app/' })
      doc.setTextColor(0, 0, 0)
      yPos += 9
      yPos += 5

      // Competências
      addText('Competências', 16, true, '#dc2626')
      addText('Fotografia (composição, luz e enquadramento), noções de design para anúncios, criatividade e senso estético, organização, responsabilidade e proatividade, atendimento ao público.', 12)
      yPos += 3

      // Experiência
      addText('Experiência', 16, true, '#dc2626')
      addText('DESDE 2023', 12, true)
      addText('Freelancer, Igrejinha – RS - Design e Loja de Acessórios', 12, true)
      addText('• Criação de artes para anúncios', 12)
      addText('• Fotografia de produtos', 12)
      addText('• Organização da loja e atendimento ao público', 12)
      yPos += 3
      addText('2023 – 2024', 12, true)
      addText('SENAI, Igrejinha – RS - Jovem Aprendiz', 12, true)
      addText('• Apoio em rotinas administrativas e trabalho em equipe', 12)
      yPos += 3

      // Formação
      addText('Formação', 16, true, '#dc2626')
      addText('2025', 12, true)
      addText('Ensino Médio Completo, Igrejinha – RS - Ensino Médio', 12, true)
      addText('Atuar na área de Fotografia e Design, desenvolvendo minhas habilidades criativas e contribuindo com soluções visuais, mesmo em nível inicial.', 12)
      yPos += 3
      addText('Cursos Complementares:', 12, true)
      addText('• Operador Logístico – SENAI (800h)', 12)

      doc.save('curriculo-luana-furtado.pdf')
    } catch (error) {
      console.error('Erro ao gerar PDF:', error)
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
              <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '6px' }}>
                DESDE 2023
              </div>
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
              Formação
            </h2>

            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontWeight: '700', fontSize: '15px', marginBottom: '6px' }}>
                2025
              </div>
              <div style={{ fontWeight: '600', fontSize: '15px', marginBottom: '12px' }}>
                Ensino Médio Completo, Igrejinha – RS - <em>Ensino Médio</em>
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '18px' }}>
                Atuar na área de Fotografia e Design, desenvolvendo minhas habilidades criativas e contribuindo com soluções visuais, mesmo em nível inicial.
              </p>
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
