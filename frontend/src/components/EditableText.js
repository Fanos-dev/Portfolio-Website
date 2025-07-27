import React, { useState, useRef, useEffect } from 'react';
import { Edit3, Save, X } from 'lucide-react';
import { useEditMode } from '../contexts/EditModeContext';

const EditableText = ({ 
  sectionId, 
  defaultContent = '', 
  className = '', 
  element = 'p',
  placeholder = 'Click to edit...',
  multiline = false,
  maxLength = null
}) => {
  const { isEditMode, previewMode, getContent, updateContent } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [tempContent, setTempContent] = useState('');
  const textareaRef = useRef(null);
  const contentRef = useRef(null);

  const currentContent = getContent(sectionId, defaultContent);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current && isEditing) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      textareaRef.current.focus();
    }
  }, [isEditing, tempContent]);

  const handleEdit = () => {
    if (!isEditMode || previewMode) return;
    setTempContent(currentContent);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (maxLength && tempContent.length > maxLength) {
      alert(`Content exceeds maximum length of ${maxLength} characters`);
      return;
    }
    updateContent(sectionId, tempContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempContent('');
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCancel();
    } else if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Enter' && e.ctrlKey && multiline) {
      e.preventDefault();
      handleSave();
    }
  };

  // Create the element dynamically
  const Element = element;
  const displayContent = currentContent || (isEditMode ? placeholder : defaultContent);

  if (isEditing) {
    return (
      <div className="relative group">
        <textarea
          ref={textareaRef}
          value={tempContent}
          onChange={(e) => setTempContent(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`${className} bg-gray-800 border border-blue-300 rounded-lg p-2 resize-none focus:outline-none focus:border-blue-400 transition-colors w-full`}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={multiline ? 3 : 1}
        />
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
            >
              <Save size={14} />
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
            >
              <X size={14} />
              <span>Cancel</span>
            </button>
          </div>
          
          {maxLength && (
            <span className={`text-sm ${tempContent.length > maxLength ? 'text-red-400' : 'text-gray-400'}`}>
              {tempContent.length}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <Element
        ref={contentRef}
        className={`${className} ${isEditMode && !previewMode ? 'cursor-pointer hover:bg-gray-800/30 rounded-lg p-2 transition-colors border-2 border-transparent hover:border-blue-300/50' : ''}`}
        onClick={handleEdit}
        title={isEditMode && !previewMode ? 'Click to edit' : ''}
      >
        {displayContent}
      </Element>
      
      {isEditMode && !previewMode && (
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleEdit}
            className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            title="Edit this content"
          >
            <Edit3 size={12} />
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableText;