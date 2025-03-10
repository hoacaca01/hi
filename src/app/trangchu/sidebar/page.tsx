export default function Sidebar() {
    return (
        <div className="grid grid-cols-[250px_1fr] flex-grow">
        {/* Sidebar */}
        <aside className="bg-gray-100 p-4 min-h-full">
          <ul className="space-y-2">
            <li><a href="#" className="block p-2 hover:bg-gray-200">Dashboard</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-200">Settings</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-200">Profile</a></li>
            <li><a href="#" className="block p-2 hover:bg-gray-200">Profile</a></li>
          </ul>
        </aside>
      </div>
    );
  }