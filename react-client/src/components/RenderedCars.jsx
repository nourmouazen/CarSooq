import React, { Component } from "react";
// import Edit from './edit';
import { Link } from 'react-router-dom';
import axios from "axios";
 const RenderCars = props => (
     <tr>
         <td>{props.car.brand}</td>
         <td>{props.car.year}</td>
         <td>{props.car.colour}</td>
         <td>{props.car.id}</td>
        <td><Link to ={'/Update/'+props.car.id}>Edit</Link></td>

     </tr>
 )
export default class RenderedCars extends Component {
    constructor(props) {
        super(props);
        this.state = {
          carInfo: []
        }
    }
    componentDidMount() {
         axios.get("http://localhost:3000/cars")
            .then( res => {
                this.setState({carInfo: res.data})
                // console.log(this.state.carInfo);
            })
            .catch((error) => {
                console.log(error);
            })
    }
   CarsList() {
        return this.state.carInfo.map(currentItem => {
            return <RenderCars car = { currentItem } key = {currentItem.id}/>;
            // deleteItem = { this.deleteItem } key = { currentItem._id }
        })
    }
    render() {
        return (
            <div>
                  <h2>Cars</h2>
                 <table className = "table">
                 <thead className = "thead">
                     <tr>
                         <th>Brand</th>
                         <th>Year</th>
                         <th>colour</th>
                     </tr>
                 </thead>
                 <tbody>
                     {this.CarsList()}
                 </tbody>
                 </table>
            </div>
        )
    }
}