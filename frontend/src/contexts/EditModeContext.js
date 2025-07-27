import React, { createContext, useContext, useState, useEffect } from 'react';

const EditModeContext = createContext();

export const useEditMode = () => {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error('useEditMode must be used within an EditModeProvider');
  }
  return context;
};

export const EditModeProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState({});
  const [previewMode, setPreviewMode] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Password for edit mode - you can change this to your preferred password
  const EDIT_PASSWORD = 'portfolio2025';

  // Check if user is authenticated on mount
  useEffect(() => {
    const authToken = localStorage.getItem('portfolioAuthToken');
    if (authToken === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  // Load saved content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('portfolioContent');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  }, []);

  // Authenticate user
  const authenticate = (password) => {
    if (password === EDIT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('portfolioAuthToken', 'authenticated');
      return true;
    }
    return false;
  };

  // Logout user
  const logout = () => {
    setIsAuthenticated(false);
    setIsEditMode(false);
    setPreviewMode(false);
    localStorage.removeItem('portfolioAuthToken');
  };

  // Save content to localStorage
  const saveContent = () => {
    try {
      localStorage.setItem('portfolioContent', JSON.stringify(content));
      setHasUnsavedChanges(false);
      return true;
    } catch (error) {
      console.error('Error saving content:', error);
      return false;
    }
  };

  // Update content for a specific section
  const updateContent = (sectionId, newContent) => {
    setContent(prev => ({
      ...prev,
      [sectionId]: newContent
    }));
    setHasUnsavedChanges(true);
  };

  // Get content for a specific section
  const getContent = (sectionId, defaultContent = '') => {
    return content[sectionId] || defaultContent;
  };

  // Toggle edit mode (with authentication check)
  const toggleEditMode = () => {
    if (!isAuthenticated) {
      const password = prompt('Enter the password to enable edit mode:');
      if (!password) return;
      
      if (!authenticate(password)) {
        alert('Incorrect password. Access denied.');
        return;
      }
    }

    if (isEditMode && hasUnsavedChanges) {
      const shouldSave = window.confirm('You have unsaved changes. Would you like to save before exiting edit mode?');
      if (shouldSave) {
        saveContent();
      }
    }
    setIsEditMode(!isEditMode);
    setPreviewMode(false);
  };

  // Toggle preview mode
  const togglePreviewMode = () => {
    setPreviewMode(!previewMode);
  };

  // Reset all changes
  const resetChanges = () => {
    const shouldReset = window.confirm('Are you sure you want to reset all changes? This cannot be undone.');
    if (shouldReset) {
      setContent({});
      localStorage.removeItem('portfolioContent');
      setHasUnsavedChanges(false);
    }
  };

  const value = {
    isEditMode,
    isAuthenticated,
    previewMode,
    content,
    hasUnsavedChanges,
    toggleEditMode,
    togglePreviewMode,
    saveContent,
    updateContent,
    getContent,
    resetChanges,
    logout
  };

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  );
};