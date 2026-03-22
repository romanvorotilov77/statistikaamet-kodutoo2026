/**
 * Smoothly scroll the page to the top
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
