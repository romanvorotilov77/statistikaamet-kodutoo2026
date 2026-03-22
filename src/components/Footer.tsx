import { IconArrowUpFull } from "../icons";

export function Footer() {
  const sectionBlock = "bg-black px-6 max-[800px]:px-4 py-4 w-fit max-[800px]:w-full flex flex-col gap-3";
  const headingClass = "title-large";
  const rowClass = "inline-flex w-fit body-small";

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white w-full border-t border-gray-800 bg-dots">
      <div className="w-full pt-5 pl-8 md:pl-14.25 pr-8 md:pr-16 pb-5 flex flex-col xl:flex-row justify-between items-start gap-8">
        <div className="grid grid-cols-1 max-[800px]:grid-cols-2 max-[340px]:grid-cols-1 md:grid-cols-2 xl:grid-cols-none xl:grid-flow-col xl:auto-cols-max gap-x-14.25 max-[800px]:gap-x-4 gap-y-10 max-[800px]:gap-y-6 w-fit max-[800px]:w-full shrink-0">
          <div className={sectionBlock}>
            <h3 className={headingClass}>Kontaktid</h3>
            <div className="flex flex-col gap-1.5">
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
            <ul>
              <li>
                <a href="#" className={rowClass}>Sisukaart</a>
              </li>
            </ul>
          </div>

          <div className={sectionBlock}>
            <h3 className={headingClass}>Andmekaitse</h3>
            <ul className="flex flex-col gap-1.5">
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
            <div className="flex flex-col items-start gap-1 text-gray-300 text-left">
              <p className="body-2-regular">Viimati muudetud 1 aasta eest.</p>
              <p className="body-2-regular">Uuendati lehekülge:</p>
              <p className="body-2-regular flex flex-wrap items-center gap-1">
                Muudeti lehekülge: <span className="body-2-bold text-white">UI Kit</span>
              </p>
            </div>
          </div>
        </div>

        <div className="self-end mb-0 xl:mb-4.75 mr-0">
          <button type="button" aria-label="Liigu üles" onClick={handleScrollToTop}
            className="bg-black border-2 border-white px-5 py-2 flex items-center gap-3 label-medium-bold uppercase tracking-widest hover:bg-white hover:text-black text-center transition-all">Üles
            <span className="[&_svg]:stroke-3">
              <IconArrowUpFull className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}