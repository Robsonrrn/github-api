import {
    Container,
    ProfilePicture
} from './styles';

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props.url} alt="Robsonrrn" />
    </Container>
);

export default UserPicture;