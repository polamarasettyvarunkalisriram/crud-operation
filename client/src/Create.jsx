import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = () => {
    const navigate = useNavigate();
    const [newstudent, setnewstudent] = useState({
        name: '',
        email: '',
        photo: null
    })
    const submithandel = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', newstudent.name);
        formData.append('email', newstudent.email);
        formData.append('photo', newstudent.photo);

        axios.post('http://localhost:9000/addstudent', newstudent)
            .then(res => {
                if (res.data.status === 1) {
                    setnewstudent(res.data)
                    alert('added successufully')
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0f172a, #1e293b)"
        }}>

            <div className="container d-flex justify-content-center align-items-center vh-100">

                <div
                    style={{
                        width: "420px",
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                        padding: "30px",
                        color: "#fff"
                    }}
                >

                    <h4 className="text-center mb-4 fw-bold">Add Student</h4>

                    <form onSubmit={submithandel}>

                        <div className="text-center mb-3">{newstudent.photo == null ? '' :
                            <img
                                src={
                                    newstudent.photo
                                        ? URL.createObjectURL(newstudent.photo)
                                        : "https://via.placeholder.com/100"
                                }
                                alt=""
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "3px solid rgba(255,255,255,0.2)"
                                }}
                            />
                        }
                        </div>

                        <div className="mb-3">
                            <label style={{ fontSize: "13px", color: "#94a3b8" }}>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={newstudent.name}
                                onChange={(e) =>
                                    setnewstudent({ ...newstudent, name: e.target.value })
                                }
                                style={{
                                    background: "rgba(255,255,255,0.08)",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: "10px",
                                    padding: "10px"
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label style={{ fontSize: "13px", color: "#94a3b8" }}>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={newstudent.email}
                                onChange={(e) =>
                                    setnewstudent({ ...newstudent, email: e.target.value })
                                }
                                style={{
                                    background: "rgba(255,255,255,0.08)",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: "10px",
                                    padding: "10px"
                                }}
                            />
                        </div>

                        <div className="mb-4">
                            <label style={{ fontSize: "13px", color: "#94a3b8" }}>Photo</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) =>
                                    setnewstudent({ ...newstudent, photo: e.target.files[0] })
                                }
                                style={{
                                    background: "rgba(255,255,255,0.08)",
                                    border: "none",
                                    color: "#fff",
                                    borderRadius: "10px"
                                }}
                            />
                        </div>
                        <div className='d-flex'>


                            <button
                                type="button"
                                style={{
                                    width: "100%",
                                    marginRight: "10px",
                                    background: "rgba(255,255,255,0.1)",
                                    border: "none",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    color: "#fff"
                                }}
                                onClick={() => navigate('/')}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                style={{
                                    width: "100%",

                                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                    border: "none",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    fontWeight: "500"
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Create