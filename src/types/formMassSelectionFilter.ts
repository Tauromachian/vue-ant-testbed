export interface FormMassSelectionFilter {
  nestedGroup: number;
  device: number;
  camera: number;
  project: number;
  job: number;
  useCase: number;
  model: number;
  tags: Array<string>;
  dateStart: string;
  dateFinish: string;
}
