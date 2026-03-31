function FindProxyForURL(url, host) {
    if (host === "test-portal.antarpreetbajwa.xyz") {
        return "HTTPS via.prod.securegateway.goog:443";
    }
    return "DIRECT";
}
