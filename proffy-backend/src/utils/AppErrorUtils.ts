
export type StatusCode = '400' | '401'


class AppError {
    public readonly message: string;
  
    public readonly statusCode: number;
  
    constructor(message: string, statusCode:StatusCode) {
      this.message = String(message);
      this.statusCode = Number(statusCode);
    }

    static status(type: StatusCode){
      return Number(type)
    }
  }
  
  export default AppError;
  