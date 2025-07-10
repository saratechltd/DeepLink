import { Injectable } from '@nestjs/common';

const detectors = {
  android: (ua) => /Android/i.test(ua),
  ios: (ua) => /iPhone|iPad|iPod/i.test(ua),
  mobile: (ua) =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua),
  desktop: (ua) =>
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      ua,
    ) && /Windows|Macintosh|Linux/i.test(ua),
  default: () => true,
};

@Injectable()
export class DeviceDetectorService {
  detectPlatform(ua: string) {
    return Object.keys(detectors).filter((key) => detectors[key](ua))
  }
}
