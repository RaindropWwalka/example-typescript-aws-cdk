# TypeScript AWS CDK project

This project is required to deploy a bucket on AWS using AWS CDK using TypeScript.

## Prerequisites

* Operating system Linux Ubuntu/Debian or macOS ([macOS requires brew already installed](https://brew.sh/))
*  AWS account and [credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey)

## Preparing the local environment

### 1. Install aws-cli for configuration profile

Linux:
```bash
sudo apt install awscli
```
macOS:
```bash
brew install awscli
```

### 2. Setting up aws-cli profile
```bash
aws configure
```

### 3. Installing NodeJS

Linux:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs
```
macOS:
```bash
brew install node@20
```
### 4. Installing npm package
```bash
npm install PATH_TO_REPOSITORY/example-aws-cdk
```
Example: `npm install /home/vtrotski/example-aws-cdk`


## Prepare AWS environment

 [Bootstrapping](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html) provisions resources in your environment such as an Amazon Simple Storage Service (Amazon S3) bucket for storing files and AWS Identity and Access Management (IAM) roles that grant permissions needed to perform deployments. These resources get provisioned in an AWS CloudFormation stack, called the bootstrap stack. It is usually named CDKToolkit. Like any AWS CloudFormation stack, it will appear in the AWS CloudFormation console of your environment once it has been deployed.
```bash
npx cdk bootstrap
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
