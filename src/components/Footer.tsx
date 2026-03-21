import { IconArrowUpFull } from "../icons";

export function Footer() {
  const sectionBlock = "bg-black px-6 py-4 w-fit flex flex-col gap-3";
  const headingClass = "text-[18px] font-bold";
  const rowClass = "inline-flex w-fit";

  return (
    <footer className="bg-black text-white w-full font-sans border-t border-gray-800 bg-dots" style={{ height: '252px' }}>
      <div className="w-full h-full pt-5 pl-14.25 pr-8 md:pr-16 flex flex-col lg:flex-row justify-between items-start gap-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-none xl:grid-flow-col xl:auto-cols-max gap-x-14.25 gap-y-10 w-fit shrink-0">
          <div className={sectionBlock}>
            <h3 className={headingClass}>Kontaktid</h3>
            <div className="flex flex-col gap-1.5 text-[15px]">
              <div className={`${rowClass} items-center gap-2 cursor-pointer group`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+372 625 9300</span>
              </div>
              <div className={`${rowClass} items-center gap-2 cursor-pointer group`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>stat@stat.ee</span>
              </div>
            </div>
          </div>

          <div className={sectionBlock}>
            <h3 className={headingClass}>Leia kiirelt</h3>
            <ul className="text-[15px]">
              <li>
                <a href="#" className={rowClass}>Sisukaart</a>
              </li>
            </ul>
          </div>

          <div className={sectionBlock}>
            <h3 className={headingClass}>Andmekaitse</h3>
            <ul className="flex flex-col gap-1.5 text-[15px]">
              <li>
                <a href="#" className={rowClass}>Andmekaitse</a>
              </li>
              <li>
                <a href="#" className={rowClass}>Küpsiste sätted</a>
              </li>
            </ul>
          </div>

          <div className={sectionBlock}>
            <h3 className={headingClass}>Muudatuste logi</h3>
            <div className="flex flex-col gap-0.5 text-[13px] text-gray-300">
              <p className={rowClass}>Viimati muudetud 1 aasta eest.</p>
              <p className={rowClass}>Uuendati lehekülge:</p>
              <p className={rowClass}>
                Muudeti lehekülge: <span className="font-bold text-white"> UI Kit</span>
              </p>
            </div>
          </div>
        </div>

        <div className="self-end lg:self-end mb-4.75 -mr-4.75">
          <button type="button" aria-label="Liigu üles"
            className="bg-black border-2 border-white px-5 py-2 flex items-center gap-3 font-bold uppercase tracking-widest text-stat-small hover:bg-white hover:text-black text-align-center transition-all">Üles
            <span className="[&_svg]:stroke-3">
              <IconArrowUpFull className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}