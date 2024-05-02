export type PricingCardData = {
  title: string;
  subtitle: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  isNew?: boolean;
  redColorTitle?: boolean;
  icons?: { [key: string]: 'check' | 'cross' };
  aosDelay: string,
  dataAos: string;
};