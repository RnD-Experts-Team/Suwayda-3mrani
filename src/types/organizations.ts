export interface Organization {
  name: string;
  logoUrl: string;
  id: number;
  organizationId: string;
  type: "organizations" | "initiatives";
}

export interface CurrentOrganization {
  name: string;
  imageUrl: string;
  description: string;
  type: "organizations" | "initiatives";
  categories: (string | null)[];
  organizationId: string;
}

export interface ActionButton {
  text: string;
  url: string;
}

export interface OrganizationsLanguageData {
  relatedOrganizations: Organization[];
  currentOrganization: CurrentOrganization;
  actionButtons: ActionButton[];
  pageTitle: string;
}

export interface OrganizationsData {
  en: OrganizationsLanguageData;
  ar: OrganizationsLanguageData;
}
