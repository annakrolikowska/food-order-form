import React, { Component } from 'react';
// import DishForm from '../../components/DishForm';
import '../styles/pages-styles/OrderingPage.css'
import Alert from '../components/Alert';
import DishForm from "../components/DishForm";


interface FormState {
    isAlertOpen: boolean;
    message: string;
}

class OrderingPage extends Component<{}, FormState> {
    state: FormState = {
        isAlertOpen: false,
        message: '',
    };

    render() {
        const { isAlertOpen } = this.state;

        return (
            <section className="app-container">
                <header>
                    <h1> Create an order</h1>
                    <img src="/food-img.png" alt="logo" width="80%" height="75%" />
                </header>
                {isAlertOpen && (
                    <Alert
                        onCancel={this.handleCancel}
                        isOpen={isAlertOpen}
                        message={this.state.message}
                    />
                )}
                <DishForm />
            </section>
        );
    }

    handleCancel = () => {
        this.setState({
            isAlertOpen: false,
        });
    };
}

export default OrderingPage;
