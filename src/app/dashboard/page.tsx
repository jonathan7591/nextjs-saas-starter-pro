export default function DashboardPage() {
  const stats = [
    { label: "总收入", value: "$12,450", change: "+12.5%", trend: "up" },
    { label: "用户数", value: "1,234", change: "+8.2%", trend: "up" },
    { label: "订阅数", value: "567", change: "+15.3%", trend: "up" },
    { label: "活跃度", value: "89%", change: "+2.1%", trend: "up" },
  ]

  const recentUsers = [
    { name: "张三", email: "zhang@example.com", status: "在线", time: "2分钟前" },
    { name: "李四", email: "li@example.com", status: "离线", time: "1小时前" },
    { name: "王五", email: "wang@example.com", status: "在线", time: "5分钟前" },
    { name: "赵六", email: "zhao@example.com", status: "离线", time: "2小时前" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">仪表板</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  J
                </div>
                <span className="text-sm font-medium text-gray-700">Jonathan</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border">
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <div className="mt-2 flex items-baseline">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <span className="ml-2 text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-medium text-gray-900 mb-4">收入趋势</h3>
            <div className="h-64 flex items-end space-x-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-blue-500 rounded-t hover:bg-blue-600 transition"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-500">
              <span>1月</span>
              <span>2月</span>
              <span>3月</span>
              <span>4月</span>
              <span>5月</span>
              <span>6月</span>
              <span>7月</span>
              <span>8月</span>
              <span>9月</span>
              <span>10月</span>
              <span>11月</span>
              <span>12月</span>
            </div>
          </div>

          {/* Recent Users */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-medium text-gray-900 mb-4">最近用户</h3>
            <div className="space-y-4">
              {recentUsers.map((user, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                    {user.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block w-2 h-2 rounded-full ${user.status === "在线" ? "bg-green-500" : "bg-gray-400"}`}></span>
                    <p className="text-xs text-gray-400 mt-1">{user.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-2">升级计划</h3>
            <p className="text-sm text-blue-100 mb-4">解锁更多高级功能</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition">
              查看定价
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="font-semibold mb-2 text-gray-900">设置</h3>
            <p className="text-sm text-gray-500 mb-4">管理你的账户设置</p>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              进入设置 →
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border">
            <h3 className="font-semibold mb-2 text-gray-900">文档</h3>
            <p className="text-sm text-gray-500 mb-4">查看使用文档和 API</p>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              阅读文档 →
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
