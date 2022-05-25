import "./Mainbody.css"
import { useState } from "react"

function Mainbody () {
    
	const { imperial, setImperial } = useState({
		km: 0,
		m: 0,
		dm: 0,
		sm: 0,
		mm: 0,
	})

	const { imp, setImp } = useState({
		km: 0,
		m: 0,
		dm: 0,
		sm: 0,
		mm: 0,
	})

	function insertImperial(e){
		let value = e.target.value

		if (value == Math.E ) {
			console.log("exponential")
			return
		}

		if (value < 0) {
			console.log("Number cannot be less than 0")
			return
		}

		console.log(value)
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
							defaultValue={ imp.km }
						/>
						<select
							className={"l_select l_select_1"}
							name='imperial'
							id='imperial'>
							<option default  value='km'>km</option>
							<option value='m'>m</option>
							<option value='dm'>dm</option>
							<option value='sm'>sm</option>
							<option value='mm'>mm</option>
						</select>
						<input
							className={"l_input l_input_2"}
							placeholder={0}
							defaultValue={imp.m}
							type={"number"}
						/>
						<select
							className={"l_select l_select_2"}
							name='metric'
							id='metric'>
							<option value='km'>km</option>
							<option default value='m'>m</option>
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
