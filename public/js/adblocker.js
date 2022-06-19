const detectAdBlock = async () => {
    let isAdBlockerEnabled = false
    const googleAdUrl =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    const req = new Request(googleAdUrl)

    await fetch(req).catch((_) => (isAdBlockerEnabled = true))

    return isAdBlockerEnabled
}
