import React from 'react';
import { Edit3, Eye, Save, RotateCcw, AlertCircle } from 'lucide-react';
import { useEditMode } from '../contexts/EditModeContext';

const EditModeControls = () => {
  const { 
    isEditMode, 
    previewMode, 
    hasUnsavedChanges, 
    toggleEditMode, 
    togglePreviewMode, 
    saveContent, 
    resetChanges 
  } = useEditMode();

  const handleSave = () => {
    if (saveContent()) {
      // Show success notification
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg z-50';
      notification.textContent = 'Changes saved successfully!';
      document.body.appendChild(notification);
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    }
  };

  if (!isEditMode) {
    return (
      <button
        onClick={toggleEditMode}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 group"
        title="Enable edit mode"
      >
        <Edit3 size={20} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 z-50 min-w-64">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-medium">Edit Mode</h3>
        {hasUnsavedChanges && (
          <div className="flex items-center space-x-1 text-yellow-400">
            <AlertCircle size={16} />
            <span className="text-sm">Unsaved changes</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <button
          onClick={togglePreviewMode}
          className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
            previewMode 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Eye size={16} />
          <span>{previewMode ? 'Exit Preview' : 'Preview Changes'}</span>
        </button>
        
        <button
          onClick={handleSave}
          disabled={!hasUnsavedChanges}
          className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
            hasUnsavedChanges
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Save size={16} />
          <span>Save Changes</span>
        </button>
        
        <button
          onClick={resetChanges}
          className="w-full flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          <RotateCcw size={16} />
          <span>Reset All</span>
        </button>
        
        <button
          onClick={toggleEditMode}
          className="w-full flex items-center space-x-2 px-3 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors"
        >
          <Edit3 size={16} />
          <span>Exit Edit Mode</span>
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-400">
          Click on any text to edit. Press Ctrl+Enter to save multiline text.
        </p>
      </div>
    </div>
  );
};

export default EditModeControls;