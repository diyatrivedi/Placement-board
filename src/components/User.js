import React from "react";
import { useNavigate } from "react-router-dom";

function User({ setLoginUser, user }) {
    const navigate = useNavigate();

    return (
        <section
            className="vh-100"
            style={{
                "background-color": "#083c54",
            }}
        >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="col col-lg-6 mb-4 mb-lg-0"  >
                        <div className="card mb-3 my-5" style={{
                            "border-radius": ".5rem",
                            background: "#DCF2F1"
                        }}>
                            <div className="row g-0">
                                <div
                                    className="col-md-4 gradient-custom text-center text-white justify-content-center"
                                    style={{
                                        "border-top-radius": ".5rem",
                                        "border-bottom-radius": ".5rem",
                                    }}
                                >
                                </div>
                                <div
                                    className="col-md-8 justify-content-center mx-4"
                                    style={{
                                        background: "#DCF2F1",
                                    }}
                                >
                                    <div className="card-body p-2 justify-content-end mx-1">

                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div
                                            className="col-16 mb-3"
                                            style={{
                                                margin: "10px",
                                                display: "flex"
                                            }}
                                        >
                                            <h6>Email: </h6>
                                            <h6 className="text-muted mx-2 ">{user.email}</h6>
                                        </div>
                                        <div className="row pt-1">
                                            <div
                                                className="col-20 mb-3"
                                                style={{
                                                    margin: "5px",
                                                    display: "flex"
                                                }}
                                            >
                                                <h6>Name: </h6>
                                                <h6 className="text-muted mx-2 ">{user.name}</h6>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div
                                                className="col-20 mb-3"
                                                style={{
                                                    margin: "5px",
                                                    display: "flex"
                                                }}
                                            >
                                                <h6> Enrollment number:</h6>
                                                <h6 className="text-muted mx-2">{user.Enrollment_no}</h6>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div
                                                className="col-20 mb-3"
                                                style={{
                                                    margin: "10px",
                                                    display: "flex"

                                                }}
                                            >
                                                <h6>10th Marks: </h6>
                                                <h6 className="text-muted mx-2">{user.tenthMarks}</h6>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3"
                                                style={{
                                                    margin: "10px",
                                                    display: "flex"
                                                }}>
                                                <h6>12th Marks :</h6>
                                                <p className="text-muted mx-2">{user.twelfthMarks}</p>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3"
                                                style={{
                                                    margin: "10px",
                                                    display: "flex"
                                                }}>
                                                <h6>Current CPI :</h6>
                                                <h6 className="text-muted  mx-2">{user.CPI}</h6>
                                            </div>
                                        </div>
                                        <div className="row pt-1 flex">
                                            <div className="col-20 mb-3 "
                                                style={{
                                                    margin: "10px",
                                                    display: "flex"
                                                }}>
                                                <h6>Collage Name :</h6>
                                                <h6 className="text-muted mx-2">{user.clg_name}</h6>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3" style={{
                                                margin: "10px",
                                                display: "flex"
                                            }}>
                                                <h6>Skills : </h6>
                                                <h6 className="text-muted mx-2">{user.skills}</h6>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3"
                                                style={{
                                                    margin: "10px",
                                                    display: "flex"
                                                }}>
                                                <h6>Department</h6>
                                                <h6 className="text-muted mx-2">{user.department}</h6>
                                            </div>
                                        </div>
                                        <div className="row pt-1">
                                            <div className="col-20 mb-3"
                                                style={{
                                                    margin: "10px",
                                                    display: "flex"
                                                }}>
                                                <h6>Current semester</h6>
                                                <h6 className="text-muted mx-2">{user.semester}</h6>
                                            </div>
                                        </div>
                                        <hr className="mt-0 mb-0" />
                                        <div style={{ display: "flex" }} >
                                            <div
                                                className="small fw-bold mt-4 pt-1 mb-0 flex mx-3"
                                                style={{
                                                    marginRight: "400px",
                                                    display: "flex"
                                                }}
                                            >
                                                {/* Back{" "} */}
                                                <i
                                                    style={{
                                                        padding: "0rem 0rem",
                                                        marginRight: "300px",
                                                        width: "100%",
                                                        color: "black",
                                                        cursor: "pointer"
                                                    }}
                                                    className="fa-solid fa-arrow-left mx-2"
                                                    onClick={() => {
                                                        navigate("/");
                                                    }}
                                                > {" "}Back{" "}</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default User;