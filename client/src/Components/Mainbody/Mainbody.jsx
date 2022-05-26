import { useState } from "react"
import "./Mainbody.css"

function Mainbody () {
    
	const [ imperial, setImperial ] = useState({
		km: 0,
		m: 0,
		dm: 0,
		sm: 0,
		mm: 0,
	})

	const [ currentUnit, setCurrentUnit ] = useState('km')

	function insertImperial(e){
		let { value } = e.target
	
		switch (currentUnit){
			case "km":
				setImperial({
					km: value,
					m: value*1000,
					dm: value*10000,
					sm: value*100000,
					mm: value*1000000,
				})
				break;
			case "m":
				setImperial({
					km: value/1000,
					m: value,
					dm: value*10,
					sm: value*100,
					mm: value*1000,
				})
				break;
			case "dm":
				setImperial({
					km: value/10000,
					m: value/10,
					dm: value,
					sm: value*10,
					mm: value*100,
				})
				break;
			case "sm":
				setImperial({
					km: value/100000,
					m: value/100,
					dm: value/10,
					sm: value,
					mm: value*10
				})
				break;
			case "mm":
				setImperial({
					km: value/1000000,
					m: value/1000,
					dm: value/100,
					sm: value/10,
					mm: value,
				})
				break;
				default:
					console.error("Some error happened in switch case!")
					break;
			}
	}

	function selectOption(e) {
		setCurrentUnit(Number(e.target.value))
		console.log(imperial)
	}

	return (
        <div className={"main"}>
				<div className={"convertor"}>
					<div className={"convertor_header"}>
						<div className={"title_container title_container_1"}>
							<h2 className={"title title_1"}>Imperial Length</h2>
						</div>
						<div className={"title_container"}>
							<h2 className={"title title_2"}>Metric Length</h2>
						</div>
					</div>
					<div className={"convertor_body"}>
						<input
							className={"l_input l_input_1"}
							placeholder={0}
							onChange={e => insertImperial(e)}
							type={"number"}
						/>
						<select
							className={"l_select l_select_1"}
							name='imperial'
							id='imperial'
							onChange={e => selectOption(e)}
							defaultValue={"km"}	
						>
							<option value='km'>km</option>
							<option value='m'>m</option>
							<option value='dm'>dm</option>
							<option value='sm'>sm</option>
							<option value='mm'>mm</option>
						</select>
						<input
							className={"l_input l_input_2 noselect"}
							placeholder={0}
							type={"number"}
							readOnly
						/>
						<select
							className={"l_select l_select_2 noselect"}
							name='metric'
							id='metric'
							onSelect={e => selectOption(e)}
							defaultValue={"m"}
							readOnly
						>
							<option value='km'>km</option>
							<option value='m'>m</option>
							<option value='dm'>dm</option>
							<option value='sm'>sm</option>
							<option value='mm'>mm</option>
						</select>
					</div>
				</div>
			</div>
    )
}

export default Mainbody
