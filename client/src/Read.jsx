import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const Read = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setdetails] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:9000/student/${id}`)
      .then(res => {
        if (res.data.status === 1) {
          setdetails(res.data.data);
        }
      })
      .catch(err => { console.log(err) })
  }, [id])
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)"
    }}>

      <div className="container d-flex justify-content-center align-items-center vh-100">

        <div
          className="p-4"
          style={{
            width: "420px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            color: "#fff"
          }}
        >

          {!details ? (
            <p style={{ color: "#94a3b8" }}>Loading...</p>
          ) : (
            <>
              <div className="text-center mb-4">
                {details.photo===null?'':
                <img
                  src={
                    details.photo
                      ? `http://localhost:9000/uploads/${details.photo}`
                      : "https://via.placeholder.com/100"
                  }
                  alt="student"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 0 20px rgba(99,102,241,0.5)"
                  }}
                />
                }
                <h5 className="mt-3 fw-bold">{details.name}</h5>
                <small style={{ color: "#94a3b8" }}>{details.email}</small>
              </div>

              <div
                className="p-3 mb-4"
                style={{
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.04)"
                }}
              >
                <div className="d-flex justify-content-between mb-2">
                  <span style={{ color: "#94a3b8" }}>Student ID</span>
                  <span className="fw-semibold">{details.student_id}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span style={{ color: "#94a3b8" }}>Status</span>
                  <span style={{ color: "#22c55e" }}>Active</span>
                </div>
              </div>

              <div className="d-flex gap-2">
                <button
                  onClick={() => navigate('/')}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "8px",
                    borderRadius: "10px"
                  }}
                >
                  Back
                </button>

                <button
                  onClick={() => navigate(`/edit/${details.student_id}`)}
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    border: "none",
                    color: "#fff",
                    padding: "8px",
                    borderRadius: "10px",
                    fontWeight: "500"
                  }}
                >
                  Edit
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default Read