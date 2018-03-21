import * as React from 'react';

interface Props {
    city: string;
    country: string;
    title: string;
}

const Description = ({ city, country, title}: Props) => (
  <DescriptionWrapper>
    <h1>{title}</h1>
    <span className="city">{city},&nbsp;</span>
    <span className="country">{country}</span>
  </DescriptionWrapper>
);

import styled from 'styled-components';

const DescriptionWrapper = styled.div`
  .city {
    text-transform: capitalize;
  }

  .country {
    text-transform: uppercase;
  }
`

export default Description;