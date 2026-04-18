# 🚀 GitHub 上传指南

## 方法一：命令行推送

### 1. 在 GitHub 上创建空仓库
- 访问 https://github.com/new
- 输入名称: `nextjs-saas-starter-pro`
- 勾选 "Add a README file"
- 点击 "Create repository"

### 2. 本地推送
```bash
cd /tmp/nextjs-saas-starter-pro

# 添加远程仓库
git remote add origin https://github.com/jonathan7591/nextjs-saas-starter-pro.git

# 重命名分支为 main
git branch -M main

# 推送代码
git push -u origin main
```

## 方法二：API 创建（需要 Token）

```bash
# 设置 Token
export GITHUB_TOKEN=ghp_your_token_here

# 创建仓库
curl -X POST https://api.github.com/user/repos \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d '{
    "name": "nextjs-saas-starter-pro",
    "description": "🚀 Production-ready Next.js SaaS starter",
    "private": false,
    "has_issues": true
  }'

# 推送代码
git remote add origin https://github.com/jonathan7591/nextjs-saas-starter-pro.git
git push -u origin main
```

## ✅ 上传后配置

### 启用 GitHub Pages
1. 进入仓库 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. 选择 "main" 分支和 "/ (root)"
4. 点击 Save

### 添加主题和描述
```
主题: nextjs, react, typescript, saas, starter, stripe, prisma, tailwindcss
描述: 🚀 Production-ready Next.js SaaS starter with auth, payments, and dashboard
```

### 设置社区规范
- 启甩 Issues：允许用户提问题
- 启用 Discussions：交流场所
- 禁用 Wiki：保持简洁

## 📸 添加截图到 README

上传后，编辑 README.md 添加截图：

```markdown
## 🖼️ 预览

![Landing Page](screenshots/landing.png)
![Dashboard](screenshots/dashboard.png)
![Login](screenshots/login.png)
```

## 🚀 验证上传成功

访问: https://github.com/jonathan7591/nextjs-saas-starter-pro

如果看到代码文件，说明上传成功！
