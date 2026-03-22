import { useTranslation } from "react-i18next"

type QuizIntroProps = {
  onStart: () => void
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  const { t } = useTranslation()

  return (
    <div className="relative bg-white border-2 border-stat-light-grey rounded-2xl p-8 max-[500px]:p-6 max-[400px]:p-5 md:p-12 pb-70">
      <div className="flex flex-col items-start p-0 gap-6 w-full flex-none order-0 grow-0">
        <h1 className="display quiz-intro-display text-stat-black">{t("quiz.title")}</h1>
        <h2 className="headline-medium text-stat-black">{t("quiz.subtitle")}</h2>
        <h3 className="title-large text-stat-black">{t("quiz.howItWorks")}</h3>
        <div className="body-medium text-stat-grey space-y-4">
          <p>{t("quiz.intro.first")}</p>
          <p>{t("quiz.intro.second")}</p>
          <p>{t("quiz.intro.third")}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onStart}
        className="absolute right-8 bottom-8 title-medium flex flex-col justify-center items-center w-27.25 h-13.5 px-6 py-4 bg-black text-white border-2 border-transparent hover:border-black hover:bg-white hover:text-black active:bg-black active:text-white active:border-black transition-all duration-100"
      >
        {t("quiz.buttons.start")}
      </button>
    </div>
  )
}