// ========================================
// PRICING COMPONENT
// ========================================
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing">
      <div class="section-header">
        <h2>Planes de mentoría</h2>
        <p>Elige según necesites. Primera sesión gratis o devolvemos todo.</p>
      </div>
      
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Sesiones puntuales</h3>
          <div class="pricing-price">$60<span>/hora</span></div>
          <ul class="pricing-features">
            <li>Sesión 1:1 en vivo</li>
            <li>Code review detallado</li>
            <li>Respuestas a preguntas</li>
            <li>Sin compromiso</li>
          </ul>
          <button class="btn btn-secondary">Agendar</button>
        </div>

        <div class="pricing-card featured">
          <div class="pricing-badge">Popular</div>
          <h3>Mentoría semanal</h3>
          <div class="pricing-price">$400<span>/mes</span></div>
          <ul class="pricing-features">
            <li>2 sesiones por semana</li>
            <li>Soporte por Slack</li>
            <li>Proyectos propios</li>
            <li>Plan personalizado</li>
            <li>Feedback continuo</li>
          </ul>
          <button class="btn btn-primary">Empezar ahora</button>
        </div>

        <div class="pricing-card">
          <h3>Programa intensivo</h3>
          <div class="pricing-price">$1,800<span>/3 meses</span></div>
          <ul class="pricing-features">
            <li>3 sesiones por semana</li>
            <li>Soporte 24/7 async</li>
            <li>Proyecto real escalable</li>
            <li>Certificado</li>
            <li>Garantía de resultados</li>
          </ul>
          <button class="btn btn-secondary">Más info</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .pricing-card {
      padding: 3rem;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      transition: all 0.3s;
      position: relative;
    }

    .pricing-card.featured {
      border-color: var(--primary);
      box-shadow: 0 12px 40px rgba(255, 0, 51, 0.15);
      transform: scale(1.02);
    }

    .pricing-badge {
      position: absolute;
      top: -12px;
      left: 30px;
      background: var(--primary);
      color: #000;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .pricing-card h3 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 1rem;
      margin-top: 0.5rem;
      color: var(--text);
    }

    .pricing-price {
      font-size: 36px;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 2rem;
    }

    .pricing-price span {
      font-size: 14px;
      color: var(--text-light);
      font-weight: 500;
    }

    .pricing-features {
      list-style: none;
      margin-bottom: 2rem;
    }

    .pricing-features li {
      padding: 0.8rem 0;
      color: var(--text-light);
      font-size: 14px;
      border-bottom: 1px solid var(--border);
      position: relative;
      padding-left: 1.5rem;
    }

    .pricing-features li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: bold;
    }

    .pricing-card .btn {
      width: 100%;
      text-align: center;
    }

    @media (max-width: 768px) {
      .pricing-card.featured {
        transform: scale(1);
      }
    }
  `]
})
export class PricingComponent {}


// ========================================
// TESTIMONIALS COMPONENT
// ========================================
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonios">
      <div class="section-header">
        <h2>Estudiantes que escalaron</h2>
        <p>Gente real. Resultados reales. Sin fake reviews.</p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <p class="testimonial-text">"Pasé de no entender RxJS a construir arquitecturas reactivas complejas. El feedback directo fue lo que cambió todo."</p>
          <div class="testimonial-author">
            <div class="author-avatar">MD</div>
            <div class="author-info">
              <h4>María D.</h4>
              <p>Senior Frontend Engineer</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="testimonial-text">"Trabajaba sin estándares, copy-paste de Stack Overflow. Ahora mi código en producción es 10x mejor estructurado."</p>
          <div class="testimonial-author">
            <div class="author-avatar">CL</div>
            <div class="author-info">
              <h4>Carlos L.</h4>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="testimonial-text">"No sabía cómo escalar Angular. Aprendí patterns que usamos en la empresa con 100k usuarios activos."</p>
          <div class="testimonial-author">
            <div class="author-avatar">AM</div>
            <div class="author-info">
              <h4>Alejandro M.</h4>
              <p>Tech Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .testimonial-card {
      padding: 2.5rem;
      background: var(--card-bg);
      border-radius: 8px;
      border: 1px solid var(--border);
      transition: all 0.3s;
    }

    .testimonial-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(255, 0, 51, 0.1);
    }

    .testimonial-text {
      font-size: 15px;
      color: var(--text);
      margin-bottom: 1.5rem;
      line-height: 1.8;
      font-style: italic;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .author-avatar {
      width: 48px;
      height: 48px;
      background: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      font-weight: 700;
    }

    .author-info h4 {
      font-weight: 700;
      color: var(--text);
      margin-bottom: 0.2rem;
    }

    .author-info p {
      font-size: 13px;
      color: var(--primary);
      font-weight: 600;
    }
  `]
})
export class TestimonialsComponent {}


