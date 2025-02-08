# 💎 Rosendal Jewellery - Next.js 项目

**Rosendal Jewellery** 是一个使用 **Next.js** 和 **MongoDB** 构建的高端珠宝电子商务网站。

---

## 🚀 如何运行本项目

### 1️⃣ 克隆仓库

```bash
git clone https://github.com/blingbling-jewelry/jewelry-private.git
cd jewelry-private
```

---

### 2️⃣ 安装依赖

```bash
npm install   # 或者使用 yarn install
```

---

### 3️⃣ 配置环境变量

在项目根目录创建 `.env.local` 文件，并填入以下内容：

```env
 NEXT_PUBLIC_APP_NAME=Rosendal Jewellery
 NEXT_PUBLIC_APP_SLOGAN=Unveil Timeless Elegance.
 NEXT_PUBLIC_APP_DESCRIPTION=An jewellery store built with Next.js and MongoDB
```

---

### 4️⃣ 运行开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 🎉

---

### 5️⃣ 构建和部署

**✅ 本地构建**

```bash
npm run build
npm start
```

---

## 📂 目录结构

```
📦 jewelry-private
 ┣ 📂 app          # 页面
 ┣ 📂 lib          # 工具函数
 ┣ 📂 public       # 静态资源
 ┣ 📂 pages        # Next.js 组件
 ┣ 📂 styles       # 样式
 ┣ 📜 .env.local   # 环境变量（需要手动创建）
 ┣ 📜 package.json # 依赖管理
 ┣ 📜 next.config.js # Next.js 配置
 ┗ 📜 README.md    # 项目说明
```

---

## 🎯 未来计划

✅ **珠宝商品展示**  
✅ **用户购物车**  
✅ **订单管理**  
⏳ **3D 珠宝展示（未来迭代）**
