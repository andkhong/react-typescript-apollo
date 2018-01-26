import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    home: {
        id: number
    }
}

const Listings = ({ home }: Props) => (
    <div>
        <h3> Features </h3>
        <Link to={`/homes/:${home.id}`}> Homes </Link>
    </div>
);

export default Listings;