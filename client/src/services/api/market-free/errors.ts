export class ApiError extends Error {
  constructor(
    public status: number,
    public data: Record<string, unknown>,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
} 