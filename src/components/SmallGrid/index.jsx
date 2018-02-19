import { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import { array } from 'prop-types' // eslint-disable-line import/no-extraneous-dependencies
import './SmallGrid.css'

export default class SmallGrid extends Component {
  static defaultProps = {
    cards: [
      {
        imgSource: 'https://source.unsplash.com/500x500',
        imgAlt: 'random image from unsplash',
        title: 'The Title',
        subtitle: 'Small text description.'
      },
      {
        imgSource: 'https://source.unsplash.com/500x500',
        imgAlt: 'random image from unsplash',
        title: 'The Title',
        subtitle: 'Small text description.'
      },
      {
        imgSource: 'https://source.unsplash.com/500x500',
        imgAlt: 'random image from unsplash',
        title: 'The Title',
        subtitle: 'Small text description.'
      },
      {
        imgSource: 'https://source.unsplash.com/500x500',
        imgAlt: 'random image from unsplash',
        title: 'The Title',
        subtitle: 'Small text description.'
      },
      {
        imgSource: 'https://source.unsplash.com/500x500',
        imgAlt: 'random image from unsplash',
        title: 'The Title',
        subtitle: 'Small text description.'
      },
      {
        imgSource: 'https://source.unsplash.com/500x500',
        imgAlt: 'random image from unsplash',
        title: 'The Title',
        subtitle: 'Small text description.'
      }
    ]
  };

  static propTypes = {
    cards: array
  };

  state = {
    cards: this.props.cards
  };

  componentWillReceiveProps ({ cards }) {
    if (cards !== this.props.cards) {
      this.setState({ cards })
    }
  }

  render () {
    const { cards } = this.props
    return (
      <ul className='cards'>
        {cards.map((card, index) => (
          <li className='card' key={index}>
            <a href='#'>
              <figure className='card__thumbnail'>
                <img src={card.imgSource} alt={card.imgAlt} />
              </figure>
              <div className='card__caption'>
                <h2 className='card__title'>{card.title}</h2>
                <span className='card__subtitle'>{card.subtitle}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    )
  }
}
