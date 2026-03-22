import { expect, test } from '@playwright/test'
import type { Page } from '@playwright/test'

async function startQuiz(page: Page) {
  await page.goto('/')
  await expect(page.getByRole('button', { name: 'Alusta' })).toBeVisible()
  await page.getByRole('button', { name: 'Alusta' }).click()
}

async function answerCurrentQuestion(page: Page, option: string) {
  const questionCard = page.locator('article').first()
  await questionCard.getByText(option, { exact: true }).click()
  await page.getByRole('button', { name: 'Kontrolli' }).click()
}

async function goToNextQuestion(page: Page) {
  await page.getByRole('button', { name: /Järgmine|Vaata tulemusi/ }).click()
}

async function completeQuiz(page: Page, answers: string[]) {
  for (let i = 0; i < answers.length; i += 1) {
    await answerCurrentQuestion(page, answers[i])
    await expect(
      page.getByText(/Õige vastus!|Vale vastus\. Õige vastus on:/),
    ).toBeVisible()
    await goToNextQuestion(page)
  }
}

test.describe('Quiz E2E', () => {
  test('opens app and shows intro screen', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText('Viktoriin').first()).toBeVisible()
    await expect(page.getByText('Testi oma teadmisi Eesti kohta!')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Alusta' })).toBeVisible()
  })

  test('starts quiz and shows first question', async ({ page }) => {
    await startQuiz(page)

    await expect(page.getByText('Küsimus 1 / 3')).toBeVisible()
    await expect(page.getByText('Mis on Eesti pealinn?')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Kontrolli' })).toBeVisible()
  })

  test('shows validation message when checking without selecting answer', async ({ page }) => {
    await startQuiz(page)

    await page.getByRole('button', { name: 'Kontrolli' }).click()
    await expect(page.getByText('Palun vali enne vastus')).toBeVisible()
  })

  test('allows moving to next question after submit', async ({ page }) => {
    await startQuiz(page)

    await answerCurrentQuestion(page, 'Tallinn')
    await expect(page.getByText('Õige vastus!')).toBeVisible()

    await goToNextQuestion(page)
    await expect(page.getByText('Küsimus 2 / 3')).toBeVisible()
    await expect(page.getByText('Mis on Eesti suurim saar?')).toBeVisible()
  })

  test('shows wrong-answer behavior and verifies final result', async ({ page }) => {
    await startQuiz(page)

    await answerCurrentQuestion(page, 'Tartu')
    await expect(page.getByText('Vale vastus. Õige vastus on: Tallinn')).toBeVisible()
    await goToNextQuestion(page)

    await answerCurrentQuestion(page, 'Saaremaa')
    await expect(page.getByText('Õige vastus!')).toBeVisible()
    await goToNextQuestion(page)

    await answerCurrentQuestion(page, 'Suitsupääsuke')
    await expect(page.getByText('Õige vastus!')).toBeVisible()
    await goToNextQuestion(page)

    await expect(page.getByRole('heading', { name: 'Tulemused' })).toBeVisible()
    await expect(page.getByText('Skoor: 2 / 3')).toBeVisible()
    await expect(page.getByText('Tubli! Sul on tugevad teadmised, jatka samas vaimus.')).toBeVisible()
  })

  test('score changes between different answer sets', async ({ page }) => {
    await startQuiz(page)

    await completeQuiz(page, ['Tartu', 'Hiiumaa', 'Rasvatihane'])

    await expect(page.getByRole('heading', { name: 'Tulemused' })).toBeVisible()
    await expect(page.getByText('Skoor: 0 / 3')).toBeVisible()

    await page.getByRole('button', { name: 'Alusta uuesti' }).click()

    await completeQuiz(page, ['Tallinn', 'Saaremaa', 'Suitsupääsuke'])

    await expect(page.getByRole('heading', { name: 'Tulemused' })).toBeVisible()
    await expect(page.getByText('Skoor: 3 / 3')).toBeVisible()
    await expect(page.getByText('Suurepärane tulemus! Vastasid kõigile küsimustele õigesti.')).toBeVisible()
  })
})
