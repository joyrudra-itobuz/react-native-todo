export type NoteFormValues = {
  title: string;
  body: string;
  isImportant?: boolean;
  tags?: Array<string>;
  isFinished?: boolean;
};

export type Note = {
  title: string;
  body: string;
  authorId: string;
  isImportant?: boolean;
  tags?: Array<string>;
  isFinished?: boolean;
};
