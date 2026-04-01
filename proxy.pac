function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, "debug-portal.antarpreetbajwa.xyz")) {
    return "HTTPS via.prod.securegateway.goog:443";
  }
  return "DIRECT";
}
