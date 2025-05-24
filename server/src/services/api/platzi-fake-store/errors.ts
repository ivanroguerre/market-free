export class ApiError extends Error {
  constructor(
    public status: number,
    public body: any,
    message: string = 'Ocurrió un error al hacer la petición a la API'
  ) {
    super(message);
    this.name = 'ApiError'; 
  }
} 