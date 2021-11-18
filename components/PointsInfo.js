import { Container, Text } from 'native-base';
import React from 'react';

class PointsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                'points': 'Loading...'
            }
        }
    }

    componentDidMount = async () => {

        await fetch('https://cs4261-users-service.herokuapp.com/get-user/' + this.props.user)
        .then(data => data.json())
        .then(data => this.setState({
            user: data['user']
        }))
        .catch(err => console.log('error getting points'))
    }

    render() {
        return (
            <Container>
                <Text>
                    { this.state.user.points } points
                </Text>
            </Container>
        )
    }


}

export default PointsInfo;