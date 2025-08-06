export interface Organization {
  name: string;
  logoUrl: string;
}

export interface CurrentOrganization {
  name: string;
  imageUrl: string;
  description: string;
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