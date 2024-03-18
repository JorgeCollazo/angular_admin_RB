export interface User {
  status: number;
  usuario_id: number;
  rol_id: string; // number
  email: string;
  contrasena: string;
  cedula: string,
  is_admin: boolean;
}
