import App from './App'

const { render, screen } = require('@testing-library/react')

test.skip('Should render the header', async () => {
  render(<App />)

  const headerText = await screen.findByText(/vonta/i)

  const headerImg = screen.getByAltText(/alchemy/i)

  expect(headerText).toBeInTheDocument()
  expect(headerImg).toBeInTheDocument()
})
