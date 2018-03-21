import * as React from 'react';
import AccommodationsWrapper from './Accommodations.wrapper';

interface Props {
  accomodations: {
    homeType: string;
    maxNumberOfGuests: number;
    minNumberOfNights: number;
    numberOfBathrooms: number;
    sharedBathroom: string;
    sleepingArrangement: string;
  }
}

const Accommodations = ({ accomodations }: Props) => {
  if (!accomodations) return null;
  return (
    <AccommodationsWrapper>
      <h2> Accommodations </h2>
      <div> Home type: {accomodations.homeType} </div>
      <div> Sleeping Arrangements: {accomodations.sleepingArrangement} </div>
      <div> Number of Bathrooms: {accomodations.numberOfBathrooms} </div>
      <div> Shared Bathroom: {accomodations.sharedBathroom} </div>
      <div> Maximum number of guests {accomodations.maxNumberOfGuests} </div>
      <div> Minimum number of nights {accomodations.minNumberOfNights} </div>
    </AccommodationsWrapper>
  )
}

export default Accommodations;