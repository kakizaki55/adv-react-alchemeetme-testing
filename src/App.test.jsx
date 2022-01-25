import App from './App'

const { render, screen } = require('@testing-library/react')

test('Should render the header', async () => {
  render(<App />)

  const headerText = await screen.findByText(/vonta/i)
  const headerImg = screen.getByAltText(/alchemy/i)
  const header = screen.getByRole('banner')

  expect(headerText).toBeInTheDocument()
  expect(headerImg).toBeInTheDocument()
  expect(header).toHaveStyle({ 'background-color': 'var(--grey)' })
})
