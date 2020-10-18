import React,{Component} from 'react';

class Table extends Component {
	constructor(props) {
		super(props)
		this.state = {
			students:[
				{id: 1, name: 'Mohamed', age: 35,email: 'a@b.com'},
				{id: 1, name: 'Abdul', age: 35,email: 'a@b.com'},
				{id: 1, name: 'Rahman', age: 35,email: 'a@b.com'},
				{id: 1, name: 'Shafi', age: 35,email: 'a@b.com'}
				]
			}
		}

renderTableData() {
	return this.state.students.map((student, index) => {
		const {id,name,age,email } = student
		return(
			<tr key={id}>
				<td>{id}</td>
				<td>{name}</td>
				<td>{age}</td>
				<td>{email}</td>
			</tr>
			)
		})
}

renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }


	render() {
		return(
			<div>
				<h1 id='title'>React Dynamic Table</h1>
				<table id='students'>
					<tbody>
						<tr>{this.renderTableHeader()}</tr>
						{this.renderTableData()}
					</tbody>
				</table>
			</div>
			)
		}
	}

export default Table;
