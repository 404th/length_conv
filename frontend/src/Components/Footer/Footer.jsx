import "./Footer.css"


function Footer () {

    function handleResult() {
        let f_inp = parseInt(document.getElementById("first_input_id").value)
        let f_sel = document.getElementById("first_select_id").selectedOptions[0].value
        let s_sel = document.getElementById("second_select_id").selectedOptions[0].value
        
        let times = calculateResults(f_sel, s_sel)
        document.getElementById("second_input_id").setAttribute("value", times*f_inp)
    }

    function calculateResults(attr, toAttr) {
        let k = 1
        let h = 1
        
        if (attr === "km"){
            k = 1000
        } else if (attr === "m"){
            k = 1
        } else if (attr === "dm"){
            k = 0.1
        } else if (attr === "sm"){
            k = 0.01
        } else if (attr === "mm"){
            k = 0.001
        } else {
            k = 0
        }

        if (toAttr === "km"){
            h = 1000
        } else if (toAttr === "m"){
            h = 1
        } else if (toAttr === "dm"){
            h = 0.1
        } else if (toAttr === "sm"){
            h = 0.01
        } else if (toAttr === "mm"){
            h = 0.001
        } else {
            h = 0
        }

        return k / h
    }



    return (
        <div className={"footer"}>
            <button
                className={"convert_button"}
                id={"convert_button"}
                onClick={() => handleResult()}
            >
                Convert
            </button>
        </div>
    )
}

export default Footer