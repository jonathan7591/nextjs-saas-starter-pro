"use client"

import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    { icon: "⚡", title: "Next.js 14", desc: "App Router 与 Server Components" },
    { icon: "🔐", title: "Authentication", desc: "GitHub & Google OAuth 登录" },
    { icon: "💳", title: "Stripe 支付", desc: "订阅管理与支付处理" },
    { icon: "📊", title: "Prisma ORM", desc: "PostgreSQL 数据库" },
    { icon: "🎨", title: "Tailwind CSS", desc: "响应式美观设计" },
    { icon: "🚀", title: "Docker 部署", desc: "一键部署到任意平台" },
  ]

  const plans = [
    { name: "Free", price: "$0", period: "/月", features: ["1 项目", "基础功能", "社区支持"], cta: "开始使用" },
    { name: "Pro", price: "$19", period: "/月", features: ["无限项目", "优先支持", "API 访问", "数据分析"], cta: "升级 Pro", popular: true },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SaaS Starter Pro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">功能</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">定价</Link>
              <Link href="#demo" className="text-gray-600 hover:text-gray-900">演示</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-600 hover:text-gray-900">登录</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                开始使用
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            v1.0 正式发布
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            用最快的速度<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              启动你的 SaaS
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            生产级 Next.js 启动套件，集成认证、支付、数据库。<br />
            省下几周配置时间，专注产品本身。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/25">
              立即获取 - $49
            </button>
            <button className="bg-white text-gray-700 border border-gray-300 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition">
              查看演示
            </button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-2xl bg-gray-900 p-2 shadow-2xl">
              <div className="rounded-xl overflow-hidden bg-gray-800">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-600 rounded-md py-1 px-4 text-sm text-gray-400 text-center">
                      dashboard.yoursaas.com
                    </div>
                  </div>
                </div>
                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm">总收入</p>
                      <p className="text-2xl font-bold text-white">$12,450</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm">用户数</p>
                      <p className="text-2xl font-bold text-white">1,234</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-400 text-sm">订阅数</p>
                      <p className="text-2xl font-bold text-white">567</p>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-gray-400 mb-2">📈 数据图表区域</div>
                      <div className="flex gap-2 justify-center">
                        <div className="w-8 h-16 bg-blue-600 rounded"></div>
                        <div className="w-8 h-24 bg-blue-500 rounded"></div>
                        <div className="w-8 h-20 bg-blue-400 rounded"></div>
                        <div className="w-8 h-28 bg-blue-600 rounded"></div>
                        <div className="w-8 h-32 bg-blue-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">一切你需要的功能</h2>
            <p className="text-gray-600">从认证到支付，我们都为你准备好了</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">简单透明的定价</h2>
            <p className="text-gray-600">一次购买，终身使用</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, idx) => (
              <div key={idx} className={`p-8 rounded-2xl ${plan.popular ? 'bg-blue-600 text-white' : 'bg-white border'}`}>
                {plan.popular && (
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm mb-4">最受欢迎</span>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? 'text-blue-100' : 'text-gray-500'}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-gray-100' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">SaaS Starter Pro</span>
              <p className="text-gray-400 text-sm mt-1">助你快速启动 SaaS</p>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Jonathan. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
