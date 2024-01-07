import React, { useState } from 'react';


const JobItem = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearch = async () => {
    const searchValue = document.getElementById('searchbar').value;
    console.log(searchValue);

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5209d67708msh2b4c4487ee24df4p1a9455jsn60b60f48436e',
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

      console.log(data);

      const jobResults = data.data.slice(0, 10).map((job, index) => {
        const firstFiveLines = job.job_description.split('\n').slice(0, 3).join('\n');

        return (
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-4" style={{ "width": "30rem" }}>
                  <div className="card">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                      }}
                    >

                    </div>
                    <img src={job.employer_logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Job Title: {job.job_title}...</h5>
                      <h5 className="card-state">Job State: {job.job_state}...</h5>
                      <h5 className="card-publisher">Job Publisher: {job.job_publisher}.</h5>

                      <h5 className='card-job-employemnt'>Job Employemnt Type{job.job_employment_type}</h5>
                      <h5 className="card-country">Job Country: {job.job_country}...</h5>
                      <h5 className="card-city">Job City: {job.job_city}...</h5>
                      <h5 className="card-city">Company Type: {job.employer_company_type}...</h5>
                      <p className="card-description">{firstFiveLines}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          By {!job.job_publisher ? "Unknown" : job.job_publisher} {" "}
                        </small>
                      </p>
                      <form className="actions" action={job.job_apply_link} target="_blank">
                        <button className="pref">Apply Link for this Job</button>
                        <button className="accept">Apply Now</button>
                      </form>
                    </div>
                  </div>
                </div>


              </div>
            </div >
          </>
        );
      });

      setJobs(jobResults);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className='align-middle'>
      <div className="background-image">
        <input
          style={{ "margin-top": "10rem" }}
          type="text"
          className="search"
          id="searchbar"
          placeholder="Search for Any type of Jobs Online here"
          onChange={handleSearchChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="whole-container">{jobs}</div>
    </div>

  )
}

export default JobItem;
