export type ApiError = {
  errors?: {
    [key: string]: {
      name: string;
      message: string;
      properties: {
        message: string;
        type: string;
        path: string;
        value: string;
      };
      kind: string;
      path: string;
      value: string;
    } | undefined;
  };
  _message?: string;
  name?: string;
  message: string;
};
// {
//     "errors": {
//         "email": {
//             "name": "ValidatorError",
//             "message": "Path `email` is required.",
//             "properties": {
//                 "message": "Path `email` is required.",
//                 "type": "required",
//                 "path": "email",
//                 "value": ""
//             },
//             "kind": "required",
//             "path": "email",
//             "value": ""
//         }
//     },
//     "_message": "User validation failed",
//     "name": "ValidationError",
//     "message": "User validation failed: email: Path `email` is required."
// }