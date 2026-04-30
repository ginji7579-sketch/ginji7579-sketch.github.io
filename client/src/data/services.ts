import { BarChart3, FileText, Globe, Package, Truck, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { serviceCatalog, type ServiceCatalogItem } from '@shared/services';

export type ServiceItem = ServiceCatalogItem & {
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    ...serviceCatalog[0],
    icon: Package,
  },
  {
    ...serviceCatalog[1],
    icon: Globe,
  },
  {
    ...serviceCatalog[2],
    icon: FileText,
  },
  {
    ...serviceCatalog[3],
    icon: Truck,
  },
  {
    ...serviceCatalog[4],
    icon: BarChart3,
  },
  {
    ...serviceCatalog[5],
    icon: Users,
  },
  {
    ...serviceCatalog[6],
    icon: Package,
  },
  {
    ...serviceCatalog[7],
    icon: Globe,
  },
  {
    ...serviceCatalog[8],
    icon: FileText,
  },
  {
    ...serviceCatalog[9],
    icon: Globe,
  },
  {
    ...serviceCatalog[10],
    icon: FileText,
  },
];
