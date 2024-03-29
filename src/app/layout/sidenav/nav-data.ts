import { INavbarData } from "./inavbar.interface";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'assignment',
    label: 'Administrar',
    items: [
      {
        routeLink: 'pages/companies-list',
        icon: 'apartment',
        label: 'Empresas',
      },
      {
        routeLink: 'pages/departments-list',
        icon: 'store',
        label: 'Departamentos',
      },
      {
        routeLink: 'pages/offices-list',
        icon: 'storefront',
        label: 'Sucursales',
      },
      {
        routeLink: 'pages/superGroups-list',
        icon: 'list_alt',
        label: 'SuperGrupos',
      },
      {
        routeLink: 'pages/products-list',
        icon: 'local_mall',
        label: 'Productos',
      },
      {
        routeLink: 'pages/products-types-list',
        icon: 'format_list_bulleted',
        label: 'Tipos de Producto',
      },
      {
        routeLink: 'pages/products-categories-list',
        icon: 'category',
        label: 'Cat. de Productos',
      },
      {
        routeLink: 'pages/brands-list',
        icon: 'devices',
        label: 'Marcas',
      },
      {
        routeLink: 'pages/vendor-list',
        icon: 'contact_emergency',
        label: 'Proveedores',
      },
    ]
  },
  {
  routeLink: 'dashboard',
  icon: 'admin_panel_settings',
  label: 'Seguridad',
  items: [
    {
      routeLink: 'security/user-list',
      icon: 'group',
      label: 'Usuarios',
    },
    {
      routeLink: 'security/role-list',
      icon: 'manage_accounts',
      label: 'Roles',
    },
  ]
}]

