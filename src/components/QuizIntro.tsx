const QuizIntro = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h1 className="display text-center mb-8">Viktoriin</h1>
        
        <div className="space-y-6">
          <p className="body-large text-center text-stat-grey">
            Testi oma teadmisi Eesti kohta!
          </p>
          
          <div className="bg-white border border-stat-light-grey rounded-lg p-8 md:p-12">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-stat-success font-bold text-xl">✓</span>
                <p className="body-medium text-stat-grey">
                  Küsimused avanevad ükshaaval. Veendu, et oled vastuse valinud, ja kui oled valmis, vajuta järgmisele küsimusele!
                </p>
              </li>
              
              <li className="flex gap-4">
                <span className="text-stat-success font-bold text-xl">✓</span>
                <p className="body-medium text-stat-grey">
                  Saad kohe teada, kas vastasid õigesti või mitte. Lõpus näed lõpptulemust ja õigeid vastuseid.
                </p>
              </li>
              
              <li className="flex gap-4">
                <span className="text-stat-success font-bold text-xl">✓</span>
                <p className="body-medium text-stat-grey">
                  Ole tähelepanelik ja õnne lahendamisel!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuizIntro