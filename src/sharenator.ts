import { SharenatorModule } from './module';

export type ShareData = {
  type: string;
  value: string;
  title?: string;
  subject?: string;
  text?: string;
};

export function fetchData(): Promise<ShareData> {
  return SharenatorModule.fetchData();
}

export function close() {
  SharenatorModule.close();
}
