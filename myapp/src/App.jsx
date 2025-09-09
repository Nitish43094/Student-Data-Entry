import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { addStudent, updateStudent, deleteStudent } from './redux/slises'
import './App.css'

function App() {
  const students = useSelector((state) => state.students)
  const dispatch = useDispatch()
  const [marks, setmarks] = useState(0)

  const [data, setData] = useState(
    {
      id: "",
      name: "",
      age: 0,
      subjects: { m1: "", m2: "", m3: "", m4: "", m5: "" },
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.id) {
      dispatch(updateStudent(data));
    } else {
      dispatch(addStudent({ ...data, id: Date.now() }));
    }
    setData({
      id: "",
      name: "",
      age: 0,
      subjects: { m1: "", m2: "", m3: "", m4: "", m5: "" },
    })
    const total = Number(data.subjects.m1) + Number(data.subjects.m2) + Number(data.subjects.m3) + Number(data.subjects.m4) + Number(data.subjects.m5);
    const pre = (total / 500) * 100;
    setmarks(pre)
  }
  const handleEdit = (student) => {
    setData(student);
  }

  const handleSubject = (subject, value) => {
    setData({
      ...data,
      subjects: { ...data.subjects, [subject]: value }
    })
  }

  const handleMarks = (subjects) => {
    const total = Number(subjects.m1) + Number(subjects.m2) + Number(subjects.m3) + Number(subjects.m4) + Number(subjects.m5);
    const pre = (total / 500) * 100;
    return pre;
  }
  return (
    <div class="main-section">
      <div class = "sub-section">
        <h1 id='hading'>Student Data Entry</h1>
        <div class="container">
          <form onSubmit={handleSubmit} class="form-section">
            <h2 class='sub-heading'>Enter Student Record</h2>
            <div className='line'></div>
            <div className='data'>
              <label htmlFor="name" className='name'>Name</label>
              <input type="text"
                value={data.name}
                placeholder='Name'
                required
                className='input'
                onChange={(e) => setData({ ...data, name: e.target.value })} />
            </div>
            <div className='data'>
              <label htmlFor="age" className='name'>Age</label>
              <input type="text"
                placeholder='Age'
                required
                value={data.age}
                className='input'
                onChange={(e) => setData({ ...data, age: e.target.value })} />
            </div>
            <div className='data'>
              <label htmlFor="m1" className='name'>M1</label>
              <input type="text"
                value={data.subjects.m1}
                required
                placeholder='M1'
                className='input'
                onChange={(e) => handleSubject("m1", e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor="m2" className='name'>M2</label>
              <input type="text"
                value={data.subjects.m2}
                required
                placeholder='M2'
                className='input'
                onChange={(e) => handleSubject("m2", e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor="m3" className='name'>M3</label>
              <input type="text"
                value={data.subjects.m3}
                required
                placeholder='M3'
                className='input'
                onChange={(e) => handleSubject("m3", e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor="m4" className='name'>M4</label>
              <input type="text"
                value={data.subjects.m4}
                required
                placeholder='M4'
                className='input'
                onChange={(e) => handleSubject("m4", e.target.value)} />
            </div>
            <div className='data'>
              <label htmlFor="m5" className='name'>M5</label>
              <input type="text"
                value={data.subjects.m5}
                required
                placeholder='M5'
                className='input'
                onChange={(e) => handleSubject("m5", e.target.value)} />
            </div>
            <button type='submit' className='btn'>{data.id ? "Updata" : "Submit" }</button>
            <div>
              <div className='pre'>{marks}</div>
              <div>
                {
                  marks >= 60 ? (<h5 lassName='pre'>First Division</h5>) : (<h5 lassName='pre'>Fail</h5>)
                }
              </div>
            </div>
          </form>
          <div className='send-part'>
            <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
              <tr>
                <th className="px-4 py-2 border" >Name</th>
                <th className="px-4 py-2 border" >Age</th>
                <th className="px-4 py-2 border">M1</th>
                <th className="px-4 py-2 border">M2</th>
                <th className="px-4 py-2 border">M3</th>
                <th className="px-4 py-2 border">M4</th>
                <th className="px-4 py-2 border">M5</th>
                <th className="px-4 py-2 border">Precentage</th>
                <th className="px-4 py-2 border">Division</th>
                <th className="px-4 py-2 border">Edit</th>
                <th className="px-4 py-2 border">Delete</th>
              </tr>
              {
                students.map((data) => {
                  const pre = handleMarks(data.subjects)
                  return (
                    <tr key={data.id}>
                      <td className="px-4 py-2 border">{data.name}</td>
                      <td className="px-4 py-2 border">{data.age}</td>
                      <td className="px-4 py-2 border">{data.subjects.m1}</td>
                      <td className="px-4 py-2 border">{data.subjects.m2}</td>
                      <td className="px-4 py-2 border">{data.subjects.m3}</td>
                      <td className="px-4 py-2 border">{data.subjects.m4}</td>
                      <td className="px-4 py-2 border">{data.subjects.m5}</td>
                      <td className="px-4 py-2 border">{pre}</td>
                      <td className="px-4 py-2 border"></td>
                      <td className="px-4 py-2 border">
                        <button className='btn2' onClick={() => handleEdit(data)}>Edit</button>
                      </td>
                      <td className="px-4 py-2 border">
                        <button className='btn2' onClick={() => dispatch(deleteStudent(data.id))}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
