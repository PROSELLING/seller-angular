import { Injectable } from '@angular/core';
import { PermissionModel } from '../models/permission.model';

@Injectable()
export class PermissionsService {
  permissions: PermissionModel[];

  constructor() { }

  setPermissions(permissions: PermissionModel[] ) {
    this.permissions = permissions;
  }
}
