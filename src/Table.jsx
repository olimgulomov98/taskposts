import React, {Component} from "react";
import './index.css'
import data from './data'
import { FaStar} from 'react-icons/fa';
import { RiDeleteBin5Line} from 'react-icons/ri';
import { FaHeart} from 'react-icons/fa';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: data,
            name: '',
            select: 'id'
        }
    }
    render() {

        const onSearch = (e) => {
            const {value} = e.target;
            const res = data.filter((item) => item[this.state.select].toString().toLowerCase().includes(value.toLowerCase()) )
            this.setState({subjects: res})
        }

        const onDelete = (id) => {
            let res = this.state.subjects.filter((value) => value.id !== id)
            this.setState({subjects: res})
        }

        const onEnter  = (e) => {
            const {value} = e.target;
            this.setState({name: value})
        }
      
        const onAdd = () => {
            const newUser = {
              id: this.state.subjects.length + 1,
              name: this.state.name
            }
      
            this.setState({
              subjects: [...this.state.subjects, newUser],
              name: ''
            })
        }

        const onSelect = (e) => {
            const {value} = e.target;
            this.setState({select: value})
        }

        return(
            <div className="container">
                <div className="header">
                    <h3 className='title'>Webbrain Academy</h3>
                    <p className="posts">{this.state.subjects.length} posts</p>
                </div>
                <div>
                    <input type="text" placeholder="Add Posts" className="inputAdd" onChange={onEnter} />
                    <button type="submit" className="btnAdd" onClick={onAdd}>Add</button>
                </div>
                <div>
                    <input type="text" placeholder="Search..." className="inputSearch" onChange={onSearch}/>
                    <select onChange={onSelect} className='selection'>
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <hr />
                <div className="data-wrapper">
                <table >
            <tbody>
                {
                    this.state.subjects.length ? (
                        this.state.subjects.map((value) => {
                            return(
                                <tr key={value.id}>
                                    <td className='data-id'>{value.id}.</td>
                                    <td className='data-name'>{value.name}</td>
                                    <td className='data-btn'>
                                        <div><FaStar /></div>
                                    </td>
                                    <td className='data-btn'>
                                        <div onClick={() => onDelete(value.id)}><RiDeleteBin5Line /></div>
                                    </td>
                                    <td className='data-btn'>
                                        <div><FaHeart /></div>
                                    </td>
                                </tr>
                            )
                        })
                    ) : <h4>No Data</h4>   
                }
            </tbody>
          </table>
                </div>
                
            </div>
        )
    }
}
export default Table