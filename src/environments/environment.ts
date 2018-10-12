// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://34.201.39.70/cloud9/workspace/endpoint/public/api/',
  apiUrl: 'http://34.226.121.54/cloud9/workspace/endpoint/public/api/',
  aws: {
    region: 'us-east-1',
    bucketName: 'seller-archivos',
    identityPoolId: 'us-east-1:9462865a-7f1b-4301-ab55-8ab8ab12b67a'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
