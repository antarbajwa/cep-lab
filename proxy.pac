function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "test-portal.antarpreetbajwa.xyz")) {
        // Changed 'PROXY' to 'HTTPS'
        return "HTTPS training-gateway.gateway.beyondcorp.goog:443";
    }
    return "DIRECT";
}
