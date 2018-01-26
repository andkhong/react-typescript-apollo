import * as React from 'react';
import Calendar from 'shared/Calendar';
// import Dropdown from 'shared/Dropdown';

interface Props {
    isAuth: boolean;
    toggleAuthForms: (form: string) => void;
}

interface State {
    dates: any;
}

class Form extends React.Component<Props, State> {
    state = {
        dates: {}
    }

    requestToBook = (e: any) => {
        e.preventDefault();
        // if(!this.props.isAuth) {
        //     this.props.toggleAuthForms('Login');
        // }
    }

    collectCalendarDates = (dates: any) => this.setState({ dates })

    render(){
        return (
            <div>
                <form onSubmit={this.requestToBook}>
                    <Calendar collectCalendarDates={this.collectCalendarDates}  />
                    <button>Request To Book</button>
                </form>
            </div>
        )
    }
}

export default Form;