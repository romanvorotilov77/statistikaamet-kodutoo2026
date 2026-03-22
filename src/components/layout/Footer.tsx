import { IconArrowUpFull, IconEmail, IconPhone } from "../../icons";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
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
            <h3 className={headingClass}>{t('footer.contacts')}</h3>
            <div className="flex flex-col gap-1.5">
              <div className={`${rowClass} items-center gap-2 cursor-pointer group`}>
                <IconPhone className="w-4 h-4" />
                <span>+372 625 9300</span>
              </div>
              <div className={`${rowClass} items-center gap-2 cursor-pointer group`}>
                <IconEmail className="w-4 h-4" />
                <span>stat@stat.ee</span>
              </div>
            </div>
          </div>

          <div className={sectionBlock}>
            <h3 className={headingClass}>{t('footer.findQuickly')}</h3>
            <ul>
              <li>
                <a href="#" className={rowClass}>{t('footer.sitemap')}</a>
              </li>
            </ul>
          </div>

          <div className={sectionBlock}>
            <h3 className={headingClass}>{t('footer.dataProtection')}</h3>
            <ul className="flex flex-col gap-1.5">
              <li>
                <a href="#" className={rowClass}>{t('footer.dataProtection')}</a>
              </li>
              <li>
                <a href="#" className={rowClass}>{t('footer.cookieSettings')}</a>
              </li>
            </ul>
          </div>

          <div className={sectionBlock}>
            <h3 className={headingClass}>{t('footer.changeLog')}</h3>
            <div className="flex flex-col items-start gap-1 text-gray-300 text-left">
              <p className="body-2-regular">{t('footer.lastUpdated')}</p>
              <p className="body-2-regular">{t('footer.updatedPage')}</p>
              <p className="body-2-regular flex flex-wrap items-center gap-1">
                {t('footer.modifiedPage')} <span className="body-2-bold text-white">{t('footer.modifiedItem')}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="self-end mb-0 xl:mb-4.75 mr-0">
          <button type="button" aria-label={t('footer.scrollTopAria')} onClick={handleScrollToTop}
            className="bg-black border-2 border-white px-5 py-2 flex items-center gap-3 label-medium-bold uppercase tracking-widest hover:bg-white hover:text-black text-center transition-all">{t('footer.scrollTop')}
            <span className="[&_svg]:stroke-3">
              <IconArrowUpFull className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
