const Header = () => {
  return (
    <header className="py-5 border-b border-gray-300 border-solid">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-[60px]">
          <h2 className="text-3xl font-bold">logo</h2>
          <nav className="hidden md:flex gap-5">
          
            <a href="#" className="text-lg">
              home
            </a>
            <a href="#" className="text-lg">
              about
            </a>
            <a href="#" className="text-lg">
              contanct
            </a>
            <a href="#" className="text-lg">
              blog
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <button className="font-lg bg-purple-500 text-white py-2 px-3 rounded-md">
            xizmatlar
          </button>
          <select>
            <option value="1">uz</option>
            <option value="1">ru</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
