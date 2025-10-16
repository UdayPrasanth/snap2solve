document.addEventListener('DOMContentLoaded', () => {
  // --- Smooth scrolling for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Mobile menu toggle ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    };

    hamburger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  }

  // --- Photo Upload Logic ---
  const uploadPhotoBtn = document.getElementById('upload-photo-btn');
  const photoUploadInput = document.getElementById('photo-upload-input');

  if (uploadPhotoBtn && photoUploadInput) {
    uploadPhotoBtn.addEventListener('click', () => {
      photoUploadInput.click();
    });

    photoUploadInput.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const fileName = target.files[0].name;
        alert(`File "${fileName}" has been selected.`);
        // Here you would typically handle the file upload process
      }
    });
  }

  // --- AI Chat Widget Logic ---
  const aiChatBtn = document.getElementById('ai-chat-btn');
  const chatWidget = document.getElementById('chat-widget');
  const closeChatBtn = document.getElementById('close-chat-btn');
  const chatBody = document.getElementById('chat-body');
  const chatInput = document.getElementById('chat-input') as HTMLInputElement;
  const sendChatBtn = document.getElementById('send-chat-btn');

  if (aiChatBtn && chatWidget && closeChatBtn && chatBody && chatInput && sendChatBtn) {
    aiChatBtn.addEventListener('click', () => {
      chatWidget.classList.remove('hidden');
    });

    closeChatBtn.addEventListener('click', () => {
      chatWidget.classList.add('hidden');
    });

    const addMessage = (text, type) => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('chat-message', type);
      const p = document.createElement('p');
      p.textContent = text;
      messageElement.appendChild(p);
      chatBody.appendChild(messageElement);
      chatBody.scrollTop = chatBody.scrollHeight;
    };
    
    const handleSendMessage = () => {
      const userMessage = chatInput.value.trim();
      if (userMessage) {
        addMessage(userMessage, 'user');
        chatInput.value = '';

        // Simulate AI response
        setTimeout(() => {
          addMessage("Thank you for your message. Based on your description, I recommend checking our plumbing services. Could you provide more details or a photo?", 'bot');
        }, 1000);
      }
    };

    sendChatBtn.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
    });
  }
});