export interface Props {
    loading: boolean;
    listings: Listing[];
}

export interface Listing {
    city: string;
    country: string;
    description: string;
    hostId: string;
    listingId: string;
    listingPicUrl: string;
    pricePerNight: number;
    state: string;
    title: string;
}