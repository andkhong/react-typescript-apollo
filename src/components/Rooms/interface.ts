import { RouterProps } from 'components/interface';

export interface RoomProps extends RouterProps  {
    closeAuthPortal: () => void;
    toggleAuthForms: (form: string) => void;
    loading: boolean;
    room: Room
};

export interface Room {
    addressLine1: string;
    addressLine2: string;
    amenities: string[];
    city: string;
    country: string;
    currency: string;
    datesBooked: string[][];
    description: string;
    hostAbout: string;
    hostDateJoined: string;
    hostEmail: string;
    hostFirstName: string;
    hostId: string;
    hostPic: string;
    lat: string;
    listingId: string;
    listingPicUrl: string;
    lng: string;
    maxGuests: number;
    physicalAddressId: string;
    postalCode: string;
    pricePerNight: number;
    securityDeposit: number;
    state: string;
    title: string;
}
