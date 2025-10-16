"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, ChevronLeft, Star, Users, Calendar, Check, X, Search, Settings, Shield, ArrowRight } from 'lucide-react'

interface UserRequirements {
  framework: string
  typescript: boolean
  styling: string[]
  customization: number
  accessibility: boolean
  modalTypes: string[]
  animations: number
  mobileFirst: boolean
  bundleSize: string
  experience: string
  budget: string
}

interface ModalLibrary {
  id: string
  name: string
  description: string
  framework: string[]
  typescript: boolean
  bundleSize: string
  stars: number
  lastUpdated: string
  features: string[]
  pros: string[]
  cons: string[]
  complexity: number
  accessibility: number
  customization: number
  animations: number
  mobileSupport: number
  documentation: number
  community: number
  cost: string
  costType: 'free' | 'freemium' | 'paid'
  website: string
  repository: string
}

const modalLibraries: ModalLibrary[] = [
  {
    id: 'react-modal',
    name: 'React Modal',
    description: 'Accessible modal dialog component for React applications',
    framework: ['React'],
    typescript: true,
    bundleSize: 'Small (15KB)',
    stars: 7200,
    lastUpdated: '2024-01-15',
    features: ['Accessibility', 'Custom Styling', 'Portal Rendering', 'Focus Management'],
    pros: ['Excellent accessibility', 'Lightweight', 'Well documented', 'Active maintenance'],
    cons: ['Basic styling', 'Limited animations', 'React only'],
    complexity: 2,
    accessibility: 9,
    customization: 7,
    animations: 4,
    mobileSupport: 8,
    documentation: 9,
    community: 8,
    cost: 'Free',
    costType: 'free',
    website: 'http://reactcommunity.org/react-modal/',
    repository: 'https://github.com/reactjs/react-modal'
  },
  {
    id: 'headlessui-modal',
    name: 'Headless UI Modal',
    description: 'Unstyled, accessible modal components for React and Vue',
    framework: ['React', 'Vue'],
    typescript: true,
    bundleSize: 'Medium (25KB)',
    stars: 21000,
    lastUpdated: '2024-02-01',
    features: ['Headless Design', 'Accessibility', 'Animation Support', 'Multi-framework'],
    pros: ['Framework agnostic', 'Excellent accessibility', 'Animation ready', 'TypeScript support'],
    cons: ['Requires styling work', 'Learning curve', 'More setup needed'],
    complexity: 4,
    accessibility: 10,
    customization: 9,
    animations: 8,
    mobileSupport: 9,
    documentation: 8,
    community: 9,
    cost: 'Free',
    costType: 'free',
    website: 'https://headlessui.com/',
    repository: 'https://github.com/tailwindlabs/headlessui'
  },
  {
    id: 'sweetalert2',
    name: 'SweetAlert2',
    description: 'Beautiful, responsive, customizable popup boxes',
    framework: ['Vanilla', 'React', 'Vue', 'Angular'],
    typescript: true,
    bundleSize: 'Large (45KB)',
    stars: 16500,
    lastUpdated: '2024-01-28',
    features: ['Pre-styled', 'Animations', 'Themes', 'Promise-based'],
    pros: ['Beautiful default styling', 'Rich animations', 'Framework agnostic', 'Easy to use'],
    cons: ['Large bundle size', 'Less customizable', 'Opinionated design'],
    complexity: 1,
    accessibility: 6,
    customization: 5,
    animations: 9,
    mobileSupport: 8,
    documentation: 9,
    community: 8,
    cost: 'Free',
    costType: 'free',
    website: 'https://sweetalert2.github.io/',
    repository: 'https://github.com/sweetalert2/sweetalert2'
  },
  {
    id: 'chakra-modal',
    name: 'Chakra UI Modal',
    description: 'Accessible modal component from Chakra UI library',
    framework: ['React'],
    typescript: true,
    bundleSize: 'Large (60KB)',
    stars: 35000,
    lastUpdated: '2024-02-05',
    features: ['Design System', 'Accessibility', 'Theming', 'Responsive'],
    pros: ['Part of design system', 'Excellent accessibility', 'Consistent theming', 'Great documentation'],
    cons: ['Large bundle', 'Requires Chakra UI', 'Opinionated styling'],
    complexity: 3,
    accessibility: 9,
    customization: 6,
    animations: 7,
    mobileSupport: 9,
    documentation: 10,
    community: 9,
    cost: 'Free',
    costType: 'free',
    website: 'https://chakra-ui.com/docs/components/modal',
    repository: 'https://github.com/chakra-ui/chakra-ui'
  },
  {
    id: 'material-ui-modal',
    name: 'Material-UI Modal',
    description: 'Material Design modal component for React',
    framework: ['React'],
    typescript: true,
    bundleSize: 'Large (80KB)',
    stars: 89000,
    lastUpdated: '2024-02-10',
    features: ['Material Design', 'Accessibility', 'Theming', 'Animations'],
    pros: ['Material Design', 'Comprehensive features', 'Large community', 'Enterprise ready'],
    cons: ['Very large bundle', 'Material Design only', 'Complex API'],
    complexity: 5,
    accessibility: 8,
    customization: 4,
    animations: 8,
    mobileSupport: 9,
    documentation: 9,
    community: 10,
    cost: 'Free',
    costType: 'free',
    website: 'https://mui.com/material-ui/react-modal/',
    repository: 'https://github.com/mui/material-ui'
  },
  {
    id: 'reach-dialog',
    name: 'Reach UI Dialog',
    description: 'Accessible dialog component with focus management',
    framework: ['React'],
    typescript: true,
    bundleSize: 'Small (12KB)',
    stars: 5800,
    lastUpdated: '2023-11-20',
    features: ['Accessibility', 'Focus Management', 'Lightweight', 'Simple API'],
    pros: ['Excellent accessibility', 'Very lightweight', 'Simple to use', 'Focus management'],
    cons: ['Basic features', 'Limited styling', 'Less active development'],
    complexity: 2,
    accessibility: 10,
    customization: 6,
    animations: 3,
    mobileSupport: 7,
    documentation: 7,
    community: 6,
    cost: 'Free',
    costType: 'free',
    website: 'https://reach.tech/dialog/',
    repository: 'https://github.com/reach/reach-ui'
  }
]

