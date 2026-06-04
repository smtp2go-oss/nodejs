# Changelog

## [1.0.0] - Unreleased

### Breaking Changes

- **Error handling**: API errors now throw an `SMTP2GOError` instead of being returned as the response value. Update any code that checked the return value for errors to use `try/catch` instead.

  ```js
  // Before
  const result = await smtp2go.client().post(endpoint, body);
  if (result?.data?.error) { ... }

  // After
  try {
    const result = await smtp2go.client().post(endpoint, body);
  } catch (e) {
    // e is an SMTP2GOError with .status and .response properties
  }
  ```

- **`MailService` renamed to `NodeMailService`**: The `MailService` named export has been replaced by `NodeMailService`. Update any direct imports accordingly. The `smtp2go.mail()` factory continues to work unchanged.

  ```js
  // Before
  import { MailService } from 'smtp2go-nodejs';

  // After
  import { NodeMailService } from 'smtp2go-nodejs';
  ```

- **ESM only — CommonJS (`require`) no longer supported**: The package is now `"type": "module"`. Replace `require('smtp2go-nodejs')` with an ESM `import`.

  ```js
  // Before
  const smtp2go = require('smtp2go-nodejs');

  // After
  import smtp2go from 'smtp2go-nodejs';
  ```

- **Node.js version requirement**: Node.js `>= 18.14.0` is now required. Versions 16 and below are no longer supported.

- **`inline()` web signature changed**: In the browser build, the second argument to `inline(cid, file)` is now a `File` object instead of a filepath string.

### New Features

- **Browser build**: A dedicated browser-compatible bundle (`index.browser.js`) is now included, with `webMailService` and web-native attachment handling via the `File` API.
- **`SMTP2GOError` class**: Exported for use in `instanceof` checks and typed error handling. Includes `.status` (HTTP status code) and `.response` (API response body) properties.
- **`service()` accepts optional arguments**: `smtp2go.service(endpoint, requestBody, method)` now accepts an optional pre-built request body and HTTP method, defaulting to `POST` as before.

### Changes

- Replaced Webpack + Babel build tooling with Vite and TypeScript 5.
- `Address`, `Attachment`, and `Header` are now named exports (they were previously default exports internally). Named imports from the package root are unchanged.

---

## [0.3.6] - Previous release

See git history for changes prior to 1.0.0.
