export function Footer() {
  return (
    <footer className="bg-black text-white w-full font-sans pt-12 pb-10 px-8 md:px-16 border-t border-gray-800">
      <div className="max-w-400 mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 grow">
          <div>
            <h3 className="text-[18px] font-bold mb-3">Kontaktid</h3>
            <div className="flex flex-col gap-1.5 text-[15px]">
              <div className="flex items-center gap-2 cursor-pointer group">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+372 625 9300</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer group">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>stat@stat.ee</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-bold mb-3">Leia kiirelt</h3>
            <ul className="text-[15px]">
              <li>
                <a href="#">Sisukaart</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-bold mb-3">Andmekaitse</h3>
            <ul className="flex flex-col gap-1.5 text-[15px]">
              <li>
                <a href="#">Andmekaitse</a>
              </li>
              <li>
                <a href="#">Küpsiste sätted</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-bold mb-3">Muudatuste logi</h3>
            <div className="flex flex-col gap-0.5 text-[13px] text-gray-300">
              <p>Viimati muudetud 1 aasta eest.</p>
              <p>Uuendati lehekülge:</p>
              <p>
                Muudeti lehekülge: <span className="font-bold text-white">UI Kit</span>
              </p>
            </div>
          </div>
        </div>

        <div className="self-end lg:self-start pt-2">
          <button type="button" aria-label="Scroll to top"
            className="border-2 border-white px-5 py-2 flex items-center gap-3 font-bold uppercase tracking-widest text-stat-small hover:bg-white hover:text-black transition-all">Üles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7 7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}