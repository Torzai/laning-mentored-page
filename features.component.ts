import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <div class="section-header">
        <h2>Qué aprenderás</h2>
        <p>Skills que los juniors nunca aprenden solos. Que los seniors usan en producción.</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🏗️</div>
          <h3>Arquitectura escalable</h3>
          <p>Monorepos, Clean Architecture, feature modules. Apps que crecen sin romperse.</p>
          <ul>
            <li>Nx workspaces</li>
            <li>Domain-driven design</li>
            <li>Modular systems</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>RxJS y Signals</h3>
          <p>Observables avanzados, custom operators, memory leaks. Streams que funcionan.</p>
          <ul>
            <li>Advanced operators</li>
            <li>Marble testing</li>
            <li>State management</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Performance real</h3>
          <p>Change detection, lazy loading, bundle optimization. Core Web Vitals que importan.</p>
          <ul>
            <li>OnPush strategy</li>
            <li>Code splitting</li>
            <li>Network optimization</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🔐</div>
          <h3>Seguridad en producción</h3>
          <p>JWT, CORS, CSRF. Auth que no explota. OAuth2 implementado.</p>
          <ul>
            <li>Token management</li>
            <li>Guards y interceptors</li>
            <li>Rate limiting</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">🧪</div>
          <h3>Testing profesional</h3>
          <p>Unit, integration, e2e. Tests que protegen, no que hincan.</p>
          <ul>
            <li>TDD methodology</li>
            <li>Cypress e2e</li>
            <li>Coverage meaningful</li>
          </ul>
        </div>

        <div class="feature-card">
          <div class="feature-icon">📡</div>
          <h3>Real-time systems</h3>
          <p>WebSockets, Socket.IO, SSE. Comunicación en vivo que escala.</p>
          <ul>
            <li>Live updates</li>
            <li>Pub/sub patterns</li>
            <li>Connection management</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      padding: 3rem 2.5rem;
      background: var(--card-bg);
      border-radius: 8px;
      border: 1px solid var(--border);
      transition: all 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(255, 0, 51, 0.1);
      border-color: var(--primary);
    }

    .feature-icon {
      font-size: 32px;
      margin-bottom: 1.5rem;
    }

    .feature-card h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text);
    }

    .feature-card p {
      color: var(--text-light);
      font-size: 15px;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .feature-card ul {
      list-style: none;
    }

    .feature-card li {
      font-size: 14px;
      color: var(--text-light);
      margin: 0.7rem 0;
      padding-left: 1.5rem;
      position: relative;
    }

    .feature-card li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--primary);
      font-weight: 600;
    }
  `]
})
export class FeaturesComponent {}
