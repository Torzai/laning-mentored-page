# ⚡ SETUP RÁPIDO - Copia y Pega

## 1️⃣ Crear proyecto Analog

```bash
npm create analog@latest mentoria-angular --typescript
cd mentoria-angular
npm install
```

## 2️⃣ Estructura de carpetas a crear

```
src/app/
├── pages/
│   └── index.page.ts
├── components/
│   ├── header.component.ts
│   ├── hero.component.ts
│   ├── booking.component.ts
│   ├── expertise.component.ts
│   ├── features.component.ts
│   ├── pricing.component.ts (en archivo compartido)
│   ├── testimonials.component.ts (en archivo compartido)
│   ├── faq.component.ts (en archivo compartido)
│   ├── footer.component.ts (en archivo compartido)
│   └── final-cta.component.ts (en archivo compartido)
└── styles/
    └── globals.css
```

## 3️⃣ Archivos disponibles para copiar

✅ **Listos para copiar directo:**
- `index.page.ts` → `src/app/pages/`
- `header.component.ts` → `src/app/components/`
- `hero.component.ts` → `src/app/components/`
- `booking.component.ts` → `src/app/components/`
- `expertise.component.ts` → `src/app/components/`
- `features.component.ts` → `src/app/components/`
- `globals.css` → `src/app/styles/`

✅ **En archivo compartido (copiar cada uno a su archivo):**
- `pricing-testimonials-faq-footer.component.ts` contiene:
  - `PricingComponent` → `src/app/components/pricing.component.ts`
  - `TestimonialsComponent` → `src/app/components/testimonials.component.ts`
  - `FaqComponent` → `src/app/components/faq.component.ts`
  - `FooterComponent` → `src/app/components/footer.component.ts`
  - `FinalCtaComponent` → `src/app/components/final-cta.component.ts`

## 4️⃣ Actualizar index.page.ts imports

Después de copiar todos los componentes, actualiza `src/app/pages/index.page.ts`:

```typescript
import { FeaturesComponent } from './components/features.component';
import { PricingComponent } from './components/pricing.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { FaqComponent } from './components/faq.component';
import { FooterComponent } from './components/footer.component';
import { FinalCtaComponent } from './components/final-cta.component';

// ... resto en el archivo
```

## 5️⃣ Verificar que Cal.com está correcto

En `src/app/components/booking.component.ts`, line ~23:

```typescript
this.calUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
  'https://cal.com/antonio-revert-donate-3oua7u/mentoria' // ✓ Ya está
);
```

## 6️⃣ Probar localmente

```bash
npm start
# Abre http://localhost:5173
# Prueba que todo funciona:
# - Nav links
# - Hero con botones
# - Booking con Cal.com embedido
# - Features, pricing, testimonials, FAQ
```

## 7️⃣ Build para producción

```bash
npm run build
```

## 8️⃣ Deploy en Vercel

### Opción A: CLI de Vercel
```bash
npm i -g vercel
vercel
# Sigue las instrucciones
```

### Opción B: GitHub + Vercel Web
```bash
# 1. Sube a GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tuusuario/mentoria-angular.git
git push -u origin main

# 2. Ve a vercel.com
# 3. Import Project
# 4. Selecciona tu repo
# 5. Deploy (auto-detecta Analog)
```

---

## ✅ Checklist final

- [ ] Proyecto Analog creado
- [ ] Todos los archivos .ts copiados
- [ ] globals.css copiado
- [ ] imports en index.page.ts actualizados
- [ ] `npm start` funciona sin errores
- [ ] Landing visible en localhost:5173
- [ ] Cal.com embedido y funcionando
- [ ] `npm run build` funciona
- [ ] Deployado en Vercel

---

## 🎯 Tu landing en vivo:

Después de deployar:
- **URL:** https://mentoria-angular.vercel.app (o tu dominio custom)
- **Cal.com:** Embedido en #booking
- **SEO:** Ready
- **Performance:** ~700ms load

¡Listo! 🚀
