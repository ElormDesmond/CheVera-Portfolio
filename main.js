// CheVera Portfolio main.js

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode')
    ? '<i class="fas fa-moon"></i>'
    : '<i class="fas fa-sun"></i>';
});

// Set footer year
const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// Smooth scroll to projects
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
  document.getElementById('project-gallery-section').scrollIntoView({ behavior: 'smooth' });
});

// Our 3D Design Projects
const projects = [
  {
    title: 'Event Center 3D Design',
    desc: 'Modern event center 3D visualization with premium materials and exceptional design.',
    img: 'assets/EVREN/image1.jpg',
    subImages: [
      'assets/EVREN/image2.jpg', 'assets/EVREN/image3.jpg', 'assets/EVREN/image4.jpg',
      'assets/EVREN/image5.jpg', 'assets/EVREN/image6.jpg', 'assets/EVREN/image7.jpg',
      'assets/EVREN/image8.jpg', 'assets/EVREN/image9.jpg', 'assets/EVREN/image10.jpg'
    ]
  },
  {
    title: 'Abigail Dankwa 3D Design',
    desc: 'Residential 3D design project showcasing quality architectural visualization and planning.',
    img: 'assets/Abigail/image1.jpg',
    subImages: [
      'assets/Abigail/image2.jpg', 'assets/Abigail/image3.jpg', 'assets/Abigail/image4.jpg',
      'assets/Abigail/image5.jpg', 'assets/Abigail/image6.jpg', 'assets/Abigail/image7.jpg',
      'assets/Abigail/image8.jpg', 'assets/Abigail/image9.jpg'
    ]
  },
  {
    title: 'Christ Apostolic Church 3D Design',
    desc: 'Stunning 3D church design demonstrating architectural excellence and spiritual ambiance.',
    img: 'assets/CAC/image1.png',
    subImages: [
      'assets/CAC/image2.png', 'assets/CAC/image3.png', 'assets/CAC/image4.png',
      'assets/CAC/image5.png', 'assets/CAC/image6.png', 'assets/CAC/image7.png',
      'assets/CAC/image8.png', 'assets/CAC/image9.png', 'assets/CAC/image10.png'
    ]
  },
  {
    title: 'Steaman Recreational Center 3D Design',
    desc: 'Modern recreational center 3D visualization with innovative amenities and contemporary design.',
    img: 'assets/Steaman/image1.jpg',
    subImages: [
      'assets/Steaman/image2.jpg', 'assets/Steaman/image3.jpg', 'assets/Steaman/image4.jpg',
      'assets/Steaman/image5.jpg', 'assets/Steaman/image6.jpg', 'assets/Steaman/image7.jpg',
      'assets/Steaman/image8.jpg'
    ]
  },
  {
    title: 'Bonsah Residential 3D Design',
    desc: 'Residential 3D design project demonstrating quality architectural visualization and modern living spaces.',
    img: 'assets/bonsah/image1.png',
    subImages: [
      'assets/bonsah/image2.png', 'assets/bonsah/image3.png'
    ]
  },
  {
    title: 'Katamanso Event Center 3D Design',
    desc: 'Modern event center 3D visualization with elegant design and spacious layout planning.',
    img: 'assets/Katamanso/image1.jpg',
    subImages: [
      'assets/Katamanso/image2.jpg', 'assets/Katamanso/image3.jpg', 'assets/Katamanso/image4.jpg',
      'assets/Katamanso/image5.jpg', 'assets/Katamanso/image6.jpg', 'assets/Katamanso/image7.jpg',
      'assets/Katamanso/image8.jpg', 'assets/Katamanso/image9.jpg', 'assets/Katamanso/image10.jpg'
    ]
  }
];

// Render project cards
const projectsRow = document.getElementById('projects-row');
projects.forEach((project, idx) => {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch';
  col.innerHTML = `
    <div class="project-card card h-100 text-center p-4 w-100">
      <img src="${project.img}" class="card-img-top mb-3" alt="${project.title}" style="height:140px;object-fit:cover;border-radius:12px;" />
      <h5 class="card-title mb-2">${project.title}</h5>
      <p class="card-text mb-3">${project.desc}</p>
      <button class="btn view-details-btn mt-auto" data-idx="${idx}"><i class="fas fa-external-link-alt"></i> View Details</button>
    </div>
  `;
  projectsRow.appendChild(col);
});

// Modal logic
const modalRoot = document.getElementById('modal-root');
projectsRow.addEventListener('click', function(e) {
  if (e.target.closest('.view-details-btn')) {
    const idx = e.target.closest('.view-details-btn').getAttribute('data-idx');
    showProjectModal(projects[idx]);
  }
});

function showProjectModal(project) {
  modalRoot.innerHTML = `
    <div class="project-modal-overlay">
      <div class="project-modal">
        <button class="close-modal-btn">&times;</button>
        <h4 class="mb-3">${project.title} - Samples</h4>
        <div class="modal-images">
          ${project.subImages.map((img, i) => `<img src="${img}" alt="Sample ${i+1}" class="modal-img" data-img="${img}" style="cursor:pointer;" />`).join('')}
        </div>
      </div>
    </div>
  `;
}
modalRoot.addEventListener('click', function(e) {
  if (e.target.classList.contains('close-modal-btn') || e.target.classList.contains('project-modal-overlay')) {
    modalRoot.innerHTML = '';
  }
  if (e.target.classList.contains('modal-img')) {
    showPreviewModal(e.target.getAttribute('data-img'));
  }
});
function showPreviewModal(img) {
  modalRoot.innerHTML = `
    <div class="preview-modal-overlay">
      <div class="preview-modal">
        <button class="close-modal-btn">&times;</button>
        <img src="${img}" alt="Preview" class="preview-img" />
      </div>
    </div>
  `;
}

