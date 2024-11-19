export interface IPayload<ResultType = any[]> {
	metadata: Metadata;
	result: ResultType[];
}

export interface Metadata {
	page: number;
	pageLimit: number;
	count: number;
	totalItems?: number;
}
