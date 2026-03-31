function FindProxyForURL(url, host) {

  // Route ONLY your test app via Google Gateway
  if (dnsDomainIs(host, "test-portal.antarpreetbajwa.xyz")) {
    return "HTTPS training-gateway";
  }

  // Everything else goes direct
  return "DIRECT";
}
