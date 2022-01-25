import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}
test(' making usre the user have all the right properties', () => {
  render(<Home user={user} />)

  expect(user).toHaveProperty('id')
  expect(user).toHaveProperty('name')
  expect(user).toHaveProperty('avatar')
  expect(user).toHaveProperty('header')
  expect(user).toHaveProperty('likes')
  expect(user).toHaveProperty('motto')
  expect(user).toHaveProperty('color')
})

test('Should render the user profile', async () => {
  render(<Home user={user} />)
  const { name, likes, motto, color } = user

  const headingName = await screen.findByRole('heading', { name })
  const img = await screen.findByAltText('header')
  const thumbImg = await screen.findByAltText('avatar')
  const cardLikes = await screen.findByRole('list')
  const interestsHeading = screen.getByText(/interests/i)
  const cardMotto = await screen.findByText(motto)
  const cardcolor = screen.getByText(color)

  expect(thumbImg).toBeInTheDocument()
  expect(headingName).toBeInTheDocument()
  expect(cardLikes.children.length).toEqual(likes.length)
  expect(interestsHeading).toBeInTheDocument()
  expect(cardMotto).toBeInTheDocument()
  expect(cardcolor).toBeInTheDocument()
})
