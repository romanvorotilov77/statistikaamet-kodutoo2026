
import logo from '../assets/images/ES_Logo.png';

type BannerProps = {
  onLogoClick: () => void;
};

export function Banner({ onLogoClick }: BannerProps) {

  const wrapperClasses = 'w-full h-[100px] bg-white bg-dots';
  const contentClasses = 'max-w-400 mx-auto w-full h-full flex items-center';

  return (
    <div className={wrapperClasses}>
      <div className={contentClasses}>
        <button type="button" onClick={onLogoClick} className="bg-white px-4 h-18 w-38 flex items-center justify-start cursor-pointer shrink-0">
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