'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee } from '@/types'
import { coffees } from '@/data/coffees'
import { modalVariants, backdropVariants, containerVariants, itemVariants } from '@/lib/animation-variants'
import { X, CheckCircle } from 'lucide-react'

interface CoffeeQuizProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Interactive coffee quiz to help users find their perfect coffee
 */
export function CoffeeQuiz({ isOpen, onClose }: CoffeeQuizProps) {
  const [step, setStep] = useState(0)
  const [selections, setSelections] = useState({
    flavor: '',
    body: '',
    origin: '',
    roast: ''
  })
  const [recommendation, setRecommendation] = useState<Coffee | null>(null)

  const questions = [
    {
      id: 'flavor',
      question: 'What flavor profile do you prefer?',
      options: [
        { value: 'fruity', label: 'Fruity & Floral' },
        { value: 'nutty', label: 'Nutty & Chocolatey' },
        { value: 'earthy', label: 'Earthy & Spicy' },
        { value: 'balanced', label: 'Balanced & Smooth' }
      ]
    },
    {
      id: 'body',
      question: 'How strong do you like your coffee?',
      options: [
        { value: 'light', label: 'Light & Bright' },
        { value: 'medium', label: 'Medium Body' },
        { value: 'full', label: 'Full & Bold' }
      ]
    },
    {
      id: 'origin',
      question: 'Where should your coffee come from?',
      options: [
        { value: 'africa', label: 'Africa' },
        { value: 'americas', label: 'Americas' },
        { value: 'asia', label: 'Asia/Pacific' },
        { value: 'any', label: 'Anywhere!' }
      ]
    },
    {
      id: 'roast',
      question: 'How dark do you like your roast?',
      options: [
        { value: 'light', label: 'Light Roast' },
        { value: 'medium', label: 'Medium Roast' },
        { value: 'dark', label: 'Dark Roast' }
      ]
    }
  ]

  const handleSelection = (value: string) => {
    const currentQuestion = questions[step]
    setSelections(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }))
  }

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      findRecommendation()
    }
  }

  const findRecommendation = () => {
    // Simple recommendation algorithm
    let filtered = coffees

    // Filter by flavor notes
    if (selections.flavor && selections.flavor !== 'balanced') {
      filtered = filtered.filter(c =>
        c.flavor.some(f => f.includes(selections.flavor))
      )
    }

    // Filter by roast level
    if (selections.roast && selections.roast !== 'medium') {
      filtered = filtered.filter(c => c.roastLevel === selections.roast)
    }

    // Filter by origin
    if (selections.origin && selections.origin !== 'any') {
      const originMap: { [key: string]: string[] } = {
        africa: ['Ethiopia', 'Kenya', 'Tanzania', 'Rwanda'],
        americas: ['Colombia', 'Costa Rica', 'Brazil', 'Guatemala'],
        asia: ['Indonesia', 'Papua New Guinea', 'Madagascar']
      }
      const countries = originMap[selections.origin] || []
      filtered = filtered.filter(c => countries.includes(c.origin))
    }

    const recommended = filtered.length > 0 ? filtered[0] : coffees[Math.floor(Math.random() * coffees.length)]
    setRecommendation(recommended)
  }

  const handleReset = () => {
    setStep(0)
    setSelections({ flavor: '', body: '', origin: '', roast: '' })
    setRecommendation(null)
  }

  const handleClose = () => {
    handleReset()
    onClose()
  }

  const currentQuestion = questions[step]
  const currentSelection = selections[currentQuestion?.id as keyof typeof selections]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="fixed inset-0 bg-black/40 backdrop-blur z-40"
          />
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
                <h2 className="text-2xl font-serif font-bold">Find Your Perfect Coffee</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                {!recommendation ? (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={step}
                  >
                    {/* Progress */}
                    <motion.div
                      variants={itemVariants}
                      className="mb-6"
                    >
                      <div className="flex gap-2">
                        {questions.map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 flex-1 rounded-full transition-colors ${
                              i <= step ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-foreground/60 mt-2">
                        Question {step + 1} of {questions.length}
                      </p>
                    </motion.div>

                    {/* Question */}
                    <motion.h3
                      variants={itemVariants}
                      className="text-xl font-semibold mb-6"
                    >
                      {currentQuestion.question}
                    </motion.h3>

                    {/* Options */}
                    <motion.div
                      variants={containerVariants}
                      className="space-y-3 mb-6"
                    >
                      {currentQuestion.options.map((option) => (
                        <motion.button
                          key={option.value}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02, x: 8 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSelection(option.value)}
                          className={`w-full p-4 rounded-lg border-2 text-left transition-all font-medium ${
                            currentSelection === option.value
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {option.label}
                        </motion.button>
                      ))}
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                      variants={itemVariants}
                      className="flex gap-3"
                    >
                      {step > 0 && (
                        <button
                          onClick={() => setStep(step - 1)}
                          className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors flex-1 font-medium"
                        >
                          Back
                        </button>
                      )}
                      <button
                        onClick={handleNext}
                        disabled={!currentSelection}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors flex-1 font-medium"
                      >
                        {step === questions.length - 1 ? 'Get Recommendation' : 'Next'}
                      </button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Success state */}
                    <motion.div
                      variants={itemVariants}
                      className="text-center mb-6"
                    >
                      <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-serif font-bold mb-2">We Found Your Match!</h3>
                    </motion.div>

                    {/* Recommendation */}
                    <motion.div
                      variants={itemVariants}
                      className="bg-card border border-border rounded-lg p-6 mb-6"
                    >
                      <h4 className="text-xl font-serif font-bold mb-2">
                        {recommendation.name}
                      </h4>
                      <p className="text-foreground/70 mb-4">
                        {recommendation.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold">
                          GHC {(recommendation.price * 25).toFixed(2)}
                        </span>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {recommendation.origin}
                        </span>
                      </div>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                      variants={itemVariants}
                      className="space-y-3"
                    >
                      <a href={`/coffees/${recommendation.id}`}>
                        <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                          View Full Details
                        </button>
                      </a>
                      <button
                        onClick={handleReset}
                        className="w-full px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors"
                      >
                        Try Again
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
