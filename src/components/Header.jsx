function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">LumiProject</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-blue-300">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-300">Pricing</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;