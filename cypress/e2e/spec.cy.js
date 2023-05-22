describe('API testing', () => {
  it('POST a todo', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/todos',
      body: {
        title: 'New Todo Title',
        completed: true,
      },
    }).then((response) => {
      expect(response.body).to.have.property('id', 201);
      cy.log(response.body.id);
    }
    );
  })

  it('GET all users', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body);
    }
    );
})
})