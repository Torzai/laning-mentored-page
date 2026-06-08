import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { BookingComponent } from './components/booking.component';
import { ExpertiseComponent } from './components/expertise.component';
import { FeaturesComponent } from './components/features.component';
import { PricingComponent } from './components/pricing.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { FaqComponent } from './components/faq.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    BookingComponent,
    ExpertiseComponent,
    FeaturesComponent,
    PricingComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterComponent
  ],
  template: `
    <app-header />
    <main>
      <div class="container">
        <app-hero />
      </div>
      <app-booking />
      <div class="container">
        <app-expertise />
        <app-features />
      </div>
      <app-pricing />
      <div class="container">
        <app-testimonials />
        <app-faq />
      </div>
      <div class="container">
        <app-final-cta />
      </div>
    </main>
    <app-footer />
  `,
  styles: [`
    @import './styles/globals.css';
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 2rem;
    }
  `]
})
export default class HomeComponent {}
