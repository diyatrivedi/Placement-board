import React from 'react';
import { useNavigate } from "react-router-dom";

function User({ setLoginUser, user }) {
    const navigate = useNavigate();

    return (
        <section className="vh-100" style={{ "background-color": "#f4f5f7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4 mb-lg-0">
                        <div className="card mb-3" style={{ "border-radius": ".5rem" }}>
                            <div className="row g-0">
                                <div
                                    className="col-md-4 gradient-custom text-center text-white"
                                    style={{
                                        "border-top-left-radius": ".5rem",
                                        "border-bottom-left-radius": ".5rem",
                                    }}
                                >
                                    <img
                                        src="https://picsum.photos/250/250"
                                        alt="Avatar"
                                        className="img-fluid my-5"
                                        style={{ width: "80px" }}
                                    />
                                    <h5>Marie Horwitz</h5>
                                    <p>Web Designer</p>
                                    <i className="far fa-edit mb-5"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-16 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>Name</h6>
                                                <p className="text-muted">{user.name}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>Enrollment number</h6>
                                                <p className="text-muted">{user.Enrollment_no}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>10th Marks</h6>
                                                <p className="text-muted">{user.tenthMarks}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>12th Marks</h6>
                                                <p className="text-muted">{user.twelfthMarks}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>Current CPI</h6>
                                                <p className="text-muted">{user.CPI}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>Collage  Name</h6>
                                                <p className="text-muted">{user.clg_name}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>Skills</h6>
                                                <p className="text-muted">{user.skills}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>Department</h6>
                                                <p className="text-muted">{user.department}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3">
                                                <h6>Current semester</h6>
                                                <p className="text-muted">{user.semester}</p>
                                            </div>
                                        </div>
                                        <hr className="mt-0 mb-4" />
                                    </div>
                                </div>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Back To Home {" "}
                                    <button
                                        type="submit"
                                        style={{ padding: "0rem 2rem" }}
                                        className="btn btn-primary btn-lg"
                                        onClick={() => {
                                            navigate("/");
                                        }}
                                    >
                                        Home
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default User
