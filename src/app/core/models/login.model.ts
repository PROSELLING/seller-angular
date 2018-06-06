import { PermissionModel } from './permission.model';
import { RoleModel } from './role.model';
import { UserModel } from './user.model';

export interface LoginModel {
  permissions: PermissionModel[];
  roles: RoleModel[];
  token: string;
  user: UserModel;
}
