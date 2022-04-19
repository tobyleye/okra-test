import { credentials } from "./constants";

export function validateOptions(options = {}) {
  return new Promise((resolve, reject) => {
    let { key, env, token } = options;
    if (!key || !env || !token) {
      return reject();
    }
    let envCredentials = credentials[env];
    let result =
      envCredentials &&
      envCredentials.key === key &&
      envCredentials.token === token;
      
    result ? resolve() : reject();
  });
}
