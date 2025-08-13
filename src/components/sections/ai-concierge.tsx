'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, UserCircle, Headphones, Sparkles, Zap, Lightbulb, Brain } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  timestamp: Date
}

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your AI Design Concierge. I can help you explore our luxury outdoor builds, answer questions about our services, and guide you through design options. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    }, 1000)
  }

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('court') || input.includes('basketball')) {
      return "Great choice! Our basketball courts start with championship-grade surfaces and can include custom logos, professional lighting, and premium fencing. Would you like to explore our court configurator to see pricing and options for your space?"
    }
    
    if (input.includes('pool') || input.includes('swimming')) {
      return "Our custom pools are truly spectacular! We specialize in infinity edges, smart automation, and luxury finishes. Each pool is designed to complement your home's architecture. Would you like to see our pool styles or discuss your vision?"
    }
    
    if (input.includes('trampoline')) {
      return "Our inground trampolines are safety-engineered with premium drainage systems and beautiful turf surrounds. They're much safer than above-ground options and create a seamless look in your yard. What size space are you considering?"
    }
    
    if (input.includes('playhouse') || input.includes('playground')) {
      return "We create amazing custom playhouses and mini-parks! From castle designs to modern play structures, all with safety surfacing and creative features. Do you have children of specific ages we should design for?"
    }
    
    if (input.includes('green') || input.includes('putting')) {
      return "Our putting greens use professional-grade synthetic turf with custom contours and can include chipping zones. They're perfect for practicing your short game at home. What's your current golf skill level?"
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('budget')) {
      return "Our projects are custom-designed, so pricing varies based on size, features, and site conditions. We offer transparent phase-based pricing and can work with various budgets. Would you like to schedule a consultation to discuss your specific project and get accurate pricing?"
    }
    
    if (input.includes('area') || input.includes('location') || input.includes('dallas') || input.includes('fort worth')) {
      return "We serve the entire DFW metro area including Dallas, Fort Worth, Frisco, Plano, McKinney, Allen, Prosper, Southlake, Highland Park, University Park, Celina, Trophy Club, Colleyville, Argyle, and Flower Mound. Are you located in one of these areas?"
    }
    
    if (input.includes('process') || input.includes('how') || input.includes('timeline')) {
      return "Our process is streamlined: 1) Consultation to discuss your vision, 2) Custom 3D design with material selections, 3) We handle all permits and HOA approvals, 4) Professional construction with regular updates. Most projects take 4-8 weeks depending on complexity. Would you like to start with a consultation?"
    }
    
    return "I'd be happy to help you with that! Our luxury outdoor builds include basketball courts, custom pools, inground trampolines, playhouses, and putting greens. Each project includes 3D design visualization and white-glove service. What specific project interests you most?"
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brass hover:bg-brass/90 text-charcoal shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          size="lg"
        >
          <div className="relative">
            <Brain className="h-6 w-6 sm:h-8 sm:w-8" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-emerald rounded-full border-2 border-brass flex items-center justify-center">
              <MessageCircle className="h-1.5 w-1.5 sm:h-2 sm:w-2 text-white" />
            </div>
          </div>
        </Button>
        
        {/* Notification Badge */}
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-emerald rounded-full flex items-center justify-center text-xs font-bold text-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          AI
        </motion.div>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Window */}
            <motion.div
              className="relative w-full max-w-md h-[600px] bg-off-white rounded-lg shadow-2xl border border-brass/20 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="bg-brass text-charcoal p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-charcoal/10 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Design Concierge</h3>
                    <p className="text-sm opacity-80">Always here to help</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-charcoal hover:bg-charcoal/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[440px]">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-brass text-charcoal'
                          : 'bg-charcoal/5 text-charcoal border border-charcoal/10'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'ai' && (
                          <Bot className="h-4 w-4 mt-0.5 text-brass flex-shrink-0" />
                        )}
                        {message.type === 'user' && (
                          <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        )}
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-charcoal/10">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about our luxury outdoor builds..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    variant="luxury"
                    size="sm"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
