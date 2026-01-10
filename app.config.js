module.exports = {
  expo: {
    name: "Campus App",
    slug: "campus-app-new",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.prosahil2150.campusappnew"
    },
    android: {
      package: "com.prosahil2150.campusappnew"
    },
    extra: {
      eas: {
        projectId: "b02aa5d1-fa5c-4fe9-bb42-a79a596f4f4f"
      },
      auth0Domain: process.env.EXPO_PUBLIC_AUTH0_DOMAIN || "supremesahil.us.auth0.com",
      auth0Scheme: "campusappnew"
    },
    plugins: [
      [
        "expo-build-properties",
        {
          android: {
            manifestPlaceholders: {
              auth0Domain: process.env.EXPO_PUBLIC_AUTH0_DOMAIN || "supremesahil.us.auth0.com",
              auth0Scheme: "campusappnew"
            }
          }
        }
      ]
    ]
  }
};
