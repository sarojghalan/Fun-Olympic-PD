export interface SampleButtonInterface {
  title: string;
  nameOfClass: string;
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
