import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class SetupVpcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.CfnVPC(this, 'CreateVpc', {
      cidrBlock: '10.0.0.0/16',
      tags: [{ key: 'Name', value: 'sample-vpc' }],
    });
  }
}
