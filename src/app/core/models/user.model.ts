import { RoleModel } from './role.model';

export interface UserModel {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  imagen: string;
  birthday?: string;
  cargo?: string;
  cellphone?: string;
  created_at?: string;
  deleted?: string;
  deleted_at?: string;
  dni?: string;
  facebook?: string;
  gender?: string;
  gmail?: string;
  id_departamento?: string;
  id_empresa?: number;
  id_grupo?: number;
  is_admin?: string;
  is_contacto?: string;
  is_owner?: string;
  linkedin?: string;
  phone?: string;
  pinford?: string;
  roles?: RoleModel[];
  status?: string;
  token?: string;
  updated_at?: string;
}

