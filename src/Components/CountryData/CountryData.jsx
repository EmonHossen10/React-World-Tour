import React from 'react';

const CountryData = ({country ,handleVisitedCountries,handleVisitedFlags}) => {
 console.log("inside country data",country ,handleVisitedCountries,handleVisitedFlags)
    return (
        <div>
            <p> <small>Country Name : {country?.name?.common}</small> </p>
        </div>
    );
};

export default CountryData;