/**
 * Pricing utility for USD → CAD conversion with markup.
 * 
 * Exchange rate: 1 USD = 1.38 CAD (approximate)
 * Markup: 10%
 * Combined factor: 1.38 * 1.10 = 1.518
 */

const USD_TO_CAD = 1.38;
const MARKUP = 1.10;
const CONVERSION_FACTOR = USD_TO_CAD * MARKUP;

export function usdToCad(usd: number): number {
  return Math.round(usd * CONVERSION_FACTOR * 100) / 100;
}

export function formatCad(usd: number): string {
  return `$${usdToCad(usd).toLocaleString('en-CA', { minimumFractionDigits: 2 })} CAD`;
}
