import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);

  return (
    <>
      <h1> {title} </h1>
      {/* <code> { JSON.stringify( newMessage ) } </code> */}
      <p> {subTitle} </p>
      <p> {name} </p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  name: 'Alan Vázquez',
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
};
