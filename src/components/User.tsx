import React from 'react';
import App from '../App';

// import { Container } from './styles';
interface IUser {
    name: string;
    email: string;
  }
interface IProps {
    user:IUser;
}

const User: React.FC<IProps> = ({user}) => {
    return (
        <div>
            <strong>Nome: </strong>{user.name}<br/>
            <strong>E-mail: </strong>{user.email}<br/>
        </div>
    );
};

export default User;