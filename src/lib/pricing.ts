/**
 * Pricing utility for USD → CAD conversion with markup.
 * 
 * Exchange rate: 1 USD = 1.38 CAD (approximate)
 * Markup: 10%
 * Combined factor: 1.38 * 1.10 = 1.518
 */

const USD_TO_CAD = 1.38;
const DEFAULT_MARKUP = 1.10;
const CONVERSION_FACTOR = USD_TO_CAD * DEFAULT_MARKUP;

export function usdToCad(usd: number, markupPercent?: number): number {
  const factor = markupPercent != null ? USD_TO_CAD * (1 + markupPercent / 100) : CONVERSION_FACTOR;
  return Math.round(usd * factor * 100) / 100;
}

export function formatCad(usd: number, markupPercent?: number): string {
  return `$${usdToCad(usd, markupPercent).toLocaleString('en-CA', { minimumFractionDigits: 2 })} CAD`;
}

/** Cylinder heads use 15% markup */
export const CYLINDER_HEAD_MARKUP = 15;
