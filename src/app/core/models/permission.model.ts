export interface PermissionModel {
  id: number;
  module: string;
  name: string;
  description: string;
  display_name: string;
  created_at?: string;
  app?: string;
}
