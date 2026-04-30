import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [student, setstudent] = useState({
    name: '',
    email: '',
    photo:null
  })

  useEffect(() => {
    axios.get(`http://localhost:9000/student/${id}`)
      .then(res => {
        if (res.data.status === 1) {
          setstudent({
            name: res.data.data.name,
            email: res.data.data.email,
            photo:res.data.data.photo
          })
        }
      })
      .catch(err => console.log(err))
  }, [id])

  const edithandel = (e) => {
    e.preventDefault()
   const formData = new FormData()
    formData.append('name', student.name)
    formData.append('email', student.email)

    // only append photo if new file selected
    if (student.photo instanceof File) {
      formData.append('photo', student.photo)
    }

    axios.put(`http://localhost:9000/updatestudent/${id}`, formData)
    .then(res => {
      if (res.data.status === 1) {
        alert("Student Updated ✅")
        navigate('/') 
      }
    })
    .catch(err => console.log(err))
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

      <h4 className="text-center mb-4 fw-bold">Edit Student</h4>

      <form onSubmit={edithandel}>

        <div className="text-center mb-4">{
          student.photo===null?'':
          <img
            src={
              student.photo 
                ? URL.createObjectURL(student.photo)
                : `http://localhost:9000/uploads/${student.photo}`
            }
            alt=""
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(255,255,255,0.2)",
              boxShadow: "0 0 20px rgba(99,102,241,0.5)"
            }}
          />
}
        </div>

        {/* Name */}
        <div className="mb-3">
          <label style={{ fontSize: "13px", color: "#94a3b8" }}>Name</label>
          <input
            type="text"
            className="form-control"
            value={student.name}
            onChange={(e) =>
              setstudent({ ...student, name: e.target.value })
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
            value={student.email}
            onChange={(e) =>
              setstudent({ ...student, email: e.target.value })
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
              setstudent({ ...student, photo: e.target.files[0] })
            }
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "none",
              color: "#fff",
              borderRadius: "10px"
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>

          <button
            type="submit"
            style={{
              flex: 1,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "500"
            }}
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.1)",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
              color: "#fff"
            }}
          >
            Cancel
          </button>

        </div>

      </form>
    </div>
  </div>
</div>
  )
}

export default Edit