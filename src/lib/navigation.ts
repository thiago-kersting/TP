import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconHelp,
  IconSearch,
  IconSettings,
  IconMessageUser,
  IconReport,
} from "@tabler/icons-react";

interface INavItems {
  title: string;
  url?: string;
}
export interface INavMain extends INavItems {
  icon: any;
}

export interface INavUser {
  avatar: string;
  name: string;
  email: string;
}

export interface INavSecondary extends INavMain {}

export interface IDocuments extends INavMain {}

export interface NavigationData {
  user: INavUser;
  navMain: INavMain[];
  navSecondary: INavSecondary[];
  documents: IDocuments[];
}

export const navigationData: NavigationData = {
  user: {
    name: "Thiago Kersting Puls",
    email: "thiagokpuls@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Início",
      url: "/",
      icon: IconDashboard,
    },
    {
      title: "Análise de Perfil",
      url: "/profile-analysis",
      icon: IconChartBar,
    },
    {
      title: "Relatórios",
      url: "/reports",
      icon: IconReport,
    },
  ],
  navSecondary: [
    {
      title: "Configurações",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Ajuda",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Pesquisar",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      title: "Editar Gastos em Tabela",
      url: "/table-expenses",
      icon: IconDatabase,
    },
    {
      title: "Consultar Assistente",
      url: "#",
      icon: IconMessageUser,
    },
  ],
};

export function getPageTitle(pathname: string): string {
  // Busca em navMain
  const mainItem = navigationData.navMain.find((item) => item.url === pathname);
  if (mainItem) return mainItem.title;

  // Busca em navSecondary
  const secondaryItem = navigationData.navSecondary.find(
    (item) => item.url === pathname
  );
  if (secondaryItem) return secondaryItem.title;

  // Busca em documents
  const documentItem = navigationData.documents.find(
    (item) => item.url === pathname
  );
  if (documentItem) return documentItem.title;

  // Fallback
  return "Página";
}
