import "./Mainbody.css"

function Mainbody () {
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
							name="first_input"
							id="first_input_id"
							type={"number"}
						/>
						<select
							className={"l_select l_select_1"}
							name='first_select'
							id='first_select_id'
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
							name="second_input"
							id="second_input_id"
							type={"number"}
							readOnly
						/>
						<select
							className={"l_select l_select_2 noselect"}
							name='second_select'
							id='second_select_id'
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
