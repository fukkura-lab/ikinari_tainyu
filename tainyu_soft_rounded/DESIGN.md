# Design System Document

## 1. Overview & Creative North Star: "The Digital Companion"

This design system moves away from the clinical, transactional nature of traditional job boards to create a "Digital Companion" experience. While the request specifies a "friendly app" feel like LINE or Mercari, we achieve a premium, custom edge by treating the interface as a soft, organic conversation rather than a rigid database.

The **Creative North Star** is **"Organic Approachability."** We break the "template" look by utilizing intentional asymmetry, overlapping elements, and a radical departure from structural lines. By prioritizing tonal depth and "breathable" white space, we ensure the service feels like a trusted friend guiding the user through the Kitashinchi nightlife scene—warm, safe, and effortlessly modern.

---

## 2. Colors & Surface Philosophy

The palette is built on a foundation of warm neutrals to evoke comfort, with high-energy "Coral Salmon" accents to drive action.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through:
- **Background Color Shifts:** Using `surface-container-low` against a `surface` background.
- **Tonal Transitions:** Defining edges through soft changes in value rather than structural strokes.

### Surface Hierarchy & Nesting
We treat the UI as a series of physical layers—like stacked sheets of fine, recycled paper. 
- **Base Layer:** `surface` (#fef5ee) for the main application background.
- **Content Cards:** `surface-container-lowest` (#ffffff) to provide a "pop" of clean white.
- **Secondary Grouping:** `surface-container` (#f0e6df) for nested elements like input groups or secondary info blocks.

### The "Glass & Gradient" Rule
To elevate the "friendly" aesthetic into something signature:
- **Floating Elements:** Use `surface` colors at 80% opacity with a `backdrop-filter: blur(12px)` for navigation bars or floating action buttons.
- **Signature Textures:** Use a subtle linear gradient for primary CTAs (e.g., `primary` to `primary-container`) to provide a "squishy," tactile feel that flat colors lack.

---

### 3. Typography: The Conversational Voice

The typography is designed to feel like a handwritten note from a friend—legible but soft. 

*   **Japanese (Zen Maru Gothic):** Used for all primary messaging to maintain a "Rounded Gothic" friendliness.
*   **Numbers/English (Nunito/Quicksand):** Used to give the interface a modern, international flair.

**Hierarchy of Tone:**
- **Display (3.5rem - 2.25rem):** Use for "I" perspective questions (e.g., "Can I get offers too?"). Set with `Light` weight to avoid looking aggressive.
- **Headline & Title (2rem - 1rem):** Use for navigating the user journey.
- **Body (1rem - 0.75rem):** Reserved for descriptions. Use `surface-on-variant` (#605a56) to keep the contrast soft and readable without being "harsh black."
- **Label (0.75rem - 0.6875rem):** Smallest text, used for metadata and micro-copy.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows and borders create "visual noise." We achieve hierarchy through **Tonal Layering**.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a natural "lift" that feels integrated into the environment.
- **Ambient Shadows:** For high-priority floating elements, use extra-diffused shadows:
  - `box-shadow: 0 12px 32px rgba(170, 44, 50, 0.06);` (A tinted shadow using the primary red/salmon hue to mimic natural light reflection).
- **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in forms), use `outline-variant` at 20% opacity. **Never use 100% opaque borders.**
- **Glassmorphism:** Navigation headers should always use a blurred background, allowing the warm `background` (#fef5ee) to bleed through, softening the transition as the user scrolls.

---

## 5. Components

### Buttons (The "Action Bubbles")
- **Primary:** `primary` (#aa2c32) background with `on-primary` text. Radius: `full`. Use gradients for depth. Labeling: "Get Offers" or "Start Now."
- **Secondary:** `secondary-container` background. No border. Radius: `xl`.
- **States:** On press, scale the button down slightly (0.98) to provide tactile feedback.

### Cards & Lists (The "Paper Stack")
- **Rule:** Forbid the use of divider lines. 
- **Styling:** Use `md` (1.5rem) or `lg` (2rem) border radius. Separate list items using `vertical white space` (16px - 24px) or by alternating background tones between `surface-container-low` and `surface-container-lowest`.

### Input Fields
- **Styling:** `surface-container-highest` background. Large `1rem` corner radius. 
- **Interaction:** On focus, the background shifts to `surface-container-lowest` and a "Ghost Border" of 20% `primary` appears.

### Signature Component: The "Match Bubble"
- A bespoke component for this system. A large, rounded chat-style bubble using `tertiary-container` to highlight "New Offers" from shops, using the "I" perspective in the micro-copy.

---

## 6. Do's and Don'ts

### Do
- **Use Emojis Naturally:** Integrate them into labels, e.g., "Get Offers 💌".
- **Asymmetric Layouts:** Allow cards to have varying heights or slight offsets to feel "organic" rather than "grid-locked."
- **Soft Contrast:** Ensure text is always readable, but avoid #000000. Use our `on-surface` (#322e2a) for high-contrast needs.

### Don't
- **Don't use "Register":** Use friendly, result-oriented language like "See who wants to meet me."
- **Don't use 90-degree corners:** Everything must have a minimum radius of `sm` (0.5rem), with most containers using `lg` (2rem).
- **Don't use "High Income" buzzwords:** Focus on the "Matching" and "Experience" aspect. Let the premium UI communicate the quality of the work, not loud marketing text.
- **Don't use Dividers:** If you feel the need to add a line, add 16px of padding instead.