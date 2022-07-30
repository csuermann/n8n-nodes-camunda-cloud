import { ICredentialType, INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export class CamundaCloudApi implements ICredentialType {
	name = 'camundaCloudApi';
	displayName = 'Camunda Cloud API';
	documentationUrl = 'camundaCloud';
	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Cluster Region',
			name: 'clusterRegion',
			type: 'string',
			default: 'bru-2',
		},
	];
}
