import "dotenv/config";

export default {
  expo: {
    scheme: "acme",
    web: {
      bundler: "metro",
    },
    owner: "nanagaisie",
    name: "Job Finder",
    slug: "react-native-jobs",
    extra: {
      eas: {
        projectId: "b21d9973-1326-4e7c-9f2d-82daab9c9d1c",
      },
      apiKey: process.env.RAPID_API_KEY,
    },
    android: {
      package: "com.nanagaisie.reactnativejobs",
    },
    ios: {
      bundleIdentifier: "com.nanagaisie.reactnativejobs",
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
    updates: {
      url: "https://u.expo.dev/b21d9973-1326-4e7c-9f2d-82daab9c9d1c",
    },
  },
};