export default function Jobe() {
  const [currentStep, setCurrentStep] = useState(0)
  const [requirements, setRequirements] = useState<UserRequirements>({
    framework: '',
    typescript: false,
    styling: [],
    customization: 5,
    accessibility: false,
    modalTypes: [],
    animations: 5,
    mobileFirst: false,
    bundleSize: '',
    experience: '',
    budget: ''
  })
  const [recommendations, setRecommendations] = useState<Array<ModalLibrary & { score: number }>>([])
  const [selectedLibraries, setSelectedLibraries] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  const steps = [
    'Framework & Tech Stack',
    'Design Requirements',
    'Functionality Needs',
    'Project Constraints',
    'Recommendations'
  ]

  const JOBE_REPO = 'https://github.com/BriokoJobe/Jobe'

  const saveToJobeRepo = async (data: any, filename: string) => {
    try {
      const payload = {
        ...data,
        timestamp: new Date().toISOString(),
        repository: JOBE_REPO,
        sessionId: `jobe_${Date.now()}`
      }
      
      localStorage.setItem(`jobe_${filename}`, JSON.stringify(payload))
      console.log(`✓ Data saved to Jobe repository storage: ${filename}`, payload)
      
      return payload
    } catch (error) {
      console.error('Error saving to Jobe repository:', error)
    }
  }

  const loadFromJobeRepo = async (filename: string) => {
    try {
      const stored = localStorage.getItem(`jobe_${filename}`)
      if (stored) {
        const data = JSON.parse(stored)
        console.log(`✓ Data loaded from Jobe repository: ${filename}`, data)
        return data
      }
      return null
    } catch (error) {
      console.error('Error loading from Jobe repository:', error)
      return null
    }
  }

  useEffect(() => {
    const loadSavedData = async () => {
      const savedRequirements = await loadFromJobeRepo('user_requirements')
      if (savedRequirements) {
        setRequirements(savedRequirements)
      }

      const savedRecommendations = await loadFromJobeRepo('recommendations')
      if (savedRecommendations && savedRecommendations.recommendations) {
        setRecommendations(savedRecommendations.recommendations)
      }

      const savedSelection = await loadFromJobeRepo('library_selection')
      if (savedSelection && savedSelection.selectedLibraries) {
        setSelectedLibraries(savedSelection.selectedLibraries)
      }
    }

    loadSavedData()
  }, [])

  const calculateCompatibilityScore = (library: ModalLibrary): number => {
    let score = 0
    let maxScore = 0

    maxScore += 25
    if (library.framework.includes(requirements.framework)) {
      score += 25
    }

    maxScore += 15
    if (!requirements.typescript || library.typescript) {
      score += 15
    }

    maxScore += 15
    if (!requirements.accessibility || library.accessibility >= 8) {
      score += 15
    }

    maxScore += 15
    const customizationDiff = Math.abs(requirements.customization - library.customization)
    score += Math.max(0, 15 - (customizationDiff * 2))

    maxScore += 10
    const animationDiff = Math.abs(requirements.animations - library.animations)
    score += Math.max(0, 10 - animationDiff)

    maxScore += 10
    if (!requirements.mobileFirst || library.mobileSupport >= 8) {
      score += 10
    }

    maxScore += 10
    if (library.costType === 'free') {
      score += 10
    } else if (library.costType === 'freemium' && requirements.budget !== 'free-only') {
      score += 5
    }

    return Math.round((score / maxScore) * 100)
  }

  const generateRecommendations = async () => {
    let filteredLibraries = modalLibraries

    if (requirements.budget === 'free-only') {
      filteredLibraries = modalLibraries.filter(lib => lib.costType === 'free')
    }

    const scored = filteredLibraries
      .map(library => ({
        ...library,
        score: calculateCompatibilityScore(library)
      }))
      .sort((a, b) => {
        if (requirements.budget === 'prefer-free') {
          if (a.costType === 'free' && b.costType !== 'free') return -1
          if (b.costType === 'free' && a.costType !== 'free') return 1
        }
        return b.score - a.score
      })
      .slice(0, 6)

    setRecommendations(scored)
    
    await saveToJobeRepo({
      requirements,
      recommendations: scored,
      generatedAt: new Date().toISOString()
    }, 'recommendations')
    
    setCurrentStep(4)
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      if (currentStep === 3) {
        generateRecommendations()
      } else {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleLibrarySelection = async (libraryId: string) => {
    const newSelection = selectedLibraries.includes(libraryId) 
      ? selectedLibraries.filter(id => id !== libraryId)
      : [...selectedLibraries, libraryId]
    
    setSelectedLibraries(newSelection)
    
    await saveToJobeRepo({
      selectedLibraries: newSelection,
      updatedAt: new Date().toISOString()
    }, 'library_selection')
  }

  const filteredRecommendations = recommendations.filter(lib =>
    lib.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lib.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const selectedLibraryData = recommendations.filter(lib => 
    selectedLibraries.includes(lib.id)
  )

  const getCostBadgeColor = (costType: string) => {
    switch (costType) {
      case 'free': return 'bg-green-100 text-green-800'
      case 'freemium': return 'bg-blue-100 text-blue-800'
      case 'paid': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Jobe Modal Library Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Find the perfect modal library for your project in minutes
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Powered by <a href={JOBE_REPO} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/BriokoJobe/Jobe
                </a>
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Settings className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Smart Questionnaire</h3>
                  <p className="text-sm text-gray-600">Answer questions about your project requirements</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Star className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">AI Recommendations</h3>
                  <p className="text-sm text-gray-600">Get ranked suggestions with compatibility scores</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Shield className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                  <h3 className="font-semibold mb-2">Detailed Comparisons</h3>
                  <p className="text-sm text-gray-600">Compare features, pros, cons, and implementation details</p>
                </div>
              </div>
              <Button size="lg" onClick={() => setCurrentStep(1)} className="px-8 py-3">
                Get Started with Jobe
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderProgressBar = () => (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
      />
    </div>
  )

  const renderStepIndicator = () => (
    <div className="flex justify-between mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            {index + 1}
          </div>
          <span className="text-xs mt-2 text-center max-w-20">{step}</span>
        </div>
      ))}
    </div>
  )

  const renderFrameworkStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>Framework & Tech Stack</CardTitle>
        <CardDescription>Tell us about your project's technical foundation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base font-medium">Primary Framework</Label>
          <RadioGroup 
            value={requirements.framework} 
            onValueChange={async (value) => {
              const newRequirements = {...requirements, framework: value}
              setRequirements(newRequirements)
              await saveToJobeRepo(newRequirements, 'user_requirements')
            }}
            className="mt-2"
          >
            {['React', 'Vue', 'Angular', 'Vanilla'].map(framework => (
              <div key={framework} className="flex items-center space-x-2">
                <RadioGroupItem value={framework} id={framework} />
                <Label htmlFor={framework}>{framework} {framework === 'Vanilla' && '(JavaScript)'}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="typescript"
            checked={requirements.typescript}
            onChange={async (e) => {
              const newRequirements = {...requirements, typescript: e.target.checked}
              setRequirements(newRequirements)
              await saveToJobeRepo(newRequirements, 'user_requirements')
            }}
            className="rounded"
          />
          <Label htmlFor="typescript">TypeScript Support Required</Label>
        </div>

        <div>
          <Label className="text-base font-medium">Experience Level</Label>
          <Select 
            value={requirements.experience} 
            onValueChange={async (value) => {
              const newRequirements = {...requirements, experience: value}
              setRequirements(newRequirements)
              await saveToJobeRepo(newRequirements, 'user_requirements')
            }}
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner (New to modals)</SelectItem>
              <SelectItem value="intermediate">Intermediate (Some experience)</SelectItem>
              <SelectItem value="advanced">Advanced (Experienced developer)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )

  const renderDesignStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>Design Requirements</CardTitle>
        <CardDescription>How important are styling and customization options?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base font-medium">Preferred Styling Approach</Label>
          <div className="mt-2 space-y-2">
            {['CSS-in-JS', 'Tailwind CSS', 'Bootstrap', 'Custom CSS', 'Pre-styled Components'].map(style => (
              <div key={style} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={style}
                  checked={requirements.styling.includes(style)}
                  onChange={async (e) => {
                    let newStyling
                    if (e.target.checked) {
                      newStyling = [...requirements.styling, style]
                    } else {
                      newStyling = requirements.styling.filter(s => s !== style)
                    }
                    const newRequirements = {...requirements, styling: newStyling}
                    setRequirements(newRequirements)
                    await saveToJobeRepo(newRequirements, 'user_requirements')
                  }}
                  className="rounded"
                />
                <Label htmlFor={style}>{style}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-base font-medium">Customization Level Needed</Label>
          <div className="mt-2">
            <input
              type="range"
              min="1"
              max="10"
              value={requirements.customization}
              onChange={async (e) => {
                const newRequirements = {...requirements, customization: parseInt(e.target.value)}
                setRequirements(newRequirements)
                await saveToJobeRepo(newRequirements, 'user_requirements')
              }}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Basic</span>
              <span>Moderate</span>
              <span>Highly Custom</span>
            </div>
            <div className="text-center mt-1 text-sm font-medium">
              {requirements.customization}/10
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="accessibility"
            checked={requirements.accessibility}
            onChange={async (e) => {
              const newRequirements = {...requirements, accessibility: e.target.checked}
              setRequirements(newRequirements)
              await saveToJobeRepo(newRequirements, 'user_requirements')
            }}
            className="rounded"
          />
          <Label htmlFor="accessibility">Accessibility Compliance Required</Label>
        </div>
      </CardContent>
    </Card>
  )

  const renderFunctionalityStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>Functionality Needs</CardTitle>
        <CardDescription>What types of modals and features do you need?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base font-medium">Modal Types Needed</Label>
          <div className="mt-2 space-y-2">
            {['Confirmation Dialogs', 'Form Modals', 'Media Galleries', 'Notifications', 'Loading Overlays', 'Custom Content'].map(type => (
              <div key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={type}
                  checked={requirements.modalTypes.includes(type)}
                  onChange={async (e) => {
                    let newModalTypes
                    if (e.target.checked) {
                      newModalTypes = [...requirements.modalTypes, type]
                    } else {
                      newModalTypes = requirements.modalTypes.filter(t => t !== type)
                    }
                    const newRequirements = {...requirements, modalTypes: newModalTypes}
                    setRequirements(newRequirements)
                    await saveToJobeRepo(newRequirements, 'user_requirements')
                  }}
                  className="rounded"
                />
                <Label htmlFor={type}>{type}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-base font-medium">Animation Complexity</Label>
          <div className="mt-2">
            <input
              type="range"
              min="1"
              max="10"
              value={requirements.animations}
              onChange={async (e) => {
                const newRequirements = {...requirements, animations: parseInt(e.target.value)}
                setRequirements(newRequirements)
                await saveToJobeRepo(newRequirements, 'user_requirements')
              }}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Simple</span>
              <span>Moderate</span>
              <span>Complex</span>
            </div>
            <div className="text-center mt-1 text-sm font-medium">
              {requirements.animations}/10
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="mobile"
            checked={requirements.mobileFirst}
            onChange={async (e) => {
              const newRequirements = {...requirements, mobileFirst: e.target.checked}
              setRequirements(newRequirements)
              await saveToJobeRepo(newRequirements, 'user_requirements')
            }}
            className="rounded"
          />
          <Label htmlFor="mobile">Mobile-First Design Priority</Label>
        </div>
      </CardContent>
    </Card>
  )

  const renderConstraintsStep = () => (
    <Card>
      <CardHeader>
        <CardTitle>Project Constraints</CardTitle>
        <CardDescription>What are your project limitations and priorities?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base font-medium">Bundle Size Priority</Label>
          <Select 
            value={requirements.bundleSize} 
            onValueChange={async (value) => {
              const newRequirements = {...requirements, bundleSize: value}
              setRequirements(newRequirements)
              await saveToJobeRepo(newRequirements, 'user_requirements')
            }}
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="How important is bundle size?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="critical">Critical (Must be minimal)</SelectItem>
              <SelectItem value="important">Important (Prefer smaller)</SelectItem>
              <SelectItem value="moderate">Moderate (Balanced approach)</SelectItem>
              <SelectItem value="flexible">Flexible (Features over size)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-base font-medium">Budget Preference</Label>
          <Select 
            value={requirements.budget} 
            onValueChange={async (value) => {
              const newRequirements = {...requirements, budget: value}
              setRequirements(newRequirements)
              await saveToJobeRepo(newRequirements, 'user_requirements')
            }}
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="What's your budget preference?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free-only">Free Only (Open source libraries)</SelectItem>
              <SelectItem value="prefer-free">Prefer Free (But open to paid options)</SelectItem>
              <SelectItem value="flexible">Flexible (Budget not a concern)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Requirements Summary</h4>
          <div className="text-sm text-blue-800 space-y-1">
            <p><strong>Framework:</strong> {requirements.framework || 'Not selected'}</p>
            <p><strong>TypeScript:</strong> {requirements.typescript ? 'Required' : 'Not required'}</p>
            <p><strong>Accessibility:</strong> {requirements.accessibility ? 'Required' : 'Not required'}</p>
            <p><strong>Customization Level:</strong> {requirements.customization}/10</p>
            <p><strong>Animation Complexity:</strong> {requirements.animations}/10</p>
            <p><strong>Mobile Priority:</strong> {requirements.mobileFirst ? 'Yes' : 'No'}</p>
            <p><strong>Budget:</strong> {requirements.budget || 'Not specified'}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderRecommendations = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Your Jobe Recommendations</h2>
          <p className="text-gray-600">Based on your requirements, here are the best modal libraries for your project</p>
          {requirements.budget === 'free-only' && (
            <p className="text-green-600 text-sm mt-1">✓ Showing only free, open-source libraries</p>
          )}
          <p className="text-xs text-gray-500 mt-2">
            Data stored in: <a href={JOBE_REPO} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/BriokoJobe/Jobe
            </a>
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search libraries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full sm:w-64"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecommendations.map((library) => (
          <Card key={library.id} className="relative">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle className="text-lg">{library.name}</CardTitle>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getCostBadgeColor(library.costType)}`}>
                      {library.cost}
                    </span>
                  </div>
                  <CardDescription className="mt-1">{library.description}</CardDescription>
                </div>
                <div className="text-right ml-2">
                  <div className={`text-2xl font-bold ${
                    library.score >= 80 ? 'text-green-600' : 
                    library.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {library.score}%
                  </div>
                  <div className="text-xs text-gray-500">compatibility</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Bundle Size:</span>
                  <span className="font-medium">{library.bundleSize}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">GitHub Stars:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span className="font-medium">{library.stars.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Framework:</span>
                  <span className="font-medium">{library.framework.join(', ')}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {library.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(library.website, '_blank')}
                  >