// ========================================
// FAQ COMPONENT
// ========================================
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq">
      <div class="section-header">
        <h2>Preguntas frecuentes</h2>
      </div>
      
      <div class="faq-container">
        <div *ngFor="let item of faqItems" [class.active]="item.open" class="faq-item" (click)="toggleFaq(item)">
          <div class="faq-question">
            <span>{{ item.question }}</span>
            <span class="faq-toggle">+</span>
          </div>
          <div *ngIf="item.open" class="faq-answer">{{ item.answer }}</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-container {
      max-width: 800px;
      margin: 3rem auto 0;
    }

    .faq-item {
      margin-bottom: 1.5rem;
      padding: 2rem;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .faq-item:hover {
      border-color: var(--primary);
    }

    .faq-question {
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text);
      user-select: none;
    }

    .faq-toggle {
      font-size: 20px;
      color: var(--primary);
      transition: transform 0.3s;
    }

    .faq-item.active .faq-toggle {
      transform: rotate(45deg);
    }

    .faq-answer {
      margin-top: 1.5rem;
      color: var(--text-light);
      font-size: 14px;
      line-height: 1.7;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
    }
  `]
})
export class FaqComponent {
  faqItems = [
    {
      question: '¿Qué experiencia necesito?',
      answer: 'Necesitas TypeScript/JavaScript base. Trabajo mejor con devs mid-level queriendo escalar a senior. Si eres total principiante, te recomiendo cursos de fundamentals primero.',
      open: true
    },
    {
      question: '¿Cómo son las sesiones?',
      answer: 'Videollamadas 1:1. Traes código, preguntas, o problemas que estés atacando. Sin slides aburridas. Solo conversación real, debugging en vivo, code review detallado.',
      open: false
    },
    {
      question: '¿Hablas español?',
      answer: '100% español. También inglés si lo necesitas. Mentoría en el idioma que te sientas cómodo.',
      open: false
    },
    {
      question: '¿Puedo construir un proyecto durante la mentoría?',
      answer: 'Sí. En los programas intensivos construimos un proyecto real juntos. Desde arquitectura inicial hasta producción.',
      open: false
    },
    {
      question: '¿Puedo cancelar o cambiar de plan?',
      answer: '100% flexible. Si después de la primera sesión no ves valor, devolvemos todo. Si quieres cambiar plan, sin problema.',
      open: false
    }
  ];

  toggleFaq(item: any) {
    this.faqItems.forEach(i => {
      if (i !== item) i.open = false;
    });
    item.open = !item.open;
  }
}


// ========================================
// FOOTER COMPONENT
// ========================================
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container">
        <div class="footer-bottom">
          <p>© 2024 Angular Mentorship. Hecho sin hype, sin BS.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 3rem 0 2rem;
      border-top: 1px solid var(--border);
      text-align: center;
    }

    .footer-bottom {
      font-size: 13px;
      color: var(--text-light);
    }
  `]
})
export class FooterComponent {}


// ========================================
// FINAL CTA COMPONENT
// ========================================
@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="final-cta">
      <h2>¿Listo para escalar?</h2>
      <p>Reserva 30 minutos sin costo. Hablaremos de dónde estás, a dónde quieres ir, y qué puedo enseñarte. Sin presión, sin venta agresiva.</p>
      <button class="btn btn-primary" (click)="scrollToBooking()">Agendar consulta gratuita</button>
    </section>
  `,
  styles: [`
    .final-cta {
      text-align: center;
      padding: 5rem 3rem;
      background: var(--card-bg);
      border-radius: 12px;
      margin-bottom: 4rem;
      border: 1px solid var(--border);
    }

    .final-cta h2 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text);
    }

    .final-cta p {
      font-size: 16px;
      color: var(--text-light);
      margin-bottom: 2.5rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 768px) {
      .final-cta {
        padding: 3rem 1.5rem;
      }

      .final-cta h2 {
        font-size: 24px;
      }
    }
  `]
})
export class FinalCtaComponent {
  scrollToBooking() {
    const element = document.querySelector('#booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
