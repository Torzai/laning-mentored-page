import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <div class="container">
        <nav class="nav-wrapper">
          <div class="logo">Angular <span>Mentorship</span></div>
          <ul class="nav-links">
            <li><a href="#booking">Agendar</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#pricing">Precios</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      padding: 2rem 0;
      position: sticky;
      top: 0;
      background: rgba(13, 13, 13, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
      z-index: 100;
    }
    
    .nav-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-weight: 700;
      font-size: 20px;
      color: var(--text);
      letter-spacing: -0.5px;
    }
    
    .logo span {
      color: var(--primary);
    }
    
    .nav-links {
      display: flex;
      gap: 3rem;
      list-style: none;
    }
    
    .nav-links a {
      text-decoration: none;
      color: var(--text);
      font-size: 14px;
      font-weight: 500;
      position: relative;
      transition: color 0.3s;
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--primary);
      transition: width 0.3s;
    }
    
    .nav-links a:hover {
      color: var(--primary);
    }
    
    .nav-links a:hover::after {
      width: 100%;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        gap: 1.5rem;
        font-size: 12px;
      }
    }
  `]
})
export class HeaderComponent {}
