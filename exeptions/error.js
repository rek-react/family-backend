export class ApiError extends Error {
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static badRequest(message, errors) {
    return new ApiError(400, message, errors);
  }
  static notFound(message, errors) {
    return new ApiError(404, message, errors);
  }
  Forbidden;
}
