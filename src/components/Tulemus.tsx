import type { Question } from "../data/questions"

type TulemusProps = {
  questions: Question[]
  results: Record<number, { selected: string; isCorrect: boolean }>
  score: number
  finalMessage: string
  onRestart: () => void
}

export function Tulemus({ questions, results, score, finalMessage, onRestart }: TulemusProps) {
  return (
    <div className="bg-white border-2 border-stat-light-grey rounded-2xl p-8 md:p-10 space-y-6">
      <h2 className="headline-medium">Tulemused</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-stat-light-grey">
              <th className="text-left py-3 pr-4 title-medium">Küsimus</th>
              <th className="text-left py-3 pr-4 title-medium">Sinu vastus</th>
              <th className="text-left py-3 title-medium">Staatus</th>
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
                    {result?.isCorrect ? "Õige" : "Vale"}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="space-y-2">
        <p className="headline-small">Skoor: {score} / {questions.length}</p>
        <p className="body-medium text-stat-grey">{finalMessage}</p>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={onRestart}
          className="title-medium px-6 py-3 bg-black text-white border-2 border-black"
        >
          Alusta uuesti
        </button>
      </div>
    </div>
  )
}
