# ⚡ COMANDOS LISTOS - Copia, Pega y Ejecuta

## PASO 1: Crear proyecto Analog

```bash
npm create analog@latest mentoria-angular --typescript
cd mentoria-angular
npm install
```

## PASO 2: Crear carpetas de componentes

```bash
mkdir -p src/app/components
mkdir -p src/app/styles
```

## PASO 3: Copiar archivos (en tu editor)

```
Descargar todo de /mnt/user-data/outputs/ y copiar:

📄 package.json → raíz del proyecto
📄 vite.config.ts → raíz del proyecto
📄 tsconfig.json → raíz del proyecto

📄 index.page.ts → src/app/pages/
📄 header.component.ts → src/app/components/
📄 hero.component.ts → src/app/components/
📄 booking.component.ts → src/app/components/
📄 expertise.component.ts → src/app/components/
📄 features.component.ts → src/app/components/

📄 globals.css → src/app/styles/
```

## PASO 4: Extraer componentes del archivo compartido

De `pricing-testimonials-faq-footer.component.ts`:

```bash
# Crea estos 5 archivos en src/app/components/

pricing.component.ts          (extrae PricingComponent)
testimonials.component.ts     (extrae TestimonialsComponent)
faq.component.ts              (extrae FaqComponent)
footer.component.ts           (extrae FooterComponent)
final-cta.component.ts        (extrae FinalCtaComponent)
```

## PASO 5: Verificar estructura

```bash
tree src/app/
# Debería verse así:
# src/app/
# ├── pages/
# │   └── index.page.ts
# ├── components/
# │   ├── header.component.ts
# │   ├── hero.component.ts
# │   ├── booking.component.ts
# │   ├── expertise.component.ts
# │   ├── features.component.ts
# │   ├── pricing.component.ts
# │   ├── testimonials.component.ts
# │   ├── faq.component.ts
# │   ├── footer.component.ts
# │   └── final-cta.component.ts
# └── styles/
#     └── globals.css
```

## PASO 6: Instalar dependencias (si no lo hiciste)

```bash
npm install
```

## PASO 7: Probar localmente

```bash
npm start
# Abre http://localhost:5173 en tu navegador
```

## PASO 8: Verificar que funciona

```
✓ Página carga sin errores
✓ Header con nav visible
✓ Hero con botones
✓ Sección de booking con Cal.com embedido
✓ Features, pricing, testimonials, FAQ visibles
✓ Footer al final
✓ Responsive en móvil
```

## PASO 9: Build para producción

```bash
npm run build
```

## PASO 10: Deploy en Vercel (elige uno)

### Opción A: Vercel CLI
```bash
npm i -g vercel
vercel
# Sigue las instrucciones interactivas
```

### Opción B: GitHub + Vercel Web
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TUUSUARIO/mentoria-angular.git
git branch -M main
git push -u origin main

# Luego:
# 1. Abre vercel.com
# 2. Click en "Import Project"
# 3. Selecciona tu repo de GitHub
# 4. Click Deploy
```

---

## 🎯 Resultado final

Después del paso 10, tu landing estará en:
- **URL:** `https://mentoria-angular.vercel.app`
- **O custom domain** si lo conectas

Con:
- ✅ Dark mode elegante
- ✅ Cal.com embedido y funcional
- ✅ Reservas automáticas
- ✅ Confirmaciones por email
- ✅ SEO optimizado
- ✅ Carga en ~700ms

---

## 🆘 Si algo falla

```bash
# Errores de imports?
npm install

# Quieres limpiar todo?
rm -rf node_modules
npm install

# Quieres ver logs?
npm start -- --debug

# Build fallando?
npm run build -- --debug
```

---

¡Listo! Copia, Pega, Ejecuta, Disfruta. 🚀
