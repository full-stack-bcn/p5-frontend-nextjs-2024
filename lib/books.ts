enum status {
  READ,
  "TO READ",
  READING,
}

export type Book = {
  id: number;
  title: string;
  authorName: string;
  authorLastName: string;
  cover: string;
  status: string;
};
