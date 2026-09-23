// Dados transcritos do material fornecido. Validar com Hian antes de publicar.
export const profile = {
  name: "Hian Vieira",
  instagram: "https://www.instagram.com/hiianvieira/",
  instagramHandle: "@hiianvieira",
  phone: "+55 (81) 99719-1612",
  whatsapp: "5581997191612",
  education: "Educação Física pela Escola Superior de Educação Física da Universidade de Pernambuco (ESEF/UPE).",
  cref: null as string | null,
  portrait: null as string | null,
  anamnesisUrl: null as string | null,
};

export const plans = [
  { id: "2x", frequency: 2, lessons: 8, price: 635 },
  { id: "3x", frequency: 3, lessons: 12, price: null },
  { id: "4x", frequency: 4, lessons: 16, price: null },
  { id: "5x", frequency: 5, lessons: 20, price: 1475 },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;
}
