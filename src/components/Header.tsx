export function Header() {
  const menuItems = [
    'Koduleht',
    'Statistika andmebaas',
    'Palgarakendus',
    'Juhtimislauad',
    'Väliskaubanduse rakendus',
    'Tõetamm',
    'Nimede statistika rakendus'
  ];

  return (
    <header className="w-full font-sans relative z-50">
      <div className="bg-black text-white py-[9px] px-8 md:px-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-3 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ С ДРОПДАУНОМ */}
          <div className="relative group flex items-center h-full">
            <div className="flex items-center gap-1 text-[14px] cursor-pointer">
              <span className="text-white">Statistikaamet:</span>
              <span className="font-bold flex items-center gap-1">
                Brändijuhised
                <svg 
                  className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            {/* ИСПРАВЛЕННЫЙ ДРОПДАУН */}
            <div className="absolute top-full left-0 mt-[9px] w-max bg-white text-black shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="absolute inset-y-0 -left-6 w-6 bg-white" />
              <div className="relative py-2">
                {menuItems.map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="block pl-1.5 pr-6 py-1.5 text-left text-[14px] font-bold hover:bg-[#F8F8F8] transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ЦЕНТР */}
          <div className="flex justify-center items-center gap-6">
            {['f', 'X', 'in', 'YT', 'IG'].map((social) => (
              <span key={social} className="text-[14px] font-bold hover:text-gray-300 cursor-pointer transition-colors">
                {social}
              </span>
            ))}
          </div>

          {/* ПРАВО */}
          <div className="flex justify-end items-center gap-8 text-[14px] font-bold">
            <a href="#" className="hover:underline transition-all">Ligipääsetavus</a>            
            <div className="flex items-center gap-1">
              <span className="cursor-pointer">EST</span>
              <span className="text-gray-600 font-normal">|</span>
              <span className="text-gray-500 cursor-pointer font-normal hover:text-white">ENG</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}