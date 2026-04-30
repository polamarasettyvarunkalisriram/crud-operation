import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const [student, setstudent] = useState([])
  useEffect(() => {
    axios.get('http://localhost:9000/list')
      .then(res => {
        if (res.data.status === 1) {
          setstudent(res.data.data);
        }
        else {
          console.log('api failed')
          setstudent([])
        }
      })
  }, [])
  const deletehandle = (id) => {
    axios.delete('http://localhost:9000/deleteitem', {
      data: {
        id: id
      }
    })
      .then(res => {
        if (res.data.status === 1) {
          alert("Deleted successfully");
          setstudent(prev => prev.filter(item => item.student_id !== id));
        }
      })
      .catch(err => { console.log(err) })
  }
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        padding: "40px"
      }}
    >

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          padding: "20px",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
        }}
      >

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="text-white fw-bold mb-1">Student List</h4>
            <small style={{ color: "#94a3b8" }}>Manage your students</small>
          </div>

          <button
            onClick={() => navigate('/create')}
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              border: "none",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "10px"
            }}
          >
            + Add
          </button>
        </div>

        {/* Table Wrapper */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: "16px",
            padding: "10px"
          }}
        >

          <table
            className="table align-middle text-white mb-0"
            style={{
              borderCollapse: "separate",
              borderSpacing: "0 12px",
              background: "linear-gradient(145deg, #0f172a, #1e293b)", // NEW table background
              padding: "10px",
              borderRadius: "12px"
            }}
          >
            <thead
              style={{
                background: "linear-gradient(90deg, #1e293b, #334155)", // NEW header color
                color: "#e2e8f0",
                fontSize: "13px"
              }}
            >
              <tr>
                <th >ID</th>
                <th>Photo</th>
                <th style={{ width: '20px' }}>Student</th>
                <th>Email</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {student.map((item) => (
                <tr
                  key={item.student_id}
                  style={{
                    background: "rgba(30, 41, 59, 0.9)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.25)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#334155";
                    e.currentTarget.style.transform = "scale(1.01)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(30, 41, 59, 0.9)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <td style={{ color: "black", padding: "14px" }}>
                    {item.student_id}
                  </td>

                  <td style={{ padding: "14px" }}>
                    <div className="d-flex align-items-center gap-3">
                      {item.photo === null ? <img src='download.png'  alt="" style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #6366f1",
                        boxShadow: "0 0 12px rgba(99,102,241,0.6)"
                      }} /> :
                        <img
                          src={
                            item.photo
                              ? `http://localhost:9000/uploads/${item.photo}`
                              : "https://via.placeholder.com/40"
                          }
                          alt=""
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #6366f1",
                            boxShadow: "0 0 12px rgba(99,102,241,0.6)"
                          }}
                        />
                      }

                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="fw-semibold" style={{ paddingRight: "54px" }}>{item.name}</div>
                      <small style={{ color: "#94a3b8", paddingRight: "54px" }}>Student</small>
                    </div>
                  </td>
                  <td style={{ color: "black", padding: "14px" }}>
                    {item.email}
                  </td>

                  <td style={{ padding: "14px" }}>
                    <div className="d-flex justify-content-center gap-2">

                      <button className='fw-bold'
                        style={{
                          background: "#0ea5e9",
                          color: "black",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "8px"
                        }}
                        onClick={() => navigate(`/read/${item.student_id}`)}
                      >
                        View
                      </button>

                      <button className='fw-bold'
                        style={{
                          background: "#f59e0b",
                          color: "black",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "8px"
                        }}
                        onClick={() => navigate(`/edit/${item.student_id}`)}
                      >
                        Edit
                      </button>

                      <button className='fw-bold'
                        style={{
                          background: "#ef4444",
                          color: "black",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "8px"
                        }}
                        onClick={() => deletehandle(item.student_id)}
                      >
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </div>
  )
}

export default Home