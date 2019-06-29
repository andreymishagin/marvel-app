export interface Hero {
  comics: {
    available: number;
    collectionURI: string;
    items: Array<{
      resourceURI: string,
      name: string,
      // Используем check, в том случае, когда API не возвращает список комиксов для персонажа
      check: string;
    }>
  };
  thumbnail: {
    extension: string;
    path: string;
  };
  id: number;
  name: string;
  resourceURI: string;
  urls: Array<any>;
  description: string;
}