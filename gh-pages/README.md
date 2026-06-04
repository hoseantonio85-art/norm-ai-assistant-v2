# Сборка для GitHub Pages

Этот прототип в Lovable работает на TanStack Start. Для публикации на GitHub Pages
используйте автономную чистую Vite + React + TS сборку:

1. Создайте пустой репозиторий, скопируйте в него:
   - `gh-pages/vite.config.ts` → `vite.config.ts`
   - `gh-pages/package.json` → `package.json`
   - `gh-pages/tsconfig.json` → `tsconfig.json`
   - `gh-pages/index.html` → `index.html`
   - `.github/workflows/deploy.yml` → `.github/workflows/deploy.yml`
   - `src/main.tsx`, `src/App.tsx`, `src/components/NormPrototype.tsx`, `src/styles/norm-prototype.css`
2. `npm install`
3. `npm run dev` — локально
4. `npm run build` — сборка в `dist/`
5. Push в `main` → GitHub Actions автоматически опубликует на Pages.

В Settings → Pages выберите Source: **GitHub Actions**.
