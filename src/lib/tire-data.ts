// Tire size lookup tables — real-world width → aspect → rim combinations
export const TIRE_WIDTHS = [
  145, 155, 165, 175, 185, 195, 205, 215, 225, 235,
  245, 255, 265, 275, 285, 295, 305, 315, 325, 335, 345
] as const;

// Width → valid aspect ratios
export const WIDTH_TO_ASPECTS: Record<number, number[]> = {
  145: [65, 70, 80],
  155: [60, 65, 70, 80],
  165: [55, 60, 65, 70, 80],
  175: [55, 60, 65, 70],
  185: [55, 60, 65, 70, 75],
  195: [45, 50, 55, 60, 65, 70, 75],
  205: [40, 45, 50, 55, 60, 65, 70, 75],
  215: [40, 45, 50, 55, 60, 65, 70, 75],
  225: [35, 40, 45, 50, 55, 60, 65, 70, 75],
  235: [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
  245: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
  255: [30, 35, 40, 45, 50, 55, 60, 65, 70],
  265: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
  275: [30, 35, 40, 45, 50, 55, 60, 65, 70],
  285: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
  295: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
  305: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
  315: [30, 35, 40, 70, 75],
  325: [25, 30, 35, 45, 50, 60, 65],
  335: [25, 30, 35],
  345: [25, 30, 35],
};

// Aspect → valid rim diameters (common combinations)
export const ASPECT_TO_RIMS: Record<number, number[]> = {
  25: [20, 21, 22],
  30: [18, 19, 20, 21, 22],
  35: [17, 18, 19, 20, 21, 22],
  40: [16, 17, 18, 19, 20],
  45: [15, 16, 17, 18, 19, 20],
  50: [14, 15, 16, 17, 18, 19, 20],
  55: [14, 15, 16, 17, 18, 19, 20],
  60: [14, 15, 16, 17, 18, 19, 20],
  65: [14, 15, 16, 17, 18],
  70: [14, 15, 16, 17, 18],
  75: [15, 16, 17],
  80: [13, 14, 15, 16],
  85: [16],
};

// Brand → models
export const TIRE_BRANDS: Record<string, string[]> = {
  'Goodyear': ['Wrangler', 'Eagle', 'Assurance', 'UltraGrip', 'Wrangler DuraTrac', 'Wrangler AT/S', 'Eagle F1', 'Assurance WeatherReady', 'WinterCommand'],
  'Michelin': ['Defender', 'Pilot Sport', 'X-Ice', 'LTX', 'Premier', 'CrossClimate', 'Latitude', 'Primacy', 'X-Ice Snow'],
  'Bridgestone': ['Blizzak', 'Dueler', 'Turanza', 'Potenza', 'Ecopia', 'DriveGuard', 'Alenza', 'WeatherPeak'],
  'Continental': ['ExtremeContact', 'VikingContact', 'CrossContact', 'PureContact', 'TrueContact', 'TerrainContact', 'WinterContact'],
  'Pirelli': ['Scorpion', 'P Zero', 'Cinturato', 'Winter Sottozero', 'Ice Zero', 'Scorpion Verde'],
  'Firestone': ['Destination', 'Champion', 'Winterforce', 'All Season', 'Transforce', 'WeatherGrip'],
  'BFGoodrich': ['All-Terrain T/A', 'Mud-Terrain T/A', 'Advantage', 'Trail-Terrain', 'Winter T/A'],
  'Hankook': ['Dynapro', 'Ventus', 'Kinergy', 'Winter i*cept', 'i*Pike'],
  'Yokohama': ['Geolandar', 'Avid', 'ADVAN', 'BluEarth', 'iceGUARD'],
  'Toyo': ['Open Country', 'Proxes', 'Observe', 'Celsius', 'Extensa'],
  'Cooper': ['Discoverer', 'Evolution', 'Zeon', 'Adventurer'],
  'General': ['Grabber', 'AltiMAX', 'G-MAX'],
  'Nokian': ['Hakkapeliitta', 'WR', 'Outpost', 'One', 'Remedy'],
  'Falken': ['Wildpeak', 'Ziex', 'Azenis', 'EuroWinter'],
  'Kumho': ['Crugen', 'Ecsta', 'Solus', 'WinterCraft'],
  'Nexen': ['Roadian', 'N Priz', 'Winguard', 'Aria'],
  'Nitto': ['Ridge Grappler', 'Terra Grappler', 'NT555', 'Recon Grappler'],
  'Mastercraft': ['Courser', 'Stratus', 'Glacier Trex'],
  'Uniroyal': ['Tiger Paw', 'Laredo'],
  'Motomaster': ['Total Terrain', 'Winter Edge', 'SE3+'],
};

export const BRAND_NAMES = Object.keys(TIRE_BRANDS).sort();

export const SEASONS = ['All-Season', 'Winter', 'Summer', 'All-Weather'] as const;

export const SPEED_RATINGS = [
  { value: 'L', label: 'L (120 km/h)' },
  { value: 'M', label: 'M (130 km/h)' },
  { value: 'N', label: 'N (140 km/h)' },
  { value: 'P', label: 'P (150 km/h)' },
  { value: 'Q', label: 'Q (160 km/h)' },
  { value: 'R', label: 'R (170 km/h)' },
  { value: 'S', label: 'S (180 km/h)' },
  { value: 'T', label: 'T (190 km/h)' },
  { value: 'U', label: 'U (200 km/h)' },
  { value: 'H', label: 'H (210 km/h)' },
  { value: 'V', label: 'V (240 km/h)' },
  { value: 'W', label: 'W (270 km/h)' },
  { value: 'Y', label: 'Y (300 km/h)' },
  { value: 'Z', label: 'Z (240+ km/h)' },
] as const;

export const CONDITIONS = ['New', 'Like New', 'Good', 'Fair'] as const;

export function mmTo32nds(mm: number): number {
  return Math.round(mm * 1.2598 * 10) / 10;
}

export function thirtySecondsToMm(thirtySeconds: number): number {
  return Math.round((thirtySeconds / 1.2598) * 10) / 10;
}
