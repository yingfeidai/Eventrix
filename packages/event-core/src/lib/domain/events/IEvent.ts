export interface IEvent<TType = string, TPayload = Record<string, any>, TMetadata = Record<string, any>> {
  id: string;
  type: TType;
  payload: TPayload;
  timestamp: Date;
  version?: string;
  metadata?: TMetadata;
}
