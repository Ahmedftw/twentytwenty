module.exports = {
    ci: {
      collect: {
            url: 'https://www.google.com/',
          },
      upload: {
        target: 'lhci',
        serverBaseUrl: '${{secrets.LHCI_SERVER_BASE_URL}}',
        token: '${{secrets.LHCI_TOKEN}}'
      },
      assert: {
          // "budgetsFile": "./budget.json"
        preset: 'lighthouse:recommended',
        "assertions": {
          "dom-size": ["error", {"maxNumericValue": 3000}],
          "first-contentful-paint": ["warn", {"maxNumericValue": 3000}],
          "viewport": "error",
          "installable-manifest": "off",
          "offline-start-url": "off",
          "service-worker": "off",
          "splash-screen": "off",
          "works-offline": "off"
        }
      },
    },
  };