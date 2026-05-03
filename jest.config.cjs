module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.{js,jsx}', '**/?(*.)+(spec|test).{js,jsx}'],
  moduleNameMapper: {
    '^./RoomViewer$': '<rootDir>/src/mocks/RoomViewer.js',
    '^./Profile3DViewer$': '<rootDir>/src/mocks/Profile3DViewer.js',
    '^framer-motion$': '<rootDir>/src/mocks/framer-motion.js',
    '^@react-three/fiber$': '<rootDir>/src/mocks/@react-three/fiber.js',
    '^@react-three/drei$': '<rootDir>/src/mocks/@react-three/drei.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.jsx',
    '!src/index.css',
    '!src/App.css',
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
}
