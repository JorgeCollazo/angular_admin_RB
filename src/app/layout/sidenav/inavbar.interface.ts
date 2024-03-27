export interface INavbarData {
  routeLink: string;
  icon?: string;
  label: string;
  class?: string;
  tooltip?: string;
  expanded?: boolean;
  items?: INavbarData[];
}
