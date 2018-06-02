import { Injectable } from '@angular/core';
import { RoleModel } from '../models/role.model';

@Injectable()
export class RolesService {
  roles: RoleModel[];

  constructor() { }

  setRoles(roles: RoleModel[] ) {
    this.roles = roles;
  }
}
