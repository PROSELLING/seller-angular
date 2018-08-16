import { RoleModel } from './role.model';
import { BaseModel } from './base.model';

export interface UserModel extends BaseModel {
  email: string;
  username: string;
  name: string;
  last_name: string;
  imagen: string;
  birthday?: string;
  cargo?: string;
  cellphone?: string;
  deleted?: string;
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
}

