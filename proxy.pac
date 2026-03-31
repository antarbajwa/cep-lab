function FindProxyForURL(url, host) {
  if (host === "test-portal.antarpreetbajwa.xyz") {
    return "PROXY 127.0.0.1:9";
  }
  return "DIRECT";
}
