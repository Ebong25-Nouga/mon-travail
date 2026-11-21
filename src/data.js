export const WA_NUMBER = '237683258039'
export const PHONE = '+237671204934'
export const PHONE_LABEL = '+237 671 204 934'
export const WA_LABEL = '+237 683 258 039'
export const ADDRESS = 'Main Street, Molyko, Buea'
export const ADDRESS_HINT = "Opposite NFC Bank, same building as Ham's Lounge"
export const MAP_QUERY = 'NFC Bank Molyko Buea Cameroon'

// Lien WhatsApp avec message pré-rempli
export const waLink = (text) =>
  text ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}` : `https://wa.me/${WA_NUMBER}`

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Bridal', href: '#occasions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '6', label: 'Beauty divisions' },
  { value: '7/7', label: 'Open every day' },
  { value: 'Molyko', label: 'Heart of Buea' },
]

export const marquee = [
  'Hair Styling',
  'Bridal Glam',
  'Gel & Acrylic Nails',
  'Facials',
  'Body Scrub & Wrap',
  'Massage',
  'Eyebrow Sculpt',
  'Hair Installation',
]

export const pillars = [
  { icon: 'verified_user', title: 'Meticulous Hygiene', text: 'Hospital-grade sanitization and single-use supplies for total peace of mind.' },
  { icon: 'auto_awesome', title: 'Comprehensive Menu', text: 'Hair, makeup, nails, facials and full body wellness in one venue.' },
  { icon: 'diamond', title: 'Bridal Specialists', text: 'Timeless looks for traditional and civil ceremonies.' },
  { icon: 'favorite', title: 'Empowering Self-Care', text: 'A peaceful retreat to breathe, reset and celebrate your beauty.' },
]

export const services = [
  {
    key: 'hair', icon: 'content_cut', title: 'Hair Services',
    text: 'Elevated hair design and installations tailored to texture, length and personal style.',
    tags: ['Hair Styling', 'Hair Installation', 'Deep Hair Care'],
    wa: 'Hello Miya Beauty! I would like to book Hair Services (Styling, Installation, Hair Care).',
  },
  {
    key: 'makeup', icon: 'brush', title: 'Makeup Artistry',
    text: 'Expert application for daylight radiance, evening glam and wedding days.',
    tags: ['Day Makeup', 'Evening Makeup', 'Bridal Glam'],
    wa: 'Hello Miya Beauty! I would like to book Makeup (Day, Evening, Bridal).',
  },
  {
    key: 'nails', icon: 'back_hand', title: 'Nail Care & Art',
    text: 'Precision cuticle grooming, nail sculpting and therapeutic hand and foot care.',
    tags: ['Classic Manicure', 'Spa Pedicure', 'Gel & Acrylic'],
    wa: 'Hello Miya Beauty! I would like to book Nail Care (Manicure, Pedicure, Nail Art).',
  },
  {
    key: 'skincare', icon: 'face', title: 'Skincare & Facials',
    text: 'Skin analysis, deep pore purification and antioxidant hydration treatments.',
    tags: ['Facials', 'Skin Cleansing', 'Consultations'],
    wa: 'Hello Miya Beauty! I would like to book a Skincare / Facial treatment.',
  },
  {
    key: 'body', icon: 'spa', title: 'Body Care & Spa',
    text: 'Full-sensory exfoliations, hydrating wraps and tension-melting massages.',
    tags: ['Body Scrub', 'Body Wrap', 'Massage'],
    wa: 'Hello Miya Beauty! I would like to book Body Care & Spa (Scrub, Wrap, Massage).',
  },
  {
    key: 'beauty', icon: 'face_retouching_natural', title: 'Beauty Care',
    text: 'Gentle hair removal, eyebrow grooming and personal beauty consultations.',
    tags: ['Hair Removal', 'Eyebrow Sculpt', 'Consultation'],
    wa: 'Hello Miya Beauty! I would like to book Beauty Care (Hair Removal, Eyebrows, Consultation).',
  },
]

export const occasions = [
  { icon: 'celebration', label: 'Traditional Wedding Looks' },
  { icon: 'church', label: 'Civil & White Wedding Glam' },
  { icon: 'nightlife', label: 'Evening Reception Styling' },
  { icon: 'groups', label: 'Bridal Train Packages' },
  { icon: 'auto_fix_high', label: 'Precision Hair Installation' },
  { icon: 'back_hand', label: 'Bridal Manicure & Pedicure' },
]

export const galleryFilters = [
  { key: 'all', label: 'All' },
  { key: 'hair', label: 'Hair' },
  { key: 'makeup', label: 'Makeup' },
  { key: 'nails', label: 'Nails' },
  { key: 'spa', label: 'Skin & Spa' },
]

export const gallery = [
  { img: 'g1', category: 'makeup hair', label: 'Bridal', caption: 'Bridal Glow & Hair Installation' },
  { img: 'g2', category: 'spa', label: 'Atmosphere', caption: 'Our Treatment Room' },
  { img: 'g3', category: 'nails', label: 'Nails', caption: 'Delicate Gel Manicure' },
  { img: 'g4', category: 'spa', label: 'Body Care', caption: 'Hot Stone Relaxation' },
  { img: 'g5', category: 'hair', label: 'Hair', caption: 'Protective Braids & Buns' },
  { img: 'g6', category: 'spa makeup', label: 'Skincare', caption: 'Hydrating Botanical Facial' },
]

export const why = [
  { n: '01', icon: 'domain', title: 'All-in-One Sanctuary', text: 'Every beauty service under one roof — save time without lowering the standard.' },
  { n: '02', icon: 'person', title: 'Bespoke Experience', text: 'Treatments tailored to your skin type, scalp condition and desired result.' },
  { n: '03', icon: 'brush', title: 'Artisan Precision', text: 'From lace installations to balanced palettes and sculpted nails.' },
  { n: '04', icon: 'self_improvement', title: 'Deep Serenity', text: 'A calm, odor-free and peaceful space dedicated to a full reset.' },
  { n: '05', icon: 'location_on', title: 'Central Molyko', text: "On Main Street, opposite NFC Bank, in the Ham's Lounge building." },
]

export const hours = [
  { day: 'Monday – Saturday', time: '8:00 AM – 7:30 PM' },
  { day: 'Sunday', time: '1:00 PM – 7:00 PM' },
]

export const serviceOptions = [
  'Hair Services (Styling, Installation, Care)',
  'Makeup (Day, Evening, Bridal)',
  'Nail Care (Manicure, Pedicure, Art)',
  'Skincare & Facials',
  'Body Care & Spa (Scrub, Wrap, Massage)',
  'Beauty Care (Hair Removal, Consultation)',
  'Bridal / Special Occasion Package',
]

export const timeOptions = [
  'Morning (9:00 – 11:30 AM)',
  'Mid-day (12:00 – 2:30 PM)',
  'Afternoon (3:00 – 5:00 PM)',
  'Evening (5:30 – 7:00 PM)',
]
