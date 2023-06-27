if (link.href === currentUrl) {
    link.classList.add("active");
  
    // Force a redraw
    link.classList.remove("active");
    void link.offsetWidth; // Accessing offsetWidth triggers a repaint
  
    // Add the "active" class again
    link.classList.add("active");
  }
  