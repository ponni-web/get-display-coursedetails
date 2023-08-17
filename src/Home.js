import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    const [showHome, setShowHome] = useState(false)
    const [selectedList, setSelectedList] = useState([])

    const courselist = [{
        // "Html", "css", "Javascript", "Reactjs", "SQL"
        Name:"HTML", package:"2000"},
       { Name:"CSS", package:"2000"},
        {Name:"JAVASCRIPT", package:"5000"},
        {Name:"PHP", package:"5000"},
        {Name:"SQL", package:"5000"},
       {Name:"REACT JS", package:"5000"

    }]

    const ChooseCourse = (val) => {
        let existing = selectedList.find((item)=> item.Name === val.Name);
        if(existing){
          alert("u couldnt choose the same");
           }
        else
        setSelectedList([...selectedList, val])
    }
    return (
        <div className='container1'>
            <div className='header'>
                <h1>Courses Available</h1>
                <button className='homebtn' onClick={() => setShowHome(false)}>Home</button>
                <button className='homebtn' onClick={() => setShowHome(true)}>My Profiles</button>
            </div>

            <div className='listCard'>
                {showHome ?
                    <div>
                        {selectedList.map((data) => (
                            <div className='courseList'>
                                {/* <button className='list-btn'>{data}</button> */}
                                <h2>Course name - {data.Name}</h2>
                                <h2>Package - {data.package} /-</h2>
                                <button className='list-btn'>subscribe</button>
                            </div>
                        ))}
                    </div>
                    : <div>
                        {courselist.map((data) => (
                            <div className='courseList'>
                                <h2>Course name - {data.Name}</h2>
                                <h2>Package - {data.package} /-</h2>
                                <button className='list-btn' onClick={() => ChooseCourse(data)}>choose</button>

                            </div>
                        ))}
                    </div>}

            </div>
            <div>
                <Link to='/'>Logout</Link>
            </div>
        </div>
    )
}

export default Home