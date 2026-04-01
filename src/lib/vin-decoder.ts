// ═══════════════════════════════════════════════════════════
// VIN Decoder Utility
// Modern (1981+): NHTSA vPIC API
// Classic (1960–1980): Client-side lookup tables
// ═══════════════════════════════════════════════════════════

export type VINType = 'modern' | 'classic' | 'unknown';

export interface DecodedVehicle {
  type: VINType;
  vin: string;
  year?: string;
  make?: string;
  model?: string;
  trim?: string;
  engine?: string;
  displacement?: string;
  cylinders?: string;
  fuelType?: string;
  transmission?: string;
  drivetrain?: string;
  bodyStyle?: string;
  doors?: string;
  country?: string;
  plantCity?: string;
  plantState?: string;
  assemblyPlant?: string;
  division?: string;
  engineCode?: string;
  bodyCode?: string;
  sequenceNumber?: string;
  notes?: string;
  error?: string;
}

// ─── Detection ──────────────────────────────────────────────

export function detectVINType(vin: string): VINType {
  const cleaned = vin.trim().toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
  if (cleaned.length === 17) return 'modern';
  if (cleaned.length >= 5 && cleaned.length <= 13) return 'classic';
  return 'unknown';
}

// ─── Modern VIN (NHTSA API) ────────────────────────────────

