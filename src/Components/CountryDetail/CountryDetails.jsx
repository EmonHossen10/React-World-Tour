import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
  const { country, handleVisitedCountries, handleVisitedFlags } = props;
  return (
    <div>
      <h3>Country Details : </h3>
      {/* system 1 to passing props  */}
      {/* <CountryData
             country={country}
             handleVisitedCountries={handleVisitedCountries}
             handleVisitedFlags={handleVisitedFlags}
             ></CountryData> */}

      {/*  system 2 to passing props  */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetails;
