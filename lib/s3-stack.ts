import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as s3 from "aws-cdk-lib/aws-s3";
import * as kms from 'aws-cdk-lib/aws-kms';

export class S3BucketStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
   
    const encryptionKey = new kms.Key(this, 'BucketEncryptionKey'); // By default, the data in the bucket uses SSE-S3 encryption, but the task explicitly stated to enable encryption, so I changed the encryption type to SSE-KMS

    this.bucket = new s3.Bucket(this, "bucket",{
      bucketName: "example-bucket-vtrotski",
      versioned: false,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      encryption: s3.BucketEncryption.KMS,
      encryptionKey,
    });
  }
}  
