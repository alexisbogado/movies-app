describe('Discover view', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.themoviedb.org/3/discover/movie?*')
      .as('discoverMovies')

    cy.intercept('GET', 'https://api.themoviedb.org/3/genre/movie/list?*')
      .as('genreList')
    
    cy.visit('/discover')
  })

  it('renders without crashing', () => {
    cy.get('a')
      .contains('Wesley')
  })

  it('render the available movies to discover and the total movies', () => {
    const genreList = [ ]
    const getGenresAsString = (genres) => genres.map(id => genreList[id]).join(' | ')

    cy.get('[data-testid="spinner"]')
      .should('be.visible')

    cy.wait('@genreList')
      .then(({ response }) => {
        const { genres } = response.body

        genres.forEach(({ id, name }) => genreList[id] = name)
      })

    cy.wait('@discoverMovies')
      .then(({ response }) => {
        const { total_results, results } = response.body

        cy.get('[data-testid="spinner"]')
          .should('not.exist')

        cy.get('[data-testid="movies-result"] > div')
          .first()
          .invoke('text')
          .should('eq', `${total_results} movies`)

        cy.get('[data-testid="movies-list"] > div')
          .should('have.length', results.length)
          .each((element, index) => {
            const {
              poster_path, 
              title,
              vote_average,
              overview,
              release_date,
              genre_ids
            } = results[index]
            
            cy.wrap(element)
              .find('img')
              .should('have.attr', 'alt', title)
              .should('have.attr', 'src')
              .and('contain', poster_path)

            cy.wrap(element)
              .find('[data-testid="movie-information"] > header > div')
              .first()
              .invoke('text')
              .should('equal', title)

            cy.wrap(element)
              .find('[data-testid="movie-information"] > header > div')
              .eq(1)
              .invoke('text')
              .should('equal', vote_average.toString())

            cy.wrap(element)
              .find('[data-testid="movie-information"] > small')
              .first()
              .invoke('text')
              .should('equal', getGenresAsString(genre_ids))

            cy.wrap(element)
              .find('[data-testid="movie-information"] > p')
              .first()
              .invoke('text')
              .should('equal', overview)

            cy.wrap(element)
              .find('[data-testid="movie-information"] > footer')
              .first()
              .invoke('text')
              .should('equal', release_date)
          })
      })
  })
})
