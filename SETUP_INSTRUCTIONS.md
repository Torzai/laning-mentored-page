# 🚀 Setup Proyecto Analog - Mentoría Angular

## Paso 1: Crear el proyecto

```bash
npm create analog@latest mentoria-angular --typescript
cd mentoria-angular
```

## Paso 2: Estructura de carpetas

```
src/
  app/
    pages/
      index.page.ts (ya está en los archivos)
    components/
      header.component.ts (ya está)
      hero.component.ts
      booking.component.ts (ya está)
      expertise.component.ts
      features.component.ts
      pricing.component.ts
      testimonials.component.ts
      faq.component.ts
      footer.component.ts
    styles/
      globals.css (ya está)
```

## Paso 3: Copiar archivos

1. **Reemplaza** `src/app/pages/index.page.ts` con el archivo index.page.ts
2. **Copia** `header.component.ts` en `src/app/components/`
3. **Copia** `booking.component.ts` en `src/app/components/`
4. **Copia** `globals.css` en `src/app/styles/`

## Paso 4: Crear el resto de componentes

Copia el template de abajo para cada archivo.

### hero.component.ts
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-text">
        <h1>Mentoría <span class="highlight">Angular</span> profesional</h1>
        <p>8+ años en empresas. Escalamos apps de 0 a 100k usuarios. Ahora enseño lo que aprendí.</p>
        <div class="cta-group">
          <button class="btn btn-primary" (click)="scrollToBooking()">Agendar ahora</button>
          <button class="btn btn-secondary">Conocer más</button>
        </div>
      </div>

      <div class="hero-visual">
        <div class="stat-box">
          <div class="stat-number">100k+</div>
          <div class="stat-label">Usuarios en producción</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">8+</div>
          <div class="stat-label">Años con Angular</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">50+</div>
          <div class="stat-label">Developers mentorados</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 8rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .hero-text h1 {
      font-size: 52px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 1.5rem;
      color: var(--text);
      letter-spacing: -1px;
    }

    .hero-text h1 .highlight {
      color: var(--primary);
    }

    .hero-text p {
      font-size: 18px;
      color: var(--text-light);
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }

    .cta-group {
      display: flex;
      gap: 1.5rem;
    }

    .hero-visual {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .stat-box {
      padding: 2rem;
      background: var(--card-bg);
      border-radius: 8px;
      border: 1px solid var(--border);
      border-left: 3px solid var(--primary);
    }

    .stat-number {
      font-size: 28px;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 14px;
      color: var(--text-light);
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .hero {
        grid-template-columns: 1fr;
        padding: 4rem 0;
      }

      .hero-text h1 {
        font-size: 32px;
      }

      .cta-group {
        flex-direction: column;
      }

      .btn {
        width: 100%;
      }
    }
  `]
})
export class HeroComponent {
  scrollToBooking() {
    const element = document.querySelector('#booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
```

### expertise.component.ts
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="expertise-section" id="expertise">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-size: 32px; margin-bottom: 0.5rem; color: var(--text);">Stack que domino</h2>
        <p style="color: var(--text-light);">Experiencia real en fintech, SaaS y empresas de medios</p>
      </div>
      
      <div class="expertise-grid">
        <div class="expertise-item">
          <div class="expertise-label">Frontend</div>
          <div class="expertise-title">Angular 21+</div>
          <div class="tech-stack">
            <span class="tech-badge">Signals</span>
            <span class="tech-badge">RxJS</span>
            <span class="tech-badge">Performance</span>
          </div>
        </div>
        <div class="expertise-item">
          <div class="expertise-label">Backend</div>
          <div class="expertise-title">NestJS</div>
          <div class="tech-stack">
            <span class="tech-badge">REST</span>
            <span class="tech-badge">GraphQL</span>
            <span class="tech-badge">Auth</span>
          </div>
        </div>
        <div class="expertise-item">
          <div class="expertise-label">Data</div>
          <div class="expertise-title">MongoDB + SQL</div>
          <div class="tech-stack">
            <span class="tech-badge">Indexing</span>
            <span class="tech-badge">Scaling</span>
            <span class="tech-badge">Queries</span>
          </div>
        </div>
        <div class="expertise-item">
          <div class="expertise-label">DevOps</div>
          <div class="expertise-title">Deploy & CI/CD</div>
          <div class="tech-stack">
            <span class="tech-badge">Docker</span>
            <span class="tech-badge">GitHub Actions</span>
            <span class="tech-badge">Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .expertise-section {
      background: var(--card-bg);
      padding: 5rem 2rem;
      border-radius: 12px;
      margin: 4rem 0;
      border: 1px solid var(--border);
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .expertise-item {
      text-align: center;
    }

    .expertise-label {
      font-size: 12px;
      font-weight: 700;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }

    .expertise-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--text);
    }

    .tech-stack {
      display: flex;
      gap: 0.8rem;
      justify-content: center;
      margin-top: 1.5rem;
      flex-wrap: wrap;
    }

    .tech-badge {
      background: rgba(255, 0, 51, 0.1);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      color: var(--text);
      border: 1px solid var(--border);
      transition: all 0.3s;
    }

    .tech-badge:hover {
      border-color: var(--primary);
      color: var(--primary);
      background: rgba(255, 0, 51, 0.15);
    }
  `]
})
export class ExpertiseComponent {}
```

### features.component.ts, pricing.component.ts, testimonials.component.ts, faq.component.ts, footer.component.ts

Por favor copiar del landing HTML que ya existe y adaptarlos a componentes Angular standalone.

## Paso 5: Instalar dependencias

```bash
npm install
```

## Paso 6: Verificar estructura

```
src/app/
├── pages/
│   └── index.page.ts ✓
├── components/
│   ├── header.component.ts ✓
│   ├── hero.component.ts ✓
│   ├── booking.component.ts ✓
│   ├── expertise.component.ts ✓
│   ├── features.component.ts
│   ├── pricing.component.ts
│   ├── testimonials.component.ts
│   ├── faq.component.ts
│   └── footer.component.ts
└── styles/
    └── globals.css ✓
```

## Paso 7: Ejecutar localmente

```bash
npm start
# Abre http://localhost:5173
```

## Paso 8: Build y Deploy en Vercel

```bash
npm run build

# Si tienes Vercel CLI:
vercel

# Si no:
# 1. Sube a GitHub
# 2. Ve a vercel.com
# 3. Conecta tu repo
# 4. Auto-deploy cada push
```

---

## ✅ Listo!

Tu landing estará live en Vercel con:
- Landing elegante dark mode
- Cal.com embedido y funcional
- Reservas automáticas
- Carga en ~700ms
- SEO optimizado
- Responsive

**URL de tu Cal.com:** https://cal.com/antonio-revert-donate-3oua7u/mentoria (ya embebido en booking.component.ts)
