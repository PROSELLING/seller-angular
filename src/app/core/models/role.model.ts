import { PermissionModel } from './permission.model';

export interface RoleModel {
  id: number;
  id_empresa: number;
  display_name: string;
  description: string;
  created_at?: string;
  is_root?: string;
  parent?: string;
  permissions: PermissionModel[];
}
