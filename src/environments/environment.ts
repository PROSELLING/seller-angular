// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://34.201.39.70/cloud9/workspace/endpoint/public/api/',
  aws: {
    region: 'us-east-1',
    bucketName: 'samshel-library',
    identityPoolId: 'us-east-1:8ae6abb0-353d-439f-a4e9-cae14307b60e'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
