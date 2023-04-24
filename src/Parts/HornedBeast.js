import React from 'react';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);

        // Set the starting state at zero because what else would it be set at?? 69???
        this.state = {
            favorites: 0, // See I told ya, set at zero.
        };

        // Binds the "handleClick" function to this component
        this.handleClick = this.handleClick.bind(this);
    }

    // This is for clickin the heart icon
    handleClick() {
        //increments the number of favorites for this beast
        this.setState((prevState) => ({
            favorites: prevState.favorites + 1,
        }));
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img className="image" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />

                {/* The heart icon with the number of favorites next to it */}
                <div>
                    <span role="img" aria-label="heart" onClick={this.handleClick}>❤️</span>
                    <span>{this.state.favorites}</span>
                </div>

                <p>{this.props.description}</p>
            </div>
        );
    }
}


export default HornedBeast;