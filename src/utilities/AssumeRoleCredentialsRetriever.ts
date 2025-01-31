import { STSClient, AssumeRoleCommand } from '@aws-sdk/client-sts'
import type { ICredentials } from './types.js'

/**
 * Assume role credentials retriever.
 * @param credentials Credentials for signing process.
 * @param roleArn Arn string of the role that is getting assumed.
 */
export const retrieveAssumeRoleCredentials = async (
  roleArn: string,
  credentials?: ICredentials
) =>
  await new STSClient({
    region: 'ap-northeast-1',
    ...(credentials && { credentials: credentials })
  }).send(new AssumeRoleCommand({
    RoleArn        : roleArn,
    RoleSessionName: 'DefaultAssumedRoleSession'
  }))