// Skills data
const skills = [
  { title: 'Architecture & Design', icon: 'fa-drafting-compass', desc: 'Innovative architectural planning and design.' },
  { title: 'Building Materials', icon: 'fa-cubes', desc: 'Supply of premium building materials.' },
  { title: 'Roofing Solutions', icon: 'fa-home', desc: 'Quality roofing materials and installation.' },
  { title: 'Painting & Finishes', icon: 'fa-paint-roller', desc: 'Professional interior and exterior painting.' },
  { title: 'Renovations & Remodeling', icon: 'fa-tools', desc: 'Comprehensive renovations and remodeling.' },
  { title: 'Project Supervision', icon: 'fa-clipboard-list', desc: 'Expert supervision and project management.' },
  { title: 'Interior Decoration', icon: 'fa-ruler-combined', desc: 'Creative interior decoration and space planning.' },
  { title: 'Landscaping & Outdoor', icon: 'fa-seedling', desc: 'Beautiful landscaping and outdoor design.' }
];
const skillsRow = document.getElementById('skills-row');
skills.forEach(skill => {
  const col = document.createElement('div');
  // Fixed width and height for 4 cards per row
  col.style.cssText = 'width: 23%; height: 180px; margin: 1%; display: inline-block; vertical-align: top;';
  col.innerHTML = `
    <div class="text-center p-3 h-100 w-100" style="background: linear-gradient(120deg, #e3eafc 60%, #b6c7e6 100%); border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <i class="fas ${skill.icon} fa-2x mb-2 text-primary"></i>
      <h6 class="mb-1">${skill.title}</h6>
      <p class="mb-0 small">${skill.desc}</p>
    </div>
  `;
  skillsRow.appendChild(col);
});

// On-site Work Projects
const onsiteProjects = [
  {
    title: 'Sample Residential On-site Projects',
    desc: 'Real residential construction projects showcasing our quality craftsmanship and attention to detail.',
    img: 'assets/residential onsite/image1.jpg',
    subImages: [
      'assets/residential onsite/image2.jpg', 'assets/residential onsite/image3.jpg', 'assets/residential onsite/image4.jpg',
      'assets/residential onsite/image5.jpg', 'assets/residential onsite/image6.jpg'
    ]
  },
  {
    title: 'Expert Plumbing Solutions',
    desc: 'Precision plumbing installations and professional water system solutions with meticulous attention to detail and superior craftsmanship.',
    img: 'assets/plumbing/image1.jpg',
    subImages: [
      'assets/plumbing/image2.jpg', 'assets/plumbing/image3.jpg', 'assets/plumbing/image4.jpg',
      'assets/plumbing/image5.jpg', 'assets/plumbing/image6.jpg', 'assets/plumbing/image7.jpg',
      'assets/plumbing/image8.jpg'
    ]
  },
  {
    title: 'Additional Construction Projects',
    desc: 'Diverse portfolio showcasing our versatility in various construction and renovation projects with exceptional quality standards.',
    img: 'assets/others/image1.jpg',
    subImages: [
      'assets/others/image2.jpg', 'assets/others/image3.jpg', 'assets/others/image4.jpg',
      'assets/others/image5.jpg', 'assets/others/image6.jpg', 'assets/others/image7.jpg',
      'assets/others/image8.jpg', 'assets/others/image9.jpg', 'assets/others/image10.jpg',
      'assets/others/image11.jpg'
    ]
  }
];

// Render on-site project cards
const onsiteProjectsRow = document.getElementById('onsite-projects-row');
onsiteProjects.forEach((project, idx) => {
  const col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 mb-4 d-flex align-items-stretch';
  col.innerHTML = `
    <div class="project-card card h-100 text-center p-4 w-100">
      <img src="${project.img}" class="card-img-top mb-3" alt="${project.title}" style="height:140px;object-fit:cover;border-radius:12px;" />
      <h5 class="card-title mb-2">${project.title}</h5>
      <p class="card-text mb-3">${project.desc}</p>
      <button class="btn view-details-btn mt-auto" data-idx="${idx}" data-type="onsite"><i class="fas fa-external-link-alt"></i> View Details</button>
    </div>
  `;
  onsiteProjectsRow.appendChild(col);
});

// Add modal logic for on-site projects
onsiteProjectsRow.addEventListener('click', function(e) {
  if (e.target.closest('.view-details-btn')) {
    const idx = e.target.closest('.view-details-btn').getAttribute('data-idx');
    showProjectModal(onsiteProjects[idx]);
  }
});

// Update modal logic to handle both project types
modalRoot.addEventListener('click', function(e) {
  if (e.target.closest('.view-details-btn')) {
    const btn = e.target.closest('.view-details-btn');
    const idx = btn.getAttribute('data-idx');
    const type = btn.getAttribute('data-type');
    if (type === 'onsite') {
      showProjectModal(onsiteProjects[idx]);
    } else {
      showProjectModal(projects[idx]);
    }
  }
});