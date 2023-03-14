import {react, useEffect, useState } from 'react';
import Navbar from '../NavBar/Navbar'
import Result from '../Result/Result';
import './History.css'
export function History() {
    const [history, setHistory] = useState([]);
    const [filter, setFilter] = useState({});
  
    useEffect(() => {
      const storedHistory = JSON.parse(localStorage.getItem('phoneVerificationHistory')) || [];
      setHistory(storedHistory);
    }, []);
  
    const handleFilterChange = (event) => {
      const newFilter = {
        ...filter,
        [event.target.name]: event.target.value,
      };
      setFilter(newFilter);
    }
  
    const filteredHistory = history.filter((item) => {
      let matchesFilter = true;
      if (filter.number && !item.number.includes(filter.number)) {
        matchesFilter = false;
      }
    
      if (filter.startDate && new Date(item.date) < new Date(filter.startDate)) {
        matchesFilter = false;
      }
      if (filter.endDate && new Date(item.date) > new Date(filter.endDate)) {
        matchesFilter = false;
      }
      return matchesFilter;
    });
  
    return (
      <div className='History'>
              <Navbar items={["Search","History"]} nav={["/Search","/History"]}/>

        <h2 style={{color:"var(--primary-light)"}}>Verification History</h2>
        <div>
          <label >
            Phone Number:
            <input type="text" name="number" value={filter.number || ''} onChange={handleFilterChange} />
          </label>
          <label>
            
          </label>
          <label>
            Start Date:
            <input type="date" name="startDate" value={filter.startDate || ''} onChange={handleFilterChange} />
          </label>
          <label>
            End Date:
            <input type="date" name="endDate" value={filter.endDate || ''} onChange={handleFilterChange} />
          </label>
        </div>
        <table>
          <tbody className='History_TBody'>
            {filteredHistory.map((item) => (
              <Result data={item} />
              // <tr key={item.date}>
              //   <td>{item.number}</td>
              //   <td>{item.date.toLocaleString()}</td>
              // </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  