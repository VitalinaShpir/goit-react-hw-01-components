import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomHexColor from '../../getRandomHexColor'


export const Statistics = ({ stats}) => {

return <section className={css.statistics}>
    <h2 className={css.title} style={{ backgroundColor: getRandomHexColor() }}>Upload stats</h2>
  
    <ul className={css.statList}>
        {stats.map((list) => (
          <li
            className={css.item}
            key={list.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{list.label}</span>
            <span className={css.percentage}>{list.percentage}%</span>
          </li>
        ))}
      </ul>
  </section>
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number
      }).isRequired,
    ).isRequired 
  }
