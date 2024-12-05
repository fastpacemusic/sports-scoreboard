import "./form.css";

interface formData {
    form: string;
}

const Form = ({form}: formData) => {

    const splitForm = form.split('');

    const lastGame = splitForm.length - 1;

    const seperatedForm = splitForm.map((item: string, index: number) => {

        const isLastGame = index === lastGame;

        switch (item) {
            case 'W':
                return <div key={index} style={{border: isLastGame ? "2px solid black" : "none"}} className="form-win">W</div>;
            case 'D': 
                return <div key={index} style={{border: isLastGame ? "2px solid black" : "none"}} className="form-draw">D</div>;
            case 'L': 
               return <div key={index} style={{border: isLastGame ? "2px solid black" : "none"}} className="form-loss">L</div>;
            
        }
    });

    return( 
        <div className="form-wrap">{seperatedForm}</div>
    );
}

export default Form;