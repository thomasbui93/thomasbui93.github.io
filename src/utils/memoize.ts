export const memoize = (fn: Function): Function => {
  const cache = new Map();

  return function (...args: any[]) {
    const cacheKey = args.join('|');
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)
    }

    const result = fn(...args);

    cache.set(cacheKey, result);

    return result;
  }
}
