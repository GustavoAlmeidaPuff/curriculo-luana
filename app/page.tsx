'use client'

import { useRef } from 'react'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return

    try {
      const html2pdf = (await import('html2pdf.js')).default
      const element = contentRef.current
      const opt = {
        margin: [5, 5, 5, 5],
        filename: 'curriculo-luana-furtado.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1.5, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      }

      html2pdf().set(opt).from(element).save()
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
