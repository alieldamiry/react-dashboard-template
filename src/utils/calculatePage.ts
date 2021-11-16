export function calculatePage(total: number, per_page: number) {
  return Math.ceil(total / per_page);
}
