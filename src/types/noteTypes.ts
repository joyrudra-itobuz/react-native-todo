export type Note = {
  title: string;
  body: string;
  authorId: string;
  isImportant?: boolean;
  tags?: Array<string>;
  isFinished?: boolean;
};
