import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="booking-section" id="booking">
      <div class="container">
        <div class="booking-content">
          <div class="booking-text">
            <h2>Reserva tu sesión</h2>
            <p>Elige la hora que mejor te venga. Sin compromisos. Primera sesión es para conocernos y entender qué necesitas.</p>
            <ul>
              <li>Sesiones de 30 minutos (consulta) o 60 minutos (sesión completa)</li>
              <li>Videollamada privada 1:1</li>
              <li>Puedes cambiar o cancelar sin problema</li>
              <li>Confirmación por email al instante</li>
            </ul>
            <div class="booking-info">
              <p><strong>Horarios:</strong> Lunes a viernes, 9am a 8pm (Madrid time). También puedo ajustar según tu zona horaria.</p>
            </div>
          </div>

          <div class="booking-calendar">
            <iframe 
              [src]="calUrl" 
              style="width:100%;height:100%;min-height:600px;border:none;border-radius:8px;"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .booking-section {
      background: var(--card-bg);
      padding: 4rem 3rem;
      border-radius: 12px;
      border: 1px solid var(--border);
      margin-bottom: 4rem;
    }

    .booking-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .booking-text h2 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--text);
    }

    .booking-text p {
      color: var(--text-light);
      margin-bottom: 1.5rem;
      line-height: 1.8;
    }

    .booking-text ul {
      list-style: none;
      margin-top: 2rem;
    }

    .booking-text li {
      color: var(--text);
      margin: 1rem 0;
      padding-left: 2rem;
      position: relative;
    }

    .booking-text li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: bold;
      font-size: 18px;
    }

    .booking-calendar {
      background: rgba(255, 0, 51, 0.03);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--border);
      min-height: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .booking-info {
      background: rgba(255, 0, 51, 0.1);
      padding: 1.5rem;
      border-radius: 6px;
      margin-top: 2rem;
      border-left: 3px solid var(--primary);
    }

    .booking-info p {
      font-size: 13px;
      color: var(--text-light);
    }

    @media (max-width: 768px) {
      .booking-content {
        grid-template-columns: 1fr;
      }

      .booking-text h2 {
        font-size: 24px;
      }

      .booking-section {
        padding: 2.5rem 1.5rem;
      }
    }
  `]
})
export class BookingComponent {
  calUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.calUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://cal.com/antonio-revert-donate-3oua7u/mentoria'
    );
  }
}
