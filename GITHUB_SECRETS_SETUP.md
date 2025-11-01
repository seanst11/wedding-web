# 快速設定 GitHub Secrets 指南 🔐

這份文件說明如何在 GitHub 上設定 EmailJS 環境變數，讓 GitHub Pages 部署後可以正常使用留言功能。

## 🎯 為什麼需要這個步驟？

當您將網站部署到 GitHub Pages 時：
- `.env` 檔案**不會**被上傳（被 `.gitignore` 忽略）
- 環境變數需要在**構建時**被注入到程式碼中
- GitHub Secrets 提供安全的方式儲存這些敏感資訊

## 📋 設定步驟（5 分鐘完成）

### 步驟 1：準備您的 EmailJS 資訊

在開始之前，請先從 [EmailJS Dashboard](https://dashboard.emailjs.com/) 取得以下資訊：

1. **Service ID** - 在 [Email Services](https://dashboard.emailjs.com/admin) 頁面
2. **Template ID** - 在 [Email Templates](https://dashboard.emailjs.com/admin/templates) 頁面
3. **Public Key** - 在 [Account](https://dashboard.emailjs.com/admin/account) 頁面的 API Keys 區塊

### 步驟 2：前往 GitHub Repository 設定

1. 打開您的 GitHub Repository 頁面
2. 點擊上方的「**Settings**」（設定）標籤
3. 在左側選單中，找到「**Secrets and variables**」
4. 點擊「**Actions**」

### 步驟 3：新增第一個 Secret - Service ID

1. 點擊綠色的「**New repository secret**」按鈕
2. 填寫以下資訊：
   - **Name:** `VITE_EMAILJS_SERVICE_ID`
   - **Secret:** 貼上您的 EmailJS Service ID（例如：`service_abc123`）
3. 點擊「**Add secret**」

### 步驟 4：新增第二個 Secret - Template ID

1. 再次點擊「**New repository secret**」
2. 填寫以下資訊：
   - **Name:** `VITE_EMAILJS_TEMPLATE_ID`
   - **Secret:** 貼上您的 EmailJS Template ID（例如：`template_xyz789`）
3. 點擊「**Add secret**」

### 步驟 5：新增第三個 Secret - Public Key

1. 再次點擊「**New repository secret**」
2. 填寫以下資訊：
   - **Name:** `VITE_EMAILJS_PUBLIC_KEY`
   - **Secret:** 貼上您的 EmailJS Public Key（例如：`AbCdEfGhIjKlMnOp`）
3. 點擊「**Add secret**」

### 步驟 6：確認設定

完成後，您應該看到 3 個 Secrets：

- ✅ `VITE_EMAILJS_SERVICE_ID`
- ✅ `VITE_EMAILJS_TEMPLATE_ID`
- ✅ `VITE_EMAILJS_PUBLIC_KEY`

## 🚀 觸發部署

設定完成後，有兩種方式觸發重新部署：

### 方法 1：推送新的 commit（推薦）

```bash
git add .
git commit -m "Update GitHub Actions workflow for EmailJS"
git push
```

### 方法 2：手動觸發 workflow

1. 前往 GitHub Repository 的「**Actions**」標籤
2. 在左側選單點擊「**Deploy to GitHub Pages**」
3. 點擊右側的「**Run workflow**」按鈕
4. 選擇 `main` branch
5. 點擊綠色的「**Run workflow**」按鈕

## 🎉 完成！

部署完成後（通常需要 1-2 分鐘），訪問您的 GitHub Pages 網站並測試留言功能。

## ⚠️ 注意事項

### Secret 命名必須完全一致

Secret 的名稱必須**完全一致**（包含大小寫），否則無法正常運作：

✅ 正確：
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

❌ 錯誤：
- `vite_emailjs_service_id` （小寫）
- `VITE_EMAILJS_SERVICE_ID_` （多了底線）
- `EMAILJS_SERVICE_ID` （缺少 VITE_ 前綴）

### 如何修改 Secret

1. 前往 Settings → Secrets and variables → Actions
2. 點擊要修改的 Secret 名稱
3. 點擊「**Update secret**」
4. 輸入新的值
5. 點擊「**Update secret**」儲存

### 如何刪除 Secret

1. 前往 Settings → Secrets and variables → Actions
2. 點擊要刪除的 Secret 右側的「**...**」按鈕
3. 選擇「**Remove secret**」
4. 確認刪除

## 🔍 除錯技巧

### 查看 GitHub Actions 的構建日誌

1. 前往 Repository 的「**Actions**」標籤
2. 點擊最新的 workflow run
3. 點擊「**build**」job
4. 展開「**Build**」步驟
5. 查看輸出，確認沒有錯誤訊息

**注意**：Secrets 的值不會顯示在日誌中（會顯示為 `***`），這是正常的安全機制。

### 常見錯誤訊息

**錯誤 1：「Email 服務尚未設定」**
- 原因：Secrets 未設定或名稱錯誤
- 解決：檢查 3 個 Secrets 是否都已正確新增

**錯誤 2：構建失敗**
- 原因：可能是 workflow 檔案語法錯誤
- 解決：檢查 `.github/workflows/deploy.yml` 的格式

## 📚 相關文件

- [EmailJS 完整設定指南](./EMAILJS_SETUP.md)
- [GitHub Secrets 官方文件](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

---

如有任何問題，請參考 [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) 的故障排除章節。
