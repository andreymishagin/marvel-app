export interface Comics {
    characters: {
        available: number,
        collectionURI: string;
        items: Array<{
          resourceURI: string,
          name: string;
          // Используем check, в том случае, когда API не возвращает список персонажей для комикса
          check: string;
        }>;
    };
    thumbnail: {
      extension: string;
      path: string;
    };
    id: number;
    title: string;
    resourceURI: string;
    description: string;
  }