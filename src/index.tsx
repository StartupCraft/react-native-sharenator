import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'sharenator' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Sharenator = NativeModules.Sharenator
  ? NativeModules.Sharenator
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Sharenator.multiply(a, b);
}
