
import logo from '../assets/images/ES_Logo.png';

export function Banner() {

  const wrapperClasses = 'w-full h-[100px] bg-white bg-dots pl-9.5 flex items-center';
  const contentClasses = 'flex items-center';

  return (
    <div className={wrapperClasses}>
      <div className={contentClasses}>
        <div className="bg-white p-4 inline mt-2">
          <img 
            src={logo} 
            alt="Eesti Statistika" 
            className="h-10 w-auto select-none" 
          />
        </div>
      </div>
    </div>
  );
}