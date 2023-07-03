import {MoreButton} from 'components/Button/Button.styled'
import PropTypes from 'prop-types';

export const Button = ({text, onClick}) => {
    return <MoreButton type='button' className='button' onClick={onClick}>{text}</MoreButton>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}