import React, { useState } from 'react';
import Job from './Job';

const JobItem = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearch = async () => {
    const searchValue = document.getElementById('searchbar').value;
    console.log(searchValue);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ff208bbf45mshaa6b8e57de208f3p1a6c19jsnc4be9a21ae81',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      },
    };

    let url = `https://jsearch.p.rapidapi.com/search?query=software`; // Default search query
    if (searchValue.trim() !== '') {
      url = `https://jsearch.p.rapidapi.com/search?query=${searchValue}`;
    }

    try {


      const response = await fetch(url, options);
      const data = await response.json();


      setJobs(data.data)

    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <div className="align-middle">
      <div className="background-image">
        <input
          style={{
            "margin-top": "7rem",
            width: "450px",
            "border-radius": "55px",
          }}
          type="text"
          className="search"
          id="searchbar"
          placeholder="Search for Any type of Jobs Online here"
          onChange={handleSearchChange}
        />
        <i
          className="fa-solid fa-magnifying-glass "
          style={{
            color: "#ffffff",
            size: "2xl",
          }}
          onClick={handleSearch}
        ></i>
      </div>
      <div className="whole-container">{jobs}</div>
    </div>
      <div className="container">
        <div className="row">
          {/* console.log(jobs) */}
          {jobs.map((job) => {
            // console.log(job)
            return (
              <div className="col-md-5 mx-4 py-3" key={job.job_url}>
                <Job
                  imageUrl1={job.employer_logo}
                  job_title1={job.job_title}
                  job_state1={job.job_state}
                  job_publisher1={job.job_publisher}
                  job_employment_type1={job.job_employment_type}
                  job_country1={job.job_country}
                  job_city1={job.job_city}
                  employer_company_type1={job.employer_company_type}
                  job_apply_link1={job.job_apply_link}
                  description1={job.description}>
                </Job>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default JobItem;
