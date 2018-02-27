export interface Props {
    loading: boolean;
    listings: Listing[];
}

export interface Listing {
    description: string;
    hostId: string;
    listingId: string;
    listingPicUrl: string;
    pricePerNight: number;
    title: string;
}