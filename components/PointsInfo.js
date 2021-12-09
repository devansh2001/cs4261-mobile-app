import { Container, Text, Popover, Button, HStack } from 'native-base';
import React from 'react';

// https://docs.nativebase.io/popover
const InfoButton = (
    <Popover
        trigger={
            (props) => {
                return <Button {...props} px={1} py={0}>?</Button>
            }
        }
    >
        <Popover.Content>
            <Popover.Body>You can earn honeypots each time you book or complete a service. Use these points for amazing rewards like discounts, merch, lucky draws, and more!</Popover.Body>
        </Popover.Content>
    </Popover>
)


class PointsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                'points': 'Loading...'
            }
        }
        this.rewardsThresholds = [
            'getting 10% off any service!',
            'getting a BusyBee branded T-shirt!',
            'getting a chance to enter a lucky draw for the new iPhone 13 Pro!',
        ]
    }

    findNextClosestPoints = () => {
        if (this.state.user.points === 'Loading...') {
            return '';
        }

        try {
            const points = parseInt(this.state.user.points);
            if (points > 0) {
                return 'You are only ' + (500 - points) + ' honeypots away from ' + this.rewardsThresholds[0];
            }
            else if (points > 500) {
                return 'You are only ' + (1000 - points) + ' honeypots away from ' + this.rewardsThresholds[1];
            } else if (points > 1000) {
                return 'You are only ' + (2500 - points) + ' honeypots away from ' + this.rewardsThresholds[2];
            }

        } catch (e) {
            return '';
        }
        

    }

    refreshPoints = async () => {
        await fetch('https://cs4261-users-service.herokuapp.com/get-user/' + this.props.user)
        .then(data => data.json())
        .then(data => this.setState({
            user: data['user']
        }))
        .catch(err => console.log('error getting points'))
    }

    componentDidMount = () => {
        this.refreshPoints()
    }

    render() {
        return (
            <Container>
                {/* https://docs.nativebase.io/popover */}
                <HStack space={3}>
                <Text>
                    You have { this.state.user.points } honeypots! {InfoButton}
                </Text>
                <Button px={1} py={0} onPress={this.refreshPoints}>Refresh</Button>
                </HStack>
                <Text>
                    { this.findNextClosestPoints() }
                </Text>

            </Container>
        )
    }


}

export default PointsInfo;