function promisify(originalFn) {
    return function (...args) {
      return new Promise((resolve, reject) => {
        originalFn(...args, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
  }