/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "../App.css";
import Button from "../elements/Button";

function Square(props) {
    return (
        <div className="cards">
            <div>
                <img src={props.profile} alt="profile picture" className="avatar" />
                <h2>{props.nama}</h2>
                <p>{props.nim}</p>
                <p>{props.email}</p>
            </div>
            <a href={props.github} target="_blank" rel="noreferrer">
                <Button background="blue" type="submit">
                    Github
                </Button>
            </a>
        </div>
    );
}
export default class Card extends Component {
    render() {
        const bgColor = {
            backgroundColor: this.props.bgColor,
        };
        return (
            <div className="User-cards">
                <div className="User-info" style={bgColor}>
                    <a className="User1">
                    <Square 
                        nama="Fadillah Hamdi Wanadi"
                        nim="21120120120025"
                        profile="https://avatars.githubusercontent.com/u/82199379?s=400&v=4"
                        email="fadhilhamdi@students.undip.ac.id"
                        github="https://github.com/FadillahHamdi"/></a>
                    <a className ="User2">
                    <Square 
                        nama="Rina Santika"
                        nim="21120120120030"
                        profile="https://avatars.githubusercontent.com/u/82654709?v=4"
                        email="rinasantika@students.undip.ac.id"
                        github="https://github.com/RinaSantika"/></a>
                    <a className ="User3">
                    <Square 
                        nama="Arif Zulham Bagaskara"
                        nim="21120120140065"
                        profile="https://avatars.githubusercontent.com/u/82701618?v=4"
                        email="arifzulham@students.undip.ac.id"
                        github="https://github.com/ArifZulham"/></a>
                    <a className ="User4">
                    <Square 
                        nama="Aulya Thareeq Pravantawidya"
                        nim="21120120140099"
                        profile="https://avatars.githubusercontent.com/u/82759266?v=4"
                        email="aulyatp@students.undip.ac.id"
                        github="https://github.com/athareeqp"/></a>
                </div>
            </div>
        );
    }
}