import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

const AWSService = AWS;
const region = environment.aws.region;
const bucketName = environment.aws.bucketName;
const identityPoolId = environment.aws.identityPoolId;

export interface BucketFile {
  Bucket: string;
  Key: string;
  Location: string;
  key: string;
}

@Injectable()
export class AwsService {
  s3: any;
  private loadingFile: Subject<BucketFile> = new Subject();

  constructor() {
    // Configures the AWS service and initial authorization
    AWSService.config.update({
      region: region,
      credentials: new AWSService.CognitoIdentityCredentials({
        IdentityPoolId: identityPoolId
      })
    });

    // adds the S3 service, make sure the api version and bucket are correct
    this.s3 = new AWSService.S3({
      apiVersion: '2006-03-01',
      params: {Bucket: bucketName}
    });
  }

  multipleFileUpload(files: FileList, folder = '') {
    console.log('files', files);
    let i = 0;
    const filesData: BucketFile[] = [];
    console.log('array', Array.from(files));
    this.singleFileUpload(files[0]).subscribe(data => console.log('data', data));
    this.singleFileUpload(files[1]).subscribe(data => console.log('data', data));
    /*Array.from(files).map((file: File) => {
      i = i + 1;
      console.log('i', i, file);
      this.file$.subscribe(data => console.log('file$', data));
      this.singleFileUpload(file, folder)
        .subscribe(bucketFile => {
          if (bucketFile) {
            filesData.push(bucketFile);
            console.log('inside array', filesData);
          }
        });
    });*/
  }

  singleFileUpload(fileInput: File, folder = ''): Observable<BucketFile> {

    this.s3.upload(
      {Key: `${folder}/${fileInput.name}`, Bucket: bucketName, Body: fileInput, ACL: 'public-read'},
      (err, fileData: BucketFile) => {
        if (err) {
          console.log(err, 'there was an error uploading your file');
        } else if (fileData) {
          console.log('resolved');
          this.loadingFile.next(fileData);
        }
      });
    return this.loadingFile;

  }

  deleteFile(fileData: BucketFile) {
    const params = {
      Bucket: bucketName,
      Key: fileData.Key
    };

    this.s3.deleteObject(params, (err, data) => {
      if (err) {
        console.log('error occurred', err);
      } else if (data) {
        console.log('deleted', data);
      }
    });
  }
}
