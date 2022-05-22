export interface TrainingForm {
  epochNumber: number;
  batchSize: number;
  testSize: number;
  learningRate: number;
  maxDepth: number;
  momentum: number;
  normalizeImage: boolean;
  epochEndShuffle: boolean;
  earlyStop: boolean;
  r1rFlag: boolean;
  noOfOffAug: number;
  targetMachine:
    | "ml.c5.2xlarge"
    | "ml.g4dn.xlarge"
    | "ml.c5.4xlarge"
    | "ml.g4dn.4xlarge"
    | "ml.c5.9xlarge"
    | "ml.g4dn.8xlarge";
}
