
import logo from '../assets/images/ES_Logo.png';

export function Banner() {

  const wrapperClasses = 'w-full h-[100px] bg-white bg-dots px-8 md:px-16 flex items-center';
  const contentClasses = 'max-w-400 mx-auto w-full flex justify-start items-center';

  return (
    <div className={wrapperClasses}>
      <div className={contentClasses}>
        <div className="bg-white p-4 inline -ml-7.25 mt-2">
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