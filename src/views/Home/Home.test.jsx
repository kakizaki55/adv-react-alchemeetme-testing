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

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const name = await screen.findByRole('heading', { name: /vonta/i })

  const img = await screen.findByAltText('header')
  const thumbImg = await screen.findByAltText('avatar')
  const likes = await screen.findByRole('list')
  const interestsHeading = screen.getByText(/interests/i)

  expect(img).toBeInTheDocument()
  expect(thumbImg).toBeInTheDocument()
  expect(name).toBeInTheDocument()

  expect(likes.children.length).toEqual(6)
  expect(interestsHeading).toBeInTheDocument()
})
