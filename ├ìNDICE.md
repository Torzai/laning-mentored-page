# 📦 ÍNDICE DE ARCHIVOS - Analog Mentorship Landing

## Archivos listos para copiar/pegar:

### 📁 Configuración del proyecto
- ✅ `package.json` - Dependencias (copia a root)
- ✅ `vite.config.ts` - Config Vite (copia a root)
- ✅ `tsconfig.json` - Config TypeScript (copia a root)

### 📁 Estructura Analog (src/app/)

**Pages:**
- ✅ `index.page.ts` - Página principal (copia a `src/app/pages/`)

**Components:**
- ✅ `header.component.ts` - Header/Nav (copia a `src/app/components/`)
- ✅ `hero.component.ts` - Sección Hero (copia a `src/app/components/`)
- ✅ `booking.component.ts` - Booking + Cal.com (copia a `src/app/components/`)
- ✅ `expertise.component.ts` - Stack expertise (copia a `src/app/components/`)
- ✅ `features.component.ts` - Features grid (copia a `src/app/components/`)
- ✅ `pricing-testimonials-faq-footer.component.ts` - **Archivo compartido** (ver instrucciones abajo)

**Styles:**
- ✅ `globals.css` - CSS global (copia a `src/app/styles/`)

### 📁 Documentación
- ✅ `QUICK_START.md` - Setup rápido copy & paste
- ✅ `SETUP_INSTRUCTIONS.md` - Instrucciones detalladas
- ✅ Este archivo (ÍNDICE)

---

## ⚠️ ARCHIVO COMPARTIDO - Cómo extraerlo

El archivo `pricing-testimonials-faq-footer.component.ts` contiene 5 componentes:

```typescript
// Componente 1
export class PricingComponent {}

// Componente 2
export class TestimonialsComponent {}

// Componente 3
export class FaqComponent {}

// Componente 4
export class FooterComponent {}

// Componente 5
export class FinalCtaComponent {}
```

**Cómo proceder:**

1. Abre `pricing-testimonials-faq-footer.component.ts`
2. Copia **SOLO** el código de `PricingComponent` (desde `@Component` hasta `}`)
3. Crea archivo `src/app/components/pricing.component.ts`
4. Pega el código
5. Repite para los otros 4 componentes

O más fácil: copia todo el archivo, abre en tu editor, haz split de los componentes manualmente.

---

## 🚀 Pasos a seguir

```bash
# 1. Crear proyecto
npm create analog@latest mentoria-angular --typescript
cd mentoria-angular

# 2. Copiar archivos de configuración
cp package.json .
cp vite.config.ts .
cp tsconfig.json .

# 3. Copiar carpeta src/app/
src/app/pages/index.page.ts
src/app/components/*.ts (todos los .ts)
src/app/styles/globals.css

# 4. Instalar deps
npm install

# 5. Probar
npm start

# 6. Build
npm run build

# 7. Deploy
vercel
```

---

## ✅ Checklist de archivos

```
✓ package.json
✓ vite.config.ts
✓ tsconfig.json
✓ index.page.ts
✓ header.component.ts
✓ hero.component.ts
✓ booking.component.ts (Cal.com ya embedido)
✓ expertise.component.ts
✓ features.component.ts
✓ pricing.component.ts (en archivo compartido)
✓ testimonials.component.ts (en archivo compartido)
✓ faq.component.ts (en archivo compartido)
✓ footer.component.ts (en archivo compartido)
✓ final-cta.component.ts (en archivo compartido)
✓ globals.css
✓ QUICK_START.md
✓ SETUP_INSTRUCTIONS.md
```

---

## 🎯 Tu Cal.com ya está embedido

En `booking.component.ts`:
```typescript
'https://cal.com/antonio-revert-donate-3oua7u/mentoria'
```

No necesitas cambiar nada. Solo copiar y pegar.

---

## 💡 Si algo no funciona

1. **Import errors?** → Verifica que todos los .ts están en `src/app/components/`
2. **CSS not loading?** → Asegúrate de que `globals.css` está en `src/app/styles/`
3. **Cal.com no aparece?** → El iframe está en `booking.component.ts`, solo copia ese archivo tal cual

---

¡Listo! Todos los archivos están en `/mnt/user-data/outputs/`

Descarga, copia, pega, y deployas. 🚀
