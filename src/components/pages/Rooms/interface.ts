import { RouterProps } from 'components/interface';

export interface RoomProps extends RouterProps  {
    closeAuthPortal: () => void;
    toggleAuthForms: (form: string) => void;
    loading: boolean;
    error: any;
    room: Room
};

export interface Room {
    accomodations: {
        homeType: string;
        maxNumberOfGuests: number;
        minNumberOfNights: number;
        numberOfBathrooms: number;
        sharedBathroom: string;
        sleepingArrangement: string;
    };
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
    houseRules: string;
    lat: string;
    listingId: string;
    listingPicUrl: string;
    lng: string;
    maxGuests: number;
    minimumNights: number;
    physicalAddressId: string;
    photos: string[];
    postalCode: string;
    pricePerNight: number;
    securityDeposit: number;
    state: string;
    title: string;
}
