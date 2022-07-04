function networkFetch(url) {
  return `${url} server resp`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];

    if (cache.has(url)) {
      return `${url} cache resp`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  }
});