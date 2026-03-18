// ============================================================
// Eskimo Auto & Truck Parts — Business Constants
// ============================================================
// All real business information in one place.
// Import from here instead of hardcoding in components.

export const BUSINESS = {
  name: 'Eskimo Auto & Truck Parts',
  phone: '(780) 473-2424',
  phoneRaw: '7804732424',
  email: 'parts@eskimoinfo.com',
  address: '12940 53 St NW',
  city: 'Edmonton',
  province: 'AB',
  postalCode: 'T5A 0B9',
  fullAddress: '12940 53 St NW, Edmonton, AB T5A 0B9',
  domain: 'eskimoautoandtruckparts.com',
  url: 'https://www.eskimoautoandtruckparts.com',
  established: 1984,
  establishedText: 'Since 1984',
  // TODO: Confirm hours with business
  hours: {
    weekday: 'Mon–Fri: 8:00 AM – 5:00 PM',
    saturday: 'Sat: 9:00 AM – 2:00 PM',
    sunday: 'Sun: Closed',
  },
  serviceAreas: [
    'Edmonton',
    'Sherwood Park',
    'St. Albert',
    'Spruce Grove',
    'Leduc',
    'Fort Saskatchewan',
    'Beaumont',
    'Stony Plain',
  ],
} as const;
