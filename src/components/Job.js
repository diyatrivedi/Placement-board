import React from 'react'

function Job(props) {
    let { imageUrl1, job_title1, job_state1, job_employment_type1, job_publisher1, job_country1, job_city1, employer_company_type1, job_apply_link1, description1
    } = props
    console.log(description1)
    return (
        <div className="mx-4">
            {/* Hello */}
            <div className="card" style={{ "width": "30rem" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                    }}
                >
                    {/* <span className="badge rounded-pill bg-danger">{source}</span> */}
                </div>
                <img src={imageUrl1} className="card-img-top mx-5 my-3 px-5" style={{ "width": "20rem", "height": "15rem", justifyContent: "center"  }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> <b>Job Title:</b> {job_title1}</h5>
                    <h5 className="card-type"><b>Job Type: </b>{job_employment_type1}</h5>
                    <h5 className="card-title"><b>{job_state1}</b> </h5>
                    <h5 className="card-title">{job_publisher1}</h5>
                    <h5 className="card-title">{job_country1}</h5>
                    <h5 className="card-title">{job_city1}</h5>
                    <h5 className="card-title">{employer_company_type1}</h5>
                    <p className="card-text">{description1}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {!employer_company_type1 ? "Unknown" : employer_company_type1} on{" "}
                            {/* {new Date(date).toGMTString()} */}
                        </small>
                    </p>
                    <h5 className="card-title">job_apply_link1...</h5>
                    <a href={description1} target="_blank" className="btn btn-sm btn-dark">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Job
