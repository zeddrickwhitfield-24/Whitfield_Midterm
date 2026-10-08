const base = 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/11/'

export const logo = 'https://ccs.cpu.edu.ph/wp-content/uploads/2021/10/cropped-CCS-Logov-new.png'

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'programs', label: 'Programs Offered' },
  { id: 'faculty', label: 'Faculty and Staff' },
  { id: 'partners', label: 'Partnerships and Memberships' }
]

export const programs = [
  { code: 'BSIT', name: 'Bachelor of Science in Information Technology', logo: base + '1-150x150.png',
    desc: 'Bridges the gap between computer science and management information systems.' },
  { code: 'BSCS', name: 'Bachelor of Science in Computer Science', logo: base + 'CSS_PNG-150x150.png',
    desc: 'For students who want to study computing in depth, focusing on both software and hardware.' },
  { code: 'BSDMIA', name: 'Bachelor of Science in Digital Media and Interactive Arts', logo: base + 'MIDAS_PNG-150x150.png',
    desc: 'Focused on creativity, applied arts, and digital media technologies.' },
  { code: 'BLIS', name: 'Bachelor of Library and Information Science', logo: base + 'LISSO-150x150.png',
    desc: 'A four-year program that prepares students for the development and management of library and information services.' }
]

// Replace 'To be updated' once the data is confirmed.
export const departments = [
  { name: 'Office of the Dean', members: [
    { name: 'Ma. Christina A. Quijano, MSCS', role: 'Dean', edu: 'Master of Science in Computer Science', photo: base + 'quijano-e1637132499305.png' }
  ]},
  { name: 'Department Heads and Coordinators', members: [
    { name: 'Rea P. Balontong, MBA', role: 'Department Head (IT & IS)', edu: 'Master in Business Administration', photo: base + 'balontong-754x1024.jpg' },
    { name: 'Marjee Rose B. Parreño, MSCS, MBA', role: 'Program Coordinator (BSCS, BSDMIA, MSCS)', edu: 'Master of Science in Computer Science; Master in Business Administration', photo: base + 'parreno-754x1024.jpg' },
    { name: 'Ana Mae B. Cantel, MLIS', role: 'Program Coordinator (BLIS and MLIS)', edu: 'Master of Library and Information Science', photo: base + 'cantel-754x1024.jpg' },
    { name: 'Lennon D. Pajar', role: 'Computer Laboratory Coordinator', edu: 'To be updated', photo: base + 'pajar-754x1024.jpg' }
  ]},
  { name: 'IT and IS Faculty', members: [
    { name: 'Leo Paulo B. Beldia', role: 'BSIT and BSIS Program', edu: 'To be updated', photo: base + 'beldia-754x1024.jpg' },
    { name: 'Lesley Joy L. Dignadice, MBA', role: 'BSIT and BSIS Program', edu: 'Master in Business Administration', photo: base + 'dignadice-1-754x1024.jpg' },
    { name: 'Rodolfo C. Eregia, Jr.', role: 'BSIT and BSIS Program', edu: 'To be updated', photo: base + 'eregia-754x1024.jpg' },
    { name: 'Donie S. Jardeleza, MSCS', role: 'BSIT and BSIS Program', edu: 'Master of Science in Computer Science', photo: base + 'jardleza-754x1024.jpg' },
    { name: 'Antonio M. Montaño, Jr.', role: 'BSIT and BSIS Program', edu: 'To be updated', photo: base + 'montano-754x1024.jpg' },
    { name: 'Rose Leah Joy A. Ojacastro, MSCS', role: 'BSIT and BSIS Program', edu: 'Master of Science in Computer Science', photo: base + 'ojacastro-754x1024.jpg' }
  ]},
  { name: 'Computer Science Faculty', members: [
    { name: 'Pedro Peter Rhys B. Cambronero, MSCS', role: 'BSCS Program', edu: 'Master of Science in Computer Science', photo: base + 'cambronero-754x1024.jpg' },
    { name: 'Ma. Sheila C. Sapul, Ph.D.', role: 'BSCS Program', edu: 'Doctor of Philosophy', photo: base + 'sapul-754x1024.jpg' }
  ]},
  { name: 'Staff', members: [
    { name: 'Chrislyn C. Castaño', role: 'Secretary', edu: 'To be updated', photo: base + 'castano-754x1024.jpg' },
    { name: 'A.M.P. Latter P. Taasan', role: 'Computer Laboratory Technician', edu: 'To be updated', photo: base + 'taasan-754x1024.jpg' },
    { name: 'Chriselda Elaine Ador', role: 'Guidance Counselor', edu: 'To be updated', photo: base + 'ador-754x1024.jpg' },
    { name: 'Donna May Rivera', role: 'Library Liaison Officer', edu: 'To be updated', photo: base + 'rivera-754x1024.png' }
  ]}
]

export const partners = [
  { name: 'Oracle Academy', logo: base + 'Oracle_Academy_rgb.png' },
  { name: 'Cisco Networking Academy', logo: base + '1024px-Cisco_academy_logo.svg_-300x300.png' },
  { name: 'Acer', logo: base + 'acer-300x300.jpg' },
  { name: 'Huawei ICT Academy', logo: base + 'huawei-academy-logo-300x300.jpg' }
]
