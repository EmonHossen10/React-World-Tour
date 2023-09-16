import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetail/CountryDetails";



const Country = ({ country ,handleVisitedCountries,handleVisitedFlags}) => {
  //  console.log( country);
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h4 style={{ color: visited ? "white" : "grey" }}>
        Name : {name?.common}
      </h4>
      <img src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>
        Area : {area} Km<sup>2</sup> 
      </p>

      <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button> <br /> <br />

      <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button> <br /> <br />

      <button onClick={handleVisit} className="btn-primary">
        {visited ? "visited" : "Going"}
      </button>


      {/* {visited && "I have visit this country"} */}
      {visited ? "Country visit korsi" : "Visit kori nai "}

      <hr />
      {/* country ,handleVisitedCountries,handleVisitedFlags */}
      <CountryDetails
      country={country}
      handleVisitedCountries={handleVisitedCountries}
      handleVisitedFlags={handleVisitedFlags}

      ></CountryDetails>
    </div>
    
  );
};
export default Country;

/**
 * 1. function er parameter hisabe full country ke pathate hobe
 * 2. seta upper level er countries component theke receive korte hobe
 * 3. receive korar system holo,,, spread operatr diya copy kora 
 * 4. then visited country gula show kora 
 */