import React from 'react'
import { mount } from 'cypress/react'
import Quiz from '../../src/components/Quiz'  // adjust path as needed

describe('Quiz Component', () => {
  beforeEach(() => {
    // Mock any API calls that the Quiz component makes
    cy.intercept('GET', '/api/questions', {
      statusCode: 200,
      body: [
        {
          id: 1,
          question: 'What does HTML stand for?',
          options: [
            'Hyper Text Markup Language',
            'High Tech Modern Language',
            'Hyper Transfer Markup Language',
            'High Text Machine Language'
          ],
          correctAnswer: 'Hyper Text Markup Language'
        },
        // Add more mock questions as needed
      ]
    }).as('getQuestions')

    // Mount the Quiz component
    cy.mount(<Quiz />)
  })

  it('renders the quiz component', () => {
    // Verify the component renders
    cy.get('[data-cy=quiz-container]').should('exist')
  })

  it('displays questions from the API', () => {
    // Wait for API response
    cy.wait('@getQuestions')
    
    // Verify question is displayed
    cy.get('[data-cy=question-text]')
      .should('contain', 'What does HTML stand for?')
  })

  it('shows all answer options', () => {
    cy.wait('@getQuestions')
    
    // Verify all options are displayed
    cy.get('[data-cy=answer-option]').should('have.length', 4)
    cy.get('[data-cy=answer-option]').first()
      .should('contain', 'Hyper Text Markup Language')
  })

  it('handles answer selection', () => {
    cy.wait('@getQuestions')
    
    // Click an answer
    cy.get('[data-cy=answer-option]').first().click()
    
    // Verify selection is registered (adjust based on your UI feedback)
    cy.get('[data-cy=answer-option]').first()
      .should('have.class', 'selected')  // adjust class name as needed
  })

  it('shows score after completion', () => {
    cy.wait('@getQuestions')
    
    // Answer all questions
    cy.get('[data-cy=answer-option]').first().click()
    cy.get('[data-cy=next-button]').click()
    
    // Verify score display
    cy.get('[data-cy=score-display]').should('exist')
  })
})