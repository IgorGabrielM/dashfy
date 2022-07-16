export interface IResponse<T> {
  success: boolean;
  data: T;
  errors: Record<string, string>[];
  metadata: Record<string, string>;
}
