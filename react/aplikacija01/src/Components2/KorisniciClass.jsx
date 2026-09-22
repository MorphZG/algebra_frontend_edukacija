import React from "react";

export default class KorisniciClass extends React.Component {

    render() {
        const { ime, god } = this.props;
        return (
            <>
                <h1>KorisniciClass</h1>
                <p>
                    Pozdrav moje ime je {ime} i imam {god} godina
                </p>
            </>
        );
    }
}
