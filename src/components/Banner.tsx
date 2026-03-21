
import logo from '../assets/images/ES_Logo.png';

type BannerProps = {
  onLogoClick: () => void;
};

export function Banner({ onLogoClick }: BannerProps) {

  const wrapperClasses = 'w-full h-[100px] bg-white bg-dots pl-110 flex items-center';
  const contentClasses = 'flex items-center';

  return (
    <div className={wrapperClasses}>
      <div className={contentClasses}>
        <button type="button" onClick={onLogoClick} className="bg-white p-4 inline mt-2 cursor-pointer">
          <img 
            src={logo} 
            alt="Eesti Statistika" 
            className="h-10 w-auto select-none" 
          />
        </button>
      </div>
    </div>
  );
}