'use client'
import React, { useState } from 'react';

// Components
import Text from '@/common/Text'
import RegistrerForm from '../RegistrerForm/index.client';

// Styles
import styles from './index.module.sass';

const questions = [
  {
    id: 1,
    title: 'Work Style',
    questione: 'How do you prefer to work during the day?',
    possibleAnswers: ['Independently and focused', 'Collaboratively with a team', 'A mix of both']
  },
  {
    id: 2,
    title: 'Preferred Environment',
    questione: 'What is your ideal work environment?',
    possibleAnswers: ['Quiet and calm', 'Energetic and dynamic', 'Remote and flexible']
  },
  {
    id: 3,
    title: 'Motivation',
    questione: 'What motivates you the most at work?',
    possibleAnswers: ['Achieving goals', 'Helping others', 'Learning new things']
  },
  {
    id: 4,
    title: 'Tech Skills',
    questione: 'How would you rate your comfort level with technology?',
    possibleAnswers: ['Very comfortable', 'Somewhat comfortable', 'Prefer minimal tech']
  },
  {
    id: 5,
    title: 'Future Vision',
    questione: 'What are you looking to achieve in the next 1–2 years?',
    possibleAnswers: ['Career growth', 'Work-life balance', 'New experiences']
  }
];

const Quize = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ questione: string; answer: string; }[]>([])
  const { possibleAnswers, title, questione } = questions[step - 1] || {}
  const onUnswerClick = (answer: string) => {

    setAnswers((prev) => ([
      ...prev,
      {
        questione,
        answer
      }
    ]
    ))
    if (step < questions.length + 1) {
      setStep((prev) => prev + 1)
    }
  }

  return (
    <div className={styles.quize}>
      {
        step < questions.length + 1 ? (
          <>
            <Text 
              tag="h2" 
              size="large" 
            >
              {title}
            </Text>
            <Text color="gray" className={styles.quize__description}>
              {questione}
            </Text>
            <ul className={styles.quize__list}>
              {
                possibleAnswers.map((answer) => {
                  return (
                    <li
                      key={answer}
                      className={`${styles.quize__button} text--default`}
                      onClick={() => onUnswerClick(answer)}
                    >
                      {answer}
                    </li>
                  )
                })
              }
            </ul>
            <Text size="small" className="margin--t-10 turn--center">
              {step}/{questions.length}
            </Text>
          </>
        ) : (
          <RegistrerForm answers={answers} />
        )
      }
    </div>
  )
}

export default Quize;
