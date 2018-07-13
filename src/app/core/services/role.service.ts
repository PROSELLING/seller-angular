import { Injectable } from '@angular/core';
import { RoleModel } from '../models/role.model';

@Injectable()
export class RoleService {
  roles: RoleModel[];

  constructor() { }

  setRoles(roles: RoleModel[] ) {
    this.roles = roles;
  }
}