export async function decodeModernVIN(vin: string): Promise<DecodedVehicle> {
  const cleaned = vin.trim().toUpperCase();
  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${cleaned}?format=json`
    );
    if (!res.ok) throw new Error('NHTSA API request failed');
    const data = await res.json();
    const r = data.Results?.[0];
    if (!r || r.ErrorCode?.includes('1')) {
      return { type: 'modern', vin: cleaned, error: r?.ErrorText || 'VIN not found in NHTSA database.' };
    }
    return {
      type: 'modern',
      vin: cleaned,
      year: r.ModelYear || undefined,
      make: r.Make || undefined,
      model: r.Model || undefined,
      trim: r.Trim || undefined,
      engine: [r.EngineModel, r.EngineCylinders ? `${r.EngineCylinders}-cyl` : '', r.DisplacementL ? `${r.DisplacementL}L` : ''].filter(Boolean).join(' ') || undefined,
      displacement: r.DisplacementL ? `${r.DisplacementL}L` : undefined,
      cylinders: r.EngineCylinders || undefined,
      fuelType: r.FuelTypePrimary || undefined,
      transmission: r.TransmissionStyle || undefined,
      drivetrain: r.DriveType || undefined,
      bodyStyle: r.BodyClass || undefined,
      doors: r.Doors || undefined,
      country: r.PlantCountry || undefined,
      plantCity: r.PlantCity || undefined,
      plantState: r.PlantState || undefined,
    };
  } catch {
    return { type: 'modern', vin: cleaned, error: 'Failed to reach the NHTSA database. Please try again.' };
  }
}

// ─── Classic VIN Lookup Tables ─────────────────────────────

// GM Division Codes (1st digit, 1960-1980)
const GM_DIVISIONS: Record<string, string> = {
  '1': 'Chevrolet', '2': 'Pontiac', '3': 'Oldsmobile',
  '4': 'Buick', '5': 'Cadillac', '6': 'Cadillac',
};

// GM Model Year Codes (varies by era)
const GM_YEAR_CODES: Record<string, string> = {
  '0': '1960/1970/1980', '1': '1961/1971', '2': '1962/1972',
  '3': '1963/1973', '4': '1964/1974', '5': '1965/1975',
  '6': '1966/1976', '7': '1967/1977', '8': '1968/1978',
  '9': '1969/1979',
};

// GM Assembly Plants (common)
const GM_PLANTS: Record<string, string> = {
  'A': 'Atlanta, GA', 'B': 'Baltimore, MD', 'C': 'Southgate, CA',
  'D': 'Doraville, GA', 'F': 'Flint, MI', 'G': 'Framingham, MA',
  'J': 'Janesville, WI', 'K': 'Kansas City, MO', 'L': 'Van Nuys, CA',
  'N': 'Norwood, OH', 'R': 'Arlington, TX', 'S': 'St. Louis, MO',
  'T': 'Tarrytown, NY', 'U': 'Lordstown, OH', 'W': 'Willow Run, MI',
  'Z': 'Fremont, CA', '1': 'Oshawa, ON', '2': 'Ste-Thérèse, QC',
};

// GM Engine Codes (common V8s, 1960-1980)
const GM_ENGINE_CODES: Record<string, string> = {
  // Chevrolet small block / big block
  'F': '307ci V8', 'H': '350ci V8 (L65)', 'K': '350ci V8 (L48)',
  'L': '350ci V8 (LT-1)', 'U': '350ci V8 (L82)', 'T': '350ci V8',
  'R': '350ci V8 (L46)', 'S': '396ci V8', 'W': '396ci V8 (L78)',
  'P': '400ci V8 (L48)', 'A': '400ci V8', 'Y': '454ci V8 (LS5)',
  'Z': '454ci V8 (LS6)',
  // Inline 6
  'D': '250ci I6', 'Q': '230ci I6',
};

// Ford Model Year Codes
const FORD_YEAR_CODES: Record<string, string> = {
  '0': '1960/1970/1980', '1': '1961/1971', '2': '1962/1972',
  '3': '1963/1973', '4': '1964/1974', '5': '1965/1975',
  '6': '1966/1976', '7': '1967/1977', '8': '1968/1978',
  '9': '1969/1979',
};

// Ford Assembly Plants
const FORD_PLANTS: Record<string, string> = {
  'A': 'Atlanta, GA', 'B': 'Oakville, ON', 'C': 'Ontario, ON',
  'D': 'Dallas, TX', 'E': 'Mahwah, NJ', 'F': 'Dearborn, MI',
  'G': 'Chicago, IL', 'H': 'Lorain, OH', 'J': 'Los Angeles, CA',
  'K': 'Kansas City, MO', 'N': 'Norfolk, VA', 'P': 'Twin Cities, MN',
  'R': 'San Jose, CA', 'S': 'Allen Park, MI (Pilot)', 'T': 'Metuchen, NJ',
  'U': 'Louisville, KY', 'W': 'Wayne, MI', 'Y': 'Wixom, MI',
  'Z': 'St. Louis, MO',
};

// Ford Engine Codes (common)
const FORD_ENGINE_CODES: Record<string, string> = {
  'T': '200ci I6', 'U': '200ci I6', 'L': '250ci I6',
  'C': '289ci V8 (2V)', 'D': '289ci V8 (4V)',
  'A': '289ci V8 (HiPo)', 'K': '289ci V8 (HiPo)',
  'F': '302ci V8 (2V)', 'G': '302ci V8 (4V)',
  'J': '302ci Boss V8', 'H': '351ci Windsor V8 (2V)',
  'M': '351ci Cleveland V8 (2V)', 'Q': '351ci Cleveland V8 (4V)',
  'R': '351ci Boss V8', 'S': '390ci V8 (2V)',
  'Z': '390ci V8 (4V)', 'P': '428ci V8 (CJ)',
  'V': '440ci V8', 'N': '429ci V8', 'W': '427ci V8',
};

// Mopar Division Codes
const MOPAR_DIVISIONS: Record<string, string> = {
  'C': 'Chrysler', 'D': 'Dodge', 'P': 'Plymouth',
  'L': 'Plymouth (Valiant/Barracuda)', 'R': 'Imperial',
  'W': 'Dodge Truck', 'T': 'Dodge Truck',
};

// Mopar Year Codes
const MOPAR_YEAR_CODES: Record<string, string> = {
  '0': '1960/1970/1980', '1': '1961/1971', '2': '1962/1972',
  '3': '1963/1973', '4': '1964/1974', '5': '1965/1975',
  '6': '1966/1976', '7': '1967/1977', '8': '1968/1978',
  '9': '1969/1979',
};

// Mopar Assembly Plants
const MOPAR_PLANTS: Record<string, string> = {
  'A': 'Lynch Road, MI', 'B': 'Hamtramck, MI (Dodge Main)',
  'C': 'Jefferson Ave, MI', 'D': 'Belvidere, IL',
  'E': 'Los Angeles, CA', 'F': 'Newark, DE',
  'G': 'St. Louis, MO', 'H': 'New Stanton, PA',
  'P': 'Windsor, ON', 'R': 'Windsor, ON (Pilette Rd)',
};

// Mopar Engine Codes (common)
const MOPAR_ENGINE_CODES: Record<string, string> = {
  'A': '225ci Slant-6', 'B': '225ci Slant-6',
  'C': '273ci V8', 'D': '273ci V8 (4bbl)',
  'E': '318ci V8', 'F': '318ci V8 (4bbl)',
  'G': '340ci V8', 'H': '340ci V8 (Six-Pack)',
  'J': '360ci V8', 'K': '360ci V8 (4bbl)',
  'L': '383ci V8 (2bbl)', 'M': '383ci V8 (4bbl)',
  'N': '440ci V8 (4bbl)', 'P': '440ci V8 (Six-Pack)',
  'R': '426ci Hemi V8', 'U': '440ci V8 (HP)',
  'T': '440ci V8',
};

// ─── Classic Decode Logic ──────────────────────────────────

function tryDecodeGM(vin: string): DecodedVehicle | null {
  // GM VINs: typically Division + Year + Plant + Body + Sequence
  // e.g., 1N37K9S100001 = Chevy, Camaro, 1969, 350 V8, Norwood
  const div = GM_DIVISIONS[vin[0]];
  if (!div) return null;

  const yearChar = vin.length >= 5 ? vin[vin.length >= 10 ? 4 : 2] : undefined;
  const plantChar = vin.length >= 6 ? vin[vin.length >= 10 ? 5 : 3] : undefined;
  const engineChar = vin.length >= 5 ? vin[3] : undefined;

  return {
    type: 'classic',
    vin,
    division: div,
    make: div,
    year: yearChar ? GM_YEAR_CODES[yearChar] : undefined,
    assemblyPlant: plantChar ? GM_PLANTS[plantChar] : undefined,
    engineCode: engineChar || undefined,
    engine: engineChar ? GM_ENGINE_CODES[engineChar] : undefined,
    bodyCode: vin.length >= 4 ? vin.substring(1, 3) : undefined,
    sequenceNumber: vin.length >= 8 ? vin.substring(6) : undefined,
    notes: `GM ${div} VIN detected. Pre-1981 VINs were not federally standardized; some fields may be approximate.`,
  };
}

function tryDecodeFord(vin: string): DecodedVehicle | null {
  // Ford VINs: typically Year + Plant + Body + Engine + Sequence
  // e.g., 9F02F100001 = 1969, Dearborn, Mustang, 302 V8
  const yearChar = vin[0];
  const plantChar = vin.length >= 2 ? vin[1] : undefined;
  const engineChar = vin.length >= 5 ? vin[4] : undefined;

  if (!plantChar || !FORD_PLANTS[plantChar]) return null;

  return {
    type: 'classic',
    vin,
    make: 'Ford',
    year: yearChar ? FORD_YEAR_CODES[yearChar] : undefined,
    assemblyPlant: plantChar ? FORD_PLANTS[plantChar] : undefined,
    bodyCode: vin.length >= 4 ? vin.substring(2, 4) : undefined,
    engineCode: engineChar || undefined,
    engine: engineChar ? FORD_ENGINE_CODES[engineChar] : undefined,
    sequenceNumber: vin.length >= 6 ? vin.substring(5) : undefined,
    notes: 'Ford VIN detected. Pre-1981 VINs were not federally standardized; some fields may be approximate.',
  };
}

function tryDecodeMopar(vin: string): DecodedVehicle | null {
  // Mopar VINs: Division + Body + Year + Plant + Sequence
  // e.g., RS23R9B100001 = Imperial, 1969, Hamtramck, 426 Hemi
  const divChar = vin[0];
  const div = MOPAR_DIVISIONS[divChar];
  if (!div) return null;

  // Try to find year char (position varies)
  const yearChar = vin.length >= 5 ? vin[4] : vin.length >= 3 ? vin[2] : undefined;
  const plantChar = vin.length >= 6 ? vin[5] : vin.length >= 4 ? vin[3] : undefined;
  const engineChar = vin.length >= 4 ? vin[3] : undefined;

  return {
    type: 'classic',
    vin,
    division: div,
    make: div,
    year: yearChar ? MOPAR_YEAR_CODES[yearChar] : undefined,
    assemblyPlant: plantChar ? MOPAR_PLANTS[plantChar] : undefined,
    bodyCode: vin.length >= 4 ? vin.substring(1, 4) : undefined,
    engineCode: engineChar || undefined,
    engine: engineChar ? MOPAR_ENGINE_CODES[engineChar] : undefined,
    sequenceNumber: vin.length >= 7 ? vin.substring(6) : undefined,
    notes: `Mopar ${div} VIN detected. Pre-1981 VINs were not federally standardized; some fields may be approximate.`,
  };
}

export function decodeClassicVIN(vin: string): DecodedVehicle {
  const cleaned = vin.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');

  // Try GM first (starts with 1-6)
  if (/^[1-6]/.test(cleaned)) {
    const result = tryDecodeGM(cleaned);
    if (result) return result;
  }

  // Try Mopar (starts with C, D, P, L, R, W, T)
  if (/^[CDPLRWT]/.test(cleaned)) {
    const result = tryDecodeMopar(cleaned);
    if (result) return result;
  }

  // Try Ford (year digit + plant letter pattern)
  if (/^[0-9][A-Z]/.test(cleaned)) {
    const result = tryDecodeFord(cleaned);
    if (result) return result;
  }

  // Fallback: try all decoders
  const gm = tryDecodeGM(cleaned);
  if (gm) return gm;
  const mopar = tryDecodeMopar(cleaned);
  if (mopar) return mopar;
  const ford = tryDecodeFord(cleaned);
  if (ford) return ford;

  return {
    type: 'classic',
    vin: cleaned,
    notes: 'Could not identify the manufacturer from this VIN. Pre-1981 VINs varied widely by manufacturer. Try entering just the key digits, or contact us for help identifying your vehicle.',
  };
}

// ─── Main Decode Function ──────────────────────────────────

export async function decodeVIN(vin: string): Promise<DecodedVehicle> {
  const cleaned = vin.trim().toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '');
  const type = detectVINType(cleaned);

  if (type === 'modern') return decodeModernVIN(cleaned);
  if (type === 'classic') return decodeClassicVIN(cleaned);

  return {
    type: 'unknown',
    vin: cleaned,
    error: 'Please enter a valid VIN. Modern VINs are 17 characters. Classic VINs (1960–1980) are typically 5–13 characters.',
  };
}
