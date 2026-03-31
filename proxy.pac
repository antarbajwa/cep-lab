function FindProxyForURL(url, host) {

  if (dnsDomainIs(host, "test-portal.antarpreetbajwa.xyz")) {
    return "HTTPS 0.0.0.0:443";
  }

  return "DIRECT";
}
