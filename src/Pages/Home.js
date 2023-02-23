import React, { Component } from "react";
import Title from '../component/Title'
class Home extends Component {
    render() {
        return (
            <div className="wp">
                <Title text="Book-e-sell"/>
                <Title text="this is my react training project."/>
                <Title text="this ia about component"/>
                <Title text="Home"/>
                <Title text="About"/>
                <Title text="Login"/>

                <div className="container">

                    <h1>This is classbased Home Component</h1>
                </div>
            </div>
        );
    }
}
export default Home;