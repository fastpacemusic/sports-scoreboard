import "./form.css";

interface formData {
    form: string;
}

const Form = ({form}: formData) => {

    const splitForm = form.split('');

    const seperatedForm = splitForm.map((item: string, index: number) => {

        switch (item) {
            case 'W':
                return <div key={index} className="form-win">W</div>;
            case 'D': 
                return <div key={index} className="form-draw">D</div>;
            case 'L': 
               return <div key={index} className="form-loss">L</div>;
    
        }
    });

    return( 
        <div className="form-wrap">{seperatedForm}</div>
    );
}

export default Form;