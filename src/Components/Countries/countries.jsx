import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  //  Difference eita country theke ekhane pathano hoise -->

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("ADD this to your visited country")
    // console.log(country)
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
   };
    //  add flags functions here 

    const [visitedFlags,setVisitedFlags]=useState([]);
    const handleVisitedFlags=flags=>{
      //  console.log(flags)
       const newVisitedFlags=[...visitedFlags,flags]
       setVisitedFlags(newVisitedFlags)
      
    }


  return (
    <>
      <h3>Countries Here : {countries.length}</h3>

                 {/* visited countries */}
      <div>
        <h2>Visited Countries : {visitedCountries.length} </h2>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3} >{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">
              {
                visitedFlags.map((flag,index)=> <img key={index} src={flag} alt="" /> )
              }
      </div>
     

            {/* display countries  */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default countries;
