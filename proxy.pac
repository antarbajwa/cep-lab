function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "test-portal.antarpreetbajwa.xyz")) {
        return "PROXY training-gateway.gateway.beyondcorp.goog:443";
    }
    return "DIRECT";
}
