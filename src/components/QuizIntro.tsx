type QuizIntroProps = {
  onStart: () => void
}

const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <div className="relative bg-white border-2 border-stat-light-grey rounded-2xl p-8 max-[500px]:p-6 max-[400px]:p-5 md:p-12 pb-70">
      <div className="flex flex-col items-start p-0 gap-6 w-full flex-none order-0 grow-0">
        <p className="display quiz-intro-display text-stat-black">Viktoriin</p>
        <p className="headline-medium text-stat-black">Testi oma teadmisi Eesti kohta!</p>
        <h3 className="title-large text-stat-black">Kuidas viktoriin töötab</h3>
        <p className="body-medium text-stat-grey">
          Küsimused avanevad ükshaaval. Veendu, et oled vastuse valinud, ja kui oled valmis, vajuta järgmisele küsimusele!
          <br />
          <br />
          Saad kohe teada, kas vastasid õigesti või mitte. Lõpus näed lõpptulemust ja õigeid vastuseid.
          <br />
          <br />
          Ole tähelepanelik ja õnne lahendamisel!
          <br />
          <br />
          <br />
        </p>
      </div>
      <button
        type="button"
        onClick={onStart}
        className="absolute right-8 bottom-8 title-medium flex flex-col justify-center items-center w-27.25 h-13.5 px-6 py-4 bg-black text-white border-2 border-transparent hover:border-black hover:bg-white hover:text-black active:w-26.75 active:h-13.5 active:p-0 active:bg-black active:text-white active:border-black transition-all duration-100"
      >
        Alusta
      </button>
    </div>
  )
}

export default QuizIntro