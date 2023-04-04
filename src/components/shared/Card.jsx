import PropTypes from 'prop-types'


function Card({ children, reverse }) {
  //conditional class example
  //return (<div className={`card ${reverse && 'reverse'}`}> {children}</div>
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "white",
        color: reverse ? "white" : "rgba(0,0,0,0.4)",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card;