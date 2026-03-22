import type { Question, QuizResult } from "../../types"
import { useTranslation } from "react-i18next"
import { Button } from "../ui"

type TulemusProps = {
  questions: Question[]
  results: Record<number, QuizResult>
  score: number
  finalMessage: string
  onRestart: () => void
}

export function Tulemus({ questions, results, score, finalMessage, onRestart }: TulemusProps) {
  const { t } = useTranslation()

  return (
    <div className="bg-white border-2 border-stat-light-grey rounded-2xl p-8 md:p-10 space-y-6">
      <h2 className="headline-medium">{t("quiz.results.title")}</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-stat-light-grey">
              <th className="text-left py-3 pr-4 title-medium">{t("quiz.results.question")}</th>
              <th className="text-left py-3 pr-4 title-medium">{t("quiz.results.yourAnswer")}</th>
              <th className="text-left py-3 title-medium">{t("quiz.results.status")}</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => {
              const result = results[question.id]
              return (
                <tr key={question.id} className="border-b border-stat-light-grey">
                  <td className="py-3 pr-4 body-small">{question.question}</td>
                  <td className="py-3 pr-4 body-small">{result?.selected ?? "-"}</td>
                  <td className={`py-3 body-small ${result?.isCorrect ? "text-stat-success" : "text-stat-error"}`}>
                    {result?.isCorrect ? t("quiz.results.correct") : t("quiz.results.wrong")}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="space-y-2">
        <p className="headline-small">{t("quiz.results.score", { score, total: questions.length })}</p>
        <p className="body-medium text-stat-grey">{finalMessage}</p>
      </div>

      <div className="flex justify-end pt-2">
        <Button onClick={onRestart}>{t("quiz.buttons.restart")}</Button>
      </div>
    </div>
  )
}
