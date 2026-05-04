import { IdCard, Palette, Megaphone, Heart, Star, Newspaper, Mic2, Share2, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { serviceCatalog, type ServiceCatalogItem } from '@shared/services';

export type ServiceItem = ServiceCatalogItem & {
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    ...serviceCatalog[0],
    icon: IdCard,
  },
  {
    ...serviceCatalog[1],
    icon: Palette,
  },
  {
    ...serviceCatalog[2],
    icon: Megaphone,
  },
  {
    ...serviceCatalog[3],
    icon: Heart,
  },
  {
    ...serviceCatalog[4],
    icon: Star,
  },
  {
    ...serviceCatalog[5],
    icon: Newspaper,
  },
  {
    ...serviceCatalog[6],
    icon: Mic2,
  },
  {
    ...serviceCatalog[7],
    icon: Share2,
  },
  {
    ...serviceCatalog[8],
    icon: Target,
  },
  {
    ...serviceCatalog[9],
    icon: Heart,
  },
  {
    ...serviceCatalog[10],
    icon: Star,
  },
];
