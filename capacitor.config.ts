import type { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'final-project',
  webDir: 'www',
    //bundledWebRuntime: false,
    plugins: {
      SplashScreen: {
        launchShowDuration: 10000,  // Show splash screen for 2 seconds
        launchAutoHide: false,     // Do not auto-hide splash screen
        backgroundColor: '#FFC0CB', // Set splash screen background color (optional)
        androidSplashResourceName: 'splash', // Name of the splash image resource (Android)
        iosSplashResourceName: 'splash',     // Name of the splash image resource (iOS)
      }
    }
};

export default config;
