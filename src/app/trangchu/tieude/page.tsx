import { Menu, UserPlus } from "lucide-react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image  src="/log.png" alt="Logo" className="h-10" />
        {/* <h1 className="text-xl font-bold">Thư viện Pháp Luật</h1> */}
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-2">
          <li className="border border-gray-500 px-3 py-1 rounded flex items-center space-x-2">
            <Menu size={20} />
            <a href="#" className="hover:underline">Danh mục</a>
          </li>
          <div className="h-8 w-px bg-gray-400"></div>
          <li className="border border-gray-500 px-3 py-1 rounded">
            <a href="#" className="hover:underline">Tổng đài trực tuyến 19006192</a>
          </li>
          <div className="h-8 w-px bg-gray-400"></div>
          <li className="border border-gray-500 px-3 py-1 rounded">
            <a href="#" className="hover:underline">Gói dịch vụ & Giá</a>
          </li>
          <div className="h-8 w-px bg-gray-400"></div>
          <li className="border border-gray-500 px-3 py-1 rounded flex items-center space-x-2">
            <Image src="/ngon-ngu-anh.jpg" alt="English" className="h-4 w-6" />
            <a href="#" className="hover:underline">Tiếng Anh</a>
          </li>
          <div className="h-8 w-px bg-gray-400"></div>
          <li className="border border-gray-500 px-3 py-1 rounded flex items-center space-x-2">
            <UserPlus size={16} />
            <a href="#" className="hover:underline">Đăng Ký</a>
          </li>
          <div className="h-8 w-px bg-gray-400"></div>
          <li className="border border-gray-500 px-3 py-1 rounded">
            <a href="#" className="hover:underline">Đăng Nhập</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
