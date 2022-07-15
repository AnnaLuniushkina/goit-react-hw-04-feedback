import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section className='Feedback__section'>
            {<h2 className='Feedback__title'>{title}</h2>}
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object.isRequired,
};

export default Section;