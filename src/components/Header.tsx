export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
      <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-indigo-500">NKE</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="mr-5  hover:text-gray-900 cursor-pointer ">
            회사소개
          </div>
          <div className="mr-5  hover:text-gray-900 cursor-pointer ">위치</div>
          <div className="mr-5  hover:text-gray-900 cursor-pointer ">
            연락방법
          </div>
        </nav>
      </div>
    </header>
  );
}
