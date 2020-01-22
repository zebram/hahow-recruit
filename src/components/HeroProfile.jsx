import React from 'react';
import './heroProfile.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


class HeroProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: null,
            remains: 0,
        }
    }
    componentWillReceiveProps(nextProps) {
        const { profile } = nextProps;
        this.setState({
            attributes: profile
        });
    }
    
    renderAttrTable = (attributes) => {
        return (
            <Container className="attributes-table">
            { 
                Object.keys(attributes).map(
                    key => this.renderAttrInput(key, attributes[key])
                )
            }
            </Container>
        );
    }

    renderAttrInput = (name, value) => {
        const { remains } = this.state;
        return (
            <Row key={ name } className="attribute-input">
                <Col>
                    <label>{ name }</label>
                </Col>
                <Col>
                    {
                        remains ? (
                            <Button 
                                variant="outline-secondary" 
                                onClick={ () => this.handleAttrChange(name, true) }
                            >+</Button>
                        ) : (
                            <Button variant="outline-secondary" disabled>+</Button>
                        )
                    }
                </Col>
                <Col>
                    <label>{ value }</label>
                </Col>
                <Col>
                    {
                        value ? (
                            <Button 
                                variant="outline-secondary" 
                                onClick={ () => this.handleAttrChange(name, false)}
                            >-</Button> 
                        ) : (
                            <Button variant="outline-secondary" disabled>-</Button>
                        )
                    }
                </Col>
            </Row>
        );
    }

    handleAttrChange = (attr, isInc) => {
        const { attributes, remains } = this.state;
        this.setState({
            remains: isInc ? remains - 1 : remains + 1,
            attributes: {
                ...attributes,
                [attr]: isInc ? attributes[attr] + 1 : attributes[attr] - 1 
            }
        })
    }

    render() {
        const { remains, attributes } = this.state;
        return attributes ? (
            <form className="hero-profile">
                {
                    this.renderAttrTable(attributes)
                }
                <div className="">
                    <div>
                        <label>剩餘點數:{ remains }</label>
                    </div>
                    <div>
                        {
                            remains ? (
                                <Button disabled>Save</Button>
                            ) : (
                                <Button 
                                    onClick={
                                        () => {}
                                    }
                                >Save</Button>
                            )
                        }
                    </div>
                </div>
            </form>
        ) : null
    }
}

export default HeroProfile;