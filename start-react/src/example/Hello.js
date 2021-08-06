import React, { Component } from 'react';

class Hello extends Component {
    render() {
        const { name, children } = this.props;

        return (
            <div>
                안녕하세요, 저는 {name} 입니다.
                <br />
                부모 컴포넌트로부터 받은 값은 {children} 입니다.                
            </div>
        );
    }
}

export default Hello;