#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SetupVpcStack } from '../lib/setup-vpc-stack';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();
const env = {
  account: process.env.CDK_DEPLOY_ACCOUNT,
  region: process.env.CDK_DEPLOY_REGION,
};

new SetupVpcStack(app, 'SetupVpcStack', { env });
