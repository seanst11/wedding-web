# EmailJS 設定指南 📧

本文件說明如何設定 EmailJS 服務，讓網站訪客可以透過留言表單發送訊息到您的 Email。

## 📋 前置準備

1. 兩個要接收訊息的 Email 地址：
   - sungtaowu@gmail.com
   - phanthuha201095@gmail.com

## 🚀 設定步驟

### 步驟 1：註冊 EmailJS 帳號

1. 前往 [EmailJS 官網](https://www.emailjs.com/)
2. 點擊「Sign Up」註冊免費帳號
3. 使用 Google 帳號或 Email 註冊皆可

### 步驟 2：新增 Email 服務

1. 登入後，進入 [Email Services](https://dashboard.emailjs.com/admin)
2. 點擊「Add New Service」
3. 選擇您要使用的 Email 服務提供商（建議選擇 **Gmail**）
4. 按照指示連接您的 Gmail 帳號
5. 記下 **Service ID**（例如：`service_abc123`）

### 步驟 3：創建 Email 模板

1. 進入 [Email Templates](https://dashboard.emailjs.com/admin/templates)
2. 點擊「Create New Template」
3. 設定模板內容如下：

#### 模板設定範例

**Template Name:** Wedding Message Template

**Subject (主旨):**
```
💌 來自 {{from_name}} 的婚禮留言
```

**Content (內容):**
```
您好 {{to_name}},

您收到了一則來自婚禮網站的新留言！

📝 訪客姓名：{{from_name}}

💬 留言內容：
{{message}}

---
此訊息由婚禮網站自動發送
時間：{{current_time}}
```

**To Email (收件者):**
在這裡設定兩個收件者：
```
sungtaowu@gmail.com, phanthuha201095@gmail.com
```

4. 點擊「Save」儲存模板
5. 記下 **Template ID**（例如：`template_xyz789`）

### 步驟 4：取得 Public Key

1. 進入 [Account](https://dashboard.emailjs.com/admin/account) 頁面
2. 在「API Keys」區塊中找到 **Public Key**
3. 記下這個 Key（例如：`AbCdEfGhIjKlMnOp`）

### 步驟 5：設定環境變數

1. 在專案根目錄創建 `.env` 檔案
2. 複製 `.env.example` 的內容到 `.env`
3. 填入您的 EmailJS 資訊：

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

⚠️ **重要**：`.env` 檔案已經加入 `.gitignore`，不會被提交到 Git，請妥善保管。

### 步驟 6：測試設定

1. 啟動開發伺服器：
```bash
npm run dev
```

2. 打開瀏覽器訪問網站
3. 點擊首頁的「傳訊息給我們！」按鈕
4. 填寫測試留言並送出
5. 檢查兩個 Email 信箱是否都收到訊息

## 🎨 模板變數說明

在 EmailJS 模板中可以使用以下變數：

- `{{from_name}}` - 訪客填寫的姓名
- `{{message}}` - 訪客的留言內容
- `{{to_name}}` - 固定為 "Sean & Ha"
- `{{reply_to}}` - 固定為 "noreply@wedding.com"

## 📊 免費方案限制

EmailJS 免費方案包含：
- ✅ 每月 **200 封**郵件
- ✅ 2 個 Email 服務
- ✅ 無限模板
- ✅ 基本技術支援

對於婚禮網站來說，每月 200 封通常非常充足。

## 🔧 故障排除

### 問題：送出後顯示錯誤訊息

**可能原因：**
1. 環境變數未正確設定
2. EmailJS Service ID、Template ID 或 Public Key 錯誤
3. EmailJS 服務未正確連接 Gmail

**解決方法：**
1. 檢查 `.env` 檔案中的值是否正確
2. 確認 EmailJS Dashboard 中的設定
3. 重新啟動開發伺服器

### 問題：Email 沒有收到

**可能原因：**
1. 郵件被歸類為垃圾郵件
2. 模板中的收件者 Email 地址錯誤
3. Gmail 帳號連接失效

**解決方法：**
1. 檢查垃圾郵件資料夾
2. 確認模板中的 To Email 設定
3. 重新連接 Gmail 服務

### 問題：只有一個人收到郵件

**確認：**
- 模板的 "To Email" 欄位是否包含兩個 Email 地址
- 格式：`sungtaowu@gmail.com, phanthuha201095@gmail.com`

## 📚 相關資源

- [EmailJS 官方文檔](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
- [EmailJS 常見問題](https://www.emailjs.com/docs/faq/)

## 💡 提示

1. 建議定期檢查 EmailJS Dashboard 的使用量
2. 接近 200 封限制時，可以考慮升級方案或使用其他服務
3. 可以在模板中加入更多客製化內容，如婚禮日期、地點等資訊
4. 測試時建議使用不同的瀏覽器和裝置確保相容性

---

如有任何問題，歡迎查看 EmailJS 官方文檔或聯繫技術支援！
