import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SmallGrid from '../src/components/SmallGrid'

Enzyme.configure({ adapter: new Adapter() })

const cards = [
  {
    imgSource: 'https://source.unsplash.com/500x500',
    title: 'Image 1',
    subtitle: 'Text description.'
  },
  {
    imgSource: 'https://source.unsplash.com/500x500',
    title: 'Image 2',
    subtitle: 'Text description.'
  }
]

describe('<SmallGrid />', () => {
  it("should render the '.cards' wrapper", () => {
    const wrapper = shallow(<SmallGrid />)
    expect(wrapper.find('.cards')).toHaveLength(1)
  })

  it("should render six '.card' when we use default props", () => {
    const wrapper = shallow(<SmallGrid />)
    expect(wrapper.find('.card')).toHaveLength(6)
  })

  it("should render the same amount of '.card' passed via props", () => {
    const wrapper = shallow(<SmallGrid cards={cards} />)
    expect(wrapper.find('.card')).toHaveLength(2)
  })
})
