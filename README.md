# Wedding Web (React)

一個以 React + Vite 建置的婚禮單頁網站，支援多語系與 GitHub Pages 部署。此版本已加入語系路由（/en、/jp、/ch、/vn），可直接以不同路徑進站並維持瀏覽器前進/返回行為。

## 功能重點
- 多語系顯示：英文（en）、繁體中文（zh‑TW）、日文（ja）、越南文（vi）
- 路由語系段：`/en`（預設）、`/jp`、`/ch`、`/vn`
- GitHub Pages 部署：處理 Base Path 與 404 fallback，支援深層連結
- 圖片輕量化腳本：`npm run optimize:images`
- **留言功能**：使用 EmailJS 服務，訪客可透過表單發送訊息（💌 溫馨可愛的設計）

## 路由與語系說明
本專案未使用 react-router，而是以路徑前綴作為「語系切換提示」。對應如下：
- `/en` → `en`
- `/jp` → `ja`
- `/ch` → `zh‑TW`
- `/vn` → `vi`

首次載入會由網址判定語系；切換語系會以 `history.pushState` 同步網址，不重整頁面；前進/返回（popstate）會同步回元件語系。於 GitHub Pages 上，藉由部署流程將 `index.html` 複製為 `404.html`，確保深層路徑（例：`/jp`）可正確回到 SPA 入口並呈現對應語系。

注意：GitHub Pages 的 Base Path 會是 `/<repo>/`，本專案的 GitHub Actions 於建置時使用 `--base=/${{ github.event.repository.name }}/`，並透過 `import.meta.env.BASE_URL` 正確計算與裁切路徑。

## 線上預覽（示例）
若 Pages 網址為 `https://<user>.github.io/<repo>/`，則：
- 英文：`https://<user>.github.io/<repo>/en`
- 日文：`https://<user>.github.io/<repo>/jp`
- 繁中：`https://<user>.github.io/<repo>/ch`
- 越文：`https://<user>.github.io/<repo>/vn`

區塊內部導覽仍可使用錨點（例如 `#story`、`#schedule`）。

## 本機開發
需求：Node.js 20、npm

### 基本設定
- 安裝依賴：`npm ci`
- 啟動開發伺服器：`npm run dev`
- 瀏覽：
  - `http://localhost:5173/en`
  - `http://localhost:5173/jp`
  - `http://localhost:5173/ch`
  - `http://localhost:5173/vn`

若直接進入根路徑，預設會以英文顯示。

### 留言功能設定（EmailJS）
如需啟用留言功能，請：

1. 註冊 [EmailJS](https://www.emailjs.com/) 帳號並取得 API Keys
2. 複製 `.env.example` 為 `.env`：
   ```bash
   cp .env.example .env
   ```
3. 在 `.env` 中填入您的 EmailJS 資訊：
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. 重新啟動開發伺服器

詳細設定步驟請參考 [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

## 建置與部署

### 本地建置
- 建置：`npm run build`
  - 產出於 `dist/`

### GitHub Pages 部署
已配置於 `.github/workflows/deploy.yml`，包含：
- 使用 `--base=/${{ github.event.repository.name }}/`
- 將 `dist/index.html` 複製為 `dist/404.html`（支援深層連結）
- 新增 `dist/.nojekyll`
- 自動注入 EmailJS 環境變數（從 GitHub Secrets）
- 將 `dist/` 上傳為 Pages Artifact 並部署

推送至 `main` 分支或手動執行 Workflow 即可自動部署。

### GitHub Pages 環境變數設定
為了讓留言功能在 GitHub Pages 上正常運作，需要設定 GitHub Secrets：

1. 前往 Repository → **Settings** → **Secrets and variables** → **Actions**
2. 新增以下 3 個 Secrets：
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

詳細步驟請參考 [GITHUB_SECRETS_SETUP.md](./GITHUB_SECRETS_SETUP.md)

## 語系文案維護
- 彙整表：請見 `TEXT.md`，以表格列出「位置、繁中、英文、日文、越文」。
- 元件內部通常以 `content = { en: {...}, vi: {...}, 'zh-TW': {...}, ja: {...} }` 的型式管理文案。
- 新增語言時：
  1) 於各元件 `content` 新增對應語系鍵值。
  2) 於 `src/App.jsx` 的 `pathToLang` 與 `langToPath` 補上語系與路徑對應。
  3) 於 `Navigation` 的語言下拉清單補上選項。
  4) 視需要更新 `TEXT.md`。

## 專案結構（節錄）
- `src/App.jsx`：語系切換與 URL 同步（讀取 `import.meta.env.BASE_URL`、pushState、popstate）
- `src/components/*`：各區塊元件與其文案
- `scripts/optimize-images.cjs`：圖片最佳化腳本
- `.github/workflows/deploy.yml`：GitHub Pages 自動部署流程

## 已知事項與建議
- 若要改用其他靜態主機，請確保所有路徑皆重寫（rewrite）到 `index.html`，或提供類似 GitHub Pages 的 404 fallback，否則深層連結會 404。
- 若看到 CJK 顯示亂碼，請統一以 UTF‑8 編碼儲存檔案；如需，我可協助整理所有文案編碼與翻譯。
- 需要可擴充的 i18n 架構（例如 JSON 字典或 i18next），也可再行重構；目前以輕量的物件常數管理。

## 授權
未特別標註授權條款；如需加入 License，請告知所需授權型式。

