import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white flex-shrink-0 hidden lg:block">
          <div className="h-full flex flex-col">
            <div className="px-6 py-4 text-2xl font-bold">Dashboard</div>
            <nav className="flex-1 px-4 py-2 space-y-2">
              <a
                href="#"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                Home
              </a>
              <a
                href="#"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                Profile
              </a>
              <a
                href="#"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                Settings
              </a>
              <a
                href="#"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                Messages
              </a>
              <a
                href="#"
                className="block py-2 px-4 rounded hover:bg-gray-700 transition"
              >
                Logout
              </a>
            </nav>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        <div className="lg:hidden">
          <button
            type="button"
            className="p-4 bg-gray-800 text-white fixed top-4 left-4 rounded-full z-50"
          >
            Menu
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <header className="bg-white shadow p-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome to Dashboard
            </h1>
          </header>
          <section className="p-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Dashboard Content
              </h2>
              <p className="text-gray-600">
                This is your main content area. Add dynamic components, charts,
                or other widgets here to display information.
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
