import { useEffect, useCallback, useState } from 'react';

export const useFullscreenProctor = ({
  onFullscreenViolation,
  enableWarnings = true,
  maxViolations = 3
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [violations, setViolations] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  // Enter fullscreen
  const enterFullscreen = useCallback(async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        await document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        await document.documentElement.msRequestFullscreen();
      }
    } catch (error) {
      console.error('Failed to enter fullscreen:', error);
    }
  }, []);

  // Check if currently in fullscreen
  const checkFullscreen = useCallback(() => {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    );
  }, []);

  // Handle fullscreen change
  const handleFullscreenChange = useCallback(() => {
    const isCurrentlyFullscreen = checkFullscreen();
    setIsFullscreen(isCurrentlyFullscreen);

    if (!isCurrentlyFullscreen && !isBlocked) {
      // User exited fullscreen
      const newViolations = violations + 1;
      setViolations(newViolations);

      if (enableWarnings) {
        alert(`Warning: You must stay in fullscreen mode. Violations: ${newViolations}/${maxViolations}`);
      }

      if (newViolations >= maxViolations) {
        setIsBlocked(true);
        onFullscreenViolation?.('max_violations_reached');
      } else {
        // Force back to fullscreen after a short delay
        setTimeout(() => {
          enterFullscreen();
        }, 1000);
      }

      onFullscreenViolation?.('exited_fullscreen', newViolations);
    }
  }, [violations, isBlocked, enableWarnings, maxViolations, onFullscreenViolation, enterFullscreen, checkFullscreen]);

  // Prevent common exit methods
  const preventExit = useCallback((e) => {
    // Prevent Escape key
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Prevent F11
    if (e.key === 'F11') {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Prevent Alt+Tab, Ctrl+Alt+Del, etc.
    if (e.altKey || (e.ctrlKey && e.altKey)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Prevent Windows key
    if (e.metaKey) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, []);

  // Handle visibility change (tab switching, minimizing)
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden && !isBlocked) {
      const newViolations = violations + 1;
      setViolations(newViolations);

      if (newViolations >= maxViolations) {
        setIsBlocked(true);
        onFullscreenViolation?.('max_violations_reached');
      }

      onFullscreenViolation?.('tab_switch', newViolations);
    }
  }, [violations, isBlocked, maxViolations, onFullscreenViolation]);

  // Prevent right-click context menu
  const preventContextMenu = useCallback((e) => {
    e.preventDefault();
    return false;
  }, []);

  // Setup event listeners
  useEffect(() => {
    // Fullscreen change listeners
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    // Keyboard event listeners
    document.addEventListener('keydown', preventExit, true);
    document.addEventListener('keyup', preventExit, true);

    // Visibility change listener
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Context menu prevention
    document.addEventListener('contextmenu', preventContextMenu);

    // Prevent browser back/forward
    const preventNavigation = (e) => {
      e.preventDefault();
      return '';
    };
    window.addEventListener('beforeunload', preventNavigation);
    window.addEventListener('popstate', preventNavigation);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
      document.removeEventListener('keydown', preventExit, true);
      document.removeEventListener('keyup', preventExit, true);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', preventContextMenu);
      window.removeEventListener('beforeunload', preventNavigation);
      window.removeEventListener('popstate', preventNavigation);
    };
  }, [handleFullscreenChange, preventExit, handleVisibilityChange, preventContextMenu]);

  // Auto-enter fullscreen on mount
  useEffect(() => {
    enterFullscreen();
  }, [enterFullscreen]);

  return {
    isFullscreen,
    violations,
    isBlocked,
    enterFullscreen,
    checkFullscreen
  };
};