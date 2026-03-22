import { IconFacebook, IconTwitter, IconLinkedIn, IconYouTube, IconInstagram } from '../icons';
import { menuItems } from '../data/menuItems';

const socialMedia = [
  { icon: IconFacebook, label: 'Facebook', ariaLabel: 'Facebook' },
  { icon: IconTwitter, label: 'Twitter', ariaLabel: 'Twitter' },
  { icon: IconLinkedIn, label: 'LinkedIn', ariaLabel: 'LinkedIn' },
  { icon: IconYouTube, label: 'YouTube', ariaLabel: 'YouTube' },
  { icon: IconInstagram, label: 'Instagram', ariaLabel: 'Instagram' },
];

export function Header() {

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="bg-black text-white py-2.25 px-8 md:px-16">
        <div className="max-w-400 mx-auto grid grid-cols-[1fr_auto_1fr] max-[850px]:grid-cols-[1fr_1fr] items-center">
          
          <div className="relative group flex items-center h-full min-w-72 max-[850px]:min-w-0 justify-self-start">
            <div className="flex items-center gap-1 text-[13px] leading-4 cursor-pointer">
              <span className="body-2-regular text-white text-[13px] leading-4">Statistikaamet:</span>
              <span className="body-2-bold text-[13px] leading-4 flex items-center gap-1">Viktoriin
                <svg 
                  className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            <div className="absolute top-full left-0 mt-2.25 w-max bg-white text-black shadow-[0_18px_44px_rgba(0,0,0,0.2)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="absolute inset-y-0 -left-6 w-6 bg-white shadow-[-10px_18px_24px_rgba(0,0,0,0.14)]" />
              <div className="relative py-2">
                {menuItems.map((item) => (
                  <a key={item} 
                    href="#" className="block pl-1.5 pr-6 py-1.5 text-left body-2-bold text-[13px] leading-4 hover:bg-stat-bg transition-colors">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 justify-self-center max-[850px]:hidden">
            {socialMedia.map(({ icon: Icon, label, ariaLabel }) => (
              <a key={label} href="#" aria-label={ariaLabel} className="group relative text-[13px] text-white hover:text-gray-300 cursor-pointer transition-colors flex items-center">
                <Icon className="w-3.5 h-3.5" />
                <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-4 -translate-x-1/2 whitespace-nowrap bg-black px-2 py-1 body-2-regular text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 tooltip-arrow"></span>
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex justify-end items-center gap-8 max-[850px]:gap-4 text-[13px] leading-4 min-w-72 max-[850px]:min-w-0 justify-self-end">
            <a href="#" className="body-2-bold text-[13px] leading-4 hover:underline transition-all max-[500px]:hidden">Ligipääsetavus</a>            
            <div className="flex items-center gap-1 max-[400px]:hidden">
              <span className="body-2-bold text-[13px] leading-4 cursor-pointer">EST</span>
              <span className="body-2-regular text-gray-600">|</span>
              <span className="body-2-regular text-[13px] leading-4 text-gray-500 cursor-pointer hover:text-white">ENG</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}