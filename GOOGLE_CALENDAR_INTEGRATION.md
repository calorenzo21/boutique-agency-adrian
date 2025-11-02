# Google Calendar Integration Documentation

## Overview
This document describes the implementation of the Google Calendar integration for the "Consultoría Gratuita" (Free Consultation) feature.

## Implementation Details

### New Page: `/consultoria`
- **Location**: `app/consultoria/page.tsx`
- **Purpose**: Dedicated page for scheduling free consultations
- **Features**:
  - Responsive design matching the site's brand
  - Google Calendar widget integration
  - Benefits section explaining what to expect
  - SEO optimized with proper metadata

### Google Calendar Integration
- **Widget URL**: `https://calendar.google.com/calendar/appointments/schedules/AcZssZ2YVrry2EGC7luZLBhvNcJBXizS0doT4kKo0thTRwqPjH7xAHXTRlmMbIZT4QBUNNrA6TNiJWI8?gv=true`
- **Implementation**: Embedded iframe with custom styling
- **Height**: 600px for optimal viewing experience
- **Loading**: Lazy loading for better performance

### Brand Integration & Styling
Since Google Calendar iframes have security restrictions that prevent direct CSS customization, we implemented several creative solutions:

#### **1. Custom Container Styling**
- **Gradient Border**: Burgundy gradient border around the calendar
- **Hover Effects**: Subtle shadow and transform effects
- **Rounded Corners**: Consistent with site design

#### **2. Visual Enhancements**
- **CSS Filters**: Applied subtle color adjustments to harmonize with brand colors
- **Brand Colors**: `#6B0F2A` (primary burgundy) and `#8B1538` (secondary burgundy)
- **Smooth Transitions**: Enhanced user experience with CSS transitions

#### **3. Additional UI Elements**
- **Information Banner**: Below calendar with booking confirmation details
- **Brand Accents**: Subtle burgundy elements throughout the interface

### Updated Components
All "Consultoría Gratuita" buttons navigate to `/consultoria`:

1. **Hero Section** (`components/sections/hero-section.tsx`)
2. **CTA Section** (`components/sections/cta-section.tsx`)
3. **Navbar** (`components/layout/navbar.tsx`)
4. **Footer** (`components/layout/footer.tsx`)

### Technical Features
- **Performance**: Lazy loading iframe
- **SEO**: Optimized metadata via separate layout file
- **Accessibility**: Proper iframe title and ARIA labels
- **Responsive**: Mobile-first design approach
- **Animation**: Framer Motion animations for smooth UX

### Limitations & Workarounds
Google Calendar scheduling widgets have inherent limitations:

#### **Limitations**:
- Cannot directly modify internal calendar colors due to iframe security
- Limited customization of Google's UI elements
- Cross-origin restrictions prevent deep styling

#### **Workarounds Implemented**:
1. **Container Styling**: Custom wrapper with brand colors
2. **CSS Filters**: Subtle color adjustments to the entire iframe
3. **Visual Context**: Surrounding elements that reinforce brand identity
4. **Hover Effects**: Interactive elements that enhance the experience

### Best Practices Implemented
1. **iframe Security**: Proper attributes and loading strategies
2. **Performance**: Lazy loading and optimized rendering
3. **SEO**: Comprehensive metadata for search engines
4. **UX**: Clear expectations and smooth navigation
5. **Responsive Design**: Works on all device sizes
6. **Brand Consistency**: Maintains visual identity despite iframe limitations

## Alternative Customization Options
If more extensive calendar customization is needed in the future, consider:

1. **Google Calendar API**: Build custom booking interface
2. **Third-party Solutions**: Calendly, Acuity, or similar with better customization
3. **Custom Solution**: Build proprietary booking system
4. **Hybrid Approach**: Combine Google Calendar backend with custom frontend

## Usage
Users can now click any "Consultoría Gratuita" button throughout the site to access the dedicated calendar page where they can schedule their free 30-minute consultation directly through Google Calendar's scheduling interface.
