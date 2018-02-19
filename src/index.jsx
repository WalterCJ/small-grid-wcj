/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-dom'
import SmallGrid from './components/SmallGrid'
import './index.css'
const root = document.getElementById('root')

render((
  <section class='wrapper'>
    <SmallGrid />
  </section>
), root)
