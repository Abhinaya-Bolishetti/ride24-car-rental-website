// Everything the owner may want to change lives in this file.
export const BUSINESS = {
  name: "Ride24 Rentals",
  city: "Hyderabad",
  primary: "916303251021",   // WhatsApp format: 91 + number
  alternate: "917670912858",
};

export const CAR = {
  name: "Swift Dzire Tour S",
  year: "2026",
  fuel: "CNG",
  seats: "4 passengers + driver",
  ac: "Air-conditioned",
};

// Prices are starting prices - confirm with owner after EMI/cost calculation.
export const PACKAGES = [
  { id: "3-hour", label: "3 Hours", price: 999, km: 30, phone: "primary" },
  { id: "5-hour", label: "5 Hours", price: 1499, km: 50, phone: "alternate" },
  { id: "10-hour", label: "10 Hours", price: 2499, km: 100, phone: "primary", popular: true },
  { id: "24-hour", label: "24 Hours", price: 4499, km: 200, phone: "primary" },
];

export const EXTRAS = { perKm: 15, perHour: 200 };

export const OFFERS = [
  "Priority booking for first-time customers",
  "Free 15-minute waiting grace",
  "Special rates for repeat customers",
  "Advance bookings get priority",
];
