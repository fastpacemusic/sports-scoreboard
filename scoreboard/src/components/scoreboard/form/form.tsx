import "./form.css";

interface formData {
    form: any
}

const Form = ({form}: formData) => {

    const splitForm = form.split('');


    const seperatedForm = splitForm.map((item: string, index: number) => {

        switch (item) {
            case 'W':
                return <td key={index} className="form-win">W</td>;
            case 'D': 
                return <td key={index} className="form-draw">D</td>;
            case 'L': 
               return <td key={index} className="form-loss">L</td>;
    
        }
    });

    return( 
        <div className="form-wrap">{seperatedForm}</div>
    );
}

export default Form;