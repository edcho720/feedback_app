import PropTypes from 'prop-types'

// a style component
function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps = {
    reverse: false,

}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card