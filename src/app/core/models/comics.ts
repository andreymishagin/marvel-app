export interface Comics {
    characters: {
        available: number,
        collectionURI: string;
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