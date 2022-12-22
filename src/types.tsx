export interface Data {
  tracks: {
    items: [track: CardData];
  };
}

export interface CardData {
  data: {
    uri: string;
    id: string;
    name: string;
    albumOfTrack: {
      uri: string;
      name: string;
      coverArt: {
        sources: Array<Sources>;
      };
      id: string;
      sharingInfo: {
        shareUrl: string;
      };
    };
    artists: {
      items: Array<Items>;
    };
    contentRating: {
      label: string;
    };
    duration: {
      totalMilliseconds: number;
    };
    playability: {
      playable: boolean;
    };
  };
}

interface Sources {
  url: string;
  width: number;
  height: number;
}

interface Items {
  uri: string;
  profile: {
    name: string;
  };
}

export interface FormData {
  name?: string;
  email?: string;
  birthday?: string;
  picture?: [
    {
      name: string;
    }
  ];
  genre?: string;
  notifications?: boolean;
  consent?: boolean;
  id?: number;
}

export const value = {
  name: 'Kanat',
  email: 'kanat.juzbayev@gmail.com',
  birthday: '1989-04-26',
  picture: 'Ava',
  genre: 'Pop Music',
  notifications: true,
  consent: true,
  id: 202210111405,
};
