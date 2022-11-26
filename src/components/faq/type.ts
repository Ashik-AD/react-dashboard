type Schema = {
  id: string;
  title: string;
  icon: string;
  subtitle: string;
  qandA: { id: string; question: string; answer: string }[];
};

export interface QuestionProp {
  questions: Schema[];
}

export interface FandQAPI {
  [key: string]: Schema;
}
