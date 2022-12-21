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
