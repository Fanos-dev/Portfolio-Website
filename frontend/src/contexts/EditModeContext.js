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
  const [content, setContent] = useState({});
  const [previewMode, setPreviewMode] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

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

  // Toggle edit mode
  const toggleEditMode = () => {
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
    previewMode,
    content,
    hasUnsavedChanges,
    toggleEditMode,
    togglePreviewMode,
    saveContent,
    updateContent,
    getContent,
    resetChanges
  };

  return (
    <EditModeContext.Provider value={value}>
      {children}
    </EditModeContext.Provider>
  );
};