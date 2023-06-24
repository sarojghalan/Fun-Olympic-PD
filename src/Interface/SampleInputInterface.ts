export interface SampleInputInterface {
  placeHolder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string;
}
